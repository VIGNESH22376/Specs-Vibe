import React from 'react'
import './Footercomponent.css'

//import Images
import logo from '../IMAGES/Header/logo.png'
import { NavLink } from 'react-router-dom'
const Footercomponent = () => {
  return (
    <>

      <div className='container-fluid'>

        {/* top-footer */}
        <div className='row footer-top-container'>

          {/* Logo with content  */}
          <div className='col-12 col-md-8 col-lg-5 footer-sub-div'>

            <NavLink to="/"><img src={logo} alt="Specs vibe logo" className='footer-logo' /></NavLink>
            <h3 className='footer-logo-content'>Specsvibe offering a one-stop-shop for patients' eye care and optical needs at your home.</h3>

          </div>

          {/* Quick Links  */}
          <div className='col-12 col-md-5 col-lg-2 footer-sub-div footer-get-div'>
            <div>

              {/* heading  */}
              <h3 className='footer-heading'>Quick Links</h3>

              <li className='footer-list'>
                <NavLink to='/' className='footer-link'> Home</NavLink>
              </li>

              <li className='footer-list'>
                <NavLink to='/about' className='footer-link'>About Us</NavLink>
              </li>

              <li className='footer-list'>
                <NavLink to='/product' className='footer-link'>Products</NavLink>
              </li>

              <li className='footer-list'>
                <NavLink to='/service' className='footer-link'>Services</NavLink>
              </li>

              <li className='footer-list'>
                <NavLink to='/contact' className='footer-link'>Contact Us</NavLink>
              </li>
            </div>

          </div>

          {/* Get in Touch  */}
          <div className='col-12 col-md-6 col-lg-5 footer-sub-div footer-get-div'>
            <div>

              {/* heading */}
              <h3 className='footer-heading'>Get in Touch</h3>

              {/* Address */}
              <li className='footer-list'>
                <i className="fa-solid fa-location-dot footer-icon"></i>
                <span className='footer-contact'>No:1092,TNHB,Sithalapakkam,Chennai-126.</span>
              </li>


              {/* E-mail */}
              <li className='footer-list'>
                <i className="fa-solid fa-envelope footer-icon"></i>
                <a className='footer-contact footer-contact-email' href='mailto: specsvibe@gmail.com'>specsvibe@gmail.com</a>
              </li>

            {/* Phone number */}
              <li className='footer-list'>
                <i className="fa-solid fa-phone footer-icon"></i>
                <span className='footer-contact'>+919962321727 / +919940311407</span>
              </li>
            </div>

          </div>

        </div>

        {/* bottom-footer */}
        <div className='row '>
          <div className='footer-bottom-container'>
            <div className='d-flex'>

              {/* cpoy right symbol  */}
              <p className='footer-copyright'>&copy;</p>

              <NavLink className='footer-specvibe' to='/'>Specsvibe</NavLink>

              <p className='footer-copyright'>. All Rights Reserved.</p>
            </div>

            {/* hubsem content  */}
            <p className='footer-hubsem'>Created by <b ><a href='https://hubsem.com/' target='_blank' className='footer-hubsem-bold' rel="noreferrer">Hubsem</a></b></p>
          </div>

        </div>
      </div>

    </>
  )
}

export default Footercomponent

