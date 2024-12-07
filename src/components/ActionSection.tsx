import { motion } from 'framer-motion'
import { ArrowRight, Heart, Share2, Users } from 'lucide-react'

const actions = [
  {
    title: "Agir Maintenant",
    description: "Découvrez les actions concrètes pour protéger l'océan",
    icon: Heart,
    link: "#actions",
    color: "bg-red-500"
  },
  {
    title: "Partager",
    description: "Sensibilisez votre entourage à l'importance de l'océan",
    icon: Share2,
    link: "#share",
    color: "bg-blue-500"
  },
  {
    title: "Rejoindre",
    description: "Participez à des initiatives de protection",
    icon: Users,
    link: "#join",
    color: "bg-green-500"
  }
]

export function ActionSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Passez à l'Action
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {actions.map((action, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6"
            >
              <div className={`${action.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{action.title}</h3>
              <p className="text-gray-300 mb-4">{action.description}</p>
              <a 
                href={action.link}
                className="inline-flex items-center text-white hover:underline"
              >
                En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center"
        >
          <a 
            href="#donate"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors"
          >
            Soutenez nos Actions
          </a>
        </motion.div>
      </div>
    </section>
  )
} 