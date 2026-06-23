"use client";

import {
  Building2,
  Coins,
  Landmark,
  Link2,
  Scale,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ecosystemPillars } from "@/lib/deck-content";

const PILLAR_ICONS: Record<string, LucideIcon> = {
  "Banking Participants": Landmark,
  "Liquidity Providers": Coins,
  "PSP Ecosystem": Zap,
  "Exchange Connectivity": Link2,
  "Institutional Participants": Building2,
  "Regulatory Engagement": Scale,
};

export function BuildingEcosystemVisual() {
  return (
    <div className="w-full space-y-5">
      <div className="grid grid-cols-3 gap-4">
        {ecosystemPillars.map((pillar) => {
          const Icon = PILLAR_ICONS[pillar.title] ?? Building2;
          return (
            <div key={pillar.title} className="gms-card rounded-2xl p-5">
              <div className="mb-3 flex items-center gap-2.5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#56D6C2]/30 bg-[#11142a] text-[#56D6C2]">
                  <Icon className="h-4 w-4" />
                </span>
                <p className="text-[13px] font-semibold leading-tight text-white">
                  {pillar.title}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {pillar.partners.map((partner) => (
                  <span
                    key={partner}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[11px] text-white/65"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <p className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-center text-[12px] leading-relaxed text-white/50">
        <span className="font-medium text-white/65">Important Note:</span> These
        organizations represent potential ecosystem participants and strategic
        counterparties. They are not represented as confirmed commercial
        partnerships.
      </p>
    </div>
  );
}
