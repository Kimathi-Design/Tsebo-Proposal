"use client";

import type { ReactNode } from "react";
import { AfricaNetworkMap } from "@/components/deck/AfricaNetworkMap";

export function ClosingBackdrop({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-full min-h-0 flex-col items-center justify-center overflow-hidden rounded-[90px] text-center">
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.18]">
        <AfricaNetworkMap variant="background" className="h-full w-full" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, #070810 75%)",
        }}
      />
      <div className="relative z-10 flex min-h-0 w-full max-h-full flex-col items-center justify-center overflow-hidden">
        {children}
      </div>
    </div>
  );
}
