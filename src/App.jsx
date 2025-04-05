import React from 'react'
import Header from './Pages/Header'
import Footer from './Pages/Footer'
import About from './Components/About'
import Hero from './Components/Hero'
import Sustainability from './Components/Sustainability'
import Process from './Components/Process'
import Questions from './Components/Questions'
import Brands from './Components/Brands'
import Work from './Components/Work'
import Contact from './Components/Contact'
import Location from './Components/Locations'

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Sustainability />
      <Process />
      <Questions />
      <Brands/>
      <Work/>
      <Contact/>
      <Location/>
      <Footer />
    </>

  )
}

export default App