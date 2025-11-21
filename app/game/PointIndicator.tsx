"use client";

import { useContext } from "react";
import { GameContext } from "../providers/GameProvider";

export default function PointIndicators() {
  const { points, questions, actualQuestion } = useContext(GameContext);
  
  // Calculer le score sur 100
  // actualQuestion est un index (commence à 0), donc le nombre de questions répondues est actualQuestion + 1
  const questionsAnswered = Math.min(actualQuestion + 1, questions.length);
  // Chaque bonne réponse = +10%, chaque mauvaise réponse = -10%
  // points = nombre de bonnes réponses
  // (questionsAnswered - points) = nombre de mauvaises réponses
  const percentage = questionsAnswered > 0 
    ? Math.max(0, Math.round((points * 10) - ((questionsAnswered - points) * 10))) 
    : 0;
  
  // Déterminer le niveau d'éco-conception
  let ecoLevel = "Débutant";
  let ecoColor = "text-error";
  
  if (percentage >= 80) {
    ecoLevel = "Expert Green IT";
    ecoColor = "text-success";
  } else if (percentage >= 60) {
    ecoLevel = "Bon niveau";
    ecoColor = "text-info";
  } else if (percentage >= 40) {
    ecoLevel = "Peut mieux faire";
    ecoColor = "text-warning";
  }
  
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-2xl font-bold opacity-60">ECO-SCORE</p>
      <p className={`text-6xl font-bold ${ecoColor}`}>{percentage}/100</p>
      <p className="text-xl font-medium">{ecoLevel}</p>
      <div className="stats shadow bg-base-200 mt-4">
        <div className="stat place-items-center">
          <div className="stat-title">Bonnes pratiques</div>
          <div className="stat-value text-success">{points}</div>
          <div className="stat-desc">sur {questionsAnswered} choix</div>
        </div>
      </div>
    </div>
  );
}

