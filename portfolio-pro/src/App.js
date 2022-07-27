import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Social from './components/Social'
import About from './components/About'
import Skills from './components/Skills'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Social />
    </div>
  )
}

export default App