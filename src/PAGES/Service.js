import React from 'react'
import Header from '../Main Components/Header'
import Footer from '../Main Components/Footer'
import Whatsapp from '../Main Components/Whatsapp'
import './CSS/Service.css'

import { NavLink } from 'react-router-dom'

//import Aos
import Aos from 'aos';

// import Images 
import Image1 from '../IMAGES/Services/service about.jpg'

//import component
import GetYourEyes from '../Components/Home/GetYourEyes'
import Clients from '../Components/Home/Clients'

//import Data
import { ServiceStrong,ServiceTerms } from '../Data/ServiceData'

//import Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSuitcaseMedical, faStar, faPeopleGroup, faLeaf, faHeart, faUserTie, faUserDoctor, faHandshake } from '@fortawesome/free-solid-svg-icons'


const iconmap = {
  faUser: faUser,
  faSuitcaseMedical: faSuitcaseMedical,
  faStar: faStar,
  faPeopleGroup: faPeopleGroup,
  faLeaf: faLeaf,
  faHeart: faHeart,
  faUserTie: faUserTie,
  faUserDoctor: faUserDoctor,
  faHandshake: faHandshake
}

const Service = () => {

  Aos.init();

  return (
    <>
      <Header />

      {/* Row-1 Product*/}
      <div>
        <div className='Service-r1-image'>

          {/* heading  */}
          <h3 className='Service-r1-heading' data-aos="fade-up" data-aos-easing="linear"
            data-aos-duration="500" data-aos-once="true">Services</h3>


          <div className='d-flex gap-3' data-aos="fade-up" data-aos-easing="linear"
            data-aos-duration="500" data-aos-once="true">
            <NavLink className='Service-r1-small-heading' to='/'>HOME &gt;</NavLink>
            <p className='Service-r1-small-heading'>SERVICES &gt;</p>
          </div>

        </div>

      </div>

      {/* Row-2 What we do  */}
      <div className=' container-fluid'>


        <div className='row Service-r2-container'>
          {/* Left side  */}
          <div className='col-12 col-md-7 col-lg-7 Service-r2-left-container ' data-aos="fade-up" data-aos-easing="linear"
            data-aos-duration="500" data-aos-once="true" >

            {/* Heading  */}
            <h3 className='Service-r2-heading1'>WHAT WE DO</h3>
            <h2 className='Service-r2-heading2'>We are ready at your door step</h2>

            {/* para content */}
            <p className='Service-r2-para'>
              "Look good, see great, with Specs Vibe."<br />
              Experience the future of eye care today. At Specs Vibe, we combine innovative solutions, advanced technologies, and personalized attention to transform your vision and enrich your life. Our comprehensive eye care services prioritize your unique needs, ensuring a clearer, brighter tomorrow.</p>

            {/* List content  */}
            <p className='Service-r2-list-heading'>Home visits may require specialized equipment, such as:</p>
            <ul>
              <li className='Servicep-r2-list'>Portable autorefractors machine</li>
              <li className='Servicep-r2-list'>Handheld retinoscopes</li>
              <li className='Servicep-r2-list'>Visual acuity charts</li>
            </ul>

            <p className='Service-r2-para'>Home visits can be beneficial for patients who face barriers in accessing traditional clinical settings, enhancing eye care accessibility and convenience.</p>

          </div>

          {/* Right side  */}

          <div className='col-12 col-md-5 col-lg-5 p-0'>

            {/* Image  */}
            <img src={Image1} alt='About' className='Service-r2-image' />
          </div>
        </div>
      </div>

      {/* Row-3 get your Eyes  */}
      <GetYourEyes />

      {/* Row-4 Stay strong  */}
      <div className='container-fluid Service-r4-container'>

        {/* top content  */}
        <div className='Service-r4-small-container1'>
          <h3 className='Service-r4-heading1'>HOW WE HELP YOU STAY STRONG</h3>
          <h2 className='Service-r4-heading2'>We demonstrate care for the customer in the following ways:</h2>
        </div>

        {/* card */}
        <div className='row Service-r4-card-div'>
          {
            ServiceStrong.map(record => {
              return (
                <div key={record.id} className='col-11 col-md-5 col-lg-3 Service-r4-card-container' data-aos="fade-up" data-aos-easing="linear"
                  data-aos-duration="500" data-aos-once="true">

                  {/* icon  */}
                  <div className='Service-r4-icon-div'>
                    {<FontAwesomeIcon icon={iconmap[record.icon]} className='Service-r4-icon' />}
                  </div>

                  {/* Content  */}
                  <h3 className='Service-r4-card-heading'>{record.heading}</h3>
                  <p className='Service-r4-card-para'>{record.caption}</p>
                </div>
              )
            })
          }

        </div>
      </div>

      {/* Row-5 Terms and Condtion  */}
      <div className='Service-r5-container'>

        {/* horizontal line  */}
        <div className='Service-r5-hr-line-div'>
          <hr className='Service-r5-hr-line'></hr>
        </div>

        <div>
          {/* top content  */}
          <div className='Service-r5-small-container'>
            <h3 className='Service-r5-heading1'>TERMS AND CONDITIONS</h3>
            <h2 className='Service-r5-heading2'>Payment & Return Policy</h2>
          </div>

          {/* card  */}
          <div className='row Service-r5-small-container'>
            {
              ServiceTerms.map(record =>{
                return(
                  <div key={record.id} className='col-12 col-lg-6'>

                    {/* content  */}
                    <h3 className='Service-r5-card-heading'>{record.heading}</h3>
                    <p className='Service-r5-card-para'>{record.para}</p>
                  </div>
                )
              })
            }

          </div>
        </div>

      </div>

      {/* Row-6 Slider  */}
      <Clients/>

      <Whatsapp />
      <Footer />

    </>
  )
}

export default Service
