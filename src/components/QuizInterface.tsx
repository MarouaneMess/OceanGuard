import { motion } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'
import { Timer, AlertCircle, CheckCircle, XCircle, HelpCircle } from 'lucide-react'
import { QuizQuestion } from '../data/quizQuestions'

export interface QuizResults {
  score: number
  correctAnswers: number
  totalQuestions: number
  category: string
  timestamp: number
  answers: Array<{
    questionId: number
    correct: boolean
    timeTaken: number
  }>
}

interface QuizInterfaceProps {
  questions: QuizQuestion[]
  onComplete: (results: QuizResults) => void
}

export function QuizInterface({ questions, onComplete }: QuizInterfaceProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [timer, setTimer] = useState(30)
  const [answers, setAnswers] = useState<QuizResults['answers']>([])
  const [startTime, setStartTime] = useState<number>(Date.now())

  const currentQuestion = questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === questions.length - 1

  const handleAnswer = useCallback((answerIndex: number) => {
    const timeTaken = Math.round((Date.now() - startTime) / 1000)
    const isCorrect = answerIndex === currentQuestion.correctAnswer
    
    setAnswers(prev => [...prev, {
      questionId: currentQuestion.id,
      correct: isCorrect,
      timeTaken
    }])
    
    setSelectedAnswer(answerIndex)
    setShowExplanation(true)
    setShowHint(false)
  }, [currentQuestion, startTime])

  useEffect(() => {
    if (timer > 0 && !showExplanation) {
      const countdown = setInterval(() => setTimer(t => t - 1), 1000)
      return () => clearInterval(countdown)
    } else if (timer === 0 && !showExplanation) {
      handleAnswer(-1) // Temps écoulé
    }
  }, [timer, showExplanation, handleAnswer])

  const nextQuestion = () => {
    if (isLastQuestion) {
      const results: QuizResults = {
        score: answers.filter(a => a.correct).length * 10,
        correctAnswers: answers.filter(a => a.correct).length,
        totalQuestions: questions.length,
        category: currentQuestion.category,
        timestamp: Date.now(),
        answers
      }

      // Sauvegarder dans le localStorage
      const previousResults = JSON.parse(localStorage.getItem('quizResults') || '[]')
      localStorage.setItem('quizResults', JSON.stringify([...previousResults, results]))

      onComplete(results)
    } else {
      setCurrentQuestionIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
      setShowHint(false)
      setTimer(30)
      setStartTime(Date.now())
    }
  }

  return (
    <motion.div
      key={currentQuestion.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-3xl mx-auto relative"
    >
      {/* Progress and Timer */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-blue-300">
            Question {currentQuestionIndex + 1}/{questions.length}
          </span>
          <div className="flex items-center space-x-2 text-blue-300">
            <Timer className="w-4 h-4" />
            <span>{timer}s</span>
          </div>
        </div>
        <div className="h-2 bg-white/10 rounded-full">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 relative">
        {/* Hint Button */}
        {!showExplanation && (
          <button
            onClick={() => setShowHint(!showHint)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            title="Voir l'indice"
          >
            <HelpCircle className="w-5 h-5 text-blue-300" />
          </button>
        )}

        <h3 className="text-2xl font-bold text-white mb-6">
          {currentQuestion.question}
        </h3>

        {/* Hint Display */}
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-blue-500/10 rounded-xl p-4 mb-6"
          >
            <p className="text-blue-200 text-sm italic">
              💡 Indice : {currentQuestion.hint}
            </p>
          </motion.div>
        )}

        {/* Options */}
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => !showExplanation && handleAnswer(index)}
              disabled={showExplanation}
              className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                showExplanation
                  ? index === currentQuestion.correctAnswer
                    ? 'bg-green-500/20 border-green-500'
                    : index === selectedAnswer
                    ? 'bg-red-500/20 border-red-500'
                    : 'bg-white/10 border-transparent'
                  : 'bg-white/10 hover:bg-white/20 border-transparent'
              } border`}
            >
              <div className="flex items-center justify-between">
                <span className="text-white">{option}</span>
                {showExplanation && (
                  index === currentQuestion.correctAnswer ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : index === selectedAnswer ? (
                    <XCircle className="w-5 h-5 text-red-500" />
                  ) : null
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Explanation */}
      {showExplanation && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-500/20 rounded-xl p-6 mb-8"
        >
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-blue-400 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Explication</h4>
              <p className="text-blue-100 mb-2">{currentQuestion.explanation}</p>
              <p className="text-sm text-blue-300">Source : {currentQuestion.source}</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Next Button */}
      {showExplanation && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={nextQuestion}
          className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300"
        >
          {isLastQuestion ? 'Voir les résultats' : 'Question suivante'}
        </motion.button>
      )}
    </motion.div>
  )
} 