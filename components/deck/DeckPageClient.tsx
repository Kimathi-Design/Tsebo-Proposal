"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

const DeckViewer = dynamic(
  () => import("@/components/deck/DeckViewer").then((mod) => mod.DeckViewer),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#070810]">
        <span className="text-[13px] font-medium tracking-[0.28em] text-[#56D6C2] uppercase">
          IMANI
        </span>
      </div>
    ),
  },
);

export function DeckPageClient() {
  useEffect(() => {
    void import("@/components/deck/AfricaNetworkMap");
  }, []);

  return <DeckViewer />;
}
