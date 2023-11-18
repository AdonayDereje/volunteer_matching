import React from 'react'
import welcomeImg from '../welcomeImg2.png'
import backgroundPattern from '../handsPatternUpdated.svg'

function Welcome(){
    return(
        <div className="welcome">
            <img className="welcome-bg-pattern" src={backgroundPattern} alt="people"/>
            <h1 className="welcome-mainTitle">Connecting Volunteers around the world</h1>
            <p className="welcome-subTitle">Find Your Match. Volunteer. Impact. </p>
            <button className="button welcome-button">Sign Up</button>
            <img className="welcome-img" src={welcomeImg} alt="people"/>
        </div>
    )
}

export default Welcome;