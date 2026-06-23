"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Banknote,
  Building2,
  CircleDollarSign,
  Globe2,
  Landmark,
  Layers,
  Lock,
  Network,
  Scale,
  Shield,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import { AfricaNetworkMap } from "@/components/deck/AfricaNetworkMap";
import { DeckHeroBrand } from "@/components/deck/DeckHeroBrand";
import { SlideEyebrow } from "@/components/deck/SlideEyebrow";
import { DeckLogo } from "@/components/deck/DeckLogo";
import { AllocationDonut } from "@/components/deck/visuals/AllocationDonut";
import { NetworkCompoundingVisual } from "@/components/deck/visuals/NetworkCompoundingVisual";
import { ClosingBackdrop } from "@/components/deck/visuals/ClosingBackdrop";
import { CorridorFocusMap } from "@/components/deck/visuals/CorridorFocusMap";
import { FlowComparison } from "@/components/deck/visuals/FlowComparison";
import { ExecutiveSummaryVisual } from "@/components/deck/visuals/ExecutiveSummaryVisual";
import { HubSpokeDiagram } from "@/components/deck/visuals/HubSpokeDiagram";
import { LayerStackDiagram } from "@/components/deck/visuals/LayerStackDiagram";
import { LegacyVsImaniFlow } from "@/components/deck/visuals/LegacyVsImaniFlow";
import { BuildingEcosystemVisual } from "@/components/deck/visuals/BuildingEcosystemVisual";
import { CompetitiveLandscapeVisual } from "@/components/deck/visuals/CompetitiveLandscapeVisual";
import { LicensingCapitalVisual } from "@/components/deck/visuals/LicensingCapitalVisual";
import { MultiCurrencyNetworkVisual } from "@/components/deck/visuals/MultiCurrencyNetworkVisual";
import { TwoSettlementModelsVisual } from "@/components/deck/visuals/TwoSettlementModelsVisual";
import { TrustMoatVisual } from "@/components/deck/visuals/TrustMoatVisual";
import { TrustPyramidVisual } from "@/components/deck/visuals/TrustPyramidVisual";
import { StepFlowPipeline } from "@/components/deck/visuals/StepFlowPipeline";
import {
  DeckBody,
  DeckBulletList,
  DeckFeatureGrid,
  DeckInsight,
  DeckSlideFrame,
  DeckStatCard,
  DeckTitle,
} from "@/components/deck/DeckSlideFrame";
import {
  expansionPhases,
} from "@/lib/deck-content";

function Flywheel({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-col items-center gap-2">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-col items-center">
          <div className="gms-card w-[280px] rounded-2xl px-6 py-4 text-center text-[17px] font-medium text-white">
            {step}
          </div>
          {i < steps.length - 1 && (
            <div className="my-1 text-[#56D6C2]">↓</div>
          )}
        </div>
      ))}
    </div>
  );
}

function ShieldArchitecture() {
  const items = [
    { label: "Compliance", icon: <Scale className="h-7 w-7" /> },
    { label: "Security", icon: <Lock className="h-7 w-7" /> },
    { label: "Governance", icon: <Landmark className="h-7 w-7" /> },
    { label: "Reserves", icon: <Wallet className="h-7 w-7" /> },
    { label: "Operations", icon: <Shield className="h-7 w-7" /> },
  ];
  return (
    <div className="relative mx-auto flex h-[480px] w-[480px] items-center justify-center">
      <div className="absolute inset-0 rounded-full border border-[#56D6C2]/20 bg-[#56D6C2]/[0.04]" />
      <Shield className="absolute h-[420px] w-[420px] text-[#56D6C2]/15" strokeWidth={0.5} />
      <div className="relative z-10 grid grid-cols-2 gap-5">
        {items.map((item) => (
          <div
            key={item.label}
            className="gms-card flex items-center gap-3 rounded-2xl px-6 py-5"
          >
            <span className="text-[#56D6C2]">{item.icon}</span>
            <span className="text-[16px] font-medium text-white">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function renderDeckSlide(index: number) {
  switch (index) {
    case 0:
      return (
        <DeckSlideFrame index={0} showParticles layout="full">
          <div className="grid h-full grid-cols-[0.92fr_1.55fr] gap-8">
            <div className="flex translate-y-[30px] flex-col justify-center">
              <DeckHeroBrand priority />
              <div className="mt-[10px]">
                <DeckTitle size="xl">
                  Building Africa&apos;s Settlement Network
                </DeckTitle>
                <div className="mt-8 space-y-5">
                  <DeckBody>
                    Africa is entering a new era of trade, commerce, and financial
                    connectivity. Yet the infrastructure responsible for moving
                    value across the continent remains fragmented, costly, and
                    dependent on external financial systems.
                  </DeckBody>
                  <DeckBody>
                    IMANI is building regulated settlement infrastructure that
                    enables businesses, financial institutions, payment providers,
                    and governments to move value across African markets more
                    efficiently.
                  </DeckBody>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  <DeckStatCard
                    value="$208B+"
                    label={
                      <>
                        Cross-
                        <br />
                        Border
                        <br />
                        Settlement
                        <br />
                        Market
                      </>
                    }
                    animateValue
                  />
                  <DeckStatCard
                    value="54"
                    label="Countries Across Increasingly Connected Economies"
                    animateValue
                  />
                  <DeckStatCard
                    value="1"
                    label="Network Designed for African Commerce"
                    animateValue
                  />
                </div>
              </div>
            </div>
            <div className="relative flex min-h-0 h-full items-center justify-end">
              <AfricaNetworkMap
                variant="full"
                className="ml-auto h-full w-[122%] max-w-none translate-x-10"
              />
            </div>
          </div>
        </DeckSlideFrame>
      );

    case 1:
      return (
        <DeckSlideFrame index={1}>
          <SlideEyebrow index={1} />
          <DeckTitle highlight="Multi-Billion-Dollar Opportunity">
            Africa&apos;s Financial Infrastructure Gap Creates a
          </DeckTitle>
          <div className="mt-6 min-h-0 flex-1">
            <ExecutiveSummaryVisual />
          </div>
        </DeckSlideFrame>
      );

    case 2:
      return (
        <DeckSlideFrame index={2}>
          <SlideEyebrow index={2} />
          <DeckTitle>
            Africa Trades Across Borders.
            <br />
            <span className="gradient-text-teal">Its Money Does Not.</span>
          </DeckTitle>
          <div className="mt-10 grid grid-cols-2 gap-12">
            <div className="space-y-6">
              <DeckBody>
                Despite growing regional commerce, financial settlement remains
                dependent on systems designed for a different era. A payment
                between two African countries often travels through multiple
                intermediary institutions and foreign currencies before reaching
                its destination.
              </DeckBody>
              <p className="text-[17px] font-medium text-white/85">
                This creates:
              </p>
              <DeckBulletList
                items={[
                  "Multiple FX events",
                  "Settlement delays",
                  "Trapped liquidity",
                  "Increased compliance overhead",
                  "Higher transaction costs",
                ]}
              />
              <DeckBody>
                For businesses operating across multiple markets, these
                inefficiencies compound rapidly.
              </DeckBody>
            </div>
            <FlowComparison />
          </div>
        </DeckSlideFrame>
      );

    case 3:
      return (
        <DeckSlideFrame index={3}>
          <SlideEyebrow index={3} />
          <DeckTitle highlight="Adds Friction">Every Layer</DeckTitle>
          <div className="mt-6 min-h-0 flex-1">
            <LegacyVsImaniFlow />
          </div>
        </DeckSlideFrame>
      );

    case 4:
      return (
        <DeckSlideFrame index={4}>
          <SlideEyebrow index={4} />
          <DeckTitle highlight="Generational Opportunity">
            Three Structural Shifts Are Creating a
          </DeckTitle>
          <DeckBody>
            Historically, infrastructure gaps prevented efficient regional
            settlement. Today, three major changes have altered the landscape.
          </DeckBody>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              {
                title: "Regulatory Modernization",
                description:
                  "Governments and regulators are increasingly embracing digital financial infrastructure.",
                icon: <Scale className="h-5 w-5" />,
              },
              {
                title: "Digital Payment Adoption",
                description:
                  "Businesses already conduct billions of dollars of value transfer digitally.",
                icon: <Banknote className="h-5 w-5" />,
              },
              {
                title: "Regional Trade Expansion",
                description:
                  "AfCFTA is accelerating economic integration across African markets.",
                icon: <Globe2 className="h-5 w-5" />,
              },
            ].map((item) => (
              <div key={item.title} className="gms-card rounded-3xl p-8">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#56D6C2]/30 bg-[#56D6C2]/10 text-[#56D6C2]">
                  {item.icon}
                </div>
                <p className="text-[22px] font-semibold text-white">
                  {item.title}
                </p>
                <p className="mt-3 text-[16px] leading-relaxed text-white/65">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <DeckInsight label="Why This Matters">
              The demand already exists. The infrastructure does not.
            </DeckInsight>
          </div>
        </DeckSlideFrame>
      );

    case 5:
      return (
        <DeckSlideFrame index={5}>
          <SlideEyebrow index={5} />
          <DeckTitle highlight="Already Voted">The Market Has</DeckTitle>
          <div className="mt-10 grid grid-cols-2 gap-12">
            <div className="space-y-6">
              <DeckBody>
                Across emerging markets, businesses increasingly seek
                alternatives to legacy settlement systems. The rapid growth of
                digital settlement solutions demonstrates a universal need:
              </DeckBody>
              <DeckBulletList
                items={[
                  "Faster movement of value",
                  "Lower settlement costs",
                  "Improved treasury efficiency",
                  "Better liquidity utilization",
                ]}
              />
            </div>
            <div className="space-y-5">
              <div className="gms-card rounded-2xl p-6">
                <p className="text-[11px] tracking-[0.2em] text-[#56D6C2] uppercase">
                  What Existing Solutions Proved
                </p>
                <p className="mt-3 text-[24px] font-semibold text-white">
                  Demand exists.
                </p>
              </div>
              <div className="gms-card rounded-2xl p-6">
                <p className="text-[11px] tracking-[0.2em] text-white/45 uppercase">
                  What Existing Solutions Failed To Solve
                </p>
                <DeckBulletList
                  items={[
                    "Institutional trust.",
                    "Regulatory certainty.",
                    "Integration with existing financial systems.",
                  ]}
                />
              </div>
              <DeckInsight label="IMANI's Opportunity">
                Combine efficiency with compliance. Combine innovation with
                trust.
              </DeckInsight>
            </div>
          </div>
        </DeckSlideFrame>
      );

    case 6:
      return (
        <DeckSlideFrame index={6}>
          <SlideEyebrow index={6} />
          <DeckTitle highlight="African Commerce">
            The Settlement Layer for
          </DeckTitle>
          <div className="grid w-full grid-cols-2 items-center gap-10">
            <div className="space-y-6">
              <DeckBody>
                IMANI enables institutions to issue, transfer, redeem, and settle
                value across markets through a unified regulated infrastructure
                layer. Rather than relying on fragmented payment routes,
                participants connect once and gain access to a growing settlement
                network.
              </DeckBody>
              <DeckBulletList
                items={[
                  "Faster settlement",
                  "Lower costs",
                  "Improved liquidity efficiency",
                  "Regulatory compliance",
                  "Multi-currency capability",
                ]}
              />
              <DeckInsight label="One Line Positioning">
                &ldquo;Stripe built payment infrastructure for the internet. IMANI
                is building settlement infrastructure for African
                commerce.&rdquo;
              </DeckInsight>
            </div>
            <HubSpokeDiagram variant="ecosystem" />
          </div>
        </DeckSlideFrame>
      );

    case 7:
      return (
        <DeckSlideFrame index={7}>
          <SlideEyebrow index={7} />
          <DeckTitle highlight="Sophisticated Infrastructure">
            A Simple Experience Built on
          </DeckTitle>
          <div className="flex w-full flex-col gap-6">
            <StepFlowPipeline />
            <p className="text-center text-[18px] text-white/65">
              Every transaction remains governed by compliance controls, reserve
              backing, and regulatory requirements.
            </p>
            <div className="mt-[80px]">
              <DeckInsight label="Investor Message">
                The complexity lives beneath the surface. The user experience
                remains simple.
              </DeckInsight>
            </div>
          </div>
        </DeckSlideFrame>
      );

    case 8:
      return (
        <DeckSlideFrame index={8}>
          <SlideEyebrow index={8} />
          <DeckTitle highlight="Regulatory Considerations">
            Multiple Structures by Corridor Requirements and
          </DeckTitle>
          <div className="grid min-h-[360px] grid-cols-[1.55fr_0.85fr] items-stretch gap-8">
            <TwoSettlementModelsVisual />
            <div className="flex h-full min-h-[360px] flex-col justify-center">
              <DeckInsight label="Strategic Direction">
                Over time, network-based settlement creates stronger liquidity
                effects and greater scalability.
              </DeckInsight>
            </div>
          </div>
        </DeckSlideFrame>
      );

    case 9:
      return (
        <DeckSlideFrame index={9}>
          <SlideEyebrow index={9} />
          <DeckTitle highlight="Modern Financial Infrastructure">
            Built Like
          </DeckTitle>
          <div className="flex h-full w-full flex-col gap-5">
            <p className="text-center text-[19px] leading-relaxed text-white/70">
              The IMANI platform consists of five integrated layers. Together
              they create a scalable, defensible, and institution-ready platform.
            </p>
            <LayerStackDiagram />
          </div>
        </DeckSlideFrame>
      );

    case 10:
      return (
        <DeckSlideFrame index={10}>
          <SlideEyebrow index={10} />
          <DeckTitle highlight="Infrastructure">Trust Is</DeckTitle>
          <div className="grid w-full grid-cols-2 items-center gap-12">
            <div className="space-y-6">
              <DeckBody>
                Financial networks scale only when participants trust them.
                IMANI is designed around regulatory alignment from day one.
              </DeckBody>
              <p className="text-[22px] font-medium text-white">
                Compliance is not an operational requirement.
                <br />
                <span className="gradient-text-teal">
                  It is a strategic asset.
                </span>
              </p>
              <DeckBulletList
                items={[
                  "Regulatory-first design",
                  "Institutional governance",
                  "Transparent reserve structures",
                  "Strong auditability",
                  "Risk management frameworks",
                ]}
              />
            </div>
            <div className="translate-x-[90px]">
              <TrustMoatVisual />
            </div>
          </div>
        </DeckSlideFrame>
      );

    case 11:
      return (
        <DeckSlideFrame index={11}>
          <SlideEyebrow index={11} />
          <DeckTitle highlight="Trust">Every Transaction Begins With</DeckTitle>
          <div className="mt-8 grid w-full grid-cols-2 items-center gap-12">
            <div className="space-y-6">
              <DeckBody>
                At the heart of every financial network lies confidence that
                value can be redeemed, transferred, and settled when required.
                IMANI&apos;s reserve architecture is designed to ensure that
                every unit of digital value is supported by transparent and
                regulated reserve management frameworks.
              </DeckBody>
              <DeckFeatureGrid
                items={[
                  {
                    title: "Stability",
                    description:
                      "Reserves are maintained to support redemption obligations.",
                  },
                  {
                    title: "Liquidity",
                    description:
                      "Participants maintain confidence in settlement availability.",
                  },
                  {
                    title: "Transparency",
                    description:
                      "Reserve reporting and governance structures provide institutional visibility.",
                  },
                  {
                    title: "Regulatory Alignment",
                    description:
                      "Reserve management follows approved regulatory requirements and oversight mechanisms.",
                  },
                ]}
              />
            </div>
            <TrustPyramidVisual />
          </div>
        </DeckSlideFrame>
      );

    case 12:
      return (
        <DeckSlideFrame index={12}>
          <SlideEyebrow index={12} />
          <DeckTitle highlight="From Day One">
            Regulatory Readiness Required
          </DeckTitle>
          <DeckBody>
            Building regulated financial infrastructure requires regulatory
            readiness from day one. Licensing pathways exist under the National
            Payment System framework.
          </DeckBody>
          <div className="mt-8">
            <LicensingCapitalVisual />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6">
            <DeckBulletList
              items={[
                "Annual renewal fees",
                "Regulatory reporting",
                "Compliance obligations",
                "Reserve management",
                "Operational governance",
              ]}
            />
            <DeckInsight label="Strategic Perspective">
              Licensing is not a barrier. Licensing is a moat. The complexity
              required to become compliant creates long-term defensibility.
            </DeckInsight>
          </div>
        </DeckSlideFrame>
      );

    case 13:
      return (
        <DeckSlideFrame index={13}>
          <SlideEyebrow index={13} />
          <DeckTitle highlight="Cost Center">
            Compliance Is a Product, Not a
          </DeckTitle>
          <DeckBody>
            Traditional payment systems often treat compliance as an operational
            burden. IMANI treats compliance as core infrastructure. Every
            participant, transaction, and settlement event is governed through
            embedded compliance controls designed for institutional adoption.
          </DeckBody>
          <div className="mt-8 grid grid-cols-3 gap-5">
            {[
              { title: "KYC", description: "Identity verification for individuals." },
              { title: "KYB", description: "Business verification and onboarding." },
              { title: "AML Monitoring", description: "Continuous transaction oversight." },
              { title: "Sanctions Screening", description: "Automated compliance checks." },
              { title: "Risk Scoring", description: "Behavior-based monitoring." },
              { title: "Auditability", description: "End-to-end transaction traceability." },
            ].map((item) => (
              <div key={item.title} className="gms-card rounded-2xl p-5">
                <p className="text-[18px] font-semibold text-[#56D6C2]">
                  {item.title}
                </p>
                <p className="mt-2 text-[14px] text-white/60">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <DeckInsight label="Strategic Advantage">
              The easier it becomes for regulated institutions to use IMANI, the
              faster network adoption accelerates.
            </DeckInsight>
          </div>
        </DeckSlideFrame>
      );

    case 14:
      return (
        <DeckSlideFrame index={14}>
          <SlideEyebrow index={14} />
          <DeckTitle highlight="Not Launched">
            Financial Infrastructure Is Earned,
          </DeckTitle>
          <div className="grid w-full grid-cols-2 items-center gap-12">
            <div className="space-y-6">
              <DeckBulletList
                items={[
                  "Technology can be replicated.",
                  "Licensing cannot.",
                  "Trust cannot.",
                  "Regulatory relationships cannot.",
                ]}
              />
              <DeckBody>
                IMANI&apos;s long-term advantage comes from building
                infrastructure that operates within the regulatory frameworks of
                the markets it serves.
              </DeckBody>
              <DeckBulletList
                items={[
                  "Financial institutions adopt systems they trust.",
                  "Regulators approve systems they understand.",
                  "Businesses use systems they can depend on.",
                ]}
              />
              <p className="text-[20px] font-medium text-white">
                Result: Regulatory alignment becomes a barrier to entry that
                strengthens over time.
              </p>
            </div>
            <div className="translate-x-[180px]">
              <TrustMoatVisual variant="investor" />
            </div>
          </div>
        </DeckSlideFrame>
      );

    case 15:
      return (
        <DeckSlideFrame index={15}>
          <SlideEyebrow index={15} />
          <DeckTitle highlight="in Africa">
            One of the Largest Infrastructure Opportunities
          </DeckTitle>
          <div className="grid w-full grid-cols-2 items-center gap-10">
            <div className="space-y-6">
              <DeckBody>
                The movement of value underpins every sector of the economy. As
                commerce expands, settlement demand expands alongside it.
              </DeckBody>
              <div className="space-y-3">
                {[
                  "Cross-Border Trade — Importers, exporters, distributors, manufacturers.",
                  "Enterprise Treasury — Multi-market liquidity management.",
                  "Payment Service Providers — Settlement and clearing infrastructure.",
                  "Financial Institutions — Bank-to-bank and institutional transfers.",
                  "Government & Public Sector — Regional settlement and treasury functions.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-[15px] text-white/75"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="gms-card rounded-2xl p-6">
                <p className="text-[11px] tracking-[0.2em] text-[#56D6C2] uppercase">
                  Long-Term Vision
                </p>
                <p className="mt-2 text-[20px] font-medium text-white">
                  Become the preferred settlement layer for African commerce.
                </p>
              </div>
            </div>
            <HubSpokeDiagram variant="markets" />
          </div>
        </DeckSlideFrame>
      );

    case 16:
      return (
        <DeckSlideFrame index={16}>
          <SlideEyebrow index={16} />
          <DeckTitle highlight="Scale Deliberately.">
            Start Focused.
          </DeckTitle>
          <div className="mt-8 grid grid-cols-2 items-stretch gap-10">
            <div className="space-y-6">
              <DeckBody>
                Financial networks succeed through density before breadth.
                Rather than pursuing every corridor simultaneously, IMANI will
                focus on markets where demand, liquidity, and regulatory
                readiness already exist.
              </DeckBody>
              <p className="text-[17px] font-medium text-white/85">
                Selection Criteria
              </p>
              <DeckBulletList
                items={[
                  "Trade volume",
                  "Payment activity",
                  "Regulatory maturity",
                  "Banking ecosystem readiness",
                  "Liquidity availability",
                ]}
              />
              <DeckInsight label="Initial Goal">
                Establish deep corridor liquidity before expanding regionally.
              </DeckInsight>
            </div>
            <CorridorFocusMap />
          </div>
        </DeckSlideFrame>
      );

    case 17:
      return (
        <DeckSlideFrame index={17}>
          <SlideEyebrow index={17} />
          <DeckTitle highlight="The Same">
            African Commerce Operates Across Multiple Currencies. Settlement
            Infrastructure Should Do
          </DeckTitle>
          <MultiCurrencyNetworkVisual />
        </DeckSlideFrame>
      );

    case 18:
      return (
        <DeckSlideFrame index={18}>
          <SlideEyebrow index={18} />
          <DeckTitle highlight="More Valuable">
            Every New Participant Makes the Network
          </DeckTitle>
          <div className="mt-10 grid w-full grid-cols-2 items-center gap-10">
            <div className="space-y-6">
              <DeckBody>
                Traditional software scales linearly. Settlement networks scale
                exponentially. As participants join IMANI:
              </DeckBody>
              <DeckBulletList
                items={[
                  "More liquidity becomes available",
                  "More corridors become viable",
                  "More transaction volume flows",
                  "More participants are attracted",
                ]}
              />
              <DeckInsight label="Long-Term Outcome">
                The network becomes increasingly difficult to replicate.
              </DeckInsight>
            </div>
            <NetworkCompoundingVisual />
          </div>
        </DeckSlideFrame>
      );

    case 19:
      return (
        <DeckSlideFrame index={19}>
          <SlideEyebrow index={19} />
          <DeckTitle highlight="Financial Network">
            Connected to a Broader
          </DeckTitle>
          <DeckBody>
            Settlement infrastructure is only valuable when connected to a
            broader financial network. IMANI&apos;s model relies on collaboration
            across banks, PSPs, liquidity providers, and institutions.
          </DeckBody>
          <div className="mt-8">
            <BuildingEcosystemVisual />
          </div>
          <div className="mt-6">
            <DeckInsight label="Connective Layer">
              The strongest payment networks are built through collaboration.
              IMANI is designed to become the connective layer between
              Africa&apos;s existing financial institutions and its future
              settlement infrastructure.
            </DeckInsight>
          </div>
        </DeckSlideFrame>
      );

    case 20:
      return (
        <DeckSlideFrame index={20}>
          <SlideEyebrow index={20} />
          <DeckTitle highlight="Network Usage">
            Revenue Scales With
          </DeckTitle>
          <DeckBody>
            IMANI generates revenue from the movement of value rather than the
            acquisition of users.
          </DeckBody>
          <div className="mt-10 grid grid-cols-5 gap-4">
            {[
              "Settlement Fees — Revenue generated per transaction.",
              "FX Services — Currency conversion and liquidity services.",
              "Treasury Products — Liquidity and capital optimization solutions.",
              "Enterprise APIs — Infrastructure access for institutions.",
              "Value-Added Services — Compliance, reporting, and network tools.",
            ].map((item) => (
              <div key={item} className="gms-card rounded-2xl p-5">
                <p className="text-[15px] leading-relaxed text-white/80">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center gap-6">
            {["Recurring.", "Scalable.", "Volume-driven.", "Infrastructure economics."].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#56D6C2]/30 bg-[#56D6C2]/10 px-5 py-2 text-[15px] font-medium text-[#56D6C2]"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </DeckSlideFrame>
      );

    case 21:
      return (
        <DeckSlideFrame index={21}>
          <SlideEyebrow index={21} />
          <DeckTitle highlight="One Part of the Value Chain">
            The African Payments Ecosystem Is Fragmented. Most Participants Solve
          </DeckTitle>
          <DeckBody>
            IMANI is designed to integrate multiple layers into a single
            settlement infrastructure platform.
          </DeckBody>
          <div className="mt-8">
            <CompetitiveLandscapeVisual />
          </div>
        </DeckSlideFrame>
      );

    case 22:
      return (
        <DeckSlideFrame index={22}>
          <SlideEyebrow index={22} />
          <DeckTitle highlight="Others Depend On">
            Building the Infrastructure Layer
          </DeckTitle>
          <p className="mt-4 text-[22px] text-white/75">
            Most competitors focus on applications. IMANI focuses on
            infrastructure. Applications change. Infrastructure endures.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-5">
            {[
              {
                title: "Regulatory-First Architecture",
                description: "Designed for institutional adoption.",
              },
              {
                title: "Reserve-Backed Trust",
                description: "Confidence in settlement integrity.",
              },
              {
                title: "Embedded Compliance",
                description: "Reduced friction for regulated participants.",
              },
              {
                title: "Multi-Currency Design",
                description: "Built for regional interoperability.",
              },
              {
                title: "Network Effects",
                description: "Value increases as adoption grows.",
              },
              {
                title: "Enterprise Focus",
                description: "Large transaction volumes from day one.",
              },
            ].map((item) => (
              <div key={item.title} className="gms-card rounded-2xl p-6">
                <p className="text-[18px] font-semibold text-white">
                  {item.title}
                </p>
                <p className="mt-2 text-[14px] text-white/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </DeckSlideFrame>
      );

    case 23:
      return (
        <DeckSlideFrame index={23}>
          <SlideEyebrow index={23} />
          <DeckTitle highlight="Benefit From Scale">
            The Best Financial Businesses
          </DeckTitle>
          <div className="mt-10 grid grid-cols-2 gap-12">
            <div className="space-y-6">
              <DeckBody>
                Infrastructure companies operate differently from consumer
                applications. As adoption grows, value compounds across the
                network while incremental operating costs decline.
              </DeckBody>
              <div className="space-y-3">
                {[
                  "More Participants — Increase transaction opportunities.",
                  "More Liquidity — Improves settlement efficiency.",
                  "More Corridors — Expand network utility.",
                  "More Volume — Drives revenue growth.",
                  "More Data — Improves risk management and operational intelligence.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-[15px] text-white/75"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <DeckInsight label="Key Insight">
                Each new participant increases the value of the network for
                every existing participant.
              </DeckInsight>
            </div>
            <Flywheel
              steps={[
                "Participants",
                "Liquidity",
                "Transactions",
                "Revenue",
                "Network Expansion",
                "Participants",
              ]}
            />
          </div>
        </DeckSlideFrame>
      );

    case 24:
      return (
        <DeckSlideFrame index={24}>
          <SlideEyebrow index={24} />
          <DeckTitle highlight="One Infrastructure Layer">
            Multiple Revenue Streams,
          </DeckTitle>
          <DeckBody>
            Unlike point solutions that rely on a single product, IMANI
            generates revenue across several layers of the settlement ecosystem.
          </DeckBody>
          <div className="mt-10 grid grid-cols-5 gap-4">
            {[
              { title: "Settlement Fees", description: "Transaction-based revenue." },
              { title: "FX Conversion Revenue", description: "Cross-currency settlement services." },
              { title: "Treasury Solutions", description: "Liquidity optimization products." },
              { title: "Enterprise APIs", description: "Infrastructure access and integrations." },
              { title: "Compliance Services", description: "Value-added institutional tooling." },
            ].map((item) => (
              <div key={item.title} className="gms-card rounded-2xl p-6">
                <p className="text-[17px] font-semibold text-[#56D6C2]">
                  {item.title}
                </p>
                <p className="mt-2 text-[14px] text-white/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-2 items-stretch gap-6">
            <div className="flex items-center">
              <p className="text-[17px] text-white/70">
                As volume increases, revenue expands across multiple product
                categories without requiring proportional increases in customer
                acquisition costs.
              </p>
            </div>
            <DeckInsight label="Investor Takeaway">
              The platform monetizes the movement of value itself.
            </DeckInsight>
          </div>
        </DeckSlideFrame>
      );

    case 25:
      return (
        <DeckSlideFrame index={25}>
          <SlideEyebrow index={25} />
          <DeckTitle highlight="Through Discipline">
            Trust Is Maintained
          </DeckTitle>
          <div className="mt-10 grid w-full grid-cols-2 items-center gap-12">
            <div className="space-y-6">
              <DeckBody>
                Financial infrastructure succeeds when risk is systematically
                managed. IMANI has been designed with resilience at every layer
                of the platform.
              </DeckBody>
              <DeckFeatureGrid
                items={[
                  {
                    title: "Regulatory Oversight",
                    description:
                      "Alignment with local regulatory frameworks.",
                  },
                  {
                    title: "Reserve Governance",
                    description: "Transparent reserve management.",
                  },
                  {
                    title: "Compliance Monitoring",
                    description: "Continuous transaction surveillance.",
                  },
                  {
                    title: "Operational Redundancy",
                    description: "Business continuity and reliability.",
                  },
                  {
                    title: "Security Infrastructure",
                    description:
                      "Enterprise-grade controls and protections.",
                  },
                ]}
              />
              <DeckInsight label="Philosophy">
                Move fast where possible. Move responsibly where required.
              </DeckInsight>
            </div>
            <div className="flex items-center justify-center">
              <ShieldArchitecture />
            </div>
          </div>
        </DeckSlideFrame>
      );

    case 26:
      return (
        <DeckSlideFrame index={26}>
          <SlideEyebrow index={26} />
          <DeckTitle highlight="Continental Scale">
            Building Toward
          </DeckTitle>
          <DeckBody>
            Infrastructure is built in stages. Each phase strengthens network
            density, trust, and liquidity.
          </DeckBody>
          <div className="mt-10 grid grid-cols-4 gap-5">
            {expansionPhases.map((phase, i) => (
              <div key={phase.phase} className="gms-card relative rounded-2xl p-6">
                <span className="absolute -top-3 left-6 rounded-full border border-[#56D6C2]/40 bg-[#0d0f1a] px-3 py-0.5 text-[11px] tracking-wider text-[#56D6C2] uppercase">
                  {phase.phase}
                </span>
                <p className="mt-4 text-[18px] font-semibold text-white">
                  {phase.title}
                </p>
                <p className="mt-2 text-[14px] text-white/60">
                  {phase.description}
                </p>
                {i < expansionPhases.length - 1 && (
                  <ArrowRight className="absolute -right-4 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-[#56D6C2]/50 lg:block" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-10">
            <DeckInsight label="Long-Term Vision">
              Connect every major economic corridor across Africa.
            </DeckInsight>
          </div>
        </DeckSlideFrame>
      );

    case 27:
      return (
        <DeckSlideFrame index={27}>
          <SlideEyebrow index={27} />
          <DeckTitle highlight="Opportunity">The Platform</DeckTitle>
          <p className="mt-4 text-[24px] font-medium text-white/85">
            Settlement is the foundation. Not the destination.
          </p>
          <DeckBody>
            Once trust, liquidity, and network participation are established,
            additional products become possible.
          </DeckBody>
          <div className="mt-10 grid grid-cols-3 gap-5">
            {[
              "Treasury Management",
              "Trade Finance",
              "Liquidity Products",
              "Cross-Border Credit",
              "Infrastructure APIs",
              "Embedded Financial Services",
            ].map((item) => (
              <div
                key={item}
                className="gms-card rounded-2xl px-6 py-5 text-[18px] font-medium text-white"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-10">
            <DeckInsight label="Strategic Insight">
              Every major financial network expands beyond its original use
              case. Visa started with payments. Stripe started with payment
              processing. IMANI starts with settlement.
            </DeckInsight>
          </div>
        </DeckSlideFrame>
      );

    case 28:
      return (
        <DeckSlideFrame index={28} showParticles>
          <SlideEyebrow index={28} />
          <DeckTitle size="xl" highlight="For Africa">
            The Financial Operating System
          </DeckTitle>
          <div className="grid h-full grid-cols-2 gap-12">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-5">
                <DeckBody>
                  Imagine a future where businesses can move value between
                  African markets as easily as sending data across the internet.
                  No unnecessary intermediaries. No fragmented infrastructure.
                  No excessive delays.
                </DeckBody>
                <DeckBody>
                  Just seamless movement of value across a connected continent.
                </DeckBody>
              </div>
              <div className="space-y-4">
                <DeckInsight label="Our Mission">
                  Enable trusted, efficient, and regulated financial connectivity
                  across Africa.
                </DeckInsight>
                <p className="text-[26px] font-semibold gradient-text-teal">
                  African trade should move through African infrastructure.
                </p>
              </div>
            </div>
            <AfricaNetworkMap variant="full" className="h-full" />
          </div>
        </DeckSlideFrame>
      );

    case 29:
      return (
        <DeckSlideFrame index={29}>
          <SlideEyebrow index={29} />
          <DeckTitle highlight="The Network">Accelerating</DeckTitle>
          <div className="mt-8">
            <AllocationDonut />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6">
            <DeckInsight label="Funding Objective">
              Build the foundation required to scale from initial corridors to a
              continental settlement network.
            </DeckInsight>
            <DeckInsight label="Investor Message">
              This capital funds infrastructure. Infrastructure creates
              networks. Networks create durable enterprise value.
            </DeckInsight>
          </div>
        </DeckSlideFrame>
      );

    case 30:
      return (
        <DeckSlideFrame index={30}>
          <SlideEyebrow index={30} />
          <DeckTitle highlight="The Long Term">Building For</DeckTitle>
          <div className="mt-10 grid grid-cols-[0.9fr_1.1fr] gap-12">
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(52,33,107,0.6) 0%, rgba(86,214,194,0.15) 50%, rgba(13,15,26,0.9) 100%)",
                }}
              />
              <div className="relative flex h-full min-h-[420px] flex-col items-center justify-center p-10">
                <div className="flex h-32 w-32 items-center justify-center rounded-full border border-white/20 bg-white/[0.06]">
                  <Users className="h-16 w-16 text-white/40" />
                </div>
                <p className="mt-6 text-[13px] tracking-[0.22em] text-white/45 uppercase">
                  Leadership Team
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <DeckBody>
                The opportunity requires expertise across finance, regulation,
                technology, and operations. IMANI&apos;s leadership combines
                experience across:
              </DeckBody>
              <DeckFeatureGrid
                items={[
                  {
                    title: "Financial Services",
                    description:
                      "Understanding of regulated financial systems.",
                  },
                  {
                    title: "Payments & Infrastructure",
                    description:
                      "Experience building scalable transaction platforms.",
                  },
                  {
                    title: "Technology",
                    description:
                      "Enterprise-grade product and platform development.",
                  },
                  {
                    title: "Governance & Compliance",
                    description:
                      "Institutional trust and risk management expertise.",
                  },
                ]}
              />
              <DeckInsight label="What Matters Most">
                Execution. Trust. Long-term thinking.
              </DeckInsight>
            </div>
          </div>
        </DeckSlideFrame>
      );

    case 31:
      return (
        <DeckSlideFrame index={31} showParticles>
          <ClosingBackdrop>
            <div className="flex w-full max-w-[1180px] flex-col items-center gap-10 text-center">
              <DeckHeroBrand size="large" priority className="justify-center" />
              <p className="text-[30px] font-medium tracking-tight text-white/85">
                Building Africa&apos;s Settlement Network
              </p>
              <div className="max-w-[920px] space-y-5">
                <DeckBody>
                  Trade is growing. Commerce is expanding. Regional integration is
                  accelerating. Yet the infrastructure that moves value across
                  Africa remains fragmented — one of the most significant
                  infrastructure opportunities of the coming decade.
                </DeckBody>
                <DeckBody>
                  IMANI exists to solve that challenge. Not by building another
                  payment application, but by building the settlement network that
                  powers the next generation of African commerce.
                </DeckBody>
              </div>
              <div className="grid w-full grid-cols-3 gap-6">
                <DeckStatCard value="Build" label="the rails." />
                <DeckStatCard value="Enable" label="the network." />
                <DeckStatCard value="Power" label="the future." />
              </div>
            </div>
          </ClosingBackdrop>
        </DeckSlideFrame>
      );

    default:
      return null;
  }
}
