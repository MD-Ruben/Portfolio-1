"use client";
import { useClientRandom } from "@/hooks/useClientRandom";
import { cn } from "@/lib/utils";
import { animate, motion } from "framer-motion";
import React, { useEffect } from "react";

export const AnimatedSkillCard = ({
  className,
  title,
  description,
  icons,
}: {
  className?: string;
  children?: React.ReactNode;
  title: string;
  description: string;
  icons: React.ReactNode[];
}) => {
  return (
    <Card className={className}>
      <CardSkeletonContainer>
        <SkillIcons icons={icons} />
      </CardSkeletonContainer>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
};

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-full p-8 rounded-xl border border-[#FFF07C]/20 bg-[#000000]/70 backdrop-blur-sm shadow-[0_8px_16px_rgba(255,240,124,0.1)] group hover:shadow-[0_8px_24px_rgba(255,240,124,0.2)] transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
};

const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={cn("text-lg font-semibold text-[#FFF07C] py-2", className)}>
      {children}
    </h3>
  );
};

const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-sm font-normal text-[#87BBA2]", className)}>
      {children}
    </p>
  );
};

const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-gradient-to-b from-[#FFF07C]/5 to-[#87BBA2]/5 [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `rounded-full flex items-center justify-center 
        bg-gradient-to-b from-[#FFF07C]/10 to-[#87BBA2]/10
        shadow-[0_8px_16px_rgba(255,240,124,0.1)]
        hover:shadow-[0_8px_24px_rgba(255,240,124,0.2)]
        transition-all duration-300
        `,
        className
      )}
    >
      {children}
    </div>
  );
};

const SkillIcons = ({ icons }: { icons: React.ReactNode[] }) => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];

  useEffect(() => {
    const sequence = icons.map((_, index) => [
      `.icon-${index}`,
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ]);

    sequence.forEach((animation) => {
      animate(animation[0], animation[1], animation[2]);
    });
  }, [icons]);

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-wrap justify-center items-center gap-4">
        {icons.map((icon, index) => (
          <Container key={index} className={`h-16 w-16 icon-${index}`}>
            {icon}
          </Container>
        ))}
      </div>
      <AnimatedSparkles />
    </div>
  );
};

const AnimatedSparkles = () => {
  const { getRandom, isClient } = useClientRandom();

  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `${isClient ? getRandom() * 100 : 50}%`,
            left: `${isClient ? getRandom() * 100 : 50}%`,
            opacity: isClient ? getRandom() : 0.5,
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: isClient ? getRandom() * 2 + 4 : 4,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inline-block w-0.5 h-0.5 rounded-full bg-[#FFF07C]"
        />
      ))}
    </div>
  );
};
