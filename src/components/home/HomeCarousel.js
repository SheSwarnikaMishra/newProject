import React, { useRef, useEffect } from "react";
import "./HomeCarousel.css";

const HomeCarousel = () => {
  const ContainerRef = useRef(null);
  const LeftRef = useRef(null);
  const CenterRef = useRef(null);
  const RightRef = useRef(null);
  const Slide1Ref = useRef(null);
  const Slide2Ref = useRef(null);
  const Slide3Ref = useRef(null);
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);
  const circle3Ref = useRef(null);
  const display1Ref = useRef(null);
  const display2Ref = useRef(null);
  const display3Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const containerTop = ContainerRef.current.getBoundingClientRect().top;
      const containerBottom = ContainerRef.current.getBoundingClientRect().bottom;
      const screenTop = window.pageYOffset || window.scrollY;
      const screenBottom = screenTop + window.innerHeight;

      if (containerTop <= 0 && containerBottom >= screenBottom - screenTop) {
        ContainerRef.current.classList.add("visibility1");
        LeftRef.current.classList.add("fixed1");
        CenterRef.current.classList.add("fixed2");
        RightRef.current.classList.add("fixed3");
      } else {
        LeftRef.current.classList.remove("fixed1");
        CenterRef.current.classList.remove("fixed2");
        RightRef.current.classList.remove("fixed3");
      }
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
          circle1Ref.current.classList.toggle("active1", entry.isIntersecting);
          display1Ref.current.classList.toggle("display1", entry.isIntersecting);
        } else if (entry.target === Slide2Ref.current) {
          circle2Ref.current.classList.toggle("active1", entry.isIntersecting);
          display2Ref.current.classList.toggle("display1", entry.isIntersecting);
        } else if (entry.target === Slide3Ref.current) {
          circle3Ref.current.classList.toggle("active1", entry.isIntersecting);
          display3Ref.current.classList.toggle("display1", entry.isIntersecting);
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
    observer.observe(Slide2Ref.current);
    observer.observe(Slide3Ref.current);

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
    <div className="homeCarouselMain" ref={ContainerRef}>
      <div className="homeCarouselLeft" ref={LeftRef}>
        <div ref={display1Ref}><img className="i1" src="Zpod2.png" alt="Zpod"/></div>
        <div ref={display2Ref}><img className="i2" src="Zui3.png" alt="Zpod"/></div>
        <div ref={display3Ref}><img className="i3" src="Zux2.png" alt="Zpod"/></div>
      </div>
      <div className="homeCarouselCenter" ref={CenterRef}>
        <div ref={circle1Ref}></div>
        <div ref={circle2Ref}></div>
        <div ref={circle3Ref}></div>
      </div>
      <div className="homeCarouselRight scroll-snap" ref={RightRef}>
        <div className="homeCarouselRightSub" ref={Slide1Ref}>
          <div>
            <img src="zfinalPod.webp" alt="zex" />
          </div>
          <div className="hcrsText">
          Z-Pod is a concept car with a design philosophy for the next generation that prioritises user-led driving rather than driver-led driving and focuses on a hassle-free travel that results in a novel experience.           </div>
        </div>
        <div className="homeCarouselRightSub" ref={Slide2Ref}>
          <div>
            <img src="Zuifinal.webp" alt="zex" />
          </div>
          <div className="hcrsText">
          One of the essential components of a z pod is the z Ui. It assists in developing the vehicle's interactional core and in providing the user with tools to connect with them in the event of need.           </div>
        </div>
        <div className="homeCarouselRightSub" ref={Slide3Ref}>
          <div>
            <img src="Zux.webp" alt="zex" />
          </div>
          <div className="hcrsText">
          Z Pod's nucleus is called z Ux. It makes it easier for you to experience the latest generation of cars. Its various elements, including z ESS, z UI, and z RO, make it conceivable.          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HomeCarousel;