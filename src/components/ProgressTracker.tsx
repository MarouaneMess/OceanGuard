import { useState, useEffect } from 'react'

export function ProgressTracker() {
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      
      let completed = 0
      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        if (rect.top < windowHeight * 0.5) completed++
      })
      
      setProgress((completed / sections.length) * 100)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 w-2">
      <div className="h-32 bg-gray-200 rounded-full">
        <div 
          className="bg-blue-600 rounded-full transition-all duration-300"
          style={{ height: `${progress}%` }}
        />
      </div>
    </div>
  )
}