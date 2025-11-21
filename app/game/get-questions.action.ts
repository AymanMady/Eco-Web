"use server";

import { Question } from "../models/question.model";

// Questions basées sur des choix d'éco-conception web (Green IT)
const mockQuestions: Question[] = [
  {
    id: 1,
    title: "Compresser les images de votre site web",
    answer: true,
    imageUrl: "/compresse.png",
    sources: [
      {
        id: 1,
        questionId: 1,
        name: "Green IT - Optimisation des images",
        link: "https://www.greenit.fr/2021/01/05/ecoconception-web-les-115-bonnes-pratiques/"
      }
    ],
    datas: [
      {
        id: 1,
        questionId: 1,
        answer: "Bon choix ! Compression d'images = -70% de poids",
        value: 70,
        explanation: "Compresser les images peut réduire leur poids de 50 à 80% sans perte visible de qualité. Cela diminue la bande passante utilisée, réduit le temps de chargement et l'énergie consommée par les serveurs et appareils des utilisateurs. Utilisez des formats modernes comme WebP ou AVIF."
      }
    ],
    messages: []
  },
  {
    id: 2,
    title: "Activer la mise en cache (cache) côté navigateur",
    answer: true,
    imageUrl: "/cache.png",
    sources: [
      {
        id: 2,
        questionId: 2,
        name: "MDN Web Docs - HTTP Caching",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching"
      }
    ],
    datas: [
      {
        id: 2,
        questionId: 2,
        answer: "Excellent ! Le cache réduit de 60% les requêtes serveur",
        value: 60,
        explanation: "Le cache navigateur permet de stocker localement les ressources statiques (CSS, JS, images). Les visites suivantes nécessitent moins de requêtes au serveur, réduisant la consommation d'énergie côté serveur et réseau. Impact : -60% de requêtes HTTP et temps de chargement divisé par 3."
      }
    ],
    messages: []
  },
  {
    id: 3,
    title: "Utiliser une bibliothèque JavaScript complète (300 Ko) pour un simple slider",
    answer: false,
    imageUrl: "/js.png",
    sources: [
      {
        id: 3,
        questionId: 3,
        name: "Website Carbon Calculator",
        link: "https://www.websitecarbon.com/"
      }
    ],
    datas: [
      {
        id: 3,
        questionId: 3,
        answer: "Mauvais choix ! -85% de poids avec du code natif",
        value: 85,
        explanation: "Charger 300 Ko de JavaScript pour une fonctionnalité simple est contre-productif. Le code natif ou une micro-bibliothèque (5-10 Ko) suffit. Impact négatif : +300 Ko = +2g CO2 par visite, temps de parsing CPU multiplié par 10, consommation batterie mobile +40%."
      }
    ],
    messages: []
  },
  {
    id: 4,
    title: "Héberger votre site sur un serveur alimenté par des énergies renouvelables",
    answer: true,
    imageUrl: "/eco-server.png",
    sources: [
      {
        id: 4,
        questionId: 4,
        name: "The Green Web Foundation",
        link: "https://www.thegreenwebfoundation.org/"
      }
    ],
    datas: [
      {
        id: 4,
        questionId: 4,
        answer: "Parfait ! Serveur vert = -50% d'émissions CO2",
        value: 50,
        explanation: "Un hébergement alimenté par des énergies renouvelables (solaire, éolien, hydraulique) réduit de 50% les émissions de CO2 liées à votre site. Les data centers verts utilisent aussi un refroidissement optimisé. Impact : -0.5g CO2 par visite, soit 50 kg CO2/an pour 100k visiteurs."
      }
    ],
    messages: []
  },
  {
    id: 5,
    title: "Charger toutes les ressources (CSS, JS, images) dès l'ouverture de la page",
    answer: false,
    imageUrl: "/js-css.png",
    sources: [
      {
        id: 5,
        questionId: 5,
        name: "Web.dev - Lazy Loading",
        link: "https://web.dev/lazy-loading/"
      }
    ],
    datas: [
      {
        id: 5,
        questionId: 5,
        answer: "Erreur ! Le lazy loading économise 40% de bande passante",
        value: 40,
        explanation: "Charger toutes les ressources d'un coup surcharge le réseau et le processeur. Le lazy loading (chargement différé) ne charge que les ressources visibles à l'écran. Impact négatif : gaspillage de 40% de bande passante si l'utilisateur ne scrolle pas, +2s de chargement initial."
      }
    ],
    messages: []
  },
  {
    id: 6,
    title: "Minifier votre code",
    answer: true,
    imageUrl: "/code_minifier.png",
    sources: [
      {
        id: 6,
        questionId: 6,
        name: "Google Developers - Minification",
        link: "https://developers.google.com/speed/docs/insights/MinifyResources"
      }
    ],
    datas: [
      {
        id: 6,
        questionId: 6,
        answer: "Super ! Minification = -30% de poids de code",
        value: 30,
        explanation: "La minification supprime espaces, commentaires et caractères inutiles. La compression GZIP/Brotli réduit encore le poids. Résultat : fichiers 30-50% plus légers, transfert réseau plus rapide, moins d'énergie consommée. Un site de 1 Mo devient 500 Ko."
      }
    ],
    messages: []
  },
  {
    id: 7,
    title: "Charger des polices web personnalisées (Google Fonts) pour 5 variantes",
    answer: false,
    imageUrl: "/google_fontes.png",
    sources: [
      {
        id: 7,
        questionId: 7,
        name: "CSS-Tricks - Font Loading",
        link: "https://css-tricks.com/comprehensive-guide-font-loading-strategies/"
      }
    ],
    datas: [
      {
        id: 7,
        questionId: 7,
        answer: "Attention ! 5 variantes = +200 Ko et requêtes externes",
        value: 200,
        explanation: "Chaque variante de police (regular, bold, italic...) ajoute 40-80 Ko. 5 variantes = 200-400 Ko + requêtes externes vers Google. Alternative : polices système (0 Ko) ou 1-2 variantes uniquement. Impact négatif : +200 Ko, +1s de chargement, tracking externe."
      }
    ],
    messages: []
  },
  {
    id: 8,
    title: "Utiliser un CDN (Content Delivery Network) pour distribuer vos ressources",
    answer: true,
    imageUrl: "/cdn.png",
    sources: [
      {
        id: 8,
        questionId: 8,
        name: "Cloudflare - CDN Benefits",
        link: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/"
      }
    ],
    datas: [
      {
        id: 8,
        questionId: 8,
        answer: "Bon choix ! CDN = -40% latence et moins de bande passante",
        value: 40,
        explanation: "Un CDN rapproche vos ressources des utilisateurs via des serveurs répartis mondialement. Avantages : latence réduite de 40%, moins de bande passante depuis votre serveur principal, meilleure efficacité énergétique grâce à l'optimisation des routes réseau."
      }
    ],
    messages: []
  },
  {
    id: 9,
    title: "Utiliser des vidéos en autoplay en haute définition sur la page d'accueil",
    answer: false,
    imageUrl: "/compresse.png",
    sources: [
      {
        id: 9,
        questionId: 9,
        name: "Green IT - Vidéos et multimédia",
        link: "https://www.greenit.fr/2021/01/05/ecoconception-web-les-115-bonnes-pratiques/"
      }
    ],
    datas: [
      {
        id: 9,
        questionId: 9,
        answer: "Mauvais choix ! Vidéos autoplay = +90% de bande passante gaspillée",
        value: 90,
        explanation: "Les vidéos en autoplay consomment énormément de bande passante, surtout en HD. La plupart des utilisateurs ne les regardent pas entièrement. Impact négatif : une vidéo de 10 Mo = 5g CO2, batterie mobile -30%, données mobiles gaspillées. Alternative : miniature cliquable, qualité adaptative, ou pas de vidéo."
      }
    ],
    messages: []
  },
  {
    id: 10,
    title: "Optimiser les requêtes base de données et limiter les appels API",
    answer: true,
    imageUrl: "/eco-server.png",
    sources: [
      {
        id: 10,
        questionId: 10,
        name: "Green IT - Backend Performance",
        link: "https://www.greenit.fr/2021/01/05/ecoconception-web-les-115-bonnes-pratiques/"
      }
    ],
    datas: [
      {
        id: 10,
        questionId: 10,
        answer: "Excellent ! Optimisation backend = -55% de charge serveur",
        value: 55,
        explanation: "Réduire les requêtes SQL inutiles, utiliser la pagination, mettre en cache les résultats et éviter les appels API redondants diminue drastiquement la charge serveur. Impact : -55% de CPU serveur, -40% de consommation électrique, temps de réponse divisé par 2, scalabilité améliorée."
      }
    ],
    messages: []
  }
];

export async function getQuestions(): Promise<Question[]> {
  // Simuler un délai de requête
  await new Promise(resolve => setTimeout(resolve, 100));
  return mockQuestions;
}

