import "./HeroImgStyles.css"

import React from 'react'
import IntroImg from '../assets/intro-bg.jpg'
import {Link} from 'react-router-dom'

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src= {IntroImg} alt="img" />
        </div>
        <div className="content">
            <p>Hi, I'm a web developer.</p>
            <h1>React Developer. </h1>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contacts</Link>
        </div>
    </div>
  )
}

export default Heroimg