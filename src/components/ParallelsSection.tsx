import { motion } from 'framer-motion'

const systems = [
  {
    id: 'circulation',
    title: 'Système Circulatoire',
    oceanTitle: 'Courants Océaniques',
    description: 'Comme notre système sanguin distribue les nutriments, les courants océaniques transportent chaleur et vie.',
    icon: '��',
    color: 'bg-blue-500'
  },
  {
    id: 'respiration',
    title: 'Système Respiratoire',
    oceanTitle: 'Échange de CO2',
    description: "L'océan, comme nos poumons, absorbe le CO2 et produit l'oxygène nécessaire à la vie.",
    icon: '💨',
    color: 'bg-green-500'
  },
  {
    id: 'temperature',
    title: 'Régulation Thermique',
    oceanTitle: 'Stabilité Climatique',
    description: "L'océan régule la température globale comme notre corps maintient sa température stable.",
    icon: '🌡️',
    color: 'bg-red-500'
  }
]

interface ParallelsSectionProps {
  activeSystem: string | null
  onSystemChange: (systemId: string) => void
}

export function ParallelsSection({ activeSystem, onSystemChange }: ParallelsSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Les Systèmes Parallèles
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {systems.map((system) => (
            <motion.div
              key={system.id}
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-xl cursor-pointer ${
                activeSystem === system.id ? 'ring-4 ring-blue-500' : ''
              }`}
              onClick={() => onSystemChange(system.id)}
            >
              <div className={`w-16 h-16 ${system.color} rounded-full flex items-center justify-center text-2xl mb-4`}>
                {system.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{system.title}</h3>
              <h4 className="text-lg text-blue-600 mb-3">{system.oceanTitle}</h4>
              <p className="text-gray-600">{system.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 