import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Activity, Brain, ChevronRight, AlertCircle, TrendingUp, TrendingDown } from 'lucide-react'

const indicators = [
  {
    id: 'temperature',
    title: 'Température',
    icon: Activity,
    human: '37°C',
    ocean: '+1.5°C depuis 1900',
    status: 'warning',
    trend: 'hausse',
    trendIcon: TrendingUp,
    impact: 'Augmentation des événements climatiques extrêmes',
    color: 'from-orange-500 to-red-500',
    details: {
      human: 'Régulation précise de la température corporelle pour maintenir les fonctions vitales',
      ocean: 'Les océans absorbent 93% de la chaleur excédentaire',
      consequences: [
        'Blanchissement des coraux',
        'Migration des espèces',
        'Perturbation des écosystèmes'
      ]
    }
  },
  {
    id: 'oxygen',
    title: 'Oxygène',
    icon: Heart,
    human: '95-100%',
    ocean: '-2% depuis 1960',
    status: 'danger',
    trend: 'baisse',
    trendIcon: TrendingDown,
    impact: 'Zones mortes en expansion',
    color: 'from-blue-500 to-cyan-500',
    details: {
      human: 'Essentiel pour la production d\'énergie cellulaire',
      ocean: 'Production de 50-80% de l\'oxygène atmosphérique',
      consequences: [
        'Développement de zones hypoxiques',
        'Mortalité marine accrue',
        'Perturbation des cycles biogéochimiques'
      ]
    }
  },
  {
    id: 'ph',
    title: 'pH',
    icon: Brain,
    human: '7.35-7.45',
    ocean: '8.1 (↓0.1)',
    status: 'warning',
    trend: 'baisse',
    trendIcon: TrendingDown,
    impact: 'Acidification menaçant la vie marine',
    color: 'from-purple-500 to-pink-500',
    details: {
      human: 'Balance acido-basique critique pour la survie',
      ocean: 'Absorption de 25% du CO2 atmosphérique',
      consequences: [
        'Dissolution des coquilles calcaires',
        'Perturbation de la chaîne alimentaire',
        'Stress sur les organismes marins'
      ]
    }
  }
]

export function HealthIndicators() {
  const [activeIndicator, setActiveIndicator] = useState<string | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-blue-500/20 rounded-full text-blue-300 mb-4">
            Signes Vitaux Comparés
          </span>
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
            Corps Humain vs Océan
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Découvrez les parallèles fascinants entre notre santé et celle des océans
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {indicators.map((indicator, index) => (
            <motion.div
              key={indicator.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${indicator.color}`}
            >
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
              
              <div className="relative p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <indicator.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{indicator.title}</h3>
                  </div>
                  <indicator.trendIcon 
                    className={`w-6 h-6 ${
                      indicator.trend === 'hausse' ? 'text-red-400' : 'text-blue-400'
                    }`} 
                  />
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                    <p className="text-sm text-white/80 mb-2">Corps Humain</p>
                    <p className="text-xl font-bold text-white">{indicator.human}</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                    <p className="text-sm text-white/80 mb-2">Océan</p>
                    <p className="text-xl font-bold text-white">{indicator.ocean}</p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveIndicator(activeIndicator === indicator.id ? null : indicator.id)}
                  className="w-full bg-white/10 hover:bg-white/20 transition-colors rounded-xl p-4 flex items-center justify-between"
                >
                  <span className="text-white font-medium">En savoir plus</span>
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>

                <AnimatePresence>
                  {activeIndicator === indicator.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4"
                    >
                      <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 space-y-4">
                        <div>
                          <h4 className="text-white font-semibold mb-2">Impact</h4>
                          <p className="text-white/80">{indicator.impact}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-white font-semibold mb-2">Conséquences</h4>
                          <ul className="space-y-2">
                            {indicator.details.consequences.map((consequence, i) => (
                              <li key={i} className="flex items-start space-x-2 text-white/80">
                                <AlertCircle className="w-4 h-4 mt-1 flex-shrink-0 text-red-400" />
                                <span>{consequence}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section de conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3">
            <Heart className="w-5 h-5 text-red-400" />
            <span className="text-white">Notre santé est intimement liée à celle des océans</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 