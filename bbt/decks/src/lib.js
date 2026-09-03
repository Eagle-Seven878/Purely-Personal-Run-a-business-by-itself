const pptxgen = require('pptxgenjs');

// ── BBT design system ────────────────────────────────────────────
const C = {
  ink:    '141C36',   // dominant dark — covers, dividers, heavy statements
  ink2:   '1E2A4E',
  paper:  'FFFFFF',
  tint:   'EEF1F8',   // light card ground
  body:   '1A2340',
  dim:    '5B6480',
  faint:  '8A92A8',
  rule:   'D8DDEA',
  brass:  'C08829',   // the accent — used sparingly
  safe:   '25774F',
  warn:   'B4720F',
  danger: 'A82F26',
  onDark: 'F2F4FA',
  onDarkDim: 'A8B0C8',
};
const F = { head: 'Cambria', body: 'Calibri' };
const M = { l: 0.75, r: 0.75, top: 0.62, w: 11.8 };

function deck(title, subject) {
  const p = new pptxgen();
  p.layout = 'LAYOUT_WIDE';           // 13.3 x 7.5
  p.author = 'Thrive Blueprint Education Corp.';
  p.company = 'Buy Borrow Thrive';
  p.title = title; p.subject = subject || title;
  return p;
}

function notes(s, t) { if (t) s.addNotes(t); }

// eyebrow label
function eyebrow(s, text, x, y, color) {
  const w = Math.min(M.w, 13.333 - x - 0.4);
  s.addText(text.toUpperCase(), { isTextBox: true, x, y, w, h: 0.26, margin: 0,
    fontFace: F.body, fontSize: 10, bold: true, charSpacing: 2.2, color: color || C.brass });
}

// ── slide types ──────────────────────────────────────────────────

function cover(p, { kicker, title, sub, meta, note }) {
  const s = p.addSlide(); s.background = { color: C.ink };
  eyebrow(s, kicker, M.l, 1.5, C.brass);
  const tl = title.split('\n').length;
  const th = tl * 0.83 + 0.35;
  s.addText(title, { isTextBox: true, x: M.l, y: 1.95, w: 10.6, h: th, margin: 0,
    fontFace: F.head, fontSize: 54, bold: true, color: C.onDark, lineSpacing: 58 });
  if (sub) s.addText(sub, { isTextBox: true, x: M.l, y: 1.95 + th + 0.22, w: 9.4, h: 0.95, margin: 0,
    fontFace: F.body, fontSize: 18, color: C.onDarkDim, lineSpacing: 26 });
  if (meta) s.addText(meta, { isTextBox: true, x: M.l, y: 6.35, w: 11.8, h: 0.4, margin: 0,
    fontFace: F.body, fontSize: 12, color: C.onDarkDim });
  notes(s, note); return s;
}

function section(p, { num, kicker, title, sub, note }) {
  const s = p.addSlide(); s.background = { color: C.ink };
  if (num) {
    s.addShape('ellipse', { x: M.l, y: 2.55, w: 0.95, h: 0.95, fill: { color: C.brass } });
    s.addText(String(num), { isTextBox: true, x: M.l, y: 2.55, w: 0.95, h: 0.95, margin: 0,
      align: 'center', valign: 'middle', fontFace: F.head, fontSize: 30, bold: true, color: C.ink });
  }
  const tx = num ? M.l + 1.45 : M.l;
  if (kicker) eyebrow(s, kicker, tx, 2.5, C.brass);
  s.addText(title, { isTextBox: true, x: tx, y: 2.86, w: 13.333 - tx - 0.6, h: 1.2, margin: 0,
    fontFace: F.head, fontSize: title.length > 34 ? 32 : 40, bold: true, color: C.onDark });
  if (sub) s.addText(sub, { isTextBox: true, x: tx, y: 4.05, w: Math.min(9.6, 13.333 - tx - 0.6), h: 0.9, margin: 0,
    fontFace: F.body, fontSize: 16, color: C.onDarkDim, lineSpacing: 23 });
  notes(s, note); return s;
}

// one big line — the thesis slides
function statement(p, { kicker, text, sub, dark, tone, note }) {
  const s = p.addSlide();
  s.background = { color: dark ? C.ink : C.paper };
  const fg = dark ? C.onDark : C.body;
  const accent = tone === 'warn' ? C.warn : tone === 'danger' ? C.danger : tone === 'safe' ? C.safe : C.brass;
  if (kicker) eyebrow(s, kicker, M.l, 1.35, accent);
  const long = text.length > 64;
  s.addText(text, { isTextBox: true, x: M.l, y: 1.85, w: 11.6, h: 2.9, margin: 0,
    fontFace: F.head, fontSize: long ? 40 : 50, bold: true, color: fg, lineSpacing: long ? 50 : 60 });
  if (sub) s.addText(sub, { isTextBox: true, x: M.l, y: 4.95, w: 11.4, h: 2.1, margin: 0,
    fontFace: F.body, fontSize: sub.length > 300 ? 14 : 16.5, color: dark ? C.onDarkDim : C.dim,
    lineSpacing: sub.length > 300 ? 20 : 24 });
  notes(s, note); return s;
}

function title(s, t, y) {
  const fs = t.length > 46 ? 27 : 34;          // auto-fit: keep long titles on one line
  s.addText(t, { isTextBox: true, x: M.l, y: y === undefined ? M.top : y, w: 11.6, h: 1.05, margin: 0,
    fontFace: F.head, fontSize: fs, bold: true, color: C.body });
}

// icon-chip rows
function rows(p, { kicker, head, items, note, tone }) {
  const s = p.addSlide(); s.background = { color: C.paper };
  if (kicker) eyebrow(s, kicker, M.l, 0.55, tone === 'danger' ? C.danger : C.brass);
  title(s, head, kicker ? 0.9 : M.top);
  const n = items.length;
  const top = 2.05, avail = 4.85;
  const h = Math.min(1.12, avail / n);
  items.forEach((it, i) => {
    const y = top + i * (avail / n);
    const col = it.tone === 'danger' ? C.danger : it.tone === 'warn' ? C.warn : it.tone === 'safe' ? C.safe : C.brass;
    s.addShape('ellipse', { x: M.l, y: y + 0.06, w: 0.46, h: 0.46, fill: { color: col } });
    s.addText(it.n || String(i + 1), { isTextBox: true, x: M.l, y: y + 0.06, w: 0.46, h: 0.46, margin: 0,
      align: 'center', valign: 'middle', fontFace: F.body, fontSize: 13, bold: true, color: 'FFFFFF' });
    s.addText(it.t, { isTextBox: true, x: M.l + 0.78, y: y, w: 10.6, h: 0.4, margin: 0,
      fontFace: F.body, fontSize: 17, bold: true, color: C.body });
    if (it.d) s.addText(it.d, { isTextBox: true, x: M.l + 0.78, y: y + 0.4, w: 10.6, h: h - 0.42, margin: 0,
      fontFace: F.body, fontSize: 13.5, color: C.dim, lineSpacing: 18 });
  });
  notes(s, note); return s;
}

// two columns of cards
function twoCol(p, { kicker, head, left, right, note }) {
  const s = p.addSlide(); s.background = { color: C.paper };
  if (kicker) eyebrow(s, kicker, M.l, 0.55, C.brass);
  title(s, head, kicker ? 0.9 : M.top);
  const w = 5.62, gap = 0.56;
  [[left, M.l], [right, M.l + w + gap]].forEach(([c, x]) => {
    const col = c.tone === 'danger' ? C.danger : c.tone === 'warn' ? C.warn : c.tone === 'safe' ? C.safe : C.brass;
    s.addShape('roundRect', { x, y: 2.02, w, h: 4.55, rectRadius: 0.08,
      fill: { color: c.fill || C.tint }, line: { color: C.rule, width: 0.75 } });
    s.addText(c.h, { isTextBox: true, x: x + 0.42, y: 2.36, w: w - 0.84, h: 0.6, margin: 0,
      fontFace: F.head, fontSize: 21, bold: true, color: col });
    if (c.sub) s.addText(c.sub, { isTextBox: true, x: x + 0.42, y: 2.94, w: w - 0.84, h: 0.35, margin: 0,
      fontFace: F.body, fontSize: 12, color: C.faint });
    const items = c.items.map((t, i) => ({ text: t, options: { bullet: true, breakLine: i < c.items.length - 1 } }));
    s.addText(items, { isTextBox: true, x: x + 0.42, y: c.sub ? 3.36 : 3.06, w: w - 0.84, h: 3.0, margin: 0,
      fontFace: F.body, fontSize: 14, color: C.body, lineSpacing: 20, paraSpaceAfter: 8 });
  });
  notes(s, note); return s;
}

// big number callouts
function stats(p, { kicker, head, items, note, foot }) {
  const s = p.addSlide(); s.background = { color: C.paper };
  if (kicker) eyebrow(s, kicker, M.l, 0.55, C.brass);
  title(s, head, kicker ? 0.9 : M.top);
  const n = items.length, gap = 0.4;
  const w = (M.w - gap * (n - 1)) / n;
  items.forEach((it, i) => {
    const x = M.l + i * (w + gap);
    const col = it.tone === 'danger' ? C.danger : it.tone === 'warn' ? C.warn : it.tone === 'safe' ? C.safe : C.body;
    s.addShape('roundRect', { x, y: 2.15, w, h: 2.6, rectRadius: 0.08,
      fill: { color: it.fill || C.tint }, line: { color: C.rule, width: 0.75 } });
    s.addText(it.v, { isTextBox: true, x: x + 0.2, y: 2.48, w: w - 0.4, h: 1.15, margin: 0,
      align: 'center', fontFace: F.head, fontSize: it.v.length > 8 ? 34 : 46, bold: true, color: col });
    s.addText(it.l, { isTextBox: true, x: x + 0.2, y: 3.68, w: w - 0.4, h: 0.9, margin: 0,
      align: 'center', fontFace: F.body, fontSize: 13, color: C.dim, lineSpacing: 18 });
  });
  if (foot) s.addText(foot, { isTextBox: true, x: M.l, y: 5.15, w: 11.6, h: 1.3, margin: 0,
    fontFace: F.body, fontSize: 15, color: C.body, lineSpacing: 23 });
  notes(s, note); return s;
}

function tableSlide(p, { kicker, head, cols, rows: rws, widths, note, foot }) {
  const s = p.addSlide(); s.background = { color: C.paper };
  if (kicker) eyebrow(s, kicker, M.l, 0.55, C.brass);
  title(s, head, kicker ? 0.9 : M.top);
  const header = cols.map(c => ({ text: c, options: {
    bold: true, color: C.faint, fontSize: 11.5, fontFace: F.body, fill: { color: C.paper },
    border: [{ pt: 0, color: C.paper }, { pt: 0, color: C.paper }, { pt: 1, color: C.rule }, { pt: 0, color: C.paper }] } }));
  const body = rws.map(r => r.map(cell => {
    const o = typeof cell === 'object' ? cell : { t: cell };
    const col = o.tone === 'danger' ? C.danger : o.tone === 'warn' ? C.warn : o.tone === 'safe' ? C.safe : C.body;
    return { text: o.t, options: { color: col, bold: !!o.b, fontSize: 13, fontFace: F.body,
      fill: { color: o.fill || C.paper },
      border: [{ pt: 0, color: C.paper }, { pt: 0, color: C.paper }, { pt: 0.75, color: C.rule }, { pt: 0, color: C.paper }] } };
  }));
  s.addTable([header, ...body], { x: M.l, y: 2.05, w: M.w, colW: widths,
    rowH: 0.42, valign: 'middle', margin: [6, 10, 6, 10] });
  if (foot) s.addText(foot, { isTextBox: true, x: M.l, y: 6.25, w: 11.6, h: 0.8, margin: 0,
    fontFace: F.body, fontSize: 13, italic: true, color: C.dim, lineSpacing: 19 });
  notes(s, note); return s;
}

// numbered horizontal flow
function flow(p, { kicker, head, steps, note, foot }) {
  const s = p.addSlide(); s.background = { color: C.paper };
  if (kicker) eyebrow(s, kicker, M.l, 0.55, C.brass);
  title(s, head, kicker ? 0.9 : M.top);
  const n = steps.length, gap = 0.34;
  const w = (M.w - gap * (n - 1)) / n;
  steps.forEach((st, i) => {
    const x = M.l + i * (w + gap);
    const col = st.tone === 'danger' ? C.danger : st.tone === 'warn' ? C.warn : st.tone === 'safe' ? C.safe : C.brass;
    s.addShape('roundRect', { x, y: 2.25, w, h: 2.55, rectRadius: 0.08,
      fill: { color: st.fill || C.tint }, line: { color: C.rule, width: 0.75 } });
    s.addShape('ellipse', { x: x + 0.28, y: 2.55, w: 0.42, h: 0.42, fill: { color: col } });
    s.addText(String(i + 1), { isTextBox: true, x: x + 0.28, y: 2.55, w: 0.42, h: 0.42, margin: 0,
      align: 'center', valign: 'middle', fontFace: F.body, fontSize: 12, bold: true, color: 'FFFFFF' });
    s.addText(st.t, { isTextBox: true, x: x + 0.28, y: 3.12, w: w - 0.56, h: 0.5, margin: 0,
      fontFace: F.body, fontSize: 15, bold: true, color: C.body });
    if (st.d) s.addText(st.d, { isTextBox: true, x: x + 0.28, y: 3.62, w: w - 0.56, h: 1.0, margin: 0,
      fontFace: F.body, fontSize: 12, color: C.dim, lineSpacing: 16 });
  });
  if (foot) s.addText(foot, { isTextBox: true, x: M.l, y: 5.2, w: 11.6, h: 1.2, margin: 0,
    fontFace: F.body, fontSize: 15, color: C.body, lineSpacing: 23 });
  notes(s, note); return s;
}

// script/prompt slide — a line the room is asked to do
function prompt(p, { kicker, head, ask, sub, tone, note }) {
  const s = p.addSlide(); s.background = { color: C.tint };
  const col = tone === 'danger' ? C.danger : tone === 'warn' ? C.warn : tone === 'safe' ? C.safe : C.brass;
  if (kicker) eyebrow(s, kicker, M.l, 1.5, col);
  s.addText(head, { isTextBox: true, x: M.l, y: 2.0, w: 11.6, h: 1.7, margin: 0,
    fontFace: F.head, fontSize: 38, bold: true, color: C.body, lineSpacing: 46 });
  if (ask) s.addText(ask, { isTextBox: true, x: M.l, y: 3.95, w: 11.6, h: 0.85, margin: 0,
    fontFace: F.body, fontSize: 24, bold: true, color: col });
  if (sub) s.addText(sub, { isTextBox: true, x: M.l, y: 4.95, w: 10.4, h: 1.2, margin: 0,
    fontFace: F.body, fontSize: 16, color: C.dim, lineSpacing: 24 });
  notes(s, note); return s;
}

module.exports = { pptxgen, C, F, M, deck, cover, section, statement, rows, twoCol, stats, tableSlide, flow, prompt, eyebrow, title };
