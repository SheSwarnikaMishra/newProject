import React, { useEffect, useState, useRef } from "react";
import "./Ztech.css";
import Navbar from "../navbar/navbar";
import Footer from "../Footer/Footer";
import InfoBox from "./InfoBox";
import AOS from "aos";
import "aos/dist/aos.css";

const Ztech = () => {

  useEffect(() => {
    AOS.init(); //You can add options as per your need inside an object
  }, []);


  const infoBoxes = [
    {
      id: 1,
      heading: "Camera",
      para: "It uses automotive-grade GMSL cameras for 360 deg field of view, engineered for low-latency and redundancy.",
    },
    {
      id: 2,
      heading: "GMSL Camera 3",
      para: "GMSL cameras are in set of 3 on both sides and rear of vehicle to provide complete 360° view.",
    },
    {
      id: 3,
      heading: "GMSL Camera 1",
      para: "GMSL cameras are in set of 3 on both sides and rear of vehicle to provide complete 360° view.",
    },
    {
      id: 4,
      heading: "GMSL Camera 4",
      para: "GMSL cameras are in set of 3 on both sides and rear of vehicle to provide complete 360° view.",
    },
    {
      id: 5,
      heading: "GNSS",
      para: "A general purpose GNSS receiver allows us to guide zPod to user-defined destination.",
    },
    {
      id: 6,
      heading: "Compute",
      para: "zPod utilizes an extremely power-efficient in-vehicle compute designed for real-time execution and high throughput with multiple AI accelerators,secondary safety chip and teleops capabilities.",
    },
    {
      id: 7,
      heading: "GMSL Camera 5",
      para: "GMSL cameras are in set of 3 on both sides and rear of vehicle to provide complete 360° view.",
    },
    {
      id: 8,
      heading: "GMSL Camera 6",
      para: "GMSL cameras are in set of 3 on both sides and rear of vehicle to provide complete 360° view.",
    },
  ];

  const [activeBoxId, setActiveBoxId] = useState(null);
  const infoBoxRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (infoBoxRef.current && !infoBoxRef.current.contains(event.target)) {
        setActiveBoxId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleButtonClick = (id) => {
    setActiveBoxId(id);
  };

  return (
    <div>
      

      <div className="zTechLast">
        <div className="zTechLastText">
          <div className="zTechLastText1"><span style={{color:"rgb(49, 195, 183)"}}>Inside</span> z<span style={{position:"relative",top:"-1.3rem"}}>.</span>Pod</div>
          <div className="zTechLastText2">


          z.Pod utilizes True Vision Autonomy, designed for safety and highly optimized for real-time execution with sophisticated OS and middleware for in-vehicle compute. This also includes features for remote diagnostics, self-repair and teleoperations.
          </div>
        </div> 


        <div className="zTechLastImages" style={{position:"relative"}}>
          <img className="zTechimg" src="car2.webp" alt="carmodel"></img>
          <div>
            <button className="plus2" onClick={() => handleButtonClick(1)}>
              <img src="plus.png" alt="plus"></img>
            </button>
            {activeBoxId === 1 && (
              <div className="">
                <div className="boox1" ref={infoBoxRef}>
                  <InfoBox
                    
                    heading={infoBoxes[0].heading}
                    para={infoBoxes[0].para}
                  />
                </div>
              </div>
            )}
           
            <button className="plus5" onClick={() => handleButtonClick(5)}>
              <img src="plus.png" alt="plus"></img>
            </button>
            {activeBoxId === 5 && (
              <div className="">
                <div className="boox5" ref={infoBoxRef}>
                  <InfoBox
                    heading={infoBoxes[4].heading}
                    para={infoBoxes[4].para}
                  />
                </div>
              </div>
            )}
            <button className="plus6" onClick={() => handleButtonClick(6)}>
              <img src="plus.png" alt="plus"></img>
            </button>
            {activeBoxId === 6 && (
              <div className="">
                <div className="boox6" ref={infoBoxRef}>
                  <InfoBox
                    heading={infoBoxes[5].heading}
                    para={infoBoxes[5].para}
                  />
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>
      </div>
  );
};

export default Ztech;
