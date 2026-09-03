const L = require('./lib.js');
const p = L.deck('BBT — Train the Trainer', 'Faculty certification workshop');

L.cover(p, { kicker: 'Train the Trainer · 2 days · max 12 candidates', title: 'The room is not\nthe constraint.',
  sub: 'Certifying a graduate to run Levels 0 to 3 to the standard.',
  meta: 'Not one of the levels · By invitation · Entry: Level 3 Immersion complete, two cohorts observed, one live drawdown survived',
  note: 'This is what makes BBT a company rather than a course.' });

L.stats(p, { kicker: 'The bottleneck', head: 'One instructor ≈ two cohorts a month',
  items: [ { v: '2', l: 'cohorts per month, per instructor' }, { v: '0', l: 'amount marketing moves that number', tone: 'danger' } ],
  foot: 'Every asset we have — the script, the analogies, the room mechanics, the callbacks — lives in one person’s head and one person’s calendar. The number of people who can run a room is the constraint.',
  note: 'A1, 20 min. This rung has one job: turn what one person does instinctively into something twelve people can do reliably. Not identically — reliably.' });

L.twoCol(p, { kicker: 'The boundaries', head: 'What you may and may not change',
  left: { h: 'Must NOT change', tone: 'danger', items: ['The standing disclosure — verbatim, always', 'The LTV ceilings — 30% position, 20% programme', 'The reserve rule — 1:1', 'The gates — no exceptions for people you like', 'The nine claim corrections', 'The pod ratio — one coach per eight', 'The capital preservation table, and both halves of what it claims', 'The five closing beats, including the disqualifier'] },
  right: { h: 'MUST change', tone: 'safe', items: ['The analogies. Mine are mine.', '“Sino dito naglaro na sa Timezone” works because it is my room and my reference.', 'Find yours. A borrowed analogy delivered flat is worse than a plain explanation.', '', 'MAY change: pacing inside a beat, the order of questions you take, your own worked examples — as long as they use round abstract numbers.'] },
  note: 'A2, 15 min. Candidates misread the middle column as optional. It is not.' });

L.statement(p, { kicker: 'The line you never cross', text: 'You never make a return claim.',
  sub: 'Not a number, not a range, not “historically”, not “conservatively”, not “people in my last cohort”. Not in the room, not in a DM, not in a testimonial you repost. We teach a mechanism and its failure modes; the participant does their own arithmetic. That is the whole compact, and it is the only reason we can teach leverage to beginners with a straight face.',
  dark: true, tone: 'danger', note: 'A3, 10 min. Crossing it ends your certification, not a conversation about it. This slide stays visible during every Day 2 teach-back.' });

L.rows(p, { kicker: 'The room mechanics', head: 'Four moves — practise each on a partner', items: [
  { n: '1', t: 'The typed check', d: 'Closed question, one word, WAIT, acknowledge. The wait is the skill — most new facilitators ask and move on in two seconds, which trains the room that answering is optional.' },
  { n: '2', t: 'The calculator moment', d: 'Give them arithmetic they can do. A number you compute yourself is a number you believe. This is why Level 1 works and a lecture on the same content does not.' },
  { n: '3', t: 'The filter', d: 'Open question, take real answers, thank each one, then steer. You NEVER correct a participant in front of the room — acknowledge, then add.', tone: 'warn' },
  { n: '4', t: 'The local analogy', d: 'Land, refinancing, foreclosure, arcade tokens, Cashflow. Every abstract concept needs one, and it must come from your room’s life.' } ],
  note: 'B1, 30 min, then 40 min practicum on the bank walk.' });

L.rows(p, { kicker: 'Handling the room', head: 'The seven hard questions — answered cold', items: [
  { t: '“How much will I make?”', d: '“I will not give you a number, and anyone who does is selling you something.”', tone: 'danger' },
  { t: '“Is this safe?”', d: '“No. It is leveraged exposure to the most volatile major asset there is.” Then the drawdown table.', tone: 'warn' },
  { t: '“My friend runs 78% and he is fine.”', d: '“Then a 15% drop closes him out. Bitcoin does 15% in a bad week.” Do not editorialise beyond the arithmetic.' },
  { t: '“My coach last cohort said 50% was fine.”', d: 'You WILL get this one. Do not defend the old material — show the table and say plainly that we corrected it.', tone: 'warn' } ],
  foot: 'Also rehearse: “why not put it all in?”, “what if Binance goes down?”, “can I use my emergency fund?”',
  note: 'B3, 20 min. Trainer plays the difficult participant; candidates answer cold.' });

L.rows(p, { kicker: 'Day 1 gate · no notes · written', head: 'The math from memory — 8 of 8 to pass', items: [
  { t: 'Define LTV · new LTV after a d% drop · the additive shortcut and why we label it', d: '' },
  { t: 'Liquidation price formula · survivable drawdown at 78 / 50 / 30 / 20%', d: '' },
  { t: 'Position vs programme LTV, with a worked example', d: '' },
  { t: 'Top-up to restore a target LTV · alarm price conversion from a target LTV', d: '' } ],
  foot: 'Pass mark: 8 of 8. This is arithmetic, not judgement. There is no partial credit on a number that decides whether someone keeps their Bitcoin.',
  note: 'C1, 30 min.' });

L.statement(p, { kicker: 'The hardest thing a new facilitator does', text: '“We taught 50%. We ran the arithmetic. The rule is 30% now. Check my work.”',
  sub: 'Some of your room will have heard 50% from a previous cohort or a friend. Do not defend it. Do not blame whoever taught it. Do not soften it into “some people prefer 30%”. A programme that corrects itself in public is more trustworthy than one that never has to — deliver it as strength, because it is.',
  tone: 'safe', note: 'C2, 30 min. Each candidate delivers Level 1 beat B9 to the room. Scored on: table shown, no defensiveness, no blame, room invited to check the arithmetic.' });

L.tableSlide(p, { kicker: 'Day 2 · scored', head: 'Teach-back rubric — two beats drawn blind, both must pass',
  cols: ['Criterion', 'Weight', 'Fail condition'],
  rows: [ ['Content accuracy', '30%', 'Any wrong number, or any uncorrected claim from the corrections list'],
          ['Room mechanics', '20%', 'No typed check, no calculator moment, or corrected someone publicly'],
          ['Timing', '15%', 'More than 50% over the beat’s allotted time'],
          ['Local analogy', '15%', 'Borrowed the trainer’s analogy instead of bringing their own'],
          [{ t: 'Honesty', b: true, tone: 'danger' }, { t: '20%', b: true, tone: 'danger' }, { t: 'ANY return claim — automatic fail for the whole certification', b: true, tone: 'danger' }] ],
  widths: [2.8, 1.6, 7.4],
  foot: 'A candidate who fails one beat re-teaches it at the next workshop. A candidate who makes a return claim does not certify.',
  note: 'Block D, 180 min. Keep this rubric on screen throughout so scoring is transparent.' });

L.rows(p, { kicker: 'Day 2 · the execution simulation', head: 'Three planted problems, unannounced', items: [
  { n: '1', t: 'A participant arrives unverified and asks to “just watch”', d: 'Did they hold the pre-flight gate — warmly and firmly?' },
  { n: '2', t: 'A participant about to send on the wrong network', d: 'Did the six-word checklist catch it before send?', tone: 'warn' },
  { n: '3', t: 'A participant quietly sets 65% LTV because “the app said 78 was fine”', d: 'Did they catch it without shaming the person — and keep the other seven pods moving?', tone: 'danger' } ],
  foot: 'The third is the one candidates fail. The instinct is to stop the room and make an example. The correct move is to fix it quietly with that person, then address the principle to everyone afterwards.',
  note: 'Block E, 90 min.' });

L.twoCol(p, { kicker: 'Certification', head: 'What it permits, and what it never permits',
  left: { h: 'Certified to run', tone: 'safe', items: ['Level 0 solo', 'Level 1 solo', 'Level 2 modules as lead, with coaches assigned', 'Level 3 Immersion co-facilitated with a certified lead for the first two cohorts'] },
  right: { h: 'Never', tone: 'danger', items: ['Level 4 — mentorship is faculty only', 'Certifying other facilitators', 'Altering the ceilings, reserve rule, gates or disclosure', 'Running an execution session below one coach per eight', 'Making a return claim'] },
  note: 'F1. A certified facilitator is certified on Layer A — the principle — which is what transfers to any future asset programme.' });

L.rows(p, { kicker: 'Standing obligations', head: 'What you carry after certification', items: [
  { t: 'Submit cohort variables for every cohort you run', d: '' },
  { t: 'Verify the capital preservation figures before every cohort', d: 'And correct the shared file when they have drifted.', tone: 'warn' },
  { t: 'Report every participant liquidation within 48 hours', d: 'With the position card and the alarm history. No blame attaches to a facilitator for a liquidation — it attaches to not reporting one. We cannot improve the defense modules from cohorts we never hear about.', tone: 'danger' },
  { t: 'Re-certify annually · re-read the corrections before every cohort', d: 'They change as the platform changes.' } ],
  foot: 'The programme’s reputation is not built in the cohorts where Bitcoin goes up. It is built in the one where it falls 60% and your participants are still holding — because you made them write a number on a card while nothing was wrong.',
  note: 'F2–F3. Then: go run a room.' });

p.writeFile({ fileName: 'BBT-Train-the-Trainer.pptx' }).then(f => console.log('wrote', f));
