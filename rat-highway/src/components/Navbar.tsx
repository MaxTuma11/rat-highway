import React from 'react'
import './Navbar.css'
import rat1 from '../assets/rat1.png'

const Navbar = () => {
  return (
    <nav>
        <div>
            <div id="rat1"><img src={rat1} alt='rat1'></img></div>
            <div id="title"><h1>the rat highway</h1></div>
            <div id="rat1"><img src={rat1} alt='rat1' id="rat2"></img></div>
        </div>
    </nav>
  )
}

export default Navbar
