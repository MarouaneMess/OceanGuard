import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Droplet, Thermometer, Fish, Waves, AlertTriangle } from 'lucide-react'

interface InfoPoint {
  id: string
  title: string
  description: string
  icon: typeof Droplet
  position: { x: number; y: number }
  color: string
  details: {
    human: string
    ocean: string
    impact: string
  }
}

const infoPoints: InfoPoint[] = [
  {
    id: 'circulation',
    title: 'Circulation',
    description: 'Les courants océaniques comme système circulatoire',
    icon: Waves,
    position: { x: 30, y: 40 },
    color: 'bg-blue-500',
    details: {
      human: 'Transport des nutriments et de l\'oxygène dans le sang',
      ocean: 'Transport de chaleur et de nutriments à travers les océans',
      impact: 'Le réchauffement perturbe les courants océaniques'
    }
  },
  {
    id: 'temperature',
    title: 'Régulation Thermique',
    description: 'Contrôle de la température globale',
    icon: Thermometer,
    position: { x: 70, y: 30 },
    color: 'bg-red-500',
    details: {
      human: 'Maintien de la température corporelle à 37°C',
      ocean: 'Absorption de 93% de la chaleur excédentaire',
      impact: 'Augmentation des événements climatiques extrêmes'
    }
  },
  {
    id: 'ecosystem',
    title: 'Écosystème',
    description: 'La biodiversité marine',
    icon: Fish,
    position: { x: 50, y: 60 },
    color: 'bg-green-500',
    details: {
      human: 'Microbiome humain essentiel à la santé',
      ocean: 'Biodiversité marine cruciale pour l\'équilibre planétaire',
      impact: 'Perte d\'espèces et déséquilibre des écosystèmes'
    }
  }
]

export function InteractiveInfographic() {
  const [activePoint, setActivePoint] = useState<string | null>(null)
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null)

  return (
    <div className="relative h-[80vh] bg-gradient-to-b from-blue-900 to-blue-600 overflow-hidden">
      {/* Fond animé */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'url("data:image/svg+xml,...")',
        }}
      />

      {/* Points d'information */}
      {infoPoints.map((point) => (
        <motion.div
          key={point.id}
          className="absolute"
          style={{
            left: `${point.position.x}%`,
            top: `${point.position.y}%`,
          }}
          whileHover={{ scale: 1.1 }}
        >
          <button
            className={`${point.color} p-3 rounded-full text-white shadow-lg
              ${activePoint === point.id ? 'ring-4 ring-white' : ''}
              ${hoveredPoint === point.id ? 'scale-110' : ''}`}
            onClick={() => setActivePoint(activePoint === point.id ? null : point.id)}
            onMouseEnter={() => setHoveredPoint(point.id)}
            onMouseLeave={() => setHoveredPoint(null)}
          >
            <point.icon className="w-6 h-6" />
          </button>

          {/* Ligne de connexion */}
          {hoveredPoint === point.id && (
            <motion.div
              className="absolute left-full top-1/2 w-32 h-px bg-white"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.div>
      ))}

      {/* Panneau de détails */}
      <AnimatePresence>
        {activePoint && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="absolute right-0 top-0 bottom-0 w-96 bg-white shadow-lg p-6 overflow-y-auto"
          >
            {(() => {
              const point = infoPoints.find(p => p.id === activePoint)
              if (!point) return null

              return (
                <>
                  <div className="flex items-center mb-6">
                    <div className={`${point.color} p-2 rounded-lg mr-3`}>
                      <point.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{point.title}</h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Corps Humain</h4>
                      <p className="text-gray-600">{point.details.human}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Océan</h4>
                      <p className="text-gray-600">{point.details.ocean}</p>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                        <h4 className="font-semibold text-red-600">Impact</h4>
                      </div>
                      <p className="text-red-600">{point.details.impact}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setActivePoint(null)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </>
              )
            })()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Légende */}
      <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md p-4 rounded-lg text-white">
        <h3 className="font-bold mb-2">Explorez les Parallèles</h3>
        <p className="text-sm">Cliquez sur les points pour découvrir les connexions</p>
      </div>
    </div>
  )
} 