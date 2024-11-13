"use client";
import { motion } from "framer-motion";
import { Globe } from "../ui/globe";

export function GlobeSection() {
  return (
    <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto relative w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-center text-xl md:text-4xl font-bold text-[#FFF07C]">
            Notre présence mondiale
          </h2>
          <p className="text-center text-base md:text-lg font-normal text-[#F0F7EE] max-w-md mt-2 mx-auto">
            Nous développons des solutions numériques pour des clients du monde
            entier
          </p>
        </motion.div>
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent to-[#000000] z-40" />
        <div className="absolute w-full -bottom-20 h-72 md:h-full z-10 flex items-center justify-center">
          <Globe width={800} height={800} backgroundColor="#000000" />
        </div>
      </div>
    </div>
  );
}
