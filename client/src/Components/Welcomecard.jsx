import React from 'react'

const Welcomecard = () => {
  return (
    <div className = "greet_container">
       <div className = "greet">
            <p>Welcome, Jaikumar saini</p>
            <p>What's on your mind today?</p>
            <button><span>Generate</span></button>
        </div> 
        <div className = "food_card">
            <img src= "..\src\assets\dish.avif" alt="Food_logo"/>
        </div>
        
        
        
    </div>
  )
}

export default Welcomecard
