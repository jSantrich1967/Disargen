import React from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Industries from './components/Industries'
import VideoShowcase from './components/VideoShowcase'
import Contact from './components/Contact'
import Footer from './components/Footer'

const Reveal = ({ children, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
)

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        
        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <Services />
        </Reveal>

        <Reveal>
          <Industries />
        </Reveal>

        <Reveal>
          <VideoShowcase />
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </div>
  )
}

export default App
