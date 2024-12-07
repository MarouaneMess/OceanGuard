import { motion } from 'framer-motion'
import { DataVisualization } from '../components/DataVisualization'
import { BarChart, Activity, Thermometer, Droplet, Wind } from 'lucide-react'
import { useState } from 'react'

const dataSections = [
  {
    id: 'temperature',
    title: 'Température',
    icon: Thermometer,
    color: 'from-orange-500 to-red-500',
    description: 'Évolution des températures océaniques'
  },
  {
    id: 'pollution',
    title: 'Pollution',
    icon: Droplet,
    color: 'from-purple-500 to-pink-500',
    description: 'Niveaux de pollution marine'
  },
  {
    id: 'currents',
    title: 'Courants',
    icon: Wind,
    color: 'from-blue-500 to-cyan-500',
    description: 'Analyse des courants marins'
  }
]

export function DataPage() {
  const [activeSection, setActiveSection] = useState('temperature')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 pt-20"
    >
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-1.5 bg-blue-500/20 rounded-full text-blue-300 mb-4">
            <BarChart className="w-4 h-4 mr-2" />
            Données Océaniques
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-200">
            Visualisation des Données
          </h1>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
            Explorez les données en temps réel sur l'état de nos océans et leur évolution.
          </p>
        </motion.div>

        {/* Navigation des sections */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {dataSections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                activeSection === section.id
                  ? `bg-gradient-to-r ${section.color} text-white shadow-lg`
                  : 'bg-white/10 text-blue-100 hover:bg-white/20'
              }`}
            >
              <section.icon className="w-5 h-5" />
              <span>{section.title}</span>
            </button>
          ))}
        </div>

        {/* Visualisation principale */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12">
          <DataVisualization activeSection={activeSection} />
        </div>

        {/* Statistiques clés */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              label: 'Température moyenne',
              value: '+1.5°C',
              change: '+0.2°C',
              trend: 'up',
              icon: Thermometer
            },
            {
              label: 'Niveau de pollution',
              value: '245 ppm',
              change: '-3%',
              trend: 'down',
              icon: Activity
            },
            {
              label: 'Vitesse des courants',
              value: '2.3 m/s',
              change: '+0.1 m/s',
              trend: 'up',
              icon: Wind
            }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className="w-6 h-6 text-blue-400" />
                  <span className={`text-sm ${
                    stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-blue-100 mb-2">{stat.label}</h3>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
} 