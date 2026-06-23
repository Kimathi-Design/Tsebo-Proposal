"use client";

import {
  Building2,
  Layers,
  Scale,
  Server,
  ShieldCheck,
} from "lucide-react";
import { infrastructureLayers } from "@/lib/deck-content";

const LAYER_ICONS = {
  "01": Scale,
  "02": Server,
  "03": ShieldCheck,
  "04": Layers,
  "05": Building2,
} as const;

const LAYER_META: Record<string, string> = {
  "Regulatory Framework": "Licensed operation across jurisdictions",
  "Reserve Infrastructure": "Asset-backed value at every step",
  "Compliance & Risk": "Automated controls and audit trails",
  "Settlement Engine": "Core clearing and transfer logic",
  "Enterprise APIs": "Institution-ready integration surface",
};

export function LayerStackDiagram() {
  const layers = [...infrastructureLayers].reverse();

  return (
    <div className="flex h-full min-h-[420px] w-full flex-col justify-evenly gap-3">
      {layers.map((layer, i) => {
        const widthPct = 92 - i * 10;
        const Icon = LAYER_ICONS[layer.step as keyof typeof LAYER_ICONS] ?? Layers;
        return (
          <div
            key={layer.step}
            className="mx-auto gms-card flex items-center gap-5 rounded-2xl px-6 py-5"
            style={{ width: `${widthPct}%` }}
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#56D6C2]/30 bg-[#56D6C2]/10 text-[#56D6C2]">
              <Icon className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-md border border-[#56D6C2]/30 bg-[#56D6C2]/10 px-2.5 py-0.5 text-[10px] font-medium tracking-[0.16em] text-[#56D6C2] uppercase">
                  Layer {layer.step}
                </span>
                <span className="text-[18px] font-semibold text-white">
                  {layer.title}
                </span>
              </div>
              <p className="mt-1 text-[14px] text-white/55">
                {LAYER_META[layer.title]}
              </p>
            </div>
            {i === 0 && (
              <span className="hidden shrink-0 text-[11px] tracking-[0.14em] text-white/40 uppercase xl:block">
                Institution-facing
              </span>
            )}
            {i === layers.length - 1 && (
              <span className="hidden shrink-0 text-[11px] tracking-[0.14em] text-white/40 uppercase xl:block">
                Foundation
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
