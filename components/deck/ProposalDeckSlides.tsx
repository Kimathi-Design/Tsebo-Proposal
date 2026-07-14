"use client";

import { ASSETS } from "@/lib/assets";
import { DeckCoverFooter } from "@/components/deck/DeckCoverFooter";
import { DeckCoverTitle } from "@/components/deck/DeckCoverHero";
import { DeckHeaderBrand, SlideEyebrow } from "@/components/deck/SlideEyebrow";
import { ExecutiveSummaryVisual } from "@/components/deck/visuals/ProposalDiagrams";
import {
  HubSpokeDiagram,
  SplitCompareDiagram,
} from "@/components/deck/visuals/ProposalDiagrams";
import { IbdFooterLogo } from "@/components/deck/IbdMark";
import { DeckSectionedTableOfContents } from "@/components/deck/DeckSectionedToc";
import {
  DeckBody,
  DeckBulletList,
  DeckFeatureGrid,
  DeckOutcomeCardList,
  DeckSectionLabel,
  DeckSlideFrame,
  DeckSlideBodySplit,
  DeckTitle,
} from "@/components/deck/DeckSlideFrame";
import {
  aboutInfinityIntro,
  tseboBusinessAreas,
  tseboHubUnits,
  businessChallenges,
  companyCredentials,
  coreCapabilities,
  executiveLetter,
  gatewayCapabilities,
  keyBusinessBenefits,
  strategicOutcomes,
  whyChooseInfinity,
} from "@/lib/deck-proposal-content";
import {
  BWE_HUB_UNIT_ICONS,
  BUSINESS_CHALLENGE_ICONS,
  CORE_SERVICE_AREA_ICONS,
  GATEWAY_CAPABILITY_ICONS,
  STRATEGIC_OUTCOME_ICONS,
  WHY_INFINITY_CARD_ICONS,
  mapDeckIcons,
} from "@/components/deck/deck-icons";
import { renderProposalSlidesExtended } from "@/components/deck/ProposalDeckSlidesExtended";

export function renderProposalSlide(index: number) {
  if (index >= 6) {
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
            <div className="deck-type-body space-y-1">
              <p>
                <span className="font-semibold text-[color:var(--gms-text)]">To:</span>{" "}
                {executiveLetter.to}
              </p>
              <p className="font-semibold text-[color:var(--gms-text)]">{executiveLetter.toOrg}</p>
              <p>{executiveLetter.toLocation}</p>
            </div>
            <p className="deck-type-body font-semibold text-[color:var(--gms-text)]">
              {executiveLetter.salutation}
            </p>
            {executiveLetter.paragraphs.map((paragraph) => (
              <DeckBody key={paragraph.slice(0, 48)}>{paragraph}</DeckBody>
            ))}
            <div className="flex items-end justify-between gap-6 pt-4">
              <div>
                <p className="deck-type-body font-semibold text-[color:var(--gms-text)]">
                  {executiveLetter.closing}
                </p>
                <p className="deck-type-body mt-3 font-semibold text-[color:var(--gms-text)]">
                  {executiveLetter.signatureOrg}
                </p>
                <p className="deck-type-body mt-1 text-[color:var(--gms-text-muted)]">
                  {executiveLetter.signatureTagline}
                </p>
              </div>
              <IbdFooterLogo className="h-10 shrink-0 translate-y-[30px] self-end" />
            </div>
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
            <DeckTitle highlight="Motheo Compliance">
              Enabling Lekuka Compliance Through
            </DeckTitle>
            <DeckBody>
              Tsebo Solutions Group delivers Integrated Workplace Management Solutions — facilities,
              catering, cleaning, security, remote sites and related services — generating both
              enterprise invoices and cash-sale receipts.
            </DeckBody>
            <DeckBody>
              Revenue Services Lesotho&apos;s Electronic Billing System (EBS) requires qualifying fiscal
              transactions to be validated, digitally signed and reported through Lekuka in real
              time, with fiscal signatures and QR codes on customer documents.
            </DeckBody>
            <DeckBody>
              For Tsebo, this is a straightforward arrangement: Motheo Compliance Layer integrates
              with Microsoft Dynamics for account billing, and Motheo POS covers cash sale
              transactions — without disrupting day-to-day operations.
            </DeckBody>
            <DeckSectionLabel>Expected Outcomes</DeckSectionLabel>
            <DeckOutcomeCardList
              items={strategicOutcomes.map((item) => ({
                title: item.title,
                description: item.description,
              }))}
              icons={STRATEGIC_OUTCOME_ICONS}
            />
            <DeckSectionLabel>Key Benefits</DeckSectionLabel>
            <DeckBulletList compact columns={2} items={[...keyBusinessBenefits]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 4:
      return (
        <DeckSlideFrame index={4}>
          <SlideEyebrow index={4} />
          <DeckSlideBodySplit
            visual={
              <div className="flex h-full min-h-0 flex-1 flex-col gap-4">
                <HubSpokeDiagram
                  center="Tsebo"
                  nodes={tseboHubUnits}
                  gateway="Motheo Compliance Layer"
                  icons={BWE_HUB_UNIT_ICONS}
                />
                <SplitCompareDiagram
                  leftTitle="Business Challenges"
                  rightTitle="Motheo Capabilities"
                  leftItems={businessChallenges}
                  rightItems={gatewayCapabilities}
                  leftIcons={BUSINESS_CHALLENGE_ICONS}
                  rightIcons={GATEWAY_CAPABILITY_ICONS}
                />
              </div>
            }
          >
            <DeckTitle highlight="Need & Challenges">Tsebo</DeckTitle>
            <DeckBody>
              Tsebo Solutions Group is a trusted leader in Integrated Workplace Management
              Solutions across corporate, healthcare, education, mining, industrial and event
              environments.
            </DeckBody>
            <DeckBody>
              Operations span facilities management, catering, cleaning and hygiene, security,
              remote site solutions, energy and water management — generating invoices and cash-sale
              receipts that must meet Lekuka reporting obligations.
            </DeckBody>
            <DeckBody>
              Motheo Compliance Layer and Motheo POS address those obligations through Microsoft
              Dynamics connectivity and point-of-sale fiscalisation — without a heavyweight custom
              build.
            </DeckBody>
            <DeckSectionLabel>Key Business Areas</DeckSectionLabel>
            <DeckBulletList compact columns={2} items={[...tseboBusinessAreas]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 5:
      return (
        <DeckSlideFrame index={5}>
          <SlideEyebrow index={5} />
          <DeckTitle highlight="Accredited Motheo Partner">Why Infinity</DeckTitle>
          <DeckBody>
            Tsebo needs an accredited Motheo partner who can integrate Microsoft Dynamics, deploy
            Motheo POS for cash sales, and support Lekuka compliance ongoing.
          </DeckBody>
          {aboutInfinityIntro.map((paragraph) => (
            <DeckBody key={paragraph.slice(0, 48)}>{paragraph}</DeckBody>
          ))}
          <DeckSectionLabel>Company Credentials</DeckSectionLabel>
          <DeckBulletList compact items={[...companyCredentials]} />
          <DeckSectionLabel>Core Capabilities</DeckSectionLabel>
          <DeckFeatureGrid
            uniform
            variant="capability"
            items={mapDeckIcons([...coreCapabilities].slice(0, 6), CORE_SERVICE_AREA_ICONS)}
          />
          <DeckSectionLabel>Why Choose Infinity</DeckSectionLabel>
          <DeckFeatureGrid
            variant="premium"
            items={mapDeckIcons([...whyChooseInfinity].slice(0, 6), WHY_INFINITY_CARD_ICONS)}
          />
        </DeckSlideFrame>
      );

    default:
      return renderProposalSlidesExtended(index);
  }
}
