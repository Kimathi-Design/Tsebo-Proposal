export const SLIDE_COUNT = 32;
export const SLIDE_WIDTH = 1920;
export const SLIDE_HEIGHT = 1080;

export type CompetitiveRow = {
  category: string;
  players: string;
  strength: string;
  limitation: string;
};

export type AllocationItem = {
  label: string;
  percent: number;
};

export const competitiveLandscape: CompetitiveRow[] = [
  {
    category: "Stablecoin Issuers",
    players: "Tether, Circle, cNGN, nTZS",
    strength: "Digital settlement assets",
    limitation:
      "Limited local banking integration and regulatory alignment",
  },
  {
    category: "Settlement Providers",
    players: "Wapi Pay, Sasa Pay, NALA, Chipper, Transfy, Finpesa",
    strength: "User-facing payment experiences",
    limitation: "Settlement infrastructure remains fragmented",
  },
  {
    category: "Infrastructure Providers",
    players:
      "Yellowcard, Fincra, PAPSS, Flutterwave, Onafriq, Tazapay, BVNK",
    strength: "Payment infrastructure and connectivity",
    limitation: "Often focused on specific markets or specific layers",
  },
];

export const imaniCapabilityPillars = [
  "Regulated E-Money Issuance",
  "Treasury Infrastructure",
  "Cross-Border Settlement",
  "Banking Connectivity",
  "Multi-Currency Operations",
  "Programmable Financial Infrastructure",
];

export const licensingRequirements = [
  {
    license: "E-Money Issuer",
    applicationFee: "KES 5,000",
    authorizationFee: "KES 1,000,000",
    coreCapital: "KES 20,000,000",
  },
  {
    license: "Designated Payment Instrument Issuer",
    applicationFee: "—",
    authorizationFee: "KES 5,000,000",
    coreCapital: "KES 50,000,000",
  },
  {
    license: "Electronic Retail PSP",
    applicationFee: "KES 5,000",
    authorizationFee: "KES 100,000",
    coreCapital: "KES 5,000,000",
  },
];

export const africanCurrencies = [
  "KES",
  "NGN",
  "ZAR",
  "UGX",
  "TZS",
  "ETB",
];

export const globalCurrencies = [
  "EUR",
  "GBP",
  "AUD",
  "INR",
  "CNY",
  "USD",
  "KWD",
  "SAR/QAR",
];

export const ecosystemPillars = [
  {
    title: "Banking Participants",
    partners: ["KCB", "ABC Bank", "Choice Bank", "ABSA"],
  },
  {
    title: "Liquidity Providers",
    partners: [
      "Bitlipa",
      "Kotani Pay",
      "Yellowcard",
      "Yiksi",
      "E-Beeso",
      "Carrington FX",
    ],
  },
  {
    title: "PSP Ecosystem",
    partners: ["Sasa Pay", "Wapi Pay", "Kiota Pay"],
  },
  {
    title: "Exchange Connectivity",
    partners: ["Bybit", "OKX", "Bitget", "Busha"],
  },
  {
    title: "Institutional Participants",
    partners: ["Honeycoin", "Codex FX", "Conduit"],
  },
  {
    title: "Regulatory Engagement",
    partners: ["CBK", "National Payment System framework"],
  },
];

export const capitalAllocation: AllocationItem[] = [
  { label: "Licensing & Regulatory Expansion", percent: 35 },
  { label: "Technology & Product Development", percent: 25 },
  { label: "Liquidity Infrastructure", percent: 15 },
  { label: "Market Expansion", percent: 15 },
  { label: "Talent & Operations", percent: 10 },
];

export const infrastructureLayers = [
  { step: "01", title: "Regulatory Framework" },
  { step: "02", title: "Reserve Infrastructure" },
  { step: "03", title: "Compliance & Risk" },
  { step: "04", title: "Settlement Engine" },
  { step: "05", title: "Enterprise APIs" },
];

export const howItWorksSteps = [
  { step: "01", title: "Deposit Funds" },
  { step: "02", title: "Issue Regulated Digital Value" },
  { step: "03", title: "Transfer Across Network" },
  { step: "04", title: "Redeem or Reuse Within Network" },
];

export const expansionPhases = [
  {
    phase: "Phase 1",
    title: "Launch Core Settlement Corridors",
    description: "Establish liquidity and transaction flow.",
  },
  {
    phase: "Phase 2",
    title: "Enterprise & PSP Expansion",
    description: "Increase transaction volume and network participation.",
  },
  {
    phase: "Phase 3",
    title: "Regional Settlement Network",
    description: "Expand corridor coverage and interoperability.",
  },
  {
    phase: "Phase 4",
    title: "Continental Infrastructure Layer",
    description:
      "Become a foundational settlement network across African markets.",
  },
];

export const slideTitles = [
  "IMANI",
  "Executive Summary",
  "The Problem",
  "The Hidden Cost of Fragmentation",
  "Why Now",
  "Market Validation",
  "Introducing IMANI",
  "How IMANI Works",
  "Two Settlement Models",
  "Infrastructure Architecture",
  "Regulation as a Competitive Advantage",
  "Reserve Infrastructure",
  "Licensing & Capital Requirements",
  "Compliance Infrastructure",
  "The Regulatory Moat",
  "Market Opportunity",
  "Market Expansion Strategy",
  "Multi-Currency Settlement Network",
  "Network Effects",
  "Building The Ecosystem",
  "Business Model",
  "Competitive Landscape",
  "Why IMANI Wins",
  "Infrastructure Economics",
  "Revenue Growth Model",
  "Risk Management",
  "Expansion Roadmap",
  "Beyond Settlement",
  "The Vision",
  "The Raise",
  "Leadership",
  "Closing",
];
