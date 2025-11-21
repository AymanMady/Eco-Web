import Link from "next/link";
import ThemeChanger from "./components/ThemeChanger";
import Container from "./components/Container";
import Ecologo from "./components/Ecologo";
import Balancer from "react-wrap-balancer";
import CallToLogin from "./components/CallToLogin";
import { ArrowRight, HelpCircle } from "lucide-react";
import Planet from "./components/Planet";

export default function Home() {
  return (
    <Container className="flex-col gap-6 gap-x-48 items-center grid xl:grid-cols-2">
      <div className="flex flex-col justify-start gap-3">
        <Ecologo size="lg" />

        <Balancer className="max-w-prose p-2">
          Découvrez l'<span className="text-success">éco-conception web</span> avec{" "}
          <span className="font-medium">EcoWeb</span> 🌱
        </Balancer>
        
        <div className="alert alert-info shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <div>
            <h3 className="font-bold">Simulateur Green IT</h3>
            <div className="text-xs">Faites des choix techniques et découvrez leur impact écologique</div>
          </div>
        </div>

        <div className="stats shadow bg-base-200">
          <div className="stat place-items-center">
            <div className="stat-title">Pratiques à découvrir</div>
            <div className="stat-value text-primary">10</div>
            <div className="stat-desc">bonnes pratiques</div>
          </div>
          
          <div className="stat place-items-center">
            <div className="stat-title">Objectif</div>
            <div className="stat-value text-success">100/100</div>
            <div className="stat-desc">eco-score</div>
          </div>
        </div>

        <Link
          href="/game"
          className="btn btn-primary btn-lg transition group hover:scale-105"
        >
          Commencer le simulateur
          <ArrowRight className="group-hover:translate-x-1 transition-all" />
        </Link>
        
        <div className="collapse collapse-arrow bg-base-200">
          <input type="checkbox" /> 
          <div className="collapse-title text-xl font-medium flex items-center gap-2">
            <HelpCircle size={20} />
            Comment ça marche ?
          </div>
          <div className="collapse-content"> 
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Vous ferez face à 8 choix techniques d'éco-conception web</li>
              <li>Pour chaque choix, décidez si vous l'adopteriez ou non</li>
              <li>Découvrez l'impact réel de chaque décision (CO2, bande passante...)</li>
              <li>Obtenez votre eco-score et apprenez les bonnes pratiques Green IT</li>
            </ul>
          </div>
        </div>
      </div>
      <Planet />
    </Container>
  );
}
