import React, { useState } from 'react';
import './Mobnav.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


const Mobnav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="navbar">
      <Link to="/">

    <img className='imgmob' src="minusZeroLogo.webp" alt="logo"/>
      </Link>

      <button className="navbar-toggle" onClick={toggleNavbar}>
        <span className="menu">Menu <img src="triangle.png" alt="triangle"/></span>
      </button>
      <div className={`navbar-components ${isOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleNavbar}>
          <img src="cross2.png" alt="cross"/>
        </button>
        <Link to="/AboutUs" className="navbar-component">About</Link>
        <Link to="/zpod" className="navbar-component">Design</Link>
        <Link to="/Tech" className="navbar-component">Technology</Link>
        <Link to="/Career" className="navbar-component">Careers</Link>
        <Link to="/Contact" className="navbar-component">Contact</Link>
      </div>
    </div>
    </>
  );
};

export default Mobnav;