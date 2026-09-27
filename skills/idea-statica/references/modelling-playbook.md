# Modelling Playbook

Recipes list the members, the manufacturing operations, and the traps. Operation names follow IDEA StatiCa Connection; exact labels vary slightly by version.

## General Setup

1. **Members**: add bearing member first (column, or the member that carries everything). Set member length long enough (≥ 2× section height) so the model boundary does not stiffen the joint.
2. **Operations**: add in fabrication order. Each operation cuts, adds plates, welds, or bolts.
3. **Loads**: one load effect per combination that could govern (max M, max V, max N tension, max N compression, reversal). Do not just import every combination: pick the envelope drivers.
4. **Code setup**: confirm code, national annex, γ factors / φ factors, plastic strain limit, weld redistribution, detailing checks.
5. **Analysis**: stress/strain first, then buckling. Stiffness only if the frame analysis assumption needs confirming.

## Recipe: Beam-to-Column Extended End Plate (moment)

- Members: column (bearing), beam
- Operations: `End plate` (extended above top flange), bolts in rows, fillet welds flange and web; `Stiffener` in column at flange levels if needed; `Web widener` / doubler if panel zone fails
- Traps: bolt row above flange is often the most loaded; column flange bending often governs before the end plate

## Recipe: Fin Plate / Shear Tab (pinned)

- Members: column or primary beam (bearing), secondary beam
- Operations: `Fin plate` welded to support, bolts through beam web; `Cut` / `Notch` on beam if top flanges clash
- Traps: apply shear at bolt group position, not at the column face, unless eccentricity is intended; check the beam web block shear region visually (CBFEM captures it as plate strain)

## Recipe: Column Base Plate

- Members: column (bearing is the concrete block)
- Operations: `Base plate` with anchors, grout thickness, concrete block dimensions; optional `Shear iron` (shear lug) and `Stiffener`
- Traps: concrete block size drives cone breakout. Anchor type (cast-in, headed, with plate washer) changes the resistance model. Friction vs lug for shear is a setting.

## Recipe: Brace Gusset (vertical or horizontal bracing)

- Members: column / beam (bearing), brace (CHS, angle, or I)
- Operations: `Gusset`, `Stub` or `Slotted plate` for CHS, bolts or welds to brace; `Stiffener` on free edge if αcr low
- Traps: compression braces need buckling analysis every time; check the brace end moment release matches the frame model

## Recipe: Splice (beam or column)

- Members: two segments of the same member, one bearing
- Operations: `Splice` with flange and web cover plates, or `End plate to end plate`
- Traps: load the non-bearing side; make sure forces are at the splice location, not at the member end in the global model

## BIM Links and Checkbot

Checkbot is the hub that pulls geometry and forces from the global model and keeps them in sync.

| Source | Typical path |
|--------|-------------|
| Tekla Structures | IDEA StatiCa link inside Tekla, geometry + operations from Tekla components |
| SAP2000 / ETABS | Checkbot import from the running model, forces per combination |
| RFEM / RSTAB, Robot, SCIA, STAAD.Pro, Midas, Advance Design, AxisVM | Checkbot import (availability depends on version and installed link) |
| Revit / Advance Steel | Geometry via Checkbot |

Checks after any import:
- Every combination you expect is present, and ULS vs SLS are labelled correctly.
- Member local axes match: a sign flip on My is the most common import bug.
- Loads in equilibrium status: imported forces from one node should balance. If not, the export node or combination set is wrong.
- After the global model changes, **Sync** in Checkbot. Do not rebuild.
