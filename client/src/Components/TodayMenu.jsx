import React from 'react'
import { useState, useEffect } from 'react'
import Menu from './Menu'
const TodayMenu = () => {
    const [recipes, setrecipes] = useState([]);

    async function getrecipe()
    {
        try{
            const req = await fetch(fetch('https://dummyjson.com/recipes?select=name,image'));
            const data = await req.json().recipes;

            setrecipes(() => (data));

        }
        catch(err)
        {
            console.log(err);

        }

    }
    useEffect(()=> {getrecipe()}, []);
  return (
    <div>
      <div className = "menuheader">
        <p>Today's Menu</p>
      </div>
      {/* <div className = "menucontainer">
        {
        recipes.map((item, index) => <Menu key = {index + 1} props = {item}/>)
      }
      </div>
       */}
    </div>
  )
}

export default TodayMenu
