import { InteractiveQuiz } from '../components/InteractiveQuiz'
import { motion } from 'framer-motion'

export function QuizPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 pt-20"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Quiz Océanique</h1>
        <p className="text-center text-gray-600 mb-12">
          Testez vos connaissances sur les océans et leur importance
        </p>
        <InteractiveQuiz />
      </div>
    </motion.div>
  )
} 