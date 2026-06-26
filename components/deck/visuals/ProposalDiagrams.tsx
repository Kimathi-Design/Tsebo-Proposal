"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { ArrowDown, ArrowRight, BarChart3, CheckCircle2, FileText, QrCode, Rocket, Scale } from "lucide-react";
import { Fragment, type ReactNode } from "react";
import { ASSETS } from "@/lib/assets";
import {
  deckIcon,
  EXECUTIVE_SUMMARY_CURRENT_ICONS,
  EXECUTIVE_SUMMARY_FUTURE_ICONS,
  SOLUTION_OVERVIEW_FLOW_ICONS,
  TRANSACTION_WORKFLOW_ICONS,
  ONLINE_PROCESSING_ICONS,
  OFFLINE_PROCESSING_ICONS,
  CERTIFICATE_LIFECYCLE_ICONS,
  QR_CALLOUT_ICONS,
  DASHBOARD_MODULE_ICONS,
  AVAILABLE_REPORT_ICONS,
  IMPLEMENTATION_PHASE_ICONS,
  WORKSTREAM_ICONS,
  TESTING_PYRAMID_ICONS,
  LEARNING_JOURNEY_ICONS,
  SUPPORT_LIFECYCLE_ICONS,
  ESCALATION_LEVEL_ICONS,
  RISK_TREATMENT_ICONS,
  SUPPLIER_RESPONSE_ICONS,
  MOTHEO_RADIAL_NODE_ICONS,
  SAP_INTEGRATION_FLOW_ICONS,
  SAP_INTEGRATION_SIDE_ICONS,
  SOLUTION_ECOSYSTEM_SIDE_ICONS,
  SOLUTION_ECOSYSTEM_STEP_ICONS,
} from "@/components/deck/deck-icons";
import { DeckVisualPanelLabel } from "@/components/deck/DeckSlideFrame";

function FlowArrow({ horizontal = false }: { horizontal?: boolean }) {
  return (
    <span className="deck-flow-connector" aria-hidden>
      {horizontal ? <ArrowRight strokeWidth={3} /> : <ArrowDown strokeWidth={3} />}
    </span>
  );
}

function FlowStepTile({
  compact,
  children,
}: {
  compact?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`deck-flow-step-card__tile${
        compact ? " deck-flow-step-card__tile--compact" : " deck-flow-step-card__tile--default"
      }`}
    >
      {children}
    </div>
  );
}

export function VerticalFlowDiagram({
  items,
  compact = true,
  icons,
  className,
}: {
  items: readonly (string | { title: string; description?: string })[];
  compact?: boolean;
  icons?: readonly LucideIcon[];
  className?: string;
}) {
  const hasDescriptions = items.some(
    (item) => typeof item !== "string" && Boolean(item.description),
  );

  return (
    <div
      className={`deck-architecture-flow flex h-full min-h-0 w-full flex-1 flex-col${
        hasDescriptions ? " deck-architecture-flow--described" : ""
      }${className ? ` ${className}` : ""}`}
    >
      {items.map((item, index) => {
        const title = typeof item === "string" ? item : item.title;
        const description = typeof item === "string" ? undefined : item.description;
        const Icon = icons?.[index] ?? icons?.[icons.length - 1];

        return (
          <div
            key={`${title}-${index}`}
            className={`deck-architecture-flow__step flex min-h-0 flex-1 flex-col items-center${
              hasDescriptions ? " deck-architecture-flow__step--described" : ""
            }`}
          >
            <div className="flex w-full min-h-0 flex-1 items-stretch">
              <div
                className={`deck-flow-step-card gms-card w-full rounded-2xl ${
                  hasDescriptions ? "deck-flow-step-card--described" : "h-full"
                } ${compact ? "p-2.5" : "p-5"}`}
              >
                <div
                  className={`deck-flow-step-card__row ${
                    description ? "items-start" : "items-center"
                  }`}
                >
                  {compact && (
                    <div
                      className={`deck-flow-step-card__number-col${
                        compact ? " deck-flow-step-card__number-col--compact" : ""
                      }`}
                    >
                      <FlowStepTile compact={compact}>
                        <span className="deck-flow-step-card__number deck-flow-step-card__number--compact tabular-nums">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </FlowStepTile>
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <p
                      className={`deck-flow-step-card__title${
                        compact ? " deck-flow-step-card__title--compact" : ""
                      }`}
                    >
                      {title}
                    </p>
                    {description && (
                      <p className="deck-type-card-body mt-1 text-[color:var(--gms-text-muted)]">
                        {description}
                      </p>
                    )}
                  </div>
                  {Icon && (
                    <div
                      className={`deck-flow-step-card__icon-col${
                        compact ? " deck-flow-step-card__icon-col--compact" : ""
                      }${description ? " self-center" : ""}`}
                    >
                      <FlowStepTile compact={compact}>{deckIcon(Icon, "sm")}</FlowStepTile>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {index < items.length - 1 && <FlowArrow />}
          </div>
        );
      })}
    </div>
  );
}

function TransactionWorkflowStepCard({
  step,
  index,
  icon,
}: {
  step: string;
  index: number;
  icon?: LucideIcon;
}) {
  return (
    <div className="deck-flow-step-card gms-card flex h-full min-h-0 w-full flex-col justify-center rounded-2xl px-2.5 py-2">
      <div className="deck-flow-step-card__row items-center gap-2">
        <div className="deck-flow-step-card__number-col deck-flow-step-card__number-col--compact shrink-0">
          <FlowStepTile compact>
            <span className="deck-flow-step-card__number deck-flow-step-card__number--compact tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
          </FlowStepTile>
        </div>
        <p className="deck-flow-step-card__title deck-flow-step-card__title--compact min-w-0 flex-1">
          {step}
        </p>
        {icon && (
          <div className="deck-flow-step-card__icon-col deck-flow-step-card__icon-col--compact shrink-0">
            <FlowStepTile compact>{deckIcon(icon, "sm")}</FlowStepTile>
          </div>
        )}
      </div>
    </div>
  );
}

export function TransactionWorkflowVisual({
  steps,
  icons = TRANSACTION_WORKFLOW_ICONS,
}: {
  steps: readonly string[];
  icons?: readonly LucideIcon[];
}) {
  const row1 = steps.slice(0, 4);
  const row2 = steps.slice(4, 8);

  return (
    <div className="transaction-workflow-visual flex h-full min-h-0 w-full flex-col">
      <div className="transaction-workflow-visual__row flex min-h-0 flex-1 items-stretch gap-1">
        {row1.map((step, index) => (
          <Fragment key={step}>
            <div className="flex min-h-0 min-w-0 flex-1">
              <TransactionWorkflowStepCard
                step={step}
                index={index}
                icon={icons[index] ?? icons[icons.length - 1]}
              />
            </div>
            {index < row1.length - 1 && (
              <div className="transaction-workflow-visual__arrow-h flex shrink-0 items-center">
                <FlowArrow horizontal />
              </div>
            )}
          </Fragment>
        ))}
      </div>
      <div className="transaction-workflow-visual__bridge grid shrink-0 grid-cols-4 gap-1">
        <div aria-hidden />
        <div aria-hidden />
        <div aria-hidden />
        <div className="flex items-center justify-center">
          <FlowArrow />
        </div>
      </div>
      <div className="transaction-workflow-visual__row flex min-h-0 flex-1 items-stretch gap-1">
        {row2.map((step, index) => (
          <Fragment key={step}>
            <div className="flex min-h-0 min-w-0 flex-1">
              <TransactionWorkflowStepCard
                step={step}
                index={index + 4}
                icon={icons[index + 4] ?? icons[icons.length - 1]}
              />
            </div>
            {index < row2.length - 1 && (
              <div className="transaction-workflow-visual__arrow-h flex shrink-0 items-center">
                <FlowArrow horizontal />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export function HorizontalWorkflow({
  steps,
}: {
  steps: readonly string[];
}) {
  return (
    <div className="flex h-full min-h-0 w-full flex-1 items-center overflow-x-auto">
      <div className="flex min-w-full items-center justify-between gap-1 px-1">
        {steps.map((step, index) => (
          <div key={step} className="flex min-w-0 flex-1 items-center">
            <div className="gms-card flex min-w-0 flex-1 flex-col items-center rounded-md px-2 py-3 text-center">
              <span className="text-[10px] font-semibold tracking-[0.12em] text-deck-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mt-1 text-[11px] font-semibold leading-tight text-[color:var(--gms-text)]">
                {step}
              </span>
            </div>
            {index < steps.length - 1 && (
              <span className="mx-0.5 shrink-0 text-deck-accent" aria-hidden>
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function LayeredArchitectureDiagram({
  layers,
  icons,
}: {
  layers: readonly { label: string; color: string }[];
  icons?: readonly LucideIcon[];
}) {
  return (
    <div className="deck-layered-architecture flex h-full min-h-0 w-full flex-1 flex-col">
      {layers.map((layer, index) => {
        const Icon = icons?.[index] ?? icons?.[icons.length - 1];

        return (
          <div key={layer.label} className="deck-layered-architecture__segment flex min-h-0 flex-1 flex-col">
            <div
              className="deck-layered-architecture__layer flex h-full w-full min-h-0 flex-1 items-center gap-2 rounded-2xl border px-3 py-2 shadow-sm"
              style={{ backgroundColor: layer.color, borderColor: layer.color }}
            >
              <div className="deck-layered-architecture__number-col shrink-0">
                <div className="deck-layered-architecture__tile">
                  <span className="text-[13px] font-semibold tabular-nums tracking-[0.16em] text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <p className="deck-layered-architecture__label min-w-0 flex-1 text-center text-[15px] font-semibold leading-snug text-white">
                {layer.label}
              </p>
              {Icon && (
                <div className="deck-layered-architecture__icon-col shrink-0">
                  <div className="deck-layered-architecture__tile text-white">
                    {deckIcon(Icon, "sm")}
                  </div>
                </div>
              )}
            </div>
            {index < layers.length - 1 && (
              <div className="deck-layered-architecture__arrow" aria-hidden>
                <FlowArrow />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function SplitCompareCard({
  item,
  index,
  icon,
  numberTone = "accent",
}: {
  item: string;
  index: number;
  icon?: LucideIcon;
  numberTone?: "accent" | "green";
}) {
  return (
    <div className="deck-split-compare-card deck-flow-step-card gms-card flex min-h-0 flex-1 flex-col justify-center rounded-2xl p-2.5">
      <div className="deck-flow-step-card__row">
        <div className="deck-flow-step-card__number-col deck-flow-step-card__number-col--compact">
          <FlowStepTile compact>
            <span
              className={`deck-flow-step-card__number deck-flow-step-card__number--compact tabular-nums${
                numberTone === "green" ? " text-[color:var(--ibd-green)]" : ""
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </FlowStepTile>
        </div>
        <p className="deck-flow-step-card__title deck-flow-step-card__title--compact">{item}</p>
        {icon && (
          <div className="deck-flow-step-card__icon-col deck-flow-step-card__icon-col--compact">
            <FlowStepTile compact>{deckIcon(icon, "sm")}</FlowStepTile>
          </div>
        )}
      </div>
    </div>
  );
}

export function SplitCompareDiagram({
  leftTitle,
  rightTitle,
  leftItems,
  rightItems,
  leftIcons,
  rightIcons,
}: {
  leftTitle: string;
  rightTitle: string;
  leftItems: readonly string[];
  rightItems: readonly string[];
  leftIcons?: readonly LucideIcon[];
  rightIcons?: readonly LucideIcon[];
}) {
  return (
    <div className="deck-split-compare grid h-full min-h-0 flex-1 grid-cols-2 gap-4">
      <div className="flex min-h-0 flex-col gap-2">
        <DeckVisualPanelLabel>{leftTitle}</DeckVisualPanelLabel>
        <div className="deck-split-compare__list flex min-h-0 flex-1 flex-col gap-2">
          {leftItems.map((item, index) => (
            <SplitCompareCard
              key={item}
              item={item}
              index={index}
              icon={leftIcons?.[index] ?? leftIcons?.[leftIcons.length - 1]}
            />
          ))}
        </div>
      </div>
      <div className="flex min-h-0 flex-col gap-2">
        <DeckVisualPanelLabel>{rightTitle}</DeckVisualPanelLabel>
        <div className="deck-split-compare__list flex min-h-0 flex-1 flex-col gap-2">
          {rightItems.map((item, index) => (
            <SplitCompareCard
              key={item}
              item={item}
              index={index}
              icon={rightIcons?.[index] ?? rightIcons?.[rightIcons.length - 1]}
              numberTone="green"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function HubSpokeDiagram({
  center,
  nodes,
  gateway = "Infinity Compliance Gateway",
  icons,
}: {
  center: string;
  nodes: readonly string[];
  gateway?: string;
  icons?: readonly LucideIcon[];
}) {
  const hubX = 50;
  const hubY = 38;
  const radiusX = 44;
  const radiusY = 36;
  const gatewayY = 94;

  return (
    <div className="deck-hub-spoke flex h-full min-h-0 flex-1 flex-col gap-3">
      <div className="relative min-h-0 flex-1">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full text-deck-accent/35"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          {nodes.map((node, index) => {
            const angle = ((360 / nodes.length) * index - 90) * (Math.PI / 180);
            const nodeX = hubX + radiusX * Math.cos(angle);
            const nodeY = hubY + radiusY * Math.sin(angle);

            return (
              <g key={`${node}-line`}>
                <line
                  x1={hubX}
                  y1={hubY}
                  x2={nodeX}
                  y2={nodeY}
                  stroke="currentColor"
                  strokeWidth="0.35"
                  strokeDasharray="1.2 0.8"
                />
                <line
                  x1={nodeX}
                  y1={nodeY}
                  x2={hubX}
                  y2={gatewayY}
                  stroke="currentColor"
                  strokeWidth="0.25"
                  strokeDasharray="0.8 0.6"
                  opacity="0.65"
                />
              </g>
            );
          })}
        </svg>

        <div
          className="deck-hub-spoke__center gms-card absolute z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 rounded-full px-3 py-2 text-center shadow-[0_8px_24px_-8px_rgba(52,33,107,0.28)]"
          style={{ left: `${hubX}%`, top: `${hubY}%`, width: "6.75rem", height: "6.75rem" }}
        >
          <Image
            src={ASSETS.brands.bweLogo}
            alt=""
            width={1799}
            height={483}
            aria-hidden
            className="relative z-10 h-4 w-auto max-w-[4.25rem] shrink-0 object-contain"
          />
          <p className="relative z-10 mt-3 text-[10px] font-bold leading-tight tracking-[0.06em] text-deck-accent uppercase">
            {center}
          </p>
        </div>

        {nodes.map((node, index) => {
          const angle = ((360 / nodes.length) * index - 90) * (Math.PI / 180);
          const nodeX = hubX + radiusX * Math.cos(angle);
          const nodeY = hubY + radiusY * Math.sin(angle);
          const Icon = icons?.[index] ?? icons?.[icons.length - 1];

          return (
            <div
              key={node}
              className="deck-hub-spoke__node absolute z-10 w-[11rem] -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${nodeX}%`, top: `${nodeY}%` }}
            >
              <div className="deck-flow-step-card gms-card rounded-2xl p-2.5">
                <div className="deck-flow-step-card__row">
                  <div className="deck-flow-step-card__number-col deck-flow-step-card__number-col--compact">
                    <FlowStepTile compact>
                      <span className="deck-flow-step-card__number deck-flow-step-card__number--compact tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </FlowStepTile>
                  </div>
                  <p className="deck-flow-step-card__title deck-flow-step-card__title--compact">
                    {node}
                  </p>
                  {Icon && (
                    <div className="deck-flow-step-card__icon-col deck-flow-step-card__icon-col--compact">
                      <FlowStepTile compact>{deckIcon(Icon, "sm")}</FlowStepTile>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="deck-hub-spoke__gateway flex shrink-0 items-center justify-center gap-3 rounded-lg border border-[color:var(--gms-border)] bg-white px-4 py-3 shadow-[0_8px_24px_-12px_rgba(52,33,107,0.18)]">
        <Image
          src={ASSETS.brands.ibdFavicon}
          alt=""
          width={16}
          height={16}
          aria-hidden
          className="h-4 w-4 shrink-0 object-contain"
        />
        <p className="text-[13px] font-bold tracking-[0.08em] text-deck-accent uppercase">
          {gateway}
        </p>
        <Image
          src={ASSETS.brands.motheoLogo}
          alt=""
          width={3770}
          height={3290}
          aria-hidden
          className="h-3.5 w-auto shrink-0 object-contain"
        />
      </div>
    </div>
  );
}

/** Compact Motheo strip — hub left (2 rows tall), 4×2 service grid right */
export function MotheoEngineStripVisual({
  nodes,
  icons = MOTHEO_RADIAL_NODE_ICONS,
}: {
  nodes: readonly string[];
  icons?: readonly LucideIcon[];
}) {
  return (
    <div className="motheo-engine-strip flex h-full min-h-0 w-full items-stretch gap-1.5">
      <div className="motheo-engine-strip__hub flex shrink-0 flex-col items-center justify-center gap-1 rounded-xl bg-deck-accent px-2 py-2 text-center">
        <FlowStepTile compact>{deckIcon(Scale, "xs")}</FlowStepTile>
        <span className="text-[13px] font-semibold leading-tight text-white">Motheo</span>
        <span className="text-[13px] font-semibold leading-tight text-white">Engine</span>
      </div>
      <div className="motheo-engine-strip__grid grid min-h-0 min-w-0 flex-1 grid-cols-4 grid-rows-2 gap-1.5">
        {nodes.map((node, index) => (
          <div
            key={node}
            className="motheo-engine-strip__card gms-card flex min-h-0 min-w-0 items-center gap-1.5 rounded-xl px-2 py-1.5"
          >
            <FlowStepTile compact>
              {deckIcon(icons[index] ?? icons[icons.length - 1]!, "xs")}
            </FlowStepTile>
            <span className="deck-type-body-compact min-w-0 flex-1 leading-tight">{node}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** @deprecated Use MotheoEngineStripVisual */
export function MotheoEngineHorizontalVisual({
  center: _center,
  nodes,
  icons,
}: {
  center: string;
  nodes: readonly string[];
  icons?: readonly LucideIcon[];
}) {
  return <MotheoEngineStripVisual nodes={nodes} icons={icons} />;
}

export function RadialEngineDiagram({
  center,
  nodes,
}: {
  center: string;
  nodes: readonly string[];
}) {
  const angleStep = 360 / nodes.length;
  return (
    <div className="relative mx-auto flex h-full min-h-0 w-full max-w-md flex-1 items-center justify-center">
      <div className="relative flex h-56 w-56 items-center justify-center">
        <div className="absolute inset-8 rounded-full border border-dashed border-[color:var(--gms-border)]" />
        <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-deck-accent p-2 text-center text-[10px] font-bold leading-tight text-white">
          {center}
        </div>
        {nodes.map((node, index) => {
          const angle = (angleStep * index - 90) * (Math.PI / 180);
          const radius = 108;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <div
              key={node}
              className="gms-card absolute flex h-14 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md px-1 text-center text-[9px] font-semibold leading-tight text-[color:var(--gms-text)]"
              style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
            >
              {node}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function EcosystemFlowCard({
  title,
  index,
  icon,
}: {
  title: string;
  index: number;
  icon?: LucideIcon;
}) {
  return (
    <div className="deck-flow-step-card gms-card flex h-full w-full flex-col justify-center rounded-2xl px-2.5 py-2">
      <div className="deck-flow-step-card__row gap-2">
        <div className="deck-flow-step-card__number-col deck-flow-step-card__number-col--compact">
          <FlowStepTile compact>
            <span className="deck-flow-step-card__number deck-flow-step-card__number--compact tabular-nums">
              {String(index).padStart(2, "0")}
            </span>
          </FlowStepTile>
        </div>
        <p className="deck-flow-step-card__title deck-flow-step-card__title--compact min-w-0 flex-1">
          {title}
        </p>
        {icon && (
          <div className="deck-flow-step-card__icon-col deck-flow-step-card__icon-col--compact">
            <FlowStepTile compact>{deckIcon(icon, "sm")}</FlowStepTile>
          </div>
        )}
      </div>
    </div>
  );
}

function EcosystemFlowSegment({
  children,
  showArrow = false,
}: {
  children: ReactNode;
  showArrow?: boolean;
}) {
  return (
    <div className="solution-ecosystem-visual__segment flex min-h-0 flex-1 flex-col">
      <div className="flex w-full min-h-0 flex-1 items-stretch">{children}</div>
      {showArrow && (
        <div className="solution-ecosystem-visual__arrow" aria-hidden>
          <FlowArrow />
        </div>
      )}
    </div>
  );
}

/** Enterprise ecosystem flow per PAGE 11 — users → SAP/CRM branch → gateway → Motheo → RSL + side cards */
export function SolutionEcosystemVisual({
  sideCards,
}: {
  sideCards: readonly string[];
}) {
  const steps = [
    { title: "Barloworld Users", icon: SOLUTION_ECOSYSTEM_STEP_ICONS[0] },
    { title: "SAP ERP", icon: SOLUTION_ECOSYSTEM_STEP_ICONS[1] },
    { title: "CRM", icon: SOLUTION_ECOSYSTEM_STEP_ICONS[2] },
    { title: "Infinity Compliance Gateway", icon: SOLUTION_ECOSYSTEM_STEP_ICONS[3] },
    { title: "Motheo Compliance Engine", icon: SOLUTION_ECOSYSTEM_STEP_ICONS[4] },
    { title: "Revenue Services Lesotho", icon: SOLUTION_ECOSYSTEM_STEP_ICONS[5] },
  ] as const;

  return (
    <div className="solution-ecosystem-visual grid h-full min-h-0 flex-1 grid-cols-[1fr_5.75rem] gap-3">
      <div className="solution-ecosystem-visual__flow flex h-full min-h-0 flex-1 flex-col">
        <EcosystemFlowSegment showArrow>
          <EcosystemFlowCard title={steps[0].title} index={1} icon={steps[0].icon} />
        </EcosystemFlowSegment>
        <EcosystemFlowSegment showArrow>
          <div className="solution-ecosystem-visual__branch grid h-full w-full min-h-0 grid-cols-2 gap-2">
            <EcosystemFlowCard title={steps[1].title} index={2} icon={steps[1].icon} />
            <EcosystemFlowCard title={steps[2].title} index={3} icon={steps[2].icon} />
          </div>
        </EcosystemFlowSegment>
        <EcosystemFlowSegment showArrow>
          <EcosystemFlowCard title={steps[3].title} index={4} icon={steps[3].icon} />
        </EcosystemFlowSegment>
        <EcosystemFlowSegment showArrow>
          <EcosystemFlowCard title={steps[4].title} index={5} icon={steps[4].icon} />
        </EcosystemFlowSegment>
        <EcosystemFlowSegment>
          <EcosystemFlowCard title={steps[5].title} index={6} icon={steps[5].icon} />
        </EcosystemFlowSegment>
      </div>
      <div className="solution-ecosystem-visual__side-cards flex h-full min-h-0 flex-col gap-2">
        {sideCards.map((card, index) => (
          <div
            key={card}
            className="gms-card flex min-h-0 flex-1 flex-col items-center justify-center gap-1.5 rounded-2xl px-1.5 py-2 text-center"
          >
            <FlowStepTile compact>
              {deckIcon(
                SOLUTION_ECOSYSTEM_SIDE_ICONS[index] ??
                  SOLUTION_ECOSYSTEM_SIDE_ICONS[SOLUTION_ECOSYSTEM_SIDE_ICONS.length - 1]!,
                "sm",
              )}
            </FlowStepTile>
            <span className="text-[11px] font-semibold leading-tight tracking-[0.06em] text-deck-accent uppercase">
              {card}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Compact solution overview — single-column flow + bottom capability strip */
export function SolutionOverviewVisual({
  flow,
  sideCards,
}: {
  flow: readonly string[];
  sideCards: readonly string[];
}) {
  return (
    <div className="solution-overview-visual flex h-full min-h-0 flex-1 flex-col gap-2">
      <div className="solution-overview-visual__flow min-h-0 flex-1 overflow-hidden">
        <VerticalFlowDiagram items={flow} icons={SOLUTION_OVERVIEW_FLOW_ICONS} compact />
      </div>
      <div className="solution-overview-visual__side grid shrink-0 grid-cols-5 gap-1.5">
        {sideCards.map((card, index) => (
          <div
            key={card}
            className="deck-flow-step-card gms-card flex h-full w-full flex-col justify-center rounded-2xl px-1.5 py-1.5"
          >
            <div className="deck-flow-step-card__row items-center gap-1.5">
              <div className="deck-flow-step-card__number-col deck-flow-step-card__number-col--compact shrink-0">
                <FlowStepTile compact>
                  {deckIcon(
                    SOLUTION_ECOSYSTEM_SIDE_ICONS[index] ??
                      SOLUTION_ECOSYSTEM_SIDE_ICONS[SOLUTION_ECOSYSTEM_SIDE_ICONS.length - 1]!,
                    "sm",
                  )}
                </FlowStepTile>
              </div>
              <p className="deck-flow-step-card__title deck-flow-step-card__title--compact min-w-0 flex-1 text-[13px] leading-tight">
                {card}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** SAP integration architecture — vertical flow + compact side-card strip (fits narrow horizontal panel) */
export function SapIntegrationVisual({
  flow,
  sideCards,
}: {
  flow: readonly string[];
  sideCards: readonly string[];
}) {
  return (
    <div className="sap-integration-visual flex h-full min-h-0 flex-1 flex-col gap-2">
      <div className="sap-integration-visual__flow min-h-0 flex-1 overflow-hidden">
        <VerticalFlowDiagram
          items={flow}
          icons={SAP_INTEGRATION_FLOW_ICONS}
          compact
        />
      </div>
      <div className="sap-integration-visual__side grid shrink-0 grid-cols-4 gap-2">
        {sideCards.map((card, index) => (
          <div
            key={card}
            className="deck-flow-step-card gms-card flex h-full w-full flex-col justify-center rounded-2xl px-2.5 py-2"
          >
            <div className="deck-flow-step-card__row gap-2">
              <div className="deck-flow-step-card__number-col deck-flow-step-card__number-col--compact">
                <FlowStepTile compact>
                  {deckIcon(
                    SAP_INTEGRATION_SIDE_ICONS[index] ??
                      SAP_INTEGRATION_SIDE_ICONS[SAP_INTEGRATION_SIDE_ICONS.length - 1]!,
                    "sm",
                  )}
                </FlowStepTile>
              </div>
              <p className="deck-flow-step-card__title deck-flow-step-card__title--compact min-w-0 flex-1">
                {card}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** @deprecated Use SolutionEcosystemVisual */
export function FloatingCardsFlow({
  flow,
  sideCards,
}: {
  flow: readonly string[];
  sideCards: readonly string[];
}) {
  return <SolutionEcosystemVisual sideCards={sideCards} />;
}

export function BadgeRow({ badges }: { badges: readonly string[] }) {
  return (
    <div className="mt-3 flex flex-wrap justify-center gap-2">
      {badges.map((badge) => (
        <span
          key={badge}
          className="rounded-full border border-[color:var(--gms-border)] bg-white px-3 py-1 text-[10px] font-semibold tracking-[0.08em] text-deck-accent uppercase"
        >
          {badge}
        </span>
      ))}
    </div>
  );
}

export function SideCardRow({ cards }: { cards: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {cards.map((card) => (
        <div key={card} className="gms-card rounded-md px-3 py-2 text-[12px] font-semibold text-deck-accent">
          {card}
        </div>
      ))}
    </div>
  );
}

export function OnlineOfflineCompare({
  onlineItems,
  offlineItems,
}: {
  onlineItems: readonly string[];
  offlineItems: readonly string[];
}) {
  return (
    <SplitCompareDiagram
      leftTitle="Online"
      rightTitle="Offline"
      leftItems={onlineItems}
      rightItems={offlineItems}
      leftIcons={ONLINE_PROCESSING_ICONS}
      rightIcons={OFFLINE_PROCESSING_ICONS}
    />
  );
}

export function CertificateCycleDiagram({ steps }: { steps: readonly string[] }) {
  return (
    <TransactionWorkflowVisual steps={steps} icons={CERTIFICATE_LIFECYCLE_ICONS} />
  );
}

function ImplementationPhaseList({
  label,
  items,
}: {
  label: string;
  items: readonly string[];
}) {
  return (
    <div className="implementation-phases-visual__list min-w-0">
      <p className="implementation-phases-visual__list-label deck-title-lg">{label}</p>
      <ul className="implementation-phases-visual__bullets deck-type-body-compact">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function ImplementationPhasesVisual({
  phases,
}: {
  phases: readonly {
    phase: string;
    summary: string;
    activities: readonly string[];
    deliverables: readonly string[];
  }[];
}) {
  const placementClasses = [
    "implementation-phases-visual__card--left-top",
    "implementation-phases-visual__card--left-mid",
    "implementation-phases-visual__card--left-bottom",
    "implementation-phases-visual__card--right-top",
    "implementation-phases-visual__card--right-bottom",
  ] as const;

  return (
    <div className="implementation-phases-visual flex h-full min-h-0 w-full flex-col">
      <div className="implementation-phases-visual__grid grid min-h-0 flex-1">
        {phases.map((phase, index) => (
          <div
            key={phase.phase}
            className={`implementation-phases-visual__card gms-card flex min-h-0 flex-col ${placementClasses[index] ?? ""}`}
          >
            <div className="implementation-phases-visual__card-head flex min-w-0 items-center">
              <FlowStepTile compact>
                {deckIcon(
                  IMPLEMENTATION_PHASE_ICONS[index] ??
                    IMPLEMENTATION_PHASE_ICONS[IMPLEMENTATION_PHASE_ICONS.length - 1]!,
                  "sm",
                )}
              </FlowStepTile>
              <p className="implementation-phases-visual__phase-title deck-type-card-title min-w-0 flex-1">
                {phase.phase}
              </p>
            </div>
            <p className="implementation-phases-visual__summary deck-type-inline-feature">
              {phase.summary}
            </p>
            <div className="implementation-phases-visual__details grid min-h-0 flex-1 grid-cols-2">
              <ImplementationPhaseList label="Activities" items={phase.activities} />
              <ImplementationPhaseList label="Deliverables" items={phase.deliverables} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardModuleCard({
  title,
  icon,
  value,
}: {
  title: string;
  icon?: LucideIcon;
  value?: string;
}) {
  return (
    <div className="dashboard-mockup-visual__cell gms-card flex min-h-0 min-w-0 items-center gap-1.5 rounded-xl px-2 py-1.5">
      {icon && (
        <FlowStepTile compact>{deckIcon(icon, "xs")}</FlowStepTile>
      )}
      <div className="dashboard-mockup-visual__cell-body min-w-0 flex-1">
        <span className="deck-type-body-compact block leading-tight">{title}</span>
        {value && (
          <span className="dashboard-mockup-visual__cell-metric block tabular-nums">
            {value}
          </span>
        )}
      </div>
    </div>
  );
}

export function DashboardMockup({
  modules,
  values,
  icons,
  variant = "modules",
}: {
  modules: readonly string[];
  values?: readonly string[];
  icons?: readonly LucideIcon[];
  variant?: "modules" | "reports";
}) {
  const resolvedIcons =
    icons ??
    (variant === "reports" ? AVAILABLE_REPORT_ICONS : DASHBOARD_MODULE_ICONS);
  const isReports = variant === "reports";
  const hubIcon = isReports ? FileText : BarChart3;

  return (
    <div className="dashboard-mockup-visual flex h-full min-h-0 w-full items-stretch gap-1.5">
      <div className="dashboard-mockup-visual__hub flex shrink-0 flex-col items-center justify-center gap-1 rounded-xl bg-deck-accent px-2 py-2 text-center">
        <FlowStepTile compact>{deckIcon(hubIcon, "xs")}</FlowStepTile>
        <span className="dashboard-mockup-visual__hub-label text-white">
          {isReports ? "Compliance" : "Operations"}
        </span>
        <span className="dashboard-mockup-visual__hub-label text-white">
          {isReports ? "Reports" : "Dashboard"}
        </span>
      </div>
      <div
        className={`dashboard-mockup-visual__grid grid min-h-0 min-w-0 flex-1 gap-1.5 ${
          modules.length > 4 ? "grid-cols-4 grid-rows-2" : "grid-cols-2 grid-rows-2"
        }`}
      >
        {modules.map((mod, index) => (
          <DashboardModuleCard
            key={mod}
            title={mod}
            icon={resolvedIcons[index] ?? resolvedIcons[resolvedIcons.length - 1]}
            value={values?.[index]}
          />
        ))}
      </div>
    </div>
  );
}

export function TestingPyramidDiagram({ levels }: { levels: readonly string[] }) {
  return (
    <div className="testing-pyramid-visual flex h-full min-h-0 w-full flex-col">
      {levels.map((level, index) => {
        const pyramidWidth = 40 + (levels.length - index) * 14;

        return (
          <Fragment key={level}>
            <div
              className="testing-pyramid-visual__card gms-card flex min-h-0 flex-1 items-center rounded-2xl"
              style={{ width: `${pyramidWidth}%` }}
            >
              <div className="testing-pyramid-visual__card-inner flex w-full items-center">
                <FlowStepTile compact>
                  <span className="testing-pyramid-visual__number tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </FlowStepTile>
                <p className="testing-pyramid-visual__label deck-type-card-title min-w-0 flex-1">
                  {level}
                </p>
                <FlowStepTile compact>
                  {deckIcon(
                    TESTING_PYRAMID_ICONS[index] ??
                      TESTING_PYRAMID_ICONS[TESTING_PYRAMID_ICONS.length - 1]!,
                    "sm",
                  )}
                </FlowStepTile>
              </div>
            </div>
            {index < levels.length - 1 && (
              <div className="testing-pyramid-visual__arrow shrink-0">
                <FlowArrow />
              </div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

export function GanttChart({ phases }: { phases: readonly (readonly [string, string])[] }) {
  const colors = ["#34216b", "#5c3d9e", "#4cbb17", "#b8960c", "#d40511", "#34216b", "#5c3d9e", "#4cbb17", "#b8960c"];
  return (
    <div className="flex h-full min-h-0 flex-1 flex-col justify-center gap-2">
      {phases.map(([phase, duration], index) => (
        <div key={phase} className="flex items-center gap-3">
          <span className="w-44 shrink-0 text-[11px] font-medium text-[color:var(--gms-text)]">
            {phase}
          </span>
          <div className="flex min-w-0 flex-1 items-center">
            <div
              className="h-6 rounded-md"
              style={{
                width: `${Math.max(18, 100 - index * 8)}%`,
                backgroundColor: colors[index % colors.length],
                opacity: 0.85,
              }}
            />
            <span className="ml-2 shrink-0 text-[10px] font-semibold text-[color:var(--gms-text-muted)]">
              {duration}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function WorkstreamCard({
  title,
  items,
  index,
  icon,
}: {
  title: string;
  items: readonly string[];
  index: number;
  icon?: LucideIcon;
}) {
  return (
    <div className="workstream-converge-visual__card gms-card flex min-h-0 flex-col rounded-2xl">
      <div className="workstream-converge-visual__card-head flex items-center">
        <FlowStepTile compact>
          <span className="workstream-converge-visual__number tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
        </FlowStepTile>
        <p className="workstream-converge-visual__title deck-type-card-title min-w-0 flex-1">
          {title}
        </p>
        {icon && (
          <FlowStepTile compact>{deckIcon(icon, "sm")}</FlowStepTile>
        )}
      </div>
      <ul className="workstream-converge-visual__items deck-type-body-compact">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function WorkstreamConverge({
  workstreams,
  target,
}: {
  workstreams: readonly { title: string; items: readonly string[] }[];
  target: string;
}) {
  return (
    <div className="workstream-converge-visual flex h-full min-h-0 w-full flex-col">
      <div className="workstream-converge-visual__grid grid min-h-0 flex-1 grid-cols-2">
        {workstreams.map((ws, index) => (
          <WorkstreamCard
            key={ws.title}
            title={ws.title}
            items={ws.items}
            index={index}
            icon={WORKSTREAM_ICONS[index] ?? WORKSTREAM_ICONS[WORKSTREAM_ICONS.length - 1]}
          />
        ))}
      </div>
      <FlowArrow />
      <div className="workstream-converge-visual__target gms-card flex shrink-0 items-center justify-center rounded-2xl">
        <FlowStepTile compact>{deckIcon(Rocket, "sm")}</FlowStepTile>
        <p className="workstream-converge-visual__target-label deck-type-card-title-accent">
          {target}
        </p>
      </div>
    </div>
  );
}

export function SupportLifecycleDiagram({ steps }: { steps: readonly string[] }) {
  return (
    <div className="support-lifecycle-visual flex h-full min-h-0 w-full items-stretch">
      {steps.map((step, index) => (
        <Fragment key={step}>
          <div className="support-lifecycle-visual__step flex min-h-0 min-w-0 flex-1">
            <div className="support-lifecycle-visual__card gms-card flex h-full w-full min-h-0 flex-col rounded-2xl">
              <div className="support-lifecycle-visual__card-head flex items-center justify-between">
                <FlowStepTile compact>
                  <span className="support-lifecycle-visual__number tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </FlowStepTile>
                <FlowStepTile compact>
                  {deckIcon(
                    SUPPORT_LIFECYCLE_ICONS[index] ??
                      SUPPORT_LIFECYCLE_ICONS[SUPPORT_LIFECYCLE_ICONS.length - 1]!,
                    "sm",
                  )}
                </FlowStepTile>
              </div>
              <p className="support-lifecycle-visual__label deck-type-card-title min-h-0 flex-1">
                {step}
              </p>
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className="support-lifecycle-visual__arrow flex shrink-0 items-center">
              <FlowArrow horizontal />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}

export function EscalationDiagram({ levels }: { levels: readonly string[] }) {
  return (
    <VerticalFlowDiagram
      items={levels}
      icons={ESCALATION_LEVEL_ICONS}
      compact
      className="escalation-visual"
    />
  );
}

export function RiskHeatMap() {
  const levels = ["Low", "Medium", "High", "Critical"] as const;
  const categories = ["Technical", "Data", "Regulatory", "Adoption", "Schedule"] as const;
  const severityColors = [
    "var(--risk-heatmap-low)",
    "var(--risk-heatmap-medium)",
    "var(--risk-heatmap-high)",
    "var(--risk-heatmap-critical)",
  ] as const;

  return (
    <div className="risk-heatmap-visual flex h-full min-h-0 min-w-0 flex-col">
      <DeckVisualPanelLabel>Risk Matrix</DeckVisualPanelLabel>
      <div className="risk-heatmap-visual__panel gms-card flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl">
        <div className="risk-heatmap-visual__grid min-h-0 flex-1">
          <div className="risk-heatmap-visual__corner" aria-hidden />
          {levels.map((level) => (
            <div key={level} className="risk-heatmap-visual__header">
              {level}
            </div>
          ))}
          {categories.map((category) => (
            <Fragment key={category}>
              <div className="risk-heatmap-visual__category">{category}</div>
              {levels.map((_, col) => (
                <div
                  key={`${category}-${col}`}
                  className="risk-heatmap-visual__cell"
                  style={{ backgroundColor: severityColors[col] }}
                  aria-hidden
                />
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export function RiskTreatmentDiagram({ steps }: { steps: readonly string[] }) {
  return (
    <div className="risk-treatment-visual flex h-full min-h-0 min-w-0 flex-col">
      <DeckVisualPanelLabel>Treatment Cycle</DeckVisualPanelLabel>
      <div className="risk-treatment-visual__flow min-h-0 flex-1">
        <VerticalFlowDiagram
          items={steps}
          icons={RISK_TREATMENT_ICONS}
          compact
          className="escalation-visual risk-treatment-visual__steps"
        />
      </div>
    </div>
  );
}

export function RiskManagementVisual({
  treatmentSteps,
}: {
  treatmentSteps: readonly string[];
}) {
  return (
    <div className="risk-management-visual grid h-full min-h-0 w-full flex-1 grid-cols-2 gap-3">
      <RiskHeatMap />
      <RiskTreatmentDiagram steps={treatmentSteps} />
    </div>
  );
}

export function ComplianceMatrix({
  items,
}: {
  items: readonly (readonly [string, string])[];
}) {
  return (
    <div className="compliance-matrix-visual flex h-full min-h-0 w-full flex-1 flex-col">
      {items.map(([requirement, response], index) => (
        <div key={requirement} className="compliance-matrix-visual__row flex min-h-0 flex-1">
          <div className="compliance-matrix-visual__card gms-card flex h-full w-full min-h-0 rounded-2xl">
            <FlowStepTile compact>
              <span className="compliance-matrix-visual__number tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
            </FlowStepTile>
            <p className="compliance-matrix-visual__requirement">{requirement}</p>
            <span className="compliance-matrix-visual__status">
              {deckIcon(CheckCircle2, "xs")}
              {response}
            </span>
            <FlowStepTile compact>
              {deckIcon(
                SUPPLIER_RESPONSE_ICONS[index] ??
                  SUPPLIER_RESPONSE_ICONS[SUPPLIER_RESPONSE_ICONS.length - 1]!,
                "sm",
              )}
            </FlowStepTile>
          </div>
        </div>
      ))}
    </div>
  );
}

export function InvoiceQrMockup({ callouts }: { callouts: readonly string[] }) {
  return (
    <div className="invoice-qr-visual flex h-full min-h-0 w-full items-stretch gap-3">
      <div className="invoice-qr-visual__invoice flex shrink-0 flex-col gap-1.5">
        <DeckVisualPanelLabel className="invoice-qr-visual__heading">
          Fiscal Invoice
        </DeckVisualPanelLabel>
        <div className="invoice-qr-visual__document gms-card flex min-h-0 flex-1 flex-col">
          <div className="invoice-qr-visual__body">
            <dl className="invoice-qr-visual__fields">
              <div className="invoice-qr-visual__field">
                <dt>Invoice No.</dt>
                <dd>INV-0847</dd>
              </div>
              <div className="invoice-qr-visual__field">
                <dt>Fiscal ID</dt>
                <dd>FSL-883921</dd>
              </div>
            </dl>
          </div>
          <div className="invoice-qr-visual__qr-zone">
            <div className="invoice-qr-visual__qr-tile">{deckIcon(QrCode, "hero")}</div>
            <p className="invoice-qr-visual__qr-caption">Scan to verify</p>
          </div>
        </div>
      </div>
      <div className="invoice-qr-visual__payload flex min-h-0 min-w-0 flex-1 flex-col gap-1.5">
        <DeckVisualPanelLabel>QR Payload</DeckVisualPanelLabel>
        <div className="invoice-qr-visual__flow min-h-0 flex-1">
          <VerticalFlowDiagram items={callouts} icons={QR_CALLOUT_ICONS} compact />
        </div>
      </div>
    </div>
  );
}

export function ExecutiveSummaryVisual() {
  return (
    <div className="deck-executive-summary-visual flex h-full min-h-0 flex-1 flex-col gap-2">
      <DeckVisualPanelLabel>Current State</DeckVisualPanelLabel>
      <div className="flex min-h-0 flex-1 flex-col">
        <VerticalFlowDiagram
          items={["SAP ERP", "CRM", "Manual Compliance"]}
          icons={EXECUTIVE_SUMMARY_CURRENT_ICONS}
        />
      </div>
      <FlowArrow />
      <DeckVisualPanelLabel>Infinity Compliance Gateway</DeckVisualPanelLabel>
      <div className="flex min-h-0 flex-1 flex-col">
        <VerticalFlowDiagram
          items={[
            "Motheo Compliance Engine",
            "Revenue Services Lesotho",
            "Future Enterprise Compliance",
          ]}
          icons={EXECUTIVE_SUMMARY_FUTURE_ICONS}
        />
      </div>
    </div>
  );
}

export function LearningJourneyDiagram({ steps }: { steps: readonly string[] }) {
  return (
    <div className="learning-journey-visual flex h-full min-h-0 w-full items-stretch">
      {steps.map((step, index) => (
        <Fragment key={step}>
          <div className="learning-journey-visual__step flex min-h-0 min-w-0 flex-1">
            <div className="learning-journey-visual__card gms-card flex h-full w-full min-h-0 flex-col rounded-2xl">
              <div className="learning-journey-visual__card-head flex items-center justify-between">
                <FlowStepTile compact>
                  <span className="learning-journey-visual__number tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </FlowStepTile>
                <FlowStepTile compact>
                  {deckIcon(
                    LEARNING_JOURNEY_ICONS[index] ??
                      LEARNING_JOURNEY_ICONS[LEARNING_JOURNEY_ICONS.length - 1]!,
                    "sm",
                  )}
                </FlowStepTile>
              </div>
              <p className="learning-journey-visual__label deck-type-card-title min-h-0 flex-1">
                {step}
              </p>
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className="learning-journey-visual__arrow flex shrink-0 items-center">
              <FlowArrow horizontal />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}

export function ValueCardsVisual({
  items,
  icons,
}: {
  items: readonly { title: string; description: string }[];
  icons?: readonly LucideIcon[];
}) {
  return (
    <div className="grid h-full min-h-0 flex-1 grid-cols-2 gap-2 content-start overflow-auto">
      {items.map((item, index) => (
        <div key={item.title} className="gms-card rounded-lg p-4">
          {icons?.[index] && (
            <div className="deck-flow-step-card__tile deck-flow-step-card__tile--compact mb-2">
              {deckIcon(icons[index], "sm")}
            </div>
          )}
          <p className="deck-type-card-title">{item.title}</p>
          <p className="deck-type-card-body mt-1 text-[color:var(--gms-text-muted)]">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
