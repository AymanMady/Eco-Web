"use client";

import React, { useEffect, useState } from "react";
import Choice from "./Choice";

export interface QuestionProps {
  question: string;
  onChoice: (answer: boolean) => void;
}

export default function Question({ question, onChoice }: QuestionProps) {
  const [windowWidth, setWindowWidth] = useState(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = windowWidth > 768;

  return (
    <div className="flex flex-col gap-10">
      {/* Carte de question (texte uniquement) */}
      <div className="glass-card p-10 text-center">
        <p className="select-none text-xl font-semibold leading-relaxed text-base-content">
          {question}
        </p>
      </div>

      {/* Choix */}
      <div className="glass-card flex flex-col gap-6 p-6">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-300/80">
          Votre choix
        </p>
        <p className="text-sm text-base-content/70">
          Imaginez que vous concevez un site réel. Adopteriez-vous ce choix
          technique dans votre projet&nbsp;?
        </p>

        {isDesktop ? (
          <div className="mt-2 flex flex-col gap-3 items-center">
            <Choice text="Oui, j’adopte" click={() => onChoice(true)} />
            <Choice text="Non, je refuse" click={() => onChoice(false)} />
          </div>
        ) : (
          <div className="mt-2 grid grid-cols-1 gap-3">
            <Choice text="Oui, j’adopte" click={() => onChoice(true)} />
            <Choice text="Non, je refuse" click={() => onChoice(false)} />
          </div>
        )}

        <p className="text-xs text-base-content/60">
          💡 Essayez d’anticiper l’impact environnemental avant de voir la
          réponse finale.
        </p>
      </div>

      {/* Infobox */}
      <div className="glass-card flex items-start gap-3 border-l-4 border-l-emerald-400/90 px-5 py-4 text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mt-0.5 h-5 w-5 text-emerald-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>
          Chaque décision influence votre <strong>eco-score</strong> et l’impact
          carbone de votre projet. Prenez un instant pour peser le pour et le
          contre.
        </span>
      </div>
    </div>
  );
}
