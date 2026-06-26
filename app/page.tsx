import type { Metadata } from "next";
import { DeckPageClient } from "@/components/deck/DeckPageClient";

export const metadata: Metadata = {
  title: "Motheo Proposal — Barloworld Equipment (BWE)",
  description:
    "Barloworld Equipment proposal for Motheo Compliance Platform Compliance Gateway solution (EBS) by Infinity Business Dynamics.",
  alternates: { canonical: "/" },
  robots: { index: false, follow: false },
};

export default function HomePage() {
  return <DeckPageClient />;
}
