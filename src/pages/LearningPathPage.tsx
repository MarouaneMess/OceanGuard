import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { BookOpen, Brain, GraduationCap, Play, Clock, CheckCircle, Lock, ArrowRight } from 'lucide-react'

const learningPaths = {
  beginner: {
    title: 'Débutant',
    icon: BookOpen,
    color: 'from-green-500 to-emerald-500',
    modules: [
      {
        title: "Introduction aux océans",
        duration: "45 min",
        lessons: [
          { title: "La formation des océans", completed: true },
          { title: "Les différentes zones océaniques", completed: true },
          { title: "L'importance des océans pour la vie", completed: false }
        ],
        locked: false
      },
      {
        title: "Biodiversité marine",
        duration: "60 min",
        lessons: [
          { title: "Les écosystèmes marins", completed: false },
          { title: "La chaîne alimentaire marine", completed: false },
          { title: "Les espèces menacées", completed: false }
        ],
        locked: true
      },
      {
        title: "Protection des océans",
        duration: "50 min",
        lessons: [
          { title: "Les menaces principales", completed: false },
          { title: "Actions individuelles", completed: false },
          { title: "Initiatives globales", completed: false }
        ],
        locked: true
      }
    ]
  },
  intermediate: {
    title: 'Intermédiaire',
    icon: Brain,
    color: 'from-blue-500 to-cyan-500',
    modules: [
      {
        title: "Océanographie physique",
        duration: "75 min",
        lessons: [
          { title: "Les courants marins", completed: false },
          { title: "La salinité et la température", completed: false },
          { title: "Les vagues et les marées", completed: false }
        ],
        locked: false
      },
      {
        title: "Chimie des océans",
        duration: "90 min",
        lessons: [
          { title: "L'acidification des océans", completed: false },
          { title: "Les cycles biogéochimiques", completed: false },
          { title: "L'impact du changement climatique", completed: false }
        ],
        locked: true
      }
    ]
  },
  advanced: {
    title: 'Expert',
    icon: GraduationCap,
    color: 'from-purple-500 to-indigo-500',
    modules: [
      {
        title: "Recherche océanographique",
        duration: "120 min",
        lessons: [
          { title: "Méthodes d'étude des océans", completed: false },
          { title: "Technologies d'exploration", completed: false },
          { title: "Analyse des données océaniques", completed: false }
        ],
        locked: false
      },
      {
        title: "Conservation marine avancée",
        duration: "100 min",
        lessons: [
          { title: "Gestion des aires marines protégées", completed: false },
          { title: "Restauration des écosystèmes", completed: false },
          { title: "Politiques de conservation", completed: false }
        ],
        locked: true
      }
    ]
  }
}

export function LearningPathPage() {
  const { pathId } = useParams()
  const path = learningPaths[pathId as keyof typeof learningPaths]

  if (!path) {
    return <div>Parcours non trouvé</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 pt-20"
    >
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-4 py-1 rounded-full text-white mb-4 bg-gradient-to-r ${path.color}`}>
            <path.icon className="w-4 h-4 inline-block mr-2" />
            Parcours {path.title}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-200">
            Formation {path.title}
          </h1>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
            Suivez votre progression et maîtrisez les concepts clés de l'océanographie.
          </p>
        </motion.div>

        {/* Modules */}
        <div className="max-w-4xl mx-auto">
          {path.modules.map((module, moduleIndex) => (
            <motion.div
              key={moduleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: moduleIndex * 0.1 }}
              className="mb-8"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 relative overflow-hidden group">
                {/* Module Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {module.title}
                    </h3>
                    <div className="flex items-center text-blue-300">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{module.duration}</span>
                    </div>
                  </div>
                  {module.locked ? (
                    <div className="bg-white/20 p-2 rounded-xl">
                      <Lock className="w-6 h-6 text-blue-300" />
                    </div>
                  ) : (
                    <button className={`px-4 py-2 bg-gradient-to-r ${path.color} rounded-xl text-white flex items-center group`}>
                      <Play className="w-4 h-4 mr-2" />
                      Commencer
                    </button>
                  )}
                </div>

                {/* Lessons */}
                <div className="space-y-4">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <div
                      key={lessonIndex}
                      className={`flex items-center justify-between p-4 rounded-xl ${
                        module.locked
                          ? 'bg-white/5 opacity-50'
                          : 'bg-white/10 hover:bg-white/20'
                      } transition-all duration-300`}
                    >
                      <div className="flex items-center">
                        {lesson.completed ? (
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-blue-300 mr-3" />
                        )}
                        <span className="text-blue-100">{lesson.title}</span>
                      </div>
                      {!module.locked && (
                        <button className="text-blue-300 hover:text-white transition-colors">
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Progress Bar */}
                {!module.locked && (
                  <div className="mt-6">
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${path.color} transition-all duration-300`}
                        style={{
                          width: `${(module.lessons.filter(l => l.completed).length / module.lessons.length) * 100}%`
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
} 