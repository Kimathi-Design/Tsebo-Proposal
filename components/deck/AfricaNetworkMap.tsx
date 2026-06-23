"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  AFRICA_MAP_DOTS,
  AFRICA_MAP_HUBS,
  AFRICA_MAP_ROUTES,
} from "@/lib/africa-network-map-data";

const VIEW_W = 960;
const VIEW_H = 720;

/** Distinct color per hub — label matches dot */
const HUB_COLORS: Record<string, string> = {
  Nairobi: "#56D6C2",
  Lagos: "#F472B6",
  Johannesburg: "#A78BFA",
  Cairo: "#FBBF24",
  Accra: "#34D399",
  Kigali: "#FB7185",
  "Dar es Salaam": "#60A5FA",
  Kampala: "#E879F9",
  Dakar: "#FB923C",
  "Cape Town": "#818CF8",
};

function hubColor(label: string) {
  return HUB_COLORS[label] ?? "#56D6C2";
}

const BRIDGE_ROUTE_INDICES = [0, 1, 2, 6];
const CORRIDOR_ROUTE_INDICES = [0, 1, 2];
const BRIDGE_HUB_LABELS = new Set(["Nairobi", "Lagos", "Johannesburg", "Cairo"]);

export function AfricaNetworkMap({
  variant = "full",
  className = "",
}: {
  variant?: "full" | "subtle" | "bridge" | "corridors" | "background";
  className?: string;
}) {
  const reduced = useReducedMotion();
  const isBackground = variant === "background";
  const animateRoutes = !reduced && !isBackground;

  const dots = AFRICA_MAP_DOTS;
  const routes = AFRICA_MAP_ROUTES;
  const hubs = AFRICA_MAP_HUBS;

  const dotOpacity =
    variant === "background"
      ? 0.28
      : variant === "subtle" || variant === "corridors"
        ? 0.45
        : 0.75;

  const highlightedRoutes =
    variant === "bridge"
      ? BRIDGE_ROUTE_INDICES
      : variant === "corridors"
        ? CORRIDOR_ROUTE_INDICES
        : null;

  const routeOpacity = (i: number) => {
    if (!highlightedRoutes) {
      return variant === "subtle" ? 0.45 : isBackground ? 0.12 : 0.65;
    }
    return highlightedRoutes.includes(i) ? 0.85 : 0.1;
  };

  const routeWidth = (i: number) => {
    if (highlightedRoutes?.includes(i)) return 2.4;
    if (variant === "subtle" || isBackground) return 1;
    return 1.8;
  };

  const isPrimaryHub = (label: string, i: number) => {
    if (variant === "bridge") return BRIDGE_HUB_LABELS.has(label);
    if (variant === "corridors") return i < 3;
    if (variant === "background") return false;
    if (variant === "subtle") return i < 6;
    return true;
  };

  return (
    <div className={`relative h-full w-full ${className}`}>
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="h-full w-full"
        aria-hidden
      >
        <defs>
          <radialGradient id="africa-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(86,214,194,0.18)" />
            <stop offset="100%" stopColor="rgba(86,214,194,0)" />
          </radialGradient>
          <linearGradient id="route-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#56D6C2" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#56D6C2" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6541B7" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        <rect width={VIEW_W} height={VIEW_H} fill="url(#africa-glow)" />

        {dots.map((d, i) => (
          <circle
            key={i}
            cx={d.x}
            cy={d.y}
            r={1.2}
            fill="#56D6C2"
            opacity={d.opacity * dotOpacity}
          />
        ))}

        {routes.map((route, i) => (
          <g key={i}>
            <path
              d={route.d}
              fill="none"
              stroke="url(#route-gradient)"
              strokeWidth={routeWidth(i)}
              strokeLinecap="round"
              opacity={routeOpacity(i)}
            />
            {animateRoutes &&
              (!highlightedRoutes || highlightedRoutes.includes(i)) && (
                <motion.circle
                  r={3}
                  fill="#56D6C2"
                  initial={{ offsetDistance: "0%" }}
                  animate={{ offsetDistance: "100%" }}
                  transition={{
                    duration: 3.5 + i * 0.3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: route.delay,
                  }}
                  style={{
                    offsetPath: `path('${route.d}')`,
                  }}
                />
              )}
          </g>
        ))}

        {hubs.map((hub, i) => {
          const color = hubColor(hub.label);
          const isPrimary = isPrimaryHub(hub.label, i);
          const hubOpacity = isBackground ? 0.55 : isPrimary ? 1 : 0.72;
          const labelOpacity = isBackground ? 0.45 : isPrimary ? 1 : 0.82;
          const coreR = isPrimary ? 6 : 4.5;
          const glowR = isPrimary ? 14 : 10;
          return (
            <g key={hub.label}>
              <circle
                cx={hub.x}
                cy={hub.y}
                r={glowR}
                fill={color}
                opacity={isPrimary ? 0.18 * hubOpacity : 0.1 * hubOpacity}
              />
              <circle
                cx={hub.x}
                cy={hub.y}
                r={coreR}
                fill={color}
                opacity={hubOpacity}
                style={{
                  filter: isPrimary
                    ? `drop-shadow(0 0 8px ${color})`
                    : undefined,
                }}
              />
              <text
                x={hub.x + 10}
                y={hub.y + 4}
                fill={color}
                opacity={labelOpacity}
                fontSize={isPrimary ? 12 : 10}
                fontWeight={isPrimary ? 600 : 500}
                fontFamily="var(--font-jost), sans-serif"
              >
                {hub.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
