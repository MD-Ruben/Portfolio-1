"use client";
import { motion } from "framer-motion";
import { Cover } from "../ui/cover";

export const IntroSection = () => {
  return (
    <div className="py-20">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-[#F0F7EE] via-[#87BBA2] to-[#87BBA2]"
      >
        Transformez vos idées en <br /> solutions{" "}
        <Cover>numériques innovantes</Cover>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center space-y-6 text-lg text-[#87BBA2] mt-8 max-w-3xl mx-auto px-4"
      >
        <p>
          Notre équipe de développeurs passionnés transforme vos concepts en
          applications web et mobiles performantes.
        </p>
      </motion.div>
    </div>
  );
};
