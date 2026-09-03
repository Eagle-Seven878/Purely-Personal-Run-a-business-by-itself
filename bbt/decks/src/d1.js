const L = require('./lib.js');
const p = L.deck('BBT Level 1 — Masterclass', 'Buy Borrow Thrive Masterclass');

L.cover(p, { kicker: 'Level 1 · Masterclass · 4 hours · ₱1,999', title: 'The complete\nframework.',
  sub: 'Asset selection, buying zones, prudent borrowing mechanics, and the risk rules that protect you.',
  meta: 'Buy Borrow Thrive · The Confident Investor’s Blueprint   ·   Education only · No fund management',
  note: 'A1, 3 min. Welcome. Level 1 must stand on its own — someone who takes this and buys nothing else leaves with something whole.' });

L.rows(p, { kicker: 'House rules', head: 'Five things before we start', items: [
  { t: 'Questions at the end of each module' }, { t: 'Mic off, camera on' },
  { t: 'Pressing question — chatbox' }, { t: '100% participation. Learning needs positive energy.' },
  { t: 'Calculators ready — we love Math because we make Money' } ],
  note: 'A2, 4 min. Type “ready” in the chat. Wait for it.' });

L.statement(p, { kicker: 'Before we begin', text: 'Three things are true and we will not soften them.',
  sub: 'The platform can sell your Bitcoin without asking. Both rates float and can invert. Your money sits somewhere we do not control.',
  dark: true, tone: 'danger',
  note: 'A3, 5 min. Read risk-disclosure.md §1 VERBATIM. If the room goes quiet afterwards, the disclosure is working.' });

L.flow(p, { kicker: 'Tonight', head: 'Four modules', steps: [
  { t: 'Buy Borrow Die', d: 'The principle, and the price that ends you.' },
  { t: 'Yen Carry Trade', d: 'Borrow cheap, deploy dearer — and how it unwound.' },
  { t: 'Entry Levels', d: 'Where you buy, and how you accumulate.' },
  { t: 'Capital Preservation', d: 'The module that keeps you in the game long enough for the first three to matter.', tone: 'safe' } ],
  foot: 'Just like Cashflow — you learn the board before you play it. Type “Ok” in the chat.',
  note: 'Block B, 5 min. Frame all four, then go.' });

// ── Module 1
L.section(p, { num: 1, kicker: 'Module one', title: 'Buy Borrow Die', sub: 'Land, a bank, a foreclosure — and the same shape done digitally.', note: 'Module 1, 65 min.' });
L.stats(p, { kicker: '2021 → 2026', head: 'The hectare in BGC',
  items: [ { v: '₱1,000,000', l: 'what you paid in 2021' }, { v: '₱2,000,000', l: 'what it is worth in 2026', tone: 'safe' } ],
  foot: 'You want money out. You do not want to sell. What are your options?',
  note: 'B1–B2. Type Yes. Let them celebrate. Take answers, filter to “borrow against it”.' });
L.rows(p, { kicker: 'The bank walk', head: 'What borrowing against it actually takes', items: [
  { t: 'Appraised', d: 'You pay the appraisal fee.' }, { t: 'Title', d: 'Due diligence — is it yours, are your taxes current?' },
  { t: 'Approved', d: 'And you might not be.' }, { t: '80% loan-to-value', d: 'Calculators. 80% of ₱2M = ₱1.6M.' },
  { t: 'Less the deductions', d: 'Insurance, amortisation, credit loan protection. May mga bawas pa yan.', tone: 'warn' } ],
  note: 'B3, 12 min. Walk one letter at a time. Ask why banks cap at 80% — because they make sure they always come out ahead. Type “hassle”.' });
L.statement(p, { kicker: 'And if you cannot pay', text: 'Foreclosed.',
  sub: 'Months. Missed payments, notices, letters, chances to fix it. Hold that timeline — it matters in ten minutes.',
  dark: true, tone: 'danger', note: 'B4, 4 min. Take answers on what happens. The MONTHS is the setup for the digital comparison.' });
L.twoCol(p, { kicker: 'The honest comparison', head: 'Physical and digital real estate',
  left: { h: 'Land', sub: 'Physical real estate', items: ['Millions of pesos to start', 'Months of process to borrow', 'Foreclosure takes months and sends letters', 'Fees and insurance reduce your loan'] },
  right: { h: 'Bitcoin', sub: 'Digital real estate', tone: 'warn', items: ['About ₱6,000 to start', 'Minutes to borrow', 'Liquidation takes SECONDS and nobody calls', 'You receive the whole amount — but the rate is not “very low”'] },
  note: 'B5, 5 min. Corrections C1–C3. Less money exposed does NOT mean less risk. You are choosing not to sell TODAY — the loan is still owed. Read the live borrow rate off the platform.' });
L.stats(p, { kicker: 'The numbers', head: 'You have $100 and Bitcoin is at $100,000',
  items: [ { v: '$100', l: 'your capital' }, { v: '0.001', l: 'BTC you can buy' }, { v: '78%', l: 'the platform will lend you this much', tone: 'warn' } ],
  foot: 'Round numbers so the math is clean. But — should you borrow 78%?',
  note: 'B6, 4 min. Verify the live max LTV. Round abstract numbers on the slide; live price spoken only.' });
L.tableSlide(p, { kicker: 'Why 78% ends you', head: 'Borrow 78%, price falls 10%', cols: ['Method', 'Calculation', 'New LTV'],
  rows: [ ['Quick field check', '78 + 10', { t: '88%', tone: 'warn', b: true }],
          ['What the app shows', '78 ÷ 0.90', { t: '86.7%', tone: 'warn', b: true }],
          ['Margin call at', '85%', { t: 'crossed', tone: 'danger', b: true }],
          ['Liquidation at', '91%', { t: 'next stop', tone: 'danger' }] ],
  widths: [3.4, 4.2, 4.2],
  foot: 'Write down both. The quick version always reads higher, so it errs safe — but the app will show the lower number and I do not want you thinking the app is lying. A 10% Bitcoin drop is a Tuesday.',
  note: 'B7, 5 min. Teach both methods and LABEL which is which. A participant who sees a mismatch on their own screen stops trusting the arithmetic.' });
L.tableSlide(p, { kicker: 'Drill one', head: 'Entry $90,000 · LTV 60% · price drops to $50,000', cols: ['Step', 'Working', 'Result'],
  rows: [ ['The drop', '90,000 − 50,000 = 40,000', '—'], ['As a percentage', '40,000 ÷ 90,000 × 100', { t: '44%', b: true }],
          ['New LTV', '60 ÷ 0.556', { t: '108%', tone: 'danger', b: true }],
          ['108% vs 91%', 'past liquidation', { t: 'LIQUIDATED', tone: 'danger', b: true }] ],
  widths: [3.0, 5.0, 3.8],
  foot: 'Does a 44% drop happen in Bitcoin? Yes. 2018, 2021, 2022. Not a black swan — a cycle.',
  note: 'B8, 6 min. Run BOTH drills. Do not skip the losing one — most programmes in this category never show it.' });
L.tableSlide(p, { kicker: 'Drill two', head: 'Same entry · LTV 50% · price drops to $60,000', cols: ['Step', 'Working', 'Result'],
  rows: [ ['The drop', '30,000 ÷ 90,000 × 100', { t: '33.3%', b: true }],
          ['New LTV', '50 ÷ 0.667', { t: '75%', tone: 'safe', b: true }],
          ['75% vs 91%', 'under liquidation', { t: 'NOT LIQUIDATED', tone: 'safe', b: true }] ],
  widths: [3.4, 4.6, 3.8], foot: 'Give yourselves a hand.',
  note: 'B8 continued. The survival case makes the correction slide land harder.' });
L.tableSlide(p, { kicker: 'The correction', head: '50% is not the safe number',
  cols: ['Opening LTV', 'Margin call at', 'Liquidated at', 'Survives 2021 −53%?', 'Survives 2022 −77%?'],
  rows: [ ['78%', '−8.2%', '−14.3%', { t: 'No', tone: 'danger' }, { t: 'No', tone: 'danger' }],
          [{ t: '50%', b: true }, '−41.2%', { t: '−45.1%', tone: 'warn', b: true }, { t: 'No', tone: 'danger', b: true }, { t: 'No', tone: 'danger', b: true }],
          ['40%', '−52.9%', '−56.0%', { t: 'Barely', tone: 'warn' }, { t: 'No', tone: 'danger' }],
          [{ t: '30% — BBT ceiling', b: true, tone: 'safe' }, '−64.7%', { t: '−67.0%', tone: 'safe', b: true }, { t: 'Yes', tone: 'safe', b: true }, { t: 'No', tone: 'danger' }],
          ['20%', '−76.5%', '−78.0%', { t: 'Yes', tone: 'safe' }, { t: 'Barely', tone: 'warn' }] ],
  widths: [2.9, 2.1, 2.1, 2.35, 2.35],
  foot: 'BBT: position LTV ≤ 30%  ·  programme LTV ≤ 20%  ·  reserve 1:1. Two different numbers — you need to be able to say both of yours.',
  note: 'B9, 4 min. THE most important beat in Module 1. Say plainly that earlier cohorts were taught 50% and we corrected it. Note the 30% row still fails 2022 — that honesty is what makes the reserve rule land.' });
L.statement(p, { kicker: 'Questions, then break', text: 'Ten minutes.',
  sub: 'Three questions before we go. Bound it out loud, take three, then break.', note: 'B10. Bound the Q&A before opening the floor.' });

// ── Module 2
L.section(p, { num: 2, kicker: 'Module two', title: 'The Yen Carry Trade', sub: 'Borrow cheap, deploy dearer — and the half nobody teaches.', note: 'Module 2, 40 min.' });
L.flow(p, { kicker: '1990s Japan', head: 'The trade the institutions ran', steps: [
  { t: 'Borrow ¥ at ~0%', d: 'Bank of Japan zero interest rate policy.' },
  { t: 'Convert to USD', d: '¥1B at ¥159/$ ≈ $6,289,308.' },
  { t: 'Buy T-bills at 4%', d: 'Earning $251,572 a year.' },
  { t: 'The carry = 4% − 0%', d: 'The gap between what you earn and what you pay.', tone: 'safe' } ],
  foot: 'Calculators. And what interest do they owe Japan? Zero.',
  note: 'C2–C3, 10 min. Work the arithmetic with the room.' });
L.statement(p, { kicker: 'The half nobody teaches', text: 'The loan is repaid in yen.',
  sub: 'If the yen strengthens, your dollars buy fewer yen. The 4% is gone — and past a point, your capital with it. In August 2024 the Bank of Japan raised rates, the yen surged, and everyone holding this trade unwound at once. Equities fell. Crypto fell. Years of carry given back in a week.',
  dark: true, tone: 'danger',
  note: 'C4, 6 min. Correction C5 — this beat did not exist in the old deck and it is the POINT of the module. Then ask the room: when you borrow a stablecoin against your Bitcoin, what is your version of “the yen surges”? Wait for someone to say it: Bitcoin falls.' });
L.statement(p, { kicker: 'Your version', text: 'Bitcoin falls.',
  sub: 'Same shape. Same failure mode. Same fix — keep the borrow small enough that the unwind cannot reach you. That is the 30%. That is the reserve. That is why we are strict about a number that looks boring.',
  tone: 'warn', note: 'C4 landing. Let the room supply the answer before you show this slide.' });
L.stats(p, { kicker: 'You cannot play unless you have', head: 'Stablecoins',
  items: [ { v: 'USDT', l: 'tokenised US dollar' }, { v: '=', l: 'same value' }, { v: 'USDC', l: 'tokenised US dollar' } ],
  foot: '$1 = 1 USDT = 1 USDC. Different companies issue them — that is the only difference. Sino dito naglaro na sa Timezone? You convert pesos to credits before you can play.',
  note: 'C5, 4 min. The arcade-token analogy is the best thing in the original deck. Use your own local analogy if you have a better one.' });
L.rows(p, { kicker: 'The spread, honestly', head: 'Three things before you get excited', tone: 'danger', items: [
  { t: 'The headline earn rate is tiered', d: 'It applies to a first tranche only. Above the cap you drop to a much lower rate. Your blended rate is what matters.', tone: 'warn' },
  { t: 'Both rates float independently', d: 'The gap narrows. Some months it inverts and you pay more than you earn.', tone: 'warn' },
  { t: 'The money sits on a platform', d: 'That is its own risk and no strategy here protects you from it.', tone: 'danger' } ],
  foot: '', note: 'C6, 3 min. Correction C4. Read all four live rates off the platform. State today’s real blended spread — not the headline.' });
L.flow(p, { kicker: 'The flow', head: 'One step at a time', steps: [
  { t: 'Buy', d: 'The asset, at a level.' }, { t: 'Borrow', d: 'Against it, never selling.' },
  { t: 'Convert', d: 'Into the earning stablecoin.' }, { t: 'Earn', d: 'The spread — small, and not the point.', tone: 'safe' } ],
  foot: 'You end up holding two things: your Bitcoin, and capital you did not have before.',
  note: 'C7, 2 min. Bridges into Module 3.' });

// ── Module 3
L.section(p, { num: 3, kicker: 'Module three', title: 'Entry Levels', sub: 'Where you buy, and how you accumulate without adding money.', note: 'Module 3, 40 min.' });
L.stats(p, { kicker: 'TCIB recall', head: 'The Fibonacci buying zones',
  items: [ { v: '0.618', l: 'first level — shallowest, most often reached' }, { v: '0.50', l: 'second level' }, { v: '0.382', l: 'third level — deepest, best price' } ],
  foot: 'In TCIB these were about entering well. Here they do a second job: instead of selling at the next level up, you borrow against it.',
  note: 'D1–D2, 7 min. Take two or three bounded questions first.' });
L.tableSlide(p, { kicker: 'Scenario one · it fell', head: '$100 in, price drops', cols: ['Step', 'Price', 'Action', 'BTC held'],
  rows: [ ['Buy', '$100,000', '$100 in', '0.00100'], ['Borrow 30%', '$100,000', 'you hold $30 USDT', '0.00100'],
          ['Price falls', '$85,000', 'What do you do?', '0.00100'],
          [{ t: 'Buy', b: true }, '$85,000', { t: 'deploy the $30', b: true }, { t: '0.00135', tone: 'safe', b: true }] ],
  widths: [2.6, 2.6, 3.6, 3.0],
  foot: '35% more Bitcoin than you started with — and you never added new money.',
  note: 'D4, 4 min. Wait for the room to type “buy”.' });
L.tableSlide(p, { kicker: 'Scenario two · it rose', head: '$100 in, price rises first', cols: ['Step', 'Price', 'Action', 'BTC held'],
  rows: [ ['Buy', '$100,000', '$100 in', '0.00100'], ['Price rises', '$115,000', 'position worth $115', '0.00100'],
          ['Borrow 30%', '$115,000', 'instead of selling — $34.50', '0.00100'],
          [{ t: 'Buy the dip', b: true }, '$85,000', { t: 'deploy the $34.50', b: true }, { t: '0.00141', tone: 'safe', b: true }] ],
  widths: [2.6, 2.6, 3.6, 3.0],
  foot: 'More Bitcoin than scenario one — and you still hold the original position.',
  note: 'D5, 4 min. Price goes up → what do you do? Borrow. Not sell.' });
L.statement(p, { kicker: 'The catch', text: 'For every $100 you deploy, hold $100 back.',
  sub: 'Untouched. Not in the position, not in Earn where you would be tempted. That reserve is what lets you buy a 60% drawdown instead of being liquidated by it. And in a margin call the top-up comes from reserve — never from borrowing more. Buying with borrowed money raises your loan and your collateral together; it rescues nothing.',
  tone: 'safe', note: 'D6, 4 min. Correction C7 — this was a speaker note in the old deck. It is now a slide, and it is the most protective rule in the programme.' });
L.rows(p, { kicker: 'No signal', head: 'What if you bought without a signal?', tone: 'danger', items: [
  { t: 'Your buying price becomes your 0.618', d: 'Plot the Fibonacci as normal, then move it so 0.618 sits on your entry.' },
  { t: 'But understand what you just did', d: 'Walang basehan yung Fibonacci mo if you moved it to wherever you happened to buy.', tone: 'danger' },
  { t: 'This is not encouraged', d: 'It only shows your next levels given you already bought. It does not make a bad entry good.', tone: 'danger' } ],
  note: 'D7, 2 min. Must read as a warning, never as a technique.' });

// ── Module 4
L.section(p, { num: 4, kicker: 'Module four', title: 'Capital Preservation', sub: 'The module that makes the other three worth anything.', note: 'Module 4, 40 min. Read _shared/capital-preservation.md before teaching this and verify every figure.' });
L.statement(p, { kicker: 'The sentence', text: 'A drop is not a loss until you are forced to sell.',
  sub: 'Module 1 ended on a word: foreclosed. This is the general version. Everything in the next forty minutes is one question — how do we remove the force?',
  note: 'F1, 4 min. Have them say it back and type it in the chat.' });
L.tableSlide(p, { kicker: 'Where your alarms sit', head: 'Open at 30% LTV — what each price fall means',
  cols: ['Price falls', 'Your LTV', 'What you do'],
  rows: [ ['−25%', '40%', { t: 'Log it. Nothing else.' }],
          ['−40%', '50%', { t: 'Confirm reserve, calculate the top-up. Do not execute.' }],
          [{ t: '−50%', b: true, tone: 'warn' }, { t: '60%', b: true, tone: 'warn' }, { t: 'ACT. Top up from reserve, or close the loan.', b: true, tone: 'warn' }],
          ['−64.7%', '85%', { t: 'Platform margin call — you never arrive here', tone: 'danger' }],
          ['−67.0%', '91%', { t: 'Liquidation — you never arrive here', tone: 'danger' }] ],
  widths: [2.4, 2.2, 7.2],
  foot: 'Seventeen percentage points between “act” and “liquidated”, with a written instruction sitting inside it. That gap is what you are buying with the discipline.',
  note: 'F2, 10 min. Have them derive each row: 30 ÷ 0.75 = 40, so a 25% fall. Calculators on.' });
L.stats(p, { kicker: 'Seven years of weather', head: 'Four of these five hit Alarm 3',
  items: [ { v: '−54%', l: '2019', tone: 'warn' }, { v: '−63%', l: '2020', tone: 'warn' }, { v: '−54%', l: '2021', tone: 'warn' },
           { v: '−77%', l: '2022', tone: 'danger' }, { v: '−33%', l: '2024', tone: 'warn' } ],
  foot: 'Alarm 3 is not an emergency. It is a normal event — about once a year, for seven years. Someone who thinks it is a catastrophe will panic. Someone who expects it will act.',
  note: 'F3, 8 min. VERIFY these figures and add the current cycle before presenting.' });
L.tableSlide(p, { kicker: 'The worst entry in seven years', head: 'You bought the 2021 peak at our 30% ceiling',
  cols: ['Price', 'Event', 'What you do'],
  rows: [ ['$69,000', 'Open at 30% LTV, reserve funded 1:1', '—'],
          ['$51,750', '−25% · Alarm 1', 'Log it'],
          ['$41,400', '−40% · Alarm 2', 'Calculate the top-up'],
          [{ t: '$34,500', b: true, tone: 'warn' }, { t: '−50% · ALARM 3', b: true, tone: 'warn' }, { t: 'Close the loan from reserve. Keep every satoshi.', b: true, tone: 'warn' }],
          [{ t: '$22,747', tone: 'danger' }, { t: 'would have been liquidation', tone: 'danger' }, { t: 'Loan already closed. Nothing to sell.', tone: 'safe' }],
          ['$15,500', 'the 2022 bottom', { t: 'Still holding 100% of it', tone: 'safe', b: true }] ],
  widths: [2.3, 4.0, 5.5],
  foot: 'Liquidation price = 69,000 × 0.30 ÷ 0.91 = $22,747. The 2022 low was ~$15,500 — so left alone, this position IS liquidated. 30% by itself does not save you.',
  note: 'F4, 12 min. THE most important beat in Level 1. Do not compress. Let the room compute $22,747 and compare it to $15,500 themselves, and sit with it. Then say plainly: anyone telling you “just keep LTV at 30” is telling you the same half-truth as “just keep it at 50”, one rung up. What saved you was the instruction to act at −50%, written down while nothing was wrong.' });
L.statement(p, { kicker: 'The honest half', text: 'You still took the drawdown.',
  sub: 'At the bottom of 2022 that Bitcoin was worth about 23 centavos on the peso. Our rules did not stop that. Nothing stops that. What they did was make sure you still owned all of it — so when it turned, it turned in your hands. We preserve the asset. That is what lets you choose your own timing.',
  dark: true, tone: 'warn',
  note: 'F5, 6 min. NEVER SKIP. If you came hoping we would show you how to avoid red on a screen — we cannot, nobody can, and anyone who says otherwise is selling you something.' });

// ── Close
L.twoCol(p, { kicker: 'One peso, two jobs', head: 'Resolving the contradiction you just watched',
  left: { h: 'Module 2 said', items: ['Borrow USDT', 'Convert to USDC', 'Park it in Earn', 'Collect the spread'] },
  right: { h: 'Module 3 said', tone: 'warn', items: ['Borrow USDT', 'Hold it', 'Wait for your level', 'Buy the dip'] },
  note: 'E1, 3 min. Correction C8. You cannot do both with the same money. Until Level 2/3: RUN THE CARRY ONLY. You are learning the mechanism, not chasing a return.' });
L.statement(p, { kicker: 'What you can now do', text: 'Most people who own Bitcoin cannot do what you just did.',
  sub: 'You computed a liquidation price from a peak you did not choose, and you found the one instruction that saved a position through a 77% drawdown.',
  note: 'Close beat 1. A capability, flatly stated.' });
L.statement(p, { kicker: 'What you still cannot do', text: 'It was all on paper.',
  sub: 'You have never funded a wallet, moved money between two platforms, posted collateral, or watched an LTV slider move with your own money behind it. And there is a night coming — down 40%, phone going off, 3am, acting in order while tired. Tonight you learned that night exists. You have not rehearsed it. Reading the fire exit is not the same as walking it in the dark.',
  dark: true, note: 'Close beat 2 — the gap. Pause after the headline.' });
L.twoCol(p, { kicker: 'What comes next', head: 'Level 2/3 — one curriculum, two ways to take it',
  left: { h: 'Deep Dive · ₱15,000', sub: '3 days, online, pods of 8', items: ['Chart structure and weekly levels', 'The platform, end to end', 'Your first live position', 'LTV discipline and the scored drill', 'The accumulation system'] },
  right: { h: 'Immersion · ₱75,000', sub: '3–4 days, face to face, small class', tone: 'safe', items: ['Everything in the Deep Dive', 'In a room, with faculty', 'Your complete personal playbook', 'The transfer question', 'One-to-one playbook review'] },
  note: 'Close beat 3. State it once. Same principle either way — the room buys you the playbook and the attention.' });
L.rows(p, { kicker: 'And who should not book', head: 'Do not take Level 2 or 3 if', tone: 'danger', items: [
  { t: 'You are not going to fund the reserve', d: 'You saw tonight what did the saving. Half the rule set is worse than none — it feels like protection and is not.', tone: 'danger' },
  { t: 'You would use money you need inside five years', d: 'Nothing we teach makes short money safe.', tone: 'danger' },
  { t: 'Tonight made you excited rather than careful', d: 'Sit with it a week. Excitement is what puts people at 78% LTV.', tone: 'danger' } ],
  note: 'Close beat 4 — MANDATORY, delivered slowly. “If you are in that list I would genuinely rather have your respect than your ₱15,000.”' });
L.statement(p, { kicker: 'One step', text: 'Registration is in the chat.',
  sub: 'Next Deep Dive {{level_2_date}} · next Immersion {{level_3_date}} · {{seat_cap}} seats, because pods run one coach to eight and we do not stretch that. Unsure which — or unsure at all? Message {{ops_lead}} and say so. You will get a real answer, including “not yet”.',
  note: 'Close beat 5. Then stop. Final line: “take this home — a drop is not a loss until you are forced to sell.”' });

p.writeFile({ fileName: 'BBT-Level-1-Masterclass.pptx' }).then(f => console.log('wrote', f));
