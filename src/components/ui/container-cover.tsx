"use client";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export const ContainerScroll = ({
  titleComponent,
  children,
  className,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scaleDimensions = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div
      className={cn(
        "h-[80vh] flex items-center justify-center relative",
        className
      )}
      ref={containerRef}
    >
      <motion.div
        style={{
          scale: scaleDimensions,
          opacity: opacity,
        }}
        className="max-w-7xl mx-auto relative"
      >
        <div className="bg-[#297045]/20 border border-[#ECBA82]/20 backdrop-blur-sm p-8 rounded-2xl">
          {titleComponent}
          {children}
        </div>
      </motion.div>
    </div>
  );
};
