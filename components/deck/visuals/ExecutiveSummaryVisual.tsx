"use client";

import { ArrowRight } from "lucide-react";
import { DeckVisualPanelLabel } from "@/components/deck/DeckSlideFrame";
import {
  EXECUTIVE_SUMMARY_CURRENT_ICONS,
  EXECUTIVE_SUMMARY_FUTURE_ICONS,
} from "@/components/deck/deck-icons";
import { executiveSummaryFlow } from "@/lib/deck-content";
import { VerticalFlowDiagram } from "@/components/deck/visuals/ProposalDiagrams";

export function ExecutiveSummaryVisual() {
  return (
    <div className="executive-summary-visual">
      <DeckVisualPanelLabel className="executive-summary-visual__heading executive-summary-visual__heading--current">
        Current State
      </DeckVisualPanelLabel>
      <DeckVisualPanelLabel className="executive-summary-visual__heading executive-summary-visual__heading--future">
        Future State
      </DeckVisualPanelLabel>
      <div className="executive-summary-visual__flow executive-summary-visual__flow--current">
        <VerticalFlowDiagram
          items={executiveSummaryFlow.current}
          icons={EXECUTIVE_SUMMARY_CURRENT_ICONS}
          compact
          className="escalation-visual executive-summary-visual__steps"
        />
      </div>
      <div className="executive-summary-visual__bridge" aria-hidden>
        <span className="deck-flow-connector">
          <ArrowRight strokeWidth={3} />
        </span>
      </div>
      <div className="executive-summary-visual__flow executive-summary-visual__flow--future">
        <VerticalFlowDiagram
          items={executiveSummaryFlow.future}
          icons={EXECUTIVE_SUMMARY_FUTURE_ICONS}
          compact
          className="escalation-visual executive-summary-visual__steps"
        />
      </div>
    </div>
  );
}
