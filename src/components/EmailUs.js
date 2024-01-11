import React from 'react'
import Volunteer from '../volunteer.svg'
import Repeat from '../repeat.svg'
import Discover from '../discover.svg'

function EmailUs (){
    return (
        <div className="review-container emailUs-container">      
            <h3 className="emailUs-mainText"><img src={Discover} width="25px" alt=""/> Discover</h3>
            <p className="emailUs-subText">Something I'm writing becuase I have the loreum ipsum thing and i'll be repearing this again and again many times.</p>
            {/* <h3 className="emailUs-mainText"><img src={Volunteer} width="18px" alt=""/> Volunteer</h3>
            <p className="emailUs-subText">Something I'm writing becuase I have the loreum ipsum thing and i'll be repearing this again and again many times. s again and again many times.</p>
            <h3 className="emailUs-mainText"><img src={Repeat} width="25px" alt=""/> Repeat</h3>
            <p className="emailUs-subText">Something I'm writing becuase I have the loreum ipsum thing and i'll be repearing this again and again many timess any times. times.</p> */}
        </div>

        
    )
}

export default EmailUs;