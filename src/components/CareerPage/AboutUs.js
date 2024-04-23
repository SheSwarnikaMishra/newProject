import React, { useRef, useState, useEffect } from "react";
import "./career.css";
import Navbar from "../navbar/navbar";
import Projects from "../testing/Projects/Projects";
import Footer from "../Footer/Footer";
import Imagehover from "./imagehover";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const AboutUs = () => {
  const carouselRef = useRef(null);
  const carmobRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isEndReached, setIsEndReached] = useState(false);
  const [isCarmobVisible, setIsCarmobVisible] = useState(false);




  return (
    <div>
      <div style={{ position: "relative", zIndex: "2", background: "black", opacity: "0.8", height: "83px" }}>
        <Navbar />
      </div>
      <div className="careerHold">
        <div className="careerMain">
          <div className="cultureweb">
            <video autoPlay muted loop style={{ width: "100vw", maxWidth: "1920px" }}>
              <source src="Culturenew.mp4" />
            </video>
          </div>
        </div>
        <div className="aboutUsSecondA">
          <span className="careerSecondTextnew">
            <br/>
         <span style={{fontSize:"4vw"}}> We are Z’s.</span><br/><br/>
          <span style={{ color: "rgb(49, 195, 183)" }}>It reflects the ethos why we love doing what we are doing.</span>
          </span>
          <br/><br/><br/>
        </div>
        <section>
          <div style={{color:"white",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"justify",padding:"0 15%",lineHeight:"26px"}}>
          Minus Zero was never about the crazy ideas. It was always about the people - bold enough to think crazy and resilient enough to turn them into reality. We love building together, and are not afraid to fail together. Yet we all know why to not give up on the right thing.
And the best part, the Monday mornings here are just so exciting enough to drive you out of the bed before the sun.

          </div>
        </section>
        <br/>
        <br/>
        <div className="whatweoffer">What is<span style={{color:"rgb(49, 195, 183)",marginLeft:"2%"}}> z</span>Culture?
        <br/>
</div>
        <div className={`careerSecond  `}>
          <div className="horizontalCar" >
            <div className="carouselItem ">
              <img className="horizontalImagesnew" src="careera.png" alt="second" />
              <div className="imgBottomText">Open Culture</div>
            </div>
            <div className="carouselItem">
              <img className="horizontalImagesnew" src="careerb.png" alt="third" />
              <div className="imgBottomText">Exponential Growth</div>
            </div>
            <div className="carouselItem">
              <img className="horizontalImagesnew" src="careerc.png" alt="first" />
              <div className="imgBottomText">Freedom to Explore</div>
            </div>
            <div className="carouselItem">
              <img style={{marginLeft:"41%"}} className="horizontalImagesnew" src="careerd.png" alt="fourth" />
              <div className="imgBottomText">People that Inspire </div>
            </div>
          </div>
          <div ref={carmobRef}>
            <div className="carmobsub1">
              <div className={`carmob ${isCarmobVisible ? "carmobVisible" : ""}`} >
                <img className="horizontalImagesnew image1" src="careera.png" alt="second" />
                <div className="imgBottomText">Open Culture</div>
              </div>
              <div className={`carmob ${isCarmobVisible ? "carmobVisible" : ""}`} >
                <img className="horizontalImagesnew image1" src="careerb.png" alt="first" />
                <div className="imgBottomText">Exponential Growth </div>
              </div>
            </div>
            
            <div className="carmobsub1">
              <div className={`carmob ${isCarmobVisible ? "carmobVisible" : ""}`} >
                <img className="horizontalImagesnew image1" src="careerc.png" alt="first" />
                <div className="imgBottomText">Freedom to Explore</div>
              </div>
              <div className={`carmob ${isCarmobVisible ? "carmobVisible" : ""}`} >
                <img className="horizontalImagesnew image1" src="careerd.png" alt="fourth" />
                <div className="imgBottomText">People that Inspire </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`aboutUsSecondB ${isScrolling && !isEndReached ? "marginTop" : ""}`}>
          <div className="knowYourCoZ">Meet the team</div>
          <div>
            {/* <Projects /> */}
            <Imagehover />
          </div>
        </div>
        <div className={`career2Last ${isScrolling && !isEndReached ? "marginTop" : ""}`}>
          <div>Want to join this amazing crew?</div>
          <br/>
          <a href="mailto:careers@minuszero.in" style={{ textDecoration: "none" }}>
            <button className="careerBut">
              <span>Join Us</span>
            </button>
          </a>
        </div>
        <div style={{ background: "#081010" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;