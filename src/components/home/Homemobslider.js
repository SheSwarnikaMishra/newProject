import React, { useEffect, useRef, useState } from "react";
import "./Homemobslider.css";

const Homemobslider = () => {
  const mainSectionRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);
  const circle3Ref = useRef(null);
  const CenterRef = useRef(null);

  const Slide1Ref = useRef(null);
  const Slide2Ref = useRef(null);
  const Slide3Ref = useRef(null);

  useEffect(() => {
    const handleMainScroll = () => {
      const scrollLeft = mainSectionRef.current.scrollLeft;
      section1Ref.current.scrollLeft = scrollLeft;
      section2Ref.current.scrollLeft = scrollLeft;
    };

    const handleSection1Scroll = () => {
      const scrollLeft1 = section1Ref.current.scrollLeft;
      mainSectionRef.current.scrollLeft = scrollLeft1;
      section2Ref.current.scrollLeft = scrollLeft1;
    };

    const handleSection2Scroll = () => {
      const scrollLeft2 = section2Ref.current.scrollLeft;
      mainSectionRef.current.scrollLeft = scrollLeft2;
      section1Ref.current.scrollLeft = scrollLeft2;
    };

    if (mainSectionRef.current) {
      mainSectionRef.current.addEventListener("scroll", handleMainScroll);
    }

    if (section1Ref.current) {
      section1Ref.current.addEventListener("scroll", handleSection1Scroll);
    }

    if (section2Ref.current) {
      section2Ref.current.addEventListener("scroll", handleSection2Scroll);
    }

    return () => {
      if (mainSectionRef.current) {
        mainSectionRef.current.removeEventListener("scroll", handleMainScroll);
      }

      if (section1Ref.current) {
        section1Ref.current.removeEventListener("scroll", handleSection1Scroll);
      }

      if (section2Ref.current) {
        section2Ref.current.removeEventListener("scroll", handleSection2Scroll);
      }
    };
  }, []);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === Slide1Ref.current) {
          circle1Ref.current?.classList.toggle("active1", entry.isIntersecting);
        } else if (entry.target === Slide2Ref.current) {
          circle2Ref.current?.classList.toggle("active1", entry.isIntersecting);
        } else if (entry.target === Slide3Ref.current) {
          circle3Ref.current?.classList.toggle("active1", entry.isIntersecting);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold value as needed
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (Slide1Ref.current) {
      observer.observe(Slide1Ref.current);
    }
    if (Slide2Ref.current) {
      observer.observe(Slide2Ref.current);
    }
    if (Slide3Ref.current) {
      observer.observe(Slide3Ref.current);
    }

    return () => {
      if (Slide1Ref.current) {
        observer.unobserve(Slide1Ref.current);
      }
      if (Slide2Ref.current) {
        observer.unobserve(Slide2Ref.current);
      }
      if (Slide3Ref.current) {
        observer.unobserve(Slide3Ref.current);
      }
    };
  }, []);

  return (
    <>
      <div className="homemobslider-container">
        <div className="homemobslider-content">
          <div className="homeMobSlider1" ref={mainSectionRef} style={{scrollSnapType:"x mandatory"}}>
            <div style={{scrollSnapAlign:"start"}}>
              <img
                src="robo2.webp"
                alt="zex"
                style={{ height: "250px", width: "250px", paddingLeft: "6%" }}
                className="zrobo"
              />
            </div>
            <div style={{scrollSnapAlign:"start"}}>
              <img
                src="finalPod.webp"
                alt="zex"
                style={{ width: "282px",paddingLeft: "2%" }}
                className="finalpod"
              />
            </div>
            <div style={{scrollSnapAlign:"start"}}>
              <video
                autoPlay
                loop
                muted
                controls
                style={{
                  width: "75vw",
                  borderRadius: "20px",
                }}
              >
                <source src="zday2.webm" />
              </video>
            </div>
          </div>

          <div className="homeMobSlider2">



            <div>
              <div>
                <img className="i1" src="zfinal.png" alt="Zpod" />
              </div>
            </div>



            <div style={{display:"flex",overflowX:"scroll",alignItems:"center",gap:"270%",scrollSnapType:"x mandatory"}}  ref={section1Ref}>
              <div style={{scrollSnapAlign:"start"}}>
                <img className="i1" src="zfinal.png" alt="Zpod" style={{visibility:"hidden"}} />
              </div>
              <div style={{scrollSnapAlign:"start"}}>
                <img className="i2" src="pod.png" alt="Zpod" />
              </div>
              <div style={{scrollSnapAlign:"start"}}>
                <img className="i3" src="day.png" alt="Zpod" />
              </div>
            </div>
          </div>

          <div className="homeMobSlider3" ref={section2Ref} style={{scrollSnapType:"x mandatory"}}>
            <div id="slide1mob" className="hcrsText" ref={Slide1Ref} style={{scrollSnapAlign:"start"}}>
              It is a unique approach to AI to achieve full autonomy that is
              inspired by the human mind. It lays down principles and
              methodologies to follow to make AI work just like our brain works,
              while reducing the dependency on excessive data, costly sensors,
              or high-fidelity maps.
            </div>
            <div id="slide2mob" className="hcrsText" ref={Slide2Ref} style={{scrollSnapAlign:"start"}}>
              Z-Pod is India's first fully autonomous vehicle that runs only on
              camera sensors. It brings our vision of Nature-Inspired AI to
              reality. It features a concept design that will inspire next-gen
              vehicles which will be more user-centric than driver-centric.
            </div>
            <div id="slide3mob" className="hcrsText" ref={Slide3Ref} style={{scrollSnapAlign:"start"}}>
              04.06.2023. It is the day when India's first fully autonomous
              vehicle was unveiled to the Indian public for the very first time.
              It marks the beginning of a series of events that will showcase
              pathbreaking innovations in AI which will ultimately lead to
              achieving full autonomy everywhere every time.
            </div>
          </div>
          <div className="homeCarouselCenter" ref={CenterRef}>
                <a href="#slide1mob">
                  <div ref={circle1Ref}></div>
                  </a>
                <a href="#slide2mob">
                  <div ref={circle2Ref}></div>
                  </a>
                <a href="#slide3mob">
                  <div ref={circle3Ref}></div>
                  </a>
              </div>
        </div>
      </div>
    </>
  );
};

export default Homemobslider;
