import React from 'react'

const Menu = ({props}) => {
  return (
  
    <div className = "recipecard">
      <div className = "recipeimg">
        <img src= {props.image} alt="recipe"/>
      </div>
      <p>{props.name}</p>
      <p>Rating: {props.rating}</p>
    </div>
  )
}

export default Menu
