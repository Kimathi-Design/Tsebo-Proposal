import type { Metadata } from "next";
import { DeckPageClient } from "@/components/deck/DeckPageClient";

export const metadata: Metadata = {
  title: "Enterprise Tax Compliance Transformation — Tsebo Solutions Group",
  description:
    "Infinity Business Dynamics proposal for Motheo Compliance Layer and Motheo POS — Microsoft Dynamics integration for Tsebo Solutions Group.",
  alternates: { canonical: "/" },
  robots: { index: false, follow: false },
};

export default function HomePage() {
  return <DeckPageClient />;
}
