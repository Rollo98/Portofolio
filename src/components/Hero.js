import React from 'react'
import arrow from '../assets/arrowGrad.svg'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero">
        <div className="title">
          <h1>Hi! My name is Roland and I am a web developer!</h1>
        </div>
        <div className="subtitle">
          <h2>
            Click the button or scroll down to see my work and skills. Contact
            me if you are interested in my work. Have a good day!
          </h2>
        </div>
      </div>
      <Link to="skill-wrapper" spy={true} smooth={true} duration={500}>
        <img className="arrow" src={arrow} alt="arrow" />
      </Link>
    </div>
  )
}

export default Hero
