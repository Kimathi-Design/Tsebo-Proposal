"use client";

import {
  competitiveLandscape,
  imaniCapabilityPillars,
} from "@/lib/deck-content";

export function CompetitiveLandscapeVisual() {
  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-3 gap-5">
        {competitiveLandscape.map((row) => (
          <div key={row.category} className="gms-card rounded-2xl p-6">
            <p className="text-[11px] tracking-[0.18em] text-[#56D6C2] uppercase">
              {row.category}
            </p>
            <p className="mt-3 text-[15px] font-semibold text-white">
              {row.strength}
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-white/55">
              <span className="text-white/40">Limitation: </span>
              {row.limitation}
            </p>
            <p className="mt-4 border-t border-white/8 pt-4 text-[11px] leading-relaxed text-white/45">
              {row.players}
            </p>
          </div>
        ))}
      </div>
      <div className="rounded-3xl border border-[#56D6C2]/25 bg-[#56D6C2]/[0.06] px-8 py-6 text-center">
        <p className="text-[11px] tracking-[0.2em] text-[#56D6C2] uppercase">
          Where IMANI Sits
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-white/80">
          {imaniCapabilityPillars.join(" · ")}
        </p>
        <p className="mt-4 text-[20px] font-semibold text-white">
          Not a payment app. Not a stablecoin.{" "}
          <span className="gradient-text-teal">
            Settlement infrastructure for African commerce.
          </span>
        </p>
      </div>
    </div>
  );
}
