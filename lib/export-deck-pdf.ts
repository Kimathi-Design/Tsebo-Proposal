import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";

export type ExportDeckPdfOptions = {
  slideCount: number;
  width: number;
  height: number;
  filename?: string;
  renderSlide: (index: number) => Promise<HTMLElement | null>;
  onProgress?: (current: number, total: number) => void;
  settleMs?: (index: number) => number;
};

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

export async function exportDeckToPdf({
  slideCount,
  width,
  height,
  filename = "IMANI-Investor-Deck.pdf",
  renderSlide,
  onProgress,
  settleMs = () => 400,
}: ExportDeckPdfOptions) {
  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: [width, height],
    compress: true,
  });

  for (let i = 0; i < slideCount; i++) {
    onProgress?.(i + 1, slideCount);

    const el = await renderSlide(i);
    if (!el) {
      throw new Error(`Slide ${i + 1} failed to render`);
    }

    await waitForSlideReady(el);
    await new Promise((resolve) =>
      requestAnimationFrame(() => requestAnimationFrame(resolve)),
    );
    await new Promise((resolve) => setTimeout(resolve, settleMs(i)));

    const dataUrl = await toPng(el, {
      width,
      height,
      pixelRatio: 2,
      cacheBust: true,
      includeQueryParams: true,
    });

    if (i > 0) {
      pdf.addPage([width, height], "landscape");
    }

    pdf.addImage(dataUrl, "PNG", 0, 0, width, height, undefined, "FAST");
  }

  pdf.save(filename);
}
