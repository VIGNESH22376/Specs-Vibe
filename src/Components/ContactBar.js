import React from 'react'
import { NavLink } from 'react-router-dom'
import './ContactBar.css'

// import images
import logo from '../IMAGES/Header/logo.png'

const ContactBar = () => {
    return (
        <>
            <div className='container-fluid contactBar-container'>

                {/* Logo and Address */}
                <div className='row contactBar-sml-cont '>

                    <div className='row col-12 col-md-6 col-lg-6 '>
                        {/* Logo */}
                        <div className='col-lg-6'>
                            <NavLink to="/" >
                                <img src={logo} alt='specs vibe logo' className='cb-logo' />
                            </NavLink>
                        </div>

                        {/* Address */}
                        <div className='col-lg-6 d-lg-block d-none p-0'>
                            <div className='  cb-info-container ps-1'>
                                <div><i className="fa-solid fa-map cb-icon"></i></div>
                                <NavLink to="/contact" className="cb-info">
                                    No: 1092, TNHB, Sithalapakkam, Chennai-126.</NavLink>
                            </div>
                        </div>
                    </div>

                    {/* Email and Phone Number  */}

                    <div className='col-6 col-md-5 col-lg-6 d-none d-md-block '>
                        <div className='col-12 row'>
                            {/* Email */}
                            <div className='col-md-10 col-lg-7  cb-info-container'>
                                <div><i className="fa-solid fa-paper-plane cb-icon"></i></div>
                                <a href='mailto:specsvibe@gmail.com' className="cb-info">Email: specsvibe@gmail.com</a>

                            </div>

                            {/* Phone Number */}
                            <div className='col-md-10 col-lg-5   cb-info-container order-first order-lg-1'>
                                <div><i className="fa-solid fa-phone cb-icon"></i></div>
                                <a href='tel:+919962321727' className="cb-info">Phone: +919962321727</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ContactBar
