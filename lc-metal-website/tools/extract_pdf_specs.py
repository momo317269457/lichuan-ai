#!/usr/bin/env python3
import sys
import json
import os

try:
    import camelot
except Exception as e:
    print("ERROR: camelot is not installed. Install via: pip install camelot-py[cv]", file=sys.stderr)
    sys.exit(2)

def main():
    if len(sys.argv) < 2:
        print("Usage: extract_pdf_specs.py <path-to-pdf> [<output-json>]")
        sys.exit(2)
    pdf_path = sys.argv[1]
    out_path = sys.argv[2] if len(sys.argv) > 2 else os.path.join(os.path.dirname(pdf_path), 'brochure_specs_extracted.json')

    if not os.path.exists(pdf_path):
        print(f"PDF not found: {pdf_path}")
        sys.exit(3)

    # Try both flavors to maximize extraction success
    tables = []
    try:
        tables = camelot.read_pdf(pdf_path, flavor='stream', pages='all')
    except Exception:
        try:
            tables = camelot.read_pdf(pdf_path, flavor='lattice', pages='all')
        except Exception as e:
            print(f"ERROR: failed to extract tables from PDF: {e}", file=sys.stderr)
            sys.exit(4)

    products = []
    for t in tables:
        df = t.df
        rows = df.to_numpy().tolist() if hasattr(df, 'to_numpy') else []
        if not rows:
            continue
        # Normalize rows to strings
        rows = [[str(cell).strip() for cell in row] for row in rows]
        # Heuristic: if first row contains product header words, treat first column as product name
        header_guess = rows[0]
        has_header = any(h in ['产品', '名称', 'Model', 'Item'] for h in header_guess)
        if has_header and len(rows) >= 2:
            header = header_guess[1:]
            for r in rows[1:]:
                if len(r) < 2 or not r[0].strip():
                    continue
                name = r[0].strip()
                values = r[1:]
                specs = []
                for i, val in enumerate(values):
                    spec_name = header[i] if i < len(header) and header[i] else f"规格项{i+1}"
                    specs.append({"name": spec_name, "value": val.strip(), "unit": ""})
                products.append({"name": name, "specs": specs})

    # Merge with existing brochure data if possible
    data = products
    if not data:
        print("No product-level data extracted. Please provide the PDF or check extraction options.", file=sys.stderr)
        sys.exit(5)
    # Write to output path
    # Write as a plain array of products to align with existing brochure_specs.json structure
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Extracted specs written to {out_path}")

if __name__ == '__main__':
    main()
