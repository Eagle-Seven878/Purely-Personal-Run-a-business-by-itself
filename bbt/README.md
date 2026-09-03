# BBT · Buy · Borrow · Thrive

The programme build for **The Confident Investor's Blueprint**, operated by
Thrive Blueprint Education Corp. Scripts and slides for every level, the shared
faculty library, and the model that lets other asset classes follow later.

Built from the BBT Principles deck, the Session 2 outline, and the
**Buy Borrow Thrive Program Prospectus**. Start with
[`ANALYSIS.md`](ANALYSIS.md) for what changed in the source material and why.

---

## The programme

```
  LEVEL 0   ORIENTATION            90 min · free              understand the idea
                │                                            ─────────────────────
                ▼                                            "a drop is not a loss
  LEVEL 1   MASTERCLASS            4 hrs · ₱1,999              until you are forced
                │                                              to sell"
                ▼
  LEVEL 2   DEEP DIVE              3 days online · ₱15,000   ┐
  LEVEL 3   IMMERSION              3–4 days in room · ₱75,000┘ ONE CURRICULUM
                │
                ▼
  LEVEL 4   DONE-WITH-YOU          12 months · USD 3,000
                │                  (includes yr 1 of the Circle)
                ▼
  CONTINUING  THE THRIVE CIRCLE    USD 1,999 / yr · alumni

  ─────────────────────────────────────────────────────────────────────────
  TRAIN THE TRAINER    2 days · by invitation · not sold to participants
```

| Level | Price | Format | You leave able to | Build |
|---|---|---|---|---|
| **0** Orientation | Free | 90 min | Explain why the wealthy borrow instead of selling | [→](level-0-orientation/) |
| **1** Masterclass | ₱1,999 | 4 hrs live | Compute your own liquidation price and survivable drawdown | [→](level-1-masterclass/) |
| **2** Deep Dive | ₱15,000 | 3 days online | Hold a live position at ≤30% LTV with four alarms set | [→](level-2-3-deep-dive-immersion/) |
| **3** Immersion | ₱75,000 | 3–4 days in room | All of Level 2, **plus your own written playbook** | [→](level-2-3-deep-dive-immersion/) |
| **4** Done-With-You | USD 3,000 | 12 months | Run your playbook through a real cycle with faculty | [→](level-4-mentorship/) |
| **Continuing** Thrive Circle | USD 1,999/yr | Ongoing | Keep levels, rates and the record current | [→](continuing-thrive-circle/) |
| *Train the Trainer* | — | 2 days | *Teach Levels 0–3 to the standard* | [→](train-the-trainer/) |

**Levels 2 and 3 are one curriculum in two delivery modes** — eight modules, of
which Level 2 runs 1–6 and Level 3 runs 1–8. One script, one standard, one set of
corrections. See [`level-2-3-deep-dive-immersion/CURRICULUM.md`](level-2-3-deep-dive-immersion/CURRICULUM.md).

## The spine

Every level teaches one sentence at increasing depth:

> **A drop is not a loss until you are forced to sell.**

And every level is honest about both halves of what that buys:

- **What the rules protect** — the asset. Run to BBT rules, a position is never
  force-sold in any drawdown Bitcoin has produced in seven years.
- **What they do not protect** — the value. At the 2022 bottom the asset was worth
  23 centavos on the peso. You still owned all of it.

The arithmetic, the seven-year record, and the case that breaks the shortcut are
in [`_shared/capital-preservation.md`](_shared/capital-preservation.md). **The
30% LTV ceiling by itself does not save a top-tick 2021 entry through 2022. The
written instruction to act at −50% does.** That finding is the reason the drill
is a gate rather than a lecture.

## Closing into the next level

Every level closes on a **gap**, never on pressure — the prospectus promises "no
pressure, no upsell theatrics," and that is the positioning, not a nicety. Five
beats, four minutes, once, and **beat four names who should not buy.**

The method and the full ladder of closes: [`_shared/ascension.md`](_shared/ascension.md).

## Repository map

```
bbt/
├── README.md                            this file
├── ANALYSIS.md                          audit of the source material
├── _shared/
│   ├── capital-preservation.md          the seven-year stress test  ← the spine
│   ├── ltv-math.md                      four formulas, drawdown table
│   ├── risk-disclosure.md               standing disclosure + 9 corrections
│   ├── ascension.md                     the closing method
│   ├── facilitator-standard.md          room mechanics, pods, hard questions
│   ├── layer-model.md                   how other asset classes follow later
│   └── cohort-variables.md              per-cohort file; kills hard-coded numbers
├── level-0-orientation/                 SCRIPT · SLIDES
├── level-1-masterclass/                 SCRIPT · SLIDES
├── level-2-3-deep-dive-immersion/       CURRICULUM · 5 modules · 5 slide specs
├── level-4-mentorship/                  SCRIPT · SLIDES
├── continuing-thrive-circle/            SCRIPT
└── train-the-trainer/                   SCRIPT · SLIDES
```

`SCRIPT` / `MODULE` files are what faculty says. `SLIDES` files are what the room
sees. They are separate so a seven-slide build references **one** script beat
instead of carrying seven copies of the same speaker note.

## Other asset classes

Local stocks, US stocks, forex and options are **separate programmes and are not
built here.** What is recorded is the architecture that lets them follow without
rewriting the curriculum: every beat is tagged **[LAYER A]** (the principle —
invariant) or **[LAYER B]** (the instrument — swaps out).

[`_shared/layer-model.md`](_shared/layer-model.md) also carries an honest fit
assessment. Short version: stocks fit well, forex fits partially, **options do not
fit** — they expire and cannot be borrowed against, so an options course belongs
under the same company and the same faculty standard but must not be sold as BBT.

## Running a cohort

1. Copy `_shared/cohort-variables.md` → `cohorts/<name>.md`. Fill every field.
2. **Verify the capital preservation figures** and fill the current-cycle row.
3. One coach per eight for any module where participants execute.
4. Run the pre-flight gate asynchronously before Module 2. Unverified rolls over.
5. Read the standing disclosure at the top of every level, including the free one.
6. Collect the written deliverable before opening the next level.
7. Close on the gap. Name who shouldn't buy. Say it once and stop.
