import React, { useRef, useEffect, useState } from "react";
import "./ZoomInOnScroll.css";

const ZoomInOnScroll = () => {
  const mainRef = useRef(null);
  const [shouldScaleUp, setShouldScaleUp] = useState(false);
  const [shouldRotate, setShouldRotate] = useState(false);
  const [shouldScaleDown, setShouldScaleDown] = useState(false);
  const [shouldDisplayFlex, setShouldDisplayFlex] = useState(false);
  const [shouldDisplayFixed, setShouldDisplayFixed] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isAtTop, setIsAtTop] = useState(false);
  const animationTimeoutRef = useRef(null);

  const circularRef1 = useRef(null);
  const circularRef2 = useRef(null);
  const circularRef3 = useRef(null);
  const circularRef4 = useRef(null);
  const contiRef = useRef(null);

  const Slide1Ref = useRef(null);
  const Slide2Ref = useRef(null);
  const Slide3Ref = useRef(null);
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);
  const circle3Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top, bottom } = contiRef.current?.getBoundingClientRect();
      const screenHeight = window.innerHeight;
      const threshold = screenHeight * 0.3;
      const scrollThreshold = -400;

      if (top <= threshold) {
        setShouldScaleUp(true);
      } else {
        setShouldScaleUp(false);
      }

      if (bottom <= screenHeight) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }

      if (top >= 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }

      if (top <= scrollThreshold) {
        setShouldScaleUp(false);
        setShouldRotate(false);
        setShouldDisplayFlex(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (shouldScaleUp) {
      animationTimeoutRef.current = setTimeout(() => {
        setShouldRotate(true);
      }, 2000);
    }

    return () => {
      clearTimeout(animationTimeoutRef.current);
    };
  }, [shouldScaleUp]);

  useEffect(() => {
    if (shouldRotate) {
      animationTimeoutRef.current = setTimeout(() => {
        setShouldDisplayFlex(true);
        setShouldScaleDown(true);
      }, 2000);
    }

    return () => {
      clearTimeout(animationTimeoutRef.current);
    };
  }, [shouldRotate]);

  useEffect(() => {
    if (shouldDisplayFlex && !isAtTop && !isAtBottom) {
      setShouldDisplayFixed(true);
    } else {
      setShouldDisplayFixed(false);
    }
  }, [shouldDisplayFlex, isAtTop, isAtBottom]);

  useEffect(() => {
    const handleScroll = () => {
      if (shouldDisplayFixed || shouldDisplayFlex) {
        const mainRect = mainRef.current?.getBoundingClientRect();
        const mainWidth = mainRef.current.offsetWidth;
        const scrollLeft = mainRef.current.scrollLeft;
        const containerWidth = mainRef.current.scrollWidth - mainWidth;
        const rotationAngle = 180 + (scrollLeft / containerWidth) * 240;
        console.log("abc", rotationAngle);
        circularRef1.current.style.transform = `rotate(${rotationAngle}deg)`;
        circularRef1.current.style.transition = `transform 0s`;
        circularRef2.current.style.transform = `rotate(${-rotationAngle}deg)`;
        circularRef3.current.style.transform = `rotate(${-rotationAngle}deg)`;
        circularRef4.current.style.transform = `rotate(${-rotationAngle}deg)`;
        if (rotationAngle > 0 && rotationAngle < 200) {
          circularRef2.current.style.fontWeight = "bolder";
          circularRef3.current.style.fontWeight = "normal";
          circularRef4.current.style.fontWeight = "normal";
          circularRef2.current.style.color = "white";
          circularRef3.current.style.color = "gray";
          circularRef4.current.style.color = "gray";
        } else if (rotationAngle > 200 && rotationAngle < 400) {
          circularRef2.current.style.fontWeight = "normal";
          circularRef3.current.style.fontWeight = "normal";
          circularRef4.current.style.fontWeight = "bolder";
          circularRef2.current.style.color = "gray";
          circularRef3.current.style.color = "gray";
          circularRef4.current.style.color = "white";
        } else if (rotationAngle > 400 && rotationAngle < 600) {
          circularRef2.current.style.fontWeight = "normal";
          circularRef3.current.style.fontWeight = "bolder";
          circularRef4.current.style.fontWeight = "normal";
          circularRef2.current.style.color = "gray";
          circularRef3.current.style.color = "white";
          circularRef4.current.style.color = "gray";
        }
      }
    };

    const scrollContainer = mainRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      clearTimeout(animationTimeoutRef.current);
    };
  }, [shouldDisplayFixed, shouldDisplayFlex]);

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
      <div className={`aboutusTri`} ref={contiRef}>
        <div
          ref={circularRef1}
          className={`aboutusTrifirst ${shouldScaleUp ? "scale-up-new2" : ""} ${
            shouldRotate ? "rotate-new2" : ""
          } ${shouldScaleDown ? "flipDiv" : ""}`}
        >
          <div>
            <div
              ref={circularRef2}
              className={`aboutusli1 ${
                shouldRotate ? "lirotate1" : "lirotate1"
              } ${shouldScaleDown ? "flipDiv" : ""}`}
            >
              Vision
            </div>
            <div
              ref={circularRef3}
              className={`aboutusli aboutusli3 item1 ${
                shouldRotate ? "lirotate3" : "lirotate3"
              } ${shouldScaleDown ? "flipDiv" : ""}`}
            >
              Goal
            </div>
            <div
              ref={circularRef4}
              className={`aboutusli aboutusli3 item2 ${
                shouldRotate ? "lirotate3" : "lirotate3"
              } ${shouldScaleDown ? "flipDiv" : ""}`}
            >
              Idea
            </div>

            <img
              src="ppo.png"
              alt="triangle"
              className="aboutusTriangle aboutusli2"
            />
          </div>
        </div>

        <div
          className={`aboutusTriSecond ${
            shouldDisplayFlex ? "display-flex" : ""
          }`}
          ref={mainRef}
        >
          <div className="aUFourthBoxChild2">
            <div>
              <img
                src="vision.jpg"
                style={{
                  filter: "drop-shadow(0px 4px 12px rgba(255, 255, 255, 0.25))",
                  borderRadius: "49px",
                  width: "84vw",
                  height: "auto",
                }}
                alt="vision"
              />
            </div>
            <div className="aUFourthBoxChild2Text" ref={Slide1Ref} style={{textAlign:"justify",padding:"0 10%"}}>
            To solve one of  most challenging problems that limit human evolution - the mobility apparatus.
            </div>
          </div>
          <div className="aUFourthBoxChild2">
            <div>
            <img
                src="idea.png"
                style={{
                  filter: "drop-shadow(0px 4px 12px rgba(255, 255, 255, 0.25))",
                  borderRadius: "49px",
                  width: "84vw",
                  height: "auto",
                }}
                alt="idea"
              />
            </div>
            <div className="aUFourthBoxChild2Text" ref={Slide2Ref} style={{textAlign:"justify",padding:"0 10%"}}>
            To bridge the gap between human mind and computer algorithms by re-thinking AI paradigm inspired by the biological intelligence.
            </div>
          </div>
          <div className="aUFourthBoxChild2">
            <div>
              
              <img
                src="goal2.webp"
                style={{
                  filter: "drop-shadow(0px 4px 12px rgba(255, 255, 255, 0.25))",
                  borderRadius: "49px",
                  width: "84vw",
                  height: "auto",
                }}
                alt="goal"
              />
            </div>
            <div className="aUFourthBoxChild2Text" ref={Slide3Ref} style={{textAlign:"justify",padding:"0 10%"}}>
            To accelerate the scalable and safe adoption of autonomous mobility across terrains, geographies, use-cases and vehicle form factors.
            </div>
          </div>
        </div>
        <div className={`homeCarouselCenter topping ${
            shouldDisplayFlex ? "display-flex2" : ""
          }` }>
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
    </>
  );
};

export default ZoomInOnScroll;
