import React from 'react'
import data from '../assets/data'
import { FaLaptopCode, FaCode, FaArrowLeft } from 'react-icons/fa'

const ShowWork = props => {
  if (data.works[props.id - 1] === undefined)
    return (window.location.href = process.env.PUBLIC_URL + '/404')
  console.log(data.works[props.id - 1])
  const workData = data.works[props.id - 1]
  return (
    <div className="show-work-wrapper">
      <div
        className="back-button"
        onClick={() => (window.location.href = process.env.PUBLIC_URL + '/')}
      >
        <FaArrowLeft className="back-icon" />
      </div>
      <div className="show-work">
        <div className="show-work-button">
          {workData.code !== '' ? (
            <button>
              <a href={workData.code} target="_blank" rel="noopener noreferrer">
                GitHub code - <FaCode className="icon" />
              </a>
            </button>
          ) : null}
          {workData.demo !== '' ? (
            <button>
              <a href={workData.demo} target="_blank" rel="noopener noreferrer">
                Live Demo - <FaLaptopCode className="icon" />
              </a>
            </button>
          ) : null}
        </div>
        <h1>{workData.name}</h1>
        <p>{workData.descriptionLarge}</p>
        {workData.tech && workData.tech.length > 0 ? (
          <div className="tech">
            <h1>Technologies used</h1>
            <ul>
              {workData.tech.map((e, i) => {
                if (workData.tech.length === i + 1) {
                  return <li key={e}>{e}</li>
                } else {
                  return <li key={e}>{e}, </li>
                }
              })}
            </ul>
          </div>
        ) : (
          ''
        )}
        <img
          src={workData.img}
          className={workData.id === 3 ? 'img' : ''}
          alt="work"
        />
      </div>
    </div>
  )
}

export default ShowWork
