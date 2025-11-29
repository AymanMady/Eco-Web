"use client";

import React from "react";

interface PlanetProps {
  mood?: "happy" | "sad"; // happy par défaut
  size?: number;
}

export default function Planet({ mood = "happy", size = 260 }: PlanetProps) {
  const isHappy = mood === "happy";

  // bouche différente selon l'humeur
  const mouthPath = isHappy
    ? "M85 115 Q100 130 115 115" // sourire
    : "M85 125 Q100 110 115 125"; // bouche triste

  // sourcils (uniquement pour sad)
  const leftBrowY1 = isHappy ? 78 : 76;
  const leftBrowY2 = isHappy ? 78 : 74;
  const rightBrowY1 = isHappy ? 78 : 74;
  const rightBrowY2 = isHappy ? 78 : 76;

  return (
    // <div className="relative flex items-center justify-center">
    //   {/* halo animé */}
    //   <div
    //     className="planet-halo absolute rounded-full bg-emerald-400/40 blur-3xl"
    //     style={{ width: size + 80, height: size + 80 }}
    //   />
    //   <div
    //     className="planet-float relative rounded-full bg-slate-900/90 shadow-xl shadow-emerald-500/50"
    //     style={{ width: size + 40, height: size + 40 }}
    //   >
        <svg
          width={size}
          height={size}
          viewBox="0 0 200 200"
          className="block m-auto"
        >
          {/* disque principal */}
          <circle cx="100" cy="100" r="80" fill="#0ea5e9" />

          {/* continents simplifiés */}
          <path
            d="M60 60 Q80 40 105 55 Q120 70 115 90 Q110 105 90 100 Q70 95 60 80 Z"
            fill="#22c55e"
          />
          <path
            d="M120 110 Q140 100 150 115 Q160 130 150 145 Q135 155 120 145 Z"
            fill="#22c55e"
          />
          <path
            d="M40 110 Q55 100 70 110 Q80 120 70 135 Q55 145 45 135 Z"
            fill="#22c55e"
          />

          {/* nuages en orbite */}
          <g className="cloud-orbit">
            <ellipse
              cx="60"
              cy="45"
              rx="18"
              ry="7"
              fill="#e5f3ff"
              opacity="0.9"
            />
            <ellipse
              cx="140"
              cy="155"
              rx="18"
              ry="7"
              fill="#e5f3ff"
              opacity="0.9"
            />
          </g>

          {/* yeux */}
          <circle cx="75" cy="90" r="13" fill="#0f172a" />
          <circle cx="125" cy="90" r="13" fill="#0f172a" />
          <circle cx="70" cy="85" r="5" fill="#f9fafb" />
          <circle cx="120" cy="85" r="5" fill="#f9fafb" />

          {/* joues */}
          <circle cx="63" cy="110" r="7" fill="#fb7185" opacity="0.9" />
          <circle cx="132" cy="110" r="7" fill="#fb7185" opacity="0.9" />

          {/* bouche */}
          <path
            d={mouthPath}
            fill="transparent"
            stroke="#111827"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* sourcils (un peu inclinés en mode triste) */}
          <line
            x1="66"
            y1={leftBrowY1}
            x2="82"
            y2={leftBrowY2}
            stroke="#111827"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="118"
            y1={rightBrowY1}
            x2="134"
            y2={rightBrowY2}
            stroke="#111827"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
    //   </div>
    // </div>
  );
}
