#!/usr/bin/env python3
"""Hand-calculation and preliminary design for steel connections.

Eurocode EN 1993-1-8 (recommended partial factors, no national annex) and
AISC 360-16 LRFD for bolts and fillet welds. Units: N, mm, MPa, kN, kNm.

Use it to size a joint before building it in IDEA StatiCa, and to sanity
check CBFEM results. It is not a substitute for the CBFEM model or for the
engineer of record. Standard library only.

Examples:
    python connection_calc.py ec-bolt --d 20 --grade 8.8 --t 12 --steel S355 \
        --e1 40 --e2 35 --p1 70 --p2 80 --Fv 60 --Ft 40
    python connection_calc.py ec-weld --a 6 --L 200 --steel S355 --F 250
    python connection_calc.py ec-tstub --leff 180 --tf 20 --steel S355 \
        --m 40 --e 50 --bolts 2 --d 20 --grade 10.9 --Ft 300
    python connection_calc.py ec-design-bolts --V 450 --d 20 --grade 8.8 \
        --t 10 --steel S355 --planes 1
    python connection_calc.py aisc-bolt --d 20 --group A325 --threads N \
        --t 12 --Fu 450 --lc 30 --Vu 80 --Tu 40
    python connection_calc.py aisc-weld --w 8 --L 200 --FEXX 482 --Pu 300
"""
import argparse
import json
import math

# ---------------------------------------------------------------------------
# Material and bolt data
# ---------------------------------------------------------------------------

# EN 1993-1-1 Table 3.1, t <= 40 mm: (fy, fu) in MPa
STEEL_EC = {
    "S235": (235, 360),
    "S275": (275, 430),
    "S355": (355, 510),
    "S420": (420, 520),
    "S450": (440, 550),
    "S460": (460, 540),
}

# EN 1993-1-8 Table 4.1 correlation factor
BETA_W = {"S235": 0.8, "S275": 0.85, "S355": 0.9, "S420": 1.0, "S450": 1.0, "S460": 1.0}

# EN 1993-1-8 Table 3.1: (fyb, fub)
BOLT_GRADE_EC = {
    "4.6": (240, 400),
    "4.8": (320, 400),
    "5.6": (300, 500),
    "5.8": (400, 500),
    "6.8": (480, 600),
    "8.8": (640, 800),
    "10.9": (900, 1000),
}

# Tensile stress area As (mm2), ISO 898-1
BOLT_AS = {12: 84.3, 14: 115, 16: 157, 18: 192, 20: 245, 22: 303, 24: 353,
           27: 459, 30: 561, 33: 694, 36: 817}

# AISC 360-16 Table J3.2 nominal stresses, converted to MPa
# (Fnt, Fnv threads included N, Fnv threads excluded X)
BOLT_GROUP_AISC = {
    "A325": (620, 372, 469),   # 90 / 54 / 68 ksi  (Group A)
    "A490": (780, 469, 579),   # 113 / 68 / 84 ksi (Group B)
}

GAMMA_M0 = 1.0
GAMMA_M2 = 1.25
GAMMA_M3 = 1.25  # slip resistance at ULS
PHI_AISC = 0.75


def hole_d0(d):
    """Normal clearance hole, EN 1090-2 Table 11."""
    if d <= 14:
        return d + 1
    if d <= 24:
        return d + 2
    return d + 3


def _steel(grade):
    try:
        return STEEL_EC[grade]
    except KeyError:
        raise ValueError(f"Unknown steel grade {grade!r}; use one of {sorted(STEEL_EC)}")


def _bolt(d, grade):
    if d not in BOLT_AS:
        raise ValueError(f"Unknown bolt diameter M{d}; use one of {sorted(BOLT_AS)}")
    if grade not in BOLT_GRADE_EC:
        raise ValueError(f"Unknown bolt grade {grade!r}; use one of {sorted(BOLT_GRADE_EC)}")
    return BOLT_AS[d], BOLT_GRADE_EC[grade][1]


def _util(demand, capacity):
    return round(100.0 * demand / capacity, 1) if capacity > 0 else float("inf")


# ---------------------------------------------------------------------------
# Eurocode EN 1993-1-8: bolts (Table 3.4)
# ---------------------------------------------------------------------------

def ec_bolt_shear(d, grade, planes=1, threads_in_plane=True):
    """Fv,Rd per shear plane x planes, kN."""
    As, fub = _bolt(d, grade)
    if threads_in_plane:
        alpha_v = 0.6 if grade in ("4.6", "5.6", "8.8") else 0.5
        area = As
    else:
        alpha_v = 0.6
        area = math.pi * d ** 2 / 4
    return planes * alpha_v * fub * area / GAMMA_M2 / 1000


def ec_bolt_tension(d, grade, countersunk=False):
    """Ft,Rd, kN."""
    As, fub = _bolt(d, grade)
    k2 = 0.63 if countersunk else 0.9
    return k2 * fub * As / GAMMA_M2 / 1000


def ec_bolt_bearing(d, grade, t, steel, e1, e2, p1=None, p2=None,
                    end_bolt=True, edge_bolt=True):
    """Fb,Rd, kN. EN 1993-1-8:2005 Table 3.4, normal holes.

    p1/p2 may be None for a single bolt in that direction.
    """
    _, fub = _bolt(d, grade)
    _, fu = _steel(steel)
    d0 = hole_d0(d)
    if end_bolt:
        alpha_d = e1 / (3 * d0)
    else:
        if p1 is None:
            raise ValueError("p1 is required for an inner bolt")
        alpha_d = p1 / (3 * d0) - 0.25
    alpha_b = min(alpha_d, fub / fu, 1.0)
    if edge_bolt:
        k1_terms = [2.8 * e2 / d0 - 1.7, 2.5]
        if p2 is not None:
            k1_terms.append(1.4 * p2 / d0 - 1.7)
    else:
        if p2 is None:
            raise ValueError("p2 is required for an inner bolt")
        k1_terms = [1.4 * p2 / d0 - 1.7, 2.5]
    k1 = min(k1_terms)
    if k1 <= 0 or alpha_b <= 0:
        return 0.0
    return k1 * alpha_b * fu * d * t / GAMMA_M2 / 1000


def ec_punching(d, tp, steel, dm=None):
    """Bp,Rd, kN. dm defaults to 1.7 d (mean of head across flats/points)."""
    _, fu = _steel(steel)
    dm = dm or 1.7 * d
    return 0.6 * math.pi * dm * tp * fu / GAMMA_M2 / 1000


def ec_slip(d, grade, mu=0.3, n_surfaces=1, ks=1.0, Ft_Ed=0.0):
    """Fs,Rd at ULS, kN (Category C), reduced for applied tension."""
    As, fub = _bolt(d, grade)
    Fp_C = 0.7 * fub * As / 1000
    return ks * n_surfaces * mu * (Fp_C - 0.8 * Ft_Ed) / GAMMA_M3


def ec_bolt_check(d, grade, t, steel, e1, e2, p1=None, p2=None, Fv=0.0, Ft=0.0,
                  planes=1, threads_in_plane=True, end_bolt=True, edge_bolt=True):
    """Full check of one bolt. Fv, Ft are design forces per bolt, kN."""
    Fv_Rd = ec_bolt_shear(d, grade, planes, threads_in_plane)
    Ft_Rd = ec_bolt_tension(d, grade)
    Fb_Rd = ec_bolt_bearing(d, grade, t, steel, e1, e2, p1, p2, end_bolt, edge_bolt)
    Bp_Rd = ec_punching(d, t, steel)
    interaction = Fv / Fv_Rd + Ft / (1.4 * Ft_Rd)
    d0 = hole_d0(d)
    detailing = []
    if e1 < 1.2 * d0:
        detailing.append(f"e1 = {e1} < 1.2 d0 = {1.2 * d0:.1f}")
    if e2 < 1.2 * d0:
        detailing.append(f"e2 = {e2} < 1.2 d0 = {1.2 * d0:.1f}")
    if p1 is not None and p1 < 2.2 * d0:
        detailing.append(f"p1 = {p1} < 2.2 d0 = {2.2 * d0:.1f}")
    if p2 is not None and p2 < 2.4 * d0:
        detailing.append(f"p2 = {p2} < 2.4 d0 = {2.4 * d0:.1f}")
    checks = {
        "shear": {"Ed": Fv, "Rd": round(Fv_Rd, 1), "util_%": _util(Fv, Fv_Rd)},
        "bearing": {"Ed": Fv, "Rd": round(Fb_Rd, 1), "util_%": _util(Fv, Fb_Rd)},
        "tension": {"Ed": Ft, "Rd": round(Ft_Rd, 1), "util_%": _util(Ft, Ft_Rd)},
        "punching": {"Ed": Ft, "Rd": round(Bp_Rd, 1), "util_%": _util(Ft, Bp_Rd)},
        "interaction": {"value": round(interaction, 3), "util_%": round(100 * interaction, 1)},
    }
    return _summarise("EN 1993-1-8 bolt", checks, {"d0": d0, "detailing_failures": detailing})


# ---------------------------------------------------------------------------
# Eurocode EN 1993-1-8: fillet welds (4.5.3)
# ---------------------------------------------------------------------------

def ec_weld_simplified(a, L, steel, F):
    """Simplified method (4.5.3.3): resultant force F (kN) on throat a x length L."""
    _, fu = _steel(steel)
    fvw_d = fu / (math.sqrt(3) * BETA_W[steel] * GAMMA_M2)
    Fw_Rd = fvw_d * a * L / 1000
    checks = {"weld": {"Ed": F, "Rd": round(Fw_Rd, 1), "util_%": _util(F, Fw_Rd),
                       "fvw_d_MPa": round(fvw_d, 1)}}
    detailing = []
    if a < 3:
        detailing.append(f"a = {a} mm < 3 mm minimum throat")
    if L < max(30, 6 * a):
        detailing.append(f"L = {L} < max(30, 6a) = {max(30, 6 * a)} mm")
    return _summarise("EN 1993-1-8 fillet weld (simplified)", checks,
                      {"detailing_failures": detailing})


def ec_weld_directional(steel, sigma_perp, tau_perp, tau_par):
    """Directional method (4.5.3.2), stresses on throat in MPa."""
    _, fu = _steel(steel)
    lim1 = fu / (BETA_W[steel] * GAMMA_M2)
    lim2 = 0.9 * fu / GAMMA_M2
    sigma_eq = math.sqrt(sigma_perp ** 2 + 3 * (tau_perp ** 2 + tau_par ** 2))
    checks = {
        "equivalent": {"Ed": round(sigma_eq, 1), "Rd": round(lim1, 1), "util_%": _util(sigma_eq, lim1)},
        "normal": {"Ed": abs(sigma_perp), "Rd": round(lim2, 1), "util_%": _util(abs(sigma_perp), lim2)},
    }
    return _summarise("EN 1993-1-8 fillet weld (directional)", checks, {})


def ec_fillet_throat_required(F, L, steel, step=1.0):
    """Smallest throat a (mm, rounded up to `step`) for resultant F (kN) over L (mm)."""
    _, fu = _steel(steel)
    fvw_d = fu / (math.sqrt(3) * BETA_W[steel] * GAMMA_M2)
    a = F * 1000 / (fvw_d * L)
    a = max(3.0, math.ceil(a / step - 1e-9) * step)
    return {"a_required_mm": a, "leg_mm": round(a * math.sqrt(2), 1), "fvw_d_MPa": round(fvw_d, 1)}


# ---------------------------------------------------------------------------
# Eurocode EN 1993-1-8 6.2.4: equivalent T-stub in tension
# ---------------------------------------------------------------------------

def ec_leff_individual(m, e):
    """Individual bolt row, unstiffened flange (Table 6.4 / 6.6 simple case).

    Returns (leff_cp, leff_nc, leff_1, leff_2). Rows next to stiffeners or
    beam flanges need the alpha-factor patterns from Table 6.6.
    """
    leff_cp = 2 * math.pi * m
    leff_nc = 4 * m + 1.25 * e
    leff_1 = min(leff_cp, leff_nc)
    leff_2 = leff_nc
    return leff_cp, leff_nc, leff_1, leff_2


def ec_tstub(leff_1, leff_2, tf, steel, m, e, n_bolts, d, grade, Ft=0.0):
    """Design resistance of a T-stub flange (Table 6.2, method 1, prying possible).

    leff_1: effective length for mode 1, leff_2 for mode 2 (mm)
    tf: flange / end plate thickness (mm); m, e per Figure 6.2 (mm)
    n_bolts: bolts in the row (usually 2); Ft: applied tension on the row (kN)
    """
    fy, _ = _steel(steel)
    Mpl_1 = 0.25 * leff_1 * tf ** 2 * fy / GAMMA_M0 / 1e6  # kNm
    Mpl_2 = 0.25 * leff_2 * tf ** 2 * fy / GAMMA_M0 / 1e6
    sum_Ft_Rd = n_bolts * ec_bolt_tension(d, grade)
    n = min(e, 1.25 * m)
    F1 = 4 * Mpl_1 / (m / 1000)
    F2 = (2 * Mpl_2 + n / 1000 * sum_Ft_Rd) / ((m + n) / 1000)
    F3 = sum_Ft_Rd
    modes = [(F1, "Mode 1 (flange yielding)"), (F2, "Mode 2 (bolt + flange)"),
             (F3, "Mode 3 (bolt failure)")]
    FT_Rd, mode = min(modes, key=lambda x: x[0])
    checks = {"tstub": {"Ed": Ft, "Rd": round(FT_Rd, 1), "util_%": _util(Ft, FT_Rd), "governing": mode}}
    return _summarise("EN 1993-1-8 T-stub", checks, {
        "F_T1_Rd": round(F1, 1), "F_T2_Rd": round(F2, 1), "F_T3_Rd": round(F3, 1),
        "n": round(n, 1), "note": "Method 1. Use leff from Table 6.4-6.6 for the actual row position.",
    })


# ---------------------------------------------------------------------------
# Design: size a bolt group in shear
# ---------------------------------------------------------------------------

def ec_design_bolts_shear(V, d, grade, t, steel, planes=1, threads_in_plane=True,
                          e1=None, e2=None, p1=None, p2=None):
    """Minimum bolt count for a concentric shear V (kN).

    Default geometry uses generous but common spacings (e1 = e2 = 2 d0,
    p1 = 3 d0, p2 = 3 d0), so bearing is taken with inner-bolt k1/alpha_b and
    end-bolt alpha_d, whichever is lower. Eccentricity is not included.
    """
    d0 = hole_d0(d)
    e1 = e1 or 2 * d0
    e2 = e2 or 2 * d0
    p1 = p1 or 3 * d0
    p2 = p2 or 3 * d0
    Fv_Rd = ec_bolt_shear(d, grade, planes, threads_in_plane)
    Fb_end = ec_bolt_bearing(d, grade, t, steel, e1, e2, p1, p2, end_bolt=True, edge_bolt=True)
    Fb_inner = ec_bolt_bearing(d, grade, t, steel, e1, e2, p1, p2, end_bolt=False, edge_bolt=True)
    per_bolt = min(Fv_Rd, Fb_end, Fb_inner)
    n = max(2, math.ceil(V / per_bolt - 1e-9))
    return {
        "method": "EN 1993-1-8 bolt group sizing (concentric shear)",
        "bolts_required": n,
        "per_bolt_Rd_kN": round(per_bolt, 1),
        "governing": "shear" if per_bolt == Fv_Rd else "bearing",
        "group_Rd_kN": round(n * per_bolt, 1),
        "util_%": _util(V, n * per_bolt),
        "geometry_mm": {"d0": d0, "e1": e1, "e2": e2, "p1": p1, "p2": p2},
        "note": "Add eccentricity (fin plates) and long-joint reduction (L > 15 d) separately.",
    }


# ---------------------------------------------------------------------------
# AISC 360-16 LRFD: bolts (J3) and fillet welds (J2)
# ---------------------------------------------------------------------------

def aisc_bolt_check(d, group, threads, t, Fu, lc, Vu=0.0, Tu=0.0, deformation_considered=True):
    """One bolt, one shear plane. d in mm, Fu of connected ply in MPa, lc clear
    distance to edge or next hole (mm), Vu/Tu required strengths per bolt (kN)."""
    if group not in BOLT_GROUP_AISC:
        raise ValueError(f"Unknown bolt group {group!r}; use A325 or A490")
    Fnt, Fnv_N, Fnv_X = BOLT_GROUP_AISC[group]
    Fnv = Fnv_N if threads.upper() == "N" else Fnv_X
    Ab = math.pi * d ** 2 / 4
    phiRn_v = PHI_AISC * Fnv * Ab / 1000
    frv = Vu * 1000 / Ab
    Fnt_mod = min(1.3 * Fnt - Fnt / (PHI_AISC * Fnv) * frv, Fnt)
    phiRn_t = PHI_AISC * max(Fnt_mod, 0) * Ab / 1000
    c_bear, c_tear = (2.4, 1.2) if deformation_considered else (3.0, 1.5)
    phiRn_bear = PHI_AISC * min(c_bear * d * t * Fu, c_tear * lc * t * Fu) / 1000
    checks = {
        "shear": {"Ed": Vu, "Rd": round(phiRn_v, 1), "util_%": _util(Vu, phiRn_v)},
        "bearing_tearout": {"Ed": Vu, "Rd": round(phiRn_bear, 1), "util_%": _util(Vu, phiRn_bear)},
        "tension_with_shear": {"Ed": Tu, "Rd": round(phiRn_t, 1), "util_%": _util(Tu, phiRn_t)},
    }
    return _summarise("AISC 360-16 LRFD bolt", checks, {"Fnt_prime_MPa": round(Fnt_mod, 1)})


def aisc_weld_check(w, L, FEXX, Pu, theta_deg=0.0):
    """Fillet weld leg w (mm), length L (mm), electrode FEXX (MPa, E70 = 482),
    load angle to weld axis theta (deg), required strength Pu (kN)."""
    theta = math.radians(theta_deg)
    k_ds = 1.0 + 0.5 * math.sin(theta) ** 1.5
    phiRn = PHI_AISC * 0.6 * FEXX * k_ds * (w / math.sqrt(2)) * L / 1000
    checks = {"weld": {"Ed": Pu, "Rd": round(phiRn, 1), "util_%": _util(Pu, phiRn), "k_ds": round(k_ds, 3)}}
    return _summarise("AISC 360-16 LRFD fillet weld", checks, {})


# ---------------------------------------------------------------------------
# Output
# ---------------------------------------------------------------------------

def _summarise(method, checks, extra):
    utils = [c["util_%"] for c in checks.values() if "util_%" in c]
    worst_name = max(checks, key=lambda k: checks[k].get("util_%", 0))
    max_util = max(utils) if utils else 0.0
    detailing = extra.get("detailing_failures", [])
    status = "OK" if max_util <= 100 and not detailing else "FAIL"
    return {"method": method, "status": status, "max_util_%": max_util,
            "governing": worst_name, "checks": checks, **extra}


def _cli():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--fy", type=float, help="override fy of the chosen steel grade, MPa")
    p.add_argument("--fu", type=float,
                   help="override fu of the chosen steel grade, MPa (e.g. 470 for S355 under UK NA)")
    sub = p.add_subparsers(dest="cmd", required=True)

    b = sub.add_parser("ec-bolt", help="EN 1993-1-8 single bolt check")
    b.add_argument("--d", type=int, required=True)
    b.add_argument("--grade", required=True)
    b.add_argument("--t", type=float, required=True, help="thinnest ply in bearing, mm")
    b.add_argument("--steel", required=True)
    b.add_argument("--e1", type=float, required=True)
    b.add_argument("--e2", type=float, required=True)
    b.add_argument("--p1", type=float)
    b.add_argument("--p2", type=float)
    b.add_argument("--Fv", type=float, default=0.0, help="shear per bolt, kN")
    b.add_argument("--Ft", type=float, default=0.0, help="tension per bolt, kN")
    b.add_argument("--planes", type=int, default=1)
    b.add_argument("--shank", action="store_true", help="shank (not thread) in shear plane")
    b.add_argument("--inner", action="store_true", help="inner bolt (not end/edge)")

    w = sub.add_parser("ec-weld", help="EN 1993-1-8 fillet weld, simplified")
    w.add_argument("--a", type=float, required=True, help="throat, mm")
    w.add_argument("--L", type=float, required=True, help="effective length, mm")
    w.add_argument("--steel", required=True)
    w.add_argument("--F", type=float, required=True, help="resultant force, kN")

    wa = sub.add_parser("ec-weld-size", help="EN 1993-1-8 required fillet throat")
    wa.add_argument("--F", type=float, required=True)
    wa.add_argument("--L", type=float, required=True)
    wa.add_argument("--steel", required=True)

    ts = sub.add_parser("ec-tstub", help="EN 1993-1-8 T-stub (end plate / column flange row)")
    ts.add_argument("--leff", type=float, help="use one leff for modes 1 and 2 (mm)")
    ts.add_argument("--tf", type=float, required=True)
    ts.add_argument("--steel", required=True)
    ts.add_argument("--m", type=float, required=True)
    ts.add_argument("--e", type=float, required=True)
    ts.add_argument("--bolts", type=int, default=2)
    ts.add_argument("--d", type=int, required=True)
    ts.add_argument("--grade", required=True)
    ts.add_argument("--Ft", type=float, default=0.0, help="row tension, kN")

    ds = sub.add_parser("ec-design-bolts", help="EN 1993-1-8 bolts needed for shear V")
    ds.add_argument("--V", type=float, required=True)
    ds.add_argument("--d", type=int, required=True)
    ds.add_argument("--grade", required=True)
    ds.add_argument("--t", type=float, required=True)
    ds.add_argument("--steel", required=True)
    ds.add_argument("--planes", type=int, default=1)

    ab = sub.add_parser("aisc-bolt", help="AISC 360-16 LRFD single bolt check")
    ab.add_argument("--d", type=float, required=True)
    ab.add_argument("--group", required=True)
    ab.add_argument("--threads", default="N")
    ab.add_argument("--t", type=float, required=True)
    ab.add_argument("--Fu", type=float, required=True)
    ab.add_argument("--lc", type=float, required=True)
    ab.add_argument("--Vu", type=float, default=0.0)
    ab.add_argument("--Tu", type=float, default=0.0)

    aw = sub.add_parser("aisc-weld", help="AISC 360-16 LRFD fillet weld")
    aw.add_argument("--w", type=float, required=True)
    aw.add_argument("--L", type=float, required=True)
    aw.add_argument("--FEXX", type=float, default=482)
    aw.add_argument("--Pu", type=float, required=True)
    aw.add_argument("--theta", type=float, default=0.0)

    a = p.parse_args()
    if (a.fy or a.fu) and getattr(a, "steel", None):
        fy, fu = _steel(a.steel)
        STEEL_EC[a.steel] = (a.fy or fy, a.fu or fu)
    if a.cmd == "ec-bolt":
        r = ec_bolt_check(a.d, a.grade, a.t, a.steel, a.e1, a.e2, a.p1, a.p2, a.Fv, a.Ft,
                          a.planes, not a.shank, not a.inner, not a.inner)
    elif a.cmd == "ec-weld":
        r = ec_weld_simplified(a.a, a.L, a.steel, a.F)
    elif a.cmd == "ec-weld-size":
        r = ec_fillet_throat_required(a.F, a.L, a.steel)
    elif a.cmd == "ec-tstub":
        if a.leff:
            l1 = l2 = a.leff
        else:
            _, _, l1, l2 = ec_leff_individual(a.m, a.e)
        r = ec_tstub(l1, l2, a.tf, a.steel, a.m, a.e, a.bolts, a.d, a.grade, a.Ft)
        r["leff_1"], r["leff_2"] = round(l1, 1), round(l2, 1)
    elif a.cmd == "ec-design-bolts":
        r = ec_design_bolts_shear(a.V, a.d, a.grade, a.t, a.steel, a.planes)
    elif a.cmd == "aisc-bolt":
        r = aisc_bolt_check(a.d, a.group, a.threads, a.t, a.Fu, a.lc, a.Vu, a.Tu)
    else:
        r = aisc_weld_check(a.w, a.L, a.FEXX, a.Pu, a.theta)
    print(json.dumps(r, indent=2))


if __name__ == "__main__":
    _cli()
