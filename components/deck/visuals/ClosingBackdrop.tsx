"use client";

import type { ReactNode } from "react";

export function ClosingBackdrop({ children }: { children: ReactNode }) {
  return (
    <div className="closing-backdrop relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-3xl bg-[color:var(--ibd-gray)] p-6">
      <div className="relative z-10 flex min-h-0 flex-1 flex-col gap-5 overflow-auto">
        {children}
      </div>
    </div>
  );
}
