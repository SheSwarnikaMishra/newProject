import React from 'react'
import "./navbar.css"
import Mobnav from './Mobnav'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


const navbar = () => {
  return (
    <div>
      <nav className='navbarBody'>
        <div className='imgContainer'>
           <Link to="/"><img className='img' src="minusZeroLogo.webp" alt="logo"/></Link>
        </div>
        <div>
            <ul className='navbarUl'>
                <li>
                    <Link to="/zpod">Design</Link>
                    {/* <Link to="/Contact">Contact</Link> */}

                </li>
                <li>
                    <Link to="/Tech">Technology</Link>
                    </li>
                    <li>
                    <Link to="/AboutUs">About Us</Link>
                    </li>
                    <li>
                    <div class="dropdown">
                    <button class="dropbtn">More 
                    
                    </button>
    <div class="dropdown-content">
      <Link to="/Career">Careers</Link>
      <Link to="/Contact">Contact</Link>
    </div>
  </div> 
                </li>
            </ul>
        </div>
      </nav>
      <div className='mobnavbar'>
        <Mobnav/>
      </div>
    </div>
  )
}

export default navbar
