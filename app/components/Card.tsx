import React from "react";
import Image from "next/image";

export interface CardProps {
  text: string;
  img: string;
}

export default function Card({ text, img }: CardProps) {
  return (
    <div className="relative w-full max-w-md">
      <div className="glass-card flex h-[420px] flex-col justify-center overflow-hidden p-8">
        <div className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-64 bg-gradient-to-b from-emerald-500/25 via-emerald-500/5 to-transparent blur-3xl" />
        <div className="flex flex-1 flex-col items-center justify-center gap-10">
          <Image
            style={{
              pointerEvents: "none",
              userSelect: "none",
            }}
            src={img}
            alt="Question image"
            width={220}
            height={220}
            className="drop-shadow-[0_20px_80px_rgba(16,185,129,0.45)]"
          />
          <p className="select-none px-4 text-center text-lg font-semibold leading-relaxed text-base-content">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
