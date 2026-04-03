// Simple API to fetch company data from data/company.json
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    const dataPath = path.resolve(process.cwd(), 'lc-metal-website', 'data', 'company.json');
    const raw = fs.readFileSync(dataPath, 'utf8');
    const company = JSON.parse(raw);
    res.status(200).json({ ok: true, data: company });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
}
