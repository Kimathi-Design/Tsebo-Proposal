import { chromium } from "playwright";
import { PDFDocument } from "pdf-lib";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { spawn } from "node:child_process";

const APPENDIX_FILES = [
  "appendix-a-rsl-accreditation-letter.pdf",
  "appendix-b-motheo-integrator-guide.pdf",
  "appendix-c-tax-clearance-certificate.pdf",
  "appendix-d-business-registration-certificate.pdf",
  "appendix-e-banking-confirmation-letter.pdf",
  "appendix-f-dhl-group-purchasing-terms.pdf",
  "appendix-g-dhl-supplier-code-of-conduct.pdf",
  "appendix-h-dhl-information-security-code-of-practice.pdf",
  "appendix-i-dhl-framework-agreement-template.pdf",
];

const outputPath = join(process.cwd(), "public/DHL-Motheo-Proposal.pdf");
const port = Number(process.env.DECK_PORT ?? 3010);
const baseUrl = process.env.DECK_URL ?? `http://localhost:${port}`;
const printUrl = `${baseUrl.replace(/\/$/, "")}/print`;

async function waitForServer(url, timeoutMs = 60_000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // retry
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server did not become ready at ${url}`);
}

let serverProcess;
if (!process.env.DECK_URL) {
  serverProcess = spawn("npm", ["start"], {
    cwd: process.cwd(),
    env: { ...process.env, PORT: String(port) },
    stdio: "inherit",
  });
  await waitForServer(baseUrl);
}

const browser = await chromium.launch();
const page = await browser.newPage();

try {
  console.log(`Rendering slides from ${printUrl}...`);
  await page.goto(printUrl, { waitUntil: "networkidle", timeout: 120_000 });
  await page.waitForFunction(() => document.fonts.ready);
  await page.waitForTimeout(1500);

  const slidesPath = join(tmpdir(), "dhl-proposal-slides.pdf");
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: slidesPath,
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  console.log("Merging appendices...");
  const pdfDoc = await PDFDocument.load(readFileSync(slidesPath));
  for (const file of APPENDIX_FILES) {
    const appendixBytes = readFileSync(join(process.cwd(), "public/appendices", file));
    const appendixPdf = await PDFDocument.load(appendixBytes);
    const pages = await pdfDoc.copyPages(appendixPdf, appendixPdf.getPageIndices());
    pages.forEach((p) => pdfDoc.addPage(p));
  }

  writeFileSync(outputPath, await pdfDoc.save());
  console.log(`Saved ${outputPath}`);
} finally {
  await browser.close();
  if (serverProcess) {
    serverProcess.kill("SIGTERM");
  }
}
