import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { HomePage } from './pages/HomePage'
import { QuizPage } from './pages/QuizPage'
import { ExplorerPage } from './pages/ExplorerPage'
import { TopicDetailPage } from './pages/TopicDetailPage'
import { OceanHealthSection } from './components/OceanHealthSection'

function App() {
  return (
    <Router basename="/">
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/explorer" element={<ExplorerPage />} />
          <Route path="/topic/:topicId" element={<TopicDetailPage />} />
          <Route path="/health" element={<OceanHealthSection />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App