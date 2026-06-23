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
import { DeckLogo } from "@/components/deck/DeckLogo";
import { DeckLoadingScreen } from "@/components/deck/DeckLoadingScreen";
import { DeckProgressBar } from "@/components/deck/DeckProgressBar";
import {
  SLIDE_COUNT,
  SLIDE_HEIGHT,
  SLIDE_WIDTH,
  slideTitles,
} from "@/lib/deck-content";
import { exportDeckToPdf } from "@/lib/export-deck-pdf";

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
    document.documentElement.dataset.deckExport = "true";

    try {
      await exportDeckToPdf({
        slideCount: SLIDE_COUNT,
        width: SLIDE_WIDTH,
        height: SLIDE_HEIGHT,
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
        settleMs: (index) => (index === 0 ? 2200 : 500),
      });
    } catch (error) {
      console.error("PDF export failed:", error);
      window.alert("PDF export failed. Please try again.");
    } finally {
      delete document.documentElement.dataset.deckExport;
      setExportSlideIndex(null);
      setExporting(false);
    }
  }, [exporting]);

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
      className="deck-viewer fixed inset-0 z-[60] flex flex-col bg-[#070810]"
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
              className="deck-stage-scaler"
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
                  className="deck-stage h-full w-full rounded-lg shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)]"
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
        className="flex shrink-0 items-center justify-between gap-4 border-t border-white/8 bg-[#0a0c14]/90 px-6 py-3 backdrop-blur-xl"
      >
        <div className="flex min-w-0 items-center gap-3">
          <DeckLogo variant="nav" />
          <span className="shrink-0 text-[13px] font-semibold tracking-[0.2em] text-[#56D6C2] uppercase">
            IMANI
          </span>
          <span className="truncate text-[13px] text-white/50">
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
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-white/20 hover:bg-white/[0.08] disabled:opacity-30"
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
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-white/20 hover:bg-white/[0.08] disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="min-w-[72px] text-center text-[13px] tabular-nums text-white/60">
            {String(current + 1).padStart(2, "0")} / {SLIDE_COUNT}
          </span>
          <button
            type="button"
            onClick={next}
            disabled={current === SLIDE_COUNT - 1}
            aria-label="Next slide"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-white/20 hover:bg-white/[0.08] disabled:opacity-30"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </nav>

      <div
        ref={exportHostRef}
        aria-hidden
        className="pointer-events-none fixed overflow-hidden"
        style={{
          left: -SLIDE_WIDTH * 2,
          top: 0,
          width: SLIDE_WIDTH,
          height: SLIDE_HEIGHT,
          zIndex: -1,
          visibility: exportSlideIndex !== null ? "visible" : "hidden",
        }}
      >
        {exportSlideIndex !== null && renderDeckSlide(exportSlideIndex)}
      </div>
    </div>
  );
}
