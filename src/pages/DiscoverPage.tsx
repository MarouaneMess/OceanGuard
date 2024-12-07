import { motion } from 'framer-motion'
import { DiscoverSection } from '../components/DiscoverSection'

export function DiscoverPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-16"
    >
      <DiscoverSection />
    </motion.div>
  )
} 