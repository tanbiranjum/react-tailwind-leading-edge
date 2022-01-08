import Nav from './components/Nav'
import Home from './pages/Home'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Developing from './pages/Developing'
import Graphics from './pages/Graphics'
import MotionGraphics from './pages/MotionGraphics'
import CyberSecurity from './pages/CyberSecurity'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App w-5/6 m-auto">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />}>
            <Route path="web-developing" element={<Developing />} />
            <Route path="graphics-design" element={<Graphics />} />
            <Route path="motion-graphics" element={<MotionGraphics />} />
            <Route path="cyber-security" element={<CyberSecurity />} />
          </Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
