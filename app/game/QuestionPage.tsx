"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { GameContext } from "../providers/GameProvider";
import Question from "../components/Question";

export default function QuestionPage() {
  const router = useRouter();
  const {
    questions,
    actualQuestion,
    setPoints,
    points,
    setLastAnwser,
    resetGame,
  } = useContext(GameContext);

  if (!questions || questions.length === 0) {
    throw new Error("Questions not found");
  }

  const currentQuestion = questions[actualQuestion];

  // Si on a dépassé le nombre de questions, afficher un message de fin
  if (!currentQuestion) {
    return (
      <div className="flex flex-col gap-6 items-center justify-center min-h-[50vh]">
        <h1 className="text-4xl font-bold">🎉 Félicitations !</h1>
        <p className="text-xl">Vous avez terminé toutes les questions !</p>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Score final</div>
            <div className="stat-value text-primary">{points}</div>
            <div className="stat-desc">sur {questions.length} questions</div>
          </div>
        </div>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => {
            resetGame();
          }}
        >
          Recommencer le jeu
        </button>
      </div>
    );
  }

  const onChoice = (answerUser: boolean) => {
    if (answerUser === currentQuestion.answer) {
      setPoints(points + 1);
    } else {
      setPoints(points - 1);
    }

    setLastAnwser(answerUser);

    // Petit délai pour s'assurer que le contexte est mis à jour avant la navigation
    setTimeout(() => {
      router.push("/game/result");
    }, 30);
  };

  return (
    <Question
      img={currentQuestion.imageUrl}
      question={currentQuestion.title}
      onChoice={onChoice}
    />
  );
}

