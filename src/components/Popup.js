import React from 'react'

const Popup = props => {
  return (
    <div className="menu">
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
  )
}

export default Popup
