"use client";
import { cn } from "@/utils/cn";
import { useEffect, useRef } from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const updateMousePosition = (ev: MouseEvent) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      container.style.setProperty("--x", (ev.clientX - rect.left).toString());
      container.style.setProperty("--y", (ev.clientY - rect.top).toString());
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "fixed inset-0 z-0 h-full w-full bg-black [--x:50%] [--y:50%]",
        className
      )}
    >
      <div className="absolute inset-0 z-0 opacity-70 mix-blend-soft-light">
        <div className="absolute inset-0 bg-black [mask-image:radial-gradient(100%_100%_at_var(--x)_var(--y),white,transparent)]" />
      </div>
      <div className="absolute inset-0 z-0 opacity-50 mix-blend-color-dodge">
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFF07C] to-[#87BBA2] [mask-image:radial-gradient(100%_100%_at_var(--x)_var(--y),white,transparent)]" />
      </div>
    </div>
  );
};
