"use client";

import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Globe2,
  Landmark,
  Users,
  Zap,
} from "lucide-react";
import { useId } from "react";

type Spoke = {
  label: string;
  icon: LucideIcon;
};

type HubSpokeVariant = "ecosystem" | "markets";

const VARIANTS: Record<
  HubSpokeVariant,
  { centerLabel: string; centerSub: string; spokes: Spoke[] }
> = {
  ecosystem: {
    centerLabel: "IMANI",
    centerSub: "Settlement Hub",
    spokes: [
      { label: "Banks", icon: Landmark },
      { label: "Fintechs", icon: Zap },
      { label: "Enterprises", icon: Building2 },
      { label: "Governments", icon: Users },
    ],
  },
  markets: {
    centerLabel: "$208B+",
    centerSub: "Addressable Market",
    spokes: [
      { label: "Cross-Border Trade", icon: Globe2 },
      { label: "Enterprise Treasury", icon: Building2 },
      { label: "Payment Providers", icon: Zap },
      { label: "Financial Institutions", icon: Landmark },
      { label: "Government", icon: Users },
    ],
  },
};

const CX = 200;
const CY = 200;
/** Outer container size (px) */
const DIAGRAM_SIZE = 620;
/** Card center offset from hub (% of container) — keeps cards inside bounds */
const CARD_OFFSET_PCT = 38;

function spokeAngles(count: number) {
  return Array.from({ length: count }, (_, i) => -90 + (360 / count) * i);
}

function cardPosition(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    left: `${50 + CARD_OFFSET_PCT * Math.cos(rad)}%`,
    top: `${50 + CARD_OFFSET_PCT * Math.sin(rad)}%`,
    transform: "translate(-50%, -50%)",
  };
}

function SpokeCard({ label, icon: Icon, large }: Spoke & { large?: boolean }) {
  return (
    <div
      className={`gms-card flex flex-col items-center rounded-2xl px-3.5 py-4 text-center ${
        large ? "w-[132px]" : "w-[124px]"
      }`}
    >
      <span className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#56D6C2]/30 bg-[#11142a] text-[#56D6C2]">
        <Icon className="h-5 w-5" />
      </span>
      <span className="text-[12px] font-medium leading-tight text-white">
        {label}
      </span>
    </div>
  );
}

export function HubSpokeDiagram({
  variant = "ecosystem",
}: {
  variant?: HubSpokeVariant;
}) {
  const gradientId = useId();
  const config = VARIANTS[variant];
  const angles = spokeAngles(config.spokes.length);

  return (
    <div className="flex w-full items-center justify-center">
      <div
        className="relative shrink-0"
        style={{ width: DIAGRAM_SIZE, height: DIAGRAM_SIZE }}
      >
        <svg
          viewBox="0 0 400 400"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          <defs>
            <radialGradient id={`${gradientId}-glow`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(86,214,194,0.2)" />
              <stop offset="100%" stopColor="rgba(86,214,194,0)" />
            </radialGradient>
          </defs>
          <circle cx={CX} cy={CY} r={132} fill={`url(#${gradientId}-glow)`} />
          <circle
            cx={CX}
            cy={CY}
            r={variant === "markets" ? 58 : 54}
            fill="rgba(86,214,194,0.14)"
            stroke="rgba(86,214,194,0.55)"
            strokeWidth={3}
          />
          <text
            x={CX}
            y={CY - (variant === "markets" ? 2 : 4)}
            textAnchor="middle"
            fill="#56D6C2"
            fontSize={variant === "markets" ? 18 : 16}
            fontWeight={600}
            fontFamily="var(--font-jost), sans-serif"
          >
            {config.centerLabel}
          </text>
          <text
            x={CX}
            y={CY + (variant === "markets" ? 18 : 16)}
            textAnchor="middle"
            fill="rgba(255,255,255,0.55)"
            fontSize={11}
            fontFamily="var(--font-jost), sans-serif"
          >
            {config.centerSub}
          </text>
        </svg>
        {config.spokes.map((spoke, i) => (
          <div
            key={spoke.label}
            className="absolute z-10"
            style={cardPosition(angles[i])}
          >
            <SpokeCard {...spoke} large={variant === "markets"} />
          </div>
        ))}
      </div>
    </div>
  );
}
