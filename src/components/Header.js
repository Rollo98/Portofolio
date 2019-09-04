import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      {/* <div className="nav-buttons">
        <ul>
          <li>GitHub</li>
          <li>Resume</li>
          <li>LinkedIn</li>
        </ul>
      </div> */}
    </div>
  )
}

export default Header
