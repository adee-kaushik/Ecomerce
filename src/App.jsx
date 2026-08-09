import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Banner from './Components/Banner'
import Products from './Components/Products'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div  className='overflow-x-hidden' >
      <Navbar/>
      <Hero/>
      <Banner/>
      <Products/>
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
