# BBT · Buy · Borrow · Thrive

The teaching ladder, the cohort gates, and the scripts and slides for every rung.

Built from `BBT Principles 26 April 2026_v3.pptx` and the Session 2 outline.
Start with [`ANALYSIS.md`](ANALYSIS.md) — it explains what changed and why.

---

## The ladder

TCIB is the prerequisite, not part of BBT. Everything below is BBT.

```
  TCIB · The Confident Investor's Blueprint          [prerequisite]
    Fibonacci buying zones · entry levels · Cashflow fundamentals
                          │
                          ▼
  ┌───────────────────────────────────────────────────────────────┐
  │  THE LADDER                                                   │
  │                                                               │
  │  1  PRINCIPLES           understand the model      no capital  │
  │  2  FIRST EXECUTION      open the position         ₱6,000      │
  │  3  RISK & DEFENSE       survive the drawdown      no new      │
  │  4  ACCUMULATION         compound the position     $200        │
  │  5  THRIVE               run it as a system        $500        │
  └───────────────────────────────────────────────────────────────┘
                          │
                          ▼  (optional, for graduates)
  ┌───────────────────────────────────────────────────────────────┐
  │  FACILITATOR TRACK       teach it                  track record│
  └───────────────────────────────────────────────────────────────┘
```

Ladders 1–2 are the current programme. Ladders 3–5 are the curriculum that was
missing. The facilitator track sits **alongside** the ladder, not on it — a
graduate may enter it afterwards, and it is how the programme grows past one
facilitator.

> **Ladders 3, 4 and 5 are reconstructed, not derived.** They were designed to
> close gaps found in the source deck, without sight of a programme prospectus.
> If a prospectus already defines what ladders 3 to 5 are, these are a proposal to
> be replaced rather than renumbered. See [`ANALYSIS.md`](ANALYSIS.md) Part 4.

## The five rungs

| # | Rung | Format | Entry gate | Pass gate — the written deliverable |
|---|---|---|---|---|
| **1** | [Principles](session-1-principles/) | Zoom · 2h | TCIB complete | Accounts verified, ₱6,000 funded, pre-flight checklist returned |
| **2** | [Platform & First Execution](session-2-platform-execution/) | Live · 3h · pods of 8 | Ladder 1 pass | **Position Card** — live position at ≤30% LTV, liquidation price written down |
| **3** | [Risk & Defense](session-3-risk-defense/) | Live · 2h | Ladder 2 pass | **Risk Card** + passes the margin-call drill unaided |
| **4** | [Accumulation](session-4-accumulation/) | Live · 2.5h | Ladder 3 pass + 1:1 reserve funded | **90-Day Accumulation Plan** with pre-committed levels |
| **5** | [Thrive](session-5-thrive/) | Live · 2h | Ladder 4 pass + one full cycle executed | **BBT Operating Plan**, one page |

Gates are gates. A participant who has not produced the deliverable does not enter
the next rung — they repeat. This is not administrative strictness; the rungs are
sequenced by risk, and Ladder 4 hands someone a bigger position than Ladder 3
taught them to defend.

## The facilitator track

Not a rung. A separate two-day certification workshop a graduate may enter after
Ladder 5, capped at 12 candidates.

| Track | Format | Entry gate | Pass gate |
|---|---|---|---|
| [Lead](facilitator-track/) | Workshop · 2 days | Ladder 5 complete + 2 cohorts observed | **Certification** — runs Ladders 1 and 2 unaided |

## Capital bands

| Rung | Deployed | Reserve (1:1) | Total | Position LTV | Programme LTV |
|---|---|---|---|---|---|
| 1–2 | ~$100 (₱6,000) | — first cycle | $100 | ≤ 30% | ≤ 30% |
| 3 | ~$100 | $100 | $200 | ≤ 30% | ≤ 20% |
| 4 | $200 | $200 | $400 | ≤ 30% | ≤ 20% |
| 5 | $500+ | $500+ | $1,000+ | ≤ 30% | ≤ 20% |

The reserve is not optional above Ladder 2 and is a hard gate into Ladder 4. Why 30% and not
the 50% the original deck teaches: [`_shared/ltv-math.md`](_shared/ltv-math.md) §4.

## Repository map

```
bbt/
├── README.md                        this file — the ladder
├── ANALYSIS.md                      audit of the source material + scale plan
├── _shared/
│   ├── ltv-math.md                  the four formulas, the drawdown table
│   ├── risk-disclosure.md           standing disclosure + 9 claim corrections
│   ├── facilitator-standard.md      room mechanics, pod structure, hard questions
│   └── cohort-variables.md          per-cohort file; kills hard-coded numbers
├── session-N-*/                     ladders 1–5
│   ├── SCRIPT.md                    beat-by-beat, timed, spoken
│   └── SLIDES.md                    slide-by-slide: on screen, build, beat ref
└── facilitator-track/               not a rung — certification workshop
    ├── SCRIPT.md
    └── SLIDES.md
```

`SCRIPT.md` is what the facilitator says. `SLIDES.md` is what the room sees. They
are separate files so a build animation across seven slides references **one**
beat instead of carrying seven copies of the same speaker note — which is how the
current deck is built, and how it drifts.

## Running a cohort

1. Copy `_shared/cohort-variables.md` → `cohorts/<name>.md`. Fill it.
2. Assign one coach per eight participants. Below that ratio, execution sessions
   fail — see [`_shared/facilitator-standard.md`](_shared/facilitator-standard.md) §5.
3. Run the pre-flight gate **before** Session 2, asynchronously. Unverified
   participants roll to the next cohort.
4. The morning of each session, read the platform figures live and record them in
   the cohort file.
5. Read the standing disclosure at the top of every session, unedited.
6. Collect the pass deliverable before opening the next rung.

## A note on what this programme teaches

BBT teaches leverage against a volatile asset. That is a legitimate thing to
teach and a dangerous thing to teach carelessly. The material here is deliberately
more conservative than the source deck, states the failure modes plainly, and
gates progression on demonstrated competence rather than attendance. Read
[`_shared/risk-disclosure.md`](_shared/risk-disclosure.md) before facilitating.
