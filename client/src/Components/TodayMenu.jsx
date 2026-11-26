import React from 'react'
import {useState,useEffect } from 'react'
import Menu from './Menu.jsx'


const TodayMenu = () => {
    const [recipes, setRecipes] = useState([]);
    async function getrecipe()
    {
        try{
            const req = await fetch('https://dummyjson.com/recipes?limit=7&select=name,image,rating,tags');
            const data = await req.json();
            setRecipes(recipes => data.recipes);
            
        }
        catch(err)
        {
            console.log(err);

        }

    }
    useEffect(()=> {getrecipe();
    }, []);
  return (
    <div>
      <div className = "menuheader">
        <p>Today's Menu</p>
      </div>
      <div className = "menucontainer">
      {
        console.log(recipes.length)
      }
        {
          recipes.map((item, index) => {return <Menu props = {item} key = {index}/>})
        }
      
      </div>
      
    </div>
  )
}

export default TodayMenu
