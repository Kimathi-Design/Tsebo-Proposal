/** Submission pack — Alliance-style appendices for Tsebo (no BW RFQ annexures) */

export const primaryContact = {
  name: "Fusi Monyolo",
  role: "Primary Proposal Contact",
  email: "services@ibd.co.ls",
  phone: "+266 6255 4433",
} as const;

export const companyPostalAddress = "Lancers Road, House No.16, Maseru, Lesotho" as const;

/** Extracted from Infinity Compliance Docs (July 2026) */
export const companyProfile = {
  legalName: "INFINITY BUSINESS DYNAMICS (PTY) LTD",
  tradingName: "INFINITY BUSINESS DYNAMICS",
  registrationNo: "A2023/5840",
  tin: "200116903-2",
  taxClearanceCertificateId: "1245456124",
  taxClearanceValidUntil: "12 May 2027",
  businessLicenceRenewed: "23 April 2026",
  businessLicenceExpiry: "23 April 2029",
  registeredAddress: "Ha Tsosane, Maseru, Lesotho",
} as const;

export const bbbeeGapStatement = `Infinity Business Dynamics (Pty) Ltd is a Lesotho-registered enterprise operating primarily within the Kingdom of Lesotho. A formal B-BBEE (Broad-Based Black Economic Empowerment) certificate issued under the South African B-BBEE Codes is not applicable to our Lesotho incorporation.

We confirm our commitment to transformation, local employment and enterprise development within Lesotho, and we will provide any additional empowerment or local-content documentation requested by Tsebo Solutions Group during due diligence.` as const;

export type SubmissionDocument = {
  id: string;
  title: string;
  purpose: string | null;
  /** Path under /appendices/ for PDF merge or download */
  file?: string;
};

export type SubmissionSection = {
  label: string;
  items: readonly SubmissionDocument[];
};

/** Alliance-style appendix catalogue — Tsebo Dynamics + Motheo POS scope */
export const appendices: readonly SubmissionDocument[] = [
  {
    id: "Appendix A",
    title: "Revenue Services Lesotho Accreditation Certificate",
    purpose: "Proof of RSL Electronic Billing Solution accreditation.",
    file: "support-a-rsl-accreditation-letter.pdf",
  },
  {
    id: "Appendix B",
    title: "Motheo Integrator Guide",
    purpose: "Technical integrator reference for Motheo Compliance Layer and Motheo POS.",
    file: "support-b-motheo-integrator-guide.pdf",
  },
  {
    id: "Appendix C",
    title: "Solution Architecture",
    purpose: "Included in the main proposal architecture slides.",
  },
  {
    id: "Appendix D",
    title: "Microsoft Dynamics & Motheo POS Integration",
    purpose: "Included in the Dynamics and Motheo POS integration slides.",
  },
  {
    id: "Appendix E",
    title: "Implementation Methodology",
    purpose: "Included in the main proposal delivery and timeline slides.",
  },
  {
    id: "Appendix F",
    title: "Commercial Pricing Schedule",
    purpose: "Estimate EST-000227 dated 12 Jul 2026 — Dynamics, Managed Compliance and Motheo POS.",
    file: "est-000227-pricing.pdf",
  },
  {
    id: "Appendix G",
    title: "Company Registration Documents",
    purpose: "Company registration and Infinity compliance document pack.",
    file: "mandatory-compliance-documents-2026.pdf",
  },
  {
    id: "Appendix H",
    title: "Tax Clearance Certificate",
    purpose: "Valid RSL tax clearance certificate (TIN 200116903-2).",
    file: "mandatory-tax-clearance-certificate.pdf",
  },
  {
    id: "Appendix I",
    title: "Bank Confirmation Letter",
    purpose: "Confirmed banking details for Infinity Business Dynamics (Pty) Ltd.",
    file: "mandatory-banking-details.pdf",
  },
  {
    id: "Appendix J",
    title: "VAT Registration Certificate",
    purpose: "Lesotho VAT registration certificate for Infinity Business Dynamics (Pty) Ltd.",
    file: "mandatory-vat-registration-certificate.pdf",
  },
  {
    id: "Appendix K",
    title: "Information Security & Data Protection Policies",
    purpose: "Security and data-protection controls summarised in the proposal security sections.",
  },
  {
    id: "Appendix L",
    title: "Support & SLA Reference Guide",
    purpose: "Support model and SLA commitments included in the proposal managed-services sections.",
  },
] as const;

/** Split across appendices slides A–F and G–L */
export const submissionSections: readonly SubmissionSection[] = [
  {
    label: "Solution & Commercial Appendices",
    items: appendices.slice(0, 6),
  },
  {
    label: "Company & Compliance Appendices",
    items: appendices.slice(6),
  },
] as const;

/** PDFs merged after deck slides, in submission order */
export const submissionPdfMergeOrder = [
  "support-a-rsl-accreditation-letter.pdf",
  "support-b-motheo-integrator-guide.pdf",
  "est-000227-pricing.pdf",
  "mandatory-compliance-documents-2026.pdf",
  "mandatory-tax-clearance-certificate.pdf",
  "mandatory-banking-details.pdf",
  "mandatory-vat-registration-certificate.pdf",
] as const;
