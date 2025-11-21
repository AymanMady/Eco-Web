import React from "react";
import Image from "next/image";
import { Question } from "../models/question.model";
import Planet from "./Planet";
import PointIndicators from "../game/PointIndicator";

export interface ResultProps {
  img: string;
  answerUser: boolean;
  question: Question;
  nextQuestion: () => void;
}

export default function Answer({
  img,
  question,
  answerUser,
  nextQuestion,
}: ResultProps) {
  return (
    <div className="flex lg:flex-row flex-col lg:gap-28 gap-10">
      <div className="flex flex-col lg:w-1/2 gap-5">
        <h1 className="opacity-60 font-bold text-2xl uppercase">Impact Environnemental</h1>
        <div className="flex flex-col bg-white rounded-xl justify-center shadow shadow-primary/20">
        <div className="flex flex-row gap-10 items-center grow justify-center p-10">
        <Image
              style={{
                pointerEvents: "none",
                userSelect: "none",
                width: "10",
                height: "10",
              }}
              src={img}
              alt="Hey"
              width={100}
              height={100}
            ></Image>
            <p className="text-primary-content text-lg font-bold text-center select-none">
              {question.title}
            </p>
          </div>
        </div>
        <div>
          {question.answer ? (
            <div className="flex items-center gap-2">
              <p className="font-bold text-2xl text-success">✅ Bonne réponse</p>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <p className="font-bold text-2xl text-error">❌ Mauvaise réponse</p>
            </div>
          )}
        </div>
        <div className="flex flex-row">
          <div>
            <h2 className="opacity-60 font-bold text-lg uppercase">
              💡 Impact et Explications
            </h2>
            <h3 className="font-bold ">
              {question.datas[0].answer}</h3><br />
            <p className="text text mb-4">
              {question.datas[0].explanation}
            </p>
            <div>
              {question.sources.length > 0 ? (
                <div>
                  <h2 className="opacity-60 font-bold text-lg uppercase">
                    📚 Pour aller plus loin
                  </h2>
                  {question.sources.map((source, index) => (
                    <a
                      key={index}
                      href={source.link!}
                      target="_blank"
                      rel="noreferrer"
                      className="link link-primary"
                    >
                      <p className="underline">🔗 {source.name}</p>
                    </a>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:w-1/2 gap-5 justify-center items-center">
       <PointIndicators />
        <Planet />
        <div className="alert alert-success">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Chaque bon choix compte pour un web plus durable !</span>
        </div>

        <button
          type="button"
          className="btn btn-primary btn-lg self-end"
          onClick={nextQuestion}
        >
          Choix suivant →
        </button>
      </div>
    </div>
  );
}

