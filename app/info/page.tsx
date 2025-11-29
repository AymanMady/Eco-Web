import Link from "next/link";
import Container from "../components/Container";

export default function InfosPage() {
  return (
    <Container className="py-12 max-w-4xl mx-auto flex flex-col gap-8">
      {/* 🔙 Bouton retour accueil */}
      <div>
        <Link
          href="/"
          className="pill-button-ghost px-6 py-3 inline-flex items-center gap-2"
        >
          ⟵ Retour à l’accueil
        </Link>
      </div>

      {/* En-tête */}
      <header className="flex flex-col gap-3 mt-2">
        <span className="stat-chip w-fit">
          <span className="text-sky-300 text-base">●</span>
          <span>Comprendre le principe</span>
        </span>

        <h1 className="text-3xl sm:text-4xl font-semibold">
          Comment fonctionne le simulateur Green IT ?
        </h1>

        <p className="text-sm sm:text-base text-slate-100/90 max-w-2xl">
          Ce site est un atelier pédagogique pour découvrir les enjeux de
          l’éco-conception web. À chaque étape, vous faites des choix
          techniques qui influencent un eco-score : plus vos choix sont
          sobres, plus le score est élevé.
        </p>
      </header>

      {/* Bloc d'explications */}
      <section className="glass-card space-y-4">
        <h2 className="text-xl font-semibold">1. Objectif du simulateur</h2>
        <p className="text-sm text-slate-100/90">
          Le but n’est pas de mesurer précisément l’empreinte carbone d’un vrai
          site, mais de vous montrer les ordres de grandeur et les{" "}
          <strong>bons réflexes</strong> à adopter dès la conception : limiter
          le poids des pages, réduire les requêtes réseaux, éviter les contenus
          superflus, etc.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          2. Les mesures utilisées pour calculer l’eco-score
        </h2>
        <p className="text-sm text-slate-100/90">
          L’eco-score affiché à la fin du jeu est basé sur une estimation
          simplifiée de plusieurs paramètres :
        </p>

        <ul className="list-disc list-inside space-y-2 text-sm text-slate-100/90">
          <li>
            <strong>Poids total de la page</strong> : images, vidéos, scripts,
            polices… Plus la page est lourde, plus elle consomme de bande
            passante et d’énergie.
          </li>
          <li>
            <strong>Nombre de requêtes</strong> : chaque fichier chargé demande
            du travail aux serveurs et aux réseaux.
          </li>
          <li>
            <strong>Médias lourds</strong> : vidéo auto-play, images non
            compressées, assets ultra-HD… ce sont les éléments les plus
            énergivores.
          </li>
          <li>
            <strong>Scripts tiers & trackers</strong> : ils ajoutent du poids,
            des requêtes et tournent en continu sur l'appareil de
            l'utilisateur.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">
          3. Comment ces mesures sont adaptées dans le jeu
        </h2>
        <p className="text-sm text-slate-100/90">
          Pour garder le simulateur simple, les valeurs ne sont pas mesurées en
          temps réel mais <strong>estimées à partir de vos choix</strong>.
        </p>

        <ul className="list-disc list-inside space-y-2 text-sm text-slate-100/90">
          <li>
            Une <strong>image optimisée</strong> ajoute un petit poids, une
            grosse image brute en ajoute énormément.
          </li>
          <li>
            Une <strong>vidéo en auto-play</strong> augmente énormément le
            poids total.
          </li>
          <li>
            Les <strong>polices locales/système</strong> sont très légères,
            contrairement aux polices web externes.
          </li>
          <li>
            Chaque <strong>script tiers</strong> implique requêtes réseau +
            exécution supplémentaire.
          </li>
        </ul>

        <p className="text-sm text-slate-100/90">
          Le simulateur calcule un score interne après chaque question, puis
          génère votre <strong>eco-score sur 100</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          4. Comment interpréter votre score ?
        </h2>
        <p className="text-sm text-slate-100/90">
          Un score élevé signifie des choix sobres et responsables. Un score
          faible indique des pistes d’amélioration : optimisation des médias,
          simplification des animations, réduction des scripts, etc.
        </p>

        <p className="text-xs text-slate-400 italic mt-4">
          Note : ce simulateur est volontairement simplifié pour l’apprentissage
          et ne remplace pas un audit environnemental complet.
        </p>
      </section>
    </Container>
  );
}
