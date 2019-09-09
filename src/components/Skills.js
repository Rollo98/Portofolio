import React from 'react'
import {
  FaJsSquare,
  FaCss3Alt,
  FaSass,
  FaLinux,
  FaCogs,
  FaNetworkWired,
  FaPython,
  FaJava,
  FaGithub
} from 'react-icons/fa'

const Skills = () => {
  return (
    <div>
      <h1 className="title-boxes">
        Skills
        <div className="underline"></div>
      </h1>
      <div className="skills">
        <div className="skill">
          <p>Experience</p>
          <ul>
            <li>
              Javascript <FaJsSquare className="icon" />
            </li>
            <li>
              CSS <FaCss3Alt className="icon" />
            </li>
            <li>
              Sass <FaSass className="icon" />
            </li>
            <li>
              Linux <FaLinux className="icon" />
            </li>
            <li>
              C/C++ <FaCogs className="icon" />
            </li>
          </ul>
        </div>
        <div className="skill">
          <p>Knowledge</p>
          <ul>
            <li>
              Networking <FaNetworkWired className="icon" />
            </li>
            <li>
              Python <FaPython className="icon" />
            </li>
            <li>
              Java <FaJava className="icon" />
            </li>
            <li>
              Git <FaGithub className="icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
