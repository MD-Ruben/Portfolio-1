"use client";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";

const team = [
  {
    name: "Ruben Yablai",
    role: "Développeur Front-end",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind",
      "ReactJS",
      "NextJS",
      "JSX",
      "TypeScript",
    ],
  },
  {
    name: "Marcel Djedje-li",
    role: "Développeur Full Stack",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind",
      "ReactJS",
      "NextJS",
      "JSX",
      "TypeScript",
      "NodeJS",
      "PHP",
      "MongoDB",
      "SQL",
      "Firebase",
    ],
  },
];

export const TeamSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12 text-[#FFF07C]"
        >
          Notre Équipe
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="p-6 rounded-2xl bg-[#5D737E]/10 border border-[#FFF07C]/20 backdrop-blur-sm">
                <div className="flex flex-col items-center">
                  <Image
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mb-4"
                    src={member.image}
                  />
                  <h3 className="text-xl font-bold text-[#FFF07C] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#87BBA2] mb-4">{member.role}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-[#87BBA2]/20 rounded-full text-xs text-[#F0F7EE]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
