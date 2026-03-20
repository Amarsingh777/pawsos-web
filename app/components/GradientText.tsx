"use client";

export default function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
      {children}
    </span>
  );
}