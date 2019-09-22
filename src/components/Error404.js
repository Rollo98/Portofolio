import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

const Error404 = () => {
  return (
    <div className="error">
      <div
        className="back-button"
        onClick={() => (window.location.href = process.env.PUBLIC_URL + '/')}
      >
        <FaArrowLeft className="back-icon" />
      </div>
      <h1>
        404 <br /> Page not found!
      </h1>
      <h1>-</h1>
      <p>I find your lack of navigation disturbing</p>
    </div>
  )
}

export default Error404
