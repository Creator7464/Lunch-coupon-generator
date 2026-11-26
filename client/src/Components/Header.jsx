import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className = "header">
      <div className = "site">
        <img src="" alt="site logo" />
      </div>
      <div className = "nav">
        <Link to = "/">Home</Link>
        <Link to = "/user/menu">Menu</Link>
        <Link to = "/user/profile"><div className = "profile">
        <img src="" alt="profile logo" />
      </div>
      </Link>
        </div>   
    </div>
  )
}

export default Header
