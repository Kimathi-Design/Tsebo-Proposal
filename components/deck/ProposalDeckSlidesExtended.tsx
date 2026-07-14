"use client";

import type { ReactElement } from "react";
import type { SubmissionDocument, SubmissionSection } from "@/lib/submission-pack";
import { ClosingBackdrop } from "@/components/deck/visuals/ClosingBackdrop";
import { IbdContactCard } from "@/components/deck/IbdContactCard";
import {
  CertificateCycleDiagram,
  ComplianceMatrix,
  DashboardMockup,
  GovernanceFrameworkVisual,
  SlaEscalationVisual,
  DynamicsIntegrationVisual,
  SolutionOverviewVisual,
  GanttChart,
  TransactionWorkflowVisual,
  HubSpokeDiagram,
  ImplementationPhasesVisual,
  InvoiceQrMockup,
  LayeredArchitectureDiagram,
  LearningJourneyDiagram,
  OnlineOfflineCompare,
  MotheoEngineStripVisual,
  RiskManagementVisual,
  SecurityArchitectureVisual,
  SplitCompareDiagram,
  SupportLifecycleDiagram,
  TestingPyramidDiagram,
  ValueCardsVisual,
  VerticalFlowDiagram,
  WhyInfinityValueVisual,
  WorkstreamConverge,
} from "@/components/deck/visuals/ProposalDiagrams";
import {
  DeckBody,
  DeckBulletList,
  DeckFeatureGrid,
  DeckOutcomeCardList,
  DeckSectionLabel,
  DeckSlideFrame,
  DeckSlideBodySplit,
  DeckTable,
  DeckTitle,
} from "@/components/deck/DeckSlideFrame";
import { CRM_FLOW_ICONS } from "@/components/deck/deck-icons";
import { SlideEyebrow } from "@/components/deck/SlideEyebrow";
import {
  aboutInfinityIntro,
  companyCredentials,
  lekukaDocumentTypes,
  submissionSections,
  architectureLayers,
  architecturePrinciples,
  availableReports,
  reportingBusinessBenefits,
  tseboBusinessAreas,
  tseboHubUnits,
  businessChallenges,
  certificateLifecycle,
  certificateServices,
  closingStatement,
  closingQuote,
  conclusionBenefits,
  coreCapabilities,
  posBenefits,
  posFlowSteps,
  posIntegrationServices,
  enterprisePrinciples,
  gatewayCapabilities,
  gatewayIncludes,
  implementationLifecycle,
  implementationPhases,
  implementationServicesIncludes,
  annualManagedServicesIncludes,
  learningJourney,
  managedServices,
  motheoCoreServices,
  motheoEnterpriseBenefits,
  motheoRadialNodes,
  onlineProcessing,
  offlineProcessing,
  pricingInteliposAlternative,
  pricingNotes,
  pricingSummary,
  projectPrinciples,
  projectRisks,
  projectTeam,
  projectTimeline,
  qrCallouts,
  qrFeatures,
  recoveryWorkflow,
  recoveryObjectives,
  resilienceFeatures,
  resilienceBusinessBenefits,
  riskPrinciples,
  assessedRiskMatrix,
  riskTreatment,
  rslAccreditationFlowSteps,
  rslAccreditationIntro,
  dynamicsArchitectureFlow,
  dynamicsIntegrationScope,
  dynamicsIntegrationServices,
  dynamicsSideCards,
  servicePrinciples,
  supportChannels,
  solutionComponents,
  solutionFloatingCards,
  solutionOverviewFlow,
  successFactors,
  supplierResponses,
  supportLifecycle,
  testingActivities,
  testingPyramid,
  trainingAudience,
  trainingDeliverables,
  transactionLifecycleSteps,
  transactionWorkflow,
  whyChooseInfinity,
  whyInfinityClosing,
  workstreams,
  apiBusinessBenefits,
  apiFeatures,
  apiGatewayFlow,
  apiServices,
  dashboardModules,
  dashboardBenefits,
  dashboardSampleMetrics,
  governanceObjectives,
  securityPrinciples,
  securityBusinessBenefits,
  keyMilestones,
} from "@/lib/deck-proposal-content";
import {
  APPENDIX_ICONS,
  API_GATEWAY_FLOW_ICONS,
  ARCHITECTURE_LAYER_ICONS,
  BUSINESS_CHALLENGE_ICONS,
  BWE_HUB_UNIT_ICONS,
  CORE_SERVICE_AREA_ICONS,
  GATEWAY_CAPABILITY_ICONS,
  GOVERNANCE_OBJECTIVE_ICONS,
  MOTHEO_COMPONENT_ICONS,
  RSL_ACCREDITATION_FLOW_ICONS,
  GANTT_PHASE_ICONS,
  PROJECT_TEAM_ICONS,
  RECOVERY_WORKFLOW_ICONS,
  SUPPORT_SERVICE_ICONS,
  TESTING_ACTIVITY_ICONS,
  TRAINING_AUDIENCE_ICONS,
  WHY_INFINITY_CARD_ICONS,
  WHY_INFINITY_VALUE_ICONS,
  DeckIconTile,
  deckIcon,
  mapDeckIcons,
} from "@/components/deck/deck-icons";

function AppendixGrid({ items, iconOffset = 0 }: { items: readonly SubmissionDocument[]; iconOffset?: number }) {
  return (
    <div className="deck-appendix-list mt-4 grid min-h-0 flex-1 grid-cols-2 gap-2 content-start overflow-auto">
      {items.map((app, i) => {
        const file = app.file;
        const content = (
          <>
            <DeckIconTile icon={APPENDIX_ICONS[(iconOffset + i) % APPENDIX_ICONS.length]!} size="compact" />
            <div className="min-w-0 flex-1">
              <p className="deck-type-premium-label">{app.id}</p>
              <p className="deck-type-card-title">{app.title}</p>
            </div>
            {file ? (
              <span className="deck-type-premium-label shrink-0 text-deck-accent">Attached</span>
            ) : (
              <span className="deck-type-premium-label shrink-0 text-[color:var(--gms-text-muted)]">
                In proposal
              </span>
            )}
          </>
        );

        return file ? (
          <a
            key={app.id}
            href={`/appendices/${file}`}
            target="_blank"
            rel="noopener noreferrer"
            className="deck-appendix-list__item deck-appendix-list__link gms-card flex items-center gap-3 rounded-2xl p-3"
          >
            {content}
          </a>
        ) : (
          <div
            key={app.id}
            className="deck-appendix-list__item gms-card flex items-center gap-3 rounded-2xl p-3"
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}

function SubmissionAppendixList({
  section,
  iconOffset,
}: {
  section: SubmissionSection;
  iconOffset: number;
}) {
  return <AppendixGrid items={section.items} iconOffset={iconOffset} />;
}

export function renderProposalSlidesExtended(index: number): ReactElement {
  switch (index) {
    case 5:
      return (
        <DeckSlideFrame index={5}>
          <SlideEyebrow index={5} />
          <DeckSlideBodySplit
            visual={
              <HubSpokeDiagram
                center="Tsebo"
                nodes={tseboHubUnits}
                gateway="Motheo Compliance Layer"
                icons={BWE_HUB_UNIT_ICONS}
              />
            }
          >
            <DeckTitle highlight="Mission-Critical Business Operations">
              Supporting
            </DeckTitle>
            <DeckBody>
              Tsebo Solutions Group is a trusted leader in Integrated Workplace Management
              Solutions, partnering with clients across corporate, healthcare, education,
              mining, industrial and event environments.
            </DeckBody>
            <DeckBody>
              Its operations span facilities management, catering, cleaning and hygiene, security,
              remote site solutions, energy and water management, and related workplace services.
            </DeckBody>
            <DeckBody>
              These business functions generate invoices and cash-sale receipts that require accurate
              fiscal reporting and continuous compliance with Revenue Services Lesotho regulations.
            </DeckBody>
            <DeckBody>
              Motheo Compliance Layer and Motheo POS have therefore been selected as a practical
              compliance stack that supports Tsebo&apos;s Microsoft Dynamics landscape and cash sale
              channels without unnecessary complexity.
            </DeckBody>
            <DeckSectionLabel>Key Business Areas</DeckSectionLabel>
            <DeckBulletList items={[...tseboBusinessAreas]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 6:
      return (
        <DeckSlideFrame index={6}>
          <SlideEyebrow index={6} />
          <DeckSlideBodySplit
            visual={
              <SplitCompareDiagram
                leftTitle="Business Challenges"
                rightTitle="Motheo Capabilities"
                leftItems={businessChallenges}
                rightItems={gatewayCapabilities}
                leftIcons={BUSINESS_CHALLENGE_ICONS}
                rightIcons={GATEWAY_CAPABILITY_ICONS}
              />
            }
          >
            <DeckTitle highlight="Compliance Requirements">Addressing</DeckTitle>
            <DeckBody>
              Tsebo must meet Lekuka fiscal obligations without disrupting Microsoft Dynamics
              operations or cash-sale receipting.
            </DeckBody>
            <DeckBody>
              Motheo Compliance Layer connects Dynamics invoices to Lekuka, while Motheo POS
              covers cash sales — a straightforward stack without a heavyweight custom build.
            </DeckBody>
            <DeckBody>
              Infinity Business Dynamics delivers both on the accredited Motheo Compliance Engine,
              with monitoring, support and regulatory updates included.
            </DeckBody>
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 7:
      return (
        <DeckSlideFrame index={7}>
          <SlideEyebrow index={7} />
          <DeckSlideBodySplit
            visual={
              <div className="deck-capability-grid flex min-h-0 flex-1 flex-col gap-4">
                <DeckSectionLabel>Core Capabilities</DeckSectionLabel>
                <DeckFeatureGrid
                  uniform
                  variant="capability"
                  items={mapDeckIcons([...coreCapabilities], CORE_SERVICE_AREA_ICONS)}
                />
              </div>
            }
          >
            <DeckTitle highlight="Harnessing the Power of Technology">
              About Infinity Business Dynamics
            </DeckTitle>
            <div className="deck-slide-intro-copy">
              {aboutInfinityIntro.map((paragraph) => (
                <DeckBody key={paragraph}>{paragraph}</DeckBody>
              ))}
            </div>
            <DeckSectionLabel>Company Credentials</DeckSectionLabel>
            <DeckBulletList compact items={[...companyCredentials]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 8:
      return (
        <DeckSlideFrame index={8}>
          <SlideEyebrow index={8} />
          <DeckTitle highlight="Technology Partner for Motheo Compliance">
            Your
          </DeckTitle>
          <DeckBody>
            Tsebo needs an accredited Motheo partner who can integrate Microsoft Dynamics, deploy
            Motheo POS for cash sales, and support Lekuka compliance ongoing.
          </DeckBody>
          <DeckBody>
            Infinity Business Dynamics combines RSL accreditation with Dynamics and Motheo POS
            delivery — a practical fit for Tsebo&apos;s operational model.
          </DeckBody>
          <DeckSectionLabel>Why Choose Infinity</DeckSectionLabel>
          <DeckFeatureGrid
            variant="premium"
            items={mapDeckIcons([...whyChooseInfinity], WHY_INFINITY_CARD_ICONS)}
          />
        </DeckSlideFrame>
      );

    case 9:
      return (
        <DeckSlideFrame index={9}>
          <SlideEyebrow index={9} />
          <DeckSlideBodySplit
            layout="visual-bottom"
            visual={
              <VerticalFlowDiagram
                items={rslAccreditationFlowSteps}
                icons={RSL_ACCREDITATION_FLOW_ICONS}
                compact
                centerContent
              />
            }
          >
            <DeckTitle highlight="Compliance. Enterprise Delivery.">
              Accredited
            </DeckTitle>
            {rslAccreditationIntro.map((paragraph) => (
              <DeckBody key={paragraph.slice(0, 48)}>{paragraph}</DeckBody>
            ))}
            <DeckSectionLabel>Solution Includes</DeckSectionLabel>
            <DeckBulletList compact items={[...gatewayIncludes]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 10:
      return (
        <DeckSlideFrame index={10}>
          <SlideEyebrow index={10} />
          <DeckSlideBodySplit
            layout="visual-bottom"
            visual={
              <SolutionOverviewVisual
                flow={solutionOverviewFlow}
                sideCards={solutionFloatingCards}
              />
            }
          >
            <DeckTitle highlight="Practical Motheo Compliance Stack">
              Solution Overview — A
            </DeckTitle>
            <DeckBody>
              Infinity Business Dynamics proposes Motheo Compliance Layer — a straightforward
              compliance stack that integrates Microsoft Dynamics and Motheo POS with the Revenue
              Services Lesotho Electronic Billing System (Lekuka).
            </DeckBody>
            <DeckBody>
              Rather than modifying Tsebo&apos;s Microsoft Dynamics environment, Motheo Compliance
              Layer manages regulatory communication independently while Motheo POS fiscalises cash
              sale receipts at the till — preserving existing business processes.
            </DeckBody>
            <DeckBody>
              This practical approach reduces implementation risk, simplifies future regulatory
              updates and keeps the architecture lean for Tsebo&apos;s operational model.
            </DeckBody>
            <DeckSectionLabel>Core Solution Components</DeckSectionLabel>
            <DeckBulletList
              compact
              items={solutionComponents.map(
                (component) => `${component.title} — ${component.description}`,
              )}
            />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 11:
      return (
        <DeckSlideFrame index={11}>
          <SlideEyebrow index={11} />
          <DeckSlideBodySplit
            visual={
              <LayeredArchitectureDiagram
                layers={architectureLayers}
                icons={ARCHITECTURE_LAYER_ICONS}
              />
            }
          >
            <DeckTitle highlight="Enterprise Integration">Intelligent</DeckTitle>
            <DeckBody>
              The proposed architecture separates operational systems from regulatory compliance
              by introducing a dedicated integration layer.
            </DeckBody>
            <DeckBody>
              This design enables Tsebo Solutions Group to continue operating Microsoft Dynamics and
              Motheo POS processes while the Motheo Compliance Layer independently manages fiscal
              reporting obligations.
            </DeckBody>
            <DeckBody>
              The architecture has been designed around five enterprise principles:
            </DeckBody>
            <DeckFeatureGrid
              uniform
              items={mapDeckIcons([...enterprisePrinciples], GOVERNANCE_OBJECTIVE_ICONS)}
            />
            <DeckSectionLabel>Architecture Principles</DeckSectionLabel>
            <DeckBulletList items={[...architecturePrinciples]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 12:
      return (
        <DeckSlideFrame index={12}>
          <SlideEyebrow index={12} />
          <DeckSlideBodySplit
            layout="visual-bottom"
            visual={
              <DynamicsIntegrationVisual flow={dynamicsArchitectureFlow} sideCards={dynamicsSideCards} />
            }
          >
            <DeckTitle highlight="Integration with Existing Business Processes">
              Seamless
            </DeckTitle>
            <DeckBody>
              Motheo Compliance Layer integrates with Tsebo Solutions Group&apos;s Microsoft Dynamics
              environment for account and enterprise billing — without disrupting existing operational
              workflows.
            </DeckBody>
            <DeckBody>
              Dynamics remains the authoritative source of transactional and financial information while
              the Motheo Compliance Layer manages regulatory reporting activities independently.
            </DeckBody>
            <DeckBody>
              This is a straightforward integration: Dynamics posts qualifying fiscal documents; Motheo
              validates, fiscalises and submits to Lekuka automatically.
            </DeckBody>
            <DeckSectionLabel>Dynamics Integration Scope</DeckSectionLabel>
            <DeckBulletList compact columns={2} items={[...dynamicsIntegrationScope]} />
            <DeckSectionLabel>Integration Services</DeckSectionLabel>
            <DeckBody>The gateway provides:</DeckBody>
            <DeckBulletList compact columns={2} items={[...dynamicsIntegrationServices]} />
            <DeckSectionLabel>Expected Outcome</DeckSectionLabel>
            <DeckBody>
              Every qualifying transaction generated within Dynamics is automatically validated,
              fiscalised and submitted to Revenue Services Lesotho without requiring manual
              intervention.
            </DeckBody>
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 13:
      return (
        <DeckSlideFrame index={13}>
          <SlideEyebrow index={13} />
          <DeckSlideBodySplit
            layout="visual-bottom"
            visual={
              <div className="crm-integration-visual flex h-full min-h-0 flex-1 flex-col">
                <VerticalFlowDiagram
                  items={posFlowSteps}
                  icons={CRM_FLOW_ICONS}
                  compact
                  centerContent
                />
              </div>
            }
          >
            <DeckTitle highlight="Cash Sale Compliance">Motheo POS for</DeckTitle>
            <DeckBody>
              Tsebo also requires point-of-sale capability for cash sale transactions. Motheo POS
              provides a RSL-aligned till experience that issues fiscalised receipts at the moment of sale.
            </DeckBody>
            <DeckBody>
              Every Motheo POS cash sale is submitted through the same Motheo Compliance Engine used for
              Dynamics invoices — delivering a single compliance stack for account billing and cash sales.
            </DeckBody>
            <DeckBody>
              This creates a unified fiscal path across Microsoft Dynamics and Motheo POS channels.
            </DeckBody>
            <DeckSectionLabel>Motheo POS Services</DeckSectionLabel>
            <DeckBulletList items={[...posIntegrationServices]} />
            <DeckSectionLabel>Benefits</DeckSectionLabel>
            <DeckBulletList items={[...posBenefits]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 14:
      return (
        <DeckSlideFrame index={14}>
          <SlideEyebrow index={14} />
          <DeckSlideBodySplit
            visual={
              <div className="api-gateway-visual flex h-full min-h-0 flex-1 flex-col">
                <VerticalFlowDiagram
                  items={apiGatewayFlow}
                  icons={API_GATEWAY_FLOW_ICONS}
                  compact
                  centerContent
                />
              </div>
            }
          >
            <DeckTitle highlight="API Architecture">Enterprise</DeckTitle>
            <DeckBody>
              The Motheo Compliance Layer provides a secure API integration framework that
              manages communication between enterprise systems and the Revenue Services Lesotho
              Electronic Billing System.
            </DeckBody>
            <DeckBody>
              The gateway abstracts regulatory APIs from internal applications, reducing
              integration complexity and simplifying future upgrades.
            </DeckBody>
            <DeckSectionLabel>API Services</DeckSectionLabel>
            <DeckBody>
              The solution supports secure integration with the Revenue Services Lesotho
              platform, including services for:
            </DeckBody>
            <DeckBulletList compact items={[...apiServices]} />
            <DeckSectionLabel>API Features</DeckSectionLabel>
            <DeckBulletList compact items={[...apiFeatures]} />
            <DeckSectionLabel>Business Benefits</DeckSectionLabel>
            <DeckBulletList items={[...apiBusinessBenefits]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 15:
      return (
        <DeckSlideFrame index={15}>
          <SlideEyebrow index={15} />
          <DeckSlideBodySplit
            visual={<MotheoEngineStripVisual nodes={motheoRadialNodes} />}
          >
            <DeckTitle highlight="Fiscal Processing Platform">Certified</DeckTitle>
            <DeckBody>
              At the core of the proposed solution is the Motheo Compliance Engine, a Revenue
              Services Lesotho accredited fiscal processing platform.
            </DeckBody>
            <DeckBody>
              The engine provides all mandatory compliance services required for electronic
              billing while the Motheo Compliance Layer delivers enterprise integration,
              orchestration and monitoring capabilities.
            </DeckBody>
            <DeckSectionLabel>Core Services</DeckSectionLabel>
            <DeckFeatureGrid
              uniform
              items={mapDeckIcons([...motheoCoreServices], MOTHEO_COMPONENT_ICONS)}
            />
            <DeckSectionLabel>Enterprise Benefits</DeckSectionLabel>
            <DeckBulletList items={[...motheoEnterpriseBenefits]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 16:
      return (
        <DeckSlideFrame index={16}>
          <SlideEyebrow index={16} />
          <DeckSlideBodySplit visual={<SecurityArchitectureVisual />}>
            <DeckTitle highlight="Security by Design">Enterprise</DeckTitle>
            <DeckBody>
              Security is fundamental to the design of the Motheo Compliance Layer. The
              solution has been architected using industry best practices to protect
              business-critical information while ensuring secure communication between
              Tsebo Solutions Group, Motheo Compliance Layer and Revenue Services Lesotho.
            </DeckBody>
            <DeckBody>
              The platform adopts a defence-in-depth approach, ensuring that every layer of the
              solution incorporates appropriate security controls to protect confidentiality,
              integrity and availability.
            </DeckBody>
            <DeckSectionLabel>Security Principles</DeckSectionLabel>
            <DeckFeatureGrid
              uniform
              items={mapDeckIcons([...securityPrinciples], GOVERNANCE_OBJECTIVE_ICONS)}
            />
            <DeckSectionLabel>Business Benefits</DeckSectionLabel>
            <DeckBulletList items={[...securityBusinessBenefits]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 17:
      return (
        <DeckSlideFrame index={17}>
          <SlideEyebrow index={17} />
          <DeckSlideBodySplit
            visual={<TransactionWorkflowVisual steps={transactionWorkflow} />}
          >
            <DeckTitle highlight="Fiscal Transaction Processing">End-to-End</DeckTitle>
            <DeckBody>
              Every qualifying transaction generated within Tsebo&apos;s business systems
              follows a controlled processing lifecycle designed to ensure compliance,
              traceability and operational reliability.
            </DeckBody>
            <DeckBody>
              Motheo Compliance Layer orchestrates each stage of the transaction before
              submission to the Revenue Services Lesotho Electronic Billing System.
            </DeckBody>
            <DeckSectionLabel>Lekuka Document Types</DeckSectionLabel>
            <DeckBulletList compact items={[...lekukaDocumentTypes]} />
            <DeckSectionLabel>Transaction Lifecycle</DeckSectionLabel>
            {transactionLifecycleSteps.map((step) => (
              <DeckBody key={step.step}>
                <span className="font-semibold">Step {step.step.replace(/^0/, "")}</span>{" "}
                <span className="font-semibold">{step.title}</span> — {step.description}
              </DeckBody>
            ))}
            <DeckSectionLabel>Business Outcomes</DeckSectionLabel>
            <DeckBulletList
              items={[
                "Automated processing",
                "Complete traceability",
                "Reduced manual intervention",
                "Improved reporting accuracy",
              ]}
            />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 18:
      return (
        <DeckSlideFrame index={18}>
          <SlideEyebrow index={18} />
          <DeckSlideBodySplit
            visual={
              <OnlineOfflineCompare
                onlineItems={onlineProcessing.map((item) => item.title)}
                offlineItems={offlineProcessing.map((item) => item.title)}
              />
            }
          >
            <DeckTitle highlight="Continuous Business Operations">Ensuring</DeckTitle>
            <DeckBody>
              Business operations should not stop because an external regulatory platform becomes
              temporarily unavailable.
            </DeckBody>
            <DeckBody>
              The Motheo Compliance Layer has been designed to support resilient processing
              by managing both online and offline transaction scenarios.
            </DeckBody>
            <DeckBody>
              When connectivity to Revenue Services Lesotho is available, transactions are
              submitted immediately.
            </DeckBody>
            <DeckBody>
              Where connectivity is temporarily unavailable, transactions are securely queued and
              automatically resubmitted once connectivity is restored.
            </DeckBody>
            <DeckSectionLabel>Online Processing</DeckSectionLabel>
            <DeckBulletList compact items={[...onlineProcessing]} />
            <DeckSectionLabel>Offline Processing</DeckSectionLabel>
            <DeckBulletList compact items={[...offlineProcessing]} />
            <DeckSectionLabel>Business Benefits</DeckSectionLabel>
            <DeckBulletList
              items={[
                "Business continuity",
                "Reduced downtime",
                "No manual resubmission",
                "Reliable transaction delivery",
              ]}
            />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 19:
      return (
        <DeckSlideFrame index={19}>
          <SlideEyebrow index={19} />
          <DeckSlideBodySplit
            visual={<CertificateCycleDiagram steps={certificateLifecycle} />}
          >
            <DeckTitle highlight="Identity & Trust">Secure</DeckTitle>
            <DeckBody>
              Digital certificates establish trusted communication between Tsebo Solutions Group
              and Revenue Services Lesotho.
            </DeckBody>
            <DeckBody>
              Motheo Compliance Layer manages the complete certificate lifecycle, reducing
              administrative effort while ensuring secure communication throughout the platform.
            </DeckBody>
            <DeckSectionLabel>Certificate Lifecycle</DeckSectionLabel>
            <DeckBulletList items={[...certificateLifecycle]} />
            <DeckSectionLabel>Certificate Services</DeckSectionLabel>
            <DeckBulletList items={[...certificateServices]} />
            <DeckSectionLabel>Business Benefits</DeckSectionLabel>
            <DeckBulletList
              items={[
                "Trusted communications",
                "Simplified administration",
                "Reduced operational risk",
                "Continuous compliance",
              ]}
            />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 20:
      return (
        <DeckSlideFrame index={20}>
          <SlideEyebrow index={20} />
          <DeckSlideBodySplit visual={<InvoiceQrMockup callouts={qrCallouts} />}>
            <DeckTitle highlight="Fiscal QR Generation">Automated</DeckTitle>
            <DeckBody>
              Every qualifying fiscal document submitted to Revenue Services Lesotho requires a
              compliant QR code that enables transaction verification.
            </DeckBody>
            <DeckBody>
              The Motheo Compliance Layer automates the generation, validation and management
              of QR codes for all qualifying fiscal transactions.
            </DeckBody>
            <DeckBody>
              This ensures consistency, compliance and improved customer confidence.
            </DeckBody>
            <DeckSectionLabel>QR Features</DeckSectionLabel>
            <DeckBulletList items={[...qrFeatures]} />
            <DeckSectionLabel>Business Benefits</DeckSectionLabel>
            <DeckBulletList
              items={[
                "Regulatory compliance",
                "Faster processing",
                "Improved accuracy",
                "Enhanced customer trust",
              ]}
            />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 21:
      return (
        <DeckSlideFrame index={21}>
          <SlideEyebrow index={21} />
          <DeckSlideBodySplit
            layout="visual-bottom"
            visual={
              <DashboardMockup modules={dashboardModules} values={dashboardSampleMetrics} />
            }
          >
            <DeckTitle highlight="Operational Visibility">Real-Time</DeckTitle>
            <DeckBody>
              The Motheo Compliance Layer provides operational dashboards that enable
              finance, compliance and IT teams to monitor transaction processing in real time.
            </DeckBody>
            <DeckBody>
              Dashboards provide visibility into submission status, processing performance and
              operational health.
            </DeckBody>
            <DeckSectionLabel>Dashboard Modules</DeckSectionLabel>
            <DeckBulletList compact items={[...dashboardModules]} />
            <DeckSectionLabel>Benefits</DeckSectionLabel>
            <DeckBulletList compact items={[...dashboardBenefits]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 22:
      return (
        <DeckSlideFrame index={22}>
          <SlideEyebrow index={22} />
          <DeckSlideBodySplit
            visual={
              <div className="recovery-workflow-visual flex h-full min-h-0 flex-1 flex-col">
                <VerticalFlowDiagram
                  items={recoveryWorkflow}
                  icons={RECOVERY_WORKFLOW_ICONS}
                  compact
                  centerContent
                />
              </div>
            }
          >
            <DeckTitle highlight="Operational Resilience">Building</DeckTitle>
            <DeckBody>
              Motheo Compliance Layer has been designed to support continuous operation under
              changing business and technical conditions.
            </DeckBody>
            <DeckBody>
              Resilience features reduce the impact of system interruptions while ensuring
              compliance obligations continue to be met.
            </DeckBody>
            <DeckSectionLabel>Resilience Features</DeckSectionLabel>
            <DeckBulletList compact items={[...resilienceFeatures]} />
            <DeckSectionLabel>Recovery Objectives</DeckSectionLabel>
            <DeckBulletList compact items={[...recoveryObjectives]} />
            <DeckSectionLabel>Business Benefits</DeckSectionLabel>
            <DeckBulletList compact items={[...resilienceBusinessBenefits]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 23:
      return (
        <DeckSlideFrame index={23}>
          <SlideEyebrow index={23} />
          <DeckSlideBodySplit
            layout="visual-bottom"
            visual={<DashboardMockup modules={availableReports} variant="reports" />}
          >
            <DeckTitle highlight="Compliance Data into Business Intelligence">
              Turning
            </DeckTitle>
            <DeckBody>
              Beyond regulatory reporting, the Motheo Compliance Layer provides rich
              operational and compliance analytics that support better decision-making across
              finance, compliance and IT.
            </DeckBody>
            <DeckBody>
              Dashboards and reports provide insights into transaction volumes, reporting
              performance, exception trends and system health.
            </DeckBody>
            <DeckSectionLabel>Available Reports</DeckSectionLabel>
            <DeckBulletList compact items={[...availableReports]} />
            <DeckSectionLabel>Executive Insights</DeckSectionLabel>
            <DeckBody>
              Management gains visibility into compliance performance through interactive
              dashboards and scheduled reports.
            </DeckBody>
            <DeckBody>
              These insights support governance, operational planning and continuous improvement
              initiatives.
            </DeckBody>
            <DeckSectionLabel>Business Benefits</DeckSectionLabel>
            <DeckBulletList compact items={[...reportingBusinessBenefits]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 24:
      return (
        <DeckSlideFrame index={24}>
          <SlideEyebrow index={24} />
          <DeckSlideBodySplit
            layout="horizontal"
            visual={<ImplementationPhasesVisual phases={implementationPhases} />}
          >
            <DeckTitle highlight="Delivery Framework">A Proven</DeckTitle>
            <DeckBody>
              Infinity Business Dynamics follows a structured implementation methodology designed
              to minimise project risk, ensure regulatory compliance and deliver a seamless
              transition into production.
            </DeckBody>
            <DeckBody>
              Our methodology combines enterprise project management principles with systems
              integration best practices. The approach focuses on minimising disruption while
              ensuring Motheo Compliance Layer and Motheo POS are fully integrated, tested and accepted before
              production deployment.
            </DeckBody>
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 25:
      return (
        <DeckSlideFrame index={25}>
          <SlideEyebrow index={25} />
          <DeckTitle highlight="Governance for Successful Delivery">Structured</DeckTitle>
          <DeckSlideBodySplit
            layout="horizontal"
            className="deck-slide-body-split--governance"
            visual={<GovernanceFrameworkVisual />}
          >
            <DeckBody>
              Effective governance is essential to the successful delivery of enterprise
              technology projects.
            </DeckBody>
            <DeckBody>
              Infinity Business Dynamics will establish a structured governance framework that
              provides executive oversight, project control and clear accountability throughout
              the implementation lifecycle.
            </DeckBody>
            <DeckSectionLabel>Governance Objectives</DeckSectionLabel>
            <DeckFeatureGrid
              uniform
              columns={1}
              items={mapDeckIcons([...governanceObjectives], GOVERNANCE_OBJECTIVE_ICONS)}
            />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 26:
      return (
        <DeckSlideFrame index={26}>
          <SlideEyebrow index={26} />
          <DeckTitle highlight="Professionals Delivering Enterprise Solutions">
            Experienced
          </DeckTitle>
          <DeckBody>
            Infinity Business Dynamics has assembled a multidisciplinary team with expertise in
            enterprise architecture, Dynamics integration, regulatory compliance and managed
            services.
          </DeckBody>
          <DeckBody>
            The project team combines technical capability with practical implementation
            experience to ensure successful project delivery.
          </DeckBody>
          <DeckSectionLabel>Proposed Project Team</DeckSectionLabel>
          <DeckTable
            headers={["Role", "Responsibility"]}
            rows={projectTeam.map((row) => [row[0], row[1]])}
            compact
            numbered
            rowIcons={PROJECT_TEAM_ICONS}
          />
          <DeckSectionLabel>Project Principles</DeckSectionLabel>
          <DeckBulletList compact items={[...projectPrinciples]} />
        </DeckSlideFrame>
      );

    case 27:
      return (
        <DeckSlideFrame index={27}>
          <SlideEyebrow index={27} />
          <DeckSlideBodySplit
            layout="visual-bottom"
            className="deck-slide-body-split--workstreams"
            proseClassName="flex-none shrink-0"
            visualClassName="min-h-0 flex-1 shrink"
            visual={
              <WorkstreamConverge
                workstreams={workstreams}
                target="Production Go-Live"
              />
            }
          >
            <DeckTitle highlight="with Confidence">Delivering</DeckTitle>
            <DeckBody>
              The implementation will be delivered through coordinated workstreams that ensure
              business readiness, technical readiness and regulatory compliance before production
              deployment.
            </DeckBody>
            <DeckBody>
              Each workstream operates independently while remaining fully aligned through central
              project governance.
            </DeckBody>
            <DeckSectionLabel>Workstreams</DeckSectionLabel>
            {workstreams.map((ws) => (
              <div key={ws.title}>
                <DeckBody>
                  <span className="font-semibold">{ws.title}</span>
                </DeckBody>
                <DeckBulletList compact items={[...ws.items]} />
              </div>
            ))}
            <DeckSectionLabel>Success Factors</DeckSectionLabel>
            <DeckBulletList compact items={[...successFactors]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 28:
      return (
        <DeckSlideFrame index={28}>
          <SlideEyebrow index={28} />
          <DeckSlideBodySplit visual={<GanttChart phases={projectTimeline} />}>
            <DeckTitle highlight="Implementation Schedule">Proposed</DeckTitle>
            <DeckBody>
              The project is expected to be completed within approximately 6–7 weeks, subject to
              timely access to systems, stakeholder availability and approval cycles.
            </DeckBody>
            <DeckTable
              headers={["Phase", "Duration"]}
              rows={projectTimeline.map((row) => [row[0], row[1]])}
              compact
              numbered
              rowIcons={GANTT_PHASE_ICONS}
            />
            <DeckSectionLabel>Key Milestones</DeckSectionLabel>
            <DeckBulletList compact items={[...keyMilestones]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 29:
      return (
        <DeckSlideFrame index={29}>
          <SlideEyebrow index={29} />
          <DeckSlideBodySplit visual={<TestingPyramidDiagram levels={testingPyramid} />}>
            <DeckTitle highlight="Production Readiness">Ensuring</DeckTitle>
            <DeckBody>
              Comprehensive testing is essential to ensure that the solution performs reliably
              within Tsebo&apos;s enterprise environment.
            </DeckBody>
            <DeckBody>
              Infinity Business Dynamics applies a structured testing approach that validates
              functionality, integration, performance and regulatory compliance before production
              deployment.
            </DeckBody>
            <DeckSectionLabel>Testing Activities</DeckSectionLabel>
            <DeckFeatureGrid items={mapDeckIcons([...testingActivities], TESTING_ACTIVITY_ICONS)} />
            <DeckSectionLabel>Expected Outcomes</DeckSectionLabel>
            <DeckBulletList
              items={[
                "Production readiness",
                "Reduced implementation risk",
                "Regulatory compliance",
                "Improved solution quality",
              ]}
            />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 30:
      return (
        <DeckSlideFrame index={30}>
          <SlideEyebrow index={30} />
          <DeckSlideBodySplit
            visual={<LearningJourneyDiagram steps={learningJourney} />}
          >
            <DeckTitle highlight="Users for Long-Term Success">Empowering</DeckTitle>
            <DeckBody>
              Technology is only successful when users are confident in adopting it.
            </DeckBody>
            <DeckBody>
              Infinity Business Dynamics provides structured training and change management
              services to ensure that Tsebo personnel are fully prepared to operate and
              support Motheo Compliance Layer and Motheo POS.
            </DeckBody>
            <DeckSectionLabel>Training Audience</DeckSectionLabel>
            <DeckFeatureGrid
              items={mapDeckIcons([...trainingAudience], TRAINING_AUDIENCE_ICONS)}
            />
            <DeckSectionLabel>Deliverables</DeckSectionLabel>
            <DeckBulletList items={[...trainingDeliverables]} />
            <DeckSectionLabel>Business Benefits</DeckSectionLabel>
            <DeckBulletList
              items={[
                "Increased adoption",
                "Reduced support dependency",
                "Improved operational readiness",
              ]}
            />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 31:
      return (
        <DeckSlideFrame index={31}>
          <SlideEyebrow index={31} />
          <DeckSlideBodySplit
            visual={<SupportLifecycleDiagram steps={supportLifecycle} />}
          >
            <DeckTitle highlight="Operational Support">Long-Term</DeckTitle>
            <DeckBody>
              Infinity Business Dynamics is committed to supporting Tsebo Solutions Group beyond
              implementation by providing proactive managed services, technical support and
              continuous compliance monitoring.
            </DeckBody>
            <DeckBody>
              Our support model ensures that Motheo Compliance Layer and Motheo POS remain available,
              secure and compliant throughout its operational lifecycle.
            </DeckBody>
            <DeckBody>
              Rather than simply responding to incidents, our approach focuses on proactive
              monitoring, preventative maintenance and continuous improvement.
            </DeckBody>
            <DeckSectionLabel>Managed Services Include</DeckSectionLabel>
            <DeckFeatureGrid
              items={mapDeckIcons([...managedServices], SUPPORT_SERVICE_ICONS)}
            />
            <DeckSectionLabel>Support Benefits</DeckSectionLabel>
            <DeckBulletList
              items={[
                "Continuous compliance",
                "Reduced operational risk",
                "Improved system availability",
                "Faster issue resolution",
                "Long-term platform stability",
              ]}
            />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 32:
      return (
        <DeckSlideFrame index={32}>
          <SlideEyebrow index={32} />
          <DeckTitle highlight="Responsive Enterprise Support">Delivering</DeckTitle>
          <DeckSlideBodySplit
            layout="horizontal"
            className="deck-slide-body-split--sla-escalation"
            visual={<SlaEscalationVisual />}
          >
            <DeckBody>
              Infinity Business Dynamics provides structured Service Level Agreements designed to
              minimise operational disruption and ensure rapid response to incidents.
            </DeckBody>
            <DeckBody>
              Support requests are prioritised according to business impact, ensuring that
              critical services receive immediate attention while escalation paths keep
              stakeholders informed at every level.
            </DeckBody>
            <DeckSectionLabel>Support Channels</DeckSectionLabel>
            <DeckBulletList compact items={[...supportChannels]} />
            <DeckSectionLabel>Service Principles</DeckSectionLabel>
            <DeckBulletList compact items={[...servicePrinciples]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 33:
      return (
        <DeckSlideFrame index={33}>
          <SlideEyebrow index={33} />
          <DeckSlideBodySplit
            visual={
              <RiskManagementVisual
                assessments={assessedRiskMatrix}
                treatmentSteps={riskTreatment}
              />
            }
          >
            <DeckTitle highlight="with Confidence">Delivering</DeckTitle>
            <DeckBody>
              Enterprise implementations require proactive risk identification and mitigation.
            </DeckBody>
            <DeckBody>
              Infinity Business Dynamics adopts a structured risk management framework throughout
              the project lifecycle to ensure delivery objectives are achieved while minimising
              business disruption.
            </DeckBody>
            <DeckSectionLabel>Key Project Risks</DeckSectionLabel>
            <DeckTable
              headers={["Risk", "Mitigation Strategy"]}
              rows={projectRisks.map((row) => [row[0], row[1]])}
              compact
            />
            <DeckSectionLabel>Risk Management Principles</DeckSectionLabel>
            <DeckBulletList items={[...riskPrinciples]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 34:
      return (
        <DeckSlideFrame index={34}>
          <SlideEyebrow index={34} />
          <DeckTitle highlight="Summary">Investment</DeckTitle>
          <DeckBody>
            Infinity Business Dynamics proposes a transparent commercial model that combines
            enterprise implementation, systems integration and ongoing managed services.
          </DeckBody>
          <DeckBody>
            Commercials are per Estimate <span className="font-semibold">EST-000227</span> (12 Jul
            2026). The recommended package integrates Microsoft Dynamics via Motheo Compliance Layer
            and supplies Motheo POS for cash sale transactions.
          </DeckBody>
          <DeckSectionLabel>Implementation Services</DeckSectionLabel>
          <DeckBody>Includes</DeckBody>
          <DeckBulletList items={[...implementationServicesIncludes]} />
          <DeckSectionLabel>Annual Managed Services</DeckSectionLabel>
          <DeckBody>Includes:</DeckBody>
          <DeckBulletList items={[...annualManagedServicesIncludes]} />
          <DeckSectionLabel>Pricing Summary — Recommended Package</DeckSectionLabel>
          <DeckTable
            headers={["Item", "Amount"]}
            rows={pricingSummary.map((row) => [row[0], row[1]])}
            compact
            featured
          />
          <DeckSectionLabel>
            Optional — If Tsebo Considers Integrating Intelipos
          </DeckSectionLabel>
          <DeckBody>
            Per EST-000227 items 3–4. Offered as an optional alternative to Motheo POS for cash-sale
            fiscalisation — Integration service fee for Intelipos and device setup, plus annual
            Intelipos transactions compliance management.
          </DeckBody>
          <DeckTable
            headers={["Item", "Amount"]}
            rows={pricingInteliposAlternative.map((row) => [row[0], row[1]])}
            compact
          />
          <DeckSectionLabel>Pricing Notes</DeckSectionLabel>
          <DeckBulletList items={[...pricingNotes]} />
        </DeckSlideFrame>
      );

    case 35:
      return (
        <DeckSlideFrame index={35}>
          <SlideEyebrow index={35} />
          <DeckSlideBodySplit visual={<ComplianceMatrix items={supplierResponses} />}>
            <DeckTitle highlight="Requirements Matrix">
              Response to Tsebo
            </DeckTitle>
            <DeckBody>
              Infinity Business Dynamics confirms that Motheo Compliance Layer and Motheo POS
              satisfy the technical, functional and support requirements for Tsebo Solutions Group.
            </DeckBody>
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 36:
      return (
        <DeckSlideFrame index={36}>
          <SlideEyebrow index={36} />
          <DeckSlideBodySplit
            visual={
              <WhyInfinityValueVisual
                items={[...whyInfinityClosing]}
                icons={WHY_INFINITY_VALUE_ICONS}
              />
            }
          >
            <DeckTitle highlight="Enterprise Technology Partner">A Trusted</DeckTitle>
            <DeckBody>
              Tsebo Solutions Group requires a technology partner capable of delivering more than
              software.
            </DeckBody>
            <DeckBody>
              The selected partner must understand enterprise architecture, Dynamics integration,
              regulatory compliance and long-term operational support.
            </DeckBody>
            <DeckBody>
              Infinity Business Dynamics combines these capabilities into a single, integrated
              service offering.
            </DeckBody>
            <DeckSectionLabel>Our Commitment</DeckSectionLabel>
            <DeckBody>
              Infinity Business Dynamics is committed to delivering a solution that enables
              Tsebo Solutions Group to achieve regulatory compliance while improving operational
              efficiency, governance and business resilience.
            </DeckBody>
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 37:
      return (
        <DeckSlideFrame index={37} showParticles>
          <SlideEyebrow index={37} />
          <DeckTitle highlight="Future-Ready Compliance Platform">
            Building a
          </DeckTitle>
          <ClosingBackdrop>
            <DeckBody>
              Implementing Motheo Compliance Layer is a practical compliance step that also
              strengthens governance and day-to-day fiscal reliability.
            </DeckBody>
            <DeckBody>
              It represents an opportunity to strengthen governance, improve operational
              efficiency and establish a scalable integration platform that supports future digital
              transformation.
            </DeckBody>
            <DeckBody>
              Infinity Business Dynamics proposes a secure, resilient and enterprise-grade
              solution that integrates seamlessly with Microsoft Dynamics, Motheo POS and the Revenue Services
              Lesotho Electronic Billing System.
            </DeckBody>
            <DeckBody>
              The proposed architecture provides Tsebo Solutions Group with a secure, accredited
              compliance platform delivering the following enterprise capabilities:
            </DeckBody>
            <DeckBulletList compact items={[...conclusionBenefits]} />
            <DeckSectionLabel>Closing Statement</DeckSectionLabel>
            <DeckBody>{closingStatement}</DeckBody>
            <p className="closing-backdrop__quote">{closingQuote}</p>
            <div className="pt-6">
              <IbdContactCard />
            </div>
          </ClosingBackdrop>
        </DeckSlideFrame>
      );

    case 38:
      return (
        <DeckSlideFrame index={38}>
          <SlideEyebrow index={38} />
          <DeckTitle highlight="of Proposal">Acceptance</DeckTitle>
          <DeckBody>
            The undersigned acknowledge receipt of this proposal and confirm acceptance of its
            contents, subject to the execution of a formal agreement.
          </DeckBody>
          <div className="deck-signature-grid mt-6">
            <div className="space-y-8">
              <DeckSectionLabel>FOR TSEBO SOLUTIONS GROUP</DeckSectionLabel>
              <div className="deck-signature-fields">
                {["Name", "Position", "Signature", "Date"].map((field) => (
                  <div key={`tsebo-${field}`}>
                    <p className="deck-signature-field__label">{field}</p>
                    <div
                      className={`deck-signature-field__line${
                        field === "Signature" ? " deck-signature-field__line--signature" : ""
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <DeckSectionLabel>FOR INFINITY BUSINESS DYNAMICS (PTY) LTD</DeckSectionLabel>
              <div className="deck-signature-fields">
                {["Name", "Position", "Signature", "Date"].map((field) => (
                  <div key={`ibd-${field}`}>
                    <p className="deck-signature-field__label">{field}</p>
                    <div
                      className={`deck-signature-field__line${
                        field === "Signature" ? " deck-signature-field__line--signature" : ""
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DeckSlideFrame>
      );

    case 39:
      return (
        <DeckSlideFrame index={39}>
          <SlideEyebrow index={39} />
          <DeckTitle highlight="Supporting Documentation">Appendices A–F</DeckTitle>
          <DeckBody>
            Solution, integration and commercial appendices for Motheo Compliance Layer and Motheo
            POS. Attached PDFs are included in the downloadable proposal pack.
          </DeckBody>
          <SubmissionAppendixList section={submissionSections[0]!} iconOffset={0} />
        </DeckSlideFrame>
      );

    case 40:
      return (
        <DeckSlideFrame index={40}>
          <SlideEyebrow index={40} />
          <DeckTitle highlight="Supporting Documentation">Appendices G–L</DeckTitle>
          <DeckBody>
            Infinity Business Dynamics company and compliance documentation accompanying this
            proposal.
          </DeckBody>
          <SubmissionAppendixList
            section={submissionSections[1]!}
            iconOffset={submissionSections[0]!.items.length}
          />
        </DeckSlideFrame>
      );

    default:
      return (
        <DeckSlideFrame index={index}>
          <SlideEyebrow index={index} />
          <DeckTitle>Slide {index + 1}</DeckTitle>
          <DeckBody>Content pending.</DeckBody>
        </DeckSlideFrame>
      );
  }
}
