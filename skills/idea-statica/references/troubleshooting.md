# Troubleshooting: Symptom → Cause → Fix

Work top to bottom. The first rows are model mistakes, which are more common than real under-design.

## Model and Load Mistakes (check these first)

| Symptom | Likely cause | Fix |
|---------|-------------|-----|
| Huge utilisation everywhere, even on members | Loads applied in wrong position or wrong sign convention | Check **Position** of load (Node / Bolts / End of member), and member local axes vs global FEA axes |
| Connection fails but the bearing member is fine and loads look sane | Unbalanced loads, bearing member is absorbing the difference | Turn on **Loads in equilibrium** and compare. If imbalance is large, forces were exported from different nodes or combinations |
| Moment on a pinned connection | FEA model had a rigid joint, or load position at node adds eccentricity moment | Match release assumptions; move load position to the bolt group |
| Member itself shows plastic strain away from the joint | Member too short in model, or member design problem imported into the joint | Increase modelled member length (typically ≥ 2× section height); member checks belong to member design |
| Results change a lot with small geometry edits | Local instability or singular stiffness | Run buckling analysis, check αcr |

## Analysis Errors

| Message / behaviour | Cause | Fix |
|---------|-------|-----|
| Analysis does not converge / "Singular matrix" | A plate or member is not connected to anything, or is only connected by a single bolt that can rotate freely | Check every plate has welds or bolts that fix all DOFs. Add a weld or a second bolt, or check "connected parts" |
| Converges only at a small load % | Real collapse mechanism before 100% load | Treat as failure. Read which component yielded first |
| Contact warnings on base plate | Plate lifting, concrete block too small | Check anchors in tension and concrete block geometry |

## Real Under-Design: Plates

| Governing | Cheapest fix first |
|-----------|-------------------|
| End plate bending in tension zone (bolts also high, prying) | Thicker end plate, or larger bolts which also reduces prying |
| Column flange bending | Column flange stiffeners / backing plates; or thicker end plate to spread load |
| Column web in shear (panel zone) | Web doubler plate or diagonal stiffener |
| Column web in compression | Transverse stiffeners at beam compression flange level |
| Beam web at haunch end or cut | Stiffener at the cut, or extend haunch |
| Gusset plate near brace end | Thicker gusset, or check Whitmore section region, add edge stiffener if αcr is low |

## Real Under-Design: Bolts

| Governing | Fix |
|-----------|-----|
| Tension (top row) | Bigger diameter / higher grade; add row above flange (extended end plate); thicken plate to cut prying |
| Shear | More bolts, bigger bolts, threads excluded, double shear |
| Bearing | Thicker ply, larger edge/end distance, higher-grade plate |
| Punching | Thicker plate or washer plate |
| Slip | More preload (grade), better slip class surface, more bolts |

## Real Under-Design: Welds

| Governing | Fix |
|-----------|-----|
| Short weld at stress peak | Enable plastic redistribution if the code setup and the engineer accept it; else increase throat |
| Flange-to-end-plate fillet | Increase throat, or switch to full-penetration butt weld (fabrication cost goes up) |
| Weld on stiffener | Check stiffener is actually needed; else increase throat |

## Buckling

| αcr | Action |
|-----|--------|
| 3 to 15 | Apply buckling reduction; if resistance drops below demand, stiffen the buckled plate |
| < 3 | Add stiffener along the buckle, thicken plate, or shorten the unsupported free edge |

## Reporting Back

For each failing item give: element name, check, utilisation, cause in one line, top two fixes, what to rerun. Example:

> **EP1 plastic strain 7.8% (limit 5%)**. Bending between top bolt row and beam flange, prying is high (bolt row 1 tension 96%).
> Fix 1: EP1 20 → 25 mm. Fix 2: M20 → M24 10.9 in row 1.
> Rerun: stress/strain + buckling (confirm αcr still ≥ 15).
