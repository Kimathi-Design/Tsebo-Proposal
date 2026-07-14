import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { spawn } from "node:child_process";
import { tmpdir } from "node:os";
import { chromium } from "playwright";
import { PDFDocument } from "pdf-lib";

/** Keep in sync with lib/submission-pack.ts → submissionPdfMergeOrder */
const submissionPdfMergeOrder = [
  "support-a-rsl-accreditation-letter.pdf",
  "support-b-motheo-integrator-guide.pdf",
  "est-000227-pricing.pdf",
  "mandatory-compliance-documents-2026.pdf",
  "mandatory-tax-clearance-certificate.pdf",
  "mandatory-banking-details.pdf",
  "mandatory-vat-registration-certificate.pdf",
];

const SLIDE_WIDTH = 1240;
const SLIDE_HEIGHT = 1754;
const outputPath = join(process.cwd(), "public/Tsebo-Motheo-Proposal.pdf");
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
const page = await browser.newPage({
  viewport: { width: SLIDE_WIDTH, height: SLIDE_HEIGHT },
  deviceScaleFactor: 2,
});

try {
  console.log(`Rendering slides from ${printUrl}...`);
  await page.emulateMedia({ media: "screen" });
  await page.goto(printUrl, { waitUntil: "networkidle", timeout: 180_000 });
  await page.waitForFunction(() => document.fonts.ready);
  await page.waitForFunction(
    () => document.documentElement.dataset.deckExport === "true",
  ).catch(() => {});
  await page.waitForTimeout(2500);

  const slideLocators = page.locator(".deck-print-slide");
  const slideCount = await slideLocators.count();
  if (slideCount === 0) {
    // Fallback: older print markup used in BW fork
    const slidesPath = join(tmpdir(), "tsebo-proposal-slides.pdf");
    await page.pdf({
      path: slidesPath,
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
    const pdfDoc = await PDFDocument.load(readFileSync(slidesPath));
    const appendicesDir = join(process.cwd(), "public/appendices");
    for (const file of submissionPdfMergeOrder) {
      const filePath = join(appendicesDir, file);
      try {
        const appendixBytes = readFileSync(filePath);
        const appendixPdf = await PDFDocument.load(appendixBytes);
        const pages = await pdfDoc.copyPages(appendixPdf, appendixPdf.getPageIndices());
        pages.forEach((p) => pdfDoc.addPage(p));
        console.log(`  + ${file}`);
      } catch (error) {
        console.warn(`  SKIP ${file}: ${error.message}`);
      }
    }
    writeFileSync(outputPath, await pdfDoc.save());
    console.log(`Saved ${outputPath}`);
  } else {
    console.log(`Capturing ${slideCount} slides as screen screenshots...`);
    const pdfDoc = await PDFDocument.create();

    for (let i = 0; i < slideCount; i++) {
      const slide = slideLocators.nth(i);
      await slide.scrollIntoViewIfNeeded();
      await page.waitForTimeout(i === 0 ? 800 : 120);

      const target = slide.locator("section.deck-slide").first();
      const hasSlide = (await target.count()) > 0;
      const jpgBytes = await (hasSlide ? target : slide).screenshot({
        type: "jpeg",
        quality: 92,
        animations: "disabled",
      });

      const image = await pdfDoc.embedJpg(jpgBytes);
      const pdfPage = pdfDoc.addPage([SLIDE_WIDTH, SLIDE_HEIGHT]);
      pdfPage.drawImage(image, {
        x: 0,
        y: 0,
        width: SLIDE_WIDTH,
        height: SLIDE_HEIGHT,
      });
      console.log(`  ✓ slide ${i + 1}/${slideCount}`);
    }

    console.log("Merging appendix PDFs...");
    const appendicesDir = join(process.cwd(), "public/appendices");

    for (const file of submissionPdfMergeOrder) {
      const filePath = join(appendicesDir, file);
      try {
        const appendixBytes = readFileSync(filePath);
        const appendixPdf = await PDFDocument.load(appendixBytes);
        const pages = await pdfDoc.copyPages(appendixPdf, appendixPdf.getPageIndices());
        pages.forEach((p) => pdfDoc.addPage(p));
        console.log(`  + ${file}`);
      } catch (error) {
        console.warn(`  SKIP ${file}: ${error.message}`);
      }
    }

    writeFileSync(outputPath, await pdfDoc.save());
    console.log(`Saved ${outputPath}`);
  }
} finally {
  await browser.close();
  if (serverProcess) {
    serverProcess.kill("SIGTERM");
  }
}
