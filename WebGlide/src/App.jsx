import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import About from './components/About'


const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Services />
    <Pricing />
    <About />
    </>
  )
}

export default App