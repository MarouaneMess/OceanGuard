import { motion } from 'framer-motion'
import { DataVisualization } from '../components/DataVisualization'

export function DataPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-16"
    >
      <DataVisualization />
    </motion.div>
  )
} 