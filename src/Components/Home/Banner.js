import React from 'react'
import './CSS/Banner.css'

//import slider
import Slider from 'react-slick'

//IMPORT DATA
import { HomeBanner } from '../../Data/HomeData'

//import Navlink
import { NavLink } from 'react-router-dom'

//import Aos
import Aos from 'aos'

const Banner = () => {

    Aos.init();

    const settings = {
        dots: false,          // Hide dots
        infinite: true,       // Infinite scrolling
        speed: 0,           // Scrolling speed
        slidesToShow: 1,      // Show 6 cards at a time
        slidesToScroll: 1,    // Scroll 1 card at a time
        autoplay: true,       // Auto-scroll
        autoplaySpeed: 6000,  // Stop for 2 seconds
        pauseOnHover: false,   // Pause when hovering
        draggable: true,      // Enable dragging
        swipeToSlide: true,   // Allow swipe to slide functionality
        arrows: false,
    };
    return (
        <>
            <div>

                <Slider {...settings}>
                    {
                        HomeBanner.map(record => {
                            return (
                                <div key={record.id}>
                                    <div>
                                        <div className='Home-Banner-image' 
                                            style={{ backgroundImage: `linear-gradient(rgba(9, 30, 62, 0.85), rgba(9, 30, 62, 0.85)), url(${record.image})` }}>

                                        </div>

                                    </div>
                                    <div className='Home-Banner-content-div'>
                                        <h1 className='Home-Banner-heading1'>{record.heading1}</h1>
                                        <h1 className='Home-Banner-heading2'>{record.heading2}</h1>
                                        <p className='Home-Banner-para'>{record.para}</p>
                                        <div className='Home-Banner-btn-div'>
                                            <NavLink to='/service' className='Home-Banner-button'>View our works</NavLink>
                                        </div>
                                    </div>

                                </div>

                            )
                        })
                    }
                </Slider>

            </div>

            <div>

            </div>

        </>
    )
}

export default Banner
