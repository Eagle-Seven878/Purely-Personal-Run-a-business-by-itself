# Automation with the IDEA StatiCa Connection API

Use this when the user has many similar joints, wants parametric studies, or needs loads pushed in bulk from a spreadsheet.

## What Exists

- **Connection REST API**: a local service shipped with IDEA StatiCa (v24.1 and later). It runs on the user's Windows machine with a valid licence and exposes open / update / calculate / report operations.
- **Python client**: `pip install ideastatica-connection-api`. Thin wrapper around the REST service.
- **.NET clients** for C# users.
- Official docs and samples: the `idea-statica/ideastatica-public` repository on GitHub and IDEA StatiCa's developer docs.

**Method names and model classes change between versions.** Before writing code, ask for the installed IDEA StatiCa version and package version, then check the matching sample in the official repo. Keep every version-specific call inside one adapter so the rest of the script does not break on upgrade.

## Standard Batch Pattern

```
connections.xlsx  ──►  script  ──►  for each row:
                                     1. open template .ideaCon
                                     2. set parameters (plate t, bolt d, grade)
                                     3. write load effects
                                     4. calculate (stress/strain, then buckling)
                                     5. read results summary
                                     6. save as <id>.ideaCon + report
                                  ──►  results.csv  (id, governing item, max util, αcr, status)
```

## Python Skeleton

The adapter class is the only place with API calls. Fill its methods from the official sample for the user's version.

```python
"""Batch-check IDEA StatiCa connections from a spreadsheet.

Draft tooling. Results must be reviewed by the engineer of record.
"""
import csv
from dataclasses import dataclass
from pathlib import Path

import openpyxl  # pip install openpyxl


@dataclass
class Row:
    conn_id: str
    template: Path
    plate_t: float      # mm
    bolt_dia: int       # mm
    loads: dict         # {"LE1": {"N": .., "Vz": .., "My": ..}, ...}


class IdeaAdapter:
    """Version-specific calls live here only. Fill from the official sample
    for the installed ideastatica-connection-api version."""

    def __init__(self, base_url: str = "http://localhost:5000"):
        self.base_url = base_url

    def __enter__(self):
        # connect / attach to the running Connection REST service
        raise NotImplementedError

    def __exit__(self, *exc):
        # close project, dispose client
        pass

    def open(self, path: Path): ...
    def set_parameter(self, name: str, value): ...
    def set_load_effect(self, name: str, forces: dict): ...
    def calculate(self) -> dict: ...          # return {"max_util": .., "governing": .., "alpha_cr": ..}
    def save_as(self, path: Path): ...
    def export_report(self, path: Path): ...


def read_rows(xlsx: Path) -> list[Row]:
    ws = openpyxl.load_workbook(xlsx, read_only=True).active
    header = [c.value for c in next(ws.iter_rows(max_row=1))]
    rows = []
    for values in ws.iter_rows(min_row=2, values_only=True):
        r = dict(zip(header, values))
        rows.append(Row(
            conn_id=str(r["id"]),
            template=Path(r["template"]),
            plate_t=float(r["plate_t"]),
            bolt_dia=int(r["bolt_dia"]),
            loads={"LE1": {"N": r["N"], "Vz": r["Vz"], "My": r["My"]}},
        ))
    return rows


def main(xlsx: Path, out_dir: Path):
    out_dir.mkdir(exist_ok=True)
    results = []
    with IdeaAdapter() as idea:
        for row in read_rows(xlsx):
            idea.open(row.template)
            idea.set_parameter("PlateThickness", row.plate_t)
            idea.set_parameter("BoltDiameter", row.bolt_dia)
            for le, forces in row.loads.items():
                idea.set_load_effect(le, forces)
            res = idea.calculate()
            idea.save_as(out_dir / f"{row.conn_id}.ideaCon")
            idea.export_report(out_dir / f"{row.conn_id}.pdf")
            status = "OK" if res["max_util"] <= 100 and res["alpha_cr"] >= 15 else "REVIEW"
            results.append({"id": row.conn_id, **res, "status": status})

    with open(out_dir / "results.csv", "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=results[0].keys())
        w.writeheader()
        w.writerows(results)


if __name__ == "__main__":
    main(Path("connections.xlsx"), Path("out"))
```

## Parameters

Parametric templates use parameters defined inside the `.ideaCon` (Developer / Parameters mode in the Connection app). The script can only change what the template exposes. If the user wants to vary plate thickness, the template must have a parameter bound to it. Tell them this before they run 200 rows.

## Safety Checks for Every Batch

- Flag any row with αcr < 15 as `REVIEW`, not `OK`.
- Flag any row where the analysis stopped below 100% load.
- Write the IDEA StatiCa version and code setup into the results CSV header.
- Spot-check at least one output file by hand in the app before trusting the batch.
- Never overwrite the template file.
