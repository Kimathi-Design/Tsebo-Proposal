"use client";

import { useEffect } from "react";
import { renderDeckSlide } from "@/components/deck/DeckSlides";
import { APPENDIX_START_SLIDE } from "@/lib/deck-content";

export function DeckPrintView() {
  useEffect(() => {
    document.documentElement.dataset.deckExport = "true";
    return () => {
      delete document.documentElement.dataset.deckExport;
    };
  }, []);

  return (
    <div className="deck-print-root deck-fixed-layout">
      {Array.from({ length: APPENDIX_START_SLIDE }, (_, index) => (
        <div key={index} className="deck-print-slide deck-stage">
          {renderDeckSlide(index)}
        </div>
      ))}
    </div>
  );
}
