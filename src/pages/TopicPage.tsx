import { useState } from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const topicContent = {
  currents: {
    title: 'Les Courants Marins',
    sections: [
      {
        title: 'Introduction',
        content: '...',
        quiz: [
          {
            question: "Qu'est-ce qui cause principalement les courants de surface ?",
            options: ['Les vents', 'La température', 'La salinité', 'La lune'],
            correctAnswer: 0
          }
          // ... autres questions
        ]
      }
      // ... autres sections
    ]
  }
  // ... autres sujets
}

export function TopicPage() {
  const { topicId } = useParams()
  const [currentSection, setCurrentSection] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<number[]>([])
  
  const topic = topicContent[topicId as keyof typeof topicContent]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 pt-20"
    >
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            {topic.title}
          </motion.h1>

          {/* Navigation des sections */}
          <div className="flex space-x-4 mb-8">
            {topic.sections.map((section, index) => (
              <button
                key={index}
                onClick={() => setCurrentSection(index)}
                className={`px-4 py-2 rounded-full ${
                  currentSection === index 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white text-gray-600'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>

          {/* Contenu de la section */}
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card p-8"
          >
            {!showQuiz ? (
              <>
                <div className="prose max-w-none">
                  {topic.sections[currentSection].content}
                </div>
                <button
                  onClick={() => setShowQuiz(true)}
                  className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center"
                >
                  Tester vos connaissances
                  <ChevronRight className="ml-2 w-4 h-4" />
                </button>
              </>
            ) : (
              <div className="space-y-8">
                {topic.sections[currentSection].quiz.map((q, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-lg font-semibold">{q.question}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {q.options.map((option, optIndex) => (
                        <button
                          key={optIndex}
                          onClick={() => {
                            const newAnswers = [...quizAnswers]
                            newAnswers[index] = optIndex
                            setQuizAnswers(newAnswers)
                          }}
                          className={`p-4 rounded-lg border ${
                            quizAnswers[index] === optIndex
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
} 