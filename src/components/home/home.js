import React, { useState, useEffect, useRef } from "react";
import "./home.css";
import HomeCarousel from "./HomeCarousel";
import HomeInfiniteScroll from "./HomeInfiniteScroll";
import Footer from "../Footer/Footer";
import Homemob from "./HomeMob";
import HomeCarouselMob from "./HomeCarouselMob";
import Navbar from "../navbar/navbar";
import Videoplayer from "./Videoplayer";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects2 from "../testing/Projects2/Projects";
import Projects3 from "../testing/Projects3/Projects";

const Home = () => {
  useEffect(() => {
    AOS.init(); //You can add options as per your need inside an object
  }, []);

  const ContainerRef = useRef(null);
  const LeftRef = useRef(null);
  const CenterRef = useRef(null);
  const RightRef = useRef(null);
  const Slide3Ref = useRef(null);
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);
  const circle3Ref = useRef(null);
  const display1Ref = useRef(null);
  const display2Ref = useRef(null);
  const display3Ref = useRef(null);

  const [scrollY, setScrollY] = useState(0);
  const Slide1Ref = useRef(null);
  const Slide1child1Ref = useRef(null);
  const Slide1child2Ref = useRef(null);
  const isIntersectingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === Slide1Ref.current) {
          isIntersectingRef.current = entry.isIntersecting;
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold value as needed
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    observer.observe(Slide1Ref.current);

    return () => {
      if (Slide1Ref.current) {
        observer.unobserve(Slide1Ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (Slide1Ref.current && isIntersectingRef.current) {
      const slide1child1Element = Slide1child1Ref.current;
      const slide1child2Element = Slide1child2Ref.current;

 if(window.innerHeight>800 && window.innerHeight<=1000){
  if (scrollY < 750) {
    const translateXValue1 = scrollY * 2.4; // Reverse the direction
    const translateXValue2 = -scrollY * 2.1;

    slide1child1Element.style.transform = `translateX(${translateXValue1}px)`;
    slide1child2Element.style.transform = `translateX(${translateXValue2}px)`;
  }
}

if(window.innerHeight>1000 && window.innerHeight<=1100){
  if (scrollY < 750) {
    const translateXValue1 = scrollY * 2.48; // Reverse the direction
    const translateXValue2 = -scrollY * 2.18;

    slide1child1Element.style.transform = `translateX(${translateXValue1}px)`;
    slide1child2Element.style.transform = `translateX(${translateXValue2}px)`;
  }
}

if(window.innerWidth>1500 && window.innerWidth<=1600){
  console.log("x",scrollY)
  if (scrollY < 750) {
    const translateXValue1 = scrollY * 2; // Reverse the direction
    const translateXValue2 = -scrollY * 2.3;

    slide1child1Element.style.transform = `translateX(${translateXValue1}px)`;
    slide1child2Element.style.transform = `translateX(${translateXValue2}px)`;
  }
}
if(window.innerWidth>1400 && window.innerWidth<=1500){
  console.log("x",scrollY)
  if (scrollY < 750) {
    const translateXValue1 = scrollY * 2.08; // Reverse the direction
    const translateXValue2 = -scrollY * 2.18;

    slide1child1Element.style.transform = `translateX(${translateXValue1}px)`;
    slide1child2Element.style.transform = `translateX(${translateXValue2}px)`;
  }
}
if(window.innerWidth>1300 && window.innerWidth<=1400){
  console.log("x",scrollY)
  if (scrollY < 750) {
    const translateXValue1 = scrollY * 1.849; // Reverse the direction
    const translateXValue2 = -scrollY * 2.12;

    slide1child1Element.style.transform = `translateX(${translateXValue1}px)`;
    slide1child2Element.style.transform = `translateX(${translateXValue2}px)`;
  }
}
if(window.innerWidth>1200 && window.innerWidth<=1300){
  console.log("x",scrollY)
  if (scrollY < 750) {
    const translateXValue1 = scrollY * 1.65; // Reverse the direction
    const translateXValue2 = -scrollY * 2.05;

    slide1child1Element.style.transform = `translateX(${translateXValue1}px)`;
    slide1child2Element.style.transform = `translateX(${translateXValue2}px)`;
  }
}
if(window.innerWidth>1100 && window.innerWidth<=1200){
  console.log("x",scrollY)
  if (scrollY < 750) {
    const translateXValue1 = scrollY * 1.574; // Reverse the direction
    const translateXValue2 = -scrollY * 2.06;

    slide1child1Element.style.transform = `translateX(${translateXValue1}px)`;
    slide1child2Element.style.transform = `translateX(${translateXValue2}px)`;
  }
}
if(window.innerWidth>1000 && window.innerWidth<=1100){
  console.log("x",scrollY)
  if (scrollY < 750) {
    const translateXValue1 = scrollY * 1.48; // Reverse the direction
    const translateXValue2 = -scrollY * 2;

    slide1child1Element.style.transform = `translateX(${translateXValue1}px)`;
    slide1child2Element.style.transform = `translateX(${translateXValue2}px)`;
  }
}
if(window.innerWidth>900 && window.innerWidth<=1000){
  console.log("x",scrollY)
  if (scrollY < 750) {
    const translateXValue1 = scrollY * 1.35; // Reverse the direction
    const translateXValue2 = -scrollY * 2;

    slide1child1Element.style.transform = `translateX(${translateXValue1}px)`;
    slide1child2Element.style.transform = `translateX(${translateXValue2}px)`;
  }
}
if(window.innerWidth>800 && window.innerWidth<=900){
  console.log("x",scrollY)
  if (scrollY < 750) {
    const translateXValue1 = scrollY * 1.3; // Reverse the direction
    const translateXValue2 = -scrollY * 1.9;

    slide1child1Element.style.transform = `translateX(${translateXValue1}px)`;
    slide1child2Element.style.transform = `translateX(${translateXValue2}px)`;
  }
}
}
}, [scrollY]);

  
  const Slide2Ref = useRef(null);
  const Slide2child1Ref = useRef(null);
  const Slide2child2Ref = useRef(null);
  const isIntersecting2Ref = useRef(false);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === Slide2Ref.current) {
          isIntersecting2Ref.current = entry.isIntersecting && entry.intersectionRatio >= 0.7;
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: [0, 0.7], // Adjust this threshold value as needed
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    observer.observe(Slide2Ref.current);

    return () => {
      if (Slide2Ref.current) {
        observer.unobserve(Slide2Ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (Slide2Ref.current && isIntersecting2Ref.current) {
      const slide2child1Element = Slide2child1Ref.current;
      const slide2child2Element = Slide2child2Ref.current;
console.log("Y",scrollY)

if(window.innerHeight>800 && window.innerHeight<=1000){
  if (scrollY < 1850) {
  const translateXValue3 = scrollY *1; // Reverse the direction
  const translateXValue4 = -scrollY *0.85;

  slide2child1Element.style.transform = `translateX(${translateXValue3}px)`;
  slide2child2Element.style.transform = `translateX(${translateXValue4}px)`;
  }
}
 if(window.innerHeight>1000 && window.innerHeight<=1100){
  if(scrollY <1850){

    const translateXValue3 = scrollY *1.04; // Reverse the direction
    const translateXValue4 = -scrollY *0.854;
    
    slide2child1Element.style.transform = `translateX(${translateXValue3}px)`;
    slide2child2Element.style.transform = `translateX(${translateXValue4}px)`;
  }
}

if(window.innerWidth>1500 && window.innerWidth<1600){
  if (scrollY < 1850) {
    const translateXValue3 = scrollY *0.85; // Reverse the direction
    const translateXValue4 = -scrollY * 0.87;

    slide2child1Element.style.transform = `translateX(${translateXValue3}px)`;
    slide2child2Element.style.transform = `translateX(${translateXValue4}px)`;
  }
}
if(window.innerWidth>1400 && window.innerWidth<=1500){
  if (scrollY < 1800) {
    const translateXValue3 = scrollY *0.82; // Reverse the direction
    const translateXValue4 = -scrollY * 0.82;

    slide2child1Element.style.transform = `translateX(${translateXValue3}px)`;
    slide2child2Element.style.transform = `translateX(${translateXValue4}px)`;
  }
}
if(window.innerWidth>1300 && window.innerWidth<=1400){
  if (scrollY < 1800) {
    const translateXValue3 = scrollY *0.78; // Reverse the direction
    const translateXValue4 = -scrollY * 0.78;

    slide2child1Element.style.transform = `translateX(${translateXValue3}px)`;
    slide2child2Element.style.transform = `translateX(${translateXValue4}px)`;
  }
}
if(window.innerWidth>1200 && window.innerWidth<=1300){
  if (scrollY < 1800) {
    const translateXValue3 = scrollY *0.70; // Reverse the direction
    const translateXValue4 = -scrollY * 0.78;

    slide2child1Element.style.transform = `translateX(${translateXValue3}px)`;
    slide2child2Element.style.transform = `translateX(${translateXValue4}px)`;
  }
}
if(window.innerWidth>1100 && window.innerWidth<=1200){
  if (scrollY < 1800) {
    const translateXValue3 = scrollY *0.65; // Reverse the direction
    const translateXValue4 = -scrollY * 0.80;

    slide2child1Element.style.transform = `translateX(${translateXValue3}px)`;
    slide2child2Element.style.transform = `translateX(${translateXValue4}px)`;
  }
}
if(window.innerWidth>1000 && window.innerWidth<=1100){
  if (scrollY < 1800) {
    const translateXValue3 = scrollY *0.59; // Reverse the direction
    const translateXValue4 = -scrollY * 0.76;

    slide2child1Element.style.transform = `translateX(${translateXValue3}px)`;
    slide2child2Element.style.transform = `translateX(${translateXValue4}px)`;
  }
}
if(window.innerWidth>900 && window.innerWidth<=1000){
  if (scrollY < 1800) {
    const translateXValue3 = scrollY *0.54; // Reverse the direction
    const translateXValue4 = -scrollY * 0.76;

    slide2child1Element.style.transform = `translateX(${translateXValue3}px)`;
    slide2child2Element.style.transform = `translateX(${translateXValue4}px)`;
  }
}
if(window.innerWidth>800 && window.innerWidth<=900){
  if (scrollY < 1800) {
    const translateXValue3 = scrollY *0.48; // Reverse the direction
    const translateXValue4 = -scrollY * 0.75;

    slide2child1Element.style.transform = `translateX(${translateXValue3}px)`;
    slide2child2Element.style.transform = `translateX(${translateXValue4}px)`;
  }
}
}
  }, [scrollY]);

  return (
    <>
      <div className="homebody homeweb">
        <Navbar />
        <section>
          <div className="videoBody">
            <div>
              <video
                autoPlay
                muted
                style={{ width: "100vw", maxWidth: "1920px" }}
              >
                <source src="homeNew.mp4" />
              </video>
              <div className="homevideotext">
                <div>
              

                </div>
              <br/>
                <div>
              <span style={{color:"rgb(49, 195, 183)"}}>We build AI.</span> We teach cars how to drive.

                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={ContainerRef}>
          <div className="homeBox1" ref={Slide1Ref}>
            <div
              style={{ width: "40vw" }}
              className="homeBox1left"
              ref={Slide1child1Ref}
            >
              <div
                className="homeBox1desc"
                style={{ position: "relative", top: "8px" }}
              >
                Introducing
              </div>
            </div>
            <div ref={Slide1child2Ref}>
              <div className="homeBox1head">
                z<span style={{ position: "relative", top: "-15px" }}>.</span>
                Pod
              </div>
            </div>
          </div>

          <div className="homecar1mob">
            <HomeCarouselMob />
          </div>
        </section>
        <section>
          <div
            className="homeBox2"
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="bottom-bottom"
          >
            India's first autonomous vehicle
          </div>
        </section>
        <section>
          <div
            className="homeBox2sub"
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="bottom-bottom"
          >
            Built on the foundations of Nature-inspired AI, zPod is a concept
            vehicle showcasing the powers of True Vision Autonomy - the most
            safe and scalable stack ever built relying only on camera sensors.{" "}
          </div>
        </section>
        <section>
          <Projects2 />
        </section>

        <section>
          <div className="homeBox1" ref={Slide2Ref}>
            <div style={{ width: "40vw" }} className="homeBox1left" ref={Slide2child1Ref}>
              <div
                className="homeBox1desc"
                style={{ position: "relative", top: "8px" }}
              >
                z<span style={{ position: "relative", top: "-15px" }}>.</span>
                Day
              </div>
            </div>
            <div>
              <div className="homeBox1head" ref={Slide2child2Ref}> 2023 </div>
            </div>
          </div>
        </section>
       
        <section>
          <div
            className="homeBox2sub"
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="bottom-bottom"
           
          >
            <div style={{display:"flex",gap:"20px"}}>
<span style={{fontSize:"80px",fontFamily:"sans-serif",color:"rgb(49, 195, 183)"}}>“</span>
<span style={{fontSize:"30px",position:"relative",top:"2rem"}}>This is one ride for me, but a giant leap for mankind and India.</span>
            <span style={{fontSize:"80px",fontFamily:"sans-serif",color:"rgb(49, 195, 183)"}}>”</span>
            </div>
            <br/><br/><br/>
<div style={{textAlign:"center"}}>

<span style={{fontSize:"24px"}}>Kris Gopalakrishnan</span><br/>
<span style={{color:"rgb(49, 195, 183)"}}>Co-founder of Infosys</span><br/>
<span style={{fontSize:"14px"}}>On June 4, 2023 after taking ride in India’s first AV</span>
</div>

          </div>
        </section>
        <section>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"5% 0"}}>
              <video autoPlay loop muted controls style={{ width: "60vw",maxWidth:"1000px",borderRadius:"20px",marginTop:"7%"}}>
                <source src="zday2.webm" />
              </video>
            </div>
        </section>
        <section
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          {/* <div className="investorHead">Investors, Partners & Awards</div> */}
          <div className="investorImg">
           <img src="investors.png" alt="investors"/>
          </div>
        </section>
        <section>
          <div
            style={{
              background: "#000E1E",
              height: "40vh",
            }}
            className="scrollerNew"
          >
            <HomeInfiniteScroll />
          </div>
        </section>
        <section
          style={{
            background:
              "linear-gradient(184.09deg, #051930 -6.63%, #072241 102.6%)",
          }}
        >
          <Footer />
        </section>
      </div>
      <div className="homemobile">
        <Homemob />
      </div>
    </>
  );
};

export default Home;
