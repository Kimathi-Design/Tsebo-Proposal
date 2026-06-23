"use client";

import { licensingRequirements } from "@/lib/deck-content";

export function LicensingCapitalVisual() {
  return (
    <div className="grid w-full grid-cols-3 gap-5">
      {licensingRequirements.map((row) => (
        <div key={row.license} className="gms-card rounded-2xl p-6">
          <p className="text-[16px] font-semibold text-[#56D6C2]">
            {row.license}
          </p>
          <dl className="mt-5 space-y-3">
            <div className="flex items-center justify-between gap-3 border-b border-white/8 pb-2">
              <dt className="text-[12px] text-white/45">Application Fee</dt>
              <dd className="text-[14px] font-medium tabular-nums text-white">
                {row.applicationFee}
              </dd>
            </div>
            <div className="flex items-center justify-between gap-3 border-b border-white/8 pb-2">
              <dt className="text-[12px] text-white/45">Authorization Fee</dt>
              <dd className="text-[14px] font-medium tabular-nums text-white">
                {row.authorizationFee}
              </dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-[12px] text-white/45">Core Capital</dt>
              <dd className="text-[14px] font-semibold tabular-nums text-white">
                {row.coreCapital}
              </dd>
            </div>
          </dl>
        </div>
      ))}
    </div>
  );
}
