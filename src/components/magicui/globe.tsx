"use client";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.1],
      markerColor: [1, 0.94, 0.49], // #FFF07C
      glowColor: [0.53, 0.73, 0.64], // #87BBA2
      markers: [
        // Paris
        { location: [48.8566, 2.3522], size: 0.1 },
        // New York
        { location: [40.7128, -74.006], size: 0.1 },
        // Tokyo
        { location: [35.6762, 139.6503], size: 0.1 },
      ],
      onRender: (state) => {
        // Cette fonction est appelée à chaque frame
        state.phi = phi;
        phi += 0.005;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 600,
        aspectRatio: 1,
        margin: "auto",
        position: "relative",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          contain: "layout paint size",
          cursor: "grab",
          opacity: 0.8,
        }}
      />
    </div>
  );
}
