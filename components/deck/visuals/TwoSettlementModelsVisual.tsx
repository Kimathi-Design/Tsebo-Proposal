"use client";

import { ArrowDown } from "lucide-react";

const BURN_STEPS = [
  "Fiat deposited",
  "E-money issued",
  "Transfer executed",
  "Settlement completed",
  "E-money redeemed",
  "E-money retired",
];

const NETWORK_STEPS = [
  "Fiat deposited",
  "E-money issued",
  "Transfers occur continuously",
  "FX conversion executed",
  "Settlement completed",
  "Liquidity remains within the network",
];

const BURN_BENEFITS = [
  "Simple structure",
  "Strong reserve transparency",
  "Easy reconciliation",
];

const NETWORK_BENEFITS = [
  "Higher efficiency",
  "Reduced issuance friction",
  "Greater network liquidity",
  "Improved transaction throughput",
];

function ModelColumn({
  title,
  steps,
  benefits,
  accent,
}: {
  title: string;
  steps: string[];
  benefits: string[];
  accent: "teal" | "purple";
}) {
  const border =
    accent === "teal" ? "border-[#56D6C2]/30" : "border-[#6541B7]/35";
  const bg =
    accent === "teal" ? "bg-[#56D6C2]/[0.06]" : "bg-[#6541B7]/[0.08]";
  const labelColor =
    accent === "teal" ? "text-[#56D6C2]" : "text-[#a78bfa]";
  const chipBorder =
    accent === "teal" ? "border-[#56D6C2]/20" : "border-[#6541B7]/30";

  return (
    <div
      className={`gms-card flex min-h-[360px] flex-col justify-between rounded-2xl border ${border} ${bg} p-7`}
    >
      <p
        className={`text-center text-[12px] font-medium tracking-[0.18em] uppercase ${labelColor}`}
      >
        {title}
      </p>

      <div className="flex flex-1 flex-col items-center justify-center gap-2 py-4">
        {steps.map((step, i) => (
          <div key={step} className="flex flex-col items-center">
            <div className="flex items-center gap-2.5">
              <span className="text-[11px] tabular-nums text-white/35">
                {i + 1}
              </span>
              <span className="rounded-xl border border-white/12 bg-[#0d0f1a] px-5 py-3 text-[14px] font-medium text-white">
                {step}
              </span>
            </div>
            {i < steps.length - 1 && (
              <ArrowDown
                className="my-1.5 h-4 w-4 text-[#56D6C2]/40"
                aria-hidden
              />
            )}
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 pt-5">
        <p className="mb-3 text-center text-[11px] tracking-[0.18em] text-white/45 uppercase">
          Benefits
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {benefits.map((b) => (
            <span
              key={b}
              className={`rounded-lg border ${chipBorder} bg-white/[0.04] px-3 py-1.5 text-[12px] text-white/75`}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TwoSettlementModelsVisual() {
  return (
    <div className="grid h-full min-h-[360px] w-full grid-cols-2 gap-6">
      <ModelColumn
        title="Model 1 — Burn & Redeem"
        steps={BURN_STEPS}
        benefits={BURN_BENEFITS}
        accent="teal"
      />
      <ModelColumn
        title="Model 2 — Continuous Settlement Network"
        steps={NETWORK_STEPS}
        benefits={NETWORK_BENEFITS}
        accent="purple"
      />
    </div>
  );
}
