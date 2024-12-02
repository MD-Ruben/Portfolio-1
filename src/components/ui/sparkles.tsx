"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
  color?: string;
  minSize?: number;
  maxSize?: number;
  minOpacity?: number;
  maxOpacity?: number;
  particleDensity?: number;
  background?: string;
}

export const SparklesCore = ({
  className,
  background = "transparent",
  minOpacity = 0.5,
  maxOpacity = 1,
  minSize = 1,
  maxSize = 2,
  particleDensity = 100,
  color = "#FFF",
}: ParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        const calculateParticles = () => {
          const w = canvasRef.current?.parentElement?.clientWidth || 0;
          const h = canvasRef.current?.parentElement?.clientHeight || 0;
          const particleCount = Math.floor((w * h) / particleDensity);
          const newParticles = [];

          for (let i = 0; i < particleCount; i++) {
            newParticles.push({
              x: Math.random() * w,
              y: Math.random() * h,
              size: Math.random() * (maxSize - minSize) + minSize,
              opacity: Math.random() * (maxOpacity - minOpacity) + minOpacity,
            });
          }

          setSize({ w, h });
          setParticles(newParticles);
        };

        calculateParticles();
        window.addEventListener("resize", calculateParticles);

        return () => {
          window.removeEventListener("resize", calculateParticles);
        };
      }
    }
  }, [maxOpacity, minOpacity, maxSize, minSize, particleDensity]);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, size.w, size.h);

        particles.forEach((particle) => {
          ctx.fillStyle = color;
          ctx.globalAlpha = particle.opacity;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI);
          ctx.fill();
        });
      }
    }
  }, [particles, size, color, background]);

  return (
    <canvas
      ref={canvasRef}
      width={size.w}
      height={size.h}
      className={cn("pointer-events-none absolute inset-0", className)}
    />
  );
};
