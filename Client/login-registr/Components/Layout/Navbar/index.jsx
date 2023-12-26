import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <ul className='navbar_ul'>
            <li><NavLink to={"/home"}>Home</NavLink></li>
            <li><NavLink to={"/login"}>Login</NavLink></li>
            <li><NavLink to={"/signup"}>Signup</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
