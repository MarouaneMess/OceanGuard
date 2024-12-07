import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Scenario {
  id: string;
  title: string;
  description: string;
  consequences: string[];
  solutions: string[];
  imageSrc: string;
}

const scenarios: Scenario[] = [
  {
    id: 'pollution',
    title: 'Pollution Plastique',
    description: 'Impact des déchets plastiques sur les écosystèmes marins',
    consequences: [
      'Mortalité de la vie marine',
      'Contamination de la chaîne alimentaire',
      'Dégradation des habitats'
    ],
    solutions: [
      'Réduction de l\'utilisation du plastique',
      'Amélioration du recyclage',
      'Nettoyage des océans'
    ],
    imageSrc: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&q=80'
  },
  {
    id: 'acidification',
    title: 'Acidification',
    description: 'Augmentation de l\'acidité des océans due au CO2',
    consequences: [
      'Destruction des récifs coralliens',
      'Impact sur les organismes à coquille',
      'Perturbation des écosystèmes'
    ],
    solutions: [
      'Réduction des émissions de CO2',
      'Protection des zones marines',
      'Restauration des habitats'
    ],
    imageSrc: 'https://images.unsplash.com/photo-1515323459371-d7dba0e0dce5?auto=format&fit=crop&q=80'
  }
];

export function ScenarioSimulation() {
  const [activeScenario, setActiveScenario] = useState<Scenario | null>(null);
  const [showSolutions, setShowSolutions] = useState(false);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scenarios.map((scenario) => (
          <motion.div
            key={scenario.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
            onClick={() => {
              setActiveScenario(scenario);
              setShowSolutions(false);
            }}
          >
            <div className="relative h-48">
              <img
                src={scenario.imageSrc}
                alt={scenario.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                {scenario.title}
              </h3>
            </div>
            <div className="p-4">
              <p className="text-gray-600">{scenario.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {activeScenario && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold">{activeScenario.title}</h3>
            <button
              onClick={() => setActiveScenario(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-red-600">Conséquences</h4>
              <ul className="list-disc pl-5 space-y-2">
                {activeScenario.consequences.map((consequence, index) => (
                  <li key={index} className="text-gray-700">{consequence}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setShowSolutions(!showSolutions)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {showSolutions ? 'Masquer les Solutions' : 'Voir les Solutions'}
            </button>

            {showSolutions && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h4 className="text-xl font-semibold mb-3 text-green-600">Solutions</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {activeScenario.solutions.map((solution, index) => (
                    <li key={index} className="text-gray-700">{solution}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}