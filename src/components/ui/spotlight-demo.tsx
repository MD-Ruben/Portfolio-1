"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const SpotlightDemo = () => {
  return (
    <div className="h-[40rem] w-full rounded-md flex items-center justify-center relative overflow-hidden bg-[#0E0E10]">
      <div className="absolute inset-0 w-full h-full bg-[#0E0E10] z-0" />
      <Spotlight className="hidden md:block" />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-[#FFF07C] to-[#87BBA2]"
        >
          Victoire Service
          <br />
          <span className="text-2xl md:text-3xl font-light text-[#F0F7EE]">
            Solutions numériques innovantes
          </span>
        </motion.h1>
      </div>
    </div>
  );
};

const Spotlight = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 blur-[100px] bg-gradient-to-t from-[#FFF07C] to-[#87BBA2] opacity-50",
        className
      )}
    />
  );
};
