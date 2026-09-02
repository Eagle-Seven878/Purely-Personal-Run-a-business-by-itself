# Cohort Variables

Every number, date and name that changes between cohorts lives here and nowhere
else. Slides and scripts reference `{{VARIABLE}}`; nothing is typed into a slide
by hand.

This exists because the current deck hard-codes its dates and prices, and they
have already drifted: the footer, the filename, the "we apply this live on" line,
and the "next session" slide each carry a different date, and Bitcoin appears at
five different prices across three modules — including a slide that says $65,000
while its own script says $75K.

## How to use it

1. Copy this file to `cohorts/<cohort-name>.md` the week the cohort opens.
2. Fill every field. Blank fields block the session.
3. Read the platform section off the live platform **the morning of the session**,
   not the week before.
4. Ship the filled file to every facilitator and coach on the cohort.

---

```yaml
# ── Identity ─────────────────────────────────────────────
cohort_name:            # e.g. "BBT Cohort 7"
cohort_number:
programme:              "Buy · Borrow · Thrive"
prerequisite_completed: # TCIB cohort this group came from

# ── Dates (one source of truth) ──────────────────────────
session_1_date:
session_2_date:
session_3_date:
session_4_date:
session_5_date:
session_6_date:         # optional, facilitator track only

# ── People ───────────────────────────────────────────────
lead_facilitator:
coaches:                # one per 8 participants, see facilitator-standard §5
participant_count:
pod_count:

# ── Capital band for this cohort ─────────────────────────
min_capital_php:        6000      # Session 2 entry requirement
reserve_ratio:          1.0       # 1:1 deployed to reserve
position_ltv_ceiling:   0.30
programme_ltv_ceiling:  0.20

# ── Platform figures — READ LIVE ON THE DAY ──────────────
read_on:                # timestamp the facilitator read these
btc_price_usd:
usdt_borrow_apr:
usdc_earn_apr_headline:
usdc_earn_apr_tier_cap: # the balance above which the headline rate stops
usdc_earn_apr_blended:  # at this cohort's typical balance
carry_spread:           # blended earn − borrow. If ≤ 0, say so in the room.
php_usd_rate:
max_initial_ltv:        0.78      # verify, do not assume
margin_call_ltv:        0.85      # verify
liquidation_ltv:        0.91      # verify

# ── Entry levels for the cohort's worked example ─────────
fib_high:
fib_low:
level_0618:
level_0500:
level_0382:
```

## Rule for worked examples

Teaching examples use **round abstract numbers** — $100 capital, $100,000 entry,
50% and 30% LTV — precisely so they never go stale and never contradict the live
platform. Live numbers appear only in the "read live" beats, spoken, never printed
on a slide.
