"use client";

import type { ReactElement } from "react";
import { ClosingBackdrop } from "@/components/deck/visuals/ClosingBackdrop";
import {
  CertificateCycleDiagram,
  ComplianceMatrix,
  DashboardMockup,
  EscalationDiagram,
  SapIntegrationVisual,
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
  SplitCompareDiagram,
  SupportLifecycleDiagram,
  TestingPyramidDiagram,
  ValueCardsVisual,
  VerticalFlowDiagram,
  WorkstreamConverge,
} from "@/components/deck/visuals/ProposalDiagrams";
import {
  DeckClosingQuote,
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
import { CRM_FLOW_ICONS } from "@/components/deck/deck-icons";
import { SlideEyebrow } from "@/components/deck/SlideEyebrow";
import {
  aboutInfinityIntro,
  appendices,
  architectureLayers,
  architecturePrinciples,
  availableReports,
  barloworldBusinessAreas,
  barloworldHubUnits,
  businessChallenges,
  certificateLifecycle,
  certificateServices,
  closingQuote,
  conclusionBenefits,
  coreCapabilities,
  crmBenefits,
  crmFlowSteps,
  crmIntegrationServices,
  enterprisePrinciples,
  escalationLevels,
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
  rslAccreditationFlowSteps,
  rslAccreditationIntro,
  sapArchitectureFlow,
  sapIntegrationScope,
  sapIntegrationServices,
  sapSideCards,
  serviceLevels,
  servicePrinciples,
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
  dashboardSampleMetrics,
  governanceObjectives,
  governanceStructure,
  securityControls,
  securityPrinciples,
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

export function renderProposalSlidesExtended(index: number): ReactElement {
  switch (index) {
    case 5:
      return (
        <DeckSlideFrame index={5}>
          <SlideEyebrow index={5} />
          <DeckSlideBodySplit
            visual={
              <HubSpokeDiagram
                center="Barloworld Equipment"
                nodes={barloworldHubUnits}
                gateway="Infinity Compliance Gateway"
                icons={BWE_HUB_UNIT_ICONS}
              />
            }
          >
            <DeckTitle highlight="Mission-Critical Business Operations">
              Supporting
            </DeckTitle>
            <DeckBody>
              Barloworld Equipment is a leading supplier of Caterpillar equipment, power
              systems and material handling solutions serving customers across mining,
              construction, infrastructure and industrial sectors.
            </DeckBody>
            <DeckBody>
              Its operations encompass equipment sales, equipment rental, aftermarket parts
              distribution, workshop services, field services and customer support.
            </DeckBody>
            <DeckBody>
              These business functions generate high volumes of financial transactions that
              require accurate fiscal reporting and continuous compliance with Revenue Services
              Lesotho regulations.
            </DeckBody>
            <DeckBody>
              The proposed Enterprise Compliance Gateway has therefore been designed not merely
              as a compliance tool, but as an enterprise integration platform that supports
              Barloworld&apos;s operational model.
            </DeckBody>
            <DeckSectionLabel>Key Business Areas</DeckSectionLabel>
            <DeckBulletList items={[...barloworldBusinessAreas]} />
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
                rightTitle="Gateway Capabilities"
                leftItems={businessChallenges}
                rightItems={gatewayCapabilities}
                leftIcons={BUSINESS_CHALLENGE_ICONS}
                rightIcons={GATEWAY_CAPABILITY_ICONS}
              />
            }
          >
            <DeckTitle highlight="Enterprise Compliance Complexity">Addressing</DeckTitle>
            <DeckBody>
              Enterprise organisations operate complex technology environments where regulatory
              compliance must be achieved without disrupting existing business operations.
            </DeckBody>
            <DeckBody>
              For Barloworld Equipment, implementing an Electronic Billing System introduces
              several operational and technical challenges that require a secure, scalable and
              resilient solution.
            </DeckBody>
            <DeckBody>
              The Infinity Compliance Gateway has been specifically designed to address these
              challenges while preserving operational continuity and ensuring long-term
              compliance.
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
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 8:
      return (
        <DeckSlideFrame index={8}>
          <SlideEyebrow index={8} />
          <DeckTitle highlight="Technology Partner for Enterprise Compliance">
            Your
          </DeckTitle>
          <DeckBody>Barloworld Equipment requires more than a software vendor.</DeckBody>
          <DeckBody>
            It requires a strategic technology partner capable of designing, implementing and
            supporting an enterprise compliance platform that integrates seamlessly with
            existing business systems.
          </DeckBody>
          <DeckBody>
            Infinity Business Dynamics combines accredited compliance technology with enterprise
            integration expertise to deliver a future-ready solution.
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
              />
            }
          >
            <DeckTitle highlight="Compliance. Enterprise Delivery.">
              Accredited
            </DeckTitle>
            {rslAccreditationIntro.map((paragraph) => (
              <DeckBody key={paragraph.slice(0, 48)}>{paragraph}</DeckBody>
            ))}
            <DeckSectionLabel>Enterprise Compliance Gateway Includes</DeckSectionLabel>
            <DeckBulletList compact columns={2} items={[...gatewayIncludes]} />
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
            <DeckTitle highlight="Secure Enterprise Compliance Platform">
              Solution Overview — A
            </DeckTitle>
            <DeckBody>
              Infinity Business Dynamics proposes the Infinity Compliance Gateway, a secure
              middleware platform designed specifically to integrate enterprise business
              applications with the Revenue Services Lesotho Electronic Billing System (Lekuka).
            </DeckBody>
            <DeckBody>
              Rather than modifying Barloworld Equipment&apos;s core SAP ERP and CRM environments,
              the proposed architecture introduces a dedicated compliance gateway that manages
              all regulatory communication independently while preserving existing business
              processes.
            </DeckBody>
            <DeckBody>
              This approach significantly reduces implementation risk, simplifies future
              regulatory updates and provides a scalable architecture capable of supporting
              future enterprise growth.
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
              This design enables Barloworld Equipment to continue operating existing ERP and CRM
              processes while the Compliance Gateway independently manages fiscal reporting
              obligations.
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
              <SapIntegrationVisual flow={sapArchitectureFlow} sideCards={sapSideCards} />
            }
          >
            <DeckTitle highlight="Integration with Existing Business Processes">
              Seamless
            </DeckTitle>
            <DeckBody>
              The proposed solution has been designed to integrate directly with Barloworld
              Equipment&apos;s SAP ERP environment without disrupting existing operational workflows.
            </DeckBody>
            <DeckBody>
              SAP remains the authoritative source of transactional and financial information while
              the Compliance Gateway manages regulatory reporting activities independently.
            </DeckBody>
            <DeckBody>
              This approach reduces implementation complexity and minimises operational risk.
            </DeckBody>
            <DeckSectionLabel>SAP Integration Scope</DeckSectionLabel>
            <DeckBulletList compact columns={2} items={[...sapIntegrationScope]} />
            <DeckSectionLabel>Integration Services</DeckSectionLabel>
            <DeckBody>The gateway provides:</DeckBody>
            <DeckBulletList compact columns={2} items={[...sapIntegrationServices]} />
            <DeckSectionLabel>Expected Outcome</DeckSectionLabel>
            <DeckBody>
              Every qualifying transaction generated within SAP is automatically validated,
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
              <VerticalFlowDiagram items={crmFlowSteps} icons={CRM_FLOW_ICONS} compact />
            }
          >
            <DeckTitle highlight="Compliance Beyond ERP">Extending</DeckTitle>
            <DeckBody>
              Barloworld Equipment&apos;s CRM environment plays a critical role in customer
              engagement, sales activities and service management.
            </DeckBody>
            <DeckBody>
              The proposed solution enables CRM-generated billing events to be integrated into
              the Compliance Gateway, ensuring that all qualifying fiscal transactions follow a
              consistent reporting process.
            </DeckBody>
            <DeckBody>
              This creates a unified compliance architecture across enterprise applications.
            </DeckBody>
            <DeckSectionLabel>CRM Integration Services</DeckSectionLabel>
            <DeckBulletList items={[...crmIntegrationServices]} />
            <DeckSectionLabel>Benefits</DeckSectionLabel>
            <DeckBulletList items={[...crmBenefits]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 14:
      return (
        <DeckSlideFrame index={14}>
          <SlideEyebrow index={14} />
          <DeckSlideBodySplit
            visual={
              <VerticalFlowDiagram
                items={apiGatewayFlow}
                icons={API_GATEWAY_FLOW_ICONS}
                compact
              />
            }
          >
            <DeckTitle highlight="API Architecture">Enterprise</DeckTitle>
            <DeckBody>
              The Infinity Compliance Gateway provides a secure API integration framework that
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
            <DeckBulletList items={[...apiServices]} />
            <DeckSectionLabel>API Features</DeckSectionLabel>
            <DeckBulletList items={[...apiFeatures]} />
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
              billing while the Infinity Compliance Gateway delivers enterprise integration,
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
          <DeckTitle highlight="Security by Design">Enterprise</DeckTitle>
          <DeckBody>
            Security is fundamental to the design of the Infinity Compliance Gateway. The
            solution has been architected using industry best practices to protect
            business-critical information while ensuring secure communication between
            Barloworld Equipment, the Compliance Gateway and Revenue Services Lesotho.
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
          <DeckSectionLabel>Security Controls</DeckSectionLabel>
          <DeckBulletList items={[...securityControls]} />
          <DeckSectionLabel>Business Benefits</DeckSectionLabel>
          <DeckBulletList
            items={[
              "Secure enterprise communications",
              "Reduced cyber risk",
              "Compliance with regulatory security requirements",
              "Improved governance",
              "Stronger audit evidence",
            ]}
          />
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
              Every qualifying transaction generated within Barloworld&apos;s business systems
              follows a controlled processing lifecycle designed to ensure compliance,
              traceability and operational reliability.
            </DeckBody>
            <DeckBody>
              The Compliance Gateway orchestrates each stage of the transaction before
              submission to the Revenue Services Lesotho Electronic Billing System.
            </DeckBody>
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
                onlineItems={onlineProcessing}
                offlineItems={offlineProcessing}
              />
            }
          >
            <DeckTitle highlight="Continuous Business Operations">Ensuring</DeckTitle>
            <DeckBody>
              Business operations should not stop because an external regulatory platform becomes
              temporarily unavailable.
            </DeckBody>
            <DeckBody>
              The Infinity Compliance Gateway has been designed to support resilient processing
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
            <DeckBulletList items={[...onlineProcessing]} />
            <DeckSectionLabel>Offline Processing</DeckSectionLabel>
            <DeckBulletList items={[...offlineProcessing]} />
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
              Digital certificates establish trusted communication between Barloworld Equipment
              and Revenue Services Lesotho.
            </DeckBody>
            <DeckBody>
              The Compliance Gateway manages the complete certificate lifecycle, reducing
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
              The Infinity Compliance Gateway automates the generation, validation and management
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
              The Infinity Compliance Gateway provides operational dashboards that enable
              finance, compliance and IT teams to monitor transaction processing in real time.
            </DeckBody>
            <DeckBody>
              Dashboards provide visibility into submission status, processing performance and
              operational health.
            </DeckBody>
            <DeckSectionLabel>Dashboard Modules</DeckSectionLabel>
            <DeckBulletList items={[...dashboardModules]} />
            <DeckSectionLabel>Benefits</DeckSectionLabel>
            <DeckBulletList
              items={[
                "Proactive monitoring",
                "Faster issue resolution",
                "Improved governance",
                "Better operational insights",
              ]}
            />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 22:
      return (
        <DeckSlideFrame index={22}>
          <SlideEyebrow index={22} />
          <DeckSlideBodySplit
            visual={
              <VerticalFlowDiagram
                items={recoveryWorkflow}
                icons={RECOVERY_WORKFLOW_ICONS}
                compact
              />
            }
          >
            <DeckTitle highlight="Operational Resilience">Building</DeckTitle>
            <DeckBody>
              The Compliance Gateway has been designed to support continuous operation under
              changing business and technical conditions.
            </DeckBody>
            <DeckBody>
              Resilience features reduce the impact of system interruptions while ensuring
              compliance obligations continue to be met.
            </DeckBody>
            <DeckSectionLabel>Resilience Features</DeckSectionLabel>
            <DeckBulletList items={[...resilienceFeatures]} />
            <DeckSectionLabel>Recovery Objectives</DeckSectionLabel>
            <DeckBulletList
              items={[
                "Minimise downtime",
                "Prevent transaction loss",
                "Restore processing quickly",
                "Maintain compliance",
              ]}
            />
            <DeckSectionLabel>Business Benefits</DeckSectionLabel>
            <DeckBulletList
              items={[
                "Increased reliability",
                "Reduced operational risk",
                "Continuous compliance",
                "Business continuity",
              ]}
            />
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
              Beyond regulatory reporting, the Infinity Compliance Gateway provides rich
              operational and compliance analytics that support better decision-making across
              finance, compliance and IT.
            </DeckBody>
            <DeckBody>
              Dashboards and reports provide insights into transaction volumes, reporting
              performance, exception trends and system health.
            </DeckBody>
            <DeckSectionLabel>Available Reports</DeckSectionLabel>
            <DeckBulletList items={[...availableReports]} />
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
            <DeckBulletList
              items={[
                "Better decision-making",
                "Improved governance",
                "Enhanced visibility",
                "Performance optimisation",
              ]}
            />
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
              ensuring the Compliance Gateway is fully integrated, tested and accepted before
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
          <DeckBody>
            Effective governance is essential to the successful delivery of enterprise
            technology projects.
          </DeckBody>
          <DeckBody>
            Infinity Business Dynamics will establish a structured governance framework that
            provides executive oversight, project control and clear accountability throughout
            the implementation lifecycle.
          </DeckBody>
          <DeckBody>
            This framework ensures that decisions are made efficiently, risks are actively
            managed and stakeholders remain informed at every stage of the project.
          </DeckBody>
          <DeckSectionLabel>Governance Objectives</DeckSectionLabel>
          <DeckFeatureGrid
            uniform
            items={mapDeckIcons([...governanceObjectives], GOVERNANCE_OBJECTIVE_ICONS)}
          />
          <DeckSectionLabel>Governance Structure</DeckSectionLabel>
          {governanceStructure.map((item) => (
            <DeckBody key={item.title}>
              <span className="font-semibold">{item.title}</span>
              <br />
              {item.description}
            </DeckBody>
          ))}
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
            enterprise architecture, SAP integration, regulatory compliance and managed
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
            <DeckBulletList items={[...successFactors]} />
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
              The project is expected to be completed within an estimated 8–10 weeks, subject to
              timely access to systems, stakeholder availability and approval cycles.
            </DeckBody>
            <DeckTable
              headers={["Phase", "Duration"]}
              rows={projectTimeline.map((row) => [row[0], row[1]])}
              compact
            />
            <DeckSectionLabel>Key Milestones</DeckSectionLabel>
            <DeckBulletList items={[...keyMilestones]} />
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
              within Barloworld&apos;s enterprise environment.
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
              services to ensure that Barloworld personnel are fully prepared to operate and
              support the Enterprise Compliance Gateway.
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
              Infinity Business Dynamics is committed to supporting Barloworld Equipment beyond
              implementation by providing proactive managed services, technical support and
              continuous compliance monitoring.
            </DeckBody>
            <DeckBody>
              Our support model ensures that the Enterprise Compliance Gateway remains available,
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
          <DeckSlideBodySplit visual={<EscalationDiagram levels={escalationLevels} />}>
            <DeckTitle highlight="Responsive Enterprise Support">Delivering</DeckTitle>
            <DeckBody>
              Infinity Business Dynamics provides structured Service Level Agreements designed to
              minimise operational disruption and ensure rapid response to incidents.
            </DeckBody>
            <DeckBody>
              Support requests are prioritised according to business impact, ensuring that
              critical services receive immediate attention.
            </DeckBody>
            <DeckSectionLabel>Service Levels</DeckSectionLabel>
            <DeckTable
              headers={["Priority", "Description", "Response", "Target Resolution"]}
              rows={serviceLevels.map((row) => [...row])}
              compact
            />
            <DeckSectionLabel>Escalation Model</DeckSectionLabel>
            <DeckBody>Level 1 — Service Desk</DeckBody>
            <DeckBody>Level 2 — Technical Support</DeckBody>
            <DeckBody>Level 3 — Compliance Specialists</DeckBody>
            <DeckBody>Level 4 — Engineering Team</DeckBody>
            <DeckBody>Executive Oversight</DeckBody>
            <DeckSectionLabel>Service Principles</DeckSectionLabel>
            <DeckBulletList items={[...servicePrinciples]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 33:
      return (
        <DeckSlideFrame index={33}>
          <SlideEyebrow index={33} />
          <DeckSlideBodySplit
            visual={<RiskManagementVisual treatmentSteps={riskTreatment} />}
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
            The pricing structure has been designed to provide predictable investment while
            ensuring long-term operational sustainability.
          </DeckBody>
          <DeckSectionLabel>Implementation Services</DeckSectionLabel>
          <DeckBody>Includes</DeckBody>
          <DeckBulletList items={[...implementationServicesIncludes]} />
          <DeckSectionLabel>Annual Managed Services</DeckSectionLabel>
          <DeckBody>Includes:</DeckBody>
          <DeckBulletList items={[...annualManagedServicesIncludes]} />
          <DeckSectionLabel>Pricing Summary</DeckSectionLabel>
          <DeckTable
            headers={["Item", "Amount"]}
            rows={pricingSummary.map((row) => [row[0], row[1]])}
            compact
            featured
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
            <DeckTitle highlight="Barloworld Equipment Requirements">
              Response to
            </DeckTitle>
            <DeckBody>
              Infinity Business Dynamics confirms that the proposed Enterprise Compliance Gateway
              satisfies the technical, functional and support requirements outlined in the Request
              for Quotation.
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
              <DeckFeatureGrid
                variant="premium"
                items={mapDeckIcons([...whyInfinityClosing], WHY_INFINITY_VALUE_ICONS)}
              />
            }
          >
            <DeckTitle highlight="Enterprise Technology Partner">A Trusted</DeckTitle>
            <DeckBody>
              Barloworld Equipment requires a technology partner capable of delivering more than
              software.
            </DeckBody>
            <DeckBody>
              The selected partner must understand enterprise architecture, SAP integration,
              regulatory compliance and long-term operational support.
            </DeckBody>
            <DeckBody>
              Infinity Business Dynamics combines these capabilities into a single, integrated
              service offering.
            </DeckBody>
            <DeckSectionLabel>Why Infinity</DeckSectionLabel>
            {whyInfinityClosing.map((item) => (
              <DeckBody key={item.title}>
                <span className="font-semibold">{item.title}</span>
                <br />
                {item.description}
              </DeckBody>
            ))}
            <DeckSectionLabel>Our Commitment</DeckSectionLabel>
            <DeckBody>
              Infinity Business Dynamics is committed to delivering a solution that enables
              Barloworld Equipment to achieve regulatory compliance while improving operational
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
              The implementation of an Enterprise Compliance Gateway is an important strategic
              initiative that extends beyond regulatory reporting.
            </DeckBody>
            <DeckBody>
              It represents an opportunity to strengthen governance, improve operational
              efficiency and establish a scalable integration platform that supports future digital
              transformation.
            </DeckBody>
            <DeckBody>
              Infinity Business Dynamics proposes a secure, resilient and enterprise-grade
              solution that integrates seamlessly with SAP ERP, CRM and the Revenue Services
              Lesotho Electronic Billing System.
            </DeckBody>
            <DeckBody>The proposed architecture provides Barloworld Equipment with:</DeckBody>
            <DeckBulletList items={[...conclusionBenefits]} />
            <DeckBody>
              We appreciate the opportunity to participate in this procurement process and look
              forward to partnering with Barloworld Equipment to deliver a successful
              implementation.
            </DeckBody>
            <DeckSectionLabel>Closing Statement</DeckSectionLabel>
            <DeckClosingQuote>{closingQuote}</DeckClosingQuote>
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
              <DeckSectionLabel>FOR BARLOWORLD EQUIPMENT</DeckSectionLabel>
              <div className="deck-signature-fields">
                {["Name", "Position", "Signature", "Date"].map((field) => (
                  <div key={`bwe-${field}`}>
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
          <DeckTitle highlight="Documentation">Supporting</DeckTitle>
          <DeckBody>
            The following supporting documentation accompanies this proposal and provides
            evidence of Infinity Business Dynamics&apos; capability, accreditation and compliance
            readiness.
          </DeckBody>
          <div className="deck-appendix-list mt-6">
            {appendices.map((app, appendixIndex) => (
              <div key={app.id} className="deck-appendix-list__item gms-card rounded-2xl">
                <div className="deck-appendix-list__row">
                  <div className="deck-appendix-list__content min-w-0 flex-1">
                    <p className="deck-type-premium-label">{app.id}</p>
                    <p className="deck-type-card-title mt-1">{app.title}</p>
                    {app.purpose && (
                      <p className="deck-type-card-body mt-2 text-[color:var(--gms-text-muted)]">
                        <span className="font-medium text-[color:var(--gms-text-muted)]">
                          Purpose:{" "}
                        </span>
                        {app.purpose}
                      </p>
                    )}
                  </div>
                  <div className="deck-appendix-list__icon-col">
                    <DeckIconTile
                      icon={APPENDIX_ICONS[appendixIndex] ?? APPENDIX_ICONS[0]!}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
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
