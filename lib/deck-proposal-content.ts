/** Verbatim proposal copy — pages 1–41 */

export const proposalCover = {
  title: "ENTERPRISE TAX COMPLIANCE TRANSFORMATION",
  subtitle: "Revenue Services Lesotho (RSL) Electronic Billing System (EBS)",
  tagline: "Microsoft Dynamics & Motheo POS Proposal",
  preparedFor: "TSEBO SOLUTIONS GROUP",
  preparedBy: "INFINITY BUSINESS DYNAMICS (PTY) LTD",
  preparedByTagline: "Harnessing the Power of Technology",
  location: "Maseru, Lesotho",
  address: "Lancers Road, House No.16, Maseru, Lesotho",
  website: "www.ibd.co.ls",
  email: "services@ibd.co.ls",
  phone: "+266 6255 4433",
  date: "14th of July 2026",
  reference: "IBD-TSEBO-EBS-2026-001",
  accreditation: "Revenue Services Lesotho Accredited Solution Provider",
} as const;

export const executiveLetter = {
  to: "Procurement / Finance Leadership",
  toOrg: "Tsebo Solutions Group",
  toLocation: "Lesotho",
  salutation: "Dear Tsebo Team,",
  paragraphs: [
    "Infinity Business Dynamics appreciates the opportunity to submit this proposal for the supply, implementation and support of Motheo Compliance Layer and Motheo POS for Tsebo Solutions Group.",
    "As Revenue Services Lesotho continues to modernise tax administration through the Lekuka Electronic Billing System, organisations must ensure that fiscal transactions are processed securely, accurately and in real time while maintaining uninterrupted business operations.",
    "Under the Lekuka mandate, invoices, credit notes, debit notes, receipts and payouts must be submitted to RSL in real time. Returned fiscal signatures and QR codes must appear on every printed customer document.",
    "For Tsebo Solutions Group, the arrangement is straightforward: Motheo Compliance Layer integrates with Microsoft Dynamics for account and enterprise billing, while Motheo POS handles cash sale transactions at the point of sale — both feeding the same certified fiscal engine.",
    "Infinity Business Dynamics therefore proposes Motheo Compliance Layer as the certified compliance path between Tsebo's Microsoft Dynamics environment and the Revenue Services Lesotho Lekuka platform, together with Motheo POS for cash sales.",
    "This architecture enables automated fiscal reporting, secure API integration, QR code generation, audit traceability and continuous compliance while preserving existing Dynamics workflows and operational efficiency.",
    "Our implementation approach combines Dynamics integration, Motheo POS deployment, regulatory compliance and managed support services to deliver a practical solution aligned with Tsebo's operational model.",
    "We appreciate the opportunity to partner with Tsebo Solutions Group on this compliance initiative and look forward to a successful delivery.",
  ],
  closing: "Yours faithfully,",
  signatureOrg: "Infinity Business Dynamics (Pty) Ltd",
  signatureTagline: "Harnessing the Power of Technology",
} as const;

export const tableOfContentsSections = [
  {
    section: "Executive",
    entries: [
      { title: "Executive Summary", page: 4 },
      { title: "Strategic Business Outcomes", page: 5 },
      { title: "Understanding Tsebo Solutions Group", page: 6 },
      { title: "Business Challenges", page: 7 },
    ],
  },
  {
    section: "Company",
    entries: [
      { title: "About Infinity Business Dynamics", page: 8 },
      { title: "Why Infinity", page: 9 },
      { title: "Revenue Services Lesotho Accreditation", page: 10 },
    ],
  },
  {
    section: "Solution",
    entries: [
      { title: "Motheo Compliance Layer", page: 11 },
      { title: "Solution Architecture", page: 12 },
      { title: "Dynamics Integration Architecture", page: 13 },
      { title: "Motheo POS", page: 14 },
      { title: "API Integration Framework", page: 15 },
      { title: "Motheo Compliance Engine", page: 16 },
      { title: "Security Architecture", page: 17 },
      { title: "Transaction Lifecycle", page: 18 },
      { title: "QR Code Framework", page: 21 },
      { title: "Monitoring & Reporting", page: 22 },
      { title: "Business Continuity", page: 23 },
    ],
  },
  {
    section: "Delivery",
    entries: [
      { title: "Implementation Methodology", page: 25 },
      { title: "Project Governance", page: 26 },
      { title: "Project Team", page: 27 },
      { title: "Project Timeline", page: 29 },
      { title: "Testing Strategy", page: 30 },
      { title: "User Training", page: 31 },
      { title: "Support Model", page: 32 },
      { title: "Service Level Commitments", page: 33 },
      { title: "Risk Management", page: 34 },
    ],
  },
  {
    section: "Commercial",
    entries: [
      { title: "Commercial Proposal", page: 35 },
      { title: "Annual Managed Services", page: 35 },
      { title: "Supplier Responses", page: 36 },
      { title: "Terms & Conditions Acceptance", page: 39 },
      { title: "Appendices A–F", page: 40 },
      { title: "Appendices G–L", page: 41 },
    ],
  },
] as const;

export const executiveSummaryFlow = {
  current: ["Microsoft Dynamics", "Cash Sales", "Manual Compliance"],
  future: [
    "Motheo Compliance Layer",
    "Motheo POS",
    "Revenue Services Lesotho",
    "Future Motheo Compliance",
  ],
} as const;

export const strategicOutcomes = [
  {
    title: "Regulatory Compliance",
    description: "Automated reporting aligned with Revenue Services Lesotho requirements.",
    benefit: "Automated fiscal reporting",
  },
  {
    title: "Operational Excellence",
    description: "Reduced manual intervention through intelligent automation.",
    benefit: "Improved operational efficiency",
  },
  {
    title: "Operational Visibility",
    description: "Real-time monitoring and operational dashboards.",
    benefit: "Enhanced audit readiness",
  },
  {
    title: "Audit Readiness",
    description: "Complete transaction traceability and audit evidence.",
    benefit: "Reduced compliance risk",
  },
  {
    title: "Future Scalability",
    description: "Motheo platform ready for future growth and regulatory change.",
    benefit: "Future-proof regulatory compliance",
  },
] as const;

export const keyBusinessBenefits = [
  "Improved operational efficiency",
  "Reduced compliance risk",
  "Increased reporting accuracy",
  "Faster audit preparation",
  "Enhanced governance",
  "Scalable Motheo platform",
] as const;

export const tseboBusinessAreas = [
  "Facilities Management",
  "Catering Services",
  "Cleaning & Hygiene",
  "Security Services",
  "Remote Site Solutions",
  "Energy & Water Management",
  "Customer Billing",
  "Cash Sale Operations",
] as const;

export const businessChallenges = [
  "Keeping Microsoft Dynamics operations uninterrupted.",
  "Connecting Dynamics invoices to the Lekuka fiscal platform.",
  "Fiscalising cash sale receipts at the point of sale.",
  "Managing digital certificates and secure submissions.",
  "Providing complete audit traceability.",
  "Staying aligned with future Revenue Services Lesotho changes.",
] as const;

export const gatewayCapabilities = [
  "Motheo Compliance Layer",
  "Microsoft Dynamics connectivity",
  "Motheo POS for cash sales",
  "Certificate management",
  "Complete audit logging",
  "Regulatory update support",
] as const;

export const aboutInfinityIntro = [
  "Infinity Business Dynamics is an enterprise technology company specialising in systems integration, regulatory compliance platforms, digital transformation and managed technology services.",
  "We partner with organisations to modernise business operations through intelligent software solutions that improve efficiency, governance and regulatory compliance.",
  "Our multidisciplinary team combines expertise in enterprise architecture, Dynamics integration, API development, compliance automation and project delivery.",
] as const;

export const companyCredentials = [
  {
    title: "Registration",
    description: "A2023/5840 — business licence renewed 23 April 2026 (expires 23 April 2029).",
    inline: true,
  },
  {
    title: "Taxpayer ID",
    description: "TIN 200116903-2 with RSL tax clearance valid until 12 May 2027.",
    inline: true,
  },
  {
    title: "Registered address",
    description: "Ha Tsosane, Maseru, Lesotho.",
    inline: true,
  },
] as const;

export const lekukaDocumentTypes = [
  "Invoices",
  "Credit notes",
  "Debit notes",
  "Receipts",
  "Payouts",
] as const;

export const coreCapabilities = [
  {
    title: "Enterprise Integration",
    description:
      "Connecting business systems, data flows and compliance platforms across the enterprise landscape.",
  },
  {
    title: "Microsoft Dynamics Integration",
    description:
      "Microsoft Dynamics connectivity that preserves existing workflows while enabling fiscal compliance.",
  },
  {
    title: "Compliance Automation",
    description:
      "Automated fiscal validation, reporting and regulatory submission aligned with Revenue Services Lesotho.",
  },
  {
    title: "API Development",
    description:
      "Secure API design and development for enterprise applications and regulatory platform connectivity.",
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud architecture supporting resilient, high-availability compliance operations.",
  },
  {
    title: "Managed Services",
    description:
      "Long-term monitoring, support and maintenance of business-critical compliance systems.",
  },
  {
    title: "Digital Transformation",
    description:
      "Technology solutions that improve operational efficiency, governance and business visibility.",
  },
] as const;

export const whyChooseInfinity = [
  {
    title: "Revenue Services Lesotho Accredited",
    description:
      "Infinity Business Dynamics is accredited to deliver Lekuka-compliant electronic billing solutions aligned with current Revenue Services Lesotho requirements.",
  },
  {
    title: "Enterprise Integration Specialists",
    description:
      "Proven capability designing secure middleware that connects enterprise systems with external regulatory and compliance platforms.",
  },
  {
    title: "Microsoft Dynamics Integration Expertise",
    description:
      "Proven experience integrating Microsoft Dynamics environments with compliance gateways while preserving existing business workflows.",
  },
  {
    title: "Secure API Architecture",
    description:
      "Enterprise-grade API design ensuring authenticated, encrypted communication between business systems and Revenue Services Lesotho.",
  },
  {
    title: "Local Implementation Team",
    description:
      "Lesotho-based implementation resources providing local delivery, training and ongoing client engagement.",
  },
  {
    title: "Long-Term Managed Services",
    description:
      "Continuous monitoring, support and maintenance of compliance systems beyond initial deployment.",
  },
  {
    title: "Future Regulatory Readiness",
    description:
      "A scalable platform designed to adapt to evolving Revenue Services Lesotho and enterprise compliance requirements.",
  },
] as const;

export const rslAccreditationIntro = [
  "Infinity Business Dynamics is an accredited provider of Revenue Services Lesotho electronic billing solutions. This accreditation confirms that Infinity is authorised to implement and support Lekuka-compliant fiscal reporting for organisations operating in Lesotho.",
  "For Tsebo, we propose Motheo Compliance Layer — powered by the certified Motheo Compliance Engine — as a straightforward compliance path for Microsoft Dynamics, together with Motheo POS for cash sale transactions. Monitoring, security and orchestration are included without over-engineering the architecture.",
  "Tsebo gains a proven, accredited compliance pathway that preserves Dynamics workflows, fiscalises cash sales at the till, and scales with regulatory change — without the complexity of a heavyweight custom enterprise build.",
] as const;

export const gatewayIncludes = [
  "Certified Motheo Compliance Engine",
  "Motheo Compliance Layer",
  "Microsoft Dynamics Connectivity",
  "Motheo POS (Cash Sales)",
  "Secure API Gateway",
  "Monitoring & Analytics",
  "Audit Logging",
  "Managed Support Services",
] as const;

export const rslAccreditationFlowSteps = [
  {
    title: "Tsebo Users",
    description: "Teams initiate invoices, receipts and compliance transactions.",
  },
  {
    title: "Dynamics & Motheo POS",
    description: "Microsoft Dynamics and Motheo POS generate qualifying fiscal events.",
  },
  {
    title: "Motheo Compliance Layer",
    description: "Certified layer orchestrates validation and regulatory communication.",
  },
  {
    title: "Motheo Compliance Engine",
    description: "Validates, signs and fiscalises each transaction.",
  },
  {
    title: "Revenue Services Lesotho",
    description: "Compliant submissions delivered to the Lekuka platform.",
  },
] as const;

export const rslAccreditationFlow = rslAccreditationFlowSteps.map((step) => step.title);

export const solutionEcosystemFlow = [
  "Tsebo Users",
  "Microsoft Dynamics",
  "Motheo POS",
  "Motheo Compliance Layer",
  "Motheo Compliance Engine",
  "Revenue Services Lesotho",
] as const;

/** Compact five-step overview — Users → Dynamics/POS → Motheo → RSL */
export const solutionOverviewFlow = [
  "Tsebo Users",
  "Dynamics & Motheo POS",
  "Motheo Compliance Layer",
  "Motheo Compliance Engine",
  "Revenue Services Lesotho",
] as const;

export const solutionFloatingCards = [
  "Security",
  "Monitoring",
  "Audit",
  "Reporting",
  "Analytics",
] as const;

export const solutionComponents = [
  {
    title: "Microsoft Dynamics",
    description:
      "Financial transactions, billing, customer master data and accounts receivable remain within Microsoft Dynamics as the system of record.",
  },
  {
    title: "Motheo POS",
    description:
      "Cash sale transactions at the point of sale are fiscalised in real time, with receipts submitted through the Motheo Compliance Engine.",
  },
  {
    title: "Motheo Compliance Layer",
    description:
      "Provides the Motheo compliance path responsible for: Transaction validation, API orchestration, Security enforcement, Monitoring, Error handling, Compliance reporting",
  },
  {
    title: "Motheo Compliance Engine",
    description:
      "Provides certified fiscalisation services including: Fiscal validation, QR Code generation, Certificate management, Digital signatures, Receipt submission",
  },
  {
    title: "Revenue Services Lesotho",
    description: "Receives validated fiscal transactions through secure APIs.",
  },
] as const;

export const solutionBusinessBenefits = [
  "No disruption to Dynamics",
  "Enterprise-grade scalability",
  "Centralised compliance",
  "Secure integration",
  "Future-ready architecture",
  "Improved operational efficiency",
  "Reduced compliance risk",
  "Increased reporting accuracy",
  "Faster audit preparation",
  "Enhanced governance",
] as const;

export const architectureLayers = [
  { label: "Business Users", color: "var(--ibd-blue)" },
  { label: "Business Applications", color: "#5c3d9e" },
  { label: "Integration Services", color: "var(--ibd-green)" },
  { label: "Compliance Platform", color: "#b8960c" },
  { label: "Government Services", color: "var(--ibd-red)" },
] as const;

export const architecturePrinciples = [
  "Loose coupling",
  "API-first integration",
  "Event-driven processing",
  "High availability",
  "Centralised monitoring",
] as const;

export const enterprisePrinciples = [
  { title: "Reliability", description: "Ensuring continuous processing of business transactions." },
  { title: "Security", description: "Protecting enterprise data through secure communication and certificate-based authentication." },
  { title: "Scalability", description: "Supporting future business growth without architectural redesign." },
  { title: "Compliance", description: "Maintaining alignment with Revenue Services Lesotho regulations." },
  { title: "Auditability", description: "Providing complete transaction traceability." },
] as const;

export const dynamicsIntegrationScope = [
  {
    title: "Dynamics Sales Billing",
    description: "Sales invoices and billing documents triggered on posting in Dynamics.",
    inline: true,
  },
  {
    title: "Dynamics Accounts Receivable",
    description: "Financial accounting invoices, credits and adjustments.",
    inline: true,
  },
  {
    title: "Service & Contract Billing",
    description: "Service and contract billing routed through the same Motheo compliance path.",
    inline: true,
  },
  {
    title: "Customer Master",
    description: "Validated customer and tax reference data for fiscal submission.",
    inline: true,
  },
  {
    title: "Tax Configuration",
    description: "Lesotho VAT codes and fiscal fields aligned to Lekuka requirements.",
    inline: true,
  },
  {
    title: "Document Write-back",
    description: "QR code URL, fiscal signature and receipt counter returned to Dynamics document outputs.",
    inline: true,
  },
] as const;

export const dynamicsIntegrationServices = [
  "Secure API communication",
  "Data transformation",
  "Validation",
  "Error handling",
  "Monitoring",
  "Retry mechanisms",
] as const;

export const dynamicsArchitectureFlow = [
  "Dynamics Finance",
  "Dynamics Sales",
  "Customer Master",
  "Billing",
  "Dynamics APIs",
  "Motheo Compliance Layer",
  "Motheo Engine",
  "Lekuka",
] as const;

export const dynamicsSideCards = ["Monitoring", "Audit", "Retry", "Notifications"] as const;

export const posIntegrationServices = [
  "Cash Sale Capture",
  "Receipt Fiscalisation",
  "Tender Validation",
  "Cash Sales",
  "Receipt Issuance",
  "POS Settlement",
] as const;

export const posBenefits = [
  "Unified fiscal reporting",
  "Consistent receipt data",
  "No dual capture",
  "Point-of-sale compliance",
] as const;

export const posFlowSteps = [
  {
    title: "Motheo POS",
    description: "Cash sales captured and receipted at the point of sale.",
  },
  {
    title: "Compliance Layer",
    description: "Routes POS receipts into Motheo Compliance Layer.",
  },
  {
    title: "Dynamics",
    description: "Account sales remain in Microsoft Dynamics as system of record.",
  },
  {
    title: "Motheo Engine",
    description: "Validates, fiscalises and formats regulatory payloads.",
  },
  {
    title: "Revenue Services Lesotho",
    description: "Receives compliant fiscal submissions to Lekuka.",
  },
] as const;

export const posFlow = posFlowSteps.map((step) => step.title);

export const apiServices = [
  {
    title: "Taxpayer verification",
    description: "Confirms taxpayer registration and eligibility with RSL before processing.",
    inline: true,
  },
  {
    title: "Device registration",
    description: "Registers fiscal devices and endpoints authorised to submit to Lekuka.",
    inline: true,
  },
  {
    title: "Digital certificate management",
    description: "Provisions, renews and applies signing certificates for compliant submission.",
    inline: true,
  },
  {
    title: "Invoice submission",
    description: "Submits sales invoices to RSL in the required fiscal format.",
    inline: true,
  },
  {
    title: "Credit note submission",
    description: "Reports credit adjustments against previously issued invoices.",
    inline: true,
  },
  {
    title: "Debit note submission",
    description: "Reports debit adjustments to correct or amend fiscal records.",
    inline: true,
  },
  {
    title: "Receipt submission",
    description: "Submits customer receipts to RSL for fiscal signing and QR generation.",
    inline: true,
  },
  {
    title: "Payout submission",
    description: "Reports payout transactions required under the Lekuka document set.",
    inline: true,
  },
  {
    title: "Receipt status enquiries",
    description: "Queries acceptance, rejection or pending status of submitted documents.",
    inline: true,
  },
  {
    title: "QR code validation",
    description: "Verifies invoice QR codes against RSL fiscal data for authenticity.",
    inline: true,
  },
  {
    title: "Batch file submission",
    description: "Processes high-volume transaction files in a single controlled upload.",
    inline: true,
  },
  {
    title: "Daily transaction reconciliation",
    description: "Matches submitted transactions against RSL records for day-end compliance.",
    inline: true,
  },
] as const;

export const apiFeatures = [
  {
    title: "REST APIs",
    description: "Standard HTTP endpoints compatible with modern enterprise integration.",
    inline: true,
  },
  {
    title: "JSON payloads",
    description: "Structured message format for straightforward parsing and transformation.",
    inline: true,
  },
  {
    title: "Secure authentication",
    description: "Token and certificate-based controls protect all API traffic.",
    inline: true,
  },
  {
    title: "Certificate management",
    description: "Automated lifecycle handling for device and signing certificates.",
    inline: true,
  },
  {
    title: "Error handling",
    description: "Structured error responses enable rapid diagnosis and correction.",
    inline: true,
  },
  {
    title: "Automatic retries",
    description: "Transient failures are retried with backoff to improve success rates.",
    inline: true,
  },
  {
    title: "Monitoring",
    description: "Real-time visibility into API health, throughput and exception rates.",
    inline: true,
  },
] as const;

export const apiBusinessBenefits = [
  "Standardised integrations",
  "Reduced maintenance",
  "Improved reliability",
  "Simplified upgrades",
] as const;

export const apiGatewayFlow = [
  "Enterprise Applications",
  "API Gateway",
  "Authentication",
  "Transformation",
  "Compliance Services",
  "Revenue Services Lesotho",
] as const;

export const motheoCoreServices = [
  { title: "Validation Engine", description: "Verifies transaction completeness and compliance." },
  { title: "Tax Rules Engine", description: "Applies fiscal rules and tax validations." },
  { title: "QR Code Engine", description: "Generates compliant fiscal QR codes." },
  { title: "Certificate Manager", description: "Handles digital certificates securely." },
  { title: "Audit Logs", description: "Maintains complete transaction history." },
  { title: "Monitoring Engine", description: "Tracks submission status and system health." },
  { title: "Retry Engine", description: "Automatically resubmits failed transactions." },
] as const;

export const motheoRadialNodes = [
  "Validation",
  "Tax Rules",
  "QR",
  "Certificates",
  "Audit",
  "Monitoring",
  "Retry",
  "API Connectivity",
] as const;

export const motheoEnterpriseBenefits = [
  "Certified compliance",
  "Reliable processing",
  "Reliable operations",
  "Future regulatory readiness",
] as const;

export const securityPrinciples = [
  { title: "Confidentiality", description: "Protect sensitive financial and customer information from unauthorised access." },
  { title: "Integrity", description: "Ensure transactions cannot be altered during processing or transmission." },
  { title: "Availability", description: "Provide continuous access to compliance services through resilient infrastructure." },
  { title: "Authentication", description: "Use digital certificates and secure authentication mechanisms to validate system identities." },
  { title: "Authorisation", description: "Role-based access control ensures users only access authorised functionality." },
] as const;

export const securityControls = [
  "TLS 1.2+ encrypted communication",
  "Digital Certificates",
  "Role-Based Access Control (RBAC)",
  "Secure API Authentication",
  "Audit Logging",
  "Activity Monitoring",
  "Secure Configuration Management",
] as const;

export const securityFlow = [
  "Users",
  "Authentication",
  "API Gateway",
  "Motheo Compliance Layer",
  "Encryption Layer",
  "Revenue Services Lesotho",
] as const;

export const securityBadges = ["TLS", "Certificates", "RBAC", "Encryption", "Audit Logs", "Monitoring"] as const;

export const securityBusinessBenefits = [
  {
    title: "Secure enterprise communications",
    description: "Encrypted, authenticated channels between Dynamics, Motheo POS, gateway and RSL.",
    inline: true,
  },
  {
    title: "Reduced cyber risk",
    description: "Defence-in-depth controls limit exposure across the platform.",
    inline: true,
  },
  {
    title: "Compliance with regulatory security requirements",
    description: "Meets RSL obligations and Tsebo enterprise security standards.",
    inline: true,
  },
  {
    title: "Point-of-sale compliance",
    description: "RBAC and monitoring enforce accountability across users and systems.",
    inline: true,
  },
  {
    title: "Stronger audit evidence",
    description: "Complete activity logs support compliance reviews and investigations.",
    inline: true,
  },
] as const;

export const transactionLifecycleSteps = [
  { step: "01", title: "Transaction Created", description: "Invoice, credit note, debit note, receipt or payout generated in Microsoft Dynamics or Motheo POS." },
  { step: "02", title: "Validation", description: "Business rules and mandatory fields are validated." },
  { step: "03", title: "Transformation", description: "Transaction converted into the Revenue Services Lesotho API format." },
  { step: "04", title: "Fiscal Processing", description: "Transaction processed through the Motheo Compliance Engine." },
  { step: "05", title: "QR Code Generation", description: "Fiscal QR Code automatically generated." },
  { step: "06", title: "Submission", description: "Secure submission to Revenue Services Lesotho." },
  { step: "07", title: "Response Processing", description: "Acceptance or rejection response received and recorded." },
  { step: "08", title: "Audit Archiving", description: "Transaction history stored for reporting and audit purposes." },
] as const;

export const transactionWorkflow = [
  "Create",
  "Validate",
  "Transform",
  "Fiscalise",
  "QR",
  "Submit",
  "Response",
  "Archive",
] as const;

export const onlineProcessing = [
  {
    title: "Real-time validation",
    description: "Checks transaction data against RSL rules before submission.",
    inline: true,
  },
  {
    title: "Immediate submission",
    description: "Sends compliant invoices to Lekuka as soon as they are generated.",
    inline: true,
  },
  {
    title: "Instant acknowledgement",
    description: "Records RSL acceptance or rejection without processing delay.",
    inline: true,
  },
  {
    title: "Live monitoring",
    description: "Tracks submission status and errors in real time during operations.",
    inline: true,
  },
] as const;

export const offlineProcessing = [
  {
    title: "Secure local queue",
    description: "Stores pending transactions locally until connectivity is restored.",
    inline: true,
  },
  {
    title: "Automatic retry",
    description: "Resubmits queued items when the RSL link becomes available again.",
    inline: true,
  },
  {
    title: "Status monitoring",
    description: "Tracks queue depth and retry outcomes until each item clears.",
    inline: true,
  },
  {
    title: "Automatic reconciliation",
    description: "Aligns queued submissions with RSL records once back online.",
    inline: true,
  },
] as const;

export const certificateLifecycle = [
  "Certificate Request",
  "Registration",
  "Validation",
  "Certificate Issued",
  "Deployment",
  "Renewal",
  "Replacement",
  "Revocation",
] as const;

export const certificateServices = [
  "CSR Generation",
  "Certificate Installation",
  "Renewal Management",
  "Expiry Monitoring",
  "Secure Storage",
  "Rotation Management",
] as const;

export const qrFeatures = [
  "Automatic generation",
  "Validation",
  "Secure encoding",
  "Invoice integration",
  "Customer verification",
] as const;

export const qrCallouts = [
  "Invoice Number",
  "Fiscal Identifier",
  "Verification URL",
  "QR Payload",
] as const;

export const dashboardModules = [
  {
    title: "Transaction Volume",
    description: "Total fiscal transactions processed in the period.",
    inline: true,
  },
  {
    title: "Accepted Transactions",
    description: "Invoices accepted by Revenue Services Lesotho.",
    inline: true,
  },
  {
    title: "Pending Transactions",
    description: "Submissions awaiting confirmation or in queue.",
    inline: true,
  },
  {
    title: "Rejected Transactions",
    description: "Failed submissions requiring review.",
    inline: true,
  },
  {
    title: "Average Processing Time",
    description: "Gateway receipt to RSL acknowledgement latency.",
    inline: true,
  },
  {
    title: "API Health",
    description: "Endpoint availability and response performance.",
    inline: true,
  },
  {
    title: "Certificate Status",
    description: "Digital signing certificate validity and expiry.",
    inline: true,
  },
  {
    title: "Compliance Score",
    description: "Overall regulatory submission success rate.",
    inline: true,
  },
] as const;

export const dashboardBenefits = [
  {
    title: "Proactive monitoring",
    description: "Detect issues before they impact compliance or operations.",
    inline: true,
  },
  {
    title: "Faster issue resolution",
    description: "Real-time alerts shorten time to diagnose and fix failures.",
    inline: true,
  },
  {
    title: "Point-of-sale compliance",
    description: "Audit-ready visibility for finance and compliance teams.",
    inline: true,
  },
  {
    title: "Better operational insights",
    description: "Trend data supports capacity planning and performance tuning.",
    inline: true,
  },
  {
    title: "Regulatory confidence",
    description: "Live compliance metrics confirm ongoing RSL adherence.",
    inline: true,
  },
  {
    title: "Reduced manual reporting",
    description: "Automated dashboards replace spreadsheet-based status tracking.",
    inline: true,
  },
  {
    title: "Stakeholder transparency",
    description: "Shared visibility for finance, IT and executive oversight.",
    inline: true,
  },
] as const;

export const dashboardSampleMetrics = [
  "12,480",
  "11,920",
  "124",
  "36",
  "2.4s",
  "99.2%",
  "Valid",
  "98.5%",
] as const;

export const resilienceFeatures = [
  {
    title: "Retry Processing",
    description: "Automatically resubmits failed transactions without manual intervention.",
    inline: true,
  },
  {
    title: "Queue Management",
    description: "Buffers submissions during outages until connectivity is restored.",
    inline: true,
  },
  {
    title: "Error Recovery",
    description: "Isolates and resolves transient failures without data loss.",
    inline: true,
  },
  {
    title: "Failover Support",
    description: "Switches to alternate paths when primary services are unavailable.",
    inline: true,
  },
  {
    title: "Monitoring & Alerts",
    description: "Proactive notification when submission or infrastructure issues arise.",
    inline: true,
  },
  {
    title: "Audit Preservation",
    description: "Protects transaction records throughout recovery for compliance traceability.",
    inline: true,
  },
] as const;

export const recoveryObjectives = [
  {
    title: "Minimise downtime",
    description: "Limit interruption to fiscal processing and day-to-day operations.",
    inline: true,
  },
  {
    title: "Prevent transaction loss",
    description: "No invoice data is discarded during failure or recovery events.",
    inline: true,
  },
  {
    title: "Restore processing quickly",
    description: "Automated recovery returns normal submission flow within defined targets.",
    inline: true,
  },
  {
    title: "Maintain compliance",
    description: "Regulatory obligations continue to be met throughout recovery.",
    inline: true,
  },
] as const;

export const resilienceBusinessBenefits = [
  {
    title: "Increased reliability",
    description: "Consistent submission performance across normal and degraded conditions.",
    inline: true,
  },
  {
    title: "Reduced operational risk",
    description: "Less manual recovery work and fewer compliance gaps from outages.",
    inline: true,
  },
  {
    title: "Continuous compliance",
    description: "Fiscal reporting obligations remain satisfied during disruptions.",
    inline: true,
  },
  {
    title: "Business continuity",
    description: "Core finance operations continue with minimal impact on Tsebo users.",
    inline: true,
  },
] as const;

export const recoveryWorkflow = ["Failure", "Detection", "Retry", "Recovery", "Submission", "Audit"] as const;

export const availableReports = [
  {
    title: "Daily Transaction Summary",
    description: "Volume and status of fiscal transactions processed each day.",
    inline: true,
  },
  {
    title: "Compliance Status Report",
    description: "Current RSL submission compliance across all business units.",
    inline: true,
  },
  {
    title: "Submission Success Rate",
    description: "Share of invoices accepted versus rejected or pending.",
    inline: true,
  },
  {
    title: "Exception Report",
    description: "Failed or anomalous transactions requiring review and action.",
    inline: true,
  },
  {
    title: "Audit Trail Report",
    description: "Complete event history for governance and investigations.",
    inline: true,
  },
  {
    title: "Certificate Health Report",
    description: "Digital signing certificate validity, expiry and renewal status.",
    inline: true,
  },
  {
    title: "API Performance Report",
    description: "Gateway endpoint availability, latency and error rates.",
    inline: true,
  },
] as const;

export const reportingBusinessBenefits = [
  {
    title: "Better decision-making",
    description: "Timely compliance data supports informed operational and financial choices.",
    inline: true,
  },
  {
    title: "Point-of-sale compliance",
    description: "Scheduled reports strengthen oversight and audit readiness.",
    inline: true,
  },
  {
    title: "Enhanced visibility",
    description: "Finance and IT teams share a single view of reporting performance.",
    inline: true,
  },
  {
    title: "Performance optimisation",
    description: "Trend analysis identifies bottlenecks and improvement opportunities.",
    inline: true,
  },
] as const;

export const implementationPhases = [
  {
    phase: "Phase 1 – Discover",
    summary: "Understand Tsebo's business processes, Microsoft Dynamics landscape and compliance requirements.",
    activities: ["Project Kick-off", "Stakeholder Workshops", "Requirements Gathering", "Infrastructure Assessment", "Dynamics & POS Assessment", "Compliance Review"],
    deliverables: ["Project Charter", "Requirements Specification", "Solution Scope", "Risk Register"],
  },
  {
    phase: "Phase 2 – Design",
    summary: "Design the enterprise solution architecture and integration framework.",
    activities: ["Architecture Design", "API Mapping", "Dynamics Integration Design", "Security Design", "Compliance Configuration"],
    deliverables: ["Solution Architecture", "Integration Design", "Technical Specification"],
  },
  {
    phase: "Phase 3 – Build",
    summary: "Configure Motheo Compliance Layer and Motheo POS.",
    activities: ["Gateway Configuration", "API Development", "Dynamics Integration", "Motheo POS", "Compliance Rules", "Certificate Configuration"],
    deliverables: ["Configured Platform", "Integration Services", "Test Environment"],
  },
  {
    phase: "Phase 4 – Validate",
    summary: "Ensure the solution meets all functional and regulatory requirements.",
    activities: ["Functional Testing", "Integration Testing", "User Acceptance Testing", "Performance Testing", "Security Validation"],
    deliverables: ["Test Results", "UAT Sign-off", "Go-Live Approval"],
  },
  {
    phase: "Phase 5 – Deploy",
    summary: "Transition the solution into production.",
    activities: ["Production Deployment", "Data Validation", "Hypercare Support", "Project Closure"],
    deliverables: ["Live Environment", "Support Handover", "Project Closure Report"],
  },
] as const;

export const implementationLifecycle = ["Discover", "Design", "Build", "Validate", "Deploy", "Support"] as const;

export const governanceObjectives = [
  { title: "Strategic Oversight", description: "Ensure alignment with Tsebo's strategic objectives." },
  { title: "Risk Management", description: "Identify, assess and mitigate project risks." },
  { title: "Quality Assurance", description: "Ensure all deliverables meet agreed quality standards." },
  { title: "Stakeholder Engagement", description: "Maintain regular communication with project stakeholders." },
  { title: "Delivery Assurance", description: "Monitor progress against agreed milestones and timelines." },
] as const;

export const governanceStructure = [
  {
    title: "Executive Steering Committee",
    description:
      "Senior Tsebo leadership sets strategic direction, approves major decisions and confirms alignment with enterprise priorities. Convenes at stage gates to review progress, risks, budget and readiness for production.",
  },
  {
    title: "Project Sponsor",
    description:
      "Owns business outcomes and champions the initiative across finance, operations and IT. Secures resources, escalates blockers and provides executive sign-off on deliverables, scope changes and go-live approval.",
  },
  {
    title: "Project Manager",
    description:
      "Plans and coordinates delivery across all workstreams, maintaining schedules, RAID logs and stakeholder communication. Reports status to the sponsor and steering committee and drives issue resolution through to closure.",
  },
  {
    title: "Technical Workstream",
    description:
      "Delivers Dynamics integration, Motheo POS setup, API orchestration, infrastructure provisioning and security configuration for Motheo Compliance Layer. Ensures technical readiness, integration testing and performance validation before deployment.",
  },
  {
    title: "Compliance Workstream",
    description:
      "Defines RSL fiscal validation rules, certificate lifecycle controls and regulatory test scenarios. Confirms submissions meet accreditation requirements and supports compliance sign-off ahead of production.",
  },
  {
    title: "Business Workstream",
    description:
      "Aligns finance and operations processes, leads user acceptance, training and change management. Coordinates business readiness, hypercare planning and formal acceptance of the solution at go-live.",
  },
] as const;

export const governanceOrgChart = [
  "Executive Steering Committee",
  "Project Sponsor",
  "Project Manager",
  "Technical Team",
  "Compliance Team",
  "Business Team",
] as const;

export const projectTeam = [
  ["Executive Sponsor", "Executive oversight and governance"],
  ["Project Manager", "Project planning and delivery"],
  ["Enterprise Solution Architect", "Overall solution architecture"],
  ["Dynamics Integration Specialist", "Microsoft Dynamics integration and configuration"],
  ["API Integration Engineer", "API development and orchestration"],
  ["Compliance Consultant", "Revenue Services Lesotho compliance"],
  ["QA & Test Lead", "Testing and quality assurance"],
  ["Training Lead", "User enablement"],
  ["Support Team", "Post-go-live managed services"],
] as const;

export const projectPrinciples = [
  {
    title: "Collaboration",
    description:
      "Joint planning with Tsebo SMEs across business, IT and compliance, with shared ownership of outcomes from discovery through hypercare.",
    inline: true,
  },
  {
    title: "Transparency",
    description:
      "Open reporting on progress, RAID logs, decisions and dependencies via status updates, steering packs and accessible project documentation.",
    inline: true,
  },
  {
    title: "Accountability",
    description:
      "Named owners for every deliverable, milestone and workstream output, with traceable actions, deadlines and clear escalation paths to go-live.",
    inline: true,
  },
  {
    title: "Quality",
    description:
      "Documented standards applied to design, build, testing, UAT and deployment, with formal review gates before each phase is signed off.",
    inline: true,
  },
  {
    title: "Continuous Communication",
    description:
      "Regular status meetings, workshops and steering forums to keep sponsors, stakeholders and delivery teams aligned on priorities and risks.",
    inline: true,
  },
  {
    title: "Regulatory Compliance",
    description:
      "Every design, build and test decision validated against RSL fiscal rules and Tsebo compliance obligations before production sign-off.",
    inline: true,
  },
  {
    title: "Smooth Go-Live Transition",
    description:
      "Controlled cutover planning, rehearsal and hypercare support so Tsebo moves into production with minimal disruption and full operational confidence.",
    inline: true,
  },
] as const;

export const workstreams = [
  {
    title: "Business Workstream",
    items: [
      {
        title: "Requirements",
        description: "Capture fiscal, Dynamics and POS compliance needs with Tsebo SMEs.",
        inline: true,
      },
      {
        title: "Process Alignment",
        description: "Map invoice and billing flows to gateway submission paths.",
        inline: true,
      },
      {
        title: "User Readiness",
        description: "Confirm finance and operations teams are prepared for go-live.",
        inline: true,
      },
    ],
  },
  {
    title: "Technical Workstream",
    items: [
      {
        title: "Dynamics Integration",
        description: "Configure ERP triggers, mappings and error handling.",
        inline: true,
      },
      {
        title: "API Configuration",
        description: "Set up secure gateway connectivity and orchestration rules.",
        inline: true,
      },
      {
        title: "Infrastructure",
        description: "Provision hosting, certificates and monitoring for production.",
        inline: true,
      },
    ],
  },
  {
    title: "Compliance Workstream",
    items: [
      {
        title: "Fiscal Rules",
        description: "Apply RSL validation and tax rules per Lesotho requirements.",
        inline: true,
      },
      {
        title: "Validation",
        description: "Verify QR codes, certificates and submission payloads pre-production.",
        inline: true,
      },
      {
        title: "Certification",
        description: "Complete accreditation tests and regulatory sign-off.",
        inline: true,
      },
    ],
  },
  {
    title: "Training Workstream",
    items: [
      {
        title: "Knowledge Transfer",
        description: "Hand over solution configuration to Tsebo IT and support teams.",
        inline: true,
      },
      {
        title: "Documentation",
        description: "Deliver runbooks, user guides and operational procedures.",
        inline: true,
      },
      {
        title: "User Training",
        description: "Enable finance and service desk users on day-to-day processing.",
        inline: true,
      },
    ],
  },
] as const;

export const successFactors = [
  {
    title: "Strong stakeholder engagement",
    description: "Active sponsorship and SME participation throughout delivery.",
    inline: true,
  },
  {
    title: "Clear communication",
    description: "Transparent status updates, RAID logs and decision tracking.",
    inline: true,
  },
  {
    title: "Early issue identification",
    description: "Proactive risk monitoring with timely escalation and resolution.",
    inline: true,
  },
  {
    title: "Structured testing",
    description: "Phased SIT, integration and UAT before production cutover.",
    inline: true,
  },
  {
    title: "Controlled deployment",
    description: "Governed go-live with rollback plans and hypercare support.",
    inline: true,
  },
] as const;

export const projectTimeline = [
  ["Project Initiation", "Week 1"],
  ["Discovery & Assessment", "Week 1"],
  ["Solution Design", "Week 2"],
  ["Dynamics Integration & Motheo POS Setup", "Week 2–4"],
  ["Integration & Testing", "Week 4–5"],
  ["User Acceptance Testing", "Week 5"],
  ["Training", "Week 5"],
  ["Production Go-Live", "Week 6"],
  ["Hypercare Support", "Week 7"],
] as const;

export const keyMilestones = [
  {
    title: "Project Kick-off",
    description: "Formal start with scope, team, governance and delivery plan confirmed.",
    inline: true,
  },
  {
    title: "Architecture Sign-off",
    description: "Approved solution design for Dynamics, Motheo POS, gateway and security integration.",
    inline: true,
  },
  {
    title: "Dynamics Integration Complete",
    description: "ERP connectivity tested with end-to-end fiscal submission flows.",
    inline: true,
  },
  {
    title: "UAT Complete",
    description: "Business users sign off validated processes and exception handling.",
    inline: true,
  },
  {
    title: "Go-Live",
    description: "Production cutover with live RSL fiscal reporting enabled.",
    inline: true,
  },
  {
    title: "Project Closure",
    description: "Handover complete, documentation delivered and hypercare concluded.",
    inline: true,
  },
] as const;

export const testingActivities = [
  { title: "Unit Testing", description: "Individual components." },
  { title: "Integration Testing", description: "Dynamics, Motheo POS and Gateway integration." },
  { title: "Functional Testing", description: "Business process validation." },
  { title: "Performance Testing", description: "High transaction volumes." },
  { title: "Security Testing", description: "Authentication and encryption validation." },
  { title: "User Acceptance Testing", description: "Business user verification and sign-off." },
] as const;

export const testingPyramid = [
  {
    title: "UAT",
    description: "Business user verification and formal sign-off before go-live.",
  },
  {
    title: "Performance",
    description: "Validates throughput under expected invoice volumes.",
  },
  {
    title: "Integration",
    description: "Confirms Dynamics, Motheo POS and Gateway work together end-to-end.",
  },
  {
    title: "Unit",
    description: "Tests individual components and services in isolation.",
  },
] as const;

export const trainingAudience = [
  { title: "Finance Team", description: "Invoice processing and reporting." },
  { title: "IT Team", description: "System administration." },
  { title: "Compliance Team", description: "Monitoring and exception management." },
  { title: "Management", description: "Reporting and governance." },
] as const;

export const trainingDeliverables = [
  "Training Sessions",
  "Administrator Guides",
  "User Manuals",
  "Standard Operating Procedures",
  "Knowledge Transfer Workshops",
] as const;

export const learningJourney = ["Awareness", "Training", "Practice", "Confidence", "Operational Excellence"] as const;

export const managedServices = [
  { title: "Application Support", description: "Resolution of application-related issues and platform optimisation." },
  { title: "Infrastructure Monitoring", description: "Continuous monitoring of system health, connectivity and performance." },
  { title: "Compliance Monitoring", description: "Monitoring of Revenue Services Lesotho transaction submissions, exceptions and reporting status." },
  { title: "Regulatory Updates", description: "Implementation of future Revenue Services Lesotho regulatory changes and compliance updates." },
  { title: "Performance Optimisation", description: "Ongoing tuning and optimisation to maintain system efficiency and reliability." },
] as const;

export const supportLifecycle = ["Monitor", "Support", "Improve", "Maintain", "Comply"] as const;

export const serviceLevels = [
  ["Critical", "Complete service outage", "2 Hours", "4 Hours"],
  ["High", "Major business functionality affected", "4 Hours", "1 Business Day"],
  ["Medium", "Partial service impact", "1 Business Day", "2 Business Days"],
  ["Low", "General enquiry or enhancement", "2 Business Days", "Agreed Schedule"],
] as const;

export const escalationLevels = [
  "Service Desk",
  "Technical Support",
  "Compliance Specialists",
  "Engineering Team",
  "Executive Oversight",
] as const;

export const supportChannels = [
  "Dedicated support desk and service request portal",
  "Email: services@ibd.co.ls",
  "Phone: +266 62554433",
  "Critical incidents flagged for immediate triage",
] as const;

export const servicePrinciples = [
  {
    title: "Accountability",
    description:
      "Named owners for every incident from logging through resolution and formal closure.",
    inline: true,
  },
  {
    title: "Responsiveness",
    description:
      "Prioritised response aligned to SLA tiers, with critical outages escalated immediately.",
    inline: true,
  },
  {
    title: "Transparency",
    description:
      "Clear status updates, incident tracking and visibility for Tsebo stakeholders throughout.",
    inline: true,
  },
  {
    title: "Continuous Communication",
    description:
      "Regular service reviews, steering updates and proactive notification of material issues.",
    inline: true,
  },
  {
    title: "Customer Success",
    description:
      "Focus on platform availability, compliance continuity and long-term operational outcomes.",
    inline: true,
  },
  {
    title: "Proactive Monitoring",
    description:
      "Continuous platform and compliance monitoring to detect and resolve issues before business impact.",
    inline: true,
  },
  {
    title: "Regulatory Continuity",
    description:
      "RSL submission performance and compliance uptime maintained as core managed service commitments.",
    inline: true,
  },
  {
    title: "Structured Escalation",
    description:
      "Defined escalation paths ensure critical incidents reach the right expertise without delay.",
    inline: true,
  },
] as const;

export const projectRisks = [
  ["Dynamics Integration", "Early architecture validation and integration workshops"],
  ["Data Quality", "Data assessment and validation prior to integration"],
  ["Regulatory Changes", "Ongoing monitoring of RSL requirements"],
  ["User Adoption", "Structured training and change management"],
  ["Connectivity Issues", "Retry mechanisms and offline queue processing"],
  ["Project Delays", "Formal governance and milestone tracking"],
] as const;

export const assessedRiskMatrix = [
  {
    category: "Technical",
    risk: "Integration Complexity",
    severity: "high",
  },
  {
    category: "Data",
    risk: "Data Quality",
    severity: "medium",
  },
  {
    category: "Regulatory",
    risk: "Regulatory Changes",
    severity: "medium",
  },
  {
    category: "Adoption",
    risk: "User Adoption",
    severity: "medium",
  },
  {
    category: "Schedule",
    risk: "Project Delays",
    severity: "medium",
  },
] as const;

export const riskPrinciples = [
  "Early identification",
  "Continuous monitoring",
  "Controlled escalation",
  "Preventative action",
  "Regular stakeholder reporting",
] as const;

export const riskTreatment = ["Identify", "Assess", "Mitigate", "Monitor", "Close"] as const;

export const implementationServicesIncludes = [
  "Solution Design",
  "Enterprise Architecture",
  "Microsoft Dynamics Integration",
  "Motheo POS Deployment",
  "API Configuration",
  "Security Configuration",
  "Testing",
  "User Training",
  "Go-Live Support",
] as const;

export const annualManagedServicesIncludes = [
  "Motheo Compliance Layer — annual platform & compliance management",
  "Motheo POS subscription (cash sales)",
  "Application Support",
  "Regulatory Updates",
  "Performance Optimisation",
] as const;

/** Commercial model aligned to EST-000227 (Alliance-style estimate structure) */
export const commercialEstimate = {
  reference: "EST-000227",
  date: "12 Jul 2026",
  currency: "LSL",
  onceOffTotal: "97,500.00",
  annualTotal: "172,000.00",
  subtotal: "269,500.00",
  vat: "40,425.00",
  vatRate: "15%",
  total: "309,925.00",
} as const;

export const professionalServices = [
  {
    service: "MS Dynamics Integration",
    description:
      "Once-off implementation enabling Microsoft Dynamics F&O invoices to be Lekuka-compliant with fiscal information",
    type: "Once-off",
    amount: "97,500.00",
  },
] as const;

export const annualManagedServicesPricing = [
  {
    service: "Managed Compliance Service",
    description: "Annual Motheo Compliance Layer platform fee and compliance management",
    type: "Annual",
    amount: "126,500.00",
  },
  {
    service: "Motheo POS",
    description: "Annual Motheo POS subscription for cash sale fiscalisation",
    type: "Annual",
    amount: "45,500.00",
  },
] as const;

export const commercialLineItems = [
  ...professionalServices,
  ...annualManagedServicesPricing,
] as const;

/** Slide table — recommended Motheo POS package (EST-000227 items 1, 2, 5) */
export const pricingSummary = [
  ["MS Dynamics Integration (once-off)", "LSL 97,500.00"],
  ["Managed Compliance Service — annual", "LSL 126,500.00"],
  ["Motheo POS — annual subscription", "LSL 45,500.00"],
  ["Sub Total", "LSL 269,500.00"],
  ["VAT (15%)", "LSL 40,425.00"],
  ["Total (Tax Inclusive)", "LSL 309,925.00"],
] as const;

/**
 * Optional Intelipos path from EST-000227 items 3–4 —
 * offered if Tsebo elects to integrate Intelipos (can replace Motheo POS).
 */
export const pricingInteliposAlternative = [
  ["Intelipos Integration & Device Setup (once-off)", "LSL 45,200.00"],
  ["Intelipos Transactions Compliance Management (annual)", "LSL 35,000.00"],
  ["Sub Total", "LSL 80,200.00"],
  ["VAT (15%)", "LSL 12,030.00"],
  ["Total (Tax Inclusive)", "LSL 92,230.00"],
] as const;

export const pricingNotes = [
  `Estimate reference: ${commercialEstimate.reference} dated ${commercialEstimate.date}`,
  "Amounts shown in Lesotho Loti (LSL)",
  "VAT is charged at 15% under Sub Total; Total is tax inclusive",
  "Commercial validity: 30 days from estimate date",
  "Recommended package: Dynamics integration + Motheo Compliance Layer + Motheo POS",
  "Optional: Intelipos integration & device setup plus annual Intelipos compliance — if Tsebo considers Intelipos instead of Motheo POS",
  "Bank Name: Nedbank Lesotho",
  "Account: 11990152022 · Branch Code: 390161",
  "Account Holder: Infinity Business Dynamics Pty Ltd",
  "Terms & Conditions: https://store.zoho.com/ResellerCustomerSignUp.do?id=30346ba7f4d3f077e5a3f0533d91c6a9",
] as const;

export const pricingAnnexureFootnote =
  "Detailed pricing per Estimate EST-000227 (attached)." as const;

export {
  appendices,
  submissionSections,
  primaryContact,
  companyPostalAddress,
  companyProfile,
  bbbeeGapStatement,
  submissionPdfMergeOrder,
} from "@/lib/submission-pack";

export const supplierResponses = [
  ["Motheo Compliance Layer", "Fully Compliant"],
  ["Microsoft Dynamics Integration", "Supported"],
  ["Motheo POS (Cash Sales)", "Included"],
  ["Revenue Services Lesotho Integration", "Supported"],
  ["Lekuka Document Types (5)", "Invoices · Credits · Debits · Receipts · Payouts"],
  ["API Integration", "Supported"],
  ["Digital Certificates", "Supported"],
  ["QR Code Generation", "Supported"],
  ["Managed Support", "Included"],
  ["User Training", "Included"],
  ["Future Regulatory Updates", "Included within the support model"],
] as const;

export const whyInfinityClosing = [
  {
    title: "Revenue Services Lesotho Accredited",
    description:
      "Certified Electronic Billing Solutions provider with direct RSL accreditation — ensuring fiscal invoices, digital certificates and QR codes meet Lesotho regulatory requirements from day one.",
  },
  {
    title: "Enterprise Integration Expertise",
    description:
      "Proven capability connecting Microsoft Dynamics, Motheo POS and compliance platforms through secure APIs — enabling automated invoice submission without disrupting existing finance and operations workflows.",
  },
  {
    title: "Dynamics Capability",
    description:
      "Microsoft Dynamics integration experience across finance and operations — supporting reliable fiscal submission within Tsebo's workplace management landscape.",
  },
  {
    title: "Managed Services",
    description:
      "Ongoing application support, compliance monitoring and preventative maintenance — keeping the platform stable, current with regulatory changes and aligned to agreed SLA commitments.",
  },
  {
    title: "Future-Ready Platform",
    description:
      "ERP-agnostic gateway architecture preserves Motheo and Lekuka investments — future ERP transitions require connector updates only, not a full compliance rebuild.",
  },
] as const;

export const conclusionBenefits = [
  {
    title: "Certified compliance",
    description:
      "RSL-accredited fiscal submission with digital certificates and QR validation meeting Lesotho regulatory requirements.",
    inline: true,
  },
  {
    title: "Enterprise integration",
    description:
      "Seamless Microsoft Dynamics and Motheo POS connectivity — eliminating manual re-keying and duplicate data capture across finance and operations.",
    inline: true,
  },
  {
    title: "Secure API connectivity",
    description:
      "TLS-encrypted, authenticated integration between Tsebo systems, Motheo Compliance Layer and Revenue Services Lesotho.",
    inline: true,
  },
  {
    title: "Real-time monitoring",
    description:
      "Live dashboards and alerts for submission status, failures and compliance exceptions — enabling rapid operational response.",
    inline: true,
  },
  {
    title: "Complete audit traceability",
    description:
      "End-to-end logging of every invoice, certificate and regulatory transaction to support governance, audits and investigations.",
    inline: true,
  },
  {
    title: "Long-term managed support",
    description:
      "Ongoing application support, regulatory updates and SLA-backed service continuity beyond go-live.",
    inline: true,
  },
] as const;

export const closingStatement =
  "We appreciate the opportunity to participate in this engagement and look forward to partnering with Tsebo Solutions Group to deliver a successful implementation." as const;

export const closingQuote = "Practical compliance through Motheo — Dynamics integrated, cash sales covered.";

export const tseboHubUnits = [
  "Facilities",
  "Catering",
  "Cleaning",
  "Security",
  "Remote Sites",
  "Finance",
  "POS Sales",
] as const;

/** @deprecated aliases for earlier export names */
export const barloworldBusinessAreas = tseboBusinessAreas;
export const barloworldHubUnits = tseboHubUnits;
export const sapIntegrationScope = dynamicsIntegrationScope;
export const sapIntegrationServices = dynamicsIntegrationServices;
export const sapArchitectureFlow = dynamicsArchitectureFlow;
export const sapSideCards = dynamicsSideCards;
export const crmIntegrationServices = posIntegrationServices;
export const crmBenefits = posBenefits;
export const crmFlowSteps = posFlowSteps;
export const crmFlow = posFlow;
