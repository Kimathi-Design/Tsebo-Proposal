"use client";

import { africanCurrencies, globalCurrencies } from "@/lib/deck-content";

/** ISO codes → common display symbols (only where a clear symbol exists) */
const CURRENCY_SYMBOLS: Record<string, string> = {
  NGN: "₦",
  ZAR: "R",
  EUR: "€",
  GBP: "£",
  AUD: "A$",
  INR: "₹",
  CNY: "¥",
  USD: "$",
  KWD: "KD",
  "SAR/QAR": "﷼",
};

function CurrencyChip({ code }: { code: string }) {
  const symbol = CURRENCY_SYMBOLS[code];

  return (
    <span className="inline-flex items-center gap-2 rounded-xl border border-[#56D6C2]/25 bg-[#56D6C2]/[0.08] px-4 py-2.5 text-[15px] font-semibold tabular-nums text-white">
      {symbol && (
        <span className="text-[#56D6C2] leading-none" aria-hidden>
          {symbol}
        </span>
      )}
      <span>{code}</span>
    </span>
  );
}

export function MultiCurrencyNetworkVisual() {
  return (
    <div className="grid w-full grid-cols-[1.1fr_0.9fr] items-stretch gap-8">
      <div className="space-y-6">
        <div>
          <p className="mb-3 text-[11px] tracking-[0.2em] text-[#56D6C2] uppercase">
            Initial Currency Coverage — Africa
          </p>
          <div className="flex flex-wrap gap-2.5">
            {africanCurrencies.map((code) => (
              <CurrencyChip key={code} code={code} />
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 text-[11px] tracking-[0.2em] text-white/45 uppercase">
            Global Settlement Currencies
          </p>
          <div className="flex flex-wrap gap-2.5">
            {globalCurrencies.map((code) => (
              <CurrencyChip key={code} code={code} />
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5">
          <p className="text-[11px] tracking-[0.2em] text-[#56D6C2] uppercase">
            IMANI Enables
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-white/75">
            Multi-currency treasury operations · Cross-border settlement · FX
            conversion · Liquidity management · Unified reporting
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-5">
        <div className="rounded-3xl border border-[#56D6C2]/25 bg-[#56D6C2]/[0.06] p-8">
          <p className="text-[11px] tracking-[0.2em] text-[#56D6C2] uppercase">
            Why Multi-Currency Matters
          </p>
          <p className="mt-4 text-[20px] font-medium leading-snug text-white">
            Businesses should not need multiple providers to access multiple
            markets.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <p className="text-[11px] tracking-[0.2em] text-white/45 uppercase">
            Strategic Goal
          </p>
          <p className="mt-4 text-[22px] font-semibold gradient-text-teal">
            One settlement layer. Multiple currencies. Continental reach.
          </p>
        </div>
      </div>
    </div>
  );
}
