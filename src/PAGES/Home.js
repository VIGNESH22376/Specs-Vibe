import React from 'react'
import Header from '../Main Components/Header'
import Footer from '../Main Components/Footer'
import './CSS/Home.css'

//Import Data
import { Chooseus, HomeServices, HomeProducts, HomeTestimonial } from '../Data/HomeData'


//Import components
import Banner from '../Components/Home/Banner'
import WhoWeAre from '../Components/Home/WhoWeAre'
import GetYourEyes from '../Components/Home/GetYourEyes'
import Clients from '../Components/Home/Clients'

//import Aos
import Aos from 'aos';

//Import Images
import File from '../IMAGES/Home/file-and-folder.png'

//Import Slider
import Slider from 'react-slick'
import Whatsapp from '../Main Components/Whatsapp'

const Home = () => {

  Aos.init();

  const settings = {
    dots: false,          // Hide dots
    infinite: true,       // Infinite scrolling
    speed: 250,           // Scrolling speed
    slidesToShow: 1,      // Show 6 cards at a time
    slidesToScroll: 1,    // Scroll 1 card at a time
    autoplay: true,       // Auto-scroll
    autoplaySpeed: 5000,  // Stop for 2 seconds
    pauseOnHover: false,   // Pause when hovering
    draggable: true,      // Enable dragging
    swipeToSlide: true,   // Allow swipe to slide functionality
    arrows: false,
  };

  return (


    <>
      <Header />

      {/* Row-1  */}
      <Banner />

      {/* Row-2 Card */}
      <div className='container-fluid p-0' >

        <div className='row Home-r2-container '>

          {/* Element 1 */}
          <div className='col-12 col-md-3 Home-r2-div-odd' data-aos="fade-up" data-aos-easing="linear"
            data-aos-duration="300" data-aos-once="true" >
            {/* icon */}
            <div className='d-flex justify-content-center'>
              <div className='Home-r2-icon-odd-div'><i className="fa-solid fa-eye Home-r2-icon"></i></div>
            </div>

            {/* content */}
            <div className='home-r2-content-div'>
              <h3 className='Home-r2-heading'>Qualified Optometrist</h3>
              <p className='Home-r2-para'>As dedicated optometrists, we provide comprehensive eye care services to ensure your vision is clear and healthy.</p>
            </div>
          </div>

          {/* Element 2 */}
          <div className='col-12 col-md-3 Home-r2-div-even' data-aos="fade-up" data-aos-easing="linear"
            data-aos-duration="300" data-aos-once="true" data-aos-delay="200">
            {/* icon */}
            <div className='d-flex justify-content-center'>
              <div className='Home-r2-icon-even-div'><i className="fa-solid fa-file Home-r2-icon"></i></div>
            </div>

            {/* content */}
            <div className='home-r2-content-div'>
              <h3 className='Home-r2-heading'>Personalized Care</h3>
              <p className='Home-r2-para'>Our experienced optometrists take a personalized approach to your eye care, listening to your concerns and addressing your unique needs to ensure optimal vision and eye health.</p>
            </div>

          </div>

          {/* Element 3 */}
          <div className='col-12 col-md-3 Home-r2-div-odd' data-aos="fade-up" data-aos-easing="linear"
            data-aos-duration="300" data-aos-once="true" data-aos-delay="400">
            {/* icon  */}
            <div className='d-flex justify-content-center'>
              <div className='Home-r2-icon-odd-div'><i className="fa-solid fa-book Home-r2-icon"></i></div>
            </div>

            {/* container  */}
            <div className='home-r2-content-div'>
              <h3 className='Home-r2-heading'>Educating Patients</h3>
              <p className='Home-r2-para'>Taking the time to explain conditions, treatments, and options is a crucial aspect of education in various settings, including healthcare and effective education empowers individuals</p>
            </div>

          </div>

          {/* Element 4 */}
          <div className='col-12 col-md-3 Home-r2-div-even' data-aos="fade-up" data-aos-easing="linear"
            data-aos-duration="300" data-aos-once="true" data-aos-delay="600">
            {/* icon  */}
            <div className='d-flex justify-content-center'>
              <div className='Home-r2-icon-even-div'><i className="fa-solid fa-house Home-r2-icon"></i></div>
            </div>

            {/* content  */}
            <div className='home-r2-content-div'>
              <h3 className='Home-r2-heading'>Home Services</h3>
              <p className='Home-r2-para'>Get a comprehensive eye checkup in the comfort of your own home. Our frame trial service brings the latest styles and trends right to your home.</p>
            </div>

          </div>
        </div>
      </div>

      {/* Row-3  */}
      <WhoWeAre />

      {/* Row-4 */}
      <GetYourEyes />


      {/* Row-5 Why Choose Us */}
      <div className='container-fluid Home-r5-container'>

        {/* heading */}
        <h4 className='Home-r5-heading1'>WHY CHOOSE US</h4>
        <h3 className='Home-r5-heading2'>Few Reasons Why You Should Choose Us.</h3>

        {/* Para  */}
        <p className='Home-r5-para'>We believe that providing exceptional customer service is our main strength. We take pride in providing outstanding services to our customers. We know that our customers are important for us and hence we do not leave any stone unturned in helping, guiding and providing the best possible solutions. A home visit with an optometrist typically involves the optometrist traveling to a patient's home to provide eye care services.<br />
          This may be ideal for:</p>

        <div className='row'>
          {
            Chooseus.map(record => {
              return (
                <div key={record.id} className='d-flex col-12 col-lg-6 Home-r5-small-container'>

                  {/* icon  */}
                  <div className='Home-r5-icon-div'>
                    <img className='Home-r5-icon' src={File} alt='file and folder' />
                  </div>

                  <div>
                    <h4 className='Home-r5-small-heading'>{record.heading1}</h4>
                    <p className='Home-r5-small-para'>{record.para}</p>


                  </div>

                </div>

              )
            })

          }

        </div>
      </div>

      {/* Row-6  Services*/}
      <div className='Home-r6-container'>


        {/* Top content  */}
        <div className='Home-r6-small-container1' data-aos="fade-up" data-aos-easing="linear"
          data-aos-duration="500" data-aos-once="true" >
          {/* heading */}
          <h4 className='Home-r5-heading1'>SERVICES</h4>
          <h3 className='Home-r5-heading2'>Specs vibe Services.</h3>

          {/* Para  */}
          <p className='Home-r5-para'>In today's fast-paced world, quality vision care demands innovative, efficient, and patient-centered solutions. At Specs Vibe, we specialize in crafting personalized eye care experiences that transform lives by improving vision. Leveraging advanced technologies and techniques, our comprehensive eye care services ensure exceptional patient care and unparalleled results.</p>
        </div>

        {/* Cards  */}
        <div className='row Home-r6-small-container2 gx-4 '>
          {
            HomeServices.map(record => {
              return (
                <div key={record.id} className='col-11 col-md-5 col-lg-3 Home-r6-content-div mx-2 mb-4' data-aos="fade-up" data-aos-easing="linear"
                  data-aos-duration="500" data-aos-once="true">

                  {/* heading  */}
                  <h3 className='Home-r6-heading'>{record.heading}</h3>

                  {/* para  */}
                  <p className='Home-r6-para'>{record.para}</p>
                </div>
              )
            })
          }


        </div>
      </div>

      {/* Row-7 products */}
      <div className='Home-r7-container'>

        {/* Top content it is same as above so the class name are same for some class  */}
        <div className='Home-r6-small-container1' data-aos="fade-up" data-aos-easing="linear"
          data-aos-duration="500" data-aos-once="true" >
          {/* heading */}
          <h4 className='Home-r5-heading1'>PRODUCTS</h4>
          <h3 className='Home-r5-heading2'>Our Brand Products</h3>

          {/* Para  */}
          <p className='Home-r5-para'>At Specs Vibe, we're dedicated to delivering exceptional eye care. Our advanced lens materials ensure superior optical quality, while personalized prescriptions tailored to your unique needs guarantee optimal vision correction. With a wide range of stylish frames to suit your taste, you'll find the perfect match for your personality. Our expert optometrists are dedicated to your eye health, using comprehensive eye exams and cutting-edge technology to detect even the smallest details.</p>
        </div>

        {/* cards  */}
        <div className='row Home-r6-small-container2'>
          {
            HomeProducts.map(record => {
              return (
                <div key={record.id} className='Home-r7-card-container col-12 col-md-6 col-lg-3' data-aos="fade-up" data-aos-easing="linear"
                  data-aos-duration="500" data-aos-once="true">

                  {/* image  */}
                  <div>
                    <div className='Home-r7-image-div'>
                      <img src={record.image} alt='Product' className='Home-r7-image' />
                    </div>

                    {/* content  */}
                    <h3 className='Home-r7-heading'>{record.heading}</h3>
                    <h5 className='Home-r7-caption'> {record.caption}</h5>

                  </div>
                </div>
              )
            })
          }


        </div>

      </div>

      {/* Row-8 Testomonials */}
      <div className='Home-r8-container container-fluid'>

        {/* Top content it is same as above so the class name are same for some class  */}
        <div className='Home-r6-small-container1' data-aos="fade-up" data-aos-easing="linear"
          data-aos-duration="500" data-aos-once="true" >
          {/* heading */}
          <h4 className='Home-r5-heading1'>TESTIMONIALS</h4>
          <h3 className='Home-r5-heading2'>Our Customers Says About Us</h3>

          {/* Para  */}
          <p className='Home-r5-para'>Our Customers Love Their Experience With Specs Vibe, Expert Care Transforming Vision, Transforming Lives</p>
        </div>

        {/* Slider  */}
        <div className='row Home-r8-small-container2'>

          <div className='col-11 col-md-10 Home-r8-slider-container ' data-aos="fade-up" data-aos-easing="linear"
          data-aos-duration="500" data-aos-once="true">
            <Slider {...settings}>
              {

                HomeTestimonial.map(record => {
                  return (
                    <div key={record.id} className='Home-r8-slidder' >

                      <p className='Home-r8-para'><i className="fa-solid fa-quote-left Home-r8-icon"></i>
                        {record.quote}
                        <i className="fa-solid fa-quote-right Home-r8-icon"></i>
                      </p>


                      <h3 className='Home-r8-name'>{record.name}</h3>
                      <h4 className='Home-r8-place'>{record.place}</h4>



                    </div>
                  )
                })
              }
            </Slider>
          </div>




        </div>

      </div>

      {/* Row-9 Slider clients  */}
     <Clients/>

      <Whatsapp/>
      <Footer />

    </>
  )
}

export default Home
