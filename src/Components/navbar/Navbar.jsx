import React from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
    <a href="#" className="navbar-brand">Navbar</a>
    <ul className="navbar-nav">
        <li className="nav-item"><Link className="nav-link">Register Company</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
        
    </ul>
   </nav>
  )
}

export default Navbar
