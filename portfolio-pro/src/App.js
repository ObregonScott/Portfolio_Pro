import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Social from './components/Social'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />

      <Social/>
    </div>
  )
}

export default App