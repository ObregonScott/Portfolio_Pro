import React from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact';
import './app.css';

function App() {
  return (
    <main className='text-grey-400 bg-gray-900 body-font'>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
