"use client";

import type { ReactElement } from "react";
import type { SubmissionDocument, SubmissionSection } from "@/lib/submission-pack";
import { ClosingBackdrop } from "@/components/deck/visuals/ClosingBackdrop";
import { IbdContactCard } from "@/components/deck/IbdContactCard";
import {
  CertificateCycleDiagram,
  DashboardMockup,
  DynamicsIntegrationVisual,
  GanttChart,
  InvoiceQrMockup,
  OnlineOfflineCompare,
  SecurityArchitectureVisual,
  SolutionOverviewVisual,
  TestingPyramidDiagram,
  TransactionWorkflowVisual,
  VerticalFlowDiagram,
} from "@/components/deck/visuals/ProposalDiagrams";
import { SlideEyebrow } from "@/components/deck/SlideEyebrow";
import {
  DeckBody,
  DeckBulletList,
  DeckFeatureGrid,
  DeckSectionLabel,
  DeckSlideFrame,
  DeckSlideBodySplit,
  DeckTable,
  DeckTitle,
} from "@/components/deck/DeckSlideFrame";
import {
  annualManagedServicesIncludes,
  certificateLifecycle,
  certificateServices,
  closingQuote,
  closingStatement,
  conclusionBenefits,
  dashboardModules,
  
  dynamicsArchitectureFlow,
  dynamicsIntegrationScope,
  dynamicsIntegrationServices,
  dynamicsSideCards,
  escalationLevels,
  gatewayIncludes,
  implementationLifecycle,
  implementationPhases,
  implementationServicesIncludes,
  lekukaDocumentTypes,
  managedServices,
  motheoCoreServices,
  motheoEnterpriseBenefits,
  offlineProcessing,
  onlineProcessing,
  posBenefits,
  posFlowSteps,
  posIntegrationServices,
  pricingInteliposAlternative,
  pricingNotes,
  pricingSummary,
  projectTeam,
  projectTimeline,
  qrCallouts,
  qrFeatures,
  resilienceFeatures,
  rslAccreditationFlowSteps,
  rslAccreditationIntro,
  securityControls,
  securityPrinciples,
  serviceLevels,
  servicePrinciples,
  solutionComponents,
  solutionFloatingCards,
  solutionOverviewFlow,
  submissionSections,
  supplierResponses,
  supportChannels,
  testingPyramid,
  trainingAudience,
  trainingDeliverables,
  transactionLifecycleSteps,
  transactionWorkflow,
} from "@/lib/deck-proposal-content";
import {
  APPENDIX_ICONS,
  CRM_FLOW_ICONS,
  GOVERNANCE_OBJECTIVE_ICONS,
  MOTHEO_COMPONENT_ICONS,
  PROJECT_TEAM_ICONS,
  RSL_ACCREDITATION_FLOW_ICONS,
  SUPPORT_SERVICE_ICONS,
  TRAINING_AUDIENCE_ICONS,
  DeckIconTile,
  mapDeckIcons,
} from "@/components/deck/deck-icons";

function AppendixGrid({
  items,
  iconOffset = 0,
}: {
  items: readonly SubmissionDocument[];
  iconOffset?: number;
}) {
  return (
    <div className="deck-appendix-list mt-4 grid min-h-0 flex-1 grid-cols-2 gap-3 content-stretch auto-rows-fr">
      {items.map((app, i) => {
        const file = app.file;
        const content = (
          <>
            <DeckIconTile icon={APPENDIX_ICONS[(iconOffset + i) % APPENDIX_ICONS.length]!} size="compact" />
            <div className="min-w-0 flex-1">
              <p className="deck-type-premium-label">{app.id}</p>
              <p className="deck-type-card-title">{app.title}</p>
              {app.purpose ? (
                <p className="deck-type-card-body mt-1.5 text-[color:var(--gms-text-muted)]">
                  {app.purpose}
                </p>
              ) : null}
            </div>
            {file ? (
              <span className="deck-type-premium-label shrink-0 self-start text-deck-accent">
                Attached
              </span>
            ) : (
              <span className="deck-type-premium-label shrink-0 self-start text-[color:var(--gms-text-muted)]">
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
            className="deck-appendix-list__item deck-appendix-list__link gms-card flex h-full items-start gap-3 rounded-2xl p-4"
          >
            {content}
          </a>
        ) : (
          <div
            key={app.id}
            className="deck-appendix-list__item gms-card flex h-full items-start gap-3 rounded-2xl p-4"
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
    case 6:
      return (
        <DeckSlideFrame index={6}>
          <SlideEyebrow index={6} />
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
            <DeckTitle highlight="Compliance Delivery.">Accredited Motheo</DeckTitle>
            {rslAccreditationIntro.map((paragraph) => (
              <DeckBody key={paragraph.slice(0, 48)}>{paragraph}</DeckBody>
            ))}
            <DeckSectionLabel>Solution Includes</DeckSectionLabel>
            <DeckBulletList compact columns={2} items={[...gatewayIncludes]} />
            <DeckSectionLabel>What Accreditation Means for Tsebo</DeckSectionLabel>
            <DeckBulletList
              compact
              columns={2}
              items={[
                "Certified Motheo path to Lekuka — not a custom gateway build",
                "Regulatory updates absorbed through the accredited stack",
                "Digital certificates and fiscal signatures managed centrally",
                "Audit-ready submission history for account and cash sales",
              ]}
            />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 7:
      return (
        <DeckSlideFrame index={7}>
          <SlideEyebrow index={7} />
          <DeckSlideBodySplit
            layout="visual-bottom"
            visual={
              <SolutionOverviewVisual
                flow={solutionOverviewFlow}
                sideCards={solutionFloatingCards}
              />
            }
          >
            <DeckTitle highlight="Motheo Compliance Stack">Proposed</DeckTitle>
            <DeckBody>
              Infinity Business Dynamics proposes Motheo Compliance Layer — a straightforward
              compliance stack that connects Microsoft Dynamics and Motheo POS to Revenue Services
              Lesotho (Lekuka).
            </DeckBody>
            <DeckBody>
              Rather than modifying Dynamics, Motheo Compliance Layer manages regulatory
              communication independently while Motheo POS fiscalises cash-sale receipts at the
              till — preserving existing business processes.
            </DeckBody>
            <DeckSectionLabel>Core Solution Components</DeckSectionLabel>
            <DeckBulletList
              compact
              items={solutionComponents.map(
                (component) => `${component.title} — ${component.description}`,
              )}
            />
            <DeckSectionLabel>Motheo Engine Capabilities</DeckSectionLabel>
            <DeckFeatureGrid
              uniform
              items={mapDeckIcons([...motheoCoreServices].slice(0, 6), MOTHEO_COMPONENT_ICONS)}
            />
            <DeckBulletList compact columns={2} items={[...motheoEnterpriseBenefits]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 8:
      return (
        <DeckSlideFrame index={8}>
          <SlideEyebrow index={8} />
          <DeckSlideBodySplit
            layout="visual-bottom"
            visual={
              <DynamicsIntegrationVisual
                flow={dynamicsArchitectureFlow}
                sideCards={dynamicsSideCards}
              />
            }
          >
            <DeckTitle highlight="Integration with Existing Processes">Seamless Dynamics</DeckTitle>
            <DeckBody>
              Motheo Compliance Layer integrates with Tsebo&apos;s Microsoft Dynamics environment for
              account and enterprise billing — covering sales invoicing and accounts receivable
              without disrupting operational workflows.
            </DeckBody>
            <DeckBody>
              Dynamics remains the authoritative source of transactional and financial information.
              Motheo validates, fiscalises and submits to Lekuka automatically when qualifying
              documents are posted.
            </DeckBody>
            <DeckSectionLabel>Dynamics Integration Scope</DeckSectionLabel>
            <DeckBulletList compact columns={2} items={[...dynamicsIntegrationScope]} />
            <DeckSectionLabel>Integration Services</DeckSectionLabel>
            <DeckBulletList compact columns={2} items={[...dynamicsIntegrationServices]} />
            <DeckSectionLabel>Expected Outcome</DeckSectionLabel>
            <DeckBody>
              Every qualifying Dynamics transaction is automatically validated, fiscalised and
              submitted to Revenue Services Lesotho — with QR code and fiscal signature written
              back to the customer document.
            </DeckBody>
          </DeckSlideBodySplit>
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
                items={posFlowSteps}
                icons={CRM_FLOW_ICONS}
                compact
                centerContent
              />
            }
          >
            <DeckTitle highlight="Cash Sale Compliance">Motheo POS for</DeckTitle>
            <DeckBody>
              Tsebo also requires point-of-sale capability for cash sale transactions. Motheo POS
              provides an RSL-aligned till experience that issues fiscalised receipts at the moment
              of sale.
            </DeckBody>
            <DeckBody>
              Every Motheo POS cash sale is submitted through the same Motheo Compliance Engine used
              for Dynamics invoices — one compliance stack for account billing and cash sales.
            </DeckBody>
            <DeckSectionLabel>Motheo POS Services</DeckSectionLabel>
            <DeckBulletList compact columns={2} items={[...posIntegrationServices]} />
            <DeckSectionLabel>Benefits</DeckSectionLabel>
            <DeckBulletList compact columns={2} items={[...posBenefits]} />
            <DeckSectionLabel>Optional Alternative</DeckSectionLabel>
            <DeckBulletList
              compact
              items={pricingInteliposAlternative.map(([item, amount]) => `${item} — ${amount}`)}
            />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 10:
      return (
        <DeckSlideFrame index={10}>
          <SlideEyebrow index={10} />
          <DeckTitle highlight="Fiscal Transaction Processing">End-to-End</DeckTitle>
          <DeckBody>
            Every qualifying transaction from Dynamics or Motheo POS follows a controlled lifecycle
            — validation, fiscalisation, QR generation, Lekuka submission and audit archiving.
          </DeckBody>
          <div className="grid min-h-0 flex-1 grid-cols-2 gap-4">
            <div className="flex min-h-0 flex-col gap-3">
              <DeckSectionLabel>Lekuka Document Types</DeckSectionLabel>
              <DeckBulletList compact columns={2} items={[...lekukaDocumentTypes]} />
              <DeckSectionLabel>Lifecycle Steps</DeckSectionLabel>
              <DeckBulletList
                compact
                items={transactionLifecycleSteps.map(
                  (step) => `${step.step} ${step.title} — ${step.description}`,
                )}
              />
              <DeckSectionLabel>Certificates & QR</DeckSectionLabel>
              <DeckBulletList
                compact
                columns={2}
                items={[...certificateServices.slice(0, 4), ...qrFeatures.slice(0, 4)]}
              />
            </div>
            <div className="flex min-h-0 flex-col gap-3">
              <div className="min-h-0 flex-[1.2]">
                <TransactionWorkflowVisual steps={transactionWorkflow} />
              </div>
              <OnlineOfflineCompare
                onlineItems={onlineProcessing.map((i) => i.title)}
                offlineItems={offlineProcessing.map((i) => i.title)}
              />
              <div className="grid min-h-0 flex-1 grid-cols-2 gap-3">
                <CertificateCycleDiagram steps={certificateLifecycle} />
                <InvoiceQrMockup callouts={qrCallouts} />
              </div>
            </div>
          </div>
        </DeckSlideFrame>
      );

    case 11:
      return (
        <DeckSlideFrame index={11}>
          <SlideEyebrow index={11} />
          <DeckTitle highlight="Monitoring & Continuity">Security,</DeckTitle>
          <DeckBody>
            Motheo Compliance Layer applies defence-in-depth controls between Tsebo systems and
            Revenue Services Lesotho — protecting confidentiality, integrity and availability of
            fiscal traffic, with operational dashboards and continuity features.
          </DeckBody>
          <div className="grid min-h-0 flex-1 grid-cols-2 gap-4">
            <div className="flex min-h-0 flex-col gap-3">
              <DeckSectionLabel>Security Principles</DeckSectionLabel>
              <DeckFeatureGrid
                uniform
                items={mapDeckIcons([...securityPrinciples], GOVERNANCE_OBJECTIVE_ICONS)}
              />
              <DeckSectionLabel>Security Controls</DeckSectionLabel>
              <DeckBulletList compact columns={2} items={[...securityControls]} />
              <DeckSectionLabel>Continuity Features</DeckSectionLabel>
              <DeckBulletList
                compact
                items={resilienceFeatures.map((f) => `${f.title} — ${f.description}`)}
              />
            </div>
            <div className="flex min-h-0 flex-col gap-3">
              <div className="min-h-0 flex-1">
                <SecurityArchitectureVisual />
              </div>
              <div className="min-h-0 flex-1">
                <DashboardMockup modules={dashboardModules.slice(0, 6)} />
              </div>
            </div>
          </div>
        </DeckSlideFrame>
      );

    case 12:
      return (
        <DeckSlideFrame index={12}>
          <SlideEyebrow index={12} />
          <DeckTitle highlight="Plan & Timeline">Delivery</DeckTitle>
          <DeckBody>
            Delivery follows a practical Motheo implementation path — discovery, Dynamics and POS
            configuration, testing, training and go-live — completed in approximately 6–7 weeks
            subject to Tsebo readiness.
          </DeckBody>
          <DeckSectionLabel>Implementation Phases</DeckSectionLabel>
          <DeckBulletList
            compact
            items={implementationPhases.map(
              (phase) =>
                `${phase.phase}: ${phase.summary} Activities — ${phase.activities.join(", ")}.`,
            )}
          />
          <DeckSectionLabel>Lifecycle</DeckSectionLabel>
          <DeckBulletList compact columns={2} items={[...implementationLifecycle]} />
          <DeckSectionLabel>Project Timeline</DeckSectionLabel>
          <DeckTable
            headers={["Phase", "Timing"]}
            rows={projectTimeline.map((row) => [row[0], row[1]])}
            compact
          />
          <div className="mt-3 min-h-0 flex-1">
            <GanttChart phases={projectTimeline} />
          </div>
        </DeckSlideFrame>
      );

    case 13:
      return (
        <DeckSlideFrame index={13}>
          <SlideEyebrow index={13} />
          <DeckTitle highlight="Testing & Training">Team,</DeckTitle>
          <DeckBody>
            A focused delivery team supports Dynamics integration, Motheo POS setup, compliance
            validation, testing and user enablement through go-live and hypercare.
          </DeckBody>
          <DeckSectionLabel>Delivery Team</DeckSectionLabel>
          <DeckFeatureGrid
            uniform
            items={mapDeckIcons(
              projectTeam.map(([title, description]) => ({ title, description })),
              PROJECT_TEAM_ICONS,
            )}
          />
          <div className="mt-2 grid min-h-0 flex-1 grid-cols-2 gap-4">
            <div className="flex min-h-0 flex-col gap-3">
              <DeckSectionLabel>Testing Approach</DeckSectionLabel>
              <DeckBulletList
                compact
                items={testingPyramid.map((t) => `${t.title} — ${t.description}`)}
              />
              <div className="min-h-0 flex-1">
                <TestingPyramidDiagram levels={testingPyramid} />
              </div>
            </div>
            <div className="flex min-h-0 flex-col gap-3">
              <DeckSectionLabel>Training Audience</DeckSectionLabel>
              <DeckFeatureGrid
                uniform
                items={mapDeckIcons([...trainingAudience], TRAINING_AUDIENCE_ICONS)}
              />
              <DeckSectionLabel>Training Deliverables</DeckSectionLabel>
              <DeckBulletList compact columns={2} items={[...trainingDeliverables]} />
            </div>
          </div>
        </DeckSlideFrame>
      );

    case 14:
      return (
        <DeckSlideFrame index={14}>
          <SlideEyebrow index={14} />
          <DeckTitle highlight="Managed Services">Support &</DeckTitle>
          <DeckBody>
            Beyond go-live, Infinity provides annual Motheo Compliance Layer management and Motheo
            POS subscription support — keeping Lekuka submissions stable and current with
            regulatory change.
          </DeckBody>
          <DeckSectionLabel>Managed Services Include</DeckSectionLabel>
          <DeckFeatureGrid
            uniform
            items={mapDeckIcons([...managedServices], SUPPORT_SERVICE_ICONS)}
          />
          <DeckSectionLabel>Annual Package Coverage</DeckSectionLabel>
          <DeckBulletList compact columns={2} items={[...annualManagedServicesIncludes]} />
          <DeckSectionLabel>Service Levels</DeckSectionLabel>
          <DeckTable
            headers={["Priority", "Description", "Response", "Resolution"]}
            rows={serviceLevels.map((row) => [...row])}
            compact
          />
          <DeckSectionLabel>Escalation Path</DeckSectionLabel>
          <DeckBulletList compact columns={2} items={[...escalationLevels]} />
          <DeckSectionLabel>Support Channels</DeckSectionLabel>
          <DeckBulletList compact items={[...supportChannels]} />
          <DeckSectionLabel>Service Principles</DeckSectionLabel>
          <DeckBulletList
            compact
            columns={2}
            items={servicePrinciples.slice(0, 6).map((p) => `${p.title} — ${p.description}`)}
          />
        </DeckSlideFrame>
      );

    case 15:
      return (
        <DeckSlideFrame index={15}>
          <SlideEyebrow index={15} />
          <DeckTitle highlight="Summary">Investment</DeckTitle>
          <DeckBody>
            Commercials follow Estimate <span className="font-semibold">EST-000227</span> (12 Jul
            2026). The recommended package integrates Microsoft Dynamics via Motheo Compliance
            Layer and supplies Motheo POS for cash sales.
          </DeckBody>
          <DeckSectionLabel>Implementation Services</DeckSectionLabel>
          <DeckBulletList compact columns={2} items={[...implementationServicesIncludes]} />
          <DeckSectionLabel>Annual Managed Services</DeckSectionLabel>
          <DeckBulletList compact columns={2} items={[...annualManagedServicesIncludes]} />
          <DeckSectionLabel>Pricing Summary — Recommended Package</DeckSectionLabel>
          <DeckTable
            headers={["Item", "Amount"]}
            rows={pricingSummary.map((row) => [row[0], row[1]])}
            compact
            featured
          />
          <DeckSectionLabel>Optional: Intelipos instead of Motheo POS</DeckSectionLabel>
          <DeckTable
            headers={["Item", "Amount"]}
            rows={pricingInteliposAlternative.map((row) => [row[0], row[1]])}
            compact
          />
          <DeckSectionLabel>Pricing Notes</DeckSectionLabel>
          <DeckBulletList items={[...pricingNotes]} />
        </DeckSlideFrame>
      );

    case 16:
      return (
        <DeckSlideFrame index={16} showParticles>
          <SlideEyebrow index={16} />
          <DeckTitle highlight="Practical Motheo Compliance">Building</DeckTitle>
          <ClosingBackdrop>
            <DeckBody>
              Implementing Motheo Compliance Layer is a practical compliance step that strengthens
              governance and day-to-day fiscal reliability for Tsebo — Dynamics for account sales,
              Motheo POS for cash sales, one certified Motheo path to Lekuka.
            </DeckBody>
            <DeckBody>
              Infinity Business Dynamics proposes a secure, accredited solution that integrates
              seamlessly with Microsoft Dynamics, Motheo POS and Revenue Services Lesotho.
            </DeckBody>
            <DeckSectionLabel>Capabilities Delivered</DeckSectionLabel>
            <DeckBulletList compact columns={2} items={[...conclusionBenefits]} />
            <DeckSectionLabel>Scope Confirmation</DeckSectionLabel>
            <DeckTable
              headers={["Requirement", "Response"]}
              rows={supplierResponses.map((row) => [row[0], row[1]])}
              compact
            />
            <DeckSectionLabel>Closing Statement</DeckSectionLabel>
            <DeckBody>{closingStatement}</DeckBody>
            <p className="closing-backdrop__quote">{closingQuote}</p>
            <div className="pt-4">
              <IbdContactCard />
            </div>
          </ClosingBackdrop>
        </DeckSlideFrame>
      );

    case 17:
      return (
        <DeckSlideFrame index={17}>
          <SlideEyebrow index={17} />
          <DeckTitle highlight="of Proposal">Acceptance</DeckTitle>
          <DeckBody>
            The undersigned acknowledge receipt of this proposal and confirm acceptance of its
            contents, subject to the execution of a formal agreement between Tsebo Solutions Group
            and Infinity Business Dynamics (Pty) Ltd.
          </DeckBody>
          <DeckSectionLabel>Proposal Reference</DeckSectionLabel>
          <DeckBulletList
            compact
            columns={2}
            items={[
              "Reference: IBD-TSEBO-EBS-2026-001",
              "Estimate: EST-000227 (12 Jul 2026)",
              "Solution: Motheo Compliance Layer",
              "Systems: Microsoft Dynamics & Motheo POS",
              "Authority: Revenue Services Lesotho (Lekuka)",
              "Currency: Lesotho Loti (LSL)",
            ]}
          />
          <div className="deck-signature-grid mt-6 min-h-0 flex-1">
            <div className="flex min-h-0 flex-col space-y-8">
              <DeckSectionLabel>FOR TSEBO SOLUTIONS GROUP</DeckSectionLabel>
              <div className="deck-signature-fields flex min-h-0 flex-1 flex-col justify-between">
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
            <div className="flex min-h-0 flex-col space-y-8">
              <DeckSectionLabel>FOR INFINITY BUSINESS DYNAMICS (PTY) LTD</DeckSectionLabel>
              <div className="deck-signature-fields flex min-h-0 flex-1 flex-col justify-between">
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

    case 18:
      return (
        <DeckSlideFrame index={18}>
          <SlideEyebrow index={18} />
          <DeckBody>
            Solution, integration and commercial appendices for Motheo Compliance Layer and Motheo
            POS. Attached PDFs are included in the downloadable proposal pack.
          </DeckBody>
          <SubmissionAppendixList section={submissionSections[0]!} iconOffset={0} />
        </DeckSlideFrame>
      );

    case 19:
      return (
        <DeckSlideFrame index={19}>
          <SlideEyebrow index={19} />
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
