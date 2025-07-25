import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import BanksPage from './pages/Banks/BanksPage'

function App() {
  return (
    <Router>
      <nav>
        <Link to="/banks">Bancos</Link>
      </nav>
      <Routes>
        <Route path="/banks" element={<BanksPage />} />
        <Route path="/" element={<h1>Bem-vindo ao VaultTrack</h1>} />
      </Routes>
    </Router>
  )
}

export default App
