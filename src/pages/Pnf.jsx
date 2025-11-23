import React from 'react'
import { Link } from 'react-router-dom'


function Pnf() {
  return (
    <div style={{height:'80vh'}} className='d-flex justify-content-center align-items-center flex-column'>
      <h1 className="fw-bolder">404</h1>
      <img width={'25%'} src="https://i.pinimg.com/originals/e4/30/10/e430101033efff9a294eaafecbac846a.gif" alt="Page not found" />
      <h4>Look Like you're Lost</h4>
      <p>The page you are looking is not available </p>
      <Link to={'/'} className='btn btn-secondary'>Back to Home</Link>

    </div>
  )
}

export default Pnf