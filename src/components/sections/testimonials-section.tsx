"use client";
import { motion } from "framer-motion";
import { AnimatedTestimonials } from "../ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "Une équipe exceptionnelle qui a parfaitement compris nos besoins et délivré au-delà de nos attentes.",
    name: "Abel Josias BEDE",
    designation: "CEO, African Digit Consulting",
    src: "/images/bede_josias.jpeg",
  },
  {
    quote:
      "Le professionnalisme et la qualité du travail fourni ont grandement contribué au succès de notre projet.",
    name: "Kouassi Roland",
    designation: "CTO, DATALYS Consulting",
    src: "/images/roland.jpeg",
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
