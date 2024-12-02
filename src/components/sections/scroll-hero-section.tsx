"use client";
import Image from "next/image";
import { ContainerScroll } from "../ui/container-scroll-animation";

export function ScrollHeroSection() {
  return (
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
          <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
            <p className="text-[#FFF07C] text-xl md:text-2xl font-semibold">
              Une équipe passionnée au service de vos projets
            </p>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
