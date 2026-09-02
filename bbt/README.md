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
  │  S1  PRINCIPLES          understand the model      no capital  │
  │  S2  FIRST EXECUTION     open the position         ₱6,000      │
  │  S3  RISK & DEFENSE      survive the drawdown      no new      │
  │  S4  ACCUMULATION        compound the position     $200        │
  │  S5  THRIVE              run it as a system        $500        │
  │  S6  LEAD                teach it                  track record│
  └───────────────────────────────────────────────────────────────┘
```

S1–S2 is the current programme. S3–S5 is the curriculum that was missing. S6 is
how the programme grows past one facilitator.

## The rungs

| # | Rung | Format | Entry gate | Pass gate — the written deliverable |
|---|---|---|---|---|
| **1** | [Principles](session-1-principles/) | Zoom · 2h | TCIB complete | Accounts verified, ₱6,000 funded, pre-flight checklist returned |
| **2** | [Platform & First Execution](session-2-platform-execution/) | Live · 3h · pods of 8 | S1 pass | **Position Card** — live position at ≤30% LTV, liquidation price written down |
| **3** | [Risk & Defense](session-3-risk-defense/) | Live · 2h | S2 pass | **Risk Card** + passes the margin-call drill unaided |
| **4** | [Accumulation](session-4-accumulation/) | Live · 2.5h | S3 pass + 1:1 reserve funded | **90-Day Accumulation Plan** with pre-committed levels |
| **5** | [Thrive](session-5-thrive/) | Live · 2h | S4 pass + one full cycle executed | **BBT Operating Plan**, one page |
| **6** | [Lead](session-6-lead/) | Workshop · 2 days | S5 pass + 2 cohorts observed | **Certification** — runs S1 and S2 unaided |

Gates are gates. A participant who has not produced the deliverable does not enter
the next rung — they repeat. This is not administrative strictness; the rungs are
sequenced by risk, and S4 hands someone a bigger position than S3 taught them to
defend.

## Capital bands

| Rung | Deployed | Reserve (1:1) | Total | Position LTV | Programme LTV |
|---|---|---|---|---|---|
| S2 | ~$100 (₱6,000) | — first cycle | $100 | ≤ 30% | ≤ 30% |
| S3 | ~$100 | $100 | $200 | ≤ 30% | ≤ 20% |
| S4 | $200 | $200 | $400 | ≤ 30% | ≤ 20% |
| S5 | $500+ | $500+ | $1,000+ | ≤ 30% | ≤ 20% |

The reserve is not optional above S2 and is a hard gate into S4. Why 30% and not
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
└── session-N-*/
    ├── SCRIPT.md                    beat-by-beat, timed, spoken
    └── SLIDES.md                    slide-by-slide: on screen, build, beat ref
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
