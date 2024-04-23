import React,{useEffect, useRef} from "react";
import "./Footer.css";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

const Footer = () => {
  const footRef = useRef(null);
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0); // Scroll to the top of the page
    };

    const handleClick = () => {
      scrollToTop();
    };

    // Add event listener for click event
    footRef.current?.addEventListener('click', handleClick);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      footRef.current?.removeEventListener('click', handleClick);
    };
  }, []);
  return (
    <>
      <div className="FooterMain" ref={footRef}
      //  style={{background:" linear-gradient(180deg, #091136 0%, #26516D 147.32%)"}}
       >
        <div className="footerBox1">
        <Link style={{color:"white",textDecoration:"none",cursor:"pointer"}} to="/" onclick="window.scrollTo(0, 0)">
<div className="fsub1">
            <img className="fsub1img" src="MZlogo.webp" alt="logo" />
          </div>
          </Link>
          <div className="fsub2">
            <div>
              <div>COMPANY</div>
              <ul className="footerUl">
                <Link style={{color:"white",textDecoration:"none",cursor:"pointer"}} to="/Aboutus">
                  <li>About</li>
                  </Link>
                  <Link style={{color:"white",textDecoration:"none",cursor:"pointer"}} to="/Career">
<li>Careers</li></Link>
<Link style={{color:"white",textDecoration:"none",cursor:"pointer"}} to="/Contact">
<li>Contact</li></Link>
              </ul>
            </div>
          </div>
          <div className="fsub2">
            <div>
              <div>VEHICLE</div>
              <ul className="footerUl">
              <Link style={{color:"white",textDecoration:"none",cursor:"pointer"}} to="/zpod">
<li>Vehicle</li></Link>
<Link style={{color:"white",textDecoration:"none",cursor:"pointer"}} to="/Tech">
 <li>Autonomy</li></Link>
                
              </ul>
            </div>

        </div>
        </div>
        <div className="line"></div>
        <div className="footerBox2">
          <div className="fbsub1">
            {/* <img src="facebookNew.png" alt="facebook"/> */}
           <a href="https://www.linkedin.com/company/minuszero/">
             <img style={{height:"24px"}} src="linkedinNew.png" alt="facebook"/>
            </a>
           <a href="https://www.facebook.com/minuszero.in">
             <img style={{height:"24px"}} src="facebook2.png" alt="facebook"/>
            </a>
            <a href="https://twitter.com/teamminuszero">
              <img style={{height:"24px"}} src="TwitterNew.png" alt="facebook"/>
              </a>
            <a href="https://www.instagram.com/minuszero/">
              <img style={{height:"24px"}} src="instaNew.png" alt="facebook"/>
              </a>
            <a href="https://www.youtube.com/@teamminuszero">
              <img style={{height:"24px"}} src="youtubeNew.png" alt="facebook"/>
              </a>
          </div>
          <div className="fbsub2">
            <span>&#169; Minus Zero, 2023, India</span>
            <Link style={{color:"transparent"}} to="/terms">

            <span>Terms of Use</span>
            </Link>
            <Link style={{color:"transparent"}} to="/Privacy">
            <span> Privacy Policy</span>

            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;