"use client";

import { ArrowRight, CircleDollarSign, Landmark, Network, RefreshCw } from "lucide-react";
import { howItWorksSteps } from "@/lib/deck-content";

const STEP_ICONS = [Landmark, CircleDollarSign, Network, RefreshCw];

export function StepFlowPipeline() {
  return (
    <div className="relative w-full">
      <div className="relative z-10 grid grid-cols-4 gap-4">
        {howItWorksSteps.map((step, i) => {
          const Icon = STEP_ICONS[i] ?? Network;
          return (
            <div key={step.step} className="flex flex-col items-center text-center">
              <div className="relative z-10 flex h-[88px] w-[88px] flex-col items-center justify-center rounded-2xl border border-[#56D6C2]/35 bg-[#11142a]">
                <Icon className="mb-1.5 h-6 w-6 text-[#56D6C2]" />
                <span className="text-[10px] tracking-[0.18em] text-[#56D6C2]/70 uppercase">
                  Step {step.step}
                </span>
              </div>
              <p className="mt-3 text-[15px] font-semibold leading-snug text-white">
                {step.title}
              </p>
              {i < howItWorksSteps.length - 1 && (
                <>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute z-0 h-0.5"
                    style={{
                      left: `calc(${(i + 1) * 25}% - 12%)`,
                      width: "24%",
                      top: 44,
                      background:
                        "linear-gradient(90deg, rgba(86,214,194,0.15), rgba(86,214,194,0.7), rgba(86,214,194,0.15))",
                    }}
                  />
                  <ArrowRight
                    className="absolute z-20 text-[#56D6C2]/50"
                    style={{
                      left: `calc(${(i + 1) * 25}% - 10px)`,
                      top: 38,
                    }}
                    size={18}
                  />
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
