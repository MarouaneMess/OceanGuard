import { motion } from 'framer-motion'
import { Waves } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2 group">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative"
      >
        {/* Cercle principal */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center relative overflow-hidden">
          {/* Vagues animées */}
          <motion.div
            initial={{ y: 10 }}
            animate={{ 
              y: [10, -10, 10],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Waves 
              className="w-6 h-6 text-white/90" 
              strokeWidth={2.5}
            />
          </motion.div>

          {/* Effet de brillance */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>

        {/* Cercles décoratifs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -inset-1 rounded-full bg-blue-400/20 blur-sm"
        />
      </motion.div>

      {/* Texte du logo */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="flex flex-col"
      >
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          OceanGuard
        </span>
        <span className="text-xs text-blue-300/80 font-medium">
          Protégeons nos océans
        </span>
      </motion.div>
    </Link>
  )
} 