import React from 'react'
import data from '../assets/data'

const renderWorks = (data = []) => {
  if (!Array.isArray(data)) {
    return <h1>Data format does not comply with the design regulations.</h1>
  }
}

const Works = () => {
  return (
    <div>
      <h1 className="title-boxes">
        Works
        <div className="underline"></div>
      </h1>
      <div className="works">{renderWorks(data.works)}</div>
    </div>
  )
}

export default Works
