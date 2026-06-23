import type { Metadata } from "next";
import { DeckPageClient } from "@/components/deck/DeckPageClient";

export const metadata: Metadata = {
  title: "IMANI — Building Africa's Settlement Network",
  description:
    "IMANI investor deck. Building regulated settlement infrastructure that enables businesses, financial institutions, payment providers, and governments to move value across African markets.",
  alternates: { canonical: "/" },
  robots: { index: false, follow: false },
};

export default function HomePage() {
  return <DeckPageClient />;
}
