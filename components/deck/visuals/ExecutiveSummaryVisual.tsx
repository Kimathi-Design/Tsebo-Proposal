"use client";

import { executiveSummaryFlow } from "@/lib/deck-content";
import { DeckVisualPanelLabel } from "@/components/deck/DeckSlideFrame";
import { ArchitectureStackVisual } from "@/components/deck/visuals/FlowStepsVisual";

export function ExecutiveSummaryVisual() {
  return (
    <div className="grid h-full min-h-0 flex-1 grid-cols-2 gap-4">
      <div className="flex min-h-0 flex-1 flex-col gap-2">
        <DeckVisualPanelLabel>Current State</DeckVisualPanelLabel>
        <div className="flex min-h-0 flex-1 flex-col">
          <ArchitectureStackVisual items={executiveSummaryFlow.current} fill />
        </div>
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-2">
        <DeckVisualPanelLabel>Future State</DeckVisualPanelLabel>
        <div className="flex min-h-0 flex-1 flex-col">
          <ArchitectureStackVisual items={executiveSummaryFlow.future} fill />
        </div>
      </div>
    </div>
  );
}
