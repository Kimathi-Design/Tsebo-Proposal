import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google";
import { ASSETS } from "@/lib/assets";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Barloworld Equipment Lesotho — Enterprise Compliance Gateway Proposal",
  description:
    "Enterprise Compliance Gateway (EBS) — Infinity Business Dynamics proposal for Barloworld Equipment Lesotho.",
  robots: { index: false, follow: false },
  icons: {
    icon: ASSETS.brands.ibdFavicon,
    apple: ASSETS.brands.ibdFavicon,
  },
};

export const viewport: Viewport = {
  themeColor: "#F5F7FB",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable} light`}>
      <body className="relative min-h-screen antialiased">{children}</body>
    </html>
  );
}
