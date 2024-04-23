import React, { useEffect, useRef, useState } from "react";
import "./Techpage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";
import Techpagehead from "./Techpagehead";
import Navbar from "../navbar/navbar";
import ZtechScrollerMob from "../Ztechnology/ZtechScrollerMob";
import Projects from "../testing/Projects/Projects";

const Techpage = () => {
  const [activeLink, setActiveLink] = useState("");
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const ztechSecondRef = useRef(null);
  const navRef = useRef(null);
  useEffect(() => {
    AOS.init(); //You can add options as per your need inside an object
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const ztechSecondTop = ztechSecondRef.current?.offsetTop;
      const ztechSecondBottom =
        ztechSecondTop + ztechSecondRef.current?.offsetHeight;
      const homeTop = homeRef.current?.offsetTop;
      const aboutTop = aboutRef.current?.offsetTop;
      const servicesTop = servicesRef.current?.offsetTop;
      const portfolioTop = portfolioRef.current?.offsetTop;
      const distanceFromTop = homeTop - scrollPosition;
      const imageHeight = 300;

      if (scrollPosition >= ztechSecondTop) {
        navRef.current?.classList.add("fixed");
      } else {
        navRef.current?.classList.remove("fixed");
      }

      if (scrollPosition + windowHeight >= ztechSecondBottom+300) {
        navRef.current.classList.remove("fixed");
      }

      console.log("1", scrollPosition);
      console.log("2", homeTop);
      console.log("3", aboutTop);
      console.log("4", servicesTop);
      if (window.innerHeight >= 800) {
        if (
          scrollPosition - 1800 >= homeTop &&
          scrollPosition - 1800 < aboutTop
        ) {
          setActiveLink("home");
        } else if (
          scrollPosition - 1800 >= aboutTop &&
          scrollPosition - 1800 < servicesTop
        ) {
          setActiveLink("about");
        } else if (
          scrollPosition - 1800 >= servicesTop &&
          scrollPosition - 1800 < portfolioTop
        ) {
          setActiveLink("services");
        } else if (scrollPosition - 1800 >= portfolioTop) {
          setActiveLink("portfolio");
        } else {
          setActiveLink("");
        }
      }

      if (window.innerHeight >= 600 && windowHeight < 800) {
        if (
          scrollPosition - 1400 >= homeTop &&
          scrollPosition - 1400 < aboutTop
        ) {
          setActiveLink("home");
        } else if (
          scrollPosition - 1400 >= aboutTop &&
          scrollPosition - 1400 < servicesTop
        ) {
          setActiveLink("about");
        } else if (scrollPosition - 1400 >= servicesTop) {
          setActiveLink("services");
        } else {
          setActiveLink("");
        }
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section>
        <Navbar />
      </section>
      <section
      
        className="techTop"
      >
        <div style={{ gap: "15%", height: "22%" }}>
          <div style={{ fontSize: "30px" }}>
            We are re-inventing{" "}
            <span style={{ color: "rgb(49, 195, 183)" }}> AI</span>.
            <br />
          </div>
          <div style={{ fontSize: "30px" }}>
            We are creating{" "}
            <span style={{ color: "rgb(49, 195, 183)" }}>
              {" "}
              embodied intelligence{" "}
            </span>
            .
          </div>
        </div>
        <br />
        <div>
          <video
            autoPlay
            muted
            loop
            style={{ }}
            className="videotech"
          >
            <source src="tech.mp4" />
          </video>
        </div>
      </section>

      <div className="tech1">
        <div className="mobColor">
          <div
            className="t1"
            data-aos="fade-up"
            data-aos-duration="1300"
            data-aos-anchor-placement="top-bottom"
          >
            Nature Inspired{" "}
            <span style={{ color: "rgb(49, 195, 183)" }}>AI</span>{" "}
            <span
              style={{ fontSize: "38px", position: "relative", top: "-1.4rem" }}
            >
              ™
            </span>
          </div>
          <div
            className="t2"
            data-aos="fade-up"
            data-aos-duration="1300"
            data-aos-anchor-placement="top-bottom"
          >
            Existing autonomous vehicle systems face formidable obstacles in
            reliably navigating diverse driving environments, resulting in
            unpredictable behavior. This inherent fragility of the current
            approaches due to the infinite variability of real-world scenarios
            and objects poses challenges that cannot be fully addressed through
            traditional methods.
            <br />
            <br />
            Minus Zero is pioneering a new approach to the underlying AI
            methodologies with Nature-inspired AI, a new paradigm for building
            truly generalized autonomous agents on edge, inspired from elegant
            design of a human brain that makes us more capable decision makers
            than computer algorithms, nurturing the roadmap toward AGI.
            <br />
            <br />
            Nature-inspired AI ™ (NIA) derives its foundations from neuronal
            computations inside a human brain, contributing to learning,
            behavioral awareness, adaptation, episodic memory and predictive
            decision-making.
          </div>
        </div>
      </div>

      <div className="scrollerWeb">
        <div className="Ztechsecond" ref={ztechSecondRef}>
          <nav>
            <div className="nav2" ref={navRef}>
              <ul style={{ listStyleType: "none" }}>
                <li className={activeLink === "home" ? "active" : ""}>
                  <a href="#home">Representation</a>
                </li>
                <li className={activeLink === "about" ? "active" : ""}>
                  <a href="#about">Prediction</a>
                </li>
                <li className={activeLink === "services" ? "active" : ""}>
                  <a href="#services">Adaption</a>
                </li>
              </ul>
            </div>

            <div
              style={{
                background: "transparent",
                paddingTop: "4%",
              }}
            >
              <div id="home" ref={homeRef}>
                <img src="i2.webp" alt="png1" />
                <h2 className="ztechhead">Representation </h2>
                <p className="ztechp">
                  Nature-inspired AI proposes loosely supervised
                  physics-informed and context-aware learning methods that can
                  represent the associations and correlations beyond limited
                  taxonomy reasoning, and can adapt its domain understanding
                  across scenarios.
                </p>
              </div>
              <div id="about" ref={aboutRef}>
                <img src="i1.webp" alt="png2" />
                <h2 className="ztechhead">Prediction </h2>

                <p className="ztechp">
                  Nature-inspired AI allows algorithms to perceive social
                  contracts, predicting the behavior and interactions between
                  the intelligent agents and the environment in a
                  spatio-temporal context. This allows it to be aware of the
                  impact of potential future outcomes in the surroundings.
                </p>
              </div>
              <div id="services" ref={servicesRef}>
                <img src="i3.webp" alt="png3" />
                <h2 className="ztechhead">Adaptation</h2>
                <p className="ztechp">
                  Nature-inspired AI makes an autonomous agent agnostic of the
                  operating environments and the limitations of the actor like a
                  vehicle, helping the algorithms improve and adapt on the go
                  only from visual feedback without the need of extensive
                  training pipelines.
                </p>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="scrollerMob">
        <ZtechScrollerMob />
      </div>

      <div
        className="tech4"
        // data-aos-anchor-placement="top-bottom"
      >
        <div className="tech4sub" data-aos="fade-up" data-aos-duration="1300">
          <div className="tech4sub1">
            <img src="lapi.webp" alt="d2" className="tech4img" />
          </div>
          <div className="tech4sub2">
            <div className="tech4sub2text1"> THE WHITE PAPER</div>
            <div className="tech4sub2text2">
              <span style={{ color: "rgb(49, 195, 183)" }}>
                {" "}
                Nature-inspired AI
              </span>{" "}
              - a novel approach to solve for generalized autonomous agents
            </div>
            <div className="tech4sub2buttondiv">
              <a href="https://form.jotform.com/231640943565055" download="whitepaper">
                <button className="tech4sub2button">Download</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="tech5">
        {/* <div
          data-aos="fade-up"
          data-aos-duration="1300"
          data-aos-anchor-placement="top-bottom"
        >
          <img src="tech.png" alt="tech" className="tech5img" />{" "}
        </div> */}
        <div
          className="tech5text1"
          data-aos="fade-up"
          data-aos-duration="1300"
          data-aos-anchor-placement="top-bottom"
        >
          <span style={{ color: "rgb(49, 195, 183)" }}>True</span> Vision
          Autonomy{" "}
          <span
            style={{ fontSize: "38px", position: "relative", top: "-0.7rem" }}
          >
            ™
          </span>
        </div>
        <div
          className="tech5text2"
          data-aos="fade-up"
          data-aos-duration="1300"
          data-aos-anchor-placement="top-bottom"
        >
          True Vision Autonomy ™ (TVA) is the most scalable and human-like
          autonomous vehicle stack built on the prowess of Nature-inspired AI.
          Relying purely on cameras as primary sensors, it is an enhanced AI
          suite coupled natively with our software and hardware architecture,
          including high-grade cameras and power-efficient in-vehicle compute.
          <br />
          <br />
          Engineered for edge, TVA is optimized for real-time and safety
          critical deployment with high-performance middleware and safety
          utilities, giving it the ability to scale to full autonomy. This
          includes custom engineered utilities for runtime optimization,
          low-latency inference, system supervisor, error handling,
          self-diagnostics and teleoperations.
        </div>
      </div>

      <section className="tech6">
        <div className="tech6sub">
          <div>
            <img src="tech2.png" alt="image1" />
            <div className="imgbelow">Purely Camera-based</div>
          </div>
          <div>
            <img src="tech3.png" alt="image2" />
            <div className="imgbelow">Low-power Compute</div>
          </div>
        </div>
        <div className="tech6sub tech6sub2">
          <div>
            <img src="tech4.png" alt="image3" />
            <div className="imgbelow">
              Can be scaled up to Level 5 capabilities
            </div>
          </div>
          <div>
            <img src="tech1.png" alt="image4" />
            <div className="imgbelow">
              Eliminates LiDARs, RADARS, high-precision IMUs, GPS-RTK and HD
              Mapping
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          background:
            "linear-gradient(124.37deg, rgba(5, 10, 47, 0.9) 10.57%, rgba(0, 0, 0, 0.9) 97.9%)",
        }}
      >
        <Projects />
      </section>
      <Footer />
    </>
  );
};

export default Techpage;
