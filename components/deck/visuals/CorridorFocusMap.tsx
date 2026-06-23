"use client";

import { AfricaNetworkMap } from "@/components/deck/AfricaNetworkMap";

export function CorridorFocusMap() {
  return (
    <div className="relative flex h-full min-h-[580px] w-full items-center justify-center overflow-visible">
      <AfricaNetworkMap
        variant="corridors"
        className="h-full w-[128%] max-w-none -translate-y-6"
      />
    </div>
  );
}
