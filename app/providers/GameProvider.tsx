"use client";

import { createContext, useContext, useEffect } from "react";
import { Question as QuestionModel } from "../models/question.model";
import { ThemeContext } from "./ThemeProvider";
import useLocalStorage from "../hooks/useLocalStorage";

export const GameContext = createContext<{
  questions: QuestionModel[];
  actualQuestion: number;
  points: number;
  lastAnswer: boolean;
  setLastAnwser: (lastAnswer: boolean) => void;
  setPoints: (points: number) => void;
  setActualQuestion: (actualQuestion: number) => void;
  resetGame: () => void;
}>({
  questions: [],
  actualQuestion: 0,
  points: 0,
  lastAnswer: false,
  setPoints: () => { },
  setActualQuestion: () => { },
  setLastAnwser: () => { },
  resetGame: () => { },
});

export default function GameProvider({
  children,
  questions,
}: {
  children: React.ReactNode;
  questions: QuestionModel[];
}) {
  const [points, setPoints] = useLocalStorage<number>("game_points", 0);
  const [actualQuestion, setActualQuestion] = useLocalStorage<number>("game_actualQuestion", 0);
  const [lastAnswer, setLastAnwser] = useLocalStorage<boolean>("game_lastAnswer", false);

  const { setTheme } = useContext(ThemeContext);

  const themesPoints = [
    "sunset",
    "forest",
    "halloween",
    "aqua",
    "synthwave",
    "business",
    "cyberpunk",
    "night",
    "coffee",
  ];

  const resetGame = () => {
    setPoints(0);
    setActualQuestion(0);
    setLastAnwser(false);
  };

  useEffect(() => {
    const theme = themesPoints.at(points % themesPoints.length);
    setTheme(theme as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [points]);

  return (
    <GameContext.Provider
      value={{
        questions,
        actualQuestion,
        points,
        lastAnswer,
        setPoints,
        setActualQuestion,
        setLastAnwser,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

