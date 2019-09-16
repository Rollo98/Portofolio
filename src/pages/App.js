import React from 'react'
import left from '../assets/left1.svg'
import right from '../assets/right1.svg'

export default props => {
  return (
    <div>
      <img src={left} id="left" alt="left" />
      <img src={right} id="right" alt="right" />
      <div className="wrapper">{props.children}</div>
    </div>
  )
}
