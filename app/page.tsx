import Header from "./components/Header";
import Link from "next/link";
import Container from "./components/Container";
import Planet from "./components/Planet";

export default function HomePage() {
  return (
    <Container className="grid min-h-[calc(100vh-6rem)] items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
      {/* Colonne gauche : texte */}
      <div className="flex flex-col gap-6">
        <span className="stat-chip">
          <span className="text-sky-300 text-base">●</span>
          <span>Projet Green IT · Simulateur pédagogique</span>
        </span>

        <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
          Découvrez l’éco-conception web avec{" "}
          <span className="text-emerald-300">Green IT</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-100/90 max-w-xl">
          Faites des choix techniques, observez leur impact environnemental,
          et entraînez-vous à concevoir des interfaces plus sobres et plus
          responsables.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link href="/game" className="pill-button-primary">
            Commencer le simulateur →
          </Link>
          <Link href="/info" className="pill-button-ghost">
            Comprendre le principe
          </Link>
        </div>

        <div className="flex gap-6 mt-4 text-xs text-slate-100/90">
          <div>
            <p className="font-semibold text-sky-300 text-lg">10</p>
            <p>bonnes pratiques à découvrir</p>
          </div>
          <div>
            <p className="font-semibold text-emerald-300 text-lg">100 / 100</p>
            <p>eco-score idéal</p>
          </div>
        </div>
      </div>

      {/* Colonne droite : planète animée seule */}
      <div className="flex items-center justify-center">
        <Planet mood="happy" />
      </div>
    </Container>
  );
}
