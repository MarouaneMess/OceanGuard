import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
// import { ChevronRight, BookOpen, Award } from 'lucide-react'

const topicsContent = {
  currents: {
    title: "Courants Marins",
    icon: "��",
    sections: [
      {
        title: "Formation des courants",
        content: "Les courants océaniques sont créés par...",
        quiz: [
          {
            question: "Quel facteur influence le plus les courants de surface ?",
            options: ["Les vents", "La température", "La salinité", "La lune"],
            correctAnswer: 0
          }
        ]
      },
      // Ajoutez d'autres sections
    ]
  },
  biodiversity: {
    title: "Biodiversité Marine",
    icon: "🐠",
    sections: [
      {
        title: "Écosystèmes marins",
        content: "Les océans abritent une diversité extraordinaire...",
        quiz: [
          {
            question: "Quel pourcentage de la biodiversité mondiale se trouve dans les océans ?",
            options: ["25%", "50%", "75%", "90%"],
            correctAnswer: 2
          }
        ]
      }
    ]
  },
  // Ajoutez d'autres thèmes
}

export function TopicDetailPage() {
  const { topicId } = useParams()
  const [currentSection, setCurrentSection] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)

  const topic = topicsContent[topicId as keyof typeof topicsContent]

  if (!topic) return <div>Thème non trouvé</div>

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <div className="text-6xl mb-4">{topic.icon}</div>
            <h1 className="text-4xl font-bold mb-4">{topic.title}</h1>
          </header>

          {!showQuiz ? (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  {topic.sections[currentSection].title}
                </h2>
                <div className="prose max-w-none">
                  {topic.sections[currentSection].content}
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                  disabled={currentSection === 0}
                  className="px-6 py-2 rounded-lg bg-gray-100 disabled:opacity-50"
                >
                  Précédent
                </button>

                {currentSection === topic.sections.length - 1 ? (
                  <button
                    onClick={() => setShowQuiz(true)}
                    className="px-6 py-2 rounded-lg bg-blue-600 text-white"
                  >
                    Passer au quiz
                  </button>
                ) : (
                  <button
                    onClick={() => setCurrentSection(currentSection + 1)}
                    className="px-6 py-2 rounded-lg bg-blue-600 text-white"
                  >
                    Suivant
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-8">Quiz - {topic.title}</h2>
              {/* Composant Quiz spécifique au thème */}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
} 