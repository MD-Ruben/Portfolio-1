"use client";
import { useEffect, useState } from "react";
import FlickeringGrid from "./flickering-grid";

export default function FlickeringGridWrapper() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <FlickeringGrid
      className="fixed inset-0 w-full h-full"
      color="#FFF07C"
      squareSize={4}
      gridGap={6}
      maxOpacity={0.2}
      flickerChance={0.1}
      width={dimensions.width}
      height={dimensions.height}
    />
  );
}
