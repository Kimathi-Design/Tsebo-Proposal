import { toBlob } from "html-to-image";
import { PDFDocument } from "pdf-lib";
import { APPENDIX_START_SLIDE, appendices } from "@/lib/deck-content";

export type ExportDeckPdfOptions = {
  slideCount?: number;
  width: number;
  height: number;
  filename?: string;
  renderSlide: (index: number) => Promise<HTMLElement | null>;
  onProgress?: (current: number, total: number) => void;
  settleMs?: (index: number) => number;
};

/** Slides captured as PNG — appendix breaker slides are skipped (PDFs merged instead). */
const PNG_SLIDE_COUNT = APPENDIX_START_SLIDE;

export async function waitForSlideReady(root: HTMLElement | null) {
  await document.fonts.ready;
  if (!root) return;

  const imgs = Array.from(root.querySelectorAll("img"));
  await Promise.all(
    imgs.map(
      (img) =>
        new Promise<void>((resolve) => {
          if (img.complete) {
            resolve();
            return;
          }
          img.onload = () => resolve();
          img.onerror = () => resolve();
        }),
    ),
  );
}

async function loadAppendixBytes() {
  return Promise.all(
    appendices.map(async (appendix) => {
      const response = await fetch(appendix.file);
      if (!response.ok) {
        throw new Error(`Failed to load ${appendix.file}`);
      }
      return response.arrayBuffer();
    }),
  );
}

async function appendAppendixPagesFromBytes(
  pdfDoc: PDFDocument,
  appendixBytes: ArrayBuffer,
) {
  const appendixPdf = await PDFDocument.load(appendixBytes);
  const copied = await pdfDoc.copyPages(
    appendixPdf,
    appendixPdf.getPageIndices(),
  );
  copied.forEach((page) => pdfDoc.addPage(page));
}

export function downloadPdf(bytes: Uint8Array, filename: string) {
  const blob = new Blob([Uint8Array.from(bytes)], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.rel = "noopener";
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  window.setTimeout(() => {
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  }, 30_000);
}

export async function exportDeckToPdf({
  width,
  height,
  renderSlide,
  onProgress,
  settleMs = () => 75,
}: ExportDeckPdfOptions): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create();
  const appendixBytesPromise = loadAppendixBytes();
  let progressStep = 0;
  const totalSteps = PNG_SLIDE_COUNT + appendices.length;

  for (let i = 0; i < PNG_SLIDE_COUNT; i++) {
    progressStep += 1;
    onProgress?.(progressStep, totalSteps);

    const el = await renderSlide(i);
    if (!el) {
      throw new Error(`Slide ${i + 1} failed to render`);
    }

    await waitForSlideReady(el);
    await new Promise((resolve) =>
      requestAnimationFrame(() => requestAnimationFrame(resolve)),
    );

    const delay = settleMs(i);
    if (delay > 0) {
      await new Promise((resolve) => setTimeout(resolve, delay));
    }

    let blob: Blob | null;
    try {
      blob = await toBlob(el, {
        width,
        height,
        pixelRatio: 1,
        cacheBust: true,
        skipFonts: false,
      });
    } catch (error) {
      throw new Error(
        `Failed to capture slide ${i + 1}: ${error instanceof Error ? error.message : "unknown error"}`,
      );
    }

    if (!blob) {
      throw new Error(`Failed to capture slide ${i + 1}: empty image`);
    }

    const pngBytes = await blob.arrayBuffer();
    const image = await pdfDoc.embedPng(pngBytes);
    const page = pdfDoc.addPage([width, height]);
    page.drawImage(image, {
      x: 0,
      y: 0,
      width,
      height,
    });

    // Yield so the UI can update and the tab stays responsive.
    await new Promise((resolve) => setTimeout(resolve, 0));
  }

  const appendixBuffers = await appendixBytesPromise;
  for (const appendixBytes of appendixBuffers) {
    progressStep += 1;
    onProgress?.(progressStep, totalSteps);
    await appendAppendixPagesFromBytes(pdfDoc, appendixBytes);
  }

  return pdfDoc.save();
}
