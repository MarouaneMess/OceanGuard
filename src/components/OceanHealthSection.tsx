import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,  } from 'recharts'
import { AlertTriangle, Droplet, Fish, ThermometerSun, Wind, TrendingDown, TrendingUp, ExternalLink } from 'lucide-react'

const healthData = [
  { year: 1970, health: 90, temperature: 0, acidification: 0, biodiversity: 100 },
  { year: 1980, health: 85, temperature: 0.1, acidification: 0.1, biodiversity: 95 },
  { year: 1990, health: 80, temperature: 0.2, acidification: 0.2, biodiversity: 85 },
  { year: 2000, health: 70, temperature: 0.4, acidification: 0.3, biodiversity: 75 },
  { year: 2010, health: 60, temperature: 0.6, acidification: 0.4, biodiversity: 65 },
  { year: 2020, health: 50, temperature: 0.8, acidification: 0.5, biodiversity: 55 },
  { year: 2023, health: 45, temperature: 1.0, acidification: 0.6, biodiversity: 50 },
]

const indicators = [
  {
    title: "Température",
    icon: ThermometerSun,
    color: "#ef4444",
    gradient: "from-red-500 to-orange-500",
    value: "+1.0°C",
    trend: "hausse",
    trendIcon: TrendingUp,
    description: "Augmentation moyenne de la température des océans",
    details: "L'augmentation de la température affecte les écosystèmes marins et contribue à la montée des eaux.",
    impact: "Critique",
    recommendations: [
      "Réduction des émissions de CO2",
      "Protection des zones de refroidissement",
      "Surveillance des zones sensibles"
    ]
  },
  {
    title: "Acidification",
    icon: Droplet,
    color: "#8b5cf6",
    gradient: "from-purple-500 to-indigo-500",
    value: "-0.1 pH",
    trend: "baisse",
    trendIcon: TrendingDown,
    description: "Diminution du pH des océans",
    details: "L'acidification menace les organismes calcifiants comme les coraux et les mollusques.",
    impact: "Important",
    recommendations: [
      "Réduction des émissions de SO2",
      "Surveillance des zones sensibles"
    ]
  },
  {
    title: "Biodiversité",
    icon: Fish,
    color: "#10b981",
    gradient: "from-green-500 to-emerald-500",
    value: "-50%",
    trend: "baisse",
    trendIcon: TrendingDown,
    description: "Déclin de la biodiversité marine",
    details: "La perte de biodiversité affecte la résilience des écosystèmes marins.",
    impact: "Critique",
    recommendations: [
      "Protection des zones de biodiversité",
      "Surveillance des zones sensibles"
    ]
  },
  {
    title: "Circulation",
    icon: Wind,
    color: "#3b82f6",
    gradient: "from-blue-500 to-cyan-500",
    value: "-15%",
    trend: "baisse",
    trendIcon: TrendingDown,
    description: "Ralentissement des courants océaniques",
    details: "Les changements de circulation affectent le climat global et les écosystèmes.",
    impact: "Important",
    recommendations: [
      "Surveillance des zones sensibles",
      "Protection des zones de circulation"
    ]
  }
]

export function OceanHealthSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeTab, setActiveTab] = useState<'graph' | 'details'>('graph')
  const [hoveredYear, setHoveredYear] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-blue-500/20 rounded-full text-blue-300 mb-4">
            Données en temps réel
          </span>
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-200">
            Évolution de la Santé Océanique
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Un aperçu interactif des changements majeurs affectant nos océans
          </p>
        </motion.div>

        {/* Tabs de navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-full p-1">
            {['graph', 'details'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as 'graph' | 'details')}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeTab === tab 
                    ? 'bg-blue-500 text-white' 
                    : 'text-blue-200 hover:text-white'
                }`}
              >
                {tab === 'graph' ? 'Graphique' : 'Détails'}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'graph' ? (
            <motion.div
              key="graph"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="mb-16 bg-white/10 backdrop-blur-lg rounded-2xl p-8"
            >
              <div className="h-[500px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart 
                    data={healthData}
                    onMouseMove={(e) => {
                      if (e.activeTooltipIndex !== undefined) {
                        setHoveredYear(healthData[e.activeTooltipIndex].year)
                      }
                    }}
                    onMouseLeave={() => setHoveredYear(null)}
                  >
                    <defs>
                      {indicators.map((indicator) => (
                        <linearGradient
                          key={indicator.title}
                          id={`gradient-${indicator.title}`}
                          x1="0" y1="0" x2="0" y2="1"
                        >
                          <stop offset="0%" stopColor={indicator.color} stopOpacity={0.8} />
                          <stop offset="100%" stopColor={indicator.color} stopOpacity={0.2} />
                        </linearGradient>
                      ))}
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis 
                      dataKey="year" 
                      stroke="rgba(255,255,255,0.5)"
                      tick={{ fill: 'rgba(255,255,255,0.8)' }}
                    />
                    <YAxis 
                      stroke="rgba(255,255,255,0.5)"
                      tick={{ fill: 'rgba(255,255,255,0.8)' }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        color: 'white'
                      }}
                    />
                    {indicators.map((indicator) => (
                      <Area
                        key={indicator.title}
                        type="monotone"
                        dataKey={indicator.title.toLowerCase()}
                        stroke={indicator.color}
                        fill={`url(#gradient-${indicator.title})`}
                        strokeWidth={hoveredYear ? 3 : 2}
                        opacity={hoveredYear ? 1 : 0.3}
                      />
                    ))}
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="details"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {indicators.map((indicator) => (
                <motion.div
                  key={indicator.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`bg-gradient-to-br ${indicator.gradient} rounded-2xl overflow-hidden`}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <indicator.icon className="w-8 h-8 text-white" />
                        <h3 className="text-2xl font-bold">{indicator.title}</h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        <indicator.trendIcon className="w-5 h-5" />
                        <span className="text-2xl font-bold">{indicator.value}</span>
                      </div>
                    </div>
                    
                    <p className="text-white/90 mb-4">{indicator.description}</p>
                    
                    <div className="space-y-4">
                      <div className="bg-black/20 rounded-xl p-4">
                        <h4 className="font-semibold mb-2">Impact: {indicator.impact}</h4>
                        <p className="text-sm text-white/80">{indicator.details}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Recommandations:</h4>
                        <ul className="space-y-2">
                          {indicator.recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start space-x-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-white/80 mt-1.5" />
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Alerte et appel à l'action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-lg rounded-2xl p-8">
            <div className="flex items-start space-x-6">
              <div className="bg-red-500/20 rounded-full p-3">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-400 mb-2">
                  Point critique atteint
                </h3>
                <p className="text-white/80 mb-4">
                  Les indicateurs montrent une détérioration accélérée de la santé océanique.
                  Une action immédiate est nécessaire pour préserver nos océans.
                </p>
                <button className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-lg text-white">
                  <span>En savoir plus</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 