const L = require('./lib.js');
const p = L.deck('BBT Level 4 — Done-With-You Mentorship', 'Onboarding and the annual cadence');

L.cover(p, { kicker: 'Level 4 · Done-With-You · USD 3,000 · 12 months', title: 'A cadence,\nnot a class.',
  sub: 'Faculty beside you as you apply your own playbook to your own portfolio decisions, through at least one real cycle.',
  meta: 'Includes year one of the Thrive Circle   ·   Entry: Level 3 complete, signed playbook, one full cycle executed',
  note: 'There is no curriculum to deliver — there is a cadence to hold and a set of conversations that must happen.' });

L.rows(p, { kicker: 'The year', head: 'What actually happens, and when', items: [
  { t: 'Onboarding · 90 min 1:1', d: 'Playbook review against the live position. Every number re-verified.' },
  { t: 'Monthly · logged by you', d: 'The four numbers — borrow rate, blended earn rate, spread, LTV.' },
  { t: 'Quarterly · 60 min 1:1', d: 'Re-plot levels · rebalance buckets · recompute alarms · confirm reserve is still 1:1.' },
  { t: 'On any Alarm 3 · same day', d: 'This is what you are paying for.', tone: 'warn' },
  { t: 'Annually · half a day', d: 'Full plan re-run: sizing, growth ceiling, transfer, tax.' } ],
  note: 'Deliver the teaching content as it becomes relevant to that participant’s position, not as a sequence.' });

L.statement(p, { kicker: 'What you are actually buying', text: 'The Alarm 3 call is the product.',
  sub: 'Everything else is scaffolding around being reachable on the day it matters. A Level 4 participant whose Alarm 3 fired and who did not get a same-day call has not received what they bought.',
  dark: true, tone: 'warn', note: 'State this at onboarding so the expectation is explicit both ways.' });

L.statement(p, { kicker: 'Said at onboarding, in these words', text: 'I will not tell you to buy or sell.',
  sub: 'I will not manage your money. I will not give you a number to act on. What I will do is ask you the questions your playbook says to ask, in the order it says to ask them, on the day you cannot think straight. If you wanted the first thing, this is the wrong programme and I would rather refund you today than disappoint you in eight months.',
  tone: 'danger', note: 'Faculty must say this verbatim at onboarding. It is the boundary that keeps us an education company.' });

L.rows(p, { kicker: 'Monthly', head: 'The four numbers', items: [
  { n: '1', t: 'Your borrow rate today' },
  { n: '2', t: 'Your earn rate today — blended, not the headline', d: 'Flexible Earn advertises a high rate on a first small tranche and a much lower one above it. Work out your blended rate once, properly, and you will never be fooled by the headline again.', tone: 'warn' },
  { n: '3', t: 'The spread', d: 'Two minus one.' },
  { n: '4', t: 'Your position LTV' } ],
  note: 'B1, 8 min at onboarding. Put it in the calendar in the room.' });

L.rows(p, { kicker: 'When the spread inverts', head: 'Three responses, in order of preference', items: [
  { n: '1', t: 'Repay part of the loan', d: 'Reduces the loan, reduces the LTV, ends the negative carry. Best answer almost always — and the one people resist because it feels like retreating.', tone: 'safe' },
  { n: '2', t: 'Move carry capital to dry powder', d: 'Stops the bleed, keeps the optionality if you think the inversion is temporary.' },
  { n: '3', t: 'Do nothing, for a stated period', d: 'Only legitimate if you write down how long and what you will do at the end. “I will wait and see” is not a plan; “I will review in 30 days and repay if still negative” is.', tone: 'warn' } ],
  foot: 'What you never do is hold a negative carry indefinitely because the strategy has a name. The mechanism serves you. You do not serve the mechanism.',
  note: 'B2, 10 min.' });

L.stats(p, { kicker: 'The honest arithmetic', head: 'What the carry actually earns',
  items: [ { v: '$30', l: 'borrowed' }, { v: '2%', l: 'spread' }, { v: '60¢', l: 'per year', tone: 'warn' } ],
  foot: 'Sixty centavos. That is not the return. The carry pays for transaction costs and a bit of the interest — it is a rounding error against the asset. What makes this worth doing is the Bitcoin you accumulated without selling any of it, and without adding capital you did not have.',
  note: 'B3, 7 min. Anyone who sells you this strategy on the yield is selling you the wrong thing — and if that is what someone came for, this is a good moment to find out.' });

L.rows(p, { kicker: 'The cadence', head: 'Four rhythms, increasing depth', items: [
  { t: 'Daily · 30 seconds', d: 'Look at LTV. Do not open the chart. If no alarm has fired, close the app.', tone: 'safe' },
  { t: 'Monthly · 15 minutes', d: 'The four numbers. Log them.' },
  { t: 'Quarterly · 1 hour', d: 'Re-plot Fib · rebalance buckets · recompute alarms · confirm reserve is still 1:1 — it drifts as the position grows and nobody notices.', tone: 'warn' },
  { t: 'Annually · half a day', d: 'Re-run the whole plan. Position sizing, estate check, tax position.' } ],
  note: 'C1, 10 min.' });

L.statement(p, { kicker: 'Why the daily check is deliberately boring', text: 'Look at the number. Close the app.',
  sub: 'The failure mode of this strategy is not neglect — it is over-engagement. People who watch the chart all day start managing the position, and managing a position you were supposed to hold is how you end up with less Bitcoin than you started with.',
  tone: 'safe', note: 'C2, 5 min. The most useful behavioural beat in the level.' });

L.rows(p, { kicker: 'The log', head: 'One line a month', items: [
  { t: 'Date · price · LTV · borrow rate · earn rate · spread · action taken', d: '' },
  { t: 'Reason one — your nerve', d: 'In a drawdown you can see you have been here before. That is worth more than any reassurance a coach can give you.', tone: 'safe' },
  { t: 'Reason two — the BIR', d: 'They do not accept “I think I bought around then”. Your tax position is yours, and a log is what makes it answerable.', tone: 'warn' } ],
  note: 'C3, 5 min.' });

L.twoCol(p, { kicker: 'Sizing as you grow', head: 'The rules stay the same. The pesos get big enough to frighten you.',
  left: { h: 'What never changes', tone: 'safe', items: ['30% position LTV at $100 — and at $100,000', '1:1 reserve at both', '60/40 at every size', 'A ₱50,000 top-up is the same decision as a ₱500 one, with more zeroes'] },
  right: { h: 'What does change', tone: 'warn', items: ['Platform concentration — at $20,000 one platform is a single point of failure', 'Tax — get an accountant who has actually handled crypto here', 'Your own psychology — if the size costs you sleep it is too big, whatever the LTV says'] },
  note: 'D1–D2, 15 min. A tired person makes the decision that ends the position. That is not a soft observation.' });

L.statement(p, { kicker: 'And when to stop growing', text: 'Stop when losing it would change your life.',
  sub: 'Not annoy you — change it. That is the line, it is different for everyone, and you should know yours before the market makes you find out. Almost nobody names it.',
  dark: true, tone: 'warn', note: 'D3, 5 min.' });

L.rows(p, { kicker: 'Onboarding deliverable · gate', head: 'Your BBT Operating Plan — one page', items: [
  { t: 'Position', d: 'Entry, LTV, liquidation price, reserve, the three buckets.' },
  { t: 'Alarms', d: 'Four prices.' },
  { t: 'Cadence', d: 'Daily, monthly, quarterly, annual — with dates in a calendar.' },
  { t: 'Spread rule', d: 'What you do when it inverts, and within how many days.' },
  { t: 'Growth ceiling and transfer', d: 'A number, and four checkboxes.', tone: 'warn' } ],
  foot: 'You now run something that, done properly, is boring for years at a time. That is the sign it is working — the exciting version of this strategy is the one that ends.',
  note: 'GATE. Faculty signs. That page is the programme.' });

L.rows(p, { kicker: 'At the annual review', head: 'The close into the Thrive Circle', items: [
  { t: 'What you can now do', d: 'You ran your own playbook for a year, through at least one Alarm 3, with me on the phone. You did not panic and you did not improvise. That is what this whole programme exists to produce.', tone: 'safe' },
  { t: 'The gap — nothing about your discipline', d: 'The ground moves. Rates change. Your levels are from a swing that has since completed. The seven-year table now has an eighth year in it. A playbook is current the day you write it and slowly stops being true.' },
  { t: 'The Circle · USD 1,999/yr', d: 'Your first year came with Level 4, so this is a renewal, not a new purchase.' },
  { t: 'Who should not renew', d: 'If you have not logged your four numbers in six months, do not. You are not using what you have and paying for more will not fix that. Nobody will chase you, and it does not auto-renew.', tone: 'danger' } ],
  note: 'Delivered at the annual review, not before. Beat four is mandatory.' });

p.writeFile({ fileName: 'BBT-Level-4-Mentorship.pptx' }).then(f => console.log('wrote', f));
