"use client";

import type { LucideIcon } from "lucide-react";
import {
  Award,
  BadgeCheck,
  Banknote,
  BookOpen,
  Calendar,
  FileCheck,
  FileSignature,
  FileText,
  Headphones,
  Layers,
  LayoutList,
  Mail,
  Package,
  Receipt,
  Server,
  Shield,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import type { ReactNode } from "react";
import { BweMark, IbdMark } from "@/components/deck/IbdMark";
import { slideTitles, getTocSectionNumber } from "@/lib/deck-content";

const SLIDE_ICONS: LucideIcon[] = [
  Package, // 0 Cover
  Mail, // 1 Executive Letter
  LayoutList, // 2 Table of Contents
  FileText, // 3 Executive Summary
  Target, // 4 Tsebo Need & Challenges
  Award, // 5 About IBD & Why Motheo
  BadgeCheck, // 6 RSL Accreditation
  Layers, // 7 Proposed Motheo Stack
  Server, // 8 Microsoft Dynamics Integration
  Receipt, // 9 Motheo POS
  Workflow, // 10 Transaction Flow
  Shield, // 11 Security, Monitoring & Continuity
  Calendar, // 12 Delivery Plan & Timeline
  Users, // 13 Team, Testing & Training
  Headphones, // 14 Support & Managed Services
  Banknote, // 15 Commercial Proposal
  Sparkles, // 16 Conclusion
  FileSignature, // 17 Proposal Acceptance
  BookOpen, // 18 Appendices A–F
  FileCheck, // 19 Appendices G–L
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
    <div className="deck-title-pill gms-eyebrow inline-flex items-center rounded-full uppercase">
      <span className="deck-title-pill__icon">{icon}</span>
      <span className="deck-title-pill__label font-semibold">{children}</span>
    </div>
  );
}

export function SectionBadge({ index, className = "" }: SectionBadgeProps) {
  const Icon = SLIDE_ICONS[index] ?? Sparkles;
  const label = slideTitles[index] ?? "Proposal";

  return (
    <div
      className={`gms-eyebrow inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-medium tracking-[0.2em] uppercase ${className}`.trim()}
    >
      <span className="[&>svg]:h-3.5 [&>svg]:w-3.5">
        <Icon className="h-3.5 w-3.5" aria-hidden />
      </span>
      <span>{label}</span>
    </div>
  );
}

/** Top-of-slide section label — always includes icon + title from slide metadata */
export function SlideEyebrow({
  index,
  sectionNumber,
}: {
  index: number;
  /** Override TOC numbering, e.g. "32.5" for appendix sub-sections */
  sectionNumber?: string;
}) {
  const Icon = SLIDE_ICONS[index] ?? Sparkles;
  const label = slideTitles[index] ?? "Proposal";
  const tocSection =
    sectionNumber ??
    (getTocSectionNumber(index) !== null
      ? String(getTocSectionNumber(index)).padStart(2, "0")
      : null);
  const prefix = tocSection ? `${tocSection} · ` : "";

  return (
    <DeckEyebrow icon={<Icon aria-hidden />}>
      {prefix}
      {label}
    </DeckEyebrow>
  );
}

/** Slide header brand — Tsebo + IBD on every slide */
export function DeckHeaderBrand() {
  return (
    <div className="gms-eyebrow inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-medium tracking-[0.2em] uppercase backdrop-blur">
      <BweMark size="sm" />
      <span>Tsebo | Infinity Business Dynamics</span>
      <IbdMark size="sm" />
    </div>
  );
}

/** @deprecated Use DeckHeaderBrand */
export function CoverSlideHeaderBadge() {
  return <DeckHeaderBrand />;
}

/** Bottom-right certification label — same on every slide */
export function SlideSectionCorner() {
  return (
    <div className="deck-corner-badge gms-eyebrow inline-flex items-center rounded-full uppercase">
      <Shield className="deck-corner-badge__icon" aria-hidden />
      <span className="deck-corner-badge__label font-semibold">RSL Certified | Lekuka Partner</span>
    </div>
  );
}