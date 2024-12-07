import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Quiz } from './components/Quiz';
import { OceanStats } from './components/OceanStats';
import { InteractiveParallel } from './components/InteractiveParallel';
import { InteractiveMap } from './components/InteractiveMap';
import { ScenarioSimulation } from './components/ScenarioSimulation';
import { Ocean3DScene } from './components/Ocean3DScene'

function App() {
  const parallels = [
    {
      title: "La Circulation Vitale",
      humanDescription: "Le système circulatoire transporte les nutriments et l'oxygène dans tout notre corps.",
      oceanDescription: "Les courants océaniques distribuent la chaleur et les nutriments à travers la planète.",
      imageSrc: "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80"
    },
    {
      title: "Le Poumon Planétaire",
      humanDescription: "Nos poumons échangent l'oxygène et le CO2 avec l'atmosphère.",
      oceanDescription: "L'océan absorbe le CO2 et produit une grande partie de notre oxygène.",
      imageSrc: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-16">
        <Hero />
        
        <main>
          <OceanStats />

          <section id="exploration" className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Exploration Interactive
              </h2>
              <InteractiveMap />
            </div>
          </section>

          <section id="systemes" className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Les Systèmes Parallèles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {parallels.map((parallel, index) => (
                  <InteractiveParallel key={index} {...parallel} />
                ))}
              </div>
            </div>
          </section>

          <section id="scenarios" className="py-16 bg-blue-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Scénarios et Simulations
              </h2>
              <ScenarioSimulation />
            </div>
          </section>

          <section id="quiz" className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Testez Vos Connaissances
              </h2>
              <Quiz />
            </div>
          </section>

          <section id="ocean3d" className="py-16 bg-gray-900">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8 text-white">
                Simulation Interactive Océan-Corps
              </h2>
              <Ocean3DScene />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;