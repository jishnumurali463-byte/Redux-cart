import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight, faTruckFast, faPhone, faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook, faTwitter, faWhatsapp, faInstagram
} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div style={{ height: '350px' }}
      className='bg-secondary d-flex justify-content-center align-items-center flex-column text-light'>
      
      <div className='d-flex justify-content-evenly w-100'>

        {/* Intro */}
        <div style={{ width: '400px' }} className="intro">
          <h3>
            <FontAwesomeIcon icon={faTruckFast} /> Daily Cart
          </h3>
          <p>Designed and built with all the love in the world by the Luminar team.</p>
          <p>Code licensed to Luminar, docs CC BY 3.0</p>
          <p>Currently v5.3.2.</p>
        </div>

        {/* Links */}
        <div className="links d-flex flex-column">
          <h3>Links</h3>
          <Link to='/' className='text-decoration-none text-light'>Home</Link>
          <Link to='/wishlist' className='text-decoration-none text-light'>Wishlist</Link>
          <Link to='/cart' className='text-decoration-none text-light'>Cart</Link>
        </div>

        {/* Guides */}
        <div className="links d-flex flex-column">
          <h3>Guides</h3>
          <a href='https://redux.js.org/' className='text-decoration-none text-light'>Redux</a>
          <a href='https://react-bootstrap.netlify.app/' className='text-decoration-none text-light'>React Bootstrap</a>
          <a href='https://react-redux.js.org/' className='text-decoration-none text-light'>React Redux</a>
          <a href='https://reactrouter.com/' className='text-decoration-none text-light'>React Router DOM</a>
        </div>

        {/* Contact */}
        <div className="d-flex flex-column">
          <h3>Contact us</h3>
          <div className="d-flex">
            <input type="text" placeholder='Email here'
              className="form-control" />
            <button className="btn">
              <FontAwesomeIcon icon={faArrowRight} className='text-light' />
            </button>
          </div>

          <div className="mt-3 d-flex justify-content-between">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faWhatsapp} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faPhone} />
          </div>
        </div>

      </div>

      <p className='fw-bolder mt-3'>
        Copyright © July 2025 Batch, Daily Cart. Built with React & Redux.
      </p>
    </div>
  )
}

export default Footer
