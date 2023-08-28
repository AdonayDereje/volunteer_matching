import React from 'react'
import IvolunteerLogo from '../IvolunteerLogo.svg'
import Arrow from '../Arrow.svg'

function Header(){
    return (
        <div className="Header">
            <img className="mainLogo" src={IvolunteerLogo} width="150px" alt="website's logo"/>
            <p className="home">Home</p>
            <p className="opportunities">Opportunities<img src={Arrow} width="13px" alt="arrow icon"/></p>
            <p className="recruit">Recruit<img src={Arrow} width="13px" alt="arrow icon"/></p>
            <p className="aboutUs">About Us</p>
            <button>Sign Up</button>
        </div>
    )
}

export default Header;