import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Social from './components/Social'
import About from './components/About'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Social />
    </div>
  )
}

export default App