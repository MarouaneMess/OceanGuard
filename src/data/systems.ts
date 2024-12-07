import { SystemType } from '../types';

export const systems: SystemType[] = [
  {
    humanSystem: "Système Circulatoire",
    oceanSystem: "Courants Océaniques",
    description: "Comme notre sang transporte les nutriments, les courants océaniques distribuent la chaleur et les nutriments à travers la planète.",
    icon: "heart",
    details: [
      "Transport des nutriments essentiels",
      "Régulation de la température",
      "Distribution de l'oxygène"
    ],
    impact: "La perturbation des courants océaniques peut avoir des conséquences graves sur le climat mondial."
  },
  {
    humanSystem: "Système Respiratoire",
    oceanSystem: "Échange de CO2",
    description: "L'océan absorbe le CO2 comme nos poumons, jouant un rôle crucial dans le cycle du carbone.",
    icon: "droplets",
    details: [
      "Absorption du CO2 atmosphérique",
      "Production d'oxygène par le phytoplancton",
      "Régulation des gaz atmosphériques"
    ],
    impact: "L'acidification des océans menace cet équilibre vital."
  },
  {
    humanSystem: "Régulation Thermique",
    oceanSystem: "Régulation Climatique",
    description: "L'océan, comme notre corps, maintient une température stable et régule le climat global de la Terre.",
    icon: "thermometer",
    details: [
      "Absorption de la chaleur",
      "Distribution thermique globale",
      "Stabilisation du climat"
    ],
    impact: "Le réchauffement des océans perturbe les écosystèmes marins."
  }
];