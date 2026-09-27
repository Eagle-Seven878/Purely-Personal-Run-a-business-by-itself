# Report Templates

IDEA StatiCa's own report is the record. These templates sit on top of it: a one-page summary for the checker, and a plain-English explainer for a client or architect. Fill only with numbers the user gave you or that are in their report. Mark anything missing as `[confirm]`.

## Template A: One-Page Calc Summary (for checker / engineer of record)

```markdown
# Connection [ID]: [type, e.g. Extended end plate, B1 to C1]

**Project:** [name] · **Model file:** [file.ideaCon] · **IDEA StatiCa version:** [x.x]
**Code:** [EN 1993-1-8 + NA / AISC 360-22 LRFD / ...] · **Analysis:** Stress/strain + Buckling

## Inputs
| Item | Value |
|------|-------|
| Members | [C1: HEB 300, S355] · [B1: IPE 400, S355] |
| Plates | [EP1: 25 mm, S355] |
| Bolts | [8 × M24 10.9, bearing / preloaded] |
| Welds | [Flange fillet a = 10 mm, web a = 6 mm] |
| Governing load effect | [LE3: My = 245 kNm, Vz = 180 kN] |

## Results (governing load effect)
| Component | Governing item | Value | Limit | Utilisation | Status |
|-----------|---------------|-------|-------|-------------|--------|
| Plates | EP1 | εPl = 1.8% | 5.0% | – | OK |
| Bolts | Row 1, B2 | Ft = 198 kN | 254 kN | 78.0% | OK |
| Welds | EP1/B1 top flange | – | – | 91.2% | OK |
| Buckling | Mode 1 | αcr = 22.4 | ≥ 15 | – | OK |
| Stiffness | Sj,ini | [value] | Rigid if ≥ [limit] | – | [class] |

## Notes
- Mesh sensitivity: [done / not done]
- Loads in equilibrium: [on / off, imbalance noted]
- Deviations from code setup defaults: [list or "none"]

**Prepared by:** [name] · **Checked by:** [name] · **Date:** [date]
```

## Template B: Client / Architect Explainer (5 sentences max)

```markdown
**[Connection ID] passes the [code] checks run in IDEA StatiCa.**
The joint carries [plain load, e.g. "the roof beam's bending and shear"] into [the column].
The highest-used part is [the top row of bolts] at [78%] of capacity.
It needs [25 mm end plate, 8 bolts, stiffeners at flange level] as shown on [drawing ref].
Changing [beam depth / column size / plate position] would need this rechecked.
```

## Rules

- Never write "safe", "approved", or "certified". Write "passes the checks shown".
- Always state code, version, and analysis types. A result without them is not a result.
- Round utilisation to one decimal. Keep the governing load effect named.
- If the user's report shows any failing item, lead with it. Do not bury it under passes.
