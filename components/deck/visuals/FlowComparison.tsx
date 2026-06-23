"use client";

import { ArrowRight } from "lucide-react";
import { DECK_FLOW_PANEL } from "@/components/deck/visuals/shared";

const ACTUAL_STEPS = [
  "KES",
  "USD",
  "Correspondent Bank",
  "USD Clearing",
  "NGN",
];

export function FlowComparison() {
  return (
    <div className={DECK_FLOW_PANEL.stack}>
      <div className={DECK_FLOW_PANEL.teal}>
        <p className={DECK_FLOW_PANEL.labelTeal}>Expected Flow</p>
        <div className={`${DECK_FLOW_PANEL.flowRow} gap-4 text-[32px] font-semibold text-white`}>
          <span className="rounded-xl bg-white/10 px-6 py-4">KES</span>
          <ArrowRight className="h-8 w-8 text-[#56D6C2]" />
          <span className="rounded-xl bg-white/10 px-6 py-4">NGN</span>
        </div>
      </div>
      <div className={DECK_FLOW_PANEL.neutral}>
        <p className={DECK_FLOW_PANEL.labelMuted}>Actual Flow</p>
        <div className={`${DECK_FLOW_PANEL.flowRow} text-[17px] font-medium text-white/75`}>
          {ACTUAL_STEPS.map((step, i) => (
            <span key={step} className="flex items-center gap-3">
              <span className="rounded-lg border border-white/12 bg-white/[0.05] px-4 py-3">
                {step}
              </span>
              {i < ACTUAL_STEPS.length - 1 && (
                <ArrowRight className="h-5 w-5 shrink-0 text-white/30" />
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
