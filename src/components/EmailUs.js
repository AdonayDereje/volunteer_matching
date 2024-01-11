import React from 'react'
import Volunteer from '../volunteer.svg'
import Repeat from '../repeat.svg'
import Discover from '../discover.svg'

function EmailUs (){
    return (
        <div className='emailUs-container review-container'>
            <div className=" emailUs-elementContainer"> 
                <div className="emailUs-element">
                    <h3 className="emailUs-mainText"><img src={Discover} width="25px" alt=""/> Discover</h3>
                    <p className="emailUs-subText">Something I'm writing becuase I have the loreum ipsum thing and i'll be repearing this again and again many times.</p>
                </div>
                <div className="emailUs-element">
                    <h3 className="emailUs-mainText"><img src={Volunteer} width="18px" alt=""/> Volunteer</h3>
                    <p className="emailUs-subText">Something I'm writing becuase I have the loreum ipsum thing and i'll be repearing this again and again many times. s again and again many times.</p>
                </div>
                <div className="emailUs-element">
                    <h3 className="emailUs-mainText"><img src={Repeat} width="25px" alt=""/> Repeat</h3>
                    <p className="emailUs-subText">Something I'm writing becuase I have the loreum ipsum thing and i'll be repearing this again and again many timess any times. times.</p>
                </div> 
            </div>
            <div className="emailUs-buttonContainer">
                <button className="button emailUs-button">Sign Up</button>
                <button className="button emailUs-button whiteBg">Chat With Us</button>
            </div>
            
        </div>
        
    )
}


export default EmailUs;