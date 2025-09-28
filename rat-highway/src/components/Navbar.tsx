import React from 'react'
import './Navbar.css'
import test from '../assets/ratmovin.gif'

const Navbar = () => {
  return (
    <nav>
        <div className='title-container'>
            <img src={test} alt="testimage" className='background-gif'></img>
            <div className="title"><h1>the rat highway</h1></div>
        </div>
    </nav>
  )
}

export default Navbar
