import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RoseDay from './pages/RoseDay'
import './App.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RoseDay />} />
                <Route path="/rose-day" element={<RoseDay />} />
            </Routes>
        </Router>
    )
}

export default App
