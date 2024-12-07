import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Share2, Users, ArrowRight, ExternalLink } from 'lucide-react'

const actions = [
  {
    icon: Heart,
    title: "Engagez-vous",
    description: "Rejoignez notre communauté de défenseurs des océans",
    color: "from-red-500 to-pink-500",
    link: "/join",
    stats: "15K+ membres actifs"
  },
  {
    icon: Share2,
    title: "Partagez",
    description: "Diffusez les connaissances sur l'importance des océans",
    color: "from-blue-500 to-cyan-500",
    link: "/share",
    stats: "50K+ partages"
  },
  {
    icon: Users,
    title: "Agissez ensemble",
    description: "Participez à nos actions collectives de protection",
    color: "from-purple-500 to-indigo-500",
    link: "/act",
    stats: "100+ projets actifs"
  }
]


export function ActionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-blob" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-blue-500/20 rounded-full text-blue-300 mb-4">
            Impact Collectif
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
            Passez à l'Action
          </h2>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
            Chaque geste compte dans la protection de nos océans. 
            Découvrez comment vous pouvez contribuer à leur préservation.
          </p>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
        </motion.div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${action.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              <div className="relative p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex items-center justify-between mb-6">
                  <action.icon className="w-8 h-8 text-blue-400" />
                  <span className="text-sm text-blue-300">{action.stats}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{action.title}</h3>
                <p className="text-blue-100/80 mb-6">{action.description}</p>
                <a
                  href={action.link}
                  className="inline-flex items-center space-x-2 text-blue-300 hover:text-blue-200 transition-colors"
                >
                  <span>En savoir plus</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <a
            href="/donnate"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
          >
            <span>Faire un don</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
} 