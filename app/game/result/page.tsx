"use client";

import Answer from "@/app/components/Answer";
import { GameContext } from "@/app/providers/GameProvider";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ResultPage() {
  const router = useRouter();
  const { questions, actualQuestion, lastAnswer, setActualQuestion } = useContext(GameContext);

  const currentQuestion = questions[actualQuestion];

  // Si pas de question, rediriger vers le jeu
  useEffect(() => {
    if (!currentQuestion) {
      router.push("/game");
    }
  }, [currentQuestion, router]);

  // Afficher un écran de chargement si pas de question
  if (!currentQuestion) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <Answer
      answerUser={lastAnswer}
      img={currentQuestion.imageUrl}
      question={currentQuestion}
      nextQuestion={() => {
        const nextIndex = actualQuestion + 1;
        
        // Si c'est la dernière question, on pourrait rediriger vers une page de fin
        // Pour l'instant, on continue simplement
        setActualQuestion(nextIndex);
        
        // Petit délai pour s'assurer que le contexte est mis à jour avant la navigation
        setTimeout(() => {
          router.push("/game");
        }, 0);
      }}
    />
  );
}

