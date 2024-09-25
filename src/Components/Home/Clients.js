import React from 'react'
import './CSS/Clients.css'

//import Data
import { ClientsData } from '../../Data/HomeData'
import Slider from 'react-slick'

const Clients = () => {

    const settings = {
        dots: false,          // Hide dots
        infinite: true,       // Infinite scrolling
        speed: 1500,           // Scrolling speed
        slidesToShow: 5,      // Show 6 cards at a time
        slidesToScroll: 1,    // Scroll 1 card at a time
        autoplay: true,       // Auto-scroll
        autoplaySpeed: 2000,  // Stop for 2 seconds
        pauseOnHover: false,   // Pause when hovering
        draggable: true,      // Enable dragging
        swipeToSlide: true,   // Allow swipe to slide functionality
        arrows: false,
        responsive:
            [
                {
                    breakpoint: 992,
                    settings:
                    {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 767,
                    settings:
                    {
                        slidesToShow: 2
                    }
                }
            ]
    };
    return (
        <>
            <div className='clients-container container-fluid'>

                {/* Top content  */}
                <div className='clients-container1' >
                    {/* heading */}
                    <h4 className='clients-heading1'>OUR TRUSTED BIG CLIENTS</h4>
                    <h3 className='clients-heading2'>We provide all kinds of branded lenses and frames</h3>
                </div>

                {/* Slidder  */}
                <div className='row client-image-slidder'>
                    <div className='col-10 col-md-9 col-lg-11 '>
                    <Slider {...settings}>
                        {
                            ClientsData.map(record => {
                                return (
                                    <div key={record.id} >

                                        {/* image */}
                                        <div className='client-image-container'>
                                            <img src={record.image} alt='clients' className='client-image' />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Clients
