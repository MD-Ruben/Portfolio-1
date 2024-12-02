"use client";
import { motion } from "framer-motion";
import { PinContainer } from "../ui/3d-pin";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Une plateforme de commerce électronique complète avec panier et paiement",
    image:
      "/images/ecommerce.png",
    tech: ["Next.js", "Node.js", "MongoDB"],
    href: "#",
  },
  {
    title: "Site internet",
    description: "Un site internet vitrine",
    image:
      "/images/siteInternet.jpeg",
    tech: ["Next.js", "TailwindCSS"],
    href: "#",
  },
  {
    title: "Dashboard Analytics",
    description: "Tableau de bord analytique en temps réel pour entreprises",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
    tech: ["React", "Python", "PostgreSQL"],
    href: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center text-[#FFF07C] mb-20"
        >
          Nos Projets
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
          {projects.map((project) => (
            <div key={project.title} className="h-[500px]">
              <PinContainer title={project.title} href={project.href}>
                <div className="flex flex-col gap-4">
                  <div className="w-[350px] relative overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-[250px]"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                  </div>
                  <p className="text-[#F0F7EE] text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#87BBA2]/20 rounded-full text-xs text-[#87BBA2]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
