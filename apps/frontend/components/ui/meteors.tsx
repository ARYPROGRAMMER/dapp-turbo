"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteorStyles, setMeteorStyles] = useState<
    Array<{
      top: string;
      left: string;
      animationDelay: string;
      opacity: string;
    }>
  >([]);

  useEffect(() => {
    const styles = [...Array(number)].map(() => ({
      top: Math.floor(Math.random() * 100) + "%",
      left: Math.floor(Math.random() * 100) + "%",
      animationDelay: Math.random() * 1 + "s",
      opacity: (Math.random() * 0.4 + 0.6).toString(),
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none z-0",
        className
      )}
    >
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className="absolute h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-full bg-primary shadow-[0_0_0_1px_#ffffff10]"
          style={{
            top: style.top,
            left: style.left,
            animationDelay: style.animationDelay,
            opacity: style.opacity,
            // Add trailing effect
            boxShadow:
              "0 0 0 1px rgba(255, 255, 255, 0.04), 0 0 3px 0 rgba(147, 112, 219, 0.4)",
            width: Math.random() * 1 + 1 + "px", // Varying sizes for realism
            height: Math.random() * 80 + 20 + "px", // Longer trails
          }}
        />
      ))}
    </div>
  );
};
