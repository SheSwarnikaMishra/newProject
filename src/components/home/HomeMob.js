import React, { useState, useEffect, useRef } from "react";
import "./home.css";
import HomeCarousel from "./HomeCarousel";
import HomeInfiniteScroll from "./HomeInfiniteScroll";
import Footer from "../Footer/Footer";
import HomeCarouselMob from "./HomeCarouselMob";
import Navbar from "../navbar/navbar";
import Videoplayer from "./Videoplayer";
import Homemobslider from "./Homemobslider";
import HomeInfiniteScrollMob from "./Homescrollmob";
import Projects2 from "../testing/Projects2/Projects";

const Homemob = () => {



  return (
    <>
      <div className="homebody">
        <Navbar />
        <section style={{position:"relative"}}>
          <div>
            
          <div className="videoBodymob">
            <div>
              <video autoPlay  muted style={{ width: "100vw", marginTop: "-50vw" }}>
                <source src="homemob4.mp4" />
              </video>

            </div>
          </div>
              </div>
        </section>
<section style={{position:"relative"}}>

              <div className="homevideotext" >              <span style={{color:"rgb(49, 195, 183)"}}>We build AI.</span> We teach cars how to drive.
</div>
</section>
      <section style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"justify",color:"white",gap:"15px"}}>
         <div style={{fontSize:"38px",position:"relative",fontWeight:"600"}}>
          Introducing <span style={{color:"rgb(49, 195, 183)"}}>z.Pod</span>
         </div>
         <div style={{fontSize:"18px"}}>
         India's first autonomous vehicle

         </div>
         <div style={{fontSize:"12px",padding:"0 13%"}}>
         Built on the foundations of Nature-inspired AI, zPod is a concept
            vehicle showcasing the powers of True Vision Autonomy - the most
            safe and scalable stack ever built relying only on camera sensors.{" "}
         </div>
      </section>
      <section>
          <Projects2 />
        </section>
        <section style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"justify",color:"white",gap:"15px"}}>
         <div style={{fontSize:"42px"}}>
          z.Day <span style={{color:"rgb(49, 195, 183)"}}>2023</span>
         </div>
      
         <div style={{fontSize:"14px",padding:"0 13%"}}>
         This zDay 2023, Minus Zero created history where India witnessed it’s first autonomous vehicle live in action.<br/><br/>“This is one ride for me, but a giant leap for mankind and India”<br/><br/>
- Kris Gopalakrishnan, co-founder of Infosys
(June 4, 2023 after taking ride in India’s first AV)
         </div>
      </section>
      <section>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"5% 0"}}>
              <video autoPlay loop muted controls style={{ width: "80vw",maxWidth:"1000px",borderRadius:"20px" }}>
                <source src="zday2.webm" />
              </video>
            </div>
        </section>
        <section>
        <img style={{width:"100vw"}} src="investors.png" alt="investors"/>

        </section>
        <section>
          <div
            style={{
              background:
                "linear-gradient(103.7deg, #0A142F -12.57%, #06081D 152.82%)",
                height:"45vh",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
            }}
          >
            <HomeInfiniteScrollMob />
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Homemob;