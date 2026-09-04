# The Scripts

The facilitator script for every level, as an **editable Word document** and a
matching **PDF** for printing or sharing.

| Level | Editable | Print / share | Pages |
|---|---|---|---|
| Level 0 · Orientation | `BBT-Level-0-Orientation-SCRIPT.docx` | `.pdf` | 6 |
| Level 1 · Masterclass | `BBT-Level-1-Masterclass-SCRIPT.docx` | `.pdf` | 14 |
| Levels 2 & 3 · Deep Dive and Immersion | `BBT-Level-2-3-DeepDive-Immersion-SCRIPT.docx` | `.pdf` | 30 |
| Level 4 · Mentorship | `BBT-Level-4-Mentorship-SCRIPT.docx` | `.pdf` | 8 |
| Continuing · Thrive Circle | `BBT-Thrive-Circle-GUIDE.docx` | `.pdf` | 4 |
| Train the Trainer | `BBT-Train-the-Trainer-SCRIPT.docx` | `.pdf` | 7 |

The Level 2/3 document is the whole level in one file — the curriculum overview
plus all eight modules, in teaching order.

## How to read one

- **Brass headings** are beats, each with its timing and slide reference.
- **Indented text** is what you say.
- *Italic lines* are stage directions — when to wait, what to watch for, what a
  coach should be checking.
- **[LIVE]** means read it off the platform in the room, never off the slide.
- **[GATE]** means do not proceed until satisfied.

## Where the same words live

Three places, deliberately:

1. **Markdown** in each level folder — the source of truth. Edit here.
2. **These Word documents** — for faculty who want to annotate or print.
3. **The speaker notes** in the [decks](../decks/) — for Presenter View on the day.

If you change a script, change the markdown and regenerate: `python3 decks/src/mkscript.py`.
Otherwise the three drift apart, which is the exact failure the original deck had.

## Before every cohort

Replace every `{{variable}}` — dates, seat cap, ops lead — and **verify the
drawdown figures** against a live chart. They are approximate and they age.
