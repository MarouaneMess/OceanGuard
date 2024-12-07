import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Palette } from 'lucide-react'

// Ajout d'une prop pour la version mobile
interface ThemeToggleProps {
  isMobile?: boolean
}

export function ThemeToggle({ isMobile = false }: ThemeToggleProps) {
  const [isModern, setIsModern] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  const toggleDesign = () => {
    setIsModern(!isModern)
    document.body.classList.toggle('retro-mode')
    localStorage.setItem('designMode', isModern ? 'retro' : 'modern')
  }

  useEffect(() => {
    const savedMode = localStorage.getItem('designMode')
    if (savedMode === 'retro') {
      setIsModern(false)
      document.body.classList.add('retro-mode')
    }
  }, [])

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative ${isMobile ? 'w-full' : ''}`}
    >
      {/* Tooltip seulement pour desktop */}
      {!isMobile && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl bg-gray-800/90 backdrop-blur-sm text-white text-sm whitespace-nowrap shadow-lg border border-white/10"
            >
              <div className="flex items-center space-x-2">
                <Palette className="w-4 h-4 text-blue-400" />
                <span>{isModern ? 'Design Moderne' : 'Design Rétro'}</span>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800 border-r border-b border-white/10" />
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Version mobile ou desktop du bouton */}
      <motion.button
        onClick={toggleDesign}
        className={`relative group ${
          isMobile 
            ? 'w-full flex items-center justify-between p-4 bg-white/5 rounded-xl'
            : ''
        }`}
        whileHover={{ scale: isMobile ? 1 : 1.05 }}
        whileTap={{ scale: isMobile ? 0.98 : 0.95 }}
      >
        {/* Version Mobile */}
        {isMobile && (
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-white/10">
              <Palette className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-white font-medium">Changer le design</span>
          </div>
        )}

        {/* Toggle Switch (adapté pour mobile) */}
        <div className={`relative ${isMobile ? 'w-14 h-8' : 'w-20 h-10'} rounded-xl bg-gray-800/80 backdrop-blur-sm p-1.5 shadow-inner border border-white/10`}>
          {/* Effet de brillance */}
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
          </div>

          {/* Fond animé */}
          <motion.div
            animate={{
              background: isModern 
                ? [
                    'linear-gradient(to right, #3b82f6, #06b6d4)',
                    'linear-gradient(to right, #8b5cf6, #3b82f6)',
                    'linear-gradient(to right, #06b6d4, #8b5cf6)'
                  ]
                : 'linear-gradient(to right, #6b7280, #4b5563)'
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 rounded-xl opacity-30"
          />

          {/* Curseur de toggle */}
          <motion.div
            animate={{ 
              x: isModern ? (isMobile ? 24 : 40) : 0,
              rotateY: isModern ? 180 : 0
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className={`${
              isMobile ? 'w-5 h-5' : 'w-7 h-7'
            } rounded-lg bg-white shadow-lg flex items-center justify-center relative`}
          >
            {/* Icônes avec rotation 3D */}
            <div className="relative w-full h-full">
              <motion.div
                animate={{ opacity: isModern ? 0 : 1, rotateY: isModern ? -180 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Moon className="w-4 h-4 text-gray-800" />
              </motion.div>
              <motion.div
                animate={{ opacity: isModern ? 1 : 0, rotateY: isModern ? 0 : 180 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Sun className="w-4 h-4 text-yellow-500" />
              </motion.div>
            </div>

            {/* Effet de brillance sur le curseur */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>

        {/* Indicateurs latéraux (seulement pour desktop) */}
        {!isMobile && (
          <div className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none text-[10px] font-medium">
            <span className={`transition-colors duration-300 ${!isModern ? 'text-gray-400' : 'text-white/50'}`}>
              
            </span>
            <span className={`transition-colors duration-300 ${isModern ? 'text-white' : 'text-gray-400'}`}>
              
            </span>
          </div>
        )}
      </motion.button>
    </motion.div>
  )
} 