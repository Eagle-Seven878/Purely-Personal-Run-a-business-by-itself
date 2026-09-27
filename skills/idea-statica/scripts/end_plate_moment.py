"""Moment resistance of a bolted end plate beam-to-column joint.

EN 1993-1-8 6.2.7.2, one-sided joint (beta = 1), major axis, continuous
unstiffened column, rolled I/H sections. Uses the active national annex in
connection_calc (set_annex). Units: mm, MPa, kN, kNm.

Components checked per bolt row, individually and as groups of rows:
  column flange in bending (T-stub, Table 6.4)
  column web in transverse tension (6.2.6.3)
  end plate in bending (T-stub, Table 6.6)
  beam web in tension (6.2.6.8)
Compression side: column web in transverse compression (6.2.6.2), beam
flange and web in compression (6.2.6.7), column web panel in shear (6.2.6.1).
Then 6.2.7.2(7)-(9): cap the total tension by the compression/shear limit
(reducing from the lowest row) and apply the 1.9 Ft,Rd triangular limit.

Input: a dict (or JSON file) like examples/extended_end_plate.json.
Rows are the tension bolt rows only, z measured downward from the outer face
of the beam tension flange (negative z = row in the extension above it).
Leave shear-only rows near the compression flange out of `rows`.
"""
import math

import connection_calc as cc

E = 210000.0
SQ2 = math.sqrt(2)


def _omega(beff, twc, Avc):
    """Reduction for interaction with shear, beta = 1 (Table 6.3)."""
    return 1.0 / math.sqrt(1 + 1.3 * (beff * twc / Avc) ** 2)


def _tstub(sum_leff_1, sum_leff_2, t, fy, m, e, n_bolts, Bt, Lb, As):
    """T-stub resistance in N (Table 6.2, method 1).

    n_bolts: bolts in the row or group; Bt: resistance of one bolt, N;
    Lb: bolt elongation length; As: tensile stress area of one bolt.
    Returns (F_T_Rd, governing mode, prying_develops).
    """
    gM0 = cc.ANNEX.gM0
    Mpl1 = 0.25 * sum_leff_1 * t ** 2 * fy / gM0
    Mpl2 = 0.25 * sum_leff_2 * t ** 2 * fy / gM0
    As_total = n_bolts * As
    Lb_star = 8.8 * m ** 3 * As_total / (sum_leff_1 * t ** 3)
    sum_Bt = n_bolts * Bt
    n = min(e, 1.25 * m)
    F3 = sum_Bt
    if Lb <= Lb_star:
        F1 = 4 * Mpl1 / m
        F2 = (2 * Mpl2 + n * sum_Bt) / (m + n)
        modes = [(F1, "mode 1"), (F2, "mode 2"), (F3, "mode 3")]
        prying = True
    else:
        F12 = 2 * Mpl1 / m
        modes = [(F12, "mode 1-2 (no prying)"), (F3, "mode 3")]
        prying = False
    F, mode = min(modes, key=lambda x: x[0])
    return F, mode, prying


def _column_flange_leff(rows_in_group, m, e):
    """Table 6.4, unstiffened column flange, column continuous (no end rows).
    rows_in_group: list of z in the group (sorted). Returns (sum_cp, sum_nc)."""
    if len(rows_in_group) == 1:
        return 2 * math.pi * m, 4 * m + 1.25 * e
    sum_cp = sum_nc = 0.0
    k = len(rows_in_group)
    for i, z in enumerate(rows_in_group):
        p_up = z - rows_in_group[i - 1] if i > 0 else None
        p_dn = rows_in_group[i + 1] - z if i < k - 1 else None
        if p_up is not None and p_dn is not None:        # inner row of group
            sum_cp += p_up + p_dn
            sum_nc += 0.5 * (p_up + p_dn)
        else:                                             # end row of group
            p = p_up if p_up is not None else p_dn
            sum_cp += math.pi * m + p
            sum_nc += 2 * m + 0.625 * e + 0.5 * p
    return sum_cp, sum_nc


def _plate_below_leff(rows_in_group, first_row_z, m, e, alpha):
    """Table 6.6, end plate rows below the beam tension flange.
    first_row_z: z of the row adjacent to the tension flange."""
    k = len(rows_in_group)
    if k == 1:
        z = rows_in_group[0]
        if z == first_row_z:
            return 2 * math.pi * m, alpha * m
        return 2 * math.pi * m, 4 * m + 1.25 * e
    sum_cp = sum_nc = 0.0
    for i, z in enumerate(rows_in_group):
        p_up = z - rows_in_group[i - 1] if i > 0 else None
        p_dn = rows_in_group[i + 1] - z if i < k - 1 else None
        if z == first_row_z:                              # always top of its group
            sum_cp += math.pi * m + p_dn
            sum_nc += 0.5 * p_dn + alpha * m - (2 * m + 0.625 * e)
        elif p_up is not None and p_dn is not None:
            sum_cp += p_up + p_dn
            sum_nc += 0.5 * (p_up + p_dn)
        else:
            p = p_up if p_up is not None else p_dn
            sum_cp += math.pi * m + p
            sum_nc += 2 * m + 0.625 * e + 0.5 * p
    return sum_cp, sum_nc


def _plate_extension_leff(mx, ex, e, w, bp):
    """Table 6.6, bolt row outside the beam tension flange (individual only)."""
    cp = min(2 * math.pi * mx, math.pi * mx + w, math.pi * mx + 2 * e)
    nc = min(4 * mx + 1.25 * ex, e + 2 * mx + 0.625 * ex, 0.5 * bp, 0.5 * w + 2 * mx + 0.625 * ex)
    return cp, nc


def end_plate_moment_resistance(spec):
    """Mj,Rd of the joint. See module docstring and examples/ for `spec`."""
    gM0, gM1 = cc.ANNEX.gM0, cc.ANNEX.gM1
    bm, col, pl, bt = spec["beam"], spec["column"], spec["plate"], spec["bolts"]
    welds = spec.get("welds", {})
    alpha = spec.get("alpha", 4.45)
    washer = spec.get("washer_t", 4.0)
    warnings = []

    hb, bb, tfb, twb = bm["h"], bm["b"], bm["tf"], bm["tw"]
    Wpl_b = bm["Wpl"] * 1e3                                   # cm3 -> mm3
    hc, bc, tfc, twc, rc = col["h"], col["b"], col["tf"], col["tw"], col["r"]
    tp, bp = pl["tp"], pl["bp"]
    d, grade, w = bt["d"], bt["grade"], bt["gauge"]
    af = welds.get("flange_throat", 0.0)
    aw = welds.get("web_throat", 0.0)

    fy_b, _ = cc.steel_strength(bm["steel"], tfb)
    fy_bw, _ = cc.steel_strength(bm["steel"], twb)
    fy_c, _ = cc.steel_strength(col["steel"], tfc)
    fy_cw, _ = cc.steel_strength(col["steel"], twc)
    fy_p, _ = cc.steel_strength(pl["steel"], tp)

    As, _ = cc._bolt(d, grade)
    Ft_Rd = cc.ec_bolt_tension(d, grade) * 1e3                 # N
    Bt_col = min(Ft_Rd, cc.ec_punching(d, tfc, col["steel"]) * 1e3)
    Bt_pl = min(Ft_Rd, cc.ec_punching(d, tp, pl["steel"]) * 1e3)
    Lb = tfc + tp + 2 * washer + 0.5 * (0.625 * d + 0.8 * d)   # grip + half head + half nut

    # Column shear area and geometry
    if "A" in col:
        Avc = col["A"] * 1e2 - 2 * bc * tfc + (twc + 2 * rc) * tfc
        Avc = max(Avc, (hc - 2 * tfc) * twc)
    else:
        Avc = (hc - 2 * tfc) * twc
        warnings.append("Column A not given: Avc taken as (h - 2tf) tw (conservative).")
    m_c = w / 2 - twc / 2 - 0.8 * rc
    e_c = bc / 2 - w / 2
    m_p = w / 2 - twb / 2 - 0.8 * aw * SQ2
    e_p = bp / 2 - w / 2
    if min(m_c, m_p, e_c, e_p) <= 0:
        raise ValueError("Bolt gauge does not fit the sections: check gauge, widths and root radius.")

    # Rows
    zs = sorted(r if isinstance(r, (int, float)) else r["z"] for r in spec["rows"])
    for z in zs:
        if 0 <= z <= tfb:
            raise ValueError(f"Row at z = {z} sits inside the beam flange.")
    ext_rows = [z for z in zs if z < 0]
    below_rows = [z for z in zs if z > tfb]
    if len(ext_rows) > 1:
        raise ValueError("Only one bolt row in the extension is supported.")
    first_below = below_rows[0] if below_rows else None
    h_comp = hb - tfb / 2                                        # z of centre of compression
    hr = {z: h_comp - z for z in zs}
    if any(v <= 0 for v in hr.values()):
        raise ValueError("A row is below the centre of compression; leave shear rows out of `rows`.")

    ext = {}
    if ext_rows:
        z = ext_rows[0]
        mx = -z - 0.8 * af * SQ2
        ex = pl["extension"] + z
        if mx <= 0 or ex <= 0:
            raise ValueError("Extension row: check plate extension and flange weld size.")
        ext = {"mx": mx, "ex": ex}
    if first_below is not None:
        m2 = first_below - tfb - 0.8 * af * SQ2
        if m2 <= 0:
            raise ValueError("First row below the flange is too close to the flange weld.")
        ext["m2"] = m2
        ext["lambda1"] = m_p / (m_p + e_p)
        ext["lambda2"] = m2 / (m_p + e_p)

    # --- component resistances (N) -----------------------------------------
    def col_flange(group):
        cp, nc = _column_flange_leff(group, m_c, e_c)
        leff1 = min(cp, nc)
        F, mode, pry = _tstub(leff1, nc, tfc, fy_c, m_c, e_c, 2 * len(group), Bt_col, Lb, As)
        return F, mode, leff1

    def col_web(group):
        cp, nc = _column_flange_leff(group, m_c, e_c)
        beff = min(cp, nc)
        return _omega(beff, twc, Avc) * beff * twc * fy_cw / gM0

    def plate(group):
        if group[0] < 0:
            cp, nc = _plate_extension_leff(ext["mx"], ext["ex"], e_p, w, bp)
            leff1 = min(cp, nc)
            F, mode, _ = _tstub(leff1, nc, tp, fy_p, ext["mx"], ext["ex"], 2, Bt_pl, Lb, As)
            return F, mode, leff1
        cp, nc = _plate_below_leff(group, first_below, m_p, e_p, alpha)
        leff1 = min(cp, nc)
        F, mode, _ = _tstub(leff1, nc, tp, fy_p, m_p, e_p, 2 * len(group), Bt_pl, Lb, As)
        return F, mode, leff1

    def beam_web(group):
        cp, nc = _plate_below_leff(group, first_below, m_p, e_p, alpha)
        return min(cp, nc) * twb * fy_bw / gM0

    # --- 6.2.7.2(6): rows top-down, individual and group limits ---------------
    Ftr, detail = {}, {}
    for k, z in enumerate(zs):
        cands = {}
        F, mode, _ = col_flange([z])
        cands["column flange (" + mode + ")"] = F
        cands["column web tension"] = col_web([z])
        F, mode, _ = plate([z])
        cands["end plate (" + mode + ")"] = F
        if z > 0:
            cands["beam web tension"] = beam_web([z])
        for j in range(k):
            grp = zs[j:k + 1]
            above = sum(Ftr[g] for g in grp[:-1])
            F, mode, _ = col_flange(grp)
            cands[f"column flange group rows {j + 1}-{k + 1}"] = F - above
            cands[f"column web tension group rows {j + 1}-{k + 1}"] = col_web(grp) - above
            if grp[0] > 0:                        # groups on the plate stay below the flange
                F, mode, _ = plate(grp)
                cands[f"end plate group rows {j + 1}-{k + 1}"] = F - above
                cands[f"beam web tension group rows {j + 1}-{k + 1}"] = beam_web(grp) - above
        gov = min(cands, key=cands.get)
        Ftr[z] = max(cands[gov], 0.0)
        detail[z] = {"governing": gov, "components_kN": {n: round(v / 1e3, 1) for n, v in cands.items()}}

    # --- compression and shear limits -----------------------------------------
    sp = tp                                      # conservative dispersion through the end plate
    beff_c = tfb + 2 * SQ2 * af + 5 * (tfc + rc) + sp
    dwc = hc - 2 * (tfc + rc)
    om_c = _omega(beff_c, twc, Avc)
    lam_p = 0.932 * math.sqrt(beff_c * dwc * fy_cw / (E * twc ** 2))
    rho = 1.0 if lam_p <= 0.72 else (lam_p - 0.2) / lam_p ** 2
    kwc = 1.0
    Fc_wc = min(om_c * kwc * beff_c * twc * fy_cw / gM0, om_c * kwc * rho * beff_c * twc * fy_cw / gM1)
    Mc_Rd = Wpl_b * fy_b / gM0
    Fc_fb = Mc_Rd / (hb - tfb)
    Vwp = 0.9 * fy_cw * Avc / (math.sqrt(3) * gM0)
    limits = {"column web compression": Fc_wc, "beam flange compression": Fc_fb,
              "column web panel shear": Vwp}
    F_limit_name = min(limits, key=limits.get)
    F_limit = limits[F_limit_name]
    warnings.append("kwc taken as 1.0: check axial stress in the column web (6.2.6.2(2)).")

    # 6.2.7.2(7)/(8): reduce from the lowest row until sum <= limit
    excess = sum(Ftr.values()) - F_limit
    for z in reversed(zs):
        if excess <= 0:
            break
        cut = min(Ftr[z], excess)
        Ftr[z] -= cut
        excess -= cut
        detail[z]["reduced_by_compression_kN"] = round(cut / 1e3, 1)

    # 6.2.7.2(9): triangular limit below a row stronger than 1.9 Ft,Rd
    for x in zs:
        if Ftr[x] > 1.9 * Ft_Rd:
            for r in zs:
                if hr[r] < hr[x]:
                    cap = Ftr[x] * hr[r] / hr[x]
                    if Ftr[r] > cap:
                        detail[r]["reduced_by_1.9Ft_rule_kN"] = round((Ftr[r] - cap) / 1e3, 1)
                        Ftr[r] = cap

    Mj = sum(Ftr[z] * hr[z] for z in zs) / 1e6
    Mb_pl = Mc_Rd / 1e6
    rows_out = []
    for i, z in enumerate(zs):
        rows_out.append({"row": i + 1, "z_mm": z, "h_r_mm": round(hr[z], 1),
                         "Ftr_Rd_kN": round(Ftr[z] / 1e3, 1),
                         "M_contrib_kNm": round(Ftr[z] * hr[z] / 1e6, 1), **detail[z]})

    out = {
        "method": "EN 1993-1-8 6.2.7.2 end plate moment resistance",
        "annex": cc.ANNEX.as_dict(),
        "Mj_Rd_kNm": round(Mj, 1),
        "Mpl_Rd_beam_kNm": round(Mb_pl, 1),
        "ratio_to_beam_Mpl": round(Mj / Mb_pl, 3),
        "rows": rows_out,
        "compression_limits_kN": {n: round(v / 1e3, 1) for n, v in limits.items()},
        "governing_compression_limit": F_limit_name,
        "sum_Ftr_kN": round(sum(Ftr.values()) / 1e3, 1),
        "geometry": {"m_col": round(m_c, 1), "e_col": round(e_c, 1), "m_plate": round(m_p, 1),
                        "e_plate": round(e_p, 1), **{k: round(v, 3 if k.startswith("lambda") else 1) for k, v in ext.items()},
                        "Avc_mm2": round(Avc, 0), "Lb": round(Lb, 1), "alpha": alpha},
        "bolt_Ft_Rd_kN": round(Ft_Rd / 1e3, 1),
        "warnings": warnings,
        "not_checked": [
            "welds (flange welds assumed full strength)", "bolt shear from Vz (check shear rows separately)",
            "axial force in the beam (valid only if N_Ed <= 5% Npl,Rd, 6.2.7.1(2))",
            "rotational stiffness Sj", "column stiffeners, supplementary web plates, backing plates",
            "column top (end-of-column) bolt row patterns",
        ],
    }
    if alpha == 4.45:
        warnings.append("alpha = 4.45 is the lower bound of Figure 6.11 (conservative). "
                        "Read alpha from the chart with lambda1, lambda2 and pass it in for a better value.")
    if "M_Ed" in spec:
        out["M_Ed_kNm"] = spec["M_Ed"]
        out["util_%"] = round(100 * spec["M_Ed"] / Mj, 1)
        out["status"] = "OK" if spec["M_Ed"] <= Mj else "FAIL"
    return out
