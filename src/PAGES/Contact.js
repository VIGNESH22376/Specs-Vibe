import React from 'react'
import Header from '../Main Components/Header'
import Footer from '../Main Components/Footer'
import Whatsapp from '../Main Components/Whatsapp'
import './CSS/Contact.css'
import { NavLink } from 'react-router-dom'

//import Aos
import Aos from 'aos';

const Contact = () => {

  Aos.init();
  
  return (
    <>
      <Header />

      {/* Row-1 Contact*/}
      <div>
        <div className='Contact-r1-image'>

          {/* heading  */}
          <h3 className='Contact-r1-heading' data-aos="fade-up" data-aos-easing="linear"
            data-aos-duration="500" data-aos-once="true">Contact Us</h3>


          <div className='d-flex gap-3' data-aos="fade-up" data-aos-easing="linear"
            data-aos-duration="500" data-aos-once="true">
            <NavLink className='Contact-r1-small-heading' to='/'>HOME &gt;</NavLink>
            <p className='Contact-r1-small-heading'>CONTACT &gt;</p>
          </div>

        </div>

      </div>

      {/* Row-2 */}
      <div className='Contact-r2-container row '>

        {/* left side  */}
        <div className='Contact-r2-small-container1 col-lg-6'>
          <div className='Contact-r2-left-container'>

            <h3 className='Contact-r2-heading1'>CONTACT US</h3>
            <h4 className='Contact-r2-heading2'>Feel Free To Contact Us</h4>

            {/* Address */}
            <div className='d-flex'>

              {/* icon  */}
              <div className='d-flex align-items-center pe-2'>
                <i className="fa-solid fa-location-dot Contact-r2-icon"></i>
              </div>


              {/* Content  */}
              <div >
                <h4 className='About-r2-left-heading'>Our Office</h4>
                <p className='About-r2-left-para'>No: 1092, TNHB, Sithalapakkam, Chennai-126.</p>
              </div>
            </div>

            {/* Email*/}
            <div className='d-flex'>

              {/* icon  */}
              <div className='d-flex align-items-center'>
                <i className="fa-solid fa-envelope Contact-r2-icon"></i>
              </div>


              {/* Content  */}
              <div>
                <h4 className='About-r2-left-heading'>Email Us</h4>
                <p className='About-r2-left-para'>specsvibe@gmail.com</p>
              </div>
            </div>

            {/* Phone number */}
            <div className='d-flex'>

              {/* icon  */}
              <div className='d-flex align-items-center pe-2'>
                <i className="fa-solid fa-mobile Contact-r2-icon"></i>
              </div>


              {/* Content  */}
              <div>
                <h4 className='About-r2-left-heading'>Call Us</h4>
                <p className='About-r2-left-para'>+91 9962321727 / +91 9940311407</p>
              </div>
            </div>

            <h4 className='Contact-r2-heading3'>Home trials are available only in Chennai</h4>
          </div>

        </div>

        {/* Right side  */}
        <div className='Contact-r2-small-container1 col-lg-6'>

          {/* Map */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.202635045595!2d80.1719824744575!3d12.894687987413649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259002964d851%3A0xa6e18d0208c7b32a!2sTNHB%20Sithalapakkam!5e0!3m2!1sen!2sin!4v1727082144970!5m2!1sen!2sin" width="100%" height="505"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>

        </div>
      </div>
      <Whatsapp />
      <Footer />

    </>
  )
}

export default Contact
