"use client";

import React, { useEffect, useState } from "react";
import Card from "./Card";
import Choice from "./Choice";

export interface QuestionProps {
  img: string;
  question: string;
  onChoice: (answer: boolean) => void;
}

export default function Question({
  img,
  question,
  onChoice,
}: QuestionProps) {
  const [windowWidth, setWindowWidth] = useState(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col gap-12">
      {windowWidth > 768 ? (
        <div className="self-center flex flex-row items-center gap-10">
          <Choice
            text="Oui"
            img="/left-arrow.svg"
            click={() => onChoice(true)}
          />
          <div>
            <Card img={img} text={question} />
          </div>
          <Choice
            text="Non"
            click={() => onChoice(false)}
            img="/right-arrow.svg"
          />
        </div>
      ) : (
        <div className="self-center flex flex-col items-center gap-4">
          <div className="flex justify-around gap-4">
            <Choice
              text="Oui"
              click={() => onChoice(true)}
              img="/left-arrow.svg"
            />
            <Choice
              text="Non"
              click={() => onChoice(false)}
              img="/right-arrow.svg"
            />
          </div>
          <div>
            <Card img={img} text={question} />
          </div>
        </div>
      )}

      <p className="text-center font-bold text-base-content/60">
        💡 Cliquez pour faire un choix technique !
      </p>
      <div className="alert alert-info shadow-lg max-w-2xl mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>Adopteriez-vous cette pratique pour votre site web ?</span>
      </div>
    </div>
  );
}

