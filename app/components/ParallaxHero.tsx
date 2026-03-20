"use client";

import { useEffect, useState } from "react";

export default function ParallaxHero({
  children,
}: {
  children: React.ReactNode;
}) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 20;
      const y = (e.clientY - window.innerHeight / 2) / 20;

      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative overflow-hidden">

      {/* MAIN ORANGE GLOW */}
      <div
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
        className="pointer-events-none absolute top-[-200px] left-[10%] w-[600px] h-[600px] bg-orange-300 rounded-full blur-[150px] opacity-50 transition-transform duration-200"
      />

      {/* SECOND GLOW */}
      <div
        style={{
          transform: `translate(${-offset.x}px, ${-offset.y}px)`,
        }}
        className="pointer-events-none absolute bottom-[-200px] right-[10%] w-[500px] h-[500px] bg-orange-200 rounded-full blur-[150px] opacity-40 transition-transform duration-200"
      />

      {/* CENTER LIGHT */}
      <div
        style={{
          transform: `translate(${offset.x / 2}px, ${offset.y / 2}px)`,
        }}
        className="pointer-events-none absolute top-[40%] left-[50%] w-[400px] h-[400px] bg-orange-100 rounded-full blur-[130px] opacity-40 transition-transform duration-200"
      />

      {/* FLOATING PAW ICONS */}
      <div className="pointer-events-none absolute inset-0">

        <span className="absolute left-[15%] top-[20%] text-4xl opacity-30 animate-float">
          🐾
        </span>

        <span className="absolute right-[20%] top-[30%] text-3xl opacity-25 animate-float-slow">
          🐾
        </span>

        <span className="absolute left-[25%] bottom-[25%] text-3xl opacity-20 animate-float">
          🐾
        </span>

        <span className="absolute right-[30%] bottom-[20%] text-4xl opacity-25 animate-float-slow">
          🐾
        </span>

      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10">{children}</div>

    </div>
  );
}