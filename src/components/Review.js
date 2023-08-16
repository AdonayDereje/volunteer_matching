import React from 'react';
import ReviewTopElement from './reviewComponents/ReviewTopElement';
import Feedback from './reviewComponents/Feedback';

function Review(){
    return(
            <div className="review-container">
                <ReviewTopElement 
                    text="Find your pefect fit with our
                    optimized search mechanism that will
                    guide you to a place where your skills
                    can shine bright" 
                    buttonText="Find Opportunities"
                    leftAlign= {false}  
                />
                <ReviewTopElement 
                    text="Are you looking for volunteers
                    that will aid you in your journey
                    for Good? They're just one click away!" 
                    buttonText="Recruit Volunteers"
                    leftAlign={true}    
                />
                <Feedback />

            </div>          
    )
}

export default Review;