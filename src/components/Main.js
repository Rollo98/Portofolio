import React from 'react'

import Header from './Header'
import Hero from './Hero'
import Skills from './Skills'
import Works from './Works'
import Footer from './Footer'

import left from '../assets/left1.svg'
import right from '../assets/right1.svg'

import arrow from '../assets/arrowGrad.svg'
import { Link } from 'react-scroll'

const Main = () => {
  return (
    <div>
      <img src={left} id="left" alt="left" />
      <img src={right} id="right" alt="right" />
      <div className="background">
        <Header />
        <Hero />
      </div>
      <Link to="skill-wrapper" spy={true} smooth={true} duration={500}>
        <img className="arrow" src={arrow} alt="arrow" />
      </Link>
      <Skills />
      <Works />
      <Footer />
    </div>
  )
}

export default Main
