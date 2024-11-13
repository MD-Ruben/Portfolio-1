"use client";
import { useEffect, useRef } from "react";

interface FlickeringGridProps {
  className?: string;
  squareSize?: number;
  gridGap?: number;
  color?: string;
  maxOpacity?: number;
  flickerChance?: number;
  width?: number;
  height?: number;
}

export default function FlickeringGrid({
  className = "",
  squareSize = 4,
  gridGap = 6,
  color = "#FFF07C",
  maxOpacity = 0.3,
  flickerChance = 0.1,
  width = 800,
  height = 800,
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const squareAndGap = squareSize + gridGap;
    const rows = Math.ceil(height / squareAndGap);
    const cols = Math.ceil(width / squareAndGap);
    const opacities = Array(rows * cols).fill(0);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const index = i * cols + j;

          // Chance to start flickering
          if (Math.random() < flickerChance) {
            opacities[index] = Math.random() * maxOpacity;
          }

          // Gradually decrease opacity
          opacities[index] *= 0.95;

          if (opacities[index] > 0.01) {
            ctx.fillStyle = `${color}${Math.round(opacities[index] * 255)
              .toString(16)
              .padStart(2, "0")}`;
            ctx.fillRect(
              j * squareAndGap,
              i * squareAndGap,
              squareSize,
              squareSize
            );
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, [squareSize, gridGap, color, maxOpacity, flickerChance, width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={className}
    />
  );
}
