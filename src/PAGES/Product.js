import React from 'react'
import Header from '../Main Components/Header'
import Footer from '../Main Components/Footer'
import Whatsapp from '../Main Components/Whatsapp'

import './CSS/Product.css'

import { NavLink } from 'react-router-dom'

//import Pages
import GetYourEyes from '../Components/Home/GetYourEyes'

//import Aos
import Aos from 'aos';

// import Data
import { ProductLences, Productframe, Productlist } from '../Data/ProductData'

//import images
import contactlens from '../IMAGES/Product/contact-lens.png'
import glass from '../IMAGES/Product/glasses-for-sun-protection.png'

const Product = () => {

  Aos.init();

  return (
    <>
      <Header />

      {/* Row-1 Product*/}
      <div>
        <div className='Product-r1-image'>

          {/* heading  */}
          <h3 className='Product-r1-heading' data-aos="fade-up" data-aos-easing="linear"
            data-aos-duration="500" data-aos-once="true">Product Us</h3>


          <div className='d-flex gap-3' data-aos="fade-up" data-aos-easing="linear"
            data-aos-duration="500" data-aos-once="true">
            <NavLink className='Product-r1-small-heading' to='/'>HOME &gt;</NavLink>
            <p className='Product-r1-small-heading'>PRODUCT &gt;</p>
          </div>

        </div>

      </div>

      {/* Row-2 Optical lenses */}
      <div className='Product-r2-container'>

        {/* content */}
        <h3 className='Product-r2-heading1'>OPTICAL LENSES</h3>
        <h4 className='Product-r2-heading2'>Help You See Better</h4>
        <p className='Product-r2-para'>Optical lenses are transparent devices that refract light to correct vision problems, magnify objects, or redirect light. They come in various types each designed to address specific vision needs and improve visual clarity.</p>


        {/* Card */}
        <div className='Product-r2-grid'>
          {
            ProductLences.map(record => {
              return (
                <div key={record.id} className='Product-r2-child'>

                  {/* image  */}
                  <div className='Product-card-image-container'>

                    {/* circle  */}
                    <div className='product-card-image-circle'>
                    </div>

                    {/* image  */}
                    <div className='Product-card-image-div'>
                      <img src={contactlens} className='Product-card-image' alt='lens' />
                    </div>

                  </div>

                  <div >

                    {/* heading */}
                    <h3 className='Product-r2-card-heading'>{record.heading}</h3>
                    {/* para  */}
                    <p className='Product-r2-card-para'>{record.para}</p>
                  </div>

                </div>
              )
            })
          }

        </div>

      </div>

      {/* Row-3 What we have  */}
      <div className='Product-r3-container'>
        {/* content */}
        <h3 className='Product-r3-heading1'>WHAT WE HAVE</h3>
        <h4 className='Product-r3-heading2'>Here are some catchy options for specs frames:</h4>
        <p className='Product-r3-para'>A specs frame, or eyeglass frame, is the part of glasses that holds the lenses in front of the eyes. It's the basic structure of the glasses, and is often made from metal or acetate. The frame is made up of several components, including the bridge, hinges, temples, nose pads, and eyewire.</p>

        {/* card  */}
        <div className='row'>
          {
            Productframe.map(record => {
              return (
                <div key={record.id} className='col-12 col-md-6 col-lg-4 Product-r3-card-container'>

                  {/* image  */}
                  <div>
                    <div className='Product-r3-card-image-div'>
                      <img src={glass} alt='glass' className='Product-r3-card-image' />
                    </div>
                  </div>

                  {/* content  */}
                  <div>
                    <h3 className='Product-r3-card-heading'>{record.heading}</h3>
                    <p className='Product-r3-card-para'>{record.para}</p>
                  </div>
                </div>

              )

            })
          }

        </div>

      </div>

      {/* Row-4 get your Eyes  */}
      <GetYourEyes />

      {/* Row-5 Products  */}
      <div className='Product-r5-container'>

        {/* content */}
        <div className='Product-r5-top-content'>
          <h3 className='Product-r5-heading1'>PRODUCTS</h3>
          <h4 className='Product-r5-heading2'>Our Brand Products</h4>
          <p className='Product-r5-para'>At Specs Vibe, we're dedicated to delivering exceptional eye care. Our advanced lens materials ensure superior optical quality, while personalized prescriptions tailored to your unique needs guarantee optimal vision correction. With a wide range of stylish frames to suit your taste, you'll find the perfect match for your personality. Our expert optometrists are dedicated to your eye health, using comprehensive eye exams and cutting-edge technology to detect even the smallest details.</p>
        </div>


        {/* cards  */}
        <div className='row Product-r5-small-container'>
          {
            Productlist.map(record => {
              return (
                <div key={record.id} className='Product-r5-card-container col-12 col-md-6 col-lg-4' data-aos="fade-up" data-aos-easing="linear"
                  data-aos-duration="500" data-aos-once="true">


                  <div>
                    {/* image  */}
                    <div className='Product-r5-image-div'>
                      <img src={record.image} alt='Product' className='Product-r5-image' />
                    </div>

                    {/* content  */}
                    <h3 className='Product-r5-heading'>{record.heading}</h3>
                    <h5 className='Product-r5-caption'> {record.caption}</h5>

                  </div>
                </div>
              )
            })
          }


        </div>

      </div>

      {/* Row-6 Terms and condition  */}
      <div className='Product-r6-container'>

        {/* Horizontal line  */}
        <div className='Product-r6-hr-line-div'>
          <hr className='Product-r6-hr-line'></hr>
        </div>

        {/* terms and condition  */}
        <div className='Product-r6-content'>

          {/* heading  */}
          <div>
            <h3 className='Product-r6-heading1'>TERMS AND CONDITIONS</h3>
            <h2 className='Product-r6-heading2'>Delivery Policy</h2>
          </div>

          {/* list content  */}
          <ul className='Product-r6-list-div'>
            <li className='Product-r6-para'>Glasses and sunglasses (without prescription lenses): 2 to 5 working days.</li>
            <li className='Product-r6-para'>Glasses and sunglasses (with prescription lenses): 5 to 10 working days.</li>
            <li className='Product-r6-para'>Contact Lenses: 1 to 2 working days.</li>
          </ul>


        </div>
      </div>
      

      <Whatsapp />
      <Footer />

    </>
  )
}

export default Product
