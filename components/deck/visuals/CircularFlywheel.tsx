"use client";

const NODES = [
  "More Participants",
  "More Liquidity",
  "More Transactions",
  "Lower Friction",
];

const CX = 160;
const CY = 160;
const R = 95;

function nodePos(i: number, total: number) {
  const angle = (i / total) * 2 * Math.PI - Math.PI / 2;
  return {
    x: CX + R * Math.cos(angle),
    y: CY + R * Math.sin(angle),
  };
}

export function CircularFlywheel() {
  return (
    <div className="relative mx-auto aspect-square h-full max-h-[260px] w-full max-w-[260px]">
      <svg viewBox="0 0 320 320" className="h-full w-full" aria-hidden>
        <defs>
          <marker
            id="flywheel-arrow"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill="#56D6C2" />
          </marker>
        </defs>
        <circle
          cx={CX}
          cy={CY}
          r={R + 14}
          fill="none"
          stroke="rgba(86,214,194,0.12)"
          strokeWidth={1}
        />
        {NODES.map((_, i) => {
          const a = nodePos(i, NODES.length);
          const b = nodePos((i + 1) % NODES.length, NODES.length);
          const midAngle =
            (((i + 0.5) / NODES.length) * 2 * Math.PI - Math.PI / 2);
          const cx = CX + (R + 22) * Math.cos(midAngle);
          const cy = CY + (R + 22) * Math.sin(midAngle);
          const d = `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`;
          return (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="#56D6C2"
              strokeWidth={2}
              strokeOpacity={0.65}
              markerEnd="url(#flywheel-arrow)"
            />
          );
        })}
        <circle cx={CX} cy={CY} r={30} fill="rgba(86,214,194,0.1)" stroke="rgba(86,214,194,0.35)" />
        <text
          x={CX}
          y={CY + 4}
          textAnchor="middle"
          fill="#56D6C2"
          fontSize={10}
          fontWeight={600}
          fontFamily="var(--font-jost), sans-serif"
        >
          Network
        </text>
      </svg>
      {NODES.map((label, i) => {
        const pos = nodePos(i, NODES.length);
        return (
          <div
            key={label}
            className="absolute gms-card max-w-[96px] rounded-lg px-2 py-1.5 text-center text-[10px] font-medium leading-tight text-white"
            style={{
              left: `${(pos.x / 320) * 100}%`,
              top: `${(pos.y / 320) * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
}
