import React from 'react'
import TravelCard from '../TravelCard'
import Data from '../Data'

function Feedback (){
    const travelCards = Data.map(item => {
        return (
          <TravelCard 
            key = {item.id}
            item = {item} />
        )
      })

    return (
        <div className="mainSection">
            {travelCards}
        </div>
    )
}

export default Feedback;