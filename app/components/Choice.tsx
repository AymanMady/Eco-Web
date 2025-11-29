import React from "react";

export interface ChoiceProps {
  text: string;
  click: () => void;
}

export default function Choice({ text, click }: ChoiceProps) {
  return (
    <button
      type="button"
      onClick={click}
      className="group flex w-full max-w-xs flex-col items-center gap-3 rounded-full border border-white/15 bg-base-100/10 px-6 py-4 text-base font-semibold text-base-content/80 transition hover:-translate-y-1 hover:border-emerald-400/70 hover:bg-emerald-500/15 hover:text-base-content focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
    >
      <span>{text}</span>
    </button>
  );
}
