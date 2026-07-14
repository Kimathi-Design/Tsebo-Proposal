#!/usr/bin/env node
/**
 * Builds Tsebo supporting-document pack (Alliance-style appendices A–L).
 * Run: node scripts/build-submission-pack.mjs
 */
import { copyFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const root = process.cwd();
const outDir = join(root, "public/appendices");

mkdirSync(outDir, { recursive: true });

function copyIfExists(src, dest) {
  const from = join(root, src);
  const to = join(outDir, dest);
  if (!existsSync(from)) {
    console.warn(`SKIP (missing): ${src}`);
    return false;
  }
  copyFileSync(from, to);
  console.log(`COPY ${dest}`);
  return true;
}

const copies = [
  ["Infinity Compliance Docs updated20260702.pdf", "mandatory-compliance-documents-2026.pdf"],
  ["Infinity Banking Details.pdf", "mandatory-banking-details.pdf"],
  ["Vat Reg Certificate.pdf", "mandatory-vat-registration-certificate.pdf"],
  ["public/appendices/est-000227-pricing.pdf", "est-000227-pricing.pdf"],
  ["public/appendices/appendix-a-rsl-accreditation-letter.pdf", "support-a-rsl-accreditation-letter.pdf"],
  ["public/appendices/appendix-b-motheo-integrator-guide.pdf", "support-b-motheo-integrator-guide.pdf"],
  ["public/appendices/appendix-c-tax-clearance-certificate.pdf", "mandatory-tax-clearance-certificate.pdf"],
];

for (const [src, dest] of copies) {
  copyIfExists(src, dest);
}

async function writeTextPdf(filename, title, body) {
  const pdf = await PDFDocument.create();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const page = pdf.addPage([595, 842]);
  const { height } = page.getSize();
  let y = height - 56;
  page.drawText(title, { x: 48, y, size: 14, font: bold, color: rgb(0.1, 0.15, 0.3) });
  y -= 28;
  for (const line of body.split("\n")) {
    if (y < 56) break;
    page.drawText(line.slice(0, 95), {
      x: 48,
      y,
      size: 10,
      font,
      color: rgb(0.15, 0.15, 0.15),
    });
    y -= 14;
  }
  writeFileSync(join(outDir, filename), await pdf.save());
  console.log(`GENERATE ${filename}`);
}

await writeTextPdf(
  "annexure-d-pricing-requirements.pdf",
  "PRICING — EST-000227",
  `ESTIMATE EST-000227 — TSEBO SOLUTIONS GROUP

Infinity Business Dynamics (Pty) Ltd — Tsebo Solutions Group Lesotho (Pty) Ltd
Estimate Date: 12 Jul 2026 · Currency: LSL

Recommended package (Dynamics + Motheo Compliance Layer + Motheo POS):
1. MS Dynamics Integration (once-off): LSL 97,500.00
2. Managed Compliance Service (annual): LSL 126,500.00
5. Motheo POS Annual Subscription: LSL 45,500.00
   Sub Total: LSL 269,500.00
   VAT (15%): LSL 40,425.00
   Total (Tax Inclusive): LSL 309,925.00

Optional — if Tsebo considers integrating Intelipos (alternative to Motheo POS):
3. Intelipos Integration & Device Setup (once-off): LSL 45,200.00
4. Intelipos Transactions Compliance Management (annual): LSL 35,000.00
   Sub Total: LSL 80,200.00
   VAT (15%): LSL 12,030.00
   Total (Tax Inclusive): LSL 92,230.00

Year 2 onwards (excl. VAT): LSL 172,000.00 p.a. (Motheo path)

See est-000227-pricing.pdf for the original estimate.`,
);

console.log("\nTsebo Alliance-style submission pack ready in public/appendices/");
console.log(
  "Merge order: RSL letter, Motheo guide, EST-000227, registration, tax clearance, banking, VAT",
);
