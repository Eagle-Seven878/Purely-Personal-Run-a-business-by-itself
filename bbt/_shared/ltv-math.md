# The LTV Math — Reference Card

The one page every facilitator must be able to teach from memory. Everything in
BBT that can lose a participant money runs through these four formulas.

Platform thresholds used throughout BBT (Binance Flexible Rate loans):

| Threshold | Value | What happens |
|---|---|---|
| Max initial LTV | 78% | The most the platform will lend against your collateral |
| Margin call | 85% | Platform warns you. Add collateral or repay. |
| Liquidation | 91% | Platform sells your collateral to cover the loan. You do not choose. |
| **BBT ceiling** | **30%** | Our own rule. Far below the platform's. See §4. |

> **Facilitator gate:** these three platform numbers change. Open Binance Loans and
> read the live figures out loud at the top of every cohort. Never present them
> from the slide alone. Record what you read in the cohort's variables file.

---

## 1. What LTV actually is

```
LTV  =  loan value in USD  ÷  collateral value in USD
```

The loan does not move. The collateral does. So **LTV rises when the price
falls**, and it rises whether you are awake or not.

## 2. New LTV after a price drop

If the collateral falls by `d` (as a decimal):

```
LTV_new  =  LTV_old ÷ (1 − d)
```

Worked: LTV 50%, BTC falls 33.33%. → 0.50 ÷ 0.6667 = **75%**.

### The additive shortcut, and why we label it

Session 1 teaches a field shortcut: `LTV_new ≈ LTV_old + d`. On the same example
that gives 83.33%, not 75%.

The shortcut is **wrong but safe**. It always overstates LTV near the liquidation
band, so it never tells a participant they are safe when they are not. It is fine
as a mental check in a live room. It is not the number Binance will show them.

**Teach both, and say which is which.** A participant who computes 83% on paper
and then sees 75% on the app stops trusting the program. Losing that trust costs
more than the arithmetic.

## 3. Liquidation price — the only number that matters

```
P_liquidation  =  P_entry  ×  ( LTV_at_entry  ÷  0.91 )
```

Worked: bought at $90,000, borrowed to 50% LTV.
→ 90,000 × (0.50 ÷ 0.91) = **$49,451**.

Below $49,451 the platform sells your Bitcoin. Every participant leaves every
execution session with this number written down.

## 4. Survivable drawdown — the table that sets the BBT ceiling

How far the price can fall before each event, given the LTV you open at:

```
drawdown to margin call  =  1 − (LTV ÷ 0.85)
drawdown to liquidation  =  1 − (LTV ÷ 0.91)
```

| Opening LTV | Margin call at | Liquidated at | Survives a 2021-style −53%? | Survives a 2022-style −77%? |
|---|---|---|---|---|
| 78% (platform max) | −8.2% | −14.3% | No | No |
| 50% | −41.2% | −45.1% | **No** | No |
| 40% | −52.9% | −56.0% | Barely | No |
| 30% | −64.7% | −67.0% | Yes | No |
| 25% | −70.6% | −72.5% | Yes | No |
| 20% | −76.5% | −78.0% | Yes | Barely |
| 15% | −82.4% | −83.5% | Yes | Yes |

Read the 50% row again. **A 50% LTV position is liquidated by a 45% drawdown, and
Bitcoin has drawn down more than 45% repeatedly.** "Keep LTV at 50%" is not a
safety rule. It is a rule that survives an ordinary correction and fails a real
bear market.

This is why BBT's own ceiling is **30% LTV on the position**, backed by the
reserve rule below. Not 50%, and never the platform's 78%.

## 5. The reserve rule makes the real number

Session 1 states the reserve doctrine in a speaker note: *for every $100 of
capital deployed, hold $100 in reserve.* That rule is doing more work than the
LTV ceiling, and it belongs on a slide, not in a note.

With a 1:1 reserve, a participant who borrows to 50% of their **deployed** capital
is at 25% of their **total** capital. Two very different numbers, and the deck
currently uses one word for both.

BBT states them separately from here on:

- **Position LTV** — what Binance shows. Ceiling: **30%**.
- **Programme LTV** — loan ÷ (deployed + reserve). Ceiling: **20%**.

A participant who cannot say both numbers has not finished the session.

## 6. Adding collateral: what it actually does

```
LTV_after_topup  =  loan  ÷  (collateral + top-up)
```

Worked: $50 loan, collateral fallen to $80. LTV = 62.5%. Add $40 of BTC from
reserve → 50 ÷ 120 = **41.7%**.

Note what this means: **the top-up must come from reserve, not from the loan.**
Buying more BTC with borrowed USDT and posting it as collateral raises the loan
and the collateral together — it does not rescue a position. Session 4 covers
when that trade is legitimate; in a margin-call event it is not.
