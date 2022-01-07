import Nav from './components/Nav'
import Home from './pages/Home'
import Footer from './components/Footer'
import Contact from './components/Contact'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App w-5/6 m-auto">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
