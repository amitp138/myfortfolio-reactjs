import React from 'react'
import { Link,Outlet } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
         <div  className="connav">
      <div className="navbar">
      
      <nav>
      <ul>
      <li> 
      <Link id='link' to="/">Home</Link>
      </li>
      <li>
      <Link id='link' to="/Aboutme">About me</Link>
      </li>
      <li>
      <Link id='link' to="/Services">Services</Link>
      </li>
      <li>
      <Link id='link' to="/Blog">blog</Link>
      </li>
      <li>
      <Link id='link' to="/Contact">Contact</Link>
      </li>
      </ul>
      </nav>
      <Outlet />

      </div>
      </div>
    </div>
  )
}

export default Navbar