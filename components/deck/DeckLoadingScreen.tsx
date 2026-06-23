"use client";

import { motion } from "framer-motion";
import { DeckHeroBrand } from "@/components/deck/DeckHeroBrand";

export function DeckLoadingScreen() {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#070810]">
      <div className="flex flex-col items-center gap-8 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <DeckHeroBrand size="large" priority className="justify-center" />
        </motion.div>
        <motion.p
          className="max-w-[520px] text-[22px] font-medium tracking-tight text-white/80 sm:text-[26px]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          Building Africa&apos;s Settlement Network
        </motion.p>
      </div>
    </div>
  );
}
