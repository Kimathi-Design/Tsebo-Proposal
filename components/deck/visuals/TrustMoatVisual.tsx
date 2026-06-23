"use client";

import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Handshake,
  Landmark,
  Network,
  Scale,
  ShieldCheck,
  Wallet,
} from "lucide-react";

type MoatVariant = "regulation" | "investor";

type Pillar = { label: string; icon: LucideIcon; muted?: boolean };

const VARIANTS: Record<
  MoatVariant,
  {
    rings: { label: string; size: number; dashed?: boolean; muted?: boolean }[];
    pillars: Pillar[];
    centerTitle: string;
    centerSub: string;
    insightLabel: string;
    insightText: string;
  }
> = {
  regulation: {
    rings: [
      { label: "Regulatory Framework", size: 100 },
      { label: "Governance & Audit", size: 72 },
      { label: "Institutional Trust", size: 44 },
    ],
    pillars: [
      { label: "Compliance", icon: Scale },
      { label: "Licensing", icon: Landmark },
      { label: "Reserves", icon: Wallet },
      { label: "Audit", icon: ShieldCheck },
      { label: "Network", icon: Network },
    ],
    centerTitle: "Network Trust",
    centerSub: "Core",
    insightLabel: "Long-Term Outcome",
    insightText:
      "Regulation becomes a moat. Trust becomes a network effect.",
  },
  investor: {
    rings: [
      { label: "Software", size: 100, dashed: true, muted: true },
      { label: "Regulatory Moat", size: 76 },
      { label: "Institutional Trust", size: 48 },
    ],
    pillars: [
      { label: "Licensing", icon: Landmark },
      { label: "Trust", icon: ShieldCheck },
      { label: "Regulatory Ties", icon: Handshake },
      { label: "Software", icon: Code2, muted: true },
    ],
    centerTitle: "Trust",
    centerSub: "The Moat",
    insightLabel: "Investor Takeaway",
    insightText: "The moat is not software. The moat is trust.",
  },
};

const RING_SIZE = 360;
const CONTAINER_MAX = 560;

function PillarChip({ label, icon: Icon, muted }: Pillar) {
  return (
    <div
      className={`gms-card flex min-w-0 items-center gap-2.5 rounded-xl px-4 py-2.5 ${
        muted ? "opacity-45" : ""
      }`}
    >
      <span
        className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border bg-[#11142a] ${
          muted
            ? "border-white/15 text-white/40"
            : "border-[#56D6C2]/30 text-[#56D6C2]"
        }`}
      >
        <Icon className="h-4 w-4" />
      </span>
      <span
        className={`text-[11px] font-medium leading-tight ${
          muted ? "text-white/45 line-through" : "text-white/85"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export function TrustMoatVisual({
  variant = "regulation",
}: {
  variant?: MoatVariant;
}) {
  const config = VARIANTS[variant];

  return (
    <div
      className="flex w-full flex-col items-center gap-6"
      style={{ maxWidth: CONTAINER_MAX }}
    >
      <div
        className="relative shrink-0"
        style={{ width: RING_SIZE, height: RING_SIZE }}
      >
        {config.rings.map((ring) => (
          <div
            key={ring.label}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 bg-[#56D6C2]/[0.05] ${
              ring.dashed
                ? "border-dashed border-white/15 bg-white/[0.02]"
                : "border-[#56D6C2]/25"
            } ${ring.muted ? "opacity-50" : ""}`}
            style={{ width: `${ring.size}%`, height: `${ring.size}%` }}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <p className="text-[11px] tracking-[0.2em] text-[#56D6C2] uppercase">
              {config.centerSub}
            </p>
            <p className="mt-1.5 text-[28px] font-semibold text-white">
              {config.centerTitle}
            </p>
          </div>
        </div>
      </div>

      <div
        className={`grid w-full gap-2.5 ${
          variant === "investor" ? "grid-cols-2" : "grid-cols-3"
        }`}
      >
        {config.pillars.map((pillar) => (
          <PillarChip key={pillar.label} {...pillar} />
        ))}
      </div>

      <div className="w-full rounded-2xl border border-[#56D6C2]/25 bg-[#56D6C2]/[0.06] px-6 py-5 text-center">
        <p className="text-[11px] font-medium tracking-[0.2em] text-[#56D6C2] uppercase">
          {config.insightLabel}
        </p>
        <p className="mt-2.5 text-[19px] font-medium leading-snug text-white">
          {config.insightText}
        </p>
      </div>
    </div>
  );
}
