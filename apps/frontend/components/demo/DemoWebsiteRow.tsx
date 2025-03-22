"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface DemoWebsiteRowProps {
  url: string;
  status: "up" | "down";
  latency: string;
  uptime: string;
}

export function DemoWebsiteRow({
  url,
  status,
  latency,
  uptime,
}: DemoWebsiteRowProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <div
          className={`h-2.5 w-2.5 rounded-full ${
            status === "up" ? "bg-emerald-500" : "bg-red-500"
          }`}
        />
        <span className="font-medium text-white">{url}</span>
      </div>
      <div className="flex items-center gap-6 text-sm">
        <span className="text-white/70">Latency: {latency}</span>
        <span className="text-white/70">Uptime: {uptime}</span>
        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/10"
        >
          Details
        </Button>
      </div>
    </motion.div>
  );
}
