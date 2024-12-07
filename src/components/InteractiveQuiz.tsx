import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HelpCircle , Award, BookOpen, ArrowRight } from 'lucide-react'
import { getRandomQuestions, QuizQuestion } from '../data/quizQuestions'
import confetti from 'canvas-confetti'

export function InteractiveQuiz() {
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showHint, setShowHint] = useState(false)
  const [score, setScore] = useState(0)
  const [showExplanation, setShowExplanation] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)
  const [streak, setStreak] = useState(0)

  useEffect(() => {
    setQuestions(getRandomQuestions(8))
  }, [])

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
    setShowExplanation(true)
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
      setStreak(streak + 1)
      if (streak >= 2) {
        launchConfetti()
      }
    } else {
      setStreak(0)
    }
  }

  const launchConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
      setShowHint(false)
    } else {
      setQuizComplete(true)
      if (score >= 6) {
        launchConfetti()
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <AnimatePresence mode="wait">
        {!quizComplete ? (
          <motion.div
            key={currentQuestion}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Question {currentQuestion + 1}/{questions.length}</span>
                <span>Score: {score}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <motion.div
                  className="h-full bg-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">{questions[currentQuestion]?.question}</h3>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowHint(!showHint)}
                  className="text-blue-600"
                >
                  <HelpCircle className="w-6 h-6" />
                </motion.button>
              </div>

              <AnimatePresence>
                {showHint && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 p-4 bg-blue-50 rounded-lg"
                  >
                    <p className="text-blue-800">{questions[currentQuestion]?.hint}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 gap-4 mb-8">
              {questions[currentQuestion]?.options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`p-4 rounded-xl text-left transition-all ${
                    selectedAnswer === null
                      ? 'hover:bg-blue-50 border-2 border-gray-200'
                      : index === questions[currentQuestion].correctAnswer
                      ? 'bg-green-100 border-2 border-green-500'
                      : selectedAnswer === index
                      ? 'bg-red-100 border-2 border-red-500'
                      : 'border-2 border-gray-200 opacity-50'
                  }`}
                >
                  <span className="text-lg">{option}</span>
                </motion.button>
              ))}
            </div>

            {/* Explanation */}
            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="mb-8"
                >
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h4 className="font-bold text-lg mb-2">Explication</h4>
                    <p className="text-gray-700">{questions[currentQuestion]?.explanation}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Source: {questions[currentQuestion]?.source}
                    </p>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextQuestion}
                    className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl font-bold flex items-center justify-center"
                  >
                    {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center bg-white p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-3xl font-bold mb-4">Quiz terminé !</h3>
            <div className="mb-8">
              <div className="text-6xl font-bold text-blue-600 mb-2">
                {score}/{questions.length}
              </div>
              <p className="text-gray-600">
                {score >= 6 ? 'Excellent travail !' : 'Continuez à apprendre !'}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-blue-50 rounded-xl">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-bold">Score</div>
                <div className="text-2xl text-blue-600">
                  {Math.round((score / questions.length) * 100)}%
                </div>
              </div>
              <div className="p-4 bg-green-50 rounded-xl">
                <BookOpen className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="font-bold">Questions</div>
                <div className="text-2xl text-green-600">{questions.length}</div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setQuestions(getRandomQuestions(8))
                setCurrentQuestion(0)
                setScore(0)
                setQuizComplete(false)
              }}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold"
            >
              Recommencer
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 