import React from 'react'
import backgroundPattern from '../handsPatternUpdated.svg'
import Data from './Data'

function ContactUs(){
    return(
        <div className="contactUs--container">
            <img className="contactUs-bg-pattern" src={backgroundPattern} alt="people"/>
            <h1 class="welcome-mainTitle contactUs-mainTitle">IVolunteer helps you find your perfect fit</h1>
            <p class="welcome-subTitle contactUs-subTitle">Find your perfect fit with our optimized search mechanism that will guide you to a place where your skills will shine bright. Try it out now! Ivolunteer finds the perfect fit.</p>
            <div className="contactUs--images">
                <img className="contactUs--eachImage" src={Data[3].img} alt="1"/>
                <img className="contactUs--eachImage" src={Data[5].img} alt="2"/>
                <img className="contactUs--eachImage" src={Data[7].img} alt="3"/>
                <img className="contactUs--eachImage" src={Data[6].img} alt="4"/>
            </div>
        </div>
    )
}

export default ContactUs;