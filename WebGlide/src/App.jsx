import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import About from './components/About'
import Contact from "./components/Contact"
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <>
     <Router>

      <Routes>
        <Route path="/" element={
          <>
          <Navbar />
            <Hero />
            <Services />
            <Pricing />
            <About />
            <Footer />
          </>
        } />

        <Route path="/contact" element={
          <>
            <Contact />
          </>
        } />
      </Routes>
    </Router>
    </>
  )
}

export default App