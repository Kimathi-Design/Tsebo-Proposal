"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { flushSync } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Download, Loader2 } from "lucide-react";
import { renderDeckSlide } from "@/components/deck/DeckSlides";
import { DeckLoadingScreen } from "@/components/deck/DeckLoadingScreen";
import { DeckProgressBar } from "@/components/deck/DeckProgressBar";
import { IbdMark } from "@/components/deck/IbdMark";
import {
  APPENDIX_START_SLIDE,
  SLIDE_COUNT,
  SLIDE_HEIGHT,
  SLIDE_WIDTH,
  slideTitles,
} from "@/lib/deck-content";
import { downloadPdf, exportDeckToPdf } from "@/lib/export-deck-pdf";

const EXPORT_FILENAME = "DHL-Motheo-Proposal.pdf";

const FIT_MARGIN = 20;

function computeDeckScale(navHeight: number, container?: HTMLElement | null) {
  const rect = container?.getBoundingClientRect();
  const viewportW = window.visualViewport?.width ?? rect?.width ?? window.innerWidth;
  const viewportH = window.visualViewport?.height ?? rect?.height ?? window.innerHeight;
  const availW = viewportW - FIT_MARGIN * 2;
  const availH = viewportH - navHeight - FIT_MARGIN * 2;
  return Math.min(availW / SLIDE_WIDTH, availH / SLIDE_HEIGHT);
}

export function DeckViewer() {
  const [current, setCurrent] = useState(0);
  const [scale, setScale] = useState<number | null>(null);
  const [exporting, setExporting] = useState(false);
  const [exportSlideIndex, setExportSlideIndex] = useState<number | null>(null);
  const [exportProgress, setExportProgress] = useState<{
    current: number;
    total: number;
  } | null>(null);
  const [exportReadyUrl, setExportReadyUrl] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const exportHostRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((index: number) => {
    setCurrent(Math.max(0, Math.min(SLIDE_COUNT - 1, index)));
  }, []);

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  const handleExportPdf = useCallback(async () => {
    if (exporting) return;

    setExporting(true);
    setExportProgress(null);
    if (exportReadyUrl) {
      URL.revokeObjectURL(exportReadyUrl);
      setExportReadyUrl(null);
    }
    document.documentElement.dataset.deckExport = "true";

    try {
      const bytes = await exportDeckToPdf({
        slideCount: APPENDIX_START_SLIDE,
        width: SLIDE_WIDTH,
        height: SLIDE_HEIGHT,
        onProgress: (current, total) => {
          setExportProgress({ current, total });
        },
        renderSlide: async (index) => {
          flushSync(() => {
            setExportSlideIndex(index);
          });
          await new Promise<void>((resolve) => {
            requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
          });
          return exportHostRef.current?.querySelector(
            "section.deck-slide",
          ) as HTMLElement | null;
        },
        settleMs: (index) => (index === 0 ? 500 : 0),
      });

      const blob = new Blob([Uint8Array.from(bytes)], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setExportReadyUrl(url);
      downloadPdf(bytes, EXPORT_FILENAME);
    } catch (error) {
      console.error("PDF export failed:", error);
      window.alert(
        error instanceof Error
          ? `PDF export failed: ${error.message}`
          : "PDF export failed. Please try again.",
      );
    } finally {
      delete document.documentElement.dataset.deckExport;
      setExportSlideIndex(null);
      setExporting(false);
      setExportProgress(null);
    }
  }, [exporting, exportReadyUrl]);

  const dismissExportReady = useCallback(() => {
    if (exportReadyUrl) {
      URL.revokeObjectURL(exportReadyUrl);
      setExportReadyUrl(null);
    }
  }, [exportReadyUrl]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(SLIDE_COUNT - 1);
      } else if (e.key === "f" || e.key === "F") {
        if (!document.fullscreenElement) {
          containerRef.current?.requestFullscreen?.();
        } else {
          document.exitFullscreen?.();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, goTo]);

  useLayoutEffect(() => {
    const updateScale = () => {
      const navHeight = navRef.current?.offsetHeight ?? 56;
      setScale(computeDeckScale(navHeight, containerRef.current));
    };

    updateScale();
    const raf = requestAnimationFrame(updateScale);

    const ro = new ResizeObserver(updateScale);
    if (containerRef.current) ro.observe(containerRef.current);
    if (navRef.current) ro.observe(navRef.current);

    window.addEventListener("resize", updateScale);
    window.visualViewport?.addEventListener("resize", updateScale);
    document.addEventListener("fullscreenchange", updateScale);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", updateScale);
      window.visualViewport?.removeEventListener("resize", updateScale);
      document.removeEventListener("fullscreenchange", updateScale);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="deck-viewer fixed inset-0 z-[60] flex flex-col bg-[color:var(--ibd-gray)]"
    >
      {scale !== null && (
        <DeckProgressBar current={current} total={SLIDE_COUNT} />
      )}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden">
        {scale === null ? (
          <DeckLoadingScreen />
        ) : (
          <div
            className="deck-stage-host"
            style={{
              width: SLIDE_WIDTH * scale,
              height: SLIDE_HEIGHT * scale,
            }}
          >
            <div
              className="deck-stage-scaler deck-fixed-layout"
              style={{
                width: SLIDE_WIDTH,
                height: SLIDE_HEIGHT,
                transform: `scale(${scale})`,
                transformOrigin: "top left",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="deck-stage h-full w-full rounded-lg shadow-[0_24px_80px_-20px_rgba(13,15,26,0.18)]"
                >
                  {renderDeckSlide(current)}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>

      <nav
        ref={navRef}
        aria-label="Deck navigation"
        className="flex shrink-0 items-center justify-between gap-4 border-t border-[color:var(--gms-border)] bg-white/95 px-6 py-3 backdrop-blur-xl"
      >
        <div className="flex min-w-0 items-center gap-3">
          <IbdMark size="md" />
          <span className="truncate text-[13px] text-[color:var(--gms-text-muted)]">
            {slideTitles[current]}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={handleExportPdf}
            disabled={exporting || scale === null}
            aria-label="Export deck as PDF"
            title="Export deck as PDF"
            className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--gms-border)] bg-white text-[color:var(--gms-text-muted)] transition hover:border-[color:var(--gms-accent)]/30 hover:bg-[color:var(--ibd-gray)] disabled:opacity-30"
          >
            {exporting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Download className="h-4 w-4" />
            )}
          </button>
          <button
            type="button"
            onClick={prev}
            disabled={current === 0}
            aria-label="Previous slide"
            className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--gms-border)] bg-white text-[color:var(--gms-text-muted)] transition hover:border-[color:var(--gms-accent)]/30 hover:bg-[color:var(--ibd-gray)] disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="min-w-[72px] text-center text-[13px] tabular-nums text-[color:var(--gms-text-muted)]">
            {String(current + 1).padStart(2, "0")} / {SLIDE_COUNT}
          </span>
          <button
            type="button"
            onClick={next}
            disabled={current === SLIDE_COUNT - 1}
            aria-label="Next slide"
            className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--gms-border)] bg-white text-[color:var(--gms-text-muted)] transition hover:border-[color:var(--gms-accent)]/30 hover:bg-[color:var(--ibd-gray)] disabled:opacity-30"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </nav>

      <div
        ref={exportHostRef}
        aria-hidden
        className="deck-fixed-layout pointer-events-none fixed overflow-hidden"
        style={{
          left: 0,
          top: 0,
          width: SLIDE_WIDTH,
          height: SLIDE_HEIGHT,
          transform: "translateX(-200vw)",
          zIndex: 0,
          opacity: 1,
          visibility: exportSlideIndex !== null ? "visible" : "hidden",
        }}
      >
        {exportSlideIndex !== null && renderDeckSlide(exportSlideIndex)}
      </div>

      {exporting && exportProgress && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(13,15,26,0.45)] px-6 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-[color:var(--gms-border)] bg-white p-6 text-center shadow-xl">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-deck-accent" />
            <p className="mt-4 text-[18px] font-semibold text-[color:var(--gms-text)]">
              Building PDF…
            </p>
            <p className="mt-2 text-[15px] text-[color:var(--gms-text-muted)]">
              Slide {exportProgress.current} of {exportProgress.total}
            </p>
            <p className="mt-3 text-[13px] text-[color:var(--gms-text-muted)]">
              This can take a few minutes. Please keep this tab open.
            </p>
          </div>
        </div>
      )}

      {exportReadyUrl && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(13,15,26,0.45)] px-6 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-[color:var(--gms-border)] bg-white p-6 text-center shadow-xl">
            <p className="text-[18px] font-semibold text-[color:var(--gms-text)]">
              PDF ready
            </p>
            <p className="mt-2 text-[15px] text-[color:var(--gms-text-muted)]">
              If your download didn&apos;t start automatically, click below.
            </p>
            <a
              href={exportReadyUrl}
              download={EXPORT_FILENAME}
              className="mt-5 inline-flex items-center justify-center rounded-full bg-deck-accent px-6 py-2.5 text-[14px] font-semibold text-white"
            >
              Download PDF
            </a>
            <button
              type="button"
              onClick={dismissExportReady}
              className="mt-3 block w-full text-[13px] font-medium text-[color:var(--gms-text-muted)]"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
