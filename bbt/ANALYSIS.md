# BBT · Analysis and Scale Plan

**Sources audited**
- `BBT Principles 26 April 2026_v3.pptx` — 57 slides, fully scripted, 3 modules
  (Buy Borrow Die · Yen Carry Trade · Entry Levels)
- `BBT Session 2 — Platform Walkthrough & First Execution` — 8 parts plus a
  10-step architecture, outline only

**Verdict.** The teaching engine is genuinely good and should not be rebuilt. What
is missing is everything *around* it: the curriculum stops at the moment the
participant takes on leverage, the risk rule it teaches does not survive an
ordinary Bitcoin bear market, and every asset in the programme is welded to one
facilitator. Those three things, in that order, are what to fix.

---

## Part 1 — What is working

**The participation engine.** The typed-chat check, the calculator moment, the
filter, the local analogy. Slide 38's arcade-token analogy for stablecoins is the
best thing in the deck: it takes the single most alienating concept in crypto and
makes it obvious in one sentence. The Cashflow callback on slide 40 — *"just like
Sir Ron explains Payday and Opportunity before you play"* — earns the pacing of
the whole programme.

**The teaching order.** Physical real estate → the hassle of a bank loan →
foreclosure → the same shape in digital. The room derives the value proposition
instead of being told it. Slides 6–14 are the strongest sequence in the deck.

**The honest liquidation drills.** Slides 23–28 make participants compute their own
liquidation twice, once where they survive and once where they don't. Most
programmes in this category never show the losing case at all.

**The prerequisite ladder already exists.** TCIB → BBT, with slide 44 explicitly
recalling the Fibonacci buying zones from the prior programme. The ascension
structure is there; it is just not written down anywhere.

## Part 2 — What is wrong

Detail and replacement wording for each of these is in
[`_shared/risk-disclosure.md`](_shared/risk-disclosure.md) §2.

### The serious one: the safety rule is not safe

Slide 21 teaches "keep LTV at or below 50%" as the protective rule. A 50% LTV
position is liquidated by a **45% drawdown**. Bitcoin exceeded that in 2018, in
2021, and in 2022. The rule survives a correction and fails a bear market — which
is exactly when a participant's other finances are also under pressure.

The full table is in [`_shared/ltv-math.md`](_shared/ltv-math.md) §4. BBT's rule
becomes **30% position LTV / 20% programme LTV**, backed by the 1:1 reserve.

### The 1:1 reserve rule is hidden in a speaker note

Slide 47's note says: *"if you have a capital of 100 usd, you should have a reserve
of 100 usd."* That is the single most protective sentence in the entire deck and
it is an aside on a slide about something else. Most facilitators will skip it.
Most participants will never hear it.

### The Yen Carry Trade module omits the risk that defines the trade

Slides 32–35 walk through borrowing ¥1B at 0%, converting at ¥159/$, and earning
4% on T-bills — and book the 4% as profit. The loan is repaid in yen. If the yen
strengthens, the profit is gone. That is not a footnote: it is the mechanism by
which this exact trade unwound violently in August 2024, dragging equities and
crypto down with it.

The parallel is the whole lesson. The participant's carry trade borrows a
stablecoin against Bitcoin, so their version of "the yen surges" is "Bitcoin
falls". Teaching the trade without the unwind teaches half of it, and the
dangerous half.

### The carry spread is presented as free money

Slide 40 shows a 4.05% borrow rate against a 7.18% earn rate and lets the room
conclude a guaranteed spread. Missing: Flexible Earn's headline APR is tiered, so
the blended rate on a real balance is materially lower; both legs float
independently and can invert; the earn leg has its own platform risk.

### Two competing uses for the same borrowed dollar

Module 2 says borrow USDT → convert to USDC → Earn. Module 3 says borrow → hold →
buy the dip. Participants see both demonstrated with the same $50 and are never
told how to split it. This is a live curriculum conflict, not a presentation nit.

### Session 2 has no script

Session 1 has a full beat-by-beat script. Session 2 — the session where
participants first move real money and first take on leverage — is a bullet
outline. "Demonstrate the complete transfer process" is a heading, not a script.
The highest-risk session in the programme has the least prepared delivery, and
it is the one session that absolutely cannot be improvised by a second facilitator.

### The mechanics

- **Numbers drift.** Bitcoin appears at 65,000 · 71,000 · 75,000 · 76,000 · 90,000
  across three modules. Slide 18 prints $65,000 while its own script says $75K.
- **Dates drift.** The footer, the filename, the "we apply this live on May 3"
  line, and the "next session 22 August" slide disagree with each other.
- **The script is duplicated seven times.** Slides 6 through 12 are a build
  animation, and each carries an identical copy of the same long speaker note.
  Edit one and six silently go stale.
- **The additive LTV shortcut** (`LTV + drop%`) gives 83.33% where the platform
  shows 75%. It is always conservative near the liquidation band, so it is safe —
  but a participant who sees the mismatch stops trusting the arithmetic. Label it.

## Part 3 — Why it does not scale, and what to do

Six bottlenecks, in the order they will bite.

**1 · One facilitator.** The script is written in one person's voice, with their
in-jokes and their callbacks. Nobody else can pick it up. → The
[Facilitator Standard](_shared/facilitator-standard.md) writes down the room
mechanics as a teachable method, and **Session 6** certifies graduates to run
Sessions 1 and 2. This is the rung that turns a course into a programme.

**2 · Execution sessions do not scale by adding seats.** Session 2 is hands-on
troubleshooting; past roughly thirty people it collapses into app support.
→ **Pods of eight with one coach each, and a hard pre-flight gate.** Verification,
funding and installs are confirmed asynchronously beforehand. Anyone who arrives
unverified rolls to the next cohort. This one rule is the difference between a
40-minute session and a three-hour one.

**3 · Every number is hard-coded into slides.** Every cohort needs manual slide
surgery, and the surgery is already being missed.
→ [`_shared/cohort-variables.md`](_shared/cohort-variables.md): one file per
cohort, `{{VARIABLE}}` references in the decks, abstract round numbers in worked
examples, live numbers read off the platform in the room.

**4 · Nothing gates progression.** A participant can reach the accumulation
material without ever having demonstrated they can compute a liquidation price.
→ Every rung has a **pass gate** and a written deliverable. See the ladder table
in [`README.md`](README.md).

**5 · The curriculum ends at the riskiest moment.** It teaches participants to open
a leveraged position and then stops. There is no rung for managing the position
through a drawdown, and a drawdown is when people are hurt and when refunds,
complaints and reputational damage arrive.
→ **Session 3 (Risk & Defense)** and **Session 5 (Thrive)** exist for exactly this.

**6 · Duplicated speaker notes across build slides.** Maintenance hazard at any
volume. → Script lives in `SCRIPT.md`, one beat per idea. `SLIDES.md` specifies
what is on screen and points at the beat. Build animations reference a single beat.

## Part 4 — What was built

Six rungs, each with a timed script and a slide spec. Sessions 1 and 2 are
rewrites of your existing material — same teaching order, same room mechanics,
corrected numbers and claims, de-duplicated. Sessions 3 to 6 are new and are where
the programme's missing safety and scale live.

See [`README.md`](README.md) for the ladder, the gates and the capital bands.

## Part 5 — Verify against your own Session 2 file

Session 2's script was reconstructed from your outline's eight parts and ten-step
architecture, plus every "we will show you this in the live workshop" promise made
in Session 1. The structure follows your outline exactly. Three things were not in
the outline and were supplied — confirm they match your intent:

1. **Timings.** Beat timings are proposed, not derived from your file.
2. **A named target asset.** The outline says "target asset"; the script uses BTC
   throughout, consistent with Session 1.
3. **The 30% LTV ceiling.** Your outline says "show participants how to manually
   adjust LTV" without naming a target. The script sets 30%.
