import { Navigation } from './Navigation'
import { InteractiveInfographic } from './InteractiveInfographic'
import { DataVisualization } from './DataVisualization'
import { ProgressSystem } from './ProgressSystem'
import { InteractiveQuiz } from './InteractiveQuiz'
import { ActionSection } from './ActionSection'

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main>
        <section className="min-h-screen">
          <InteractiveInfographic />
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Comprendre les Données
            </h2>
            <DataVisualization />
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Votre Progression
            </h2>
            <ProgressSystem />
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Testez Vos Connaissances
            </h2>
            <InteractiveQuiz />
          </div>
        </section>

        <ActionSection />
      </main>
    </div>
  )
} 