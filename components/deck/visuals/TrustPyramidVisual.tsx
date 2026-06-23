"use client";

import type { LucideIcon } from "lucide-react";
import { Building2, ChevronDown, Landmark, Network, Scale } from "lucide-react";
import { motion } from "framer-motion";

type Layer = {
  label: string;
  description: string;
  icon: LucideIcon;
  width: number;
  tag?: string;
};

/** Bottom (widest) → top (apex) */
const LAYERS: Layer[] = [
  {
    label: "Businesses & Institutions",
    description: "Participants who depend on reliable settlement",
    icon: Building2,
    width: 100,
    tag: "Demand",
  },
  {
    label: "Settlement Network",
    description: "Clearing, transfer, and liquidity infrastructure",
    icon: Network,
    width: 82,
    tag: "Rails",
  },
  {
    label: "Reserve Assets",
    description: "Transparent backing for every unit of value",
    icon: Landmark,
    width: 64,
    tag: "Backing",
  },
  {
    label: "Regulators",
    description: "Oversight, licensing, and compliance frameworks",
    icon: Scale,
    width: 46,
    tag: "Oversight",
  },
];

export function TrustPyramidVisual() {
  const displayLayers = [...LAYERS].reverse();

  return (
    <div className="flex w-full flex-col items-center justify-start gap-6 -translate-y-6">
      <div className="flex w-full max-w-[480px] flex-col">
        <div className="flex flex-col items-center gap-3 py-2">
          {displayLayers.map((layer, i) => {
            const Icon = layer.icon;
            const isApex = i === 0;
            const isBase = i === displayLayers.length - 1;
            return (
              <div key={layer.label} className="flex w-full flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className={`gms-card flex min-h-[72px] items-center gap-4 rounded-2xl border bg-[#0d0f1a] px-6 py-5 ${
                    isApex
                      ? "border-[#56D6C2]/40"
                      : isBase
                        ? "border-white/15"
                        : "border-[#56D6C2]/20"
                  }`}
                  style={{ width: `${layer.width}%` }}
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#56D6C2]/30 bg-[#11142a] text-[#56D6C2]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1 text-left">
                    <div className="flex flex-wrap items-center gap-2">
                      {layer.tag && (
                        <span className="rounded-md border border-[#56D6C2]/25 bg-[#56D6C2]/10 px-2 py-0.5 text-[10px] font-medium tracking-[0.14em] text-[#56D6C2] uppercase">
                          {layer.tag}
                        </span>
                      )}
                      <span className="text-[16px] font-semibold leading-tight text-white">
                        {layer.label}
                      </span>
                    </div>
                    <p className="mt-1 text-[12px] leading-snug text-white/50">
                      {layer.description}
                    </p>
                  </div>
                </motion.div>
                {!isBase && (
                  <ChevronDown
                    className="my-1 h-5 w-5 shrink-0 text-[#56D6C2]/35"
                    aria-hidden
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full max-w-[480px] shrink-0 rounded-2xl border border-[#56D6C2]/25 bg-[#56D6C2]/[0.06] px-6 py-5 text-center">
        <p className="text-[11px] font-medium tracking-[0.2em] text-[#56D6C2] uppercase">
          Reserve Architecture
        </p>
        <p className="mt-2 text-[16px] font-medium leading-snug text-white/90">
          Trust is built layer by layer — from regulatory oversight down to
          every participant on the network.
        </p>
      </div>
    </div>
  );
}
