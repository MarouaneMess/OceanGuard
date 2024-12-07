import { motion } from 'framer-motion'
import { useState } from 'react'
import { Brain, Trophy, Timer, Star, Fish, Cloud, Award, Beaker, Trash, Wind, Target, ArrowRight, Share2 } from 'lucide-react'
import { QuizQuestion, quizQuestions, getRandomQuestions } from '../data/quizQuestions'
import { QuizInterface, QuizResults } from '../components/QuizInterface'

const quizCategories = [
  {
    id: 'climate',
    title: 'Climat',
    icon: Cloud,
    color: 'from-orange-500 to-red-500',
    questionsCount: quizQuestions.filter(q => q.category === 'climate').length
  },
  {
    id: 'biodiversity',
    title: 'Biodiversité',
    icon: Fish,
    color: 'from-blue-500 to-cyan-500',
    questionsCount: quizQuestions.filter(q => q.category === 'biodiversity').length
  },
  {
    id: 'pollution',
    title: 'Pollution',
    icon: Trash,
    color: 'from-purple-500 to-pink-500',
    questionsCount: quizQuestions.filter(q => q.category === 'pollution').length
  },
  {
    id: 'circulation',
    title: 'Circulation',
    icon: Wind,
    color: 'from-teal-500 to-emerald-500',
    questionsCount: quizQuestions.filter(q => q.category === 'circulation').length
  },
  {
    id: 'chemistry',
    title: 'Chimie',
    icon: Beaker,
    color: 'from-indigo-500 to-blue-500',
    questionsCount: quizQuestions.filter(q => q.category === 'chemistry').length
  }
]

interface QuizStats {
  totalQuizzes: number
  bestScore: number
  averageTime: number
  accuracy: number
  lastPlayed: number
  categoryScores: Record<string, number>
}

export function QuizPage() {
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQuestions, setCurrentQuestions] = useState<QuizQuestion[]>([])
  const [showResults, setShowResults] = useState(false)
  const [lastResults, setLastResults] = useState<QuizResults | null>(null)
  const [stats, setStats] = useState<QuizStats>(() => {
    const savedStats = localStorage.getItem('quizStats')
    if (savedStats) {
      return JSON.parse(savedStats)
    }
    return {
      totalQuizzes: 0,
      bestScore: 0,
      averageTime: 0,
      accuracy: 0,
      lastPlayed: 0,
      categoryScores: {}
    }
  })

  const startQuiz = (category: string) => {
    const categoryQuestions = category === 'all' 
      ? getRandomQuestions(10)
      : quizQuestions
          .filter(q => q.category === category)
          .sort(() => 0.5 - Math.random())
          .slice(0, 10)
    
    setCurrentQuestions(categoryQuestions)
    setQuizStarted(true)
    setShowResults(false)
  }

  const updateStats = (results: QuizResults) => {
    const newStats = { ...stats }
    
    // Mise à jour du nombre total de quiz
    newStats.totalQuizzes += 1

    // Mise à jour du meilleur score
    newStats.bestScore = Math.max(newStats.bestScore, results.score)

    // Mise à jour du temps moyen
    const avgTime = results.answers.reduce((acc, curr) => acc + curr.timeTaken, 0) / results.totalQuestions
    newStats.averageTime = (newStats.averageTime * (newStats.totalQuizzes - 1) + avgTime) / newStats.totalQuizzes

    // Mise à jour de la précision
    const newAccuracy = (results.correctAnswers / results.totalQuestions) * 100
    newStats.accuracy = (newStats.accuracy * (newStats.totalQuizzes - 1) + newAccuracy) / newStats.totalQuizzes

    // Mise à jour des scores par catégorie
    newStats.categoryScores[results.category] = Math.max(
      newStats.categoryScores[results.category] || 0,
      results.score
    )

    newStats.lastPlayed = Date.now()

    // Sauvegarde dans le localStorage
    localStorage.setItem('quizStats', JSON.stringify(newStats))
    setStats(newStats)
  }

  const handleQuizComplete = (results: QuizResults) => {
    setLastResults(results)
    setShowResults(true)
    setQuizStarted(false)
    updateStats(results)
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
          <span className="inline-flex items-center px-4 py-1.5 bg-blue-500/20 rounded-full text-blue-300 mb-4">
            <Brain className="w-4 h-4 mr-2" />
            Quiz Océanique
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-200">
            Testez Vos Connaissances
          </h1>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
            Relevez le défi et découvrez les mystères des océans à travers nos quiz interactifs.
          </p>
        </motion.div>

        {showResults && lastResults ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
              <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Quiz Terminé !
              </h2>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-sm text-blue-300">Score</div>
                  <div className="text-3xl font-bold text-white">
                    {lastResults.score} pts
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-sm text-blue-300">Bonnes réponses</div>
                  <div className="text-3xl font-bold text-white">
                    {lastResults.correctAnswers}/{lastResults.totalQuestions}
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <span className="text-blue-200">Temps moyen par question</span>
                  <span className="text-white font-semibold">
                    {Math.round(lastResults.answers.reduce((acc: number, curr: { timeTaken: number }) => acc + curr.timeTaken, 0) / lastResults.totalQuestions)}s
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <span className="text-blue-200">Précision</span>
                  <span className="text-white font-semibold">
                    {Math.round((lastResults.correctAnswers / lastResults.totalQuestions) * 100)}%
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => startQuiz(lastResults.category)}
                  className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Réessayer
                </button>
                <button
                  onClick={() => {
                    setShowResults(false)
                  }}
                  className="flex-1 py-3 bg-white/10 rounded-xl text-white font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  Changer de catégorie
                </button>
                <button
                  onClick={() => {
                    // Partager les résultats
                    const text = `J'ai obtenu ${lastResults.score} points au quiz océanique avec ${lastResults.correctAnswers}/${lastResults.totalQuestions} bonnes réponses !`
                    if (navigator.share) {
                      navigator.share({
                        title: 'Mes résultats au quiz océanique',
                        text: text,
                      })
                    } else {
                      navigator.clipboard.writeText(text)
                      // Ajouter une notification de copie réussie
                    }
                  }}
                  className="p-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-all duration-300"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ) : quizStarted ? (
          <QuizInterface 
            questions={currentQuestions} 
            onComplete={handleQuizComplete}
          />
        ) : (
          <>
            {/* Quiz Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {quizCategories.map((category) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative group"
                  onClick={() => startQuiz(category.id)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-300`} />
                  <div className="relative p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center justify-between mb-6">
                      <category.icon className="w-8 h-8 text-blue-400" />
                      <span className="text-sm text-blue-300">{category.questionsCount} questions</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[...Array(3)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500" fill="#eab308" />
                        ))}
                      </div>
                      <ArrowRight className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Section avec données réelles */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  icon: Trophy,
                  label: 'Meilleur Score',
                  value: `${stats.bestScore} pts`
                },
                {
                  icon: Timer,
                  label: 'Temps Moyen',
                  value: `${Math.round(stats.averageTime)}s`
                },
                {
                  icon: Award,
                  label: 'Quiz Complétés',
                  value: stats.totalQuizzes.toString()
                },
                {
                  icon: Target,
                  label: 'Précision',
                  value: `${Math.round(stats.accuracy)}%`
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6"
                >
                  <div className="flex items-center space-x-4">
                    <stat.icon className="w-8 h-8 text-blue-400" />
                    <div>
                      <div className="text-sm text-blue-200">{stat.label}</div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Catégories avec meilleurs scores */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-white mb-4">Meilleurs scores par catégorie</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {quizCategories.map(category => (
                  <div key={category.id} className="bg-white/5 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <category.icon className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-200">{category.title}</span>
                    </div>
                    <div className="text-xl font-bold text-white">
                      {stats.categoryScores[category.id] || 0} pts
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  )
} 