import { motion } from 'framer-motion'
import { HealthIndicators } from '../components/HealthIndicators'
import { OceanHealthSection } from '../components/OceanHealthSection'

export function HealthPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-0"
    >
      <HealthIndicators />
      <OceanHealthSection />
    </motion.div>
  )
} 