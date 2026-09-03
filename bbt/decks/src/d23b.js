const L = require('./lib.js');
const p = L.deck('BBT Level 2/3 — Modules 4–6', 'LTV Discipline, Scenario Planning, Accumulation');

L.cover(p, { kicker: 'Level 2 · Deep Dive  ·  Level 3 · Immersion', title: 'Modules 4–6',
  sub: 'LTV discipline and the defense · scenario planning · the accumulation system.',
  meta: 'Buy Borrow Thrive   ·   Day 3   ·   The drill is a gate',
  note: 'The most important day in the programme. A drawdown is when people are hurt.' });

// MODULE 4
L.section(p, { num: 4, kicker: 'Module four · 85 min · both modes', title: 'LTV Discipline & The Defense',
  sub: 'Anyone can open a position — the platform makes it four taps. This is how you still hold it in two years.',
  note: 'Cards out. Read me your liquidation price, one per pod.' });
L.stats(p, { kicker: 'Three numbers', head: 'Two belong to the platform. One belongs to you.',
  items: [ { v: '85%', l: 'margin call — the platform’s warning line', tone: 'warn' },
           { v: '91%', l: 'liquidation — the platform’s action line', tone: 'danger' },
           { v: '30%', l: 'your ceiling — nobody enforces it but you', tone: 'safe' } ],
  foot: 'The gap between 30 and 85 is not wasted capacity. That gap is the entire product — it is what you are buying with the discipline.',
  note: 'B1, 6 min.' });
L.tableSlide(p, { kicker: 'Survivable drawdown', head: 'Compute your own row', cols: ['Opening LTV', 'Margin call', 'Liquidated', 'Survives 2021 −53%?', 'Survives 2022 −77%?'],
  rows: [ ['78%', '−8.2%', '−14.3%', { t: 'No', tone: 'danger' }, { t: 'No', tone: 'danger' }],
          ['50%', '−41.2%', '−45.1%', { t: 'No', tone: 'danger' }, { t: 'No', tone: 'danger' }],
          [{ t: '30%', b: true, tone: 'safe' }, '−64.7%', { t: '−67.0%', b: true, tone: 'safe' }, { t: 'Yes', tone: 'safe', b: true }, { t: 'No', tone: 'danger', b: true }],
          ['20%', '−76.5%', '−78.0%', { t: 'Yes', tone: 'safe' }, { t: 'Barely', tone: 'warn' }] ],
  widths: [2.6, 2.2, 2.2, 2.4, 2.4],
  foot: 'drawdown to liquidation = 1 − (LTV ÷ 0.91). Look at the 30% row honestly — it does not survive 2022. Your ceiling is a much better bet than 50%, and it is still a bet.',
  note: 'B2, 8 min. That honesty is what makes the reserve rule land. The ceiling alone is not the answer.' });
L.statement(p, { kicker: 'What nobody warns you about', text: 'It arrives at 3am.',
  sub: 'During a week when everything is red and every feed says it is going lower. When your business is also having a bad month, because these things correlate. You will not be making a good decision in that moment. So you make the decision now, tonight, in this room, while nothing is wrong.',
  dark: true, tone: 'warn', note: 'B3, 6 min. That is what the rest of this module is.' });
L.rows(p, { kicker: 'The reserve doctrine', head: 'For every peso you deploy, hold a peso back', items: [
  { t: 'Not in the position', d: 'Obvious, but people drift. Reserve deployed is reserve that does not exist.' },
  { t: 'Not in the same asset', d: 'Bitcoin held as reserve against a Bitcoin position is not reserve — when you need it, it has fallen by the same percentage that created the emergency.', tone: 'warn' },
  { t: 'Reachable in under an hour', d: 'Reserve in a time-locked earn product with a seven-day unbonding is not reserve. Check the lock terms tonight.', tone: 'warn' },
  { t: 'Used it? Rebuild it.', d: 'Before a new position. Before adding. Before anything.', tone: 'safe' } ],
  note: 'C1–C4, 20 min. Reserve is not “money I have not invested yet”. It is a funded position in doing nothing, and it has a job.' });
L.stats(p, { kicker: 'Two numbers, and you need both', head: 'Position LTV and programme LTV',
  items: [ { v: '30%', l: 'position LTV — loan ÷ collateral. What Binance shows.', tone: 'safe' },
           { v: '15%', l: 'programme LTV — loan ÷ (deployed + reserve). What you actually carry.', tone: 'safe' } ],
  foot: '$100 deployed, $30 borrowed, $100 reserve. Compute both. Write both on the Risk Card.',
  note: 'C3, 5 min. The old deck used one word for both.' });
L.rows(p, { kicker: 'Alarm architecture', head: 'Four alarms — everyone sets all four tonight', items: [
  { n: '1', t: 'LTV 40% — awareness', d: 'You do nothing. You just know.' },
  { n: '2', t: 'LTV 50% — prepare', d: 'Reserve confirmed reachable, top-up calculated. Not executed — calculated.', tone: 'warn' },
  { n: '3', t: 'LTV 60% — ACT', d: 'Top up from reserve to bring LTV back to 30%. Message your coach the same day.', tone: 'warn' },
  { n: '4', t: 'Liquidation price × 1.3', d: 'The “this is serious” line.', tone: 'danger' } ],
  foot: 'Alarm 3 fires 25 points below the platform’s margin call. You are never going to meet Binance’s margin call, because you will have acted long before it. That is the design.',
  note: 'D1, 8 min. Demonstrate live, then every pod sets all four before moving on.' });
L.tableSlide(p, { kicker: 'Alarms are price, not LTV', head: 'price at target LTV = entry × (entry LTV ÷ target LTV)',
  cols: ['Target LTV', 'Working', 'Alarm price', 'Action'],
  rows: [ ['40%', '100,000 × (0.30 ÷ 0.40)', '$75,000', 'Log it'],
          ['50%', '100,000 × (0.30 ÷ 0.50)', '$60,000', 'Calculate, do not execute'],
          [{ t: '60%', b: true, tone: 'warn' }, '100,000 × (0.30 ÷ 0.60)', { t: '$50,000', b: true, tone: 'warn' }, { t: 'ACT', b: true, tone: 'warn' }],
          ['liq × 1.3', '32,967 × 1.3', '$42,857', { t: 'This is serious', tone: 'danger' }] ],
  widths: [2.2, 3.6, 2.6, 3.4],
  foot: 'Everyone compute your four prices now and write them on the card.',
  note: 'D2, 5 min. Worked from a $100,000 entry at 30% LTV.' });
L.rows(p, { kicker: 'The decision tree', head: 'When an alarm fires you do not think. You read.', items: [
  { t: 'LTV 40%', d: 'Nothing. Log the date.' },
  { t: 'LTV 50%', d: 'Confirm reserve is reachable. Calculate the top-up. Do not execute.', tone: 'warn' },
  { t: 'LTV 60%', d: 'Execute the top-up from reserve. Return LTV to 30%. Message your coach the same day.', tone: 'warn' },
  { t: 'Reserve exhausted and LTV still climbing', d: 'Repay the loan from reserve, close the borrow, KEEP THE BITCOIN. Losing the loan is not losing. Losing the Bitcoin is losing.', tone: 'danger' } ],
  foot: 'The strategy is optional. The asset is the point.',
  note: 'D3, 7 min. The last branch is the most important thing in the module — give it visual weight and say it twice.' });

// MODULE 5
L.section(p, { num: 5, kicker: 'Module five · 45 min · both modes', title: 'Scenario Planning',
  sub: 'The margin-call drill. Run it like a fire drill — and it is a gate.', note: 'Coaches score individually. No notes for the final round.' });
L.tableSlide(p, { kicker: 'Drill one · worked together', head: 'Entry $100,000 · $100 deployed · 30% LTV · $100 reserve',
  cols: ['Bitcoin falls to', 'The drop', 'New LTV', 'Which alarm', 'What you do'],
  rows: [ ['$55,000', '−45%', { t: '54.5%', b: true }, { t: 'Alarm 2', tone: 'warn', b: true }, 'Confirm reserve. Calculate $45. Do NOT execute.'] ],
  widths: [2.3, 1.8, 1.8, 2.0, 3.9],
  foot: 'Collateral needed to return to 30% = 30 ÷ 0.30 = $100. You have $55. So $45 from reserve — calculated, not spent. Alarm 2 is prepare, not act.',
  note: 'E1, 8 min.' });
L.tableSlide(p, { kicker: 'Drill two · in pods, 3 min', head: 'Same position. Bitcoin falls to $45,000.',
  cols: ['The drop', 'New LTV', 'Alarm', 'Action', 'Reserve left'],
  rows: [ ['−55%', { t: '66.7%', b: true, tone: 'warn' }, { t: 'Alarm 3', tone: 'warn', b: true }, { t: 'Top up $55 from reserve', b: true }, { t: '$45', tone: 'warn' }] ],
  widths: [2.0, 2.0, 1.8, 3.8, 2.2],
  foot: 'Collateral needed $100, you have $45, so top up $55. Rebuilding the reserve is now the next priority.',
  note: 'E2, 10 min. Let pods work it before revealing.' });
L.tableSlide(p, { kicker: 'Drill three · the teaching round', head: 'You topped up. 0.002222 BTC, loan $30, reserve $45. Bitcoin falls to $28,000.',
  cols: ['Option', 'Cost', 'What you are left holding', 'Verdict'],
  rows: [ ['Top up again to 30%', '$37.78 of a $45 reserve', 'A leveraged position with $7.22 of defence', { t: 'Technically available. Strategically finished.', tone: 'danger' }],
          [{ t: 'Repay the $30 loan outright', b: true, tone: 'safe' }, { t: '$30 of a $45 reserve', b: true }, { t: 'All 0.002222 BTC, unencumbered, $15 left', b: true, tone: 'safe' }, { t: 'Liquidation risk goes to zero', tone: 'safe', b: true }] ],
  widths: [3.0, 2.6, 3.4, 2.8],
  foot: 'LTV = 30 ÷ 62.22 = 48.2%. You started with 0.001 BTC. You end this drawdown with 0.002222 — more than double — no loan, money left over, and Bitcoin down 72%.',
  note: 'E3, 10 min. THE teaching round. The lesson is not “top up until the reserve is gone”. There is a point where the right move is to close the loan and keep the asset. That is the whole programme in one drill.' });
L.statement(p, { kicker: 'Round four · the gate', text: 'Individually. No notes. Scored.',
  sub: 'Your coach gives you a scenario. You state: new LTV, which alarm, the action, the amount, and your remaining reserve. A participant who cannot do this unaided does not proceed to Module 6 — they repeat with the next cohort, at no charge, with their position open and a coach watching.',
  dark: true, tone: 'warn',
  note: 'E4, 7 min. GATE. That is not a penalty — Module 6 hands them a bigger position than Module 4 taught them to defend.' });

// MODULE 6
L.section(p, { num: 6, kicker: 'Module six · 150 min · both modes', title: 'The Accumulation System',
  sub: 'The first module where the failure mode is greed rather than ignorance.',
  note: 'Reserve check first — funded 1:1, pod by pod. Anyone short observes and writes their plan, but does not deploy.' });
L.twoCol(p, { kicker: 'Naming the conflict', head: 'One peso, two jobs — you have been carrying this since Level 1',
  left: { h: 'Carry capital', sub: 'Sits in Earn', items: ['Works every day', 'Certain, small, continuous', 'NOT there when the dip comes'] },
  right: { h: 'Dry powder', sub: 'Sits in stablecoin', tone: 'warn', items: ['Earns nothing', 'Uncertain, lumpy, occasional', 'IS there the day price hits your level'] },
  note: 'B1–B2, 14 min. The mistake almost everyone makes is holding it all as carry — because carry feels productive and cash feels lazy — then watching the best entry in eighteen months arrive with nothing to buy it with.' });
L.stats(p, { kicker: 'The allocation rule', head: 'Three buckets. Say them.',
  items: [ { v: 'RESERVE', l: 'defends the position you have — never spent on a dip', tone: 'safe' },
           { v: 'DRY POWDER', l: 'buys a position you do not have yet — 40%', tone: 'warn' },
           { v: 'CARRY', l: 'earns the spread — 60%', tone: 'safe' } ],
  foot: 'Dry powder is topped up before carry. And reserve is NOT dry powder — spending reserve on a dip is the single most common way a disciplined person blows up. They buy the 40% drawdown with their defence money, and the 60% drawdown liquidates them.',
  note: 'B3, 11 min. Write all three amounts on the plan tonight, separately.' });
L.tableSlide(p, { kicker: 'The ladder', head: 'Do not spend dry powder at one level',
  cols: ['Level', 'Price (worked)', 'Deploy', 'Why'],
  rows: [ ['0.618', '$104,720', { t: '30%', b: true }, 'Shallowest, most likely reached, smallest commitment'],
          ['0.50', '$100,000', { t: '30%', b: true }, 'The midpoint'],
          ['0.382', '$95,280', { t: '40%', b: true, tone: 'safe' }, 'Deepest, least likely, biggest reward for reaching it'] ],
  widths: [1.8, 2.6, 1.8, 5.6],
  foot: '$40 dry powder, Fib high $120,000, low $80,000 → $12 · $12 · $16. Weighted to the deeper levels on purpose: reach only 0.618 and you have kept 70% for better.',
  note: 'C2, 12 min. Compute with tonight’s levels. Coaches check the arithmetic.' });
L.statement(p, { kicker: 'One operational rule', text: 'Bitcoin you buy with dry powder is held in Spot. It does not go into collateral.',
  sub: 'Keep adding accumulated Bitcoin to collateral and your liquidation price moves every time you buy, your alarms go stale, and the plan you wrote stops describing the position you have. Leave it in Spot: your loan stays $30, your liquidation price stays where you wrote it, your alarms stay true. Re-base deliberately once a year, with your coach.',
  tone: 'safe', note: 'C2b, 4 min. The accumulated Bitcoin is the POINT of the exercise — it is not working capital.' });
L.rows(p, { kicker: 'Below the ladder', head: 'What if price goes below 0.382?', tone: 'danger', items: [
  { t: 'It happens, in the years that matter most', d: '2018 and 2022 both went far below any reasonable ladder.' },
  { t: 'Dry powder — spent. That is by design.', d: '' },
  { t: 'Reserve — not for this. Ever.', d: 'Check your LTV, follow the decision tree, and if the alarms fire, defend.', tone: 'danger' },
  { t: 'New capital from income can buy down there', d: 'Borrowed capital and reserve cannot.', tone: 'safe' } ],
  foot: 'Your job below the ladder is not to catch the bottom. It is to still own your Bitcoin when the bottom is behind you.',
  note: 'C3, 10 min.' });
L.tableSlide(p, { kicker: 'Borrow up, buy down', head: 'Rising price lowers your LTV by itself — that fall IS your borrowing capacity',
  cols: ['Step', 'Price', 'Collateral', 'LTV', 'What you may borrow'],
  rows: [ ['Open', '$100,000', '$100', '30%', '—'],
          ['Price rises', '$130,000', '$130', { t: '23%', tone: 'safe' }, { t: '$9 more, to return to 30%', b: true }] ],
  widths: [2.2, 2.2, 2.0, 1.8, 3.6],
  foot: '$9. That is what a 30% rally gave you — split 60/40 into $5.40 carry and $3.60 dry powder. Anyone telling you leverage compounds fast on the way up is describing a much higher LTV than you run, and a much shorter holding period than you have.',
  note: 'D1–D2, 18 min. Keep this deliberately anticlimactic. It kills the compounding fantasy.' });
L.rows(p, { kicker: 'Never', head: 'Three things that never happen, whatever the chart is doing', tone: 'danger', items: [
  { t: 'LTV above 30% to buy a dip', d: 'The dip is why you have dry powder. If dry powder is gone, the dip is not yours.', tone: 'danger' },
  { t: 'Reserve deployed into a dip', d: 'Ever.', tone: 'danger' },
  { t: 'Buying collateral with borrowed money during a margin call', d: 'It raises the loan and the collateral together. It rescues nothing and makes the eventual liquidation bigger.', tone: 'danger' } ],
  foot: 'If you find yourself reasoning toward any of these at 2am, the reasoning is the symptom. Message your coach instead.',
  note: 'D3, 7 min.' });
L.rows(p, { kicker: 'Pass gate', head: 'Your 90-Day Accumulation Plan', items: [
  { t: 'Your three buckets', d: 'Reserve, dry powder, carry — amounts, and where each physically sits.' },
  { t: 'Your ladder', d: 'Three price levels, three deploy amounts, computed tonight.' },
  { t: 'Your borrow-up rule', d: 'The LTV that permits a borrow, and the 60/40 split.' },
  { t: 'Your never-list', d: 'The three things above, in your own handwriting.' },
  { t: 'Your review date', d: '90 days out, entered in a calendar in this room — not promised.', tone: 'safe' } ],
  foot: 'The point of a written plan is not that it is clever. It is that it was written by someone calm, and it will be read by someone who is not.',
  note: 'Module 5 gate, 15 min. Coaches sign every plan before anyone leaves.' });

p.writeFile({ fileName: 'BBT-Level-2-3-Modules-4-6.pptx' }).then(f => console.log('wrote', f));
