import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { quizQuestions } from '../data/quiz';
// import { QuizQuestion } from '../types';

// Ajout d'animations et de feedback immédiat
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    if (answerIndex === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setShowHint(false);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setShowHint(false);
    setScore(0);
    setQuizComplete(false);
  };

  if (quizComplete) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto"
      >
        <h3 className="text-2xl font-bold mb-4">Quiz Terminé!</h3>
        <p className="text-lg mb-4">
          Votre score: {score} sur {quizQuestions.length}
        </p>
        <div className="mb-6">
          {score === quizQuestions.length ? (
            <p className="text-green-600">Félicitations ! Score parfait !</p>
          ) : score >= quizQuestions.length * 0.7 ? (
            <p className="text-blue-600">Très bon score ! Continuez ainsi !</p>
          ) : (
            <p className="text-orange-600">Continuez d'apprendre sur l'océan !</p>
          )}
        </div>
        <button
          onClick={resetQuiz}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Recommencer le Quiz
        </button>
      </motion.div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-3xl mx-auto"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">Question {currentQuestion + 1}/{quizQuestions.length}</h3>
        <div className="text-blue-600">Score: {score}</div>
      </div>

      <p className="text-lg mb-6">{question.question}</p>

      {!showHint && !showExplanation && (
        <button
          onClick={() => setShowHint(true)}
          className="text-blue-600 hover:text-blue-700 mb-4"
        >
          Besoin d'un indice ?
        </button>
      )}

      {showHint && !showExplanation && (
        <div className="mb-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-700">{question.hint}</p>
        </div>
      )}

      <div className="space-y-4 mb-6">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={selectedAnswer !== null}
            whileHover={{ scale: selectedAnswer === null ? 1.02 : 1 }}
            className={`w-full p-4 text-left rounded-lg transition ${
              selectedAnswer === null
                ? 'hover:bg-blue-50 border border-gray-200'
                : index === question.correctAnswer
                ? 'bg-green-100 border border-green-500'
                : selectedAnswer === index
                ? 'bg-red-100 border border-red-500'
                : 'border border-gray-200'
            }`}
          >
            {option}
          </motion.button>
        ))}
      </div>

      {showExplanation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6"
        >
          <p className="text-gray-700 bg-blue-50 p-4 rounded-lg">
            {question.explanation}
          </p>
        </motion.div>
      )}

      {selectedAnswer !== null && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={nextQuestion}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {currentQuestion < quizQuestions.length - 1 ? 'Question Suivante' : 'Terminer le Quiz'}
        </motion.button>
      )}
    </motion.div>
  );
}