import React from "react";
import "./AboutUsMob.css";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "../navbar/navbar" 

const AboutUsMob = () => {
  return (
    <>
      {/* <video autoPlay style={{height:"100%",width:"100%"}} className='demovideo' muted >
        <source className='demovideo' src="demo.mp4" type="video/mp4">
        </source>
        </video> */}
      <Navbar/>
      <div>
            <video autoPlay muted style={{ width: "100vw" }}>
              <source src="avenger.webm" />
            </video>
          </div>
      <div style={{minHeight:"110vh"}} className="aboutUsMobSecond">
        <div >
          <img src="whoweare.webp" alt="aboutusmob" />
        </div>
        <div className="aboutUsMobSecondHead">Who we are</div>
        <div className="aboutUsMobSecondText">
        Minus Zero is accelerating the world's transition to autonomous mobility, taking up an unconventional approach towards vision-only autonomy in the trickiest of traffic conditions, drawing inspiration from the human brain to develop the world's most human-like driving experience.
<br/><br/>
From becoming the first company to test an autonomous vehicle on public roads in India, it's been an exponential journey ever since.
<br/><br/>
Backed by India’s leading Tech VC and marquee angels, at Minus Zero, we’re building the world’s most human-like self-driving vehicles (yet safer than human drivers) that will link us to everything and everyone we care about. Mobility, as we see it, is on its way to rebuild itself.
        </div>
      </div>

        <h1 className="aboutUsMobThirdMain">Meet the creator of Coz</h1>
      <div style={{minHeight:"133vh"}} className="aboutUsMobThird">
        <div className="aboutUsMobThirdBox">
          <div className="aboutUsMobThirdImgContainer">
            <img className="aboutUsMobThirdImg" src="gagan.webp" alt="CTO" />
          </div>
        </div>
        <div className="aboutUsMobThirdInfobox">
          <div className="aboutUsMobThirdInfo1">Gagandeep Reehal</div>
          <div className="aboutUsMobThirdInfo2">CEO & CTO</div>
        </div>
        <div className="aboutUsMobThirdText">
          Gagandeep Reehal is co-founder & CEO of Minus Zero, an autonomous
          mobility start-up based out of India .
        </div>
        <div className="aboutUsMobThirdText">
        Closely working at an intuitive intersection of
                      neuroscience, AI & cognitive computing, he is working on a
                      radical shift in how autonomous vehicle problem statement
                      is perceived - taking small steps towards AGI and major
                      leaps towards autonomy.
        </div>
        <div className="aboutUsMobThirdText">
        He has three book publications to his credit, has
                      mentored/judged 65+ developer/hacking events worldwide and
                      spoken at multiple conferences around AI & robotics.
        </div>
      </div>
      <div style={{minHeight:"133vh"}} className="aboutUsMobThird">
        <div className="aboutUsMobThirdBox">
          <div className="aboutUsMobThirdImgContainer">
            <img className="aboutUsMobThirdImg" src="guru.webp" alt="CTO" />
          </div>
        </div>
        <div className="aboutUsMobThirdInfobox">
          <div className="aboutUsMobThirdInfo1">Gursimran Kalra</div>
          <div className="aboutUsMobThirdInfo2">COO</div>
        </div>
        <div className="aboutUsMobThirdText">
        Gursimran Kalra, co-founded Minus Zero to solve toughest problems of mobility - autonomous driving alongside his old high-school companion, Gagandeep, during the lockdown.
        </div>
        <div className="aboutUsMobThirdText">
        Having recently graduated from SRCC, Gursimran Kalra has
                      always been driven by a desire to make a lasting impact on
                      society. He recognizes the imperative for traditional
                      industries to undergo disruptive technological
                      transformations to address the pressing needs of humanity.
        </div>
        <div className="aboutUsMobThirdText">
        Coming from a small town, he always made sure to explore
                      every opportunity that could propel him towards his goal .
        </div>
      </div>




      <div className="aboutUsMobThird">
        <div>
            <img style={{width:"100vw"}} src="vision.webp" alt="am1"/>
        </div>
        <div className="aboutUsMobThirdInfo1">Our Vision</div>
        <div className="aboutUsMobThirdText">
        We are here to a utopian problem of humanity in form of mobility.
              We are approaching this problem by take path of nature inspired AI
              to solve the problem.
        </div>
      </div>
      <div className="aboutUsMobThird">
        <div>
            <img style={{width:"100vw"}} src="idea.webp" alt="am1"/>
        </div>
        <div className="aboutUsMobThirdInfo1">Our Idea</div>
        <div className="aboutUsMobThirdText">
        We have to go through a technical breakthrough in form of true vision autonomy . tt can be achieved by breaking down the conventional AI idea hoe it works.

        </div>
        
      </div>
      <div className="aboutUsMobThird">
        <div>
            <img style={{width:"100vw"}} src="goal.webp" alt="am1"/>
        </div>
        <div className="aboutUsMobThirdInfo1">Our Goal</div>
        <div className="aboutUsMobThirdText">
        By achieving True vision autonomy we will provide the mobility in the safest snd affordable form.

        </div>
        
      </div>

      
      <div className="aboutFourthBox">
        <div>
<img className="aboutFourthBoxImage" src="a1.png" alt="a1"/>
        </div>
        <div className="aboutFourthBoxText">
        Want to see our journey <br/> how we reached
        </div>
        <div>
        <Link to="/Journeymob">
            <button className="aboutFourthBoxButton"> Explore <img style={{position:"relative",top:"2px"}} src="play.png" alt="play"></img></button>

        </Link>
        </div>
      </div>
       
       <div className="aboutLastBox">
        <img style={{width:"100vw"}} src="aboutLast.png" alt="last"/>
        <button className="aboutLastButton">Join Us</button>
       </div>

       <Footer/>
    </>
  );
};

export default AboutUsMob;
