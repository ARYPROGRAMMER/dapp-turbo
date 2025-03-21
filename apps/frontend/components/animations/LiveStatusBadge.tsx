"use client";

import { motion } from "framer-motion";

export function LiveStatusBadge() {
  return (
    <motion.div
      className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm backdrop-blur-md"
      animate={{
        scale: [1, 1.02, 1],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <span className="flex h-2 w-2 animate-pulse rounded-full bg-primary mr-2"></span>
      <span className="text-white font-medium">Live Monitoring Active</span>
    </motion.div>
  );
}
