#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const args = require('minimist')(process.argv.slice(2));

const inputPath = args.input || path.join(__dirname, '..', 'brochure.json');
const outputPath = args.output || path.join(__dirname, '..', 'data', 'company.json');

function readJSON(p) {
  const s = fs.readFileSync(p, 'utf8');
  return JSON.parse(s);
}

function writeJSON(p, obj) {
  const dir = path.dirname(p);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(p, JSON.stringify(obj, null, 2), 'utf8');
}

try {
  if (!fs.existsSync(inputPath)) {
    console.error(`Input brochure file not found: ${inputPath}`);
    process.exit(1);
  }
  const brochure = readJSON(inputPath);
  const company = {
    name: brochure.name || '力川金属有限公司',
    description: brochure.description || '',
    products: brochure.products || [],
    services: brochure.services || [],
    certifications: brochure.certifications || [],
    contact: brochure.contact || brochure.contactInfo || { phone: '', email: '', address: '' }
  };
  writeJSON(outputPath, company);
  console.log(`Wrote company data to: ${outputPath}`);
} catch (err) {
  console.error('Error importing brochure:', err.message);
  process.exit(2);
}
