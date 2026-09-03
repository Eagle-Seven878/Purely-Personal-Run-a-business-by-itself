const L = require('./lib.js');
const p = L.deck('BBT Level 0 — Orientation', 'Buy Borrow Thrive Orientation');
const B = 'Buy Borrow Thrive · The Confident Investor’s Blueprint';

L.cover(p, { kicker: 'Level 0 · Orientation · 90 minutes', title: 'The wealthy\nnever sell.\nThey borrow.',
  sub: 'How the buy-and-borrow strategy works — and whether it fits your situation.',
  meta: B + '   ·   Education only · No fund management · No hype',
  note: 'A1. Welcome, 3 min. Thank them for choosing to be here. State plainly: tonight is free and stays free, no build-up to a pitch. One idea taught properly, then what comes next and who should not take it.' });

L.rows(p, { kicker: 'House rules', head: 'Five things before we start', items: [
  { t: 'Mic off, camera on', d: 'So we can see your beautiful faces.' },
  { t: 'Questions in the chat', d: 'Answered at the end of each part.' },
  { t: 'Give it your 100%', d: 'Learning needs positive energy.' },
  { t: 'Get a calculator', d: 'We love Math because we make Money.' },
  { t: 'Type “ready” when you are', d: 'Then here we go.' } ],
  note: 'A2. House rules, 2 min. Wait for the chat to fill before moving on. The typed check is how a silent Zoom becomes a room that answers.' });

L.statement(p, { kicker: 'Before we begin', text: 'This strategy uses borrowed money against a volatile asset.',
  sub: 'If a programme will not tell you how it fails, do not give them money.', dark: true, tone: 'danger',
  note: 'A3. Disclosure, 3 min. Read _shared/risk-disclosure.md §1 VERBATIM. Do not paraphrase, do not soften, no joke at the end. Then: “I read that at the top of every session we run, including the free one.”' });

L.section(p, { num: 1, kicker: 'Module one', title: 'The land',
  sub: 'A hectare in BGC, a bank, and the only thing that can take it away from you.',
  note: 'Block B, 25 min. This is the sequence the whole programme is built on. Do not rush it.' });

L.stats(p, { kicker: '2021', head: 'You are offered a hectare in BGC, 30% below market',
  items: [ { v: '₱1,000,000', l: 'what you have in 2021' }, { v: '1 hectare', l: 'BGC, 30% below market value' } ],
  foot: 'Would you buy this land? Type “Yes” in the chatbox.',
  note: 'B1, 4 min. Wait for the Yes. Then: “You just bought a hectare in BGC. Congratulations.”' });

L.stats(p, { kicker: 'Five years later · 2026', head: 'The same hectare',
  items: [ { v: '₱1,000,000', l: 'what you paid in 2021' }, { v: '₱2,000,000', l: 'what it is worth now', tone: 'safe' } ],
  foot: 'Let them celebrate. Do not move on too quickly.',
  note: 'B1 continued. Give the room its moment here — the celebration is what makes the next question land.' });

L.prompt(p, { kicker: 'The question', head: 'You want money out of that land.\nYou do not want to sell it.',
  ask: 'What are your options?', sub: 'Raise your hand. Take two or three real answers. Thank each one. If nobody says “borrow against it”, filter to it.',
  note: 'B2, 5 min. Never correct anyone in front of the room — acknowledge, then add. Ask who knows the word “refinancing”, and who has used property as collateral.' });

const bank = (n, extra, note) => L.rows(p, { kicker: 'Borrowing against it · the bank', head: 'What it actually takes',
  items: [ { t: 'Appraised', d: 'The bank assesses the value — and you pay the appraisal fee.' },
    { t: 'Title', d: 'Due diligence. Is it really yours? Are your real estate taxes current?' },
    { t: 'Approved', d: 'And you might not be.' },
    { t: '80% loan-to-value', d: 'Calculators out. What is 80% of ₱2,000,000?' } ].slice(0, n).concat(extra || []),
  note });
bank(1, [], 'B3, 10 min total across this build. Step A–C: you go to the bank, you fill up forms, this is an asset-backed loan.');
bank(2, [], 'B3. Let each step land before advancing. The room should feel the accumulation of friction.');
bank(3, [], 'B3. “And you have to get approved — and you might not.”');
bank(4, [], 'B3. The calculator moment. Wait for the chat. Answer: ₱1,600,000. Banks cap at 80% because they make sure they always come out ahead.');

L.stats(p, { kicker: 'And then the deductions', head: 'Do you receive the full ₱1,600,000?',
  items: [ { v: '₱1.6M', l: 'approved' }, { v: 'less', l: 'insurance', tone: 'warn' }, { v: 'less', l: 'amortisation', tone: 'warn' }, { v: 'less', l: 'credit loan protection', tone: 'warn' } ],
  foot: 'May mga bawas pa yan. Do you feel the hassle? Type “hassle” in the chatbox.',
  note: 'B3 close. Wait for the chat, thank them. The friction is the point — it sets up how different the digital version feels.' });

L.statement(p, { kicker: 'And notice this', text: 'You never sold the land.',
  sub: 'You got liquidity out of an asset you kept. That is the whole idea, and it is centuries old.',
  note: 'B3 payoff. This is the pivot from friction to principle. Say it slowly.' });

L.statement(p, { kicker: 'The sentence everything rests on', text: 'A drop is not a loss until you are forced to sell.',
  sub: 'You would not lose the land because the market fell, or because you were wrong about BGC. You would lose it to foreclosure — forced to sell at a moment you did not choose. Everything we teach is about removing the force.',
  dark: true, note: 'B4, 6 min. THE most important beat in Level 0. Ask first: “what is the only thing that takes the land away from you?” Take answers, steer to foreclosure. Tell them to write this sentence down.' });

L.section(p, { num: 2, kicker: 'Module two', title: 'Digital real estate',
  sub: 'The same shape, on a platform — and the one difference that matters.',
  note: 'Block C, 12 min.' });

L.twoCol(p, { kicker: 'Same mechanic', head: 'Land and Bitcoin do the same job',
  left: { h: 'Physical real estate', sub: 'A hectare in BGC', items: ['An asset that appreciates', 'You can borrow against it', 'You keep it while you borrow', 'Forms, appraisal, due diligence, approval', 'Fees and insurance come out of your loan'] },
  right: { h: 'Digital real estate', sub: 'Bitcoin', tone: 'safe', items: ['An asset that appreciates', 'You can borrow against it', 'You keep it while you borrow', 'No forms, no bank visit, no rejection', 'You receive the whole amount you borrow'] },
  note: 'C1, 5 min. You can own a fraction. Same platform to buy it and to borrow against it. Keep it factual — the honest trade-off is the next slide and it must not be softened.' });

L.twoCol(p, { kicker: 'And now the honest part', head: 'The difference that will cost you money',
  left: { h: 'A bank forecloses', sub: 'Physical real estate', tone: 'warn', items: ['You miss payments', 'Notices arrive', 'Letters, then more letters', 'Chances to fix it', 'MONTHS'] },
  right: { h: 'A platform just sells', sub: 'Digital real estate', tone: 'danger', items: ['The price hits a number', 'No notice', 'No letter', 'Nobody calls you', 'SECONDS'] },
  note: 'C2, 7 min. Correction C1 — this is where we separate from hype sellers. Smaller ticket, but bigger swings and a far faster forced sale. Land on: “so the question from the land story becomes urgent — at what price does this get taken away from you?”' });

L.section(p, { num: 3, kicker: 'Module three', title: 'Capital preservation',
  sub: 'What this asset actually does, and how anyone is still holding it.',
  note: 'Block D, 20 min. Verify every figure on the next slide before the session.' });

L.stats(p, { kicker: 'Seven years of weather', head: 'Roughly once a year, for seven years',
  items: [ { v: '−54%', l: '2019', tone: 'warn' }, { v: '−63%', l: '2020 · COVID', tone: 'warn' },
    { v: '−54%', l: '2021', tone: 'warn' }, { v: '−77%', l: '2022', tone: 'danger' }, { v: '−33%', l: '2024', tone: 'warn' } ],
  foot: 'Anyone who tells you this is unusual is lying or has not looked. It is the weather.',
  note: 'D1, 8 min. VERIFY THESE FIGURES against a live chart before presenting, and add the current cycle. A wrong number here destroys the credibility of everything after it.' });

L.rows(p, { kicker: 'So how is anyone still holding?', head: 'Not by predicting it. Nobody predicted it.', items: [
  { t: 'Borrow so little that the forced sale never reaches you', d: 'A ceiling on how much you borrow against what you own.', tone: 'safe' },
  { t: 'Keep money back that you never touch', d: 'A reserve that exists only to defend the position.', tone: 'safe' },
  { t: 'Write down what you will do before the price falls', d: 'Four alarms, each with an instruction attached. Decided while nothing is wrong.', tone: 'safe' } ],
  foot: '', note: 'D2, 8 min. Run those rules through every drawdown of the last seven years and the position is never force-sold. Not once. It is boring, which is why it works and why it does not sell well. No numbers yet — the arithmetic is Level 1.' });

L.statement(p, { kicker: 'And now the honest half', text: 'You still take the drawdown.',
  sub: 'At the bottom of 2022 your Bitcoin was worth about 23 centavos on the peso. Our rules did not stop that and nothing can. What they did was make sure you still owned all of it — so when it turned, it turned in your hands. We preserve the asset. That is what lets you choose your own timing.',
  dark: true, tone: 'warn', note: 'D3, 4 min. NEVER SKIP THIS BEAT. It is the credibility of the whole programme. We are not promising you will not see red — we are teaching you how to still be holding when it turns.' });

L.twoCol(p, { kicker: 'Fit check', head: 'Straight from our prospectus',
  left: { h: 'This is for you if', tone: 'safe', items: ['You already earn or invest, and want a rules-based strategy instead of guessing', 'You want to understand collateralised borrowing before you ever touch it', 'You value capital preservation first, growth second', 'You want mentors who show real charts, real levels, real risk math'] },
  right: { h: 'This is NOT for you if', tone: 'danger', items: ['You are looking for guaranteed returns or a get-rich-quick scheme', 'You want someone to trade or manage money for you', 'You would invest money you cannot afford to hold through volatility', 'You skip risk management because “this time is different”'] },
  note: 'E1 and E2, 15 min. Deliver the right-hand column SLOWLY and give it equal weight. Some people should leave tonight. “If you are in that second list — genuinely, no hard feelings, and please do not come to Level 1. You would be paying us to be frustrated.”' });

L.statement(p, { kicker: 'What you can now do', text: 'You can explain this to somebody else.',
  sub: 'Ninety minutes ago, borrowing against your assets was something rich people did that had nothing to do with you. You can now walk another person through the land, the loan, the foreclosure — and why forced selling is the only real loss.',
  note: 'Close beat 1, from _shared/ascension.md. A fact about a capability, stated flatly. Never a compliment.' });

L.statement(p, { kicker: 'What you still cannot do', text: 'You cannot name the price at which this gets taken away from you.',
  sub: 'Not roughly — exactly, to the peso. There is a formula and it takes about a minute to learn. If you opened a position tomorrow you would not know the number. And the night that number matters, you will be reading it off a phone at 3am with everything red. That is not the night to learn arithmetic.',
  dark: true, note: 'Close beat 2 — the gap. It must be real and demonstrable. Pause after the headline before the detail.' });

L.stats(p, { kicker: 'What comes next', head: 'Level 1 — the BBT Masterclass',
  items: [ { v: '₱1,999', l: 'the complete framework', tone: 'safe' }, { v: '4 hours', l: 'live on Zoom' }, { v: '3×', l: 'you compute that number yourself' } ],
  foot: 'Asset selection, buying zones, prudent borrowing mechanics, and the risk rules that protect you.',
  note: 'Close beat 3. State it ONCE. No scarcity language unless the seat cap is literally true.' });

L.rows(p, { kicker: 'And who should not take it', head: 'Do not book Level 1 if', tone: 'danger', items: [
  { t: 'You do not yet have money you could hold for five years', d: 'Come back when you do. Nothing here expires.', tone: 'danger' },
  { t: 'Tonight made you excited rather than careful', d: 'Sit with it a week. Excitement is the thing that gets people liquidated. I would rather you arrive calm.', tone: 'danger' },
  { t: 'You are hoping for a signal to follow', d: 'Level 1 does not give you one. Keep your ₱1,999.', tone: 'danger' } ],
  note: 'Close beat 4 — MANDATORY. This is the beat that makes the other four credible. The people who should not buy, do not — which is the entire point of capital preservation first.' });

L.statement(p, { kicker: 'One step', text: 'Registration is in the chat.',
  sub: 'Next cohort {{level_1_date}}. If you are unsure, message {{ops_lead}} and say you are unsure — that is a real answer and you will get a real one back. Thank you for tonight.',
  note: 'Close beat 5. One step, not three. Then STOP TALKING. Final line: “whatever you decide — a drop is not a loss until you are forced to sell. Take that one home even if you never pay us a peso.”' });

p.writeFile({ fileName: 'BBT-Level-0-Orientation.pptx' }).then(f => console.log('wrote', f));
