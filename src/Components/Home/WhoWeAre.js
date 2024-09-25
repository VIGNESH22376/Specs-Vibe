import React from 'react'
import './CSS/WhoWeAre.css'
import { NavLink } from 'react-router-dom'

//import images
import WhoAbout from '../../IMAGES/Home/about2.jpg';

//import Aos
import Aos from 'aos';

const WhoWeAre = () => {

    Aos.init();

    return (
        <>

            <div className='who-container container-fluid'>

                {/* vertical text */}
                <div className='who-vertical-div d-none d-md-none d-lg-block'>
                    <h3 className='who-vertical'>ABOUT SPECS VIBE</h3>

                </div>

                <div className='row m-0 who-small-container'>

                    {/* Left side  */}
                    <div className='col-12 col-md-7 col-lg-7 who-left-container ' data-aos="fade-up"            data-aos-easing="linear"
                    data-aos-duration="500" data-aos-once="true" >

                        {/* Heading  */}
                        <h3 className='who-heading1'>WHO WE ARE</h3>
                        <h2 className='who-heading2'>Meet Specs Vibe for Personalized Eye Tests</h2>

                        {/* para content */}
                        <p className='who-para'>
                            "See Clearly, Live Fully"<br />
                            At Specs Vibe, we're committed to being your trusted eye care partner for life. We invest in our expert optometrists, latest technology, expert training, and personalized care to ensure you receive the best possible vision solutions. Take the first step towards clearer vision and a brighter future. Discover how Specs Vibe can transform your vision with cutting-edge eye care solutions. Contact us today to schedule your eye exam and discover how we can help you see your best!</p>

                        <p className='who-para'>Get the latest frames and trends delivered to your door with our Frame Trial Service. Try, compare, and find your perfect match in the comfort of your own home!</p>

                        {/* Button  */}
                        <div className='pt-4'>
                            <NavLink className='who-button' to='/about'>Learn More About Us</NavLink>
                        </div>
                    </div>

                    {/* Right side  */}

                    <div className='col-12 col-md-5 col-lg-5 p-0'>

                        {/* Image  */}
                        <img src={WhoAbout} alt='About' className='who-image' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default WhoWeAre
