import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer'></Title>
      <Programs></Programs> 
      <About></About>
      <Title subTitle='Gallery' title='Campus Photos'></Title>
      <Campus></Campus>
      <Title subTitle='Testimonials' title='What Students Says'></Title>
      <Testimonials></Testimonials>
      <Title subTitle='Contact Us' title='Get in Touch'></Title>
      <Contact></Contact>
      <Footer></Footer>
      </div>
    </div>
  )
}

export default App
