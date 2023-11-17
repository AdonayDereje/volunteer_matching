import React from 'react'
// import profilePic from './src/profilePic.jpg'

function Feedback (){
    return (
        <div className="feedbackBlocks-container">
            <FeedbackBlocks />
            <FeedbackBlocks />
            <FeedbackBlocks />
            <FeedbackBlocks />
            <FeedbackBlocks />
        </div>
    )
}

function FeedbackBlocks(){
    return (
        <div className="feedback-container">
            <img className="feedback-profilePic" src="" alt="person portrait"/>
            <h1>Volunteer's Feedback</h1>
            <p>My name is Adonay. And Ivolunteer has been a very good website to find opportunities I resonate with and it has helped me greatly. I reccomend it to everyone.</p>
            <p><b>Adonay D.</b></p>
            <p>Student</p>
        </div> 
    )
}

export default Feedback;