import React, { useRef, useState, useEffect } from "react";
import "./AboutUs.css";
import "../ZoomIn/ZoomInOnScroll.css";
import Navbar from "../navbar/navbar";
import { useWindowScroll } from "react-use";
import ZoomInOnScroll from "../ZoomIn/ZoomInOnScroll";
import Footer from "../Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutUsMob from "./AboutUsMob";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import InfoOverlay from "./InfoOverlay";
import ZoomInOnScrollMob from "../ZoomIn/ZoomInOnScrollMob";

const AboutUs = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const [isTriangleAnimationComplete, setIsTriangleAnimationComplete] =
    useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [isFixed, setIsFixed] = useState(false); // New state variable for fixing position
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);


  const ref = useRef(null);
  const { y } = useWindowScroll();

  useEffect(() => {
    AOS.init(); //You can add options as per your need inside an object
  }, []);
  useEffect(() => {
    if (ref.current && !visible) {
      const top = ref.current?.getBoundingClientRect().top + y;
      const bottom = top + ref.current.offsetHeight;
      const offset = window.innerHeight * 0.3;
      if (top < y + window.innerHeight - offset && bottom > y + offset) {
        setVisible(true);
      }
    }
  }, [ref, y, visible]);

  useEffect(() => {
    if (visible && isTriangleAnimationComplete) {
      setTranslateX(-350);
      setIsAnimationComplete(true);
    }
  }, [visible, isTriangleAnimationComplete]);

  const handleTriangleAnimationComplete = () => {
    setIsAnimationComplete(true);
    // console.log("x");
  };

  useEffect(() => {
    if (isAnimationComplete) {
      setIsFixed(true);
    }
  }, [isAnimationComplete]);

  const infoBoxes = [
    {
      id: 1,
      heading: "Camera1",
      para: "AI software is at the heart of how Ghost sees, understands, and drives. Ghost Autonomy Software is responsible for obstacle and scene perception, route planning and driving, and understanding driver intent.",
    },
    {
      id: 2,
      para1: "Having recently graduated from SRCC, Gursimran Kalra has always been driven by a desire to make a lasting impact on society. He recognizes the imperative for traditional industries to undergo disruptive technological transformations to address the pressing needs of humanity.",
      para2: "Coming from a small town, he always made sure to explore every opportunity that could propel him towards his goal - becoming two-time district topper in high school boards and securing a coveted place at one of the country's premier institutions. But he wasn’t satisfied - the real world complexities didn’t closely match the text-book problem statements, leading him to co-founding Minus Zero.",
      para3: "Outside Minus Zero, Gursimran loves exploring diverse cultures, relishing their cuisine, music, and cinema.",
    },
    {
      id: 3,
      
      para1: "Closely working at an intuitive intersection of human brain and computing from the last 4 years, he had always been intrigued by neuronal computations inside the human brain that make us better decision makers than algorithms.",
      para2: "With the problem of autonomous driving where current AI paradigms fail due to inability to handle real-world complexity, he knew the big gap that they could solve when he co-founded Minus Zero.Though still an engineering undergrad, traditional education had never been a limiting factor. He believes that most complicated problems can be solved elegantly by breaking it down to right sub-problems, and reasoning from first principles.",
      para3: "He has mentored/judged major developer events worldwide, and has spoken at multiple conferences and major institutions around AI & robotics. Beyond Minus Zero, you would often find him reading compelling fiction or maybe writing poetry. He has three book publications to his credit.",
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

  const handleImageClick1 = (image) => {
    setSelectedImage1(image === selectedImage1 ? null : image);
  };
  const handleImageClick2 = (image) => {
    setSelectedImage2(image === selectedImage2 ? null : image);
  };
  return (
    <>
      <div className="aboutus">

        <div style={{background:"black",opacity:"0.8",position:"relative",zIndex:"2"}}>
        <Navbar />
        </div>
        <div className="aboutUsMain">
          <div>
            <video autoPlay muted style={{ width: "100vw",maxWidth:"1920px" }}>
              <source src="avenger.webm" />
            </video>
          </div>
        </div>
        <div className="aboutUsSecond">
          <div className="aboutUsSecondA">
            <span className="aboutUsSecondTextnew">
            We are an AI company at core, re-inventing intelligence at the intersection of human brain and computing.

            </span>
          </div>
          <div className="aUSecond">
            <div className="aUSecondHead"><span style={{color:"rgb(49, 195, 183)"}}>Who we are?</span></div>
            <div className="aUSecondBox">
              <div className="aUSecondSub1">
                <img className="aUSecondImg" src="whoweare.webp" alt="first" />
              </div>
              <div className="aUSecondSub2">
                <span className="aUSecondBoxText">
                We founded Minus Zero in 2021 to solve the most challenging problem of humanity with technology - the mobility.
                  <br />
                  <br />
                  Everyday we travel over 10 billion kms on a daily basis, but every movement of ours come at a cost. Just while you are reading about us here, 1 unfortunate person would have lost his precious life on road. A city like Bengaluru wastes 250,000 liters of fuel per hour everyday while being stuck in traffic. We are in times where we spend 2 hours in traffic to get to the office, only to work on an app that delivers within 10 minutes. Sometimes we really have to take a step back and gauge the absurdity we are witnessing. 
                  
                  <br />
                  <br />
                  These costs when accumulated together leads to $22 Bn in losses every year to an entire nationwide economy. The real cost of such inefficiencies is our restrained collective growth, which is a limiting factor to upliftment of our lives. That's what autonomous vehicles can do way more effectively than any of us. But can they handle the kind of traffic we all encounter?
                  <br/>
                  <br/>
                  It is extremely difficult with the existing methodologies, since the real world is neither structured nor does it follow a certain set of rules. This is where Minus Zero brings a new paradigm to solve it for good.
                </span>
              </div>
            </div>
          </div>
          <div style={{minHeight:"125vh"}} className="aboutUsMobSecond">
        <div >
          <img src="whoweare.webp" alt="aboutusmob" />
        </div>
        <div className="aboutUsMobSecondHead"><span style={{color:"rgb(49, 195, 183)"}}>Who we are?</span></div>
        <span className="aUSecondBoxText" style={{padding:"0 10%"}}>
                We founded Minus Zero in 2021 to solve the most challenging problem of humanity with technology - the mobility.
                  <br />
                  <br />
                  Everyday we travel over 10 billion kms on a daily basis, but every movement of ours come at a cost. Just while you are reading about us here, 1 unfortunate person would have lost his precious life on road. A city like Bengaluru wastes 250,000 liters of fuel per hour everyday while being stuck in traffic. We are in times where we spend 2 hours in traffic to get to the office, only to work on an app that delivers within 10 minutes. Sometimes we really have to take a step back and gauge the absurdity we are witnessing. 
                  
                  <br />
                  <br />
                  These costs when accumulated together leads to $22 Bn in losses every year to an entire nationwide economy. The real cost of such inefficiencies is our restrained collective growth, which is a limiting factor to upliftment of our lives. That's what autonomous vehicles can do way more effectively than any of us. But can they handle the kind of traffic we all encounter?
                  <br/>
                  <br/>
                  It is extremely difficult with the existing methodologies, since the real world is neither structured nor does it follow a certain set of rules. This is where Minus Zero brings a new paradigm to solve it for good.
                </span>
      </div>

          <div className="aUThird">
            <div className="aUThirdHeading">Meet the Founders</div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "stretch",
                width: "100vw",
              }}
            >
              <div className="aUThirdmid">
                <div className="flipCardBox">
                  <div className={`flip-card ${
      selectedImage1 === "vision" ? "selected1" : ""
    }`} onClick={() => handleImageClick1("vision")}>
                    <div className="flip-card-inner card1">
                      <div className="flip-card-front-1">
                      </div>
                      <div className="flip-card-back">
                      </div>
                    </div>
                  </div>
                </div>
                <div className="aboutUsMobThirdInfobox spacing">
                  <div className="aboutUsMobThirdInfo1 texter">
                    Gagandeep Reehal
                  </div>
                  <div className="aboutUsMobThirdInfo2 texter2">CEO & CTO</div>
                  <button
                    className="buttoninfo"
                    onClick={() => handleButtonClick(1)}
                  >
                    Read Bio
                  </button>
                </div>
              </div>
              <div className="aUThirdmid">
                <div className={`flip-card ${
      selectedImage2 === "vision2" ? "selected2" : ""
    }`} onClick={() => handleImageClick2("vision2")}>
                  <div className="flip-card-inner card2">
                    <div className="flip-card-front-2">
                      {/* <img src="CTO.webp" alt="Avatar" className="flipCardImg" /> */}
                    </div>
                    <div className="flip-card-back guru">
                    </div>
                  </div>
                </div>
                <div className="aboutUsMobThirdInfobox spacing">
                  <div className="aboutUsMobThirdInfo1 texter">
                    Gursimran Kalra
                  </div>
                  <div className="aboutUsMobThirdInfo2 texter2">COO</div>
                  <button
                    className="buttoninfo"
                    onClick={() => handleButtonClick(2)}
                  >
                    Read Bio
                  </button>
                </div>
              </div>
            </div>
          </div>

          <section className="zoomWeb">
            <ZoomInOnScroll
              onAnimationComplete={handleTriangleAnimationComplete}
            />
          </section>
          <section className="zoomMob">
            <ZoomInOnScrollMob
              onAnimationComplete={handleTriangleAnimationComplete}
            />
          </section>
          {/* <div style={{height:"100vh"}}/> */}

          <div className="aboutUsBack1">
            <img
              style={{ width: "100vw", maxWidth: "1920px" }}
              src="back.png"
              alt="back1"
            />
            <div data-aos="fade-up" data-aos-duration="1100">
            Want to see our journey? 
            </div>
            <div className="timeweb">

            <Link to="/Journey">
              <button
                className="lastButton"
                data-aos="fade-up"
                data-aos-duration="1100"
                >
                Explore
              </button>
            </Link>
                </div>
            <div className="timemob">

           
        <Link to="/Journeymob">
        <button
                className="lastButton"
                data-aos="fade-up"
                data-aos-duration="1100"
                >
                Explore
              </button>

        </Link>
                </div>
          </div>

          {/* <div className="aboutUsBack2">
            <img src="back2.webp" alt="back2" />
            <div data-aos="fade-up" data-aos-duration="1100">
              What!!!
              <br />
              You found Minus Zero interesting.
            </div>
            <button
              className="lastButtonsecond"
              data-aos="fade-up"
              data-aos-duration="1100"
            >
              Join Us
            </button>
          </div> */}
           <section style={{background:"#050809"}}>
          <Footer />

           </section>
        </div>
      </div>
      {activeBoxId === 2 && (
        <div className="overlayabout">
          <div ref={infoBoxRef}>
            <InfoOverlay
              heading={infoBoxes[1].heading}
              para1={infoBoxes[1].para1}
              para2={infoBoxes[1].para2}
              para3={infoBoxes[1].para3}
            />
          </div>
        </div>
      )}

      {activeBoxId === 1 && (
        <div className="overlayabout">
          <div ref={infoBoxRef}>
            <InfoOverlay
              heading={infoBoxes[2].heading}
              para1={infoBoxes[2].para1}
              para2={infoBoxes[2].para2}
              para3={infoBoxes[2].para3}
            />
          </div>
        </div>
      )}
      {/* <div className="aboutusmob">
        <AboutUsMob />
      </div> */}
    </>
  );
};

export default AboutUs;
