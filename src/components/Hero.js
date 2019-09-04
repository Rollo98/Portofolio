import React from 'react'
import pc from '../assets/PC.svg'
import arrow from '../assets/arrow.svg'
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll,
  scrollSpy,
  scroller
} from 'react-scroll'

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="title">
          <h1>Hi! My name is Roland and I am a web developer!</h1>
        </div>
        <img className="pc" src={pc} alt="PC" />
      </div>
      <Link to="main" spy={true} smooth={true} duration={500}>
        <img className="arrow" src={arrow} alt="arrow" />
      </Link>
    </div>
  )
}

export default Hero