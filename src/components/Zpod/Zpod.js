import React, { useEffect } from "react";
import "./Zpod.css";
import Navbar from "../navbar/navbar";
import Footer from "../Footer/Footer";
import Ztech from "../Ztechnology/Ztech";
import AOS from "aos";
import "aos/dist/aos.css";

const Zpod = () => {


  useEffect(() => {
    AOS.init(); //You can add options as per your need inside an object
  }, []);
  return (
    <div className="Zpodback">
      <div>
      <Navbar />

      </div>
      <div className="Zpod2nd">
        <video autoPlay loop muted playsInline style={{ width: "100vw",maxWidth:"1920px" }} preload="metadata">
          <source src="pod2.webm" type="video/webm" />
        </video>
      </div>
<section className="aboutsub">
  <br/>
  <br/>
  <br/>
  <div className="aboutsub1"><span style={{color:"rgb(49, 195, 183)"}}>Re-thinking Design.</span> Re-thinking Future</div>
  <br/>
  <div className="aboutsub2"><span style={{color:"rgb(49, 195, 183)"}}>z</span><span style={{position:"relative",top:"-0.8rem"}}>.</span>Pod</div>
  <br/>

  <div className="aboutsub3">zPod is our concept vehicle that reflects our design principles for the next generation of vehicles to build the most scalable and sustainable interaction between the user and the mobility apparatus.
</div>
</section>
      <div className="Zpod3rd">
        <div className="Zpod3rdOne">
        <img style={{width:"40vw"}} src="about1.png" alt="image1"/>

        </div>
        <div className="Zpod3rdTwo">
          <span className="Zpod3rdTwo1"><span style={{color:"rgb(49, 195, 183)"}}>Bi-</span>directional</span>
          <span className="Zpod3rdTwo2">
          True Vision Autonomy eliminates need of steering wheel allowing vehicles to be bidirectional. It really resolves the hassle of inefficient routing. You don't have to do U-turns or complicated manoeuvres, instead you can just flip and you are ready to go out the other way.
          </span>
        </div>
      </div>

      <div className="Zpod4th">
        <div className="Zpod4thOne">
        <img style={{width:"40vw"}} src="about2.png" alt="image3"/>

        </div>
        <div className="Zpod4thTwo">
          <span className="Zpod3rdTwo1 lineH"><span style={{color:"rgb(49, 195, 183)"}}>Built for </span>  Experience </span>
          <span className="Zpod3rdTwo2">
          The real benefit of True Vision Autonomy is letting humans interact the way we have naturally evolved to interact, face to face. The interiors and the user experience which was earlier driver-led design can transition to a experience-led design - for the riders, the environment and the very reasons we move around.
          </span>
        </div>
      </div>



      <div className="Zpod3rd">
        <div className="Zpod3rdOne">
            <img style={{width:"40vw"}} src="about3.png" alt="image3"/>
        </div>
        <div className="Zpod3rdTwo">
          <span className="Zpod3rdTwo1"><span style={{color:"rgb(49, 195, 183)"}}>Design</span> freedom</span>
          <span className="Zpod3rdTwo2">
          True Vision Autonomy would allow automakers to explore more efficient designs for their next generation vehicles, which was previously restricted by constraints of being made to be driven.
          </span>
        </div>
      </div>



      {/* <div className="tech6">
        <div
          data-aos="fade-up"
          data-aos-duration="1300"
          data-aos-anchor-placement="top-bottom"
        >
          <img src="flowchart.webp" alt="tech" className="tech6img" />{" "}
        </div>
        <div
          className="tech6text1"
          data-aos="fade-up"
          data-aos-duration="1300"
          data-aos-anchor-placement="top-bottom"
        >
          Software
        </div>
        <div
          className="tech6text2"
          data-aos="fade-up"
          data-aos-duration="1300"
          data-aos-anchor-placement="top-bottom"
        >
         Z software is the brains behind how zpod sees, comprehends, and drives. Obstacle and scene recognition, route planning and driving, and deciphering driver intent are all responsibilities of zERO.   ZESS is responsible for emergency control and the technology that underpins the system, both of which are helpful in any circumstance.  
        </div>
      </div> */}
      <Ztech />
<div style={{background:"black"}}>
      <Footer />
</div>
    </div>
  );
};

export default Zpod;
