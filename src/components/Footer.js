import React from 'react'
import { MdLocationOn, MdContactMail } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoIosPaper } from 'react-icons/io'
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="location">
          <h1>Location</h1>
          <p>
            <MdLocationOn className="footer-icon" /> Timisoara, Romania
          </p>
        </div>
        <div className="contact">
          <h1>Contact</h1>
          <p>
            <a href="mailto:roland.paiusan98@gmail.com">
              <MdContactMail className="footer-icon" />{' '}
              roland.paiusan98@gmail.com
            </a>
          </p>
        </div>
        <div className="social">
          <h1>Social</h1>
          <ul>
            <li>
              <a
                href="https://github.com/Rollo98"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/1-2a_SzsMYdg3H1R05vREsu25Qz2FSnEWvJ-cJ19Kw7E/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoIosPaper />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/roland-paiusan-107926190/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
