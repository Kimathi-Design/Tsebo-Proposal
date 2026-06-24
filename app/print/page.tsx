import type { Metadata } from "next";
import { DeckPrintView } from "@/components/deck/DeckPrintView";

export const metadata: Metadata = {
  title: "Print — Motheo Proposal",
  robots: { index: false, follow: false },
};

export default function PrintPage() {
  return <DeckPrintView />;
}
