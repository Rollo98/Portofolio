import React from 'react'
import data from '../assets/data'
import { FaLaptopCode, FaCode } from 'react-icons/fa'
import center from '../assets/center.svg'

const renderWorks = data => {
  if (!Array.isArray(data)) {
    return <h1>Data format does not comply with the design regulations.</h1>
  }
  var work = data.map(entry => (
    <div className="work" key={entry.id}>
      <div className="work-desc">
        <h1>{entry.name}</h1>
        <p>{entry.descriptionSmall}</p>
      </div>
      <div className="work-button">
        <button>
          {entry.code !== '' ? (
            <a href={entry.code} target="_blank" rel="noopener noreferrer">
              <FaCode className="icon" />
            </a>
          ) : null}
        </button>
        <button className="work-button-more">
          <a href={`work/${entry.id}`}>More details!</a>
        </button>
        <button>
          {entry.demo !== '' ? (
            <a href={entry.demo} target="_blank" rel="noopener noreferrer">
              <FaLaptopCode className="icon" />
            </a>
          ) : null}
        </button>
      </div>
    </div>
  ))
  return work
}

const Works = () => {
  return (
    <div className="work-wrapper">
      <h1 className="title-boxes">
        Work
        <div className="underline"></div>
      </h1>
      <img id="center" src={center} alt="center" />
      <div className="works">{renderWorks(data.works)}</div>
    </div>
  )
}

export default Works
