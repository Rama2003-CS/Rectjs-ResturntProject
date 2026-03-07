import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='nav'>
        <h2>Seafood</h2>
        <div className='links'>
            <a href="/">Home</a>
            <a href="/">Menu</a>
            <a href="/">Contact</a>

        </div>
    </nav>
  )
}
export default Navbar;   