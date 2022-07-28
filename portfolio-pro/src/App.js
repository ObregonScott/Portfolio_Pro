import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Social from './components/Social'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Social />
    </div>
  )
}

export default App