import React from 'react'
import left from '../assets/Ellipseleft.svg'
import right from '../assets/Polygonright.svg'

export default props => {
  return (
    <div>
      {/* <img src={left} id="left" /> */}
      {/* <img src={right} id="right" /> */}
      <div className="wrapper">{props.children}</div>
    </div>
  )
}
