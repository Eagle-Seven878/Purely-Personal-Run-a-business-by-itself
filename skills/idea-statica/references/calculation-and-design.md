# Calculation and Design

Size a connection by hand first, then build it in IDEA StatiCa and let CBFEM confirm it. A hand calc that lands within about 15% of CBFEM means the model is behaving. A bigger gap means a load, a setting, or the hand calc is wrong. Find out which before trusting either.

Calculator: `scripts/connection_calc.py` (standard library Python, no install). Run from the skill folder:

```bash
python scripts/connection_calc.py <command> --help
python -m unittest discover -s scripts   # 21 checks against published tables
```

All values: N, mm, MPa, kN, kNm. Eurocode functions use recommended factors (γM0 = 1.0, γM2 = 1.25, γM3 = 1.25). **National annexes change these and material strengths.** Example: the UK NA takes fu from the product standard, so S355 welds use fu = 470 MPa, not 510. Pass `--fu 470` (and `--fy`) to override.

## The Design Loop

```
1. Loads        pick governing combinations: max V, max M, max N+/-, reversal
2. Type         choose the joint (table below)
3. Size         hand calc with connection_calc.py: bolts → plate → welds
4. Detail       edge/end distances, pitches, weld minimums, clearance for erection
5. Model        build it in IDEA StatiCa with the sized parts
6. Verify       stress/strain + buckling; compare to step 3
7. Optimise     trim bolts/plate while CBFEM stays ≤ 100%, αcr ≥ 15
8. Report       report-template.md
```

## Step 2: Choose the Joint

| Demand | First choice | When to step up |
|--------|-------------|-----------------|
| Shear only, V < ~300 kN | Fin plate, single row | Two rows, or double angle cleat |
| Shear only, heavy | Partial-depth end plate | Full-depth end plate |
| Moment + shear, frame | Flush end plate | Extended end plate, then haunch |
| Moment, stiff column needed | Extended end plate + column stiffeners | Welded (shop) connection |
| Axial brace | Gusset + bolted splice plates | Slotted CHS with welded knife plate |
| Column base, pinned | 4-bolt base plate | Larger plate / shear lug for high V |
| Column base, fixed | Extended base plate + stiffeners | Pocket base or embedded plate |

## Step 3: Size

### Bolts in shear (fin plate, splice, cleat)

```bash
python scripts/connection_calc.py ec-design-bolts --V 450 --d 20 --grade 8.8 --t 10 --steel S355
```

Returns bolts needed, what governs (shear or bearing), and default spacing (e1 = e2 = 2 d0, p1 = p2 = 3 d0). Then add:
- **Eccentricity**: fin plates put a moment V × e on the bolt group. Use the elastic polar method: resultant on the corner bolt = √((V/n + M·y/Σr²)² + (M·x/Σr²)²).
- **Long joints**: if the bolt group is longer than 15 d, reduce shear resistance with βLf (EN 1993-1-8 3.8).

### Single bolt, all checks

```bash
python scripts/connection_calc.py ec-bolt --d 20 --grade 8.8 --t 12 --steel S355 \
  --e1 40 --e2 35 --p1 70 --p2 80 --Fv 60 --Ft 40
```

Shear, bearing, tension, punching, interaction (Fv/Fv,Rd + Ft/1.4Ft,Rd ≤ 1), and detailing minimums (e1, e2 ≥ 1.2 d0; p1 ≥ 2.2 d0; p2 ≥ 2.4 d0).

### End plate / column flange in tension (T-stub)

```bash
python scripts/connection_calc.py ec-tstub --tf 20 --steel S355 --m 40 --e 50 \
  --d 20 --grade 10.9 --Ft 300
```

Gives modes 1, 2, 3 and which governs. Reading the result:
- **Mode 1** governs → plate too thin. Thicken plate.
- **Mode 2** governs → balanced. Usually the economical answer.
- **Mode 3** governs → bolts too small for the plate. Up the bolt, or accept (brittle-ish, fine with margin).

Without `--leff` it uses the individual-row, unstiffened pattern: leff = min(2πm, 4m + 1.25e) for mode 1 and 4m + 1.25e for mode 2. Rows next to a beam flange or stiffener, and rows acting as a group, need EN 1993-1-8 Tables 6.4 to 6.6 (α factor). Compute leff for those by hand and pass `--leff`.

Moment resistance of an end plate joint (quick form): Mj,Rd ≈ Σ hr · Ftr,Rd over the bolt rows in tension, where hr is the lever arm to the centre of compression (beam compression flange centre). Also cap each row by column web in tension, beam web in tension, and the compression side (column web in compression, beam flange in compression). CBFEM checks all of these together. The hand calc tells you if you are in the right size range.

### Fillet welds

```bash
python scripts/connection_calc.py ec-weld-size --F 300 --L 200 --steel S355
python scripts/connection_calc.py ec-weld --a 6 --L 200 --steel S355 --F 250
```

Simplified method: fvw,d = fu / (√3 βw γM2). Directional method is in the module (`ec_weld_directional`) when you have σ⊥, τ⊥, τ∥.
Full-strength rule of thumb for a double fillet on a plate of thickness t (S355, EC): a ≈ 0.48 t (S275: 0.46 t), per SCI P363 with the UK NA. Recheck for other annexes. On flanges in moment joints, full strength is the safe default.

### AISC 360-16 LRFD

```bash
python scripts/connection_calc.py aisc-bolt --d 22.2 --group A325 --threads N \
  --t 12 --Fu 450 --lc 30 --Vu 80 --Tu 40
python scripts/connection_calc.py aisc-weld --w 8 --L 200 --FEXX 482 --Pu 300 --theta 90
```

Bolt: shear (J3.6), bearing/tearout (J3.10, deformation at service considered), tension with shear (J3-3a). Weld: J2.4 with the directional increase 1 + 0.5 sin^1.5 θ (only valid for a linear weld group loaded in plane).

## Step 4: Detailing Minimums (EC, normal holes)

| Item | Minimum | Typical good practice |
|------|---------|----------------------|
| End distance e1 | 1.2 d0 | 2 d0 |
| Edge distance e2 | 1.2 d0 | 1.5 d0 |
| Pitch p1 | 2.2 d0 | 3 d0 |
| Gauge p2 | 2.4 d0 | 3 d0 (and clear the web weld and fillet) |
| Fillet throat | 3 mm | 4 to 6 mm for shop welds |
| Weld length | max(30 mm, 6a) | |
| Bolt hole clearance | M12-M14: +1, M16-M24: +2, ≥ M27: +3 mm | |

## Step 6: Hand Calc vs CBFEM

| Hand calc vs CBFEM | Meaning |
|--------------------|---------|
| Within ~15% | Model and calc agree. Go. |
| CBFEM much weaker | Check load position, member length, missing weld, or buckling. Or the hand calc missed a component (column web, prying). |
| CBFEM much stronger | CBFEM captures load spreading a simple calc ignores. Fine, but confirm mesh sensitivity before cutting material. |

## Limits of This Calculator

- Does not do: block tearing, net section, column web panel shear, column web in compression, beam web in tension, eccentric bolt groups, long-joint reduction, preloaded bolt slip interaction for group design, base plates, anchors, seismic capacity design.
- Tables cover common grades and diameters only; unknown inputs raise an error rather than guess.
- Every output is a preliminary design for an engineer to verify in IDEA StatiCa and sign.
