export const VISUAL = {
  teal: "#56D6C2",
  tealMuted: "rgba(86,214,194,0.35)",
  purple: "#6541B7",
  friction: "#E07A6A",
  legacy: "rgba(255,255,255,0.35)",
  legacyBorder: "rgba(255,255,255,0.12)",
} as const;

export const ALLOCATION_COLORS = [
  "#56D6C2",
  "#6541B7",
  "#a4ede1",
  "#8b6fd4",
  "#3d9e8f",
] as const;

/** Tall, centered flow / comparison panels used across deck visuals */
export const DECK_FLOW_PANEL = {
  base: "flex min-h-[180px] flex-col items-center justify-center rounded-3xl p-8 text-center",
  teal: "flex min-h-[180px] flex-col items-center justify-center rounded-3xl border border-[#56D6C2]/30 bg-[#56D6C2]/[0.08] p-8 text-center",
  neutral:
    "flex min-h-[180px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center",
  stack: "flex h-full min-h-[360px] flex-col justify-evenly gap-5",
  label: "mb-5 text-[11px] tracking-[0.22em] uppercase",
  labelTeal: "mb-5 text-[11px] tracking-[0.22em] text-[#56D6C2] uppercase",
  labelMuted: "mb-5 text-[11px] tracking-[0.22em] text-white/45 uppercase",
  flowRow: "flex flex-wrap items-center justify-center gap-3",
} as const;
