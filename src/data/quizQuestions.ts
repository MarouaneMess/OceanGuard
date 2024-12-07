export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  hint: string;
  category: 'climate' | 'biodiversity' | 'pollution' | 'circulation' | 'chemistry';
  difficulty: 'easy' | 'medium' | 'hard';
  source: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Quelle proportion de l'oxygène terrestre est produite par l'océan ?",
    options: ["30%", "50%", "70%", "90%"],
    correctAnswer: 2,
    explanation: "L'océan produit environ 70% de l'oxygène terrestre grâce au phytoplancton, qui est le plus grand producteur d'oxygène sur Terre.",
    hint: "Le phytoplancton est plus productif que toutes les forêts terrestres combinées.",
    category: 'chemistry',
    difficulty: 'medium',
    source: "National Geographic"
  },
  {
    id: 2,
    question: "Quelle est la profondeur moyenne des océans ?",
    options: ["2000m", "3700m", "5000m", "7000m"],
    correctAnswer: 1,
    explanation: "La profondeur moyenne des océans est d'environ 3700 mètres, bien que certaines fosses puissent atteindre plus de 11000 mètres.",
    hint: "Pensez à la hauteur de 1000 tours Eiffel empilées.",
    category: 'biodiversity',
    difficulty: 'easy',
    source: "NOAA"
  },
  {
    id: 3,
    question: "Quel pourcentage de la surface terrestre est couvert par les océans ?",
    options: ["51%", "61%", "71%", "81%"],
    correctAnswer: 2,
    explanation: "Les océans couvrent environ 71% de la surface terrestre, ce qui représente environ 361 millions de kilomètres carrés.",
    hint: "Plus des deux tiers de notre planète bleue sont recouverts d'eau.",
    category: 'climate',
    difficulty: 'easy',
    source: "NASA"
  },
  {
    id: 4,
    question: "Quelle est la température moyenne des eaux profondes océaniques ?",
    options: ["0°C", "2°C", "4°C", "6°C"],
    correctAnswer: 1,
    explanation: "La température moyenne des eaux profondes océaniques est d'environ 2°C, indépendamment de leur localisation.",
    hint: "Les eaux profondes restent très froides même près de l'équateur.",
    category: 'climate',
    difficulty: 'medium',
    source: "Woods Hole Oceanographic Institution"
  },
  {
    id: 5,
    question: "Quel pourcentage du CO2 émis par les activités humaines est absorbé par l'océan ?",
    options: ["15%", "25%", "30%", "40%"],
    correctAnswer: 2,
    explanation: "L'océan absorbe environ 30% du CO2 émis par les activités humaines, jouant un rôle crucial dans la régulation du climat.",
    hint: "Presque un tiers du CO2 que nous émettons finit dans l'océan.",
    category: 'climate',
    difficulty: 'medium',
    source: "IPCC"
  },
  {
    id: 6,
    question: "Quelle est la vitesse moyenne du Gulf Stream ?",
    options: ["2 km/h", "6 km/h", "9 km/h", "12 km/h"],
    correctAnswer: 1,
    explanation: "Le Gulf Stream se déplace en moyenne à 6 km/h, bien que sa vitesse puisse varier selon les endroits et les conditions.",
    hint: "C'est à peu près la vitesse d'une marche rapide.",
    category: 'circulation',
    difficulty: 'medium',
    source: "NOAA"
  },
  {
    id: 7,
    question: "Combien d'espèces marines sont découvertes chaque année en moyenne ?",
    options: ["500", "1000", "2000", "3000"],
    correctAnswer: 2,
    explanation: "En moyenne, environ 2000 nouvelles espèces marines sont découvertes chaque année, montrant la richesse encore méconnue des océans.",
    hint: "Pensez qu'on découvre plusieurs espèces nouvelles chaque jour.",
    category: 'biodiversity',
    difficulty: 'medium',
    source: "Census of Marine Life"
  },
  {
    id: 8,
    question: "Quel pourcentage de la vie marine reste encore à découvrir ?",
    options: ["30%", "50%", "70%", "90%"],
    correctAnswer: 3,
    explanation: "Les scientifiques estiment que 90% des espèces marines restent encore à découvrir, particulièrement dans les grands fonds.",
    hint: "La grande majorité de l'océan n'a jamais été explorée.",
    category: 'biodiversity',
    difficulty: 'medium',
    source: "National Geographic"
  },
  {
    id: 9,
    question: "Quelle est la salinité moyenne des océans ?",
    options: ["25 g/L", "35 g/L", "45 g/L", "55 g/L"],
    correctAnswer: 1,
    explanation: "La salinité moyenne des océans est d'environ 35 grammes de sel par litre d'eau.",
    hint: "Une cuillère à soupe de sel par verre d'eau.",
    category: 'chemistry',
    difficulty: 'easy',
    source: "NOAA"
  },
  {
    id: 10,
    question: "À quelle vitesse le niveau des océans s'élève-t-il actuellement par an ?",
    options: ["1.5 mm", "3.3 mm", "5.5 mm", "7.7 mm"],
    correctAnswer: 1,
    explanation: "Le niveau des océans s'élève d'environ 3.3 mm par an, principalement dû au réchauffement climatique.",
    hint: "C'est plus que l'épaisseur d'une pièce de monnaie.",
    category: 'climate',
    difficulty: 'hard',
    source: "NASA"
  },
  {
    id: 11,
    question: "Quelle est la durée de vie moyenne d'un récif corallien ?",
    options: ["100 ans", "500 ans", "1000 ans", "5000 ans"],
    correctAnswer: 2,
    explanation: "Un récif corallien peut vivre jusqu'à 1000 ans dans des conditions optimales, formant l'un des plus anciens écosystèmes de la planète.",
    hint: "Ces structures sont parmi les plus anciennes constructions vivantes sur Terre.",
    category: 'biodiversity',
    difficulty: 'medium',
    source: "Marine Biology Institute"
  },
  {
    id: 12,
    question: "Quelle proportion des espèces marines vit dans les 100 premiers mètres de l'océan ?",
    options: ["50%", "70%", "90%", "95%"],
    correctAnswer: 2,
    explanation: "Environ 90% de la vie marine se trouve dans les 100 premiers mètres de l'océan, où la lumière pénètre suffisamment.",
    hint: "La zone euphotique est la plus peuplée de l'océan.",
    category: 'biodiversity',
    difficulty: 'medium',
    source: "Scripps Institution of Oceanography"
  },
  {
    id: 13,
    question: "De combien le pH des océans a-t-il diminué depuis l'ère préindustrielle ?",
    options: ["0.1 unité", "0.2 unité", "0.3 unité", "0.4 unité"],
    correctAnswer: 0,
    explanation: "Le pH des océans a diminué de 0.1 unité depuis l'ère préindustrielle, ce qui représente une augmentation de 30% de l'acidité.",
    hint: "Même un petit changement de pH peut avoir des effets importants.",
    category: 'chemistry',
    difficulty: 'hard',
    source: "IPCC"
  },
  {
    id: 14,
    question: "Quelle est la vitesse maximale enregistrée pour un courant océanique ?",
    options: ["2 m/s", "3 m/s", "4 m/s", "5 m/s"],
    correctAnswer: 2,
    explanation: "Les courants océaniques les plus rapides peuvent atteindre 4 mètres par seconde, notamment dans le courant du Gulf Stream.",
    hint: "C'est presque aussi rapide qu'un nageur olympique.",
    category: 'circulation',
    difficulty: 'hard',
    source: "NOAA"
  },
  {
    id: 15,
    question: "Quelle quantité de plastique entre dans les océans chaque année ?",
    options: ["5 millions de tonnes", "8 millions de tonnes", "12 millions de tonnes", "15 millions de tonnes"],
    correctAnswer: 1,
    explanation: "Environ 8 millions de tonnes de plastique entrent dans les océans chaque année, équivalent à un camion poubelle par minute.",
    hint: "Pensez au poids de 800 Tour Eiffel.",
    category: 'pollution',
    difficulty: 'medium',
    source: "UN Environment Programme"
  },
  {
    id: 16,
    question: "Quelle est la profondeur maximale où l'on trouve encore de la vie marine ?",
    options: ["5000m", "8000m", "11000m", "15000m"],
    correctAnswer: 2,
    explanation: "On trouve de la vie jusqu'à 11000 mètres de profondeur, même dans les fosses les plus profondes comme la fosse des Mariannes.",
    hint: "La vie existe même dans les endroits les plus profonds de l'océan.",
    category: 'biodiversity',
    difficulty: 'hard',
    source: "Deep Ocean Research"
  },
  {
    id: 17,
    question: "Quelle proportion de l'humanité dépend directement des océans pour sa survie ?",
    options: ["20%", "30%", "40%", "50%"],
    correctAnswer: 2,
    explanation: "Environ 40% de la population mondiale vit à moins de 100 km des côtes et dépend directement des océans.",
    hint: "Près de la moitié de l'humanité vit près des côtes.",
    category: 'biodiversity',
    difficulty: 'medium',
    source: "UN Ocean Conference"
  },
  {
    id: 18,
    question: "Combien de temps une bouteille en plastique met-elle pour se dégrader dans l'océan ?",
    options: ["100 ans", "250 ans", "450 ans", "1000 ans"],
    correctAnswer: 2,
    explanation: "Une bouteille en plastique met environ 450 ans pour se dégrader dans l'océan, se fragmentant en microplastiques.",
    hint: "C'est plus long que l'existence des États-Unis.",
    category: 'pollution',
    difficulty: 'medium',
    source: "WWF"
  },
  {
    id: 19,
    question: "Quelle est la température la plus chaude jamais enregistrée dans un océan ?",
    options: ["35°C", "37°C", "39°C", "41°C"],
    correctAnswer: 2,
    explanation: "La température la plus chaude enregistrée dans un océan est de 39°C dans le Golfe Persique.",
    hint: "C'est proche de la température du corps humain.",
    category: 'climate',
    difficulty: 'hard',
    source: "World Meteorological Organization"
  },
  {
    id: 20,
    question: "Quel pourcentage des récifs coralliens a déjà été perdu à cause du changement climatique ?",
    options: ["10%", "20%", "30%", "50%"],
    correctAnswer: 3,
    explanation: "Environ 50% des récifs coralliens ont déjà été perdus en raison du changement climatique et de l'acidification des océans.",
    hint: "La moitié de ces écosystèmes a disparu.",
    category: 'climate',
    difficulty: 'medium',
    source: "IPCC"
  },
  {
    id: 21,
    question: "Quelle est la vitesse moyenne de déplacement d'un iceberg ?",
    options: ["0.1 km/h", "0.5 km/h", "1 km/h", "2 km/h"],
    correctAnswer: 1,
    explanation: "Les icebergs se déplacent en moyenne à 0.5 km/h, poussés par les courants océaniques.",
    hint: "C'est plus lent qu'une marche à pied.",
    category: 'circulation',
    difficulty: 'easy',
    source: "National Snow and Ice Data Center"
  },
  {
    id: 22,
    question: "Quelle proportion des espèces marines est menacée d'extinction ?",
    options: ["15%", "25%", "35%", "45%"],
    correctAnswer: 1,
    explanation: "Environ 25% des espèces marines connues sont menacées d'extinction selon la Liste Rouge de l'UICN.",
    hint: "Un quart des espèces marines est en danger.",
    category: 'biodiversity',
    difficulty: 'medium',
    source: "IUCN Red List"
  },
  {
    id: 23,
    question: "Quelle est la taille du plus grand banc de poissons observé ?",
    options: ["1 km", "5 km", "10 km", "20 km"],
    correctAnswer: 2,
    explanation: "Le plus grand banc de poissons observé mesurait environ 10 km de long, composé de millions de harengs.",
    hint: "C'est la taille d'une petite ville.",
    category: 'biodiversity',
    difficulty: 'medium',
    source: "Marine Biology Institute"
  },
  {
    id: 24,
    question: "Combien de tonnes de CO2 l'océan absorbe-t-il chaque jour ?",
    options: ["10 millions", "22 millions", "35 millions", "50 millions"],
    correctAnswer: 1,
    explanation: "L'océan absorbe environ 22 millions de tonnes de CO2 chaque jour, agissant comme un important puits de carbone.",
    hint: "C'est l'équivalent des émissions annuelles de plusieurs pays.",
    category: 'climate',
    difficulty: 'hard',
    source: "Global Carbon Project"
  },
  {
    id: 25,
    question: "Quelle est la vitesse moyenne de formation d'un atoll corallien ?",
    options: ["1 cm/an", "1 mm/an", "0.1 mm/an", "0.01 mm/an"],
    correctAnswer: 1,
    explanation: "Un atoll corallien croît en moyenne de 1 mm par an, ce qui explique pourquoi ils mettent des milliers d'années à se former.",
    hint: "C'est un processus très lent, plus lent que la croissance des ongles.",
    category: 'biodiversity',
    difficulty: 'hard',
    source: "Coral Reef Alliance"
  },
  {
    id: 26,
    question: "Quelle proportion de l'oxygène produit par l'océan vient du phytoplancton ?",
    options: ["50%", "70%", "85%", "95%"],
    correctAnswer: 2,
    explanation: "Environ 85% de l'oxygène produit par l'océan provient du phytoplancton, le reste venant des algues et autres plantes marines.",
    hint: "Ces micro-organismes sont les principaux producteurs d'oxygène marin.",
    category: 'chemistry',
    difficulty: 'medium',
    source: "NASA Earth Observatory"
  },
  {
    id: 27,
    question: "À quelle profondeur se trouve la zone mésopélagique (zone crépusculaire) ?",
    options: ["100-200m", "200-1000m", "1000-2000m", "2000-3000m"],
    correctAnswer: 1,
    explanation: "La zone mésopélagique se situe entre 200 et 1000 mètres de profondeur, où la lumière est très faible.",
    hint: "C'est la zone où la lumière commence à disparaître.",
    category: 'biodiversity',
    difficulty: 'medium',
    source: "Woods Hole Oceanographic Institution"
  },
  {
    id: 28,
    question: "Quel pourcentage des grands prédateurs marins a disparu depuis l'ère préindustrielle ?",
    options: ["50%", "70%", "90%", "95%"],
    correctAnswer: 2,
    explanation: "Environ 90% des grands prédateurs marins ont disparu depuis l'ère préindustrielle, principalement à cause de la surpêche.",
    hint: "La grande majorité des requins, thons et autres grands prédateurs a disparu.",
    category: 'biodiversity',
    difficulty: 'hard',
    source: "Marine Conservation Institute"
  },
  {
    id: 29,
    question: "Quelle est la vitesse moyenne de déplacement d'une baleine bleue ?",
    options: ["5 km/h", "8 km/h", "12 km/h", "20 km/h"],
    correctAnswer: 2,
    explanation: "Une baleine bleue nage en moyenne à 12 km/h, bien qu'elle puisse atteindre 30 km/h en vitesse de pointe.",
    hint: "C'est la vitesse d'un cycliste tranquille.",
    category: 'biodiversity',
    difficulty: 'easy',
    source: "Whale and Dolphin Conservation"
  },
  {
    id: 30,
    question: "Quelle est la température minimale de l'eau de mer avant qu'elle ne gèle ?",
    options: ["0°C", "-1.1°C", "-1.8°C", "-2.2°C"],
    correctAnswer: 2,
    explanation: "L'eau de mer gèle à environ -1.8°C en raison de sa salinité, contrairement à l'eau douce qui gèle à 0°C.",
    hint: "Le sel abaisse le point de congélation de l'eau.",
    category: 'chemistry',
    difficulty: 'medium',
    source: "NOAA"
  },
  {
    id: 31,
    question: "Quelle est la profondeur maximale atteinte par un sous-marin habité ?",
    options: ["5000m", "8000m", "11000m", "15000m"],
    correctAnswer: 2,
    explanation: "Le record de plongée habitée est d'environ 11000m, atteint dans la fosse des Mariannes par le Trieste en 1960.",
    hint: "C'est la profondeur du point le plus profond de l'océan.",
    category: 'biodiversity',
    difficulty: 'hard',
    source: "Guinness World Records"
  },
  {
    id: 32,
    question: "Quel pourcentage des émissions de chaleur dues au réchauffement climatique est absorbé par l'océan ?",
    options: ["50%", "70%", "90%", "95%"],
    correctAnswer: 3,
    explanation: "L'océan absorbe environ 95% de la chaleur excédentaire due au réchauffement climatique.",
    hint: "Presque toute la chaleur supplémentaire finit dans l'océan.",
    category: 'climate',
    difficulty: 'medium',
    source: "IPCC"
  },
  {
    id: 33,
    question: "Combien de temps un son peut-il voyager dans l'océan ?",
    options: ["1 heure", "3 heures", "5 heures", "7 heures"],
    correctAnswer: 1,
    explanation: "Un son peut voyager jusqu'à 3 heures dans l'océan grâce aux propriétés acoustiques de l'eau.",
    hint: "Le son voyage beaucoup plus loin dans l'eau que dans l'air.",
    category: 'chemistry',
    difficulty: 'medium',
    source: "Acoustical Society of America"
  },
  {
    id: 34,
    question: "Quelle est la vitesse moyenne des ondes tsunamis en plein océan ?",
    options: ["200 km/h", "400 km/h", "600 km/h", "800 km/h"],
    correctAnswer: 3,
    explanation: "En plein océan, les tsunamis se déplacent à environ 800 km/h, soit la vitesse d'un avion de ligne.",
    hint: "C'est aussi rapide qu'un avion commercial.",
    category: 'circulation',
    difficulty: 'hard',
    source: "NOAA Tsunami Program"
  },
  {
    id: 35,
    question: "Quel pourcentage de la population de poissons est surexploité ?",
    options: ["15%", "25%", "33%", "45%"],
    correctAnswer: 2,
    explanation: "Environ 33% des stocks de poissons sont surexploités, menaçant la sécurité alimentaire mondiale.",
    hint: "Un tiers des populations de poissons est en danger.",
    category: 'biodiversity',
    difficulty: 'medium',
    source: "FAO"
  },
  {
    id: 36,
    question: "Quelle est la durée de vie moyenne d'un microplastique dans l'océan ?",
    options: ["100 ans", "250 ans", "450 ans", "1000 ans"],
    correctAnswer: 3,
    explanation: "Les microplastiques peuvent persister jusqu'à 1000 ans dans l'environnement marin.",
    hint: "Ces particules sont presque éternelles à l'échelle humaine.",
    category: 'pollution',
    difficulty: 'hard',
    source: "Environmental Science & Technology"
  },
  {
    id: 37,
    question: "Quelle proportion des récifs coralliens est encore en bonne santé ?",
    options: ["10%", "25%", "40%", "55%"],
    correctAnswer: 1,
    explanation: "Seulement environ 25% des récifs coralliens sont encore considérés comme en bonne santé.",
    hint: "Un quart seulement des récifs est encore intact.",
    category: 'biodiversity',
    difficulty: 'medium',
    source: "Global Coral Reef Monitoring Network"
  },
  {
    id: 38,
    question: "Quelle est la profondeur moyenne de la couche de mélange océanique ?",
    options: ["50m", "100m", "200m", "400m"],
    correctAnswer: 1,
    explanation: "La couche de mélange océanique a une profondeur moyenne d'environ 100m, variant selon les saisons.",
    hint: "C'est la zone où les vagues et le vent mélangent l'eau de surface.",
    category: 'circulation',
    difficulty: 'medium',
    source: "Oceanography Society"
  },
  {
    id: 39,
    question: "Quel pourcentage de l'oxygène marin est consommé par les bactéries ?",
    options: ["30%", "45%", "60%", "75%"],
    correctAnswer: 2,
    explanation: "Les bactéries marines consomment environ 60% de l'oxygène dissous dans l'océan.",
    hint: "Plus de la moitié de l'oxygène marin est utilisé par les microorganismes.",
    category: 'chemistry',
    difficulty: 'hard',
    source: "Marine Microbiology Initiative"
  },
  {
    id: 40,
    question: "Quelle est la vitesse moyenne de croissance du corail ?",
    options: ["0.5 cm/an", "1 cm/an", "2 cm/an", "5 cm/an"],
    correctAnswer: 1,
    explanation: "Les coraux croissent en moyenne de 1 cm par an, bien que certaines espèces puissent croître plus rapidement.",
    hint: "C'est environ la vitesse de croissance des ongles humains.",
    category: 'biodiversity',
    difficulty: 'easy',
    source: "Coral Reef Alliance"
  },
  {
    id: 41,
    question: "Quelle est la concentration moyenne en sel de la Mer Morte ?",
    options: ["15%", "20%", "25%", "30%"],
    correctAnswer: 3,
    explanation: "La Mer Morte contient environ 30% de sel, soit près de 10 fois plus que l'océan moyen.",
    hint: "C'est le plan d'eau le plus salé au monde.",
    category: 'chemistry',
    difficulty: 'medium',
    source: "Dead Sea Research Center"
  },
  {
    id: 42,
    question: "Quelle est la durée de vie moyenne d'une méduse immortelle ?",
    options: ["1 an", "5 ans", "10 ans", "Potentiellement infinie"],
    correctAnswer: 3,
    explanation: "La méduse Turritopsis dohrnii peut théoriquement vivre éternellement en raison de sa capacité à inverser son cycle de vie.",
    hint: "Cette espèce peut rajeunir indéfiniment.",
    category: 'biodiversity',
    difficulty: 'hard',
    source: "Marine Biology Journal"
  },
  {
    id: 43,
    question: "Quelle proportion des montagnes sous-marines a été explorée ?",
    options: ["0.1%", "1%", "5%", "10%"],
    correctAnswer: 0,
    explanation: "Moins de 0.1% des montagnes sous-marines ont été explorées en détail.",
    hint: "Une infime partie de ces écosystèmes est connue.",
    category: 'biodiversity',
    difficulty: 'hard',
    source: "Seamount Biogeosciences Network"
  },
  {
    id: 44,
    question: "Quel est le temps de dégradation d'un mégot de cigarette dans l'océan ?",
    options: ["1 an", "5 ans", "10 ans", "15 ans"],
    correctAnswer: 2,
    explanation: "Un mégot de cigarette met environ 10 ans à se dégrader dans l'océan.",
    hint: "Le filtre contient du plastique qui se dégrade très lentement.",
    category: 'pollution',
    difficulty: 'medium',
    source: "Ocean Conservancy"
  },
  {
    id: 45,
    question: "Quelle est la vitesse du son dans l'eau de mer ?",
    options: ["1000 m/s", "1500 m/s", "2000 m/s", "2500 m/s"],
    correctAnswer: 1,
    explanation: "Le son se déplace à environ 1500 mètres par seconde dans l'eau de mer.",
    hint: "C'est environ 4.5 fois plus rapide que dans l'air.",
    category: 'chemistry',
    difficulty: 'medium',
    source: "US Naval Research Laboratory"
  },
  {
    id: 46,
    question: "Quelle proportion du commerce mondial transite par les océans ?",
    options: ["50%", "70%", "80%", "90%"],
    correctAnswer: 3,
    explanation: "Environ 90% du commerce mondial est transporté par voie maritime.",
    hint: "La quasi-totalité des échanges internationaux passe par la mer.",
    category: 'circulation',
    difficulty: 'easy',
    source: "International Maritime Organization"
  },
  {
    id: 47,
    question: "Combien d'îles de plastique géantes existe-t-il dans les océans ?",
    options: ["3", "5", "7", "9"],
    correctAnswer: 1,
    explanation: "Il existe 5 principaux gyres océaniques où s'accumulent les déchets plastiques.",
    hint: "Ces zones correspondent aux principaux courants océaniques.",
    category: 'pollution',
    difficulty: 'medium',
    source: "NOAA Marine Debris Program"
  },
  {
    id: 48,
    question: "Quelle est la profondeur maximale de la zone photique ?",
    options: ["100m", "200m", "300m", "400m"],
    correctAnswer: 1,
    explanation: "La zone photique s'étend jusqu'à environ 200m de profondeur, où la lumière peut encore pénétrer.",
    hint: "C'est la zone où la photosynthèse est possible.",
    category: 'biodiversity',
    difficulty: 'easy',
    source: "Scripps Institution of Oceanography"
  },
  {
    id: 49,
    question: "Quel pourcentage de l'océan profond reste inexploré ?",
    options: ["50%", "65%", "80%", "95%"],
    correctAnswer: 3,
    explanation: "Environ 95% de l'océan profond reste inexploré, en particulier les zones au-delà de 1000m de profondeur.",
    hint: "La grande majorité des fonds marins n'a jamais été vue.",
    category: 'biodiversity',
    difficulty: 'medium',
    source: "NOAA Ocean Exploration"
  },
  {
    id: 50,
    question: "Quelle est la température moyenne de surface des océans ?",
    options: ["12°C", "17°C", "22°C", "27°C"],
    correctAnswer: 1,
    explanation: "La température moyenne de surface des océans est d'environ 17°C, variant selon la latitude et la saison.",
    hint: "C'est une température agréable pour la baignade.",
    category: 'climate',
    difficulty: 'easy',
    source: "World Ocean Atlas"
  }
];

export function getRandomQuestions(count: number): QuizQuestion[] {
  const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
} 