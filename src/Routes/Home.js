import React from 'react'
import Navbar from '../Components/Navbar'
import HeroImg from '../Components/Heroimg'
import Footer from '../Components/Footer'
import Work from '../Components/Work'

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroImg />
        <Work/>
        <Footer />
    </div>
  )
}

export default Home