#!/usr/bin/env node
/**
 * Copies signed RFQ documents and generates Annexure D pricing + mandatory placeholders.
 * Run: node scripts/build-submission-pack.mjs
 */
import { copyFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const root = process.cwd();
const outDir = join(root, "public/appendices");
const signedDir = join(root, "BW appendexis/signed and filled");

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
  [
    "BW appendexis/signed and filled/Annexure C - Intent to Respond -IBD.pdf",
    "annexure-c-intent-to-respond-signed.pdf",
  ],
  [
    "BW appendexis/signed and filled/BWE-RFP-ICT -Annexure D_Non-Disclosure Agreement.pdf",
    "annexure-f-nda-confidentiality-agreement-signed.pdf",
  ],
  [
    "BW appendexis/signed and filled/Supplier Self Assessment Questionnaire In-Depth ver2023 IBD.pdf",
    "support-f-supplier-self-assessment-signed.pdf",
  ],
  [
    "BW appendexis/signed and filled/BW Group Supplier Code of Conduct_2023 - IBD Signed.pdf",
    "support-g-supplier-code-of-conduct-signed.pdf",
  ],
  ["public/appendices/appendix-g-bwe-e-invoicing-gateway-api-spec.pdf", "annexure-b-e-invoicing-gateway-api-spec.pdf"],
  ["Infinity Compliance Docs updated20260702.pdf", "mandatory-compliance-documents-2026.pdf"],
  ["Infinity Banking Details.pdf", "mandatory-banking-details.pdf"],
  ["Vat Reg Certificate.pdf", "mandatory-vat-registration-certificate.pdf"],
  ["public/appendices/appendix-a-rsl-accreditation-letter.pdf", "support-a-rsl-accreditation-letter.pdf"],
  ["public/appendices/appendix-b-motheo-integrator-guide.pdf", "support-b-motheo-integrator-guide.pdf"],
];

for (const [src, dest] of copies) {
  copyIfExists(src, dest);
}

async function writeTextPdf(filename, title, body) {
  const pdf = await PDFDocument.create();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const page = pdf.addPage([595, 842]);
  const margin = 50;
  let y = 792;

  page.drawText(title, { x: margin, y, size: 14, font: bold, color: rgb(0.2, 0.13, 0.42) });
  y -= 28;

  const wrap = (text, maxWidth, size) => {
    const words = text.split(/\s+/);
    const lines = [];
    let line = "";
    for (const word of words) {
      const test = line ? `${line} ${word}` : word;
      if (font.widthOfTextAtSize(test, size) > maxWidth) {
        if (line) lines.push(line);
        line = word;
      } else {
        line = test;
      }
    }
    if (line) lines.push(line);
    return lines;
  };

  for (const paragraph of body.split("\n\n")) {
    for (const line of wrap(paragraph.trim(), 495, 11)) {
      if (y < 60) break;
      page.drawText(line, { x: margin, y, size: 11, font, color: rgb(0.15, 0.15, 0.2) });
      y -= 16;
    }
    y -= 8;
  }

  const bytes = await pdf.save();
  writeFileSync(join(outDir, filename), bytes);
  console.log(`GENERATE ${filename}`);
}

const bbbeeText = `Infinity Business Dynamics (Pty) Ltd is a Lesotho-registered enterprise. A formal South African B-BBEE certificate is not applicable to our Lesotho incorporation.

We confirm our commitment to transformation, local employment and enterprise development within Lesotho, and will provide any additional empowerment documentation requested by Barloworld Equipment during due diligence.`;

await writeTextPdf(
  "mandatory-bbbee-gap-statement.pdf",
  "MANDATORY §2.6 — B-BBEE GAP STATEMENT",
  bbbeeText,
);

await writeTextPdf(
  "mandatory-shareholder-identification.pdf",
  "MANDATORY §2.3 — SHAREHOLDER IDENTIFICATION",
  "PLACEHOLDER — Attach certified copies of identification and certificates for all shareholders as listed in the company registration documents.\n\nReplace this placeholder PDF with the actual shareholder ID pack before final RFQ submission.",
);

await writeTextPdf(
  "mandatory-good-standing-letter.pdf",
  "MANDATORY §2.4 — LETTER OF GOOD STANDING",
  "PLACEHOLDER — Attach the latest letter of good standing from the Compensation Commissioner (or regional equivalent for overseas companies).\n\nReplace this placeholder PDF with the official good-standing letter before final RFQ submission.",
);

await writeTextPdf(
  "annexure-e-framework-agreement-deviations.pdf",
  "ANNEXURE E — FRAMEWORK AGREEMENT & CLAUSE DEVIATION TABLE",
  "Infinity Business Dynamics (Pty) Ltd accepts the Barloworld Equipment Standard Terms & Conditions subject to the Clause Deviation Table submitted herewith.\n\nSee also: Consulting-IT Service Agreement draft and signed supplier documentation in the submission zip.\n\nIf no deviations apply, this document confirms acceptance of Annexure E in full.",
);

const csv = `Line Item,Description,Amount (ZAR),Basis / Notes
Year 1 — Licence & Implementation,Platform licence and full project delivery — design SAP/CRM integration security testing training and go-live,391500.00,One-time (Year 1)
Year 2 onwards — Annual Maintenance,Annual subscription / licence — application support compliance monitoring regulatory updates and preventative maintenance,105225.00,Per annum from Year 2

Assumptions,,
Currency,All amounts in ZAR unless otherwise stated,
Year 1,Includes licence and implementation as a single investment,
Year 2+,Annual maintenance / subscription fee applies for each subsequent year,
Volume baseline,~400 invoices per month (subject to confirmation with BWE),
Validity,190 business days from RFQ submission date,
`;

writeFileSync(join(outDir, "annexure-d-pricing-requirements.csv"), csv);
console.log("GENERATE annexure-d-pricing-requirements.csv");

const pricingBody = `ANNEXURE D: PRICING REQUIREMENTS

Infinity Business Dynamics (Pty) Ltd — Barloworld Equipment Lesotho E-Invoicing Compliance Gateway

All amounts quoted in ZAR. Commercials valid for 190 business days from RFQ submission date.

Year 1 — Licence & Implementation (one-time): ZAR 391,500.00
  Includes platform licence and full implementation — design, SAP/CRM integration, testing, training and go-live.

Year 2 onwards — Annual Maintenance / Subscription (per annum): ZAR 105,225.00
  Application support, compliance monitoring, regulatory updates and preventative maintenance.

Assumptions:
• Baseline volume: ~400 invoices per month (subject to confirmation with BWE)
• Annual maintenance fee applies from year two for the duration of the support agreement

See annexure-d-pricing-requirements.csv for structured pricing model.`;

await writeTextPdf("annexure-d-pricing-requirements.pdf", "ANNEXURE D: PRICING REQUIREMENTS", pricingBody);

console.log("\nSubmission pack files ready in public/appendices/");
