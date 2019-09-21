import React from 'react'
import data from '../assets/data'

const ShowWork = props => {
  console.log(data.works[props.id - 1])
  const workData = data.works[props.id - 1]
  return (
    <div className="show-work-wrapper">
      <div className="show-work">
        <h1>{workData.name}</h1>
        <p>{workData.descriptionLarge}</p>
        {workData.tech && workData.tech.length > 0 ? (
          <div className="tech">
            <h1>Technologies used</h1>
            <ul>
              {workData.tech.map(e => {
                return <li key={e}>{e}</li>
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