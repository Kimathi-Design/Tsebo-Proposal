export * from "@/lib/deck-proposal-content";

import { appendices } from "@/lib/deck-proposal-content";

export const APPENDIX_COUNT = 0;
export const APPENDIX_START_SLIDE = 18;
export const SLIDE_COUNT = 20;

/** A4 portrait at ~150 DPI (210mm × 297mm) */
export const SLIDE_WIDTH = 1240;
export const SLIDE_HEIGHT = 1754;

export const SLIDE_PADDING_X = 104;
export const SLIDE_PADDING_TOP = 96;
export const SLIDE_PADDING_BOTTOM = 88;
export const SLIDE_HEADER_BODY_GAP = 56;
export const SLIDE_INTRO_BODY_GAP = 20;
export const SLIDE_FOOTER_GAP = 40;

export const slideTitles = [
  "Cover",
  "Executive Letter",
  "Table of Contents",
  "Executive Summary",
  "Tsebo Need & Challenges",
  "About IBD & Why Motheo",
  "RSL Accreditation",
  "Proposed Motheo Stack",
  "Microsoft Dynamics Integration",
  "Motheo POS",
  "Transaction Flow",
  "Security, Monitoring & Continuity",
  "Delivery Plan & Timeline",
  "Team, Testing & Training",
  "Support & Managed Services",
  "Commercial Proposal",
  "Conclusion",
  "Proposal Acceptance",
  "Appendices A–F",
  "Appendices G–L",
] as const;

export const coverMeta = {
  platform: "MOTHEO COMPLIANCE LAYER",
  subtitle: "Revenue Services Lesotho (RSL) Electronic Billing System (EBS)",
  subjectLines: ["Microsoft Dynamics & Motheo POS Proposal"],
  preparedFor: "TSEBO SOLUTIONS GROUP",
  preparedForClient: "Tsebo Solutions Group",
  preparedForLocation: "Lesotho",
  preparedBy: "INFINITY BUSINESS DYNAMICS (PTY) LTD",
  preparedByDisplay: "Infinity Business Dynamics (Pty) Ltd",
  tagline: "Harnessing the Power of Technology",
  address: "Lancers Road, House No.16, Maseru, Lesotho",
  email: "services@ibd.co.ls",
  phone1: "+266 6255 4433",
  phone2: "",
  website: "www.ibd.co.ls",
  location: "Maseru, Lesotho",
  tin: "200116903-2",
  date: "14th of July 2026",
  reference: "IBD-TSEBO-EBS-2026-001",
  accreditation: "Revenue Services Lesotho Accredited Solution Provider",
  primaryContactName: "Fusi Monyolo",
  primaryContactRole: "Primary Proposal Contact",
  primaryContactEmail: "services@ibd.co.ls",
  primaryContactPhone: "+266 6255 4433",
  rfqContact: "Fusi Monyolo",
  rfqContactEmail: "services@ibd.co.ls",
  keyDates: [] as const,
};

const TOC_TITLE_ALIASES: Record<string, string> = {
  "Why Infinity": "About IBD & Why Motheo",
  "About Infinity Business Dynamics": "About IBD & Why Motheo",
  "Revenue Services Lesotho Accreditation": "RSL Accreditation",
  "Motheo Compliance Layer": "Proposed Motheo Stack",
  "Solution Architecture": "Proposed Motheo Stack",
  "Dynamics Integration Architecture": "Microsoft Dynamics Integration",
  "Transaction Lifecycle": "Transaction Flow",
  "QR Code Framework": "Transaction Flow",
  "Monitoring & Reporting": "Security, Monitoring & Continuity",
  "Business Continuity": "Security, Monitoring & Continuity",
  "Implementation Methodology": "Delivery Plan & Timeline",
  "Project Timeline": "Delivery Plan & Timeline",
  "Project Team": "Team, Testing & Training",
  "Testing Strategy": "Team, Testing & Training",
  "User Training": "Team, Testing & Training",
  "Support Model": "Support & Managed Services",
  "Service Level Commitments": "Support & Managed Services",
  "Terms & Conditions Acceptance": "Proposal Acceptance",
};

const TOC_ENTRIES = [
  "Executive Summary",
  "Tsebo Need & Challenges",
  "About IBD & Why Motheo",
  "RSL Accreditation",
  "Proposed Motheo Stack",
  "Microsoft Dynamics Integration",
  "Motheo POS",
  "Transaction Flow",
  "Security, Monitoring & Continuity",
  "Delivery Plan & Timeline",
  "Team, Testing & Training",
  "Support & Managed Services",
  "Commercial Proposal",
  "Conclusion",
  "Proposal Acceptance",
  "Appendices A–F",
  "Appendices G–L",
] as const;

export const tableOfContents = TOC_ENTRIES.map((title) => {
  const slideTitle = TOC_TITLE_ALIASES[title] ?? title;
  const slideIndex = slideTitles.indexOf(slideTitle as (typeof slideTitles)[number]);
  return {
    title,
    page: slideIndex >= 0 ? slideIndex + 1 : 0,
  };
});

export function getTocSectionNumber(slideIndex: number): number | null {
  const entryIndex = TOC_ENTRIES.findIndex((title) => {
    const slideTitle = TOC_TITLE_ALIASES[title] ?? title;
    return slideTitles.indexOf(slideTitle as (typeof slideTitles)[number]) === slideIndex;
  });
  return entryIndex >= 0 ? entryIndex + 1 : null;
}

export function getAppendixSlideIndex(_appendixIndex: number) {
  return null;
}

export function getAppendixIndexForSlide(_slideIndex: number): number | null {
  return null;
}

export type AppendixItem = (typeof appendices)[number];

export const solutionArchitectureFlow = [
  "Tsebo Users",
  "Microsoft Dynamics",
  "Motheo POS",
  "Motheo Compliance Layer",
  "Motheo Compliance Engine",
  "Revenue Services Lesotho",
] as const;
