import React, { Component } from 'react'
import Popup from './Popup'
import { HamburgerSpinReverse } from 'react-animated-burgers'

class Header extends Component {
  state = { show: false }
  render() {
    return (
      <div className="header">
        <div className="logo">
          <h1>Portofolio</h1>
        </div>
        <HamburgerSpinReverse
          isActive={this.state.show}
          buttonColor="transparent"
          barColor="#000000"
          onClick={() => this.setState({ show: !this.state.show })}
          className={'nav-menu ' + (this.state.show ? 'fixed' : '')}
        />
        {this.state.show ? <Popup /> : null}
        <div className="nav-buttons">
          <ul>
            <li>
              <a
                href="https://github.com/Rollo98"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/1-2a_SzsMYdg3H1R05vREsu25Qz2FSnEWvJ-cJ19Kw7E/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/roland-paiusan-107926190/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header

// var show = false

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="logo">
//         <h1>Portofolio</h1>
//       </div>
//       <input
//         onClick={() => (show = true)}
//         type="checkbox"
//         className="nav-menu"
//       />
//       <div className="nav-buttons">
//         <ul>
//           <li>GitHub</li>
//           <li>Resume</li>
//           <li>LinkedIn</li>
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Header
