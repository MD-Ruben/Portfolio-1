"use client";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { Spotlight } from "../ui/spotlight";

export const HeroSection = () => {
  return (
    <>
      {/* Premier écran avec Spotlight */}
      <section className="h-screen relative flex flex-col items-center justify-center overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#FFF07C"
        />
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-[#F0F7EE] to-[#87BBA2]"
            >
              Victoire Service
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mx-auto max-w-[700px] text-lg text-[#87BBA2] md:text-xl"
            >
              Des solutions numériques innovantes pour votre succès
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#FFF07C] to-[#87BBA2] text-black font-medium"
              >
                Découvrir nos services
              </Button>
              <Button
                size="lg"
                variant="bordered"
                className="border-[#87BBA2] text-[#F0F7EE]"
              >
                Nous contacter
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Deuxième écran avec ContainerScroll */}
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-[#F0F7EE]">
                Transformez vos idées en <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-gradient">
                  Réalité Numérique
                </span>
              </h1>
            </>
          }
        >
          <div className="relative h-full w-full">
            <Image
              src="/images/hero-image.jpg"
              alt="Victoire Service Hero"
              fill
              className="object-cover object-center rounded-2xl"
              priority
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent rounded-2xl" />
          </div>
        </ContainerScroll>
      </div>

      {/* Globe section (commentée) */}
      {/* <div className="w-full max-w-[600px] mx-auto">
        <Globe />
      </div> */}
    </>
  );
};
