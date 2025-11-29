"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GameContext } from "../../providers/GameProvider";
import Planet from "../../components/Planet";

export default function GameResultPage() {
  const router = useRouter();
  const { questions, userAnswers, resetGame } = useContext(GameContext);

  // Si on arrive ici sans questions -> on repart au jeu
  useEffect(() => {
    if (!questions || questions.length === 0) {
      router.replace("/game");
    }
  }, [questions, router]);

  const totalQuestions = questions.length;

  const correctCount = questions.reduce((acc, q) => {
    const userAnswer = userAnswers[q.id];
    if (userAnswer === undefined) return acc;
    return acc + (userAnswer === q.answer ? 1 : 0);
  }, 0);

  const ecoScore =
    totalQuestions > 0
      ? Math.max(
          0,
          Math.min(100, Math.round((correctCount / totalQuestions) * 100))
        )
      : 0;

  const mood = ecoScore >= 50 ? "happy" : "sad";
  const level =
    ecoScore >= 80 ? "Expert" : ecoScore >= 50 ? "Intermédiaire" : "Débutant";

  return (
    <div className="flex flex-col gap-8">
      {/* En-tête */}
      <header className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300/80">
          Résultats du simulateur
        </p>
        <h1 className="text-2xl font-semibold">Votre profil Green IT</h1>
        <p className="text-sm text-slate-300 max-w-2xl">
          Voici le détail de vos choix pour chaque question, ainsi que leur
          impact sur l’eco-score global.
        </p>
      </header>

      {/* Bloc score + planète */}
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
        {/* Colonne gauche : liste de toutes les questions */}
        <div className="flex flex-col gap-4">
          {questions.map((q) => {
            const userAnswer = userAnswers[q.id];
            const hasAnswered = userAnswer !== undefined;
            const isCorrect = hasAnswered && userAnswer === q.answer;

            return (
              <article
                key={q.id}
                className="glass-card p-5 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-sm font-semibold">{q.title}</h2>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      !hasAnswered
                        ? "bg-slate-700 text-slate-200"
                        : isCorrect
                        ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/40"
                        : "bg-rose-500/15 text-rose-300 border border-rose-500/40"
                    }`}
                  >
                    {!hasAnswered
                      ? "Non répondu"
                      : isCorrect
                      ? "Bonne réponse"
                      : "Mauvaise réponse"}
                  </span>
                </div>

                <div className="text-xs text-slate-300">
                  <p className="mb-1 font-semibold uppercase tracking-[0.16em]">
                    Votre choix
                  </p>
                  <p>
                    {hasAnswered
                      ? userAnswer
                        ? "Vous avez répondu : Oui"
                        : "Vous avez répondu : Non"
                      : "Vous n’avez pas répondu à cette question."}
                  </p>
                </div>

                <div className="text-xs text-slate-300 mt-2">
                  <p className="mb-1 font-semibold uppercase tracking-[0.16em]">
                    Impact et explications
                  </p>
                  <p>
                    {q.datas && q.datas[0]
                      ? q.datas[0].explanation
                      : "Pas d’explication disponible pour cette question."}
                  </p>
                </div>

                {q.sources && q.sources.length > 0 && (
                  <div className="mt-2">
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Pour aller plus loin
                    </p>
                    <ul className="space-y-1 text-[11px]">
                      {q.sources
                        .filter((s) => s.link)
                        .map((s) => (
                          <li key={s.id}>
                            <a
                              href={s.link!}
                              target="_blank"
                              rel="noreferrer"
                              className="text-sky-400 hover:text-sky-300 underline"
                            >
                              🔗 {s.name}
                            </a>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Colonne droite : eco-score + planète + stats */}
        <div className="glass-card flex flex-col items-center gap-6 p-6">
          {/* Score principal */}
          <div className="flex flex-col items-center gap-1">
            <p className="text-4xl font-extrabold text-rose-300">
              {ecoScore}/100
            </p>
            <p className="text-sm text-slate-200">{level}</p>
            <div className="mt-3 rounded-2xl bg-slate-900/80 px-6 py-3 text-center text-xs text-slate-200">
              <p className="font-semibold text-emerald-300">
                {correctCount} bonne(s) pratique(s)
              </p>
              <p className="text-slate-400 text-[11px]">
                sur {totalQuestions} choix
              </p>
            </div>
          </div>

          {/* planète happy/sad */}
          <Planet mood={mood} />

          {/* Texte de synthèse */}
          <div className="text-center text-xs text-slate-400">
            <p>
              {ecoScore >= 50
                ? "La planète est plutôt contente de vos choix 🌍."
                : "La planète est inquiète… il y a encore de belles marges de progrès 😢."}
            </p>
          </div>

          {/* Boutons actions */}
          <div className="flex flex-col gap-3 w-full mt-2">
            <button
              type="button"
              className="pill-button-primary w-full"
              onClick={() => {
                resetGame();
                router.push("/game");
              }}
            >
              Refaire le simulateur
            </button>

            <Link
              href="/"
              className="pill-button-ghost w-full justify-center text-center"
            >
              ⟵ Retour à l’accueil
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
