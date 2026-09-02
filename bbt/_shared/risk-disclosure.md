# Standing Risk Disclosure & Claim Corrections

Two jobs. §1 is read aloud, unedited, at every session. §2 fixes claims in the
current Session 1 deck that are wrong or unsupported, so they stop propagating
as the programme scales.

---

## 1. The standing disclosure (read at the top of every session)

> BBT teaches a strategy that uses borrowed money against a volatile asset. That
> combination can lose you more than a straight purchase would. Three things are
> true and we will not soften them:
>
> **One.** If Bitcoin falls far enough, the platform sells your Bitcoin to repay
> your loan. It does not ask you. It does not wait for a better price. You will
> have written down the exact price where that happens before you leave here.
>
> **Two.** The interest rates you borrow at and earn at both float. The gap
> between them can narrow, and it can invert — meaning you pay more than you
> earn. We will show you how to check that gap every month.
>
> **Three.** Your money sits on a platform we do not control. Platform failure,
> account freeze, and regulatory change are real risks and no strategy in this
> programme protects you from them.
>
> Never deploy money you need inside five years. Never deploy borrowed money.
> Nothing in this programme is personal financial advice, and your tax position
> is yours to settle with the BIR.

Facilitators may not paraphrase this into something friendlier. If the room goes
quiet after it, that is the disclosure working.

---

## 2. Claim corrections — current deck vs. what we will say instead

### C1 · "Lower risk because you are using less capital" (Session 1, slide 17)

**Status: wrong as stated.** Comparing digital to physical real estate, the deck
attributes lower risk to lower capital. Smaller position size lowers your
*absolute* loss. It does not lower *risk*, and Bitcoin's volatility plus instant
liquidation makes this position more likely to be wiped out than a mortgage is to
be foreclosed. A bank foreclosure takes months of missed payments and gives
notice; Binance liquidates on a price print.

**Say instead:** "Smaller ticket, so a smaller amount is at stake. But the swings
are far bigger and the platform can close you out in minutes, where a bank takes
months and sends letters first. Less money exposed, faster and deeper downside."

### C2 · "You do not actually need to sell" (Session 1, slide 17)

**Status: needs qualification.** True only while LTV stays low and the loan is
serviced. The loan does not disappear. If it is never repaid, the collateral is
eventually liquidated — that is a forced sale at the worst possible price.

**Say instead:** "You are choosing not to sell today. The loan is still owed. You
either repay it from income, repay it from a later borrow, or the platform
eventually sells for you. The strategy buys you timing, not escape."

### C3 · "Easy to borrow, very low interest rate" (Session 1, slide 17)

**Status: unsupported and time-sensitive.** Slide 40's own figures show borrow
rates of 4.05%–5.41%. That is not "very low" — it is roughly a Philippine bank's
secured lending rate, without the consumer protections.

**Say instead:** quote the live rate off the platform, and compare it to the earn
rate in the same breath.

### C4 · The carry spread is presented as free money (Session 1, slide 40)

**Status: material omission.** The deck shows borrow USDT at 4.05% and earn USDC
at 7.18% and lets the room conclude a guaranteed 3.13% spread. Three things are
missing: (a) Flexible Earn's headline APR is usually **tiered** — the high rate
applies only to a small first tranche, and the blended rate on a larger balance is
much lower; (b) both legs float independently and the spread can invert; (c) the
earn leg carries its own platform risk.

**Say instead:** "Here is the spread today. Here is the tier cap. Here is what the
blended rate is on your actual balance. And here is the month it would have gone
negative." Session 5 makes checking this a monthly job.

### C5 · The Yen Carry Trade example omits the FX risk that defines it (Session 1, slides 32–35)

**Status: the most important omission in the deck.** The worked example borrows
¥1B at 0%, converts at ¥159/$, earns 4% on T-bills, and books the 4% as profit.
It never mentions that the loan must be repaid **in yen**. If the yen strengthens,
the borrower repays more dollars than they borrowed and the 4% vanishes.

This is not hypothetical. The yen carry trade unwound sharply in **August 2024**
when the Bank of Japan raised rates: the yen surged, leveraged carry positions
were force-closed worldwide, and equity and crypto markets fell hard in a matter
of days. The trade the deck presents as clever is the same trade that blew up.

**Say instead:** teach the profit, then teach the unwind, then land the parallel —
*your* carry trade borrows a stablecoin against Bitcoin, so your equivalent of the
yen surging is Bitcoin falling. Same shape, same failure mode. Session 3 owns this.

### C6 · "Keep LTV at or below 50%" is presented as the safety rule (Session 1, slide 21)

**Status: insufficient.** A 50% LTV position liquidates on a 45% drawdown, which
Bitcoin has exceeded in 2018, 2021 and 2022. See `_shared/ltv-math.md` §4.

**Say instead:** 30% position LTV, 20% programme LTV, 1:1 reserve. State the
survivable drawdown out loud.

### C7 · The reserve rule is buried in a speaker note (Session 1, slide 47)

**Status: misplaced, not wrong.** The 1:1 reserve is the single most protective
rule in the programme and it appears only as an aside. Promoted to its own slide
in Session 1 and to a gated deliverable in Session 3.

### C8 · Two competing uses for the same borrowed dollar

**Status: unresolved conflict in the current curriculum.** Module 2 says borrow
USDT, convert to USDC, put it in Earn (the carry). Module 3 says borrow, hold the
USDT, and buy the dip (accumulation). Participants are shown both with the same
$50 and are never told how to split it.

**Resolved in Session 4** with an explicit allocation rule. Until a cohort has
been through Session 4, facilitators teach the carry only and say plainly that
dip-buying deployment comes later.

### C9 · Prices and dates are hard-coded into slides

**Status: operational defect.** The current deck carries BTC at 65,000, 71,000,
75,000, 76,000 and 90,000 in different modules, a footer reading one date, a
filename reading another, and a "next session" slide reading a third. Slide 18's
own script says $75K while the slide says $65,000.

Fixed by `_shared/cohort-variables.md`. Worked examples use round abstract numbers
that never go stale; live numbers are read off the platform on the day.
