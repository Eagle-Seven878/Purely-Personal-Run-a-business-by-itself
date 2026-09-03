# Capital Preservation — The Seven-Year Stress Test

The spine of the programme. This is what "capital preservation first, growth
second" means in arithmetic rather than in marketing.

Taught at every level, at increasing depth. Level 1 shows the table. Level 2/3
makes participants run it against their own position. Level 4 revisits it every
quarter.

---

## 1. The claim we make, and the claim we do not

**We say:** run to BBT rules, you are never force-sold. In every drawdown
Bitcoin has produced in the last seven years, a position at 30% opening LTV with
a funded reserve and the four alarms never reaches liquidation.

**We do not say:** you don't lose money. At the 2022 bottom, an asset bought at
the 2021 peak was worth 23 cents on the dollar. You still owned every satoshi of
it — but the mark-to-market loss was real and it lasted more than a year.

That distinction is the whole programme:

> **A drawdown is not a loss until you are forced to sell.**
> Our rules remove the force. They do not remove the drawdown.

A facilitator who blurs those two is selling something we do not sell. Say both
sentences, in that order, every time.

---

## 2. Where the alarms sit on the price

From a 30% opening LTV, this is the price fall that triggers each event.
Derived from `LTV_new = LTV_open ÷ (1 − d)` — see [`ltv-math.md`](ltv-math.md).

| Price falls | Your LTV | What happens |
|---|---|---|
| **−25%** | 40% | **Alarm 1** — log it. Do nothing. |
| **−40%** | 50% | **Alarm 2** — confirm reserve, calculate the top-up. Do not execute. |
| **−50%** | 60% | **Alarm 3 — ACT.** Top up from reserve, or close the loan. |
| −64.7% | 85% | Platform margin call — *you never arrive here* |
| −67.0% | 91% | Liquidation — *you never arrive here* |

Read the gap between −50% and −67%. **Seventeen percentage points of warning**,
and a written instruction telling you exactly what to do inside it. That gap is
the product.

---

## 3. The seven-year record

Peak-to-trough drawdowns, approximate. **Facilitators: verify each figure before
presenting and fill the current-cycle rows from live data — see §6.**

| Period | Drawdown | Deepest alarm reached | Liquidated? |
|---|---|---|---|
| Jun–Dec 2019 | ≈ −54% | Alarm 3 | **No** |
| Feb–Mar 2020 · COVID | ≈ −63% | Alarm 3 | **No** |
| Apr–Jul 2021 | ≈ −54% | Alarm 3 | **No** |
| Nov 2021 – Nov 2022 | ≈ **−77%** | Alarm 3 | **No — but only because you acted** |
| Mar–Aug 2024 | ≈ −33% | Alarm 1 | **No** |
| Current cycle | *fill live* | | |

Every row survives. Note that four of the five reached Alarm 3, which tells you
something important: **Alarm 3 is not an emergency. It is a normal event.** It
has fired roughly once a year for seven years. A participant who treats it as a
catastrophe will panic; a participant who expects it will act.

---

## 4. The row that proves the rule — and breaks the shortcut

Take the worst possible case. A participant buys at the **2021 peak, ≈$69,000**,
the single worst entry available in seven years, at our 30% ceiling.

Their liquidation price: `69,000 × (0.30 ÷ 0.91)` = **$22,747**.

The 2022 low was around **$15,500.**

**That is below their liquidation price. A 30% LTV position opened at the top,
left alone, is liquidated in 2022.**

Sit with that, because it is the most important thing in this document: **the
30% number by itself does not save you.** Anyone teaching "just keep LTV at 30%"
is teaching the same half-truth as "just keep it at 50%", one rung higher.

Now run the same entry with the full rules:

| Price | Event | Action taken |
|---|---|---|
| $69,000 | Open at 30% LTV, reserve funded 1:1 | — |
| $51,750 | −25% · Alarm 1 | Log it |
| $41,400 | −40% · Alarm 2 | Confirm reserve, compute the top-up |
| **$34,500** | **−50% · Alarm 3** | **Close the loan from reserve. Keep every satoshi.** |
| $22,747 | *would have been liquidation* | Loan is already closed. Nothing to liquidate. |
| $15,500 | The 2022 bottom | Still holding 100% of the asset, unencumbered |

The loan was 30% of deployed capital. The reserve was 100% of it. Closing the
loan cost **less than a third of the reserve** and ended the risk entirely.

**What saved the position was not the LTV number. It was the instruction to act
at −50%, written down while nothing was wrong.**

That is why Level 2/3 gates on the margin-call drill rather than on attendance,
and why the four alarms are set on a participant's phone before they leave the
room.

---

## 5. What this means for each level

- **Level 0** — the idea: the wealthy don't sell, and forced selling is the only
  thing that turns a drawdown into a loss.
- **Level 1** — the table in §2, and the 2021-peak case in §4. They compute the
  arithmetic themselves.
- **Level 2/3** — they set the four alarms on their own position, then pass the
  drill unaided.
- **Level 4** — reviewed quarterly against the live position and the live rate.
- **Thrive Circle** — the table is refreshed each year with the cycle just past.

---

## 6. Facilitator obligations on this document

1. **Verify every figure before you present it.** These are approximate and
   drawn from memory of the record; check them against a live chart and correct
   this file if they have drifted. A wrong number here destroys the credibility
   of everything built on it.
2. **Fill the current-cycle row** from live data for every cohort. A stress test
   that stops years before today reads as a stale sales asset.
3. **Never present §3 without §4.** The record alone implies the number saved
   them. It did not. The instruction did.
4. **Never present §2 without §1.** The alarms protect the asset, not the value.
5. **Add the next drawdown when it happens.** This table gets stronger every
   cycle, and it is the most defensible thing the programme owns.
