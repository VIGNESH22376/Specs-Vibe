import React from 'react'
import Header from '../Main Components/Header'
import Footer from '../Main Components/Footer'
import Whatsapp from '../Main Components/Whatsapp'
import { NavLink } from 'react-router-dom'

import './CSS/About.css'
import { useState } from 'react'

//import Aos
import Aos from 'aos';

//import pages
import GetYourEyes from '../Components/Home/GetYourEyes';
import WhoWeAre from '../Components/Home/WhoWeAre';

//import Data
import { AboutStrong } from '../Data/AboutData'

import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import Clients from '../Components/Home/Clients'

const About = () => {

  Aos.init();

  const [counterOn, setCounteron] = useState(false);

  return (
    <>
      <Header />

      {/* Row-1 About*/}
      <div>
        <div className='About-r1-image'>

          {/* heading  */}
          <h3 className='About-r1-heading' data-aos="fade-up" data-aos-easing="linear"
            data-aos-duration="500" data-aos-once="true">About Us</h3>


          <div className='d-flex gap-3' data-aos="fade-up" data-aos-easing="linear"
            data-aos-duration="500" data-aos-once="true">
            <NavLink className='About-r1-small-heading' to='/'>HOME &gt;</NavLink>
            <p className='About-r1-small-heading'>ABOUT US &gt;</p>
          </div>

        </div>

      </div>

      {/* Row-2 counter*/}
      <div className='container-fluid'>
        <div className='row About-r2-container'>

          {/* left side  */}
          <div className='col-lg-6 About-r2-small-container1'>

            <h3 className='About-r2-heading1'>ANBAZHAGAN.R</h3>

            <h4 className='About-r2-heading2'>Bachelor of Optometry (B.Optom.)</h4>

            <p className='About-r2-para'>An optometrist is a healthcare professional who specializes in the diagnosis and treatment of disorders related to the eye and visual system. They are trained to:</p>

            <ul>
              <li className='About-r2-list'>Conduct eye exams and vision tests.</li>
              <li className='About-r2-list'>Prescribe glasses, contact lenses, and medications.</li>
              <li className='About-r2-list'>Diagnose and manage eye diseases (e.g., glaucoma, cataracts).</li>
              <li className='About-r2-list'>Provide pre and post-operative care for eye surgeries.</li>
              <li className='About-r2-list'>Offer advice on eye health and vision correction.</li>
            </ul>

            <p className='About-r2-para'>Optometrists may work in collaboration with other healthcare professionals, such as primary care physicians or social workers, to ensure comprehensive care during home visits. Home visits can be beneficial for patients who face barriers in accessing traditional clinical settings, enhancing eye care accessibility and convenience.</p>

          </div>

          {/* Right side  */}
          <div className='col-lg-6 ' data-aos="fade-up" data-aos-easing="linear"
            data-aos-duration="500" data-aos-once="true">

            {/* scroll trigger */}
            <ScrollTrigger onEnter={() => setCounteron(true)} onExit={() => setCounteron(true)} className='row About-r2-small-container2'>

              {/* Years of Experienced */}
              <div className='col-12 col-md-6 About-r2-counter-div' >
                <div className='About-r2-counter-small-div'>

                  <div className='About-r2-number'>

                    {counterOn && <CountUp start={0} end={9} duration={5} delay={.5} className='About-r2-number' />}+
                  </div>

                  <h3 className='About-r2-caption'>Years of Experienced</h3>

                </div>

              </div>


              {/* Happy Cutomers  */}
              <div className='col-12 col-md-6 About-r2-counter-div' >
                <div className='About-r2-counter-small-div'>
                  <div className='About-r2-number'>

                    {counterOn && <CountUp start={0} end={100} duration={5} delay={.5} className='About-r2-number' />}+
                  </div>
                  <h3 className='About-r2-caption'>Happy Cutomers </h3>

                </div>

              </div>

              {/* Number of Brands */}
              <div className='col-12 col-md-6 About-r2-counter-div' >
                <div className='About-r2-counter-small-div'>
                  <div className='About-r2-number'>

                    {counterOn && <CountUp start={0} end={8} duration={5} delay={.5} className='About-r2-number' />}+
                  </div>
                  <h3 className='About-r2-caption'>Number of Brands</h3>
                </div>

              </div>


              {/* Type Of Frames */}
              <div className='col-12 col-md-6 About-r2-counter-div' >
                <div className='About-r2-counter-small-div'>
                  <div className='About-r2-number'>

                    {counterOn && <CountUp start={0} end={12} duration={5} delay={.5} className='About-r2-number' />}+
                  </div>
                  <h3 className='About-r2-caption'>Type Of Frames</h3>
                </div>

              </div>
            </ScrollTrigger>

          </div>
        </div>
      </div>

      {/* Row-3 */}
      <GetYourEyes/>

      {/* Row-4 */}
      <WhoWeAre/>

      {/* Row-5 Stay Storng*/}
      <div className='About-r5-container'>

        {/* content */}
        <h3 className='About-r5-heading1'>HOW WE HELP YOU STAY STRONG</h3>
        <h4 className='About-r5-heading2'>Specs vibe works in various settings, including:</h4>

        {/* card */}
        <div className='row pt-5'>
          {
            AboutStrong.map(record =>{
              return(
                <div key={record.id} className='col-12 col-md-6 col-lg-3 About-r5-card-div '>
                  
                  {/* Image  */}
                  <div className='About-r5-image-container'>
                    <img src={record.image} alt='Strong' className='About-r5-image'/>

                    {/* Number  */}
                    <div className='About-r5-card-number-div'>
                      <div className='About-r5-card-number'>{record.id}</div>
                    </div>
                  </div>

                  <div>
                    {/* heading  */}
                    <h3 className='About-r5-card-heading'>{record.heading}</h3>

                    {/* caption */}
                    <p className='About-r5-card-para'>{record.caption}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      {/* Row-6 */}
      <Clients/>

      <Whatsapp />
      <Footer />

    </>
  )
}

export default About
