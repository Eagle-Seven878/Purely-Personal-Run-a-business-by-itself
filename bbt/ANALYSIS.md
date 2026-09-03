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

**The ascension structure already exists.** TCIB → BBT, with slide 44 explicitly
recalling the Fibonacci buying zones from the prior programme, and the prospectus
naming Levels 0 to 4 with prices. The path is real; it just had no curriculum
attached to each price.

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
mechanics as a teachable method, and **Train the Trainer** certifies graduates to
run Levels 0 and 1. It sits outside the levels, not among them — it is what turns
a course into a company.

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
→ Every level has a **pass gate** and a written deliverable. See
[`README.md`](README.md).

**5 · The curriculum ended at the riskiest moment.** It teaches participants to open
a leveraged position and then stops. There is no rung for managing the position
through a drawdown, and a drawdown is when people are hurt and when refunds,
complaints and reputational damage arrive.
→ **Modules 4–5 (LTV Discipline and Scenario Planning)** and **Level 4** exist for
exactly this.

**6 · Duplicated speaker notes across build slides.** Maintenance hazard at any
volume. → Script lives in `SCRIPT.md`, one beat per idea. `SLIDES.md` specifies
what is on screen and points at the beat. Build animations reference a single beat.

## Part 4 — What was built

The programme mapped onto the prospectus's own Levels 0 to 4, plus the Thrive
Circle and a Train the Trainer track. See [`README.md`](README.md).

- **Level 0** and **Level 1** are the existing BBT Principles material, corrected
  and split: the story and fit check go free, the full framework goes to the
  ₱1,999 Masterclass, extended to the four hours the prospectus sells.
- **Levels 2 and 3** are one curriculum in two delivery modes — the Session 2
  outline turned into a real script, plus the defense, scenario and accumulation
  material, plus two immersion-only modules.
- **Level 4** and the **Thrive Circle** are the cadence and the transfer work.
- **Capital preservation** became the spine at every level rather than a topic in
  one, per the direction to prove the strategy against the last five to seven
  years — see [`_shared/capital-preservation.md`](_shared/capital-preservation.md).
- **Every level closes into the next** on a gap rather than pressure, with a
  mandatory disqualifier beat, because the prospectus promises no upsell
  theatrics — see [`_shared/ascension.md`](_shared/ascension.md).

## Part 5 — What is reconstructed, and what to verify

Two things were built without a source and should be read as proposals:

1. **Level 2/3 module boundaries and timings.** The prospectus gives format and
   price but not a module list. The eight modules, the 1–6 / 1–8 split, and every
   beat timing are proposed.
2. **Modules 1, 7 and 8.** Chart structure, the personal playbook, and the
   transfer question are written from the prospectus's promises rather than from
   existing material.

Two things need checking against reality before any cohort runs:

3. **The drawdown figures** in the capital preservation table are approximate and
   drawn from the record as known at build time. Verify each one and fill the
   current-cycle row. A wrong number here undermines everything built on it.
4. **The Level 2 / Level 3 price boundary.** Modules 1–6 online at ₱15,000 and
   Modules 1–8 in the room at ₱75,000 is a commercial judgement, not a derived
   one. The curriculum supports moving the line; the file to edit is
   [`level-2-3-deep-dive-immersion/CURRICULUM.md`](level-2-3-deep-dive-immersion/CURRICULUM.md).

## Part 6 — One thing that reaches outside the curriculum

The prospectus promises **"capital preservation first, growth second"** and prices
the Immersion at ₱75,000 against it. The source deck taught "keep LTV at 50%",
which is liquidated by a 45% drawdown — a level Bitcoin has passed three times.

The correction is made throughout this build. But anything already written or
said against the old rule — sales pages, past cohort material, faculty talk tracks
— carries the old number and should be checked. That is a marketing and delivery
question, not a curriculum one, which is why it is flagged here rather than fixed.
