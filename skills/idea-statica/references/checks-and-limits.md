# Checks and Limits (IDEA StatiCa Connection, CBFEM)

CBFEM = Component-Based Finite Element Method. Plates and member walls are shell elements with an elastic-plastic material. Bolts, welds, anchors, and concrete blocks are special components with code-based resistances. Always confirm the limits below against the **Code setup** dialog of the user's model: they are editable per project and differ by code and version.

## Plates

| Item | What it is | Typical default |
|------|-----------|-----------------|
| Equivalent stress | von Mises stress in the shell | Capped at design yield (bilinear material with small hardening slope) |
| **Plastic strain** | The actual pass/fail criterion for plates | **5%** limit (from EN 1993-1-5 Annex C; also used for AISC setup) |
| Material factor | γM0 (EC) or φ (AISC) applied to fy | Per code / national annex |

Read it right:
- Stress at fy is **normal**. Plasticity is how CBFEM redistributes. A plate "at 100% stress" with 1.2% strain passes.
- Strain over 5% means that plate (or a small zone of it) fails. Look where: a single hot spot at a re-entrant corner is often a mesh / geometry artefact; a band across the plate is real.

## Bolts

| Check | Driven by |
|------|-----------|
| Tension | Bolt grade, tensile stress area, prying (captured by plate bending in the FE model) |
| Shear | Grade, threads in/out of shear plane setting, number of shear planes |
| Bearing | Plate thickness, edge / end distances, hole type |
| Punching shear | Thin plate under bolt head / nut |
| Interaction tension + shear | Code formula (EC Table 3.4 / AISC J3) |
| Slip (preloaded only) | Preload, slip factor μ, number of friction surfaces |

Notes:
- Bearing type vs preloaded (friction) bolts is a model setting per bolt group. Check it matches the design intent.
- Bolt forces include prying automatically. Hand calcs that ignore prying will read lower.
- Detailing checks (edge distance, spacing) show as warnings or failures depending on code setup.

## Welds

| Item | Notes |
|------|-------|
| Fillet / butt | Butt welds are usually taken as full strength and not checked separately. Fillet welds are checked. |
| Method | EC: directional method (EN 1993-1-8 §4.5.3.2), plus the 0.9 fu/γM2 normal-stress check. AISC: J2 with directional strength increase if enabled. |
| Stress redistribution | Plastic redistribution along the weld is a code-setup option. Turning it off makes long welds more conservative (peak-governed). |
| Weld size | Throat `a` (EC) vs leg `w` (AISC). Confirm which the user means. |

## Anchors and Base Plates

| Check | Driven by |
|------|-----------|
| Anchor tension | Steel failure, concrete cone breakout, pull-out, splitting (per EN 1992-4 / ACI 318 ch.17) |
| Anchor shear | Steel, pry-out, concrete edge breakout; shear lug or friction if modelled |
| Concrete in compression | Contact stress under plate, grout layer, concrete block size |

Concrete cone failures are very sensitive to edge distance and block dimensions in the model. Make sure the concrete block matches the real footing/pier.

## Buckling (analysis type: Buckling)

Output: critical load factor **αcr** for the first buckling mode. IDEA's published guidance (EC-based):

| αcr | Meaning |
|-----|---------|
| ≥ 15 | Local plate buckling is not a concern. Stress/strain result stands. |
| 3 to 15 | Buckling must be accounted for (reduce resistance per EN 1993-1-5 method / IDEA's reduction procedure). |
| < 3 | Geometry is too slender. Add stiffeners or thicken plates. Do not rely on the result. |

Always check the **mode shape**: a mode in the member far from the joint is irrelevant to the connection (member buckling belongs to the member design).

## Stiffness (analysis type: Stiffness)

Gives rotational stiffness Sj and classifies the joint (rigid / semi-rigid / pinned) per EN 1993-1-8 §5.2.2 limits based on beam length. The member length entered in the model drives the classification. Check it.

## Capacity Design (seismic)

Applies overstrength (γov / Ry) to the dissipative member so the connection is checked for the member's plastic capacity. Used for moment frames and braces. Confirm the dissipative item is set on the right member.

## Mesh

- Default mesh is usually adequate. Run a mesh sensitivity check (finer element size, or more elements on the smallest edge) when a result is within ~5% of a limit or when strain peaks sit at a single element.
- The minimum member length modelled matters: members too short constrain the joint and stiffen it.
