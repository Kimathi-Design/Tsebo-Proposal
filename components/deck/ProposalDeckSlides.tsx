"use client";

import { ASSETS } from "@/lib/assets";
import { DeckCoverFooter } from "@/components/deck/DeckCoverFooter";
import { DeckCoverTitle } from "@/components/deck/DeckCoverHero";
import { DeckHeaderBrand, SlideEyebrow } from "@/components/deck/SlideEyebrow";
import { ClosingBackdrop } from "@/components/deck/visuals/ClosingBackdrop";
import {
  BadgeRow,
  CertificateCycleDiagram,
  ComplianceMatrix,
  DashboardMockup,
  EscalationDiagram,
  ExecutiveSummaryVisual,
  FloatingCardsFlow,
  GanttChart,
  HorizontalWorkflow,
  HubSpokeDiagram,
  InvoiceQrMockup,
  LayeredArchitectureDiagram,
  LearningJourneyDiagram,
  OnlineOfflineCompare,
  RadialEngineDiagram,
  RiskHeatMap,
  SideCardRow,
  SplitCompareDiagram,
  SupportLifecycleDiagram,
  TestingPyramidDiagram,
  ValueCardsVisual,
  VerticalFlowDiagram,
  WorkstreamConverge,
} from "@/components/deck/visuals/ProposalDiagrams";
import { IbdFooterLogo } from "@/components/deck/IbdMark";
import {
  DeckClosingQuote,
  DeckSectionedTableOfContents,
} from "@/components/deck/DeckSectionedToc";
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
import {
  appendices,
  architectureLayers,
  architecturePrinciples,
  availableReports,
  tseboBusinessAreas,
  tseboHubUnits,
  businessChallenges,
  certificateLifecycle,
  certificateServices,
  closingQuote,
  conclusionBenefits,
  coreCapabilities,
  posBenefits,
  posFlow,
  posIntegrationServices,
  enterprisePrinciples,
  escalationLevels,
  executiveLetter,
  gatewayIncludes,
  gatewayCapabilities,
  implementationLifecycle,
  implementationPhases,
  implementationServicesIncludes,
  annualManagedServicesIncludes,
  keyBusinessBenefits,
  keyMilestones,
  learningJourney,
  managedServices,
  motheoCoreServices,
  motheoEnterpriseBenefits,
  motheoRadialNodes,
  onlineProcessing,
  offlineProcessing,
  pricingNotes,
  pricingSummary,
  projectPrinciples,
  projectRisks,
  projectTeam,
  projectTimeline,
  qrCallouts,
  qrFeatures,
  recoveryWorkflow,
  resilienceFeatures,
  riskPrinciples,
  riskTreatment,
  rslAccreditationFlow,
  dynamicsArchitectureFlow,
  dynamicsIntegrationScope,
  dynamicsIntegrationServices,
  dynamicsSideCards,
  serviceLevels,
  servicePrinciples,
  solutionBusinessBenefits,
  solutionComponents,
  solutionEcosystemFlow,
  solutionFloatingCards,
  strategicOutcomes,
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
  governanceObjectives,
  governanceOrgChart,
  governanceStructure,
  securityBadges,
  securityControls,
  securityFlow,
  securityPrinciples,
} from "@/lib/deck-proposal-content";
import {
  CORE_SERVICE_AREA_ICONS,
  GOVERNANCE_OBJECTIVE_ICONS,
  MOTHEO_COMPONENT_ICONS,
  STRATEGIC_OUTCOME_ICONS,
  WHY_INFINITY_CARD_ICONS,
  deckIcon,
  mapDeckIcons,
} from "@/components/deck/deck-icons";
import { renderProposalSlidesExtended } from "@/components/deck/ProposalDeckSlidesExtended";

export function renderProposalSlide(index: number) {
  if (index >= 5) {
    return renderProposalSlidesExtended(index);
  }

  switch (index) {
    case 0:
      return (
        <DeckSlideFrame index={0} layout="full" backgroundImage={ASSETS.cover} hideFooter>
          <div className="deck-cover-content">
            <div className="deck-cover-lower">
              <div className="deck-cover-title-stack">
                <DeckHeaderBrand />
                <DeckCoverTitle />
              </div>
              <DeckCoverFooter />
            </div>
          </div>
        </DeckSlideFrame>
      );

    case 1:
      return (
        <DeckSlideFrame index={1}>
          <SlideEyebrow index={1} />
          <DeckTitle>Letter of Submission</DeckTitle>
          <div className="space-y-4">
            <div className="deck-type-body">
              <p>
                <span className="font-medium text-[color:var(--gms-text)]">To:</span>{" "}
                {executiveLetter.to}
              </p>
              <p className="mt-1">{executiveLetter.toOrg}</p>
              <p>{executiveLetter.toLocation}</p>
            </div>
            <p className="deck-type-body">
              {executiveLetter.salutation}
            </p>
            {executiveLetter.paragraphs.slice(0, 5).map((paragraph) => (
              <DeckBody key={paragraph}>{paragraph}</DeckBody>
            ))}
            <p className="deck-type-body text-deck-accent">The implementation includes:</p>
            <DeckBulletList compact items={[...gatewayIncludes]} />
            {executiveLetter.paragraphs.slice(5).map((paragraph) => (
              <DeckBody key={paragraph}>{paragraph}</DeckBody>
            ))}
          </div>
          <div
            className="mt-8 shrink-0 border-t border-[color:var(--gms-border)]"
            aria-hidden
          />
          <div className="h-40 shrink-0" aria-hidden />
          <div className="shrink-0 flex items-end justify-between gap-8">
            <div className="min-w-0">
              <DeckBody>{executiveLetter.closing}</DeckBody>
              <p className="deck-type-body mt-3 font-semibold">
                {executiveLetter.signatureOrg}
              </p>
              <p className="deck-type-body mt-1 text-[color:var(--gms-text-muted)]">
                {executiveLetter.signatureTagline}
              </p>
            </div>
            <IbdFooterLogo className="h-10 shrink-0 translate-y-[30px] self-end" />
          </div>
        </DeckSlideFrame>
      );

    case 2:
      return (
        <DeckSlideFrame index={2}>
          <SlideEyebrow index={2} />
          <div className="deck-toc-header flex w-full shrink-0 items-end justify-between">
            <p className="deck-title-lg">Proposal Outline</p>
            <span className="deck-title-lg">Page</span>
          </div>
          <DeckSectionedTableOfContents />
        </DeckSlideFrame>
      );

    case 3:
      return (
        <DeckSlideFrame index={3}>
          <SlideEyebrow index={3} />
          <DeckSlideBodySplit visual={<ExecutiveSummaryVisual />}>
            <DeckTitle highlight="Intelligent Integration">
              Enabling Motheo Compliance Through
            </DeckTitle>
            <DeckBody>
              Tsebo Solutions Group delivers Integrated Workplace Management Solutions — facilities,
              catering, cleaning, security, remote sites and related services — generating both
              enterprise invoices and cash-sale receipts.
            </DeckBody>
            <DeckBody>
              The introduction of Revenue Services Lesotho&apos;s Electronic Billing System (EBS)
              requires qualifying fiscal transactions to be validated, digitally signed and reported
              through the Lekuka platform in accordance with statutory requirements.
            </DeckBody>
            <DeckBody>
              For Tsebo, this is a straightforward arrangement: Motheo Compliance Layer integrates with
              Microsoft Dynamics, and Motheo POS covers cash sale transactions — without disrupting
              day-to-day operations.
            </DeckBody>
            <DeckBody>
              Infinity Business Dynamics proposes Motheo Compliance Layer, powered by the Motheo
              Compliance Engine, as the certified path between Tsebo&apos;s business systems and the
              Revenue Services Lesotho Lekuka platform.
            </DeckBody>
            <DeckBody>
              The solution automates fiscal validation, transaction reporting, QR code generation,
              certificate management and regulatory monitoring while preserving operational continuity.
            </DeckBody>
            <DeckSectionLabel>Expected Business Outcomes</DeckSectionLabel>
            <DeckBulletList
              items={[
                "Automated fiscal reporting",
                "Microsoft Dynamics integration",
                "Motheo POS for cash sales",
                "Reduced compliance risk",
                "Improved operational efficiency",
                "Enhanced audit readiness",
              ]}
            />
            <DeckBody>
              The proposed solution enables Tsebo Solutions Group to meet statutory obligations while
              maintaining secure, reliable compliance and business continuity.
            </DeckBody>
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 4:
      return (
        <DeckSlideFrame index={4}>
          <SlideEyebrow index={4} />
          <DeckTitle highlight="Delivering Value Beyond Compliance">
            Strategic Business Outcomes
          </DeckTitle>
          <DeckBody>
            The implementation of the Motheo Compliance Layer provides measurable business value
            across finance, operations, governance and customer service.
          </DeckBody>
          <DeckBody>Compliance is only one outcome of the proposed solution.</DeckBody>
          <DeckBody>
            The platform also improves operational efficiency, strengthens governance and provides
            a scalable foundation for future digital transformation initiatives.
          </DeckBody>
          <DeckSlideBodySplit
            visual={
              <DeckOutcomeCardList
                items={strategicOutcomes.map((item) => ({
                  title: item.title,
                  description: item.description,
                }))}
                icons={STRATEGIC_OUTCOME_ICONS}
              />
            }
          >
            <DeckSectionLabel>Key Business Benefits</DeckSectionLabel>
            <DeckBulletList items={[...keyBusinessBenefits]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    default:
      return renderProposalSlidesExtended(index);
  }
}
