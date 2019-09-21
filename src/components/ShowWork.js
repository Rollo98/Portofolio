import React from 'react'
import data from '../assets/data'

const ShowWork = props => {
  if (data.works[props.id - 1] === undefined)
    return (window.location.href = process.env.PUBLIC_URL + '/404')
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
