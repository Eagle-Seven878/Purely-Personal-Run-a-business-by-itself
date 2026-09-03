const L = require('./lib.js');
const p = L.deck('BBT Level 3 — Modules 7–8 (Immersion only)', 'Personal Playbook and The Transfer Question');

L.cover(p, { kicker: 'Level 3 · Immersion only · Day 4 · 270 minutes', title: 'The playbook,\nand the transfer.',
  sub: 'What the ₱75,000 buys over the ₱15,000 — and why it can only be done in a room.',
  meta: 'A playbook built alone at a laptop is a form. A playbook built with someone asking “why that number?” is a decision.',
  note: 'Face to face only, and not for commercial reasons. You cannot get this over a screen-share with eight other people.' });

L.section(p, { num: 7, kicker: 'Module seven · 180 min', title: 'Your Personal Playbook',
  sub: 'Everything so far has been our rules. Today you write yours.', note: 'Faculty in the room throughout. The challenge is the product.' });
L.statement(p, { kicker: 'Who this document is for', text: 'You, at 3am, eighteen months from now.',
  sub: 'Tired, frightened, holding a phone. That person is not as clever as you are right now — bad sleep, two months of red candles, someone in a group chat saying it is going to zero. They will not re-derive anything. They will do what the paper says if the paper is clear, and something stupid if it is not. Write for that person. Short sentences. Numbers, not principles.',
  dark: true, note: 'A1, 10 min. This sets the whole day.' });
L.twoCol(p, { kicker: 'The test for every line', head: 'Could a tired person follow this at 3am without deciding anything?',
  left: { h: 'Fails', tone: 'danger', items: ['“Manage risk appropriately”', '“Keep LTV low”', '“Review regularly”', 'Nothing to do. No number. No trigger.'] },
  right: { h: 'Passes', tone: 'safe', items: ['“If LTV reaches 60%, transfer ₱______ from reserve, or repay the loan in full”', 'There is an action and there is a number.'] },
  note: 'A2, 10 min. Faculty will hold every line to this all afternoon.' });
L.rows(p, { kicker: 'Six blocks · 20 minutes each', head: 'Building it — and what faculty will ask you', items: [
  { n: '1', t: 'Your position', d: 'Entry, deployed, borrowed, LTV, liquidation price, reserve.  →  “Say your liquidation price without looking.”' },
  { n: '2', t: 'Your three buckets', d: 'Amounts, and where each physically sits.  →  “Which account? How long to reach it? Is it locked?”', tone: 'warn' },
  { n: '3', t: 'Your ladder', d: 'Three levels, three amounts, weighted deepest.  →  “Price hits 0.618 tomorrow. How much, exactly?”' },
  { n: '4', t: 'Your alarms', d: 'Four prices, set on the phone in this room.  →  “Alarm 3 fires during a client meeting. What happens?”', tone: 'warn' } ],
  note: 'B1–B4. The lock question in block 2 catches most people — reserve in a seven-day unbonding product is not reserve. If block 4’s answer is “I would deal with it later”, the plan has a hole.' });
L.statement(p, { kicker: 'Block 5 · the one nobody has considered', text: 'Your growth ceiling.',
  sub: 'A number at which you stop adding. Not a target — a ceiling. Find it by asking: at what size would this position becoming worthless change my life? Not annoy me — change it. School fees, the business, the house. Your ceiling sits below that. Write it down today, while you are calm, because you will not be able to set it honestly during a bull run. That is the entire point of setting it now.',
  tone: 'warn', note: 'B5, 20 min. Faculty: “say the number out loud.” People who will not say it have not chosen it.' });
L.rows(p, { kicker: 'Block 6, then the gate', head: 'Your never-list, then read it out loud', items: [
  { t: 'Three things you will never do', d: 'In your own handwriting.  →  Faculty: “which of these have you already been tempted by this week?”', tone: 'danger' },
  { t: 'Read the whole playbook aloud', d: 'To one faculty member and one peer. The peer asks “what would you actually do?” at any line that does not say.', tone: 'safe' },
  { t: 'You cannot hear a vague sentence until you say it', d: 'Every one of you will find a line that sounded fine written and sounds like nothing spoken. Fix it while faculty is in the room.', tone: 'safe' } ],
  foot: 'Faculty signs each playbook. An unsigned playbook is not a Level 3 pass.',
  note: 'B6 and Part 3, 60 min. The read-back is the gate, not a nice-to-have.' });

L.section(p, { num: 8, kicker: 'Module eight · 90 min', title: 'The Transfer Question',
  sub: 'The third word of the programme, and the part almost nobody does.', note: 'Give this its full 90 minutes.' });
L.statement(p, { kicker: 'The original principle', text: 'Buy · Borrow · Die',
  sub: 'Buy an asset, borrow against it instead of selling, and when you die it passes to your heirs. You never sold, so the sale never happened. The strategy only COMPLETES if the asset transfers.',
  dark: true, note: 'C1, 12 min. The third word is not morbid — it is mechanical.' });
L.twoCol(p, { kicker: 'And here is the problem', head: 'Land transfers. Bitcoin does not.',
  left: { h: 'A hectare in BGC', tone: 'safe', items: ['There is a title', 'There is a registry', 'There are lawyers', 'The state knows the asset exists', 'It transfers whether you planned for it or not'] },
  right: { h: 'Bitcoin on an exchange', tone: 'danger', items: ['Secured by credentials only you hold', 'No registry', 'No process', 'Nobody knows it exists', 'It transfers to NOBODY'] },
  note: 'C1, the core insight. If your family cannot reach that account, the strategy does not complete — it just ends. Ten years of discipline becomes a number nobody can get to.' });
L.statement(p, { kicker: 'Why we say Thrive', text: 'There is a version that does not require you to die first.',
  sub: 'The asset stays. Borrowing capacity grows as it appreciates. At some point the position can fund things — a business, a house, an education — without being sold. That is thriving on an asset instead of consuming it. Same mechanic, better ending. But it still depends on the transfer question, because a strategy measured in decades has to survive you.',
  tone: 'safe', note: 'C2, 13 min.' });
L.rows(p, { kicker: 'Four things — this quarter, not eventually', head: 'Written in the room today', items: [
  { n: '1', t: 'An access document', d: 'What exists and how it is reached. NOT passwords in a file — a written record of the accounts, the platforms, and the recovery process.' },
  { n: '2', t: 'One person who knows it exists', d: 'A strategy nobody knows about is a strategy that dies with you. Write the name down today.' },
  { n: '3', t: 'The loan is a liability your heirs inherit', d: 'Die with a borrow open and the platform still holds its claim. Your family inherits collateral AND a loan — unserviced, it liquidates, on the people you were doing this for. Write: “repay from reserve first, then hold.”', tone: 'danger' },
  { n: '4', t: 'Get proper advice', d: 'PH treatment of digital assets is genuinely unsettled. I am faculty, not your lawyer. Doing nothing is also a decision — and it is the one that loses everything.', tone: 'warn' } ],
  note: 'D1–D4, 45 min. Item three surprises everybody. Give it room.' });
L.statement(p, { kicker: 'One question, then you are done', text: 'If you died tonight, could your family reach this?',
  sub: 'If the answer is no, you do not have a strategy. You have a hobby with money in it.',
  dark: true, tone: 'danger',
  note: 'Part 3, 20 min. SILENCE. Do not fill it — let it sit for a full thirty seconds. Nobody leaves having ticked all four boxes, and that is honest; they take weeks. But they leave knowing the boxes exist, which puts them ahead of almost everyone holding this asset.' });
L.statement(p, { kicker: 'Where you go from here', text: 'Nobody has watched you run it.',
  sub: 'You have a written playbook you built yourself — buckets, ladder, alarms, growth ceiling, transfer. It is yours, not ours. A playbook survives a calm week easily. What you cannot know yet is what you do when it is your own money, your own drawdown, and nobody in the room. Alarm 3 fires about once a year. Yours has not fired yet with faculty beside you.',
  note: 'The close into Level 4 — beats 1 and 2 from ascension.md.' });
L.rows(p, { kicker: 'Level 4 · Done-With-You · USD 3,000', head: 'And who should not take it', tone: 'danger', items: [
  { t: 'Twelve months, faculty beside you, one full cycle', d: 'Includes a year of the Thrive Circle. The same-day call when Alarm 3 fires is the product.', tone: 'safe' },
  { t: 'Do not take it to have someone else make the call', d: 'We will not, and you would be paying us to disappoint you.', tone: 'danger' },
  { t: 'Do not take it if mentorship costs more than your position', d: 'Put the money in the position instead. Come back when the numbers make sense — we would rather tell you that now than take it.', tone: 'danger' } ],
  foot: '{{ops_lead}} runs a short call before anyone joins, and the honest answer is sometimes “not yet”.',
  note: 'Close beats 3–5. The disqualifier is mandatory.' });

p.writeFile({ fileName: 'BBT-Level-3-Modules-7-8-Immersion.pptx' }).then(f => console.log('wrote', f));
