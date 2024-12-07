import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Check, Lock } from 'lucide-react'

interface Module {
  id: string
  title: string
  description: string
  completed: boolean
  locked: boolean
}

export function ProgressSystem() {
  const [modules, setModules] = useState<Module[]>([
    {
      id: 'intro',
      title: 'Introduction à l\'Océan',
      description: 'Découvrez les bases de l\'écosystème océanique',
      completed: false,
      locked: false
    },
    {
      id: 'circulation',
      title: 'Circulation Océanique',
      description: 'Comprendre les courants et leur importance',
      completed: false,
      locked: true
    },
    {
      id: 'climate',
      title: 'Régulation du Climat',
      description: 'Le rôle de l\'océan dans le climat',
      completed: false,
      locked: true
    },
    {
      id: 'biodiversity',
      title: 'Biodiversité Marine',
      description: 'La vie dans les océans',
      completed: false,
      locked: true
    }
  ])

  const [progress, setProgress] = useState(0)

  const completeModule = (moduleId: string) => {
    setModules(modules.map(mod => {
      if (mod.id === moduleId) {
        return { ...mod, completed: true }
      }
      if (modules.findIndex(m => m.id === moduleId) + 1 === modules.findIndex(m => m.id === mod.id)) {
        return { ...mod, locked: false }
      }
      return mod
    }))
  }

  useEffect(() => {
    const completedCount = modules.filter(mod => mod.completed).length
    setProgress((completedCount / modules.length) * 100)
  }, [modules])

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <div className="h-2 bg-gray-200 rounded-full">
          <motion.div
            className="h-full bg-blue-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <p className="text-center mt-2 text-gray-600">
          {Math.round(progress)}% complété
        </p>
      </div>

      <div className="space-y-4">
        {modules.map((module, index) => (
          <motion.div
            key={module.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-6 rounded-xl border-2 ${
              module.completed
                ? 'border-green-500 bg-green-50'
                : module.locked
                ? 'border-gray-200 bg-gray-50'
                : 'border-blue-500 bg-blue-50'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                <p className="text-gray-600">{module.description}</p>
              </div>
              <div className="ml-4">
                {module.completed ? (
                  <Check className="w-6 h-6 text-green-500" />
                ) : module.locked ? (
                  <Lock className="w-6 h-6 text-gray-400" />
                ) : (
                  <button
                    onClick={() => completeModule(module.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                  >
                    Commencer
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 