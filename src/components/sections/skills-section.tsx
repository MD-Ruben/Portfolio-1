"use client";
import {
  IconBrandDocker,
  IconBrandGit,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandPython,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconCode,
  IconDatabase,
  IconDeviceMobile,
  IconServer,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { AnimatedSkillCard } from "../ui/animated-skill-card";

const skills = [
  {
    title: "Frontend",
    description: "Création d'interfaces modernes et réactives",
    icons: [
      <IconBrandReact key="react" className="h-8 w-8 text-[#FFF07C]" />,
      <IconBrandNextjs key="next" className="h-8 w-8 text-[#FFF07C]" />,
      <IconBrandJavascript key="js" className="h-8 w-8 text-[#FFF07C]" />,
      <IconBrandTypescript key="ts" className="h-8 w-8 text-[#FFF07C]" />,
      <IconBrandTailwind key="tailwind" className="h-8 w-8 text-[#FFF07C]" />,
    ],
    mainIcon: <IconCode className="h-6 w-6 text-[#FFF07C]" />,
  },
  {
    title: "Backend",
    description: "Développement de serveurs robustes et évolutifs",
    icons: [
      <IconBrandPython key="python" className="h-8 w-8 text-[#FFF07C]" />,
      <IconDatabase key="db" className="h-8 w-8 text-[#FFF07C]" />,
      <IconServer key="server" className="h-8 w-8 text-[#FFF07C]" />,
    ],
    mainIcon: <IconServer className="h-6 w-6 text-[#FFF07C]" />,
  },
  {
    title: "Mobile",
    description: "Applications mobiles natives et cross-platform",
    icons: [
      <IconBrandReact key="react-native" className="h-8 w-8 text-[#FFF07C]" />,
      <IconDeviceMobile key="mobile" className="h-8 w-8 text-[#FFF07C]" />,
    ],
    mainIcon: <IconDeviceMobile className="h-6 w-6 text-[#FFF07C]" />,
  },
  {
    title: "DevOps",
    description: "Infrastructure et déploiement automatisé",
    icons: [
      <IconBrandDocker key="docker" className="h-8 w-8 text-[#FFF07C]" />,
      <IconBrandGit key="git" className="h-8 w-8 text-[#FFF07C]" />,
      <IconDatabase key="cloud" className="h-8 w-8 text-[#FFF07C]" />,
    ],
    mainIcon: <IconDatabase className="h-6 w-6 text-[#FFF07C]" />,
  },
];

export const SkillsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-12 text-center text-3xl font-bold text-[#FFF07C]"
        >
          Nos Compétences
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <AnimatedSkillCard
                title={skill.title}
                description={skill.description}
                icons={skill.icons}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
