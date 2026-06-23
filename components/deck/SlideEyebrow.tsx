"use client";

import type { LucideIcon } from "lucide-react";
import {
  ArrowLeftRight,
  Banknote,
  BarChart3,
  Building2,
  CircleDollarSign,
  Eye,
  FileCheck,
  GitBranch,
  Globe2,
  Layers,
  LineChart,
  Lock,
  Map,
  Network,
  Rocket,
  Route,
  Scale,
  Shield,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";
import { DeckLogo } from "@/components/deck/DeckLogo";
import { slideTitles } from "@/lib/deck-content";

const SLIDE_ICONS: LucideIcon[] = [
  Sparkles, // 0 IMANI
  Sparkles, // 1 Executive Summary
  Target, // 2 The Problem
  TrendingDown, // 3 Hidden Cost
  Zap, // 4 Why Now
  Scale, // 5 Market Validation
  Network, // 6 Introducing IMANI
  GitBranch, // 7 How IMANI Works
  ArrowLeftRight, // 8 Two Settlement Models
  Layers, // 9 Infrastructure Architecture
  ShieldCheck, // 10 Regulation
  Wallet, // 11 Reserve Infrastructure
  FileCheck, // 12 Licensing
  Shield, // 13 Compliance
  Lock, // 14 Regulatory Moat
  Globe2, // 15 Market Opportunity
  Route, // 16 Market Expansion
  CircleDollarSign, // 17 Multi-Currency
  Network, // 18 Network Effects
  Users, // 19 Building The Ecosystem
  Banknote, // 20 Business Model
  BarChart3, // 21 Competitive Landscape
  Building2, // 22 Why IMANI Wins
  TrendingUp, // 23 Infrastructure Economics
  LineChart, // 24 Revenue Growth Model
  Shield, // 25 Risk Management
  Map, // 26 Expansion Roadmap
  Rocket, // 27 Beyond Settlement
  Eye, // 28 The Vision
  Banknote, // 29 The Raise
  Users, // 30 Leadership
  Sparkles, // 31 Closing
];

type SectionBadgeProps = {
  index: number;
  className?: string;
};

export function DeckEyebrow({
  children,
  icon,
}: {
  children: ReactNode;
  icon: ReactNode;
}) {
  return (
    <div className="gms-eyebrow mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-medium tracking-[0.2em] uppercase backdrop-blur">
      <span className="text-[color:var(--gms-accent)] [&>svg]:h-3.5 [&>svg]:w-3.5">
        {icon}
      </span>
      <span>{children}</span>
    </div>
  );
}

export function SectionBadge({ index, className = "" }: SectionBadgeProps) {
  const Icon = SLIDE_ICONS[index] ?? Sparkles;
  const label = slideTitles[index] ?? "IMANI";
  const useLogo = index === 0;

  return (
    <div
      className={`gms-eyebrow inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-medium tracking-[0.2em] uppercase backdrop-blur ${className}`.trim()}
    >
      <span
        className={
          useLogo
            ? "shrink-0"
            : "text-[color:var(--gms-accent)] [&>svg]:h-3.5 [&>svg]:w-3.5"
        }
      >
        {useLogo ? (
          <DeckLogo variant="badge" priority />
        ) : (
          <Icon className="h-3.5 w-3.5" aria-hidden />
        )}
      </span>
      <span>{label}</span>
    </div>
  );
}

/** Top-of-slide section label — always includes icon + title from slide metadata */
export function SlideEyebrow({ index }: { index: number }) {
  const Icon = SLIDE_ICONS[index] ?? Sparkles;
  const label = slideTitles[index] ?? "IMANI";

  return (
    <DeckEyebrow icon={<Icon className="h-3.5 w-3.5" />}>{label}</DeckEyebrow>
  );
}

/** Slide header brand — logo + IMANI on every slide */
export function DeckHeaderBrand() {
  return (
    <div className="gms-eyebrow inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-medium tracking-[0.2em] uppercase backdrop-blur">
      <DeckLogo variant="badge" priority />
      <span>IMANI</span>
    </div>
  );
}

/** @deprecated Use DeckHeaderBrand */
export function CoverSlideHeaderBadge() {
  return <DeckHeaderBrand />;
}

/** Bottom-right section label — aligned with header slide counter */
export function SlideSectionCorner({ index }: { index: number }) {
  return <SectionBadge index={index} />;
}
