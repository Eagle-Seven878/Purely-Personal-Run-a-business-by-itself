# The Two-Layer Model

**Nothing in this document is built yet.** BBT is the crypto programme, and it is
the only programme in this repository. This file records the *architecture* that
lets local stocks, US stocks, forex and options become their own programmes later
without rewriting the curriculum each time.

It exists so that every script written today is written in a shape that can be
reused tomorrow. That costs nothing now and saves months later.

---

## The split

Every module in every level is written as two kinds of beat.

### Layer A — the principle. Invariant.

Never changes, whatever the asset:

- Buy at disciplined levels, not on hype candles
- Borrow instead of selling — selling ends compounding
- Loan-to-value discipline and the liquidation arithmetic
- The reserve rule, 1:1
- The alarm ladder and the written instruction
- Redeploy with rules, not emotions
- Position sizing and the growth ceiling
- Capital preservation first, growth second
- The transfer question

This is what the faculty is certified on. It is what "the principle and the
learners never change" actually means, written down.

### Layer B — the instrument. Swaps out.

Changes entirely per asset class:

- The venue and the account rails
- Order types and the trade screen
- How borrowing works: crypto loan, margin account, securities-backed line
- The actual thresholds — margin call and liquidation levels differ by venue and
  by regulator
- Fees, settlement, and tax treatment
- What "a level" means on that instrument's chart

---

## How a script is written for reuse

In every `SCRIPT.md`, each beat is tagged:

```
### B7 · Why 78% ends you — 5 min   [LAYER A]
### C3 · The Binance loan screen — 8 min   [LAYER B · crypto]
```

Layer A beats are written once and shared. Layer B beats are written per
instrument. A new programme is then: keep every Layer A beat, replace every
Layer B beat, re-verify the arithmetic against the new venue's thresholds.

---

## Honest fit assessment

The principle does not transfer equally, and pretending it does would break the
promise on page 2 of the prospectus. Assessed before anything is built:

| Asset class | Fit | Why |
|---|---|---|
| **Bitcoin / crypto** | Native | Appreciating asset, borrow against it on-venue. This is the reference implementation. |
| **US stocks** | Strong | Appreciating assets; margin and securities-backed lines are the same mechanic. Layer B is substantial — Reg T, portfolio margin, different call levels — but Layer A holds intact. |
| **Local (PSE) stocks** | Good | Same mechanic. Layer B must cover local margin rules, lower liquidity, and wider spreads honestly. |
| **Forex** | Partial | The **carry trade** lives here and Level 1 already teaches it. But currencies are not an appreciating asset you hold for decades, so "buy and never sell" does not apply. This would be a *carry* programme, not a *buy-borrow* programme, and should be named accordingly. |
| **Options** | **Does not fit** | Options expire. You cannot hold one forever and you cannot meaningfully borrow against one. The core promise — buy, borrow, never sell — is structurally impossible. An options programme belongs under the same company and the same faculty standard, but it is a **different framework** and must not be sold as BBT. |

Calling an options course "BBT for Options" would contradict the strategy page of
our own prospectus. It would also be the first thing a sharp prospect catches.

---

## What is needed before any second programme opens

1. A faculty member certified on Layer A — the [Train the Trainer](../train-the-trainer/) track.
2. Layer B written and **verified against the live venue**, especially the
   margin-call and liquidation thresholds, which are not 85% and 91% anywhere
   except crypto lending.
3. A capital-preservation stress test **rebuilt for that asset's own history**.
   The seven-year Bitcoin table does not transfer; every instrument needs its own,
   built the same way — see [`capital-preservation.md`](capital-preservation.md).
4. A decision on naming, per the fit table above.

Do these in order. Step 3 is the one that will be tempting to skip and is the one
that carries the promise.
