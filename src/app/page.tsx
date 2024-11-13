import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { TeamSection } from "@/components/sections/team-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
