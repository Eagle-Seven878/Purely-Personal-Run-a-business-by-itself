const L = require('./lib.js');
const p = L.deck('BBT Level 2/3 — Modules 1–3', 'Chart Structure, The Platform, First Execution');

L.cover(p, { kicker: 'Level 2 · Deep Dive  ·  Level 3 · Immersion', title: 'Modules 1–3',
  sub: 'Chart structure and levels · the platform · your first live position.',
  meta: 'Buy Borrow Thrive   ·   Level 2 ₱15,000 online   ·   Level 3 ₱75,000 face to face',
  note: 'One curriculum, two delivery modes. Modules 1–6 run in both; 7–8 are Immersion only.' });

// MODULE 1
L.section(p, { num: 1, kicker: 'Module one · 180 min · both modes', title: 'Chart Structure & Levels',
  sub: 'Everything downstream is a level. A participant who cannot set one is guessing with a rulebook.', note: 'Day 1.' });
L.rows(p, { kicker: 'The first decision', head: 'Your timeframe decides who you become', items: [
  { t: '5-minute chart', d: 'You will find a reason to act several times an hour.', tone: 'danger' },
  { t: 'Daily chart', d: 'A few times a week.', tone: 'warn' },
  { t: 'Weekly chart', d: 'A few times a year. This is ours.', tone: 'safe' } ],
  foot: '', note: 'A1, 12 min. Not because weekly is more accurate — it is not. Because our strategy holds for years, and a chart that tempts you daily will eventually win. Ask: how many times last month did you check a price and then do nothing?' });
L.statement(p, { kicker: 'And no indicators', text: 'Structure only. Where price has turned before, and where it has not.',
  sub: 'Every indicator is derived from price. If you can read structure, the indicator adds a second opinion from the same witness — and a reason to hesitate when you should act.',
  note: 'A2, 10 min.' });
L.statement(p, { kicker: 'What a level is', text: 'Levels are for deciding in advance, not knowing in advance.',
  sub: 'A level is a price where a decision has been made before — where buying overwhelmed selling, or the reverse. It is not a prediction. It does not tell you what will happen; it tells you where you will act if it does.',
  tone: 'safe', note: 'A3, 8 min. Enormous difference, and the one most people never make. Have them write it down.' });
L.rows(p, { kicker: 'Plotting the swing', head: 'Three rules that keep you honest', items: [
  { t: 'Use the most recent complete major move', d: 'Not the prettiest one.' },
  { t: 'If you have to squint to see the swing, it is not one', d: 'A clear turn, not a wobble.' },
  { t: 'Wicks or bodies — pick one and never change', d: 'We use wicks, because the wick is where trades actually happened.' } ],
  note: 'B1, 15 min. Everyone plots the same swing. Coaches check every one before moving on. Face to face: on the wall first, then their own screen.' });
L.stats(p, { kicker: 'The retracement', head: 'Three levels, ordered by how often you will see them',
  items: [ { v: '0.618', l: 'first — shallowest, most often reached, commits least' },
           { v: '0.50', l: 'second — the midpoint' },
           { v: '0.382', l: 'third — deepest, rarest, best price when it comes' } ],
  foot: 'First, second, third — by likelihood, not depth. That is the order they arrive in, and the order you deploy in.',
  note: 'B2, 15 min. Connects forward to Module 6.' });
L.statement(p, { kicker: 'And something no one else tells you', text: 'Your levels are not my levels.',
  sub: 'Plot the same chart in this room and we will be a few percent apart. Different swings, wicks versus bodies. That is fine — we are not finding the one true level, we are building a band you decided on in advance. The precision that matters is not in the number. It is in having written it down before the candle got there.',
  note: 'B3, 15 min. Anyone selling you exact levels is selling certainty, and we do not have any. This slide prevents a lot of support burden later.' });
L.rows(p, { kicker: 'Levels into decisions', head: 'A level does three jobs', items: [
  { t: 'Where you buy', d: 'The obvious one — and the only one most courses teach.' },
  { t: 'Where your ladder deploys', d: 'Module 6. You do not spend everything at one level.' },
  { t: 'Where your alarms sit', d: 'Module 4. Your LTV alarms convert to prices, and those prices live on this chart.' } ],
  foot: 'So a level is not a trading tool here. It is the shared coordinate system for everything else you do.',
  note: 'C1, 12 min.' });
L.statement(p, { kicker: 'When price is between levels', text: 'Do nothing.',
  sub: 'That is the answer, and it is the hardest one in the programme. Most of the time price is between levels, and most of the time the correct action is none. If you need to be doing something to feel like an investor, this strategy will be uncomfortable — and you should find that out now rather than in month four.',
  tone: 'safe', note: 'C3, 12 min.' });
L.rows(p, { kicker: 'Below every level', head: 'When it goes below 0.382', tone: 'danger', items: [
  { t: 'Your ladder is spent', d: 'That is the ladder working as designed, not failing.' },
  { t: 'Your reserve is not for this', d: 'Reserve defends the position you have. Module 6 is strict about it — this is how a disciplined person blows up.', tone: 'danger' },
  { t: 'Only new money from income buys down here', d: 'Not reserve. Not borrowed capital.', tone: 'safe' } ],
  foot: '2022 went far below any reasonable ladder. It happens, and it happens in the years that matter most.',
  note: 'C4, 11 min.' });
L.rows(p, { kicker: 'Re-plotting', head: 'When to move your levels', items: [
  { t: 'A new weekly swing completes', d: 'That is the only trigger. In practice, a handful of times a year.', tone: 'safe' },
  { t: 'Not when price goes somewhere you dislike', d: '', tone: 'danger' },
  { t: 'Not when someone posts a chart', d: '', tone: 'danger' },
  { t: 'Not when you are bored', d: '', tone: 'danger' } ],
  note: 'D1, 12 min. Re-plotting lives in the quarterly review.' });
L.statement(p, { kicker: 'The dishonest move', text: 'Buying with no signal, then sliding 0.618 onto your entry.',
  sub: 'Walang basehan yun. You have drawn a level around a decision you already made and given it the appearance of a plan. It has one legitimate use: showing your next levels given you already bought. If you find yourself doing it often, the problem is not your chart.',
  tone: 'danger', note: 'D2, 10 min. Must read as a warning, never a technique.' });
L.rows(p, { kicker: 'Gate', head: 'Your Level Card', items: [
  { t: 'Swing high and swing low', d: 'The two points everything else is derived from.' },
  { t: 'Your three levels', d: '0.618 · 0.50 · 0.382' },
  { t: 'The date you plotted them', d: 'Undated levels get trusted long after they should have been redrawn.', tone: 'warn' },
  { t: 'Coach signature', d: 'You carry this into Module 4 for your alarms and Module 6 for your ladder.' } ],
  note: 'D3, 8 min. GATE — coaches sign every card.' });

// MODULE 2
L.section(p, { num: 2, kicker: 'Module two · 90 min · both modes', title: 'The Platform',
  sub: 'Funding, stablecoins, and the transfer where people lose money to carelessness rather than markets.', note: 'Day 2. Pre-flight gate must be closed BEFORE this room opens.' });
L.statement(p, { kicker: 'Tonight the money is real', text: 'Pre-flight: verified, funded, installed.',
  sub: 'Coaches confirm pod by pod, out loud. Anyone who fails the gate leaves for the next cohort — warmly, and without staying “just to watch”. They will pull a coach away from their pod within twenty minutes.',
  dark: true, tone: 'warn', note: 'A2. Do NOT take a show of hands — check. This one rule is the difference between a 40-minute session and a three-hour one.' });
L.flow(p, { kicker: 'The ten steps', head: 'The whole level on one screen', steps: [
  { t: 'Fund', d: 'Local account → Coins.ph' }, { t: 'Convert', d: 'PHP → USDT/USDC' },
  { t: 'Transfer', d: 'Coins.ph → Binance' }, { t: 'Navigate', d: 'Home → Trade → Assets' }, { t: 'Acquire', d: 'Stablecoin → asset' } ],
  foot: 'Then: Collateralise · Borrow · Manage risk · Apply the principle · Execute. Return to this slide at every module transition — it is how eight pods stay together.',
  note: 'A3. Binance does about a hundred things. We use four. If you find yourself somewhere I have not taken you, come back.' });
L.statement(p, { kicker: 'The checklist that goes on your phone', text: 'ASSET → ADDRESS → NETWORK → AMOUNT → FEE → CONFIRM',
  sub: 'Six words. Say them with me. The one that ends people is NETWORK — if the asset is right and the address is right but the network is wrong, the money goes somewhere neither Coins.ph nor Binance can retrieve it from. There is no support ticket for that.',
  tone: 'danger', note: 'B3, 9 min. Leave this on screen through the whole demo AND through Phase A. Have every participant read it back before Block H.' });
L.statement(p, { kicker: 'Say it plainly', text: 'Wrong network = gone.',
  sub: 'Not recoverable by Coins.ph. Not recoverable by Binance. Not recoverable by support. The address and the network must match — both, every time, including the hundredth time when you are confident and not looking.',
  dark: true, tone: 'danger', note: 'B3. This is the irreversible mistake. Be blunt.' });
L.rows(p, { kicker: 'Why stablecoins at all', head: 'Not just another crypto you hold', items: [
  { t: 'The unit you borrow in' }, { t: 'The unit you earn in' },
  { t: 'The unit your LTV is measured in', d: 'It is the ruler you measure everything else with. If it moved, none of the arithmetic from Level 1 would hold.', tone: 'safe' } ],
  foot: 'Remember Timezone — you cannot play with pesos, you convert to credits first. Same thing, plus a second reason that matters more.',
  note: 'B2, 8 min.' });
L.rows(p, { kicker: 'Assets', head: 'Four tabs. Only four.', items: [
  { t: 'Overview', d: 'Everything you hold and what it is worth.' },
  { t: 'Earn', d: 'Where lending and borrowing live. The engine room.', tone: 'safe' },
  { t: 'Spot', d: 'Your actual crypto holdings.' },
  { t: 'Funding', d: 'Your funding balance and movements in and out.' } ],
  foot: 'Every other tab is not part of this module. Said explicitly so that a tab you find at home is not a surprise.',
  note: 'Part 4, 10 min.' });

// MODULE 3
L.section(p, { num: 3, kicker: 'Module three · 90 min · both modes', title: 'First Execution',
  sub: 'Asset → collateral → borrow → adjust LTV → check liquidation price.', note: 'Day 2. The core. Do not compress to make time.' });
L.statement(p, { kicker: 'Posting collateral', text: 'Pledged, not sold.',
  sub: 'Nothing about your Bitcoin changed — you still own the same amount. What changed is that the platform now has a claim on it. Exactly like a title deposited with a bank, except it took four seconds instead of six weeks.',
  note: 'E1, 6 min. Callback to Level 1’s bank walk.' });
L.statement(p, { kicker: 'The platform will offer you its maximum', text: 'That is not advice.',
  sub: 'The platform earns on the loan. Its interests and yours are not the same, and there is no rule that says the number it offers is a number you should take. Level 1, drill one: 78% LTV, a 10% drop, margin call. This is the screen where that decision gets made.',
  dark: true, tone: 'warn', note: 'E2, 6 min. Read the live max LTV aloud, then say this immediately. Never show the max alone.' });
L.stats(p, { kicker: 'Set the slider to 30%', head: 'Not the platform’s max. Not 50. Thirty.',
  items: [ { v: '30%', l: 'survives a 67% drawdown', tone: 'safe' }, { v: '50%', l: 'survives 45%', tone: 'warn' }, { v: '78%', l: 'survives 14%', tone: 'danger' } ],
  foot: 'Bitcoin has fallen more than 45% three times in the last eight years. Thirty is not caution — it is the number that survives the actual history of this asset.',
  note: 'E3, 8 min. Move the slider live and let the room watch the liquidation price climb toward today’s price as LTV rises.' });
L.tableSlide(p, { kicker: 'The formula', head: 'Liquidation price = entry × (LTV ÷ 0.91)',
  cols: ['Your LTV', 'Multiplier', 'If you entered at $100,000', 'Distance from entry'],
  rows: [ [{ t: '30%', tone: 'safe', b: true }, '× 0.33', { t: '$32,967', tone: 'safe', b: true }, { t: '−67%', tone: 'safe' }],
          ['50%', '× 0.55', '$54,945', { t: '−45%', tone: 'warn' }],
          [{ t: '78%', tone: 'danger' }, '× 0.857', { t: '$85,714', tone: 'danger', b: true }, { t: '−14%, a bad week away', tone: 'danger' }] ],
  widths: [2.4, 2.2, 3.6, 3.6],
  foot: 'Same asset. Same money. One slider.',
  note: 'E4, 5 min. The platform prints this for you — but they must be able to derive it.' });
L.statement(p, { kicker: 'Gate', text: 'Write it on paper. Not a screenshot.',
  sub: '“If Bitcoin reaches ________, I have already lost the position.” In your own handwriting. Coaches — every person, every pod. Nobody moves to the execution phases without it.',
  tone: 'warn', note: 'G3, 4 min. GATE. Paper, not a screenshot — they will want it in their hand on a bad day.' });
L.flow(p, { kicker: 'Hands on', head: 'Three phases — you do it, coaches watch', steps: [
  { t: 'Phase A · Coins.ph', d: 'Fund → buy stablecoin → prepare transfer. The six-word checklist read aloud before anyone sends.' },
  { t: 'Phase B · Binance', d: 'Receive → verify asset → trade. Do not trade until you have SEEN the arrival.' },
  { t: 'Phase C · The strategy', d: 'Asset → collateral → borrow → adjust LTV to ≤30% → check liquidation price.', tone: 'safe' } ],
  foot: 'The lead narrates phase transitions only. Coaches troubleshoot inside pods — the lead never stops for one person’s app.',
  note: 'Part 8, 45 min. Then re-demonstrate whichever step generated the most coach interventions. Always re-demonstrate something — “everyone was perfect” means the coaches were not watching.' });
L.rows(p, { kicker: 'Pass gate', head: 'Your Position Card', items: [
  { t: 'Entry price and amount deployed' }, { t: 'Borrowed, and your position LTV', d: 'Must be ≤ 30%.' },
  { t: 'Your liquidation price', d: 'Written by hand.', tone: 'warn' }, { t: 'Your reserve amount' },
  { t: 'Said out loud to your coach', d: '“My LTV is ___. I am liquidated at ___. My reserve is ___.”', tone: 'safe' } ],
  foot: 'A participant who cannot say all three numbers has not passed, regardless of whether the position is open.',
  note: 'H3/I1. GATE. Photograph the card, keep the paper.' });
L.twoCol(p, { kicker: 'Before the next module', head: 'What you may and may not do',
  left: { h: 'Do', tone: 'safe', items: ['Check your LTV once a day — not ten times', 'Put your borrowed stablecoin into Earn. Carry only.', 'Message your coach if LTV moves toward 40%'] },
  right: { h: 'Do not', tone: 'danger', items: ['Raise your LTV. Not for any reason, not for any dip.', 'Buy a dip with borrowed capital yet — that needs a written plan you do not have', 'Add a second asset', 'Improvise at midnight'] },
  note: 'I2. The do-nots are the ones that matter.' });

p.writeFile({ fileName: 'BBT-Level-2-3-Modules-1-3.pptx' }).then(f => console.log('wrote', f));
