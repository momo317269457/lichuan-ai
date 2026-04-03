#!/usr/bin/env python3
"""Extract all data from a brochure PDF:
- Tables via Camelot
- Images via PyMuPDF (fitz)
- Text sections segmented by common headings
"""
import sys
import os
import json

try:
    import camelot
except Exception:
    camelot = None

try:
    import fitz  # PyMuPDF
except Exception:
    fitz = None

HEADINGS = {
    '产品', '服务能力', '认证与资质', '画廊', '联系我们', '产品中心', '首页', '力川金属'
}

def ensure_dir(p):
    d = os.path.dirname(p) if p.endswith('/') else p
    if not os.path.exists(d):
        os.makedirs(d, exist_ok=True)

def extract_images(pdf_path, images_dir):
    images = []
    if fitz is None:
        return images
    ensure_dir(images_dir)
    doc = fitz.open(pdf_path)
    for i in range(len(doc)):
        page = doc[i]
        image_list = page.get_images(full=True)
        for idx, img in enumerate(image_list):
            xref = img[0]
            base = doc.extract_image(xref)
            image_bytes = base['image']
            ext = base.get('ext', 'png')
            filename = f"page_{i+1}_img_{idx+1}.{ext}"
            path = os.path.join(images_dir, filename)
            with open(path, 'wb') as f:
                f.write(image_bytes)
            images.append({"path": path, "page": i+1})
    return images

def extract_tables(pdf_path):
    tables = []
    if camelot is None:
        return tables
    try:
        tlist = camelot.read_pdf(pdf_path, flavor='stream', pages='all')
        for t in tlist:
            tables.append({"page": t.page, "data": t.df.values.tolist(), "columns": list(t.df.columns)})
    except Exception:
        try:
            tlist = camelot.read_pdf(pdf_path, flavor='lattice', pages='all')
            for t in tlist:
                tables.append({"page": t.page, "data": t.df.values.tolist(), "columns": list(t.df.columns)})
        except Exception:
            pass
    return tables

def extract_text_sections(pdf_path):
    sections = []
    if fitz is None:
        return sections
    doc = fitz.open(pdf_path)
    for pi in range(len(doc)):
        page = doc[pi]
        text = page.get_text()
        # naive segmentation by headings
        current = {"header": None, "text": ""}
        for line in text.splitlines():
            line_strip = line.strip()
            if line_strip in HEADINGS:
                if current["text"].strip():
                    sections.append({"header": current["header"], "text": current["text"].strip(), "page": pi+1})
                current = {"header": line_strip, "text": ""}
            else:
                current["text"] += (line + "\n")
        if current["text"].strip():
            sections.append({"header": current["header"], "text": current["text"].strip(), "page": pi+1})
    return sections

def main():
    if len(sys.argv) < 2:
        print("Usage: extract_pdf_all.py <path-to-pdf> [<output-json>] [<images-dir>]" )
        sys.exit(2)
    pdf_path = sys.argv[1]
    out_path = sys.argv[2] if len(sys.argv) > 2 else os.path.splitext(pdf_path)[0] + "_extracted.json"
    images_dir = sys.argv[3] if len(sys.argv) > 3 else os.path.join(os.path.dirname(out_path), 'images')
    if not os.path.exists(pdf_path):
        print(f"PDF not found: {pdf_path}")
        sys.exit(3)

    data = {
        "title": os.path.basename(pdf_path),
        "pages": 0,
        "images": [],
        "tables": [],
        "sections": []
    }

    # Extract images
    imgs = extract_images(pdf_path, images_dir)
    data["images"] = imgs

    # Extract tables
    tabs = extract_tables(pdf_path)
    data["tables"] = tabs

    # Extract text sections
    secs = extract_text_sections(pdf_path)
    data["sections"] = secs
    data["pages"] = len(list(set([s.get('page', 1) for s in secs]))) if secs else 0

    # Write output
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Extraction complete. Output written to {out_path}")

if __name__ == '__main__':
    main()
