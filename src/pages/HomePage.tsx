import { motion } from 'framer-motion'
import { ActionSection } from '../components/ActionSection'
import { Waves, Droplet, ThermometerSun, Globe, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-blob" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl animate-blob animation-delay-4000" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-8"
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
                <Waves className="w-4 h-4 mr-2" />
                Explorez l'Océan Différemment
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-6"
            >
              <span className="block text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-cyan-200 to-purple-300 leading-tight mb-4">
                L'Océan est Notre Corps
              </span>
              <span className="block text-4xl md:text-6xl font-bold text-blue-400">
                Planétaire
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-blue-100/80 text-center mb-12 max-w-3xl mx-auto"
            >
              Découvrez les liens fascinants entre notre corps et l'océan, 
              et apprenez comment nos destins sont intimement liés dans un équilibre fragile.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16"
            >
              <Link
                to="/discover"
                className="group px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center"
              >
                Commencer l'exploration
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/health"
                className="px-8 py-3 bg-white/10 backdrop-blur-md rounded-full font-semibold text-white hover:bg-white/20 transition-all duration-300"
              >
                État de santé
              </Link>
            </motion.div>

            {/* Feature Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {[
                {
                  icon: Globe,
                  title: "Impact Global",
                  description: "71% de la surface terrestre"
                },
                {
                  icon: Droplet,
                  title: "Source de Vie",
                  description: "50% de l'oxygène produit"
                },
                {
                  icon: ThermometerSun,
                  title: "Régulateur",
                  description: "93% de la chaleur absorbée"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  <div className="relative p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-blue-300 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-blue-100/80">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white/5" />
      </section>

      {/* Action Section */}
      <ActionSection />
    </motion.div>
  )
} 