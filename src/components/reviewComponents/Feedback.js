import React from 'react'

function StarRating({
    totalStars = 5,
    selectedStars = 0,
    onRate = (f) => f,
  }) {
    return (
      <>
        {createArray(totalStars).map((n, i) => (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => onRate(i + 1)}
          />
        ))}
        <p>
          {selectedStars} of {totalStars} stars
        </p>
      </>
    );
  }

function Feedback (){
    return (
        <div className="feedback-container">
            <h1>Volunteer's Feedback</h1>
            <p>My name is Adonay. And Ivolunteer has been a very good website to find opportunities I resonate with and it has helped me greatly. I reccomend it to everyone.</p>
            <p><b>Adonay D.</b></p>
            <p>Student</p>
            <StarRating />
        </div>
        
    )
}

export default Feedback;