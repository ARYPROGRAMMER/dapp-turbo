"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="group p-5 rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
    >
      <div>
        <div className="p-2 rounded-lg bg-primary/10 inline-block mb-3">
          {icon}
        </div>
        <h3 className="text-base font-semibold text-white group-hover:text-primary transition-colors mb-1">
          {title}
        </h3>
        <p className="text-white/70 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
