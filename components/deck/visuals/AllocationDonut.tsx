"use client";

import { capitalAllocation } from "@/lib/deck-content";
import { ALLOCATION_COLORS } from "@/components/deck/visuals/shared";

export function AllocationDonut() {
  const r = 38;
  const circumference = 2 * Math.PI * r;
  let offset = 0;

  const segments = capitalAllocation.map((item, i) => {
    const dash = (item.percent / 100) * circumference;
    const seg = {
      ...item,
      color: ALLOCATION_COLORS[i],
      dash,
      offset,
      midAngle: ((offset + dash / 2) / circumference) * 360,
    };
    offset += dash;
    return seg;
  });

  return (
    <div className="grid min-h-0 max-h-full gap-4 overflow-hidden lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
      <div className="relative mx-auto h-[320px] w-[320px] shrink-0">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="10"
          />
          {segments.map((seg) => (
            <circle
              key={seg.label}
              cx="50"
              cy="50"
              r={r}
              fill="none"
              stroke={seg.color}
              strokeWidth="10"
              strokeLinecap="butt"
              strokeDasharray={`${seg.dash} ${circumference - seg.dash}`}
              strokeDashoffset={-seg.offset}
            />
          ))}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-[12px] tracking-[0.18em] text-white/45 uppercase">
            Capital
          </p>
          <p className="text-[28px] font-semibold text-white">Allocation</p>
        </div>
        {segments.map((seg) => {
          const rad = ((seg.midAngle - 90) * Math.PI) / 180;
          const lx = 50 + 30 * Math.cos(rad);
          const ly = 50 + 30 * Math.sin(rad);
          return (
            <span
              key={`lbl-${seg.label}`}
              className="absolute text-[13px] font-semibold tabular-nums text-white"
              style={{
                left: `${lx}%`,
                top: `${ly}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {seg.percent}%
            </span>
          );
        })}
      </div>
      <div className="space-y-2">
        {segments.map((seg) => (
          <div
            key={seg.label}
            className="gms-card flex items-center gap-3 rounded-xl px-3 py-2.5"
          >
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: seg.color }}
            />
            <span className="flex-1 text-[13px] leading-snug text-white/80">
              {seg.label}
            </span>
            <span className="text-[16px] font-semibold tabular-nums text-white">
              {seg.percent}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
