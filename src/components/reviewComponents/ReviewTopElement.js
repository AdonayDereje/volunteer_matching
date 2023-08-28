import React from 'react'

function ReviewTopElement(props){
    return(
        <div className = {props.leftAlign ? "right-align": "left-align"}>
            <h1 className="review-h1">{props.text}</h1>
            <button className="review-button">{props.buttonText}</button>
        </div>
        
    )
}

export default ReviewTopElement;