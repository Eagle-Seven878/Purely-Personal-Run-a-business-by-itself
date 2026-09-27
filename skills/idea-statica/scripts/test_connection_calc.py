"""Checks against published resistance tables and hand calculations.

Run: python -m unittest test_connection_calc.py
"""
import math
import unittest

import connection_calc as cc


class EurocodeBolts(unittest.TestCase):
    def test_shear_m20_88_threads(self):
        # 0.6 * 800 * 245 / 1.25 = 94.1 kN (SCI P363 tables)
        self.assertAlmostEqual(cc.ec_bolt_shear(20, "8.8"), 94.08, places=2)

    def test_shear_m20_109_uses_alpha_05(self):
        self.assertAlmostEqual(cc.ec_bolt_shear(20, "10.9"), 98.0, places=2)

    def test_shear_shank_gross_area(self):
        expected = 0.6 * 800 * math.pi * 400 / 4 / 1.25 / 1000
        self.assertAlmostEqual(cc.ec_bolt_shear(20, "8.8", threads_in_plane=False), expected, places=6)

    def test_tension(self):
        self.assertAlmostEqual(cc.ec_bolt_tension(20, "8.8"), 141.12, places=2)
        self.assertAlmostEqual(cc.ec_bolt_tension(24, "10.9"), 254.16, places=2)

    def test_bearing_end_edge_bolt(self):
        # d0 = 22, alpha_b = 40/66, k1 capped at 2.5
        expected = 2.5 * (40 / 66) * 510 * 20 * 10 / 1.25 / 1000
        self.assertAlmostEqual(cc.ec_bolt_bearing(20, "8.8", 10, "S355", 40, 35), expected, places=6)

    def test_bearing_inner_bolt(self):
        alpha_b = 70 / 66 - 0.25
        k1 = min(1.4 * 80 / 22 - 1.7, 2.5)
        expected = k1 * alpha_b * 510 * 20 * 10 / 1.25 / 1000
        got = cc.ec_bolt_bearing(20, "8.8", 10, "S355", 40, 35, 70, 80,
                                 end_bolt=False, edge_bolt=False)
        self.assertAlmostEqual(got, expected, places=6)

    def test_hole_clearance(self):
        self.assertEqual(cc.hole_d0(12), 13)
        self.assertEqual(cc.hole_d0(20), 22)
        self.assertEqual(cc.hole_d0(30), 33)

    def test_check_flags_detailing(self):
        r = cc.ec_bolt_check(20, "8.8", 10, "S355", e1=20, e2=35, Fv=10)
        self.assertEqual(r["status"], "FAIL")
        self.assertTrue(r["detailing_failures"])

    def test_interaction(self):
        r = cc.ec_bolt_check(20, "8.8", 15, "S355", 50, 50, Fv=47.04, Ft=98.784)
        # 0.5 + 0.5 = 1.0
        self.assertAlmostEqual(r["checks"]["interaction"]["value"], 1.0, places=3)

    def test_unknown_inputs_raise(self):
        with self.assertRaises(ValueError):
            cc.ec_bolt_shear(19, "8.8")
        with self.assertRaises(ValueError):
            cc.ec_bolt_bearing(20, "8.8", 10, "S999", 40, 35)


class EurocodeWelds(unittest.TestCase):
    def test_simplified_s355(self):
        fvw = 510 / (math.sqrt(3) * 0.9 * 1.25)
        r = cc.ec_weld_simplified(6, 200, "S355", 100)
        self.assertAlmostEqual(r["checks"]["weld"]["Rd"], round(fvw * 6 * 200 / 1000, 1))

    def test_throat_sizing_rounds_up(self):
        r = cc.ec_fillet_throat_required(300, 200, "S355")
        fvw = 510 / (math.sqrt(3) * 0.9 * 1.25)
        self.assertGreaterEqual(r["a_required_mm"] * fvw * 200 / 1000, 300)
        self.assertEqual(r["a_required_mm"], 6.0)

    def test_directional_matches_simplified_for_pure_longitudinal_shear(self):
        # tau_par only: sqrt(3) tau <= fu/(bw gM2) -> same as simplified
        fvw = 510 / (math.sqrt(3) * 0.9 * 1.25)
        r = cc.ec_weld_directional("S355", 0, 0, fvw)
        self.assertAlmostEqual(r["checks"]["equivalent"]["util_%"], 100.0, places=1)


class TStub(unittest.TestCase):
    def test_modes(self):
        leff, tf, m, e, fy = 180, 20, 40, 50, 355
        Mpl = 0.25 * leff * tf ** 2 * fy / 1e6
        Ft = 2 * cc.ec_bolt_tension(20, "10.9")
        n = min(e, 1.25 * m)
        F1 = 4 * Mpl / 0.040
        F2 = (2 * Mpl + n / 1000 * Ft) / ((m + n) / 1000)
        r = cc.ec_tstub(leff, leff, tf, "S355", m, e, 2, 20, "10.9", Ft=100)
        self.assertAlmostEqual(r["F_T1_Rd"], round(F1, 1))
        self.assertAlmostEqual(r["F_T2_Rd"], round(F2, 1))
        self.assertAlmostEqual(r["checks"]["tstub"]["Rd"], round(min(F1, F2, Ft), 1))

    def test_thin_plate_governs_mode_1(self):
        r = cc.ec_tstub(150, 150, 8, "S275", 40, 50, 2, 24, "10.9")
        self.assertTrue(r["checks"]["tstub"]["governing"].startswith("Mode 1"))

    def test_leff_individual(self):
        cp, nc, l1, l2 = cc.ec_leff_individual(40, 50)
        self.assertAlmostEqual(cp, 2 * math.pi * 40)
        self.assertAlmostEqual(nc, 222.5)
        self.assertAlmostEqual(l1, min(cp, nc))
        self.assertEqual(l2, nc)


class Design(unittest.TestCase):
    def test_bolt_count_covers_load(self):
        r = cc.ec_design_bolts_shear(450, 20, "8.8", 10, "S355")
        self.assertGreaterEqual(r["group_Rd_kN"], 450)
        self.assertLessEqual((r["bolts_required"] - 1) * r["per_bolt_Rd_kN"], 450)

    def test_minimum_two_bolts(self):
        self.assertEqual(cc.ec_design_bolts_shear(5, 20, "8.8", 10, "S355")["bolts_required"], 2)


class Aisc(unittest.TestCase):
    def test_a325n_three_quarter_inch_shear(self):
        # AISC Manual Table 7-1: 17.9 kips = 79.6 kN
        r = cc.aisc_bolt_check(19.05, "A325", "N", t=25, Fu=448, lc=50, Vu=0)
        self.assertAlmostEqual(r["checks"]["shear"]["Rd"] / 4.448, 17.9, delta=0.1)

    def test_weld_e70_per_sixteenth(self):
        # 1.392 kips/in per sixteenth; 5/16 in over 1 in = 6.96 kips
        r = cc.aisc_weld_check(7.9375, 25.4, 482, Pu=0)
        self.assertAlmostEqual(r["checks"]["weld"]["Rd"] / 4.448, 6.96, delta=0.05)

    def test_transverse_weld_increase(self):
        r0 = cc.aisc_weld_check(8, 100, 482, Pu=0)["checks"]["weld"]["Rd"]
        r90 = cc.aisc_weld_check(8, 100, 482, Pu=0, theta_deg=90)["checks"]["weld"]["Rd"]
        self.assertAlmostEqual(r90 / r0, 1.5, places=2)


if __name__ == "__main__":
    unittest.main()
