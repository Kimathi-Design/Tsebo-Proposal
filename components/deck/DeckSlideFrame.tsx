"use client";

import { Children, isValidElement, useEffect, useState, type ReactNode } from "react";
import { animate, useReducedMotion } from "framer-motion";
import { GlowOrbs } from "@/components/effects/GlowOrbs";
import { Particles } from "@/components/effects/Particles";
import { DeckLogo } from "@/components/deck/DeckLogo";
import { DeckEyebrow, SlideEyebrow, SlideSectionCorner, DeckHeaderBrand } from "@/components/deck/SlideEyebrow";
import { SLIDE_COUNT, SLIDE_HEIGHT, SLIDE_WIDTH } from "@/lib/deck-content";

type Props = {
  index: number;
  children: ReactNode;
  showParticles?: boolean;
  className?: string;
  /** Skip intro/body split — use for hero slides with custom full-bleed layout */
  layout?: "default" | "full";
};

function partitionSlideChildren(children: ReactNode) {
  const items = Children.toArray(children);
  const intro: ReactNode[] = [];
  const body: ReactNode[] = [];
  let pastIntro = false;

  for (const child of items) {
    if (
      !pastIntro &&
      isValidElement(child) &&
      (child.type === DeckEyebrow ||
        child.type === SlideEyebrow ||
        child.type === DeckTitle)
    ) {
      intro.push(child);
    } else {
      pastIntro = true;
      body.push(child);
    }
  }

  return { intro, body };
}

export function DeckSlideFrame({
  index,
  children,
  showParticles = false,
  className = "",
  layout = "default",
}: Props) {
  const { intro, body } =
    layout === "full"
      ? { intro: [] as ReactNode[], body: Children.toArray(children) }
      : partitionSlideChildren(children);

  return (
    <section
      className={`deck-slide relative overflow-hidden ${className}`}
      style={{ width: SLIDE_WIDTH, height: SLIDE_HEIGHT }}
      aria-label={`Slide ${index + 1}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(52,33,107,0.35), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(86,214,194,0.12), transparent 50%), linear-gradient(160deg, #0a0c16 0%, #0d0f1a 45%, #11142a 100%)",
        }}
      />
      <GlowOrbs />
      {showParticles && (
        <Particles density={0.00004} className="absolute inset-0 opacity-60" />
      )}
      <div className="relative z-10 flex h-full flex-col px-20 py-14">
        <header className="mb-8 flex shrink-0 items-center justify-between">
          <DeckHeaderBrand />
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[12px] tracking-wider text-white/50 tabular-nums">
            {String(index + 1).padStart(2, "0")} / {SLIDE_COUNT}
          </span>
        </header>
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
          {intro.length > 0 && <div className="shrink-0">{intro}</div>}
          {body.length > 0 && (
            <div className="flex min-h-0 flex-1 flex-col justify-center">
              {body}
            </div>
          )}
        </div>
        <footer
          className={`mt-8 flex shrink-0 items-center pointer-events-none ${
            index !== 0 ? "justify-between" : "justify-end"
          }`}
        >
          {index !== 0 && <DeckLogo variant="corner" />}
          <SlideSectionCorner index={index} />
        </footer>
      </div>
    </section>
  );
}

/** Optional explicit body wrapper — auto-partitioning handles this by default */
export function DeckSlideBody({ children }: { children: ReactNode }) {
  return <div className="w-full">{children}</div>;
}

/** @deprecated Use SlideEyebrow — re-exported for compatibility */
export { DeckEyebrow } from "@/components/deck/SlideEyebrow";

export function DeckTitle({
  children,
  highlight,
  size = "lg",
}: {
  children: ReactNode;
  highlight?: string;
  size?: "lg" | "xl" | "hero";
}) {
  const sizes = {
    lg: "text-[42px] leading-[1.12]",
    xl: "text-[52px] leading-[1.08]",
    hero: "text-[72px] leading-[1.02]",
  };
  return (
    <h2
      className={`font-semibold tracking-tight text-[color:var(--gms-text)] ${sizes[size]}`}
    >
      {children}
      {highlight && (
        <>
          {" "}
          <span className="gradient-text-teal">{highlight}</span>
        </>
      )}
    </h2>
  );
}

export function DeckBody({ children }: { children: ReactNode }) {
  return (
    <p className="text-[20px] leading-[1.65] text-[color:var(--gms-text-muted)]">
      {children}
    </p>
  );
}

function parseStatValue(value: string) {
  const match = value.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  return { prefix, target: parseFloat(numStr), suffix };
}

function AnimatedStatValue({ value }: { value: string }) {
  const reduced = useReducedMotion();
  const parsed = parseStatValue(value);
  const [display, setDisplay] = useState(parsed?.target ?? 0);

  useEffect(() => {
    const current = parseStatValue(value);
    if (!current) return;
    const isExport =
      typeof document !== "undefined" &&
      document.documentElement.dataset.deckExport === "true";
    if (reduced || isExport) {
      setDisplay(current.target);
      return;
    }
    setDisplay(0);
    const controls = animate(0, current.target, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [value, reduced]);

  if (!parsed) {
    return <>{value}</>;
  }

  const formatted = Number.isInteger(parsed.target)
    ? Math.round(display).toLocaleString()
    : display.toFixed(1);

  return (
    <>
      {parsed.prefix}
      {formatted}
      {parsed.suffix}
    </>
  );
}

export function DeckStatCard({
  value,
  label,
  sublabel,
  animateValue = false,
}: {
  value: string;
  label: ReactNode;
  sublabel?: string;
  animateValue?: boolean;
}) {
  return (
    <div className="gms-card flex flex-col items-center overflow-visible rounded-3xl p-8 text-center">
      <p className="overflow-visible pr-1 text-[44px] font-semibold leading-none tracking-tight whitespace-nowrap gradient-text-teal">
        {animateValue ? <AnimatedStatValue value={value} /> : value}
      </p>
      <p className="mt-3 text-[18px] font-medium leading-snug text-white">
        {label}
      </p>
      {sublabel && (
        <p className="mt-1 text-[15px] text-white/55">{sublabel}</p>
      )}
    </div>
  );
}

export function DeckInsight({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-[#56D6C2]/25 bg-[#56D6C2]/[0.06] p-8">
      <p className="text-[11px] font-medium tracking-[0.22em] text-[#56D6C2] uppercase">
        {label}
      </p>
      <div className="mt-4 text-[22px] leading-relaxed font-medium text-white">
        {children}
      </div>
    </div>
  );
}

export function DeckBulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-[19px] leading-relaxed text-white/78"
        >
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#56D6C2]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function DeckFeatureGrid({
  items,
}: {
  items: { title: string; description?: string; icon?: ReactNode }[];
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="gms-card rounded-2xl p-6">
          {item.icon && (
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#56D6C2]">
              {item.icon}
            </div>
          )}
          <p className="text-[18px] font-semibold text-white">{item.title}</p>
          {item.description && (
            <p className="mt-2 text-[15px] leading-relaxed text-white/60">
              {item.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
