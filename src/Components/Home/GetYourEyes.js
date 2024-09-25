import React from 'react'
import { NavLink } from 'react-router-dom'
import './CSS/GetYourEyes.css'

const GetYourEyes = () => {
    return (
        <>
            <div  className='get-image-container'>

                <div>
                    <h3 className='get-heading'>Get your eyes checked at home all over chennai</h3>
                    <p className='get-para'>A certified refractionist will visit you with the latest eye testing machines and over 150 trial frames.</p>

                    <div className='pt-4'>
                        <NavLink to='/contact' className='get-button'>For More Enquiries</NavLink>
                    </div>
                </div>


            </div>
        </>
    )
}

export default GetYourEyes
