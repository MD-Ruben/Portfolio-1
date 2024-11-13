"use client";
import { motion } from "framer-motion";
import { AnimatedTestimonials } from "../ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "Une équipe exceptionnelle qui a parfaitement compris nos besoins et délivré au-delà de nos attentes.",
    name: "Marie Laurent",
    designation: "CEO, TechStart",
    src: "/images/testimonials/1.jpg",
  },
  {
    quote:
      "Le professionnalisme et la qualité du travail fourni ont grandement contribué au succès de notre projet.",
    name: "Thomas Dubois",
    designation: "CTO, InnovCorp",
    src: "/images/testimonials/2.jpg",
  },
  {
    quote:
      "Un partenaire de confiance qui a su transformer notre vision en réalité avec expertise et créativité.",
    name: "Sophie Martin",
    designation: "Product Manager, DataFlow",
    src: "/images/testimonials/3.jpg",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12 text-[#FFF07C]"
        >
          Ce que disent nos clients
        </motion.h2>
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
};
