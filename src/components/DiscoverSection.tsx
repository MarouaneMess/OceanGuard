import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Waves, Fish, Thermometer, Droplet } from 'lucide-react'
import { Link } from 'react-router-dom'

export function DiscoverSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="relative overflow-hidden py-20" ref={ref}>
      {/* Vagues d'arrière-plan animées */}
      <div className="absolute inset-0 z-0">
        <div className="wave absolute bottom-0 left-0 right-0 h-20 bg-blue-400/20" />
        <div className="wave absolute bottom-0 left-0 right-0 h-16 bg-blue-300/20" 
             style={{ animationDelay: '-2s' }} />
        <div className="wave absolute bottom-0 left-0 right-0 h-12 bg-blue-200/20"
             style={{ animationDelay: '-4s' }} />
      </div>

      <div className="section-container relative z-10">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Découvrez l'Océan
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {/* Cartes thématiques */}
          <Link to="/topic/currents">
            <motion.div variants={itemVariants} className="card p-6 group">
              <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
                <div className="absolute inset-0 ocean-gradient opacity-80 group-hover:opacity-100 transition-opacity" />
                <Waves className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Courants Marins</h3>
              <p className="text-gray-600">Découvrez comment les courants océaniques influencent notre climat.</p>
            </motion.div>
          </Link>

          <Link to="/topic/biodiversity">
            <motion.div variants={itemVariants} className="card p-6 group">
              <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
                <div className="absolute inset-0 ocean-gradient opacity-80 group-hover:opacity-100 transition-opacity" />
                <Fish className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Biodiversité</h3>
              <p className="text-gray-600">Explorez la richesse de la vie marine et son importance.</p>
            </motion.div>
          </Link>

          <motion.div variants={itemVariants} className="card p-6 group">
            <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
              <div className="absolute inset-0 ocean-gradient opacity-80 group-hover:opacity-100 transition-opacity" />
              <Thermometer className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Température</h3>
            <p className="text-gray-600">Comprenez l'impact du réchauffement sur les océans.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="card p-6 group">
            <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
              <div className="absolute inset-0 ocean-gradient opacity-80 group-hover:opacity-100 transition-opacity" />
              <Droplet className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Chimie Marine</h3>
            <p className="text-gray-600">Étudiez la composition et les propriétés de l'eau de mer.</p>
          </motion.div>
        </motion.div>

        {/* Section interactive */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="card p-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Explorer en Profondeur</h3>
                <p className="text-gray-600 mb-6">
                  Plongez dans une expérience interactive unique pour découvrir les mystères de l'océan.
                </p>
                <Link to="/explorer" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow">
                  Commencer l'exploration
                </Link>
              </div>
              <div className="relative h-64">
                {/* Animation d'onde interactive */}
                <div className="absolute inset-0 bg-blue-100 rounded-xl overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-blue-400/20"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 