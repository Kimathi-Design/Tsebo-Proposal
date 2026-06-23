"use client";

import type { ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import { VISUAL } from "@/components/deck/visuals/shared";

const LEGACY_STEPS = [
  { label: "Payment", friction: false },
  { label: "FX Convert", friction: true },
  { label: "Correspondent Bank", friction: true },
  { label: "USD Clearing", friction: true },
  { label: "FX Convert", friction: true },
  { label: "Settlement", friction: false },
];

const IMANI_STEPS = ["Deposit", "Issue Value", "Transfer", "Settle"];

function FlowNode({
  label,
  friction,
  active,
  large,
}: {
  label: string;
  friction?: boolean;
  active?: boolean;
  large?: boolean;
}) {
  return (
    <span
      className={`relative z-10 rounded-xl border font-medium leading-tight ${
        large ? "px-5 py-3 text-[15px]" : "px-2.5 py-1.5 text-[11px]"
      }`}
      style={{
        borderColor: active
          ? "rgba(86,214,194,0.45)"
          : friction
            ? "rgba(224,122,106,0.45)"
            : VISUAL.legacyBorder,
        backgroundColor: active
          ? "rgba(86,214,194,0.12)"
          : friction
            ? "rgba(224,122,106,0.08)"
            : "rgba(17,20,42,0.95)",
        color: active ? "#fff" : friction ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.55)",
      }}
    >
      {label}
      {friction && (
        <span
          className="ml-1.5 inline-block h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: VISUAL.friction }}
          aria-hidden
        />
      )}
    </span>
  );
}

function FlowColumn({
  label,
  labelClass,
  title,
  titleClass,
  footer,
  footerClass,
  borderClass,
  children,
}: {
  label: string;
  labelClass: string;
  title: string;
  titleClass: string;
  footer: string;
  footerClass: string;
  borderClass: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`gms-card flex min-h-[220px] flex-col items-center justify-center rounded-2xl p-6 text-center ${borderClass}`}
    >
      <p className={`text-[11px] tracking-[0.22em] uppercase ${labelClass}`}>
        {label}
      </p>
      <p className={`mt-1 mb-4 text-[18px] font-semibold ${titleClass}`}>
        {title}
      </p>
      <div className="flex min-h-0 flex-1 flex-col items-center justify-evenly">
        {children}
      </div>
      <p className={`mt-4 border-t pt-4 text-[13px] ${footerClass}`}>
        {footer}
      </p>
    </div>
  );
}

export function LegacyVsImaniFlow() {
  return (
    <div className="flex h-full min-h-0 flex-col gap-4 overflow-hidden">
      <div className="grid min-h-0 flex-1 grid-cols-2 gap-5">
        <FlowColumn
          label="Legacy"
          labelClass="text-white/45"
          title="Fragmented multi-hop settlement"
          titleClass="text-white/70"
          footer="Multiple FX events · Trapped liquidity · Higher cost"
          footerClass="border-white/10 text-white/45"
          borderClass=""
        >
          {LEGACY_STEPS.map((step, i) => (
            <div
              key={`${step.label}-${i}`}
              className="flex flex-col items-center gap-2"
            >
              <FlowNode label={step.label} friction={step.friction} large />
              {i < LEGACY_STEPS.length - 1 && (
                <ArrowDown className="h-4 w-4 text-white/25" />
              )}
            </div>
          ))}
        </FlowColumn>

        <FlowColumn
          label="IMANI"
          labelClass="text-[#56D6C2]"
          title="Direct regulated settlement"
          titleClass="text-white"
          footer="Single network · Native compliance · Lower friction"
          footerClass="border-[#56D6C2]/20 text-[#56D6C2]/80"
          borderClass="border-[#56D6C2]/25"
        >
          {IMANI_STEPS.map((step, i) => (
            <div key={step} className="flex flex-col items-center gap-2">
              <FlowNode label={step} active large />
              {i < IMANI_STEPS.length - 1 && (
                <ArrowDown className="h-4 w-4 text-[#56D6C2]/60" />
              )}
            </div>
          ))}
        </FlowColumn>
      </div>

      <div className="mx-auto w-full max-w-[560px] shrink-0 rounded-2xl border border-[#56D6C2]/25 bg-[#56D6C2]/[0.06] px-6 py-5 text-center">
        <p className="text-[11px] font-medium tracking-[0.22em] text-[#56D6C2] uppercase">
          Core Insight
        </p>
        <p className="mt-2 text-[20px] font-medium leading-snug text-white">
          Africa&apos;s economic growth is accelerating faster than its financial
          infrastructure.
        </p>
      </div>
    </div>
  );
}
