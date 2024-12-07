import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, BarChart, HelpCircle, Heart } from 'lucide-react'

const navItems = [
  { path: '/', label: 'Accueil', icon: Home },
  { path: '/data', label: 'Données', icon: BarChart },
  { path: '/quiz', label: 'Quiz', icon: HelpCircle },
]

const actionItems = [
  { path: '/donate', label: 'Faire un don', icon: Heart, highlight: true },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/80 backdrop-blur-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center"
            >
              <span className="text-white font-bold text-xl">O</span>
            </motion.div>
            <span className="text-white font-bold text-xl hidden sm:block">
              OceanBody
            </span>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Navigation Items */}
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-xl group transition-all duration-300 ${
                    isActive 
                      ? 'text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <item.icon className={`w-5 h-5 transition-colors ${
                      isActive ? 'text-blue-400' : 'text-gray-400 group-hover:text-blue-400'
                    }`} />
                    <span>{item.label}</span>
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-white/10 rounded-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              )
            })}

            {/* Separator */}
            <div className="w-px h-8 bg-white/10 mx-2" />

            {/* Action Items */}
            {actionItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-4 py-2 rounded-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl ${
                    item.path === '/donate'
                      ? 'bg-gradient-to-r from-red-500 to-pink-500'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                  } hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300`}
                >
                  <item.icon className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">{item.label}</span>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-gray-900/95 backdrop-blur-lg"
          >
            <div className="container mx-auto px-4 py-4">
              {/* Navigation Items Mobile */}
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl mb-2 transition-all ${
                      isActive
                        ? 'bg-white/10 text-white'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <item.icon className={`w-5 h-5 ${
                      isActive ? 'text-blue-400' : 'text-gray-400'
                    }`} />
                    <span>{item.label}</span>
                  </Link>
                )
              })}

              {/* Separator Mobile */}
              <div className="h-px bg-white/10 my-4" />

              {/* Action Items Mobile */}
              {actionItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl mb-2 ${
                    item.path === '/donate'
                      ? 'bg-gradient-to-r from-red-500 to-pink-500'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                  }`}
                >
                  <item.icon className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}