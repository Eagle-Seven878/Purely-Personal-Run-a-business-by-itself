# The Decks

Presentable PowerPoint decks, one per level — **editable `.pptx` and a matching
`.pdf`** for printing, sharing, or presenting from a machine without Office. **Every slide carries its
facilitator script in the speaker notes** — open the deck in Presenter View and
the script is there, beat by beat, with the timings and the coach checkpoints.

The markdown in each level folder remains the source of truth for the full
script; these decks are the room-ready version of it.

| Deck | Level | Slides | Runs |
|---|---|---|---|
| `BBT-Level-0-Orientation.pptx` | Level 0 · free | 27 | 90 min |
| `BBT-Level-1-Masterclass.pptx` | Level 1 · ₱1,999 | 40 | 4 hours |
| `BBT-Level-2-3-Modules-1-3.pptx` | Level 2 & 3 · days 1–2 | 30 | chart structure, platform, first execution |
| `BBT-Level-2-3-Modules-4-6.pptx` | Level 2 & 3 · day 3 | 24 | LTV discipline, the drill, accumulation |
| `BBT-Level-3-Modules-7-8-Immersion.pptx` | **Level 3 only** · day 4 | 15 | playbook, transfer question |
| `BBT-Level-4-Mentorship.pptx` | Level 4 · USD 3,000 | 14 | onboarding + the annual cadence |
| `BBT-Train-the-Trainer.pptx` | Faculty · not sold | 12 | 2-day certification |

Level 2 runs Modules 1–6. Level 3 runs Modules 1–8. Same decks — the Immersion
adds the fourth day.

## Before every cohort

1. Replace every `{{variable}}` — dates, seat cap, ops lead — from the cohort file.
2. **Verify the drawdown figures** on the seven-year slides against a live chart,
   and add the current cycle. They are approximate and they age.
3. Read live rates and the platform's LTV thresholds off the platform in the room.
   Nothing live is printed on a slide, deliberately.

## Design

Deep indigo ground with a brass accent, and a three-step risk scale (green ·
amber · red) used **only** for risk meaning, never decoration. Cambria headings,
Calibri body — both ship with Office, so the decks render as designed on any
machine. Dark covers and section dividers, light content slides.

## Rebuilding

Sources in [`src/`](src/). `lib.js` holds the design system, so a change there
restyles all seven decks at once.

```bash
cd src && npm install pptxgenjs
node d0.js && node d1.js && node d23a.js && node d23b.js && node d3.js && node d4.js && node dtt.js
python3 qa.py ../BBT-*.pptx        # geometric QA: overflow, overlap, bounds
python3 topdf.py ../BBT-*.pptx     # slide PDFs
python3 mkscript.py                # Word + PDF facilitator scripts
```

`topdf.py` reads each deck's real shape geometry and renders it through headless
Chromium, so the PDF matches the deck's layout rather than approximating it.

**Fonts.** The decks specify Cambria and Calibri, which ship with Office but are
not installable here. The renderer falls back to **Caladea** and **Carlito** —
Google's metric-compatible clones, with identical character widths and line
breaks. Install them before rendering or the fallback drops to DejaVu, whose
different metrics will shift line breaks:

```bash
apt-get install -y fonts-crosextra-carlito fonts-crosextra-caladea && fc-cache -f
```

`qa.py` exists because LibreOffice is a stub install in the build sandbox — it has
no Impress or Writer modules and cannot load any Office file. The usual
render-and-look pass was replaced by a geometric check for text overflow,
overlapping text and out-of-bounds shapes; all seven decks pass it clean and pass
the OOXML validator. The PDF path goes through Chromium instead, which is why it
works at all.

Facilitator scripts also live as Word documents and PDFs in
[`../scripts/`](../scripts/).
