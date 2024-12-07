import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { HomePage } from './pages/HomePage'
import { QuizPage } from './pages/QuizPage'
import { ExplorerPage } from './pages/ExplorerPage'
import { TopicDetailPage } from './pages/TopicDetailPage'
import { DiscoverPage } from './pages/DiscoverPage'
import { HealthPage } from './pages/HealthPage'
import { DataPage } from './pages/DataPage'

function App() {
  return (
    <Router basename="/">
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/explorer" element={<ExplorerPage />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/health" element={<HealthPage />} />
          <Route path="/data" element={<DataPage />} />
          <Route path="/topic/:topicId" element={<TopicDetailPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App