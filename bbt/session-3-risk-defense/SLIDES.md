# Session 3 · RISK & DEFENSE — Slide Specification

20 slides · 120 minutes · script: [`SCRIPT.md`](SCRIPT.md)

| # | On screen | Visual | Beat |
|---|---|---|---|
| 1 | **YOU CAN OPEN A POSITION. TONIGHT YOU LEARN TO KEEP ONE.** | Cover | A |
| 2 | **READ ME YOUR LIQUIDATION PRICE** | Pod roll call. Cards out. | A |
| 3 | **THREE NUMBERS** — **85%** margin call · **91%** liquidation · **30%** yours | Gauge: the two platform bands, then a marker far below | B1 |
| 4 | **THE GAP IS THE PRODUCT** — 30 → 85 | The unused capacity, shaded. Not waste — the buffer they bought. | B1 |
| 5 | **SURVIVABLE DRAWDOWN** — full table, LTV 78/50/30/20 vs 2021 −53% and 2022 −77% | The table from `_shared/ltv-math.md` §4. **30% must visibly fail the 2022 column** — that honesty is what makes the reserve land. | B2 |
| 6 | **IT ARRIVES AT 3AM** — during a red week · when your business is also down · when every feed says lower — **so decide now, while nothing is wrong** | No data. Pure framing. Give it air. | B3 |
| 7 | **FOR EVERY PESO DEPLOYED, HOLD A PESO BACK** | One line, full slide | C1 |
| 8 | **WHERE RESERVE LIVES** — not in the position · **not in the same asset** · reachable in under an hour | Three rules. Middle one is the one people get wrong. | C2 |
| 9 | **TWO LTVs** — position = loan ÷ collateral · **programme = loan ÷ (deployed + reserve)** — worked: 30% / 15% | Side by side | C3 |
| 10 | **USED IT? REBUILD IT.** — before a new position · before adding · before anything | Short slide, hard rule | C4 |
| 11 | **FOUR ALARMS** — 40% aware · 50% prepare · **60% act** · liq × 1.3 serious | Ladder graphic, each rung labelled with its action | D1 |
| 12 | **YOU WILL NEVER MEET BINANCE'S MARGIN CALL** — you act at 60, it calls at 85 | The 25-point gap, shaded. This is the design, stated. | D1 |
| 13 | **ALARMS ARE PRICE, NOT LTV** — `price = entry × (entry LTV ÷ target LTV)` — worked: $100,000 × (0.30 ÷ 0.50) = **$60,000** | Conversion worked once, then they do their own four | D2 |
| 14 | **THE DECISION TREE** — 40 → log · 50 → calculate, don't execute · 60 → top up from reserve to 30%, tell your coach · reserve gone → **repay the loan, keep the Bitcoin** | Flowchart. **The last branch is the most important slide in the session** — give it visual weight. | D3 |
| 15 | **10 MIN BREAK** | Timer | Break |
| 16 | **DRILL 1** — entry $100,000 · $100 deployed · 30% LTV · $100 reserve — **BTC → $55,000** | Scenario card. Worked together. | E1 |
| 17 | **DRILL 2** — **BTC → $45,000** — new LTV? alarm? action? amount? | Scenario card. Pods, 3 min. | E2 |
| 18 | **DRILL 3** — you topped up · **0.002222 BTC** · loan $30 · reserve $45 · **BTC → $28,000** | Scenario card. The teaching round. Lands on: **repay the loan, keep 0.002222 BTC, $15 left — and BTC is down 72%.** | E3 |
| 19 | **YOUR RISK CARD** — position LTV · programme LTV · 4 alarm prices · reserve · decision tree · coach signature | Card artwork matching the handout | F1 |
| 20 | **THE RESERVE COSTS YOU. THAT'S WHAT IT'S FOR.** — {{session_4_date}} · reserve funded 1:1 before you're in the room | Close | F2 |

---

## Printed handout — the Risk Card

```
┌──────────────────────────────────────────────────┐
│  BBT RISK CARD               Cohort {{n}}        │
│  Name ______________________  Pod ____           │
├──────────────────────────────────────────────────┤
│  Position LTV  ______%    Programme LTV ______%  │
│  Reserve held  $__________  (target $_________)  │
├──────────────────────────────────────────────────┤
│  ALARM PRICES                                    │
│   40% LTV  $__________   → log it                │
│   50% LTV  $__________   → calculate, don't act  │
│   60% LTV  $__________   → TOP UP FROM RESERVE   │
│   liq×1.3  $__________   → this is serious       │
├──────────────────────────────────────────────────┤
│  IF RESERVE RUNS OUT AND LTV IS STILL CLIMBING:  │
│    Repay the loan. Close the borrow.             │
│    KEEP THE BITCOIN.                             │
├──────────────────────────────────────────────────┤
│  Margin-call drill:   PASS ☐   REPEAT ☐          │
│  Coach ____________________  Date ____________   │
└──────────────────────────────────────────────────┘
```

## Build checklist

- [ ] Slide 5 shows 30% **failing** the 2022 column — do not soften the table
- [ ] Slide 14 is the visual centrepiece
- [ ] All four alarms actually set on every participant's phone before the break
- [ ] Drill 4 scored individually, no notes, recorded on the card
- [ ] Risk Cards printed and collected — the card is the pass gate
