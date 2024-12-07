import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Menu, X, Home, BookOpen, Activity, Compass, HelpCircle } from 'lucide-react'

const navItems = [
  { path: '/', label: 'Accueil', icon: Home },
  { path: '/explorer', label: 'Explorer', icon: Compass },
  { path: '/quiz', label: 'Quiz', icon: HelpCircle },
  { path: '/learn', label: 'Apprendre', icon: BookOpen },
  { path: '/health', label: 'Santé Océanique', icon: Activity },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = (window.scrollY / totalScroll) * 100
      setScrollProgress(currentProgress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-lg"
      >
        {/* Barre de progression */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-blue-600" style={{ width: `${scrollProgress}%` }} />

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              OcéanVie
            </Link>

            {/* Navigation desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors
                    ${activeSection === item.path ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600'}`}
                  onClick={() => setActiveSection(item.path)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Menu mobile */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Menu mobile déroulant */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg mb-2
                    ${activeSection === item.path ? 'text-blue-600 bg-blue-50' : 'text-gray-600'}`}
                  onClick={() => {
                    setActiveSection(item.path)
                    setIsOpen(false)
                  }}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}