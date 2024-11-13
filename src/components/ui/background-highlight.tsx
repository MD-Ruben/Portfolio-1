"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React from "react";
import { GridBackground } from "./grid-background";

export const BackgroundHighlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <GridBackground className={cn("min-h-screen", className)}>
      <div className="relative w-full" onMouseMove={handleMouseMove}>
        {/* Spotlight effect */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 240, 124, 0.15),
                transparent 80%
              )
            `,
          }}
        />

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    </GridBackground>
  );
};
