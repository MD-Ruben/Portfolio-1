"use client";
import Globe from "@/components/magicui/globe";
import { motion } from "framer-motion";

export function GlobeDemo() {
  return (
    <div className="flex flex-col items-center justify-center py-20 relative w-full min-h-screen">
      <div className="relative w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#F0F7EE] to-[#87BBA2]">
            Notre présence mondiale
          </h2>
          <p className="text-[#87BBA2] mt-4">
            Des solutions numériques pour des clients du monde entier
          </p>
        </motion.div>

        {/* Container pour le globe */}
        <div className="relative w-full aspect-square max-w-3xl mx-auto">
          <div className="absolute inset-0 flex items-center justify-center">
            <Globe />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
