import { motion } from 'framer-motion'
import { DiscoverSection } from '../components/DiscoverSection'
import { OceanHealthSection } from '../components/OceanHealthSection'
import { HealthIndicators } from '../components/HealthIndicators'
import { ActionSection } from '../components/ActionSection'

export function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="min-h-screen pt-16 flex items-center relative overflow-hidden bg-gradient-to-b from-blue-600 to-blue-400">
        <div className="absolute inset-0 z-0">
          <div className="wave absolute bottom-0 left-0 right-0 h-64 bg-white/10" />
          <div className="wave absolute bottom-0 left-0 right-0 h-48 bg-white/5" 
               style={{ animationDelay: '-2s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              L'Océan est Notre Corps Planétaire
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Découvrez les liens fascinants entre l'océan et notre corps, 
              et apprenez comment protéger cet écosystème vital.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Sections principales */}
      <DiscoverSection />
      <OceanHealthSection />
      <HealthIndicators />
      <ActionSection />
    </motion.div>
  )
} 