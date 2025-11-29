"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { GameContext } from "../providers/GameProvider";
import Question from "../components/Question";

export default function GamePage() {
  const router = useRouter();
  const {
    questions,
    actualQuestion,
    setActualQuestion,
    points,
    setPoints,
    setLastAnwser,
    resetGame,
    setUserAnswer,
  } = useContext(GameContext);

  // ✅ Reset COMPLET seulement au premier affichage de /game
  useEffect(() => {
    resetGame();
    // on ne met PAS resetGame dans le tableau de dépendances,
    // on veut que ça se lance une seule fois
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!questions || questions.length === 0) {
    return <p className="text-sm text-slate-200">Aucune question disponible.</p>;
  }

  const currentQuestion = questions[actualQuestion];

  const handleChoice = (answerUser: boolean) => {
    // on mémorise la réponse de l'utilisateur pour cette question
    setUserAnswer(currentQuestion.id, answerUser);

    // on garde la dernière réponse (si tu en as besoin)
    setLastAnwser(answerUser);

    // gestion du score (exemple : +1 / -1)
    if (answerUser === currentQuestion.answer) {
      setPoints(points + 1);
    } else {
      setPoints(points - 1);
    }

    const isLast = actualQuestion >= questions.length - 1;

    if (isLast) {
      // dernière question → page de résultats globale
      router.push("/game/result");
    } else {
      // sinon → question suivante
      setActualQuestion(actualQuestion + 1);
    }
  };

  return (
    <Question
      question={currentQuestion.title}
      onChoice={handleChoice}
    />
  );
}
