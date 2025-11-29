"use server";

import { Question } from "../models/question.model";

// Questions réalistes basées sur des critères Green IT / EcoIndex
const mockQuestions: Question[] = [
  {
    id: 1,
    title: "Le poids total de votre page d’accueil est inférieur à 1 Mo.",
    answer: true, //  Oui = bonne pratique
    imageUrl: "",
    sources: [
      {
        id: 1,
        questionId: 1,
        name: "HTTP Archive – Page Weight Report",
        link: "https://httparchive.org/reports/page-weight",
      },
      {
        id: 2,
        questionId: 1,
        name: "GreenIT.fr – Eco-conception web",
        link: "https://www.greenit.fr",
      },
    ],
    datas: [
      {
        id: 1,
        questionId: 1,
        answer: "Bon choix ! Une page légère consomme beaucoup moins de ressources.",
        value: 50,
        explanation:
          "Le poids moyen d’une page web dépasse aujourd’hui 2 Mo. Plus une page est lourde, plus elle consomme de bande passante et d’énergie, surtout sur mobile. Viser moins de 1 Mo est une recommandation fréquente en éco-conception pour limiter l’empreinte carbone et améliorer les performances.",
      },
    ],
    messages: [],
  },
  {
    id: 2,
    title:
      "Toutes les images de votre site sont optimisées (formats modernes comme WebP/AVIF et compression adaptée).",
    answer: true,
    imageUrl: "",
    sources: [
      {
        id: 3,
        questionId: 2,
        name: "web.dev – Optimize images",
        link: "https://web.dev/fast/#optimize-images",
      },
    ],
    datas: [
      {
        id: 2,
        questionId: 2,
        answer: "Excellent ! Les images optimisées réduisent fortement l’empreinte.",
        value: 70,
        explanation:
          "Les images représentent souvent 60 à 70 % du poids total d’une page. En utilisant des formats modernes (WebP, AVIF) et une bonne compression, on réduit drastiquement les données transférées, ce qui diminue la consommation d’énergie côté réseau et améliore le temps de chargement.",
      },
    ],
    messages: [],
  },
  {
    id: 3,
    title:
      "Les images et iframes non visibles au chargement sont chargées en lazy loading.",
    answer: true,
    imageUrl: "",
    sources: [
      {
        id: 4,
        questionId: 3,
        name: "web.dev – Lazy loading",
        link: "https://web.dev/lazy-loading/",
      },
    ],
    datas: [
      {
        id: 3,
        questionId: 3,
        answer: "Très bon réflexe ! Le lazy loading évite de charger l’inutile.",
        value: 40,
        explanation:
          "Le lazy loading permet de ne charger que les ressources visibles à l’écran. Cela réduit le nombre de requêtes et le volume de données au premier affichage, ce qui limite la consommation d’énergie côté client et côté serveur, tout en améliorant l’expérience utilisateur.",
      },
    ],
    messages: [],
  },
  {
    id: 4,
    title:
      "Votre page comporte moins de 1 500 éléments DOM (balises HTML au total).",
    answer: true,
    imageUrl: "",
    sources: [
      {
        id: 5,
        questionId: 4,
        name: "EcoIndex – Méthodologie",
        link: "https://ecoindex.fr",
      },
    ],
    datas: [
      {
        id: 4,
        questionId: 4,
        answer: "Bien joué ! Un DOM limité est plus sobre et plus performant.",
        value: 30,
        explanation:
          "Un DOM très volumineux (plus de 1 500 éléments) augmente le travail du navigateur : parsing, layout, rendu, JS… Cela consomme plus de CPU et de mémoire, donc plus d’énergie. C’est un des critères pris en compte par EcoIndex pour évaluer la sobriété d’une page.",
      },
    ],
    messages: [],
  },
  {
    id: 5,
    title:
      "Votre page effectue 50 requêtes HTTP ou moins lors du premier chargement.",
    answer: true,
    imageUrl: "",
    sources: [
      {
        id: 6,
        questionId: 5,
        name: "EcoIndex – Indicateurs techniques",
        link: "https://ecoindex.fr",
      },
      {
        id: 7,
        questionId: 5,
        name: "web.dev – Minimize network requests",
        link: "https://web.dev/fast/#minimize-network-requests",
      },
    ],
    datas: [
      {
        id: 5,
        questionId: 5,
        answer: "Oui, c’est mieux. Moins de requêtes = moins d’énergie consommée.",
        value: 40,
        explanation:
          "Chaque requête HTTP implique du travail pour le serveur, du transit réseau et du traitement côté client. En regroupant les ressources (sprites, bundling, moins de scripts tiers), on réduit ce nombre, ce qui améliore la performance et diminue l’empreinte énergétique.",
      },
    ],
    messages: [],
  },
  {
    id: 6,
    title:
      "Vos fichiers HTML, CSS et JavaScript sont minifiés (espaces, commentaires, etc. supprimés).",
    answer: true,
    imageUrl: "",
    sources: [
      {
        id: 8,
        questionId: 6,
        name: "web.dev – Minify CSS",
        link: "https://web.dev/minify-css/",
      },
      {
        id: 9,
        questionId: 6,
        name: "web.dev – Minify JavaScript",
        link: "https://web.dev/minify-javascript/",
      },
    ],
    datas: [
      {
        id: 6,
        questionId: 6,
        answer: "Super ! La minification allège vraiment vos ressources.",
        value: 30,
        explanation:
          "La minification supprime espaces, commentaires et caractères inutiles. La compression GZIP/Brotli réduit encore le poids. Résultat : fichiers 30 à 50 % plus légers, transfert réseau plus rapide, moins d’énergie consommée. Un site de 1 Mo peut descendre à 500 Ko.",
      },
    ],
    messages: [],
  },
  {
    id: 7,
    title:
      "Votre site utilise une stratégie de cache efficace (en-têtes Cache-Control, CDN ou équivalent).",
    answer: true,
    imageUrl: "",
    sources: [
      {
        id: 10,
        questionId: 7,
        name: "web.dev – Caching best practices",
        link: "https://web.dev/uses-long-cache-ttl/",
      },
    ],
    datas: [
      {
        id: 7,
        questionId: 7,
        answer: "Très bon choix ! Le cache évite de re-télécharger inutilement.",
        value: 60,
        explanation:
          "Une bonne politique de cache permet d’éviter de re-télécharger les mêmes ressources à chaque visite. Les fichiers sont servis depuis le cache local ou un CDN, ce qui réduit drastiquement les transferts réseau et le nombre de requêtes vers le serveur d’origine.",
      },
    ],
    messages: [],
  },
  {
    id: 8,
    title:
      "Votre site est hébergé chez un fournisseur alimenté en grande partie par des énergies renouvelables.",
    answer: true,
    imageUrl: "",
    sources: [
      {
        id: 11,
        questionId: 8,
        name: "The Green Web Foundation – Green Hosting",
        link: "https://www.thegreenwebfoundation.org/",
      },
    ],
    datas: [
      {
        id: 8,
        questionId: 8,
        answer: "Parfait ! L’hébergement vert réduit l’empreinte de chaque visite.",
        value: 50,
        explanation:
          "Les datacenters consomment énormément d’électricité. Choisir un hébergeur alimenté par des énergies renouvelables ou certifié “green” réduit l’empreinte carbone de chaque requête, même si la structure technique du site reste identique.",
      },
    ],
    messages: [],
  },
  {
    id: 9,
    title:
      "Vous avez supprimé ou limité les scripts tiers non essentiels (trackers, widgets, librairies lourdes).",
    answer: true,
    imageUrl: "",
    sources: [
      {
        id: 12,
        questionId: 9,
        name: "web.dev – Reduce unused JavaScript",
        link: "https://web.dev/unused-javascript/",
      },
    ],
    datas: [
      {
        id: 9,
        questionId: 9,
        answer:
          "Très bon réflexe ! Moins de scripts = moins de poids et de CPU.",
        value: 45,
        explanation:
          "Les scripts tiers (trackers, pixels, chat widgets, bibliothèques JS non utilisées) ajoutent souvent beaucoup de poids et de CPU. En les limitant à l’essentiel, on réduit la taille de la page, le temps d’exécution JavaScript et donc la consommation d’énergie côté utilisateur.",
      },
    ],
    messages: [],
  },
  {
    id: 10,
    title:
      "Vous utilisez des polices système ou un nombre très limité de polices web optimisées (WOFF2 uniquement, peu de variantes).",
    answer: true,
    imageUrl: "",
    sources: [
      {
        id: 13,
        questionId: 10,
        name: "web.dev – Font best practices",
        link: "https://web.dev/font-best-practices/",
      },
    ],
    datas: [
      {
        id: 10,
        questionId: 10,
        answer: "C’est une excellente décision pour alléger votre interface.",
        value: 25,
        explanation:
          "Les fichiers de police peuvent peser plusieurs centaines de kilo-octets. En utilisant des polices système ou un nombre limité de polices web au format WOFF2, on réduit le nombre de requêtes et le poids des ressources, ce qui contribue à une meilleure sobriété numérique.",
      },
    ],
    messages: [],
  },
];

export async function getQuestions(): Promise<Question[]> {
  // Simuler un délai de requête
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockQuestions;
}
