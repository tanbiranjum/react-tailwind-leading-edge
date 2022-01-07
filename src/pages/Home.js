import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className="w-5/6 m-auto">
      <Nav />
      <Hero />
      <Services />
      <About />
      <Footer />
      <Contact />
    </div>
  )
}

export default Home
