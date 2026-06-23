"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId, useMemo } from "react";

const SIZE = 680;
const CX = SIZE / 2;
const CY = SIZE / 2 - 12;

type Ring = {
  nodes: number;
  radius: number;
  label: string;
  sub: string;
  stroke: number;
  nodeR: number;
};

const RINGS: Ring[] = [
  {
    nodes: 4,
    radius: 68,
    label: "Participants",
    sub: "Each join adds a node",
    stroke: 1,
    nodeR: 5,
  },
  {
    nodes: 8,
    radius: 128,
    label: "Liquidity",
    sub: "Connections multiply",
    stroke: 1.4,
    nodeR: 5.5,
  },
  {
    nodes: 12,
    radius: 188,
    label: "Corridors",
    sub: "Routes become viable",
    stroke: 1.8,
    nodeR: 6,
  },
  {
    nodes: 18,
    radius: 248,
    label: "Volume",
    sub: "Flow compounds",
    stroke: 2.2,
    nodeR: 6.5,
  },
];

type Node = { x: number; y: number; ring: number; index: number };

function ringNodes(ring: Ring, ringIndex: number): Node[] {
  const offset = ringIndex * 0.18;
  return Array.from({ length: ring.nodes }, (_, i) => {
    const angle = (i / ring.nodes) * Math.PI * 2 - Math.PI / 2 + offset;
    return {
      x: CX + ring.radius * Math.cos(angle),
      y: CY + ring.radius * Math.sin(angle),
      ring: ringIndex,
      index: i,
    };
  });
}

function buildEdges(allNodes: Node[][]) {
  const edges: { x1: number; y1: number; x2: number; y2: number; w: number; o: number }[] =
    [];

  allNodes.forEach((nodes, ringIndex) => {
    const ring = RINGS[ringIndex];
    nodes.forEach((node, i) => {
      edges.push({
        x1: CX,
        y1: CY,
        x2: node.x,
        y2: node.y,
        w: ring.stroke,
        o: 0.14 + ringIndex * 0.06,
      });

      const next = nodes[(i + 1) % nodes.length];
      edges.push({
        x1: node.x,
        y1: node.y,
        x2: next.x,
        y2: next.y,
        w: ring.stroke * 0.85,
        o: 0.22 + ringIndex * 0.08,
      });

      if (ringIndex > 0) {
        const inner = allNodes[ringIndex - 1];
        const innerTarget = inner[i % inner.length];
        edges.push({
          x1: node.x,
          y1: node.y,
          x2: innerTarget.x,
          y2: innerTarget.y,
          w: ring.stroke * 0.65,
          o: 0.1 + ringIndex * 0.05,
        });
      }
    });
  });

  return edges;
}

const BADGE_ANGLES = [-118, -52, 52, 118];

export function NetworkCompoundingVisual() {
  const reduced = useReducedMotion();
  const gradientId = useId();

  const { allNodes, edges, flatNodes } = useMemo(() => {
    const allNodes = RINGS.map((ring, i) => ringNodes(ring, i));
    const edges = buildEdges(allNodes);
    const flatNodes = allNodes.flat();
    return { allNodes, edges, flatNodes };
  }, []);

  return (
    <div className="flex h-full min-h-[620px] w-full items-center justify-center">
      <div
        className="relative shrink-0"
        style={{ width: SIZE, height: SIZE }}
        aria-hidden
      >
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="h-full w-full">
          <defs>
            <radialGradient id={`${gradientId}-glow`} cx="50%" cy="48%" r="42%">
              <stop offset="0%" stopColor="rgba(86,214,194,0.22)" />
              <stop offset="55%" stopColor="rgba(101,65,183,0.08)" />
              <stop offset="100%" stopColor="rgba(86,214,194,0)" />
            </radialGradient>
            <linearGradient id={`${gradientId}-curve`} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6541B7" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#56D6C2" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          <circle cx={CX} cy={CY} r={280} fill={`url(#${gradientId}-glow)`} />

          {RINGS.map((ring) => (
            <circle
              key={ring.label}
              cx={CX}
              cy={CY}
              r={ring.radius}
              fill="none"
              stroke="rgba(86,214,194,0.08)"
              strokeWidth={1}
              strokeDasharray="4 8"
            />
          ))}

          {edges.map((edge, i) => (
            <line
              key={i}
              x1={edge.x1}
              y1={edge.y1}
              x2={edge.x2}
              y2={edge.y2}
              stroke="#56D6C2"
              strokeWidth={edge.w}
              strokeOpacity={edge.o}
            />
          ))}

          {flatNodes.map((node, i) => (
            <motion.circle
              key={`${node.ring}-${node.index}`}
              cx={node.x}
              cy={node.y}
              r={RINGS[node.ring].nodeR}
              fill="#56D6C2"
              initial={reduced ? false : { opacity: 0, scale: 0 }}
              animate={{ opacity: 0.55 + node.ring * 0.1, scale: 1 }}
              transition={{ delay: 0.15 + node.ring * 0.12 + (i % 6) * 0.03 }}
            />
          ))}

          <circle
            cx={CX}
            cy={CY}
            r={44}
            fill="rgba(86,214,194,0.12)"
            stroke="rgba(86,214,194,0.55)"
            strokeWidth={2.5}
          />
          <text
            x={CX}
            y={CY - 4}
            textAnchor="middle"
            fill="#56D6C2"
            fontSize={15}
            fontWeight={600}
            fontFamily="var(--font-jost), sans-serif"
          >
            IMANI
          </text>
          <text
            x={CX}
            y={CY + 14}
            textAnchor="middle"
            fill="rgba(255,255,255,0.5)"
            fontSize={10}
            fontFamily="var(--font-jost), sans-serif"
          >
            Network Core
          </text>

          <path
            d={`M ${CX - 248} ${CY + 118} Q ${CX - 80} ${CY + 92}, ${CX + 40} ${CY + 36} T ${CX + 248} ${CY - 96}`}
            fill="none"
            stroke={`url(#${gradientId}-curve)`}
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeDasharray="6 5"
            opacity={0.75}
          />
          <text
            x={CX - 228}
            y={CY + 138}
            fill="rgba(255,255,255,0.4)"
            fontSize={10}
            fontFamily="var(--font-jost), sans-serif"
          >
            Linear
          </text>
          <text
            x={CX + 196}
            y={CY - 108}
            fill="#56D6C2"
            fontSize={11}
            fontWeight={600}
            fontFamily="var(--font-jost), sans-serif"
          >
            Exponential
          </text>
        </svg>

        {RINGS.map((ring, i) => {
          const angle = (BADGE_ANGLES[i] * Math.PI) / 180;
          const badgeR = ring.radius + 58;
          const left = CX + badgeR * Math.cos(angle);
          const top = CY + badgeR * Math.sin(angle);
          return (
            <motion.div
              key={ring.label}
              className="gms-card absolute w-[128px] rounded-xl px-3 py-2.5 text-center"
              style={{
                left,
                top,
                transform: "translate(-50%, -50%)",
              }}
              initial={reduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.1 }}
            >
              <p className="text-[10px] font-medium tracking-[0.14em] text-[#56D6C2] uppercase">
                {ring.label}
              </p>
              <p className="mt-0.5 text-[11px] leading-snug text-white/55">
                {ring.sub}
              </p>
            </motion.div>
          );
        })}

        <div className="absolute bottom-2 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-[#56D6C2]/25 bg-[#56D6C2]/[0.06] px-6 py-4 text-center">
          <p className="text-[11px] font-medium tracking-[0.2em] text-[#56D6C2] uppercase">
            Network Effect
          </p>
          <p className="mt-1.5 text-[17px] font-medium text-white">
            Value scales with{" "}
            <span className="gradient-text-teal">connection density</span>, not
            headcount alone.
          </p>
        </div>
      </div>
    </div>
  );
}
