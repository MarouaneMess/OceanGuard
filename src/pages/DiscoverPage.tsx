import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Compass, Fish, Waves, ThermometerSun, Shell, Anchor,
  BookOpen, Star, Brain, ArrowRight, GraduationCap, Users
} from 'lucide-react'
import { Link } from 'react-router-dom'

const topics = [
  {
    id: 1,
    title: "Écosystèmes Marins",
    description: "Découvrez la diversité fascinante des habitats océaniques",
    icon: Fish,
    color: "from-blue-500 to-cyan-500",
    image: "/images/ecosystem.jpg",
    stats: "1000+ espèces",
    category: "Biodiversité"
  },
  {
    id: 2,
    title: "Courants Océaniques",
    description: "Explorez les rivières invisibles qui façonnent notre climat",
    icon: Waves,
    color: "from-indigo-500 to-blue-500",
    image: "/images/currents.jpg",
    stats: "Circulation globale",
    category: "Physique"
  },
  {
    id: 3,
    title: "Vie Marine Profonde",
    description: "Plongez dans les mystères des abysses",
    icon: Fish,
    color: "from-purple-500 to-indigo-500",
    image: "/images/deep-sea.jpg",
    stats: "11km de profondeur",
    category: "Exploration"
  },
  {
    id: 4,
    title: "Récifs Coralliens",
    description: "Les forêts tropicales de nos océans",
    icon: Shell,
    color: "from-pink-500 to-rose-500",
    image: "/images/coral.jpg",
    stats: "25% biodiversité marine",
    category: "Écosystèmes"
  },
  {
    id: 5,
    title: "Climat Océanique",
    description: "L'influence des océans sur le climat",
    icon: ThermometerSun,
    color: "from-orange-500 to-red-500",
    image: "/images/climate.jpg",
    stats: "93% chaleur absorbée",
    category: "Climat"
  },
  {
    id: 6,
    title: "Navigation Maritime",
    description: "L'histoire de l'exploration océanique",
    icon: Anchor,
    color: "from-teal-500 to-emerald-500",
    image: "/images/navigation.jpg",
    stats: "Millénaires d'histoire",
    category: "Histoire"
  }
]

const categories = ["Tous", "Biodiversité", "Physique", "Exploration", "Écosystèmes", "Climat", "Histoire"]

const learningPaths = [
  {
    id: 'beginner',
    title: 'Débutant',
    icon: BookOpen,
    color: 'from-green-500 to-emerald-500',
    duration: '4 semaines',
    modules: 5,
    description: 'Découvrez les bases de l\'océanographie et de la vie marine',
    features: [
      'Introduction aux écosystèmes marins',
      'Bases de la biodiversité marine',
      'Initiation à l\'océanographie'
    ],
    activeUsers: 1200,
    badge: 'Nouveau'
  },
  {
    id: 'intermediate',
    title: 'Intermédiaire',
    icon: Brain,
    color: 'from-blue-500 to-cyan-500',
    duration: '6 semaines',
    modules: 8,
    description: 'Approfondissez vos connaissances sur les océans',
    features: [
      'Étude des courants océaniques',
      'Impact du changement climatique',
      'Conservation marine'
    ],
    activeUsers: 800,
    badge: 'Populaire'
  },
  {
    id: 'advanced',
    title: 'Expert',
    icon: GraduationCap,
    color: 'from-purple-500 to-indigo-500',
    duration: '8 semaines',
    modules: 12,
    description: 'Devenez un expert en sciences marines',
    features: [
      'Recherche océanographique avancée',
      'Gestion des écosystèmes marins',
      'Projets de conservation'
    ],
    activeUsers: 500,
    badge: 'Avancé'
  }
]

export function DiscoverPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const filteredTopics = topics.filter(topic => 
    selectedCategory === "Tous" || topic.category === selectedCategory
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 pt-20"
    >
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-blue-500/20 rounded-full text-blue-300 mb-4">
            <Compass className="w-4 h-4 inline-block mr-2" />
            Exploration Océanique
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-200">
            Découvrez les Merveilles de l'Océan
          </h1>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
            Plongez dans un voyage fascinant à travers les différents aspects de notre monde océanique.
          </p>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/10 text-blue-100 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
          {filteredTopics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${topic.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              <div className="relative p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <topic.icon className="w-8 h-8 text-blue-400" />
                  <span className="text-sm text-blue-300">{topic.stats}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{topic.title}</h3>
                <p className="text-blue-100/80 mb-6">{topic.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-300">{topic.category}</span>
                  <button className="px-4 py-2 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-colors">
                    Explorer
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Nouvelle section Learning Paths */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-blue-500/20 rounded-full text-blue-300 mb-4">
            <BookOpen className="w-4 h-4 inline-block mr-2" />
            Parcours d'Apprentissage
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-200">
            Choisissez Votre Niveau
          </h2>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
            Des parcours adaptés à tous les niveaux pour approfondir vos connaissances sur les océans.
          </p>
        </motion.div>

        {/* Learning Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {learningPaths.map((path, index) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group h-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${path.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-all duration-500`} />
              
              <div className="relative p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                {/* Badge */}
                <div className="absolute -top-3 right-6 px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                  <span className="text-sm font-medium text-white">{path.badge}</span>
                </div>

                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${path.color}`}>
                      <path.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-white">{path.title}</h3>
                      <span className="text-sm text-blue-300">{path.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-blue-100/80 mb-6">{path.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-xl p-3">
                    <div className="text-sm text-blue-300">Modules</div>
                    <div className="text-xl font-bold text-white">{path.modules}</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3">
                    <div className="text-sm text-blue-300">Apprenants</div>
                    <div className="text-xl font-bold text-white">{path.activeUsers}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6 flex-grow">
                  {path.features.map((feature, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <div className="p-1 rounded-full bg-blue-500/20 mt-0.5">
                        <Star className="w-3 h-3 text-blue-400" />
                      </div>
                      <span className="text-sm text-blue-100">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button - maintenant au bas de la carte */}
                <Link 
                //   to={`/learn/${path.id}`}
                  className={`w-full inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r ${path.color} rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300 mt-auto`}
                >
                  <span>Commencer le parcours</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-8 max-w-4xl mx-auto">
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Rejoignez notre communauté d'apprentissage
            </h3>
            <p className="text-blue-100/80 mb-6">
              Échangez avec d'autres passionnés, participez à des projets collaboratifs 
              et contribuez à la protection des océans.
            </p>
            <Link
              to="/community"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              <span>Rejoindre la communauté</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
} 