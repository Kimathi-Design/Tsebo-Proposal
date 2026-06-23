"use client";

import type { ReactNode } from "react";
import { AfricaNetworkMap } from "@/components/deck/AfricaNetworkMap";

function CompactInsight({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-[#56D6C2]/25 bg-[#56D6C2]/[0.06] px-5 py-4">
      <p className="text-[10px] font-medium tracking-[0.2em] text-[#56D6C2] uppercase">
        {label}
      </p>
      <p className="mt-2 text-[16px] leading-snug font-medium text-white">
        {children}
      </p>
    </div>
  );
}

const FRICTION_TAGS = [
  "Expensive",
  "Slow",
  "Fragmented",
  "Liquidity intensive",
];

export function ExecutiveSummaryVisual() {
  return (
    <div className="grid h-full min-h-0 grid-cols-[1fr_1.1fr] gap-6 overflow-hidden">
      <div className="flex h-full min-h-0 flex-col justify-center gap-4 overflow-hidden">
        <div className="gms-card rounded-2xl border-[#56D6C2]/30 p-6">
          <p className="text-[10px] font-medium tracking-[0.22em] text-[#56D6C2] uppercase">
            The Infrastructure Gap
          </p>
          <p className="mt-3 inline-block overflow-visible pr-1 text-[44px] font-semibold leading-none whitespace-nowrap gradient-text-teal">
            $208B+
          </p>
          <p className="mt-2 text-[16px] font-medium text-white">
            Annual cross-border settlement flows across Africa
          </p>
          <p className="mt-3 text-[14px] leading-relaxed text-white/60">
            Financial infrastructure has not kept pace with accelerating regional
            trade, digital commerce, and integration.
          </p>

          <div className="mt-5 border-t border-white/10 pt-5">
            <p className="mb-3 text-[11px] font-medium tracking-[0.18em] text-white/45 uppercase">
              Cross-border settlement remains
            </p>
            <ul className="grid grid-cols-2 gap-3">
              {FRICTION_TAGS.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-center rounded-xl border border-white/12 bg-white/[0.05] px-4 py-3.5 text-[15px] font-medium text-white/85"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <CompactInsight label="What We Are Building">
            A regulated multi-currency settlement network for African commerce.
          </CompactInsight>
          <CompactInsight label="Why It Matters">
            Every transaction improves capital efficiency and regional connectivity.
          </CompactInsight>
        </div>
      </div>

      <div className="relative flex min-h-0 items-start overflow-hidden pt-10">
        <div className="relative h-[92%] w-full translate-y-8">
          <AfricaNetworkMap variant="bridge" className="h-full w-full" />
          <p className="pointer-events-none absolute bottom-2 left-2 rounded-full border border-white/10 bg-[#0a0c14]/80 px-3 py-1 text-[10px] tracking-[0.16em] text-white/50 uppercase backdrop-blur">
            Settlement corridors connecting economic hubs
          </p>
        </div>
      </div>
    </div>
  );
}
