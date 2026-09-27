"""End plate moment resistance and national annex tests.

Spot values are independent hand calculations of EN 1993-1-8 for the
example joint (IPE 400 / HEB 300 / 20 mm plate / M24 10.9, UK NA).
Run: python -m unittest discover -s .
"""
import copy
import json
import math
import os
import unittest

import connection_calc as cc
from end_plate_moment import end_plate_moment_resistance as mj

HERE = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(HERE, "..", "examples", "extended_end_plate.json")) as f:
    BASE = json.load(f)


def run(spec=None, annex="UK", **changes):
    cc.set_annex(annex)
    s = copy.deepcopy(spec or BASE)
    for path, value in changes.items():
        part, key = path.split("__")
        s[part][key] = value
    return mj(s)


class Annexes(unittest.TestCase):
    def tearDown(self):
        cc.set_annex("EN")
        cc.clear_overrides()

    def test_en_table31(self):
        cc.set_annex("EN")
        self.assertEqual(cc.steel_strength("S355", 20), (355, 510))
        self.assertEqual(cc.steel_strength("S355", 50), (335, 470))

    def test_uk_product_standard_by_thickness(self):
        cc.set_annex("UK")
        self.assertEqual(cc.steel_strength("S355", 12), (355, 470))
        self.assertEqual(cc.steel_strength("S355", 20), (345, 470))
        self.assertEqual(cc.steel_strength("S275", 50), (255, 410))

    def test_de_gamma_m1(self):
        self.assertEqual(cc.set_annex("DE").gM1, 1.1)

    def test_uk_weld_matches_sci(self):
        # SCI P363: S355 fillet, fvw,d = 470 / (sqrt3 * 0.9 * 1.25) = 241.2 MPa
        cc.set_annex("UK")
        r = cc.ec_weld_simplified(6, 200, "S355", 100, t=12)
        self.assertAlmostEqual(r["checks"]["weld"]["fvw_d_MPa"], 241.2, places=1)

    def test_override(self):
        cc.set_annex("EN")
        cc.override_strength("S355", fu=470)
        self.assertEqual(cc.steel_strength("S355", 10), (355, 470))

    def test_unknown(self):
        with self.assertRaises(ValueError):
            cc.set_annex("FR")
        cc.set_annex("UK")
        with self.assertRaises(ValueError):
            cc.steel_strength("S460", 10)


class EndPlateSpotValues(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.r = run()

    @classmethod
    def tearDownClass(cls):
        cc.set_annex("EN")

    def test_column_shear_area_matches_published_heb300(self):
        self.assertAlmostEqual(self.r["geometry"]["Avc_mm2"], 4743, delta=5)

    def test_beam_plastic_moment(self):
        self.assertAlmostEqual(self.r["Mpl_Rd_beam_kNm"], 1307e3 * 355 / 1e6, places=1)

    def test_extension_row_end_plate_mode_2(self):
        # leff = 0.5 bp = 100; mx = 45 - 0.8*10*sqrt2; n = min(45, 1.25 mx)
        mx = 45 - 0.8 * 10 * math.sqrt(2)
        Mpl = 0.25 * 100 * 20 ** 2 * 345          # UK NA: fy = 345 for 16 < t <= 40
        n = min(45, 1.25 * mx)
        Bt = 0.9 * 1000 * 353 / 1.25
        F2 = (2 * Mpl + n * 2 * Bt) / (mx + n) / 1e3
        self.assertAlmostEqual(self.r["rows"][0]["Ftr_Rd_kN"], round(F2, 1), places=1)

    def test_first_row_below_flange_alpha(self):
        m = 55 - 4.3 - 0.8 * 6 * math.sqrt(2)
        Mpl = 0.25 * 4.45 * m * 20 ** 2 * 345
        Bt = 0.9 * 1000 * 353 / 1.25
        F2 = (2 * Mpl + 45 * 2 * Bt) / (m + 45) / 1e3
        self.assertAlmostEqual(self.r["rows"][1]["Ftr_Rd_kN"], round(F2, 1), places=1)

    def test_panel_shear(self):
        V = 0.9 * 355 * 4745 / math.sqrt(3) / 1e3
        self.assertAlmostEqual(self.r["compression_limits_kN"]["column web panel shear"], V, delta=0.5)

    def test_total_tension_capped_by_compression(self):
        cap = min(self.r["compression_limits_kN"].values())
        self.assertLessEqual(self.r["sum_Ftr_kN"], cap + 0.1)

    def test_moment_is_sum_of_rows(self):
        total = sum(r["Ftr_Rd_kN"] * r["h_r_mm"] for r in self.r["rows"]) / 1e3
        self.assertAlmostEqual(self.r["Mj_Rd_kNm"], total, delta=0.5)


class Cli(unittest.TestCase):
    def test_annex_reaches_end_plate_module(self):
        import subprocess
        import sys
        ex = os.path.join(HERE, "..", "examples", "extended_end_plate.json")
        out = {}
        for annex in ("EN", "UK"):
            res = subprocess.run([sys.executable, os.path.join(HERE, "connection_calc.py"),
                                  "--annex", annex, "ec-end-plate", "--input", ex],
                                 capture_output=True, text=True, check=True)
            out[annex] = json.loads(res.stdout)["Mj_Rd_kNm"]
        self.assertEqual(out["UK"], run(annex="UK")["Mj_Rd_kNm"])
        self.assertEqual(out["EN"], run(annex="EN")["Mj_Rd_kNm"])
        cc.set_annex("EN")


class EndPlateBehaviour(unittest.TestCase):
    def tearDown(self):
        cc.set_annex("EN")

    def test_thicker_plate_never_weaker(self):
        prev = 0
        for tp in (12, 15, 20, 25, 30):
            m = run(plate__tp=tp)["Mj_Rd_kNm"]
            self.assertGreaterEqual(m, prev - 0.1)
            prev = m

    def test_bigger_column_helps_when_column_governs(self):
        weak = run()["Mj_Rd_kNm"]
        strong = run(column__tw=19, column__tf=30)["Mj_Rd_kNm"]
        self.assertGreater(strong, weak)

    def test_1_9_rule(self):
        s = copy.deepcopy(BASE)
        s["plate"]["tp"] = 40
        s["column"].update({"tf": 40, "tw": 30})
        s["rows"] = [-45, 65]
        r = run(spec=s)
        rows = r["rows"]
        strong = [x for x in rows if x["Ftr_Rd_kN"] > 1.9 * r["bolt_Ft_Rd_kN"]]
        self.assertTrue(strong, "test setup should give a row above 1.9 Ft,Rd")
        x = strong[0]
        for row in rows:
            if row["h_r_mm"] < x["h_r_mm"]:
                self.assertLessEqual(row["Ftr_Rd_kN"],
                                     x["Ftr_Rd_kN"] * row["h_r_mm"] / x["h_r_mm"] + 0.1)

    def test_flush_plate_no_extension(self):
        s = copy.deepcopy(BASE)
        s["rows"] = [65, 155]
        r = run(spec=s)
        self.assertGreater(r["Mj_Rd_kNm"], 0)
        self.assertNotIn("mx", r["geometry"])

    def test_en_vs_uk_differ(self):
        self.assertNotEqual(run(annex="EN")["Mj_Rd_kNm"], run(annex="UK")["Mj_Rd_kNm"])

    def test_row_inside_flange_rejected(self):
        s = copy.deepcopy(BASE)
        s["rows"] = [5, 65]
        with self.assertRaises(ValueError):
            run(spec=s)

    def test_row_below_compression_centre_rejected(self):
        s = copy.deepcopy(BASE)
        s["rows"] = [65, 395]
        with self.assertRaises(ValueError):
            run(spec=s)

    def test_status(self):
        s = copy.deepcopy(BASE)
        s["M_Ed"] = 10000
        self.assertEqual(run(spec=s)["status"], "FAIL")


if __name__ == "__main__":
    unittest.main()
