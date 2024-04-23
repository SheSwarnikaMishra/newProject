import React, { useRef, useEffect, useState } from "react";
import "./ZoomInOnScroll.css"

const ZoomInOnScroll = () => {
  const mainRef = useRef(null);
  const [shouldScaleUp, setShouldScaleUp] = useState(false);
  const [shouldRotate, setShouldRotate] = useState(false);
  const [shouldDisplayFlex, setShouldDisplayFlex] = useState(false);
  const [shouldDisplayFixed, setShouldDisplayFixed] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isAtTop, setIsAtTop] = useState(false);
  const animationTimeoutRef = useRef(null); // Added useRef to store the animation timeout reference

  const circularRef1 = useRef(null);
  const circularRef2 = useRef(null);
  const circularRef3 = useRef(null);
  const circularRef4 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top, bottom } = mainRef.current?.getBoundingClientRect();
      const screenHeight = window.innerHeight;
      const threshold = screenHeight * 0.1; // Adjust the threshold as needed
      const scrollThreshold = -400; // Adjust the scroll threshold as needed
       console.log("x",scrollThreshold,"y",top)
      if (top <= threshold ) {
        setShouldScaleUp(true);
      } else {
        setShouldScaleUp(false);
      }

      if (bottom <= screenHeight) {
        setIsAtBottom(true);
        console.log("ss");
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
      // Wait for the scaling animation to finish before triggering the rotation
      animationTimeoutRef.current = setTimeout(() => {
        setShouldRotate(true);
      }, 2000); // Adjust the timeout value as needed
    }

    return () => {
      clearTimeout(animationTimeoutRef.current); // Clear the timeout if the component unmounts or shouldScaleUp changes
    };
  }, [shouldScaleUp]);

  useEffect(() => {
    if (shouldRotate) {
      // Wait for the rotation animation to finish before displaying `aboutusTriSecond` as flex
      animationTimeoutRef.current = setTimeout(() => {
        setShouldDisplayFlex(true);
      }, 2000); // Adjust the timeout value as needed
    }

    return () => {
      clearTimeout(animationTimeoutRef.current); // Clear the timeout if the component unmounts or shouldRotate changes
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
      if (shouldDisplayFixed) {
        const mainTop = mainRef.current?.getBoundingClientRect().top;
        const rotationAngle = mainTop / 5.99;
        if (window.innerHeight > 840 && window.innerHeight < 950) {
          circularRef1.current.style.transform = `rotate(${
            rotationAngle * 0.70
          }deg)`;
          circularRef2.current.style.transform = `rotate(${
            -rotationAngle * 0.70
          }deg)`;
          circularRef3.current.style.transform = `rotate(${
            -rotationAngle * 0.70
          }deg)`;
          circularRef4.current.style.transform = `rotate(${
            -rotationAngle * 0.70
          }deg)`;
        } else if (window.innerHeight > 950 && window.innerHeight < 1050) {
          circularRef1.current.style.transform = `rotate(${
            rotationAngle * 0.75
          }deg)`;
          circularRef2.current.style.transform = `rotate(${
            -rotationAngle * 1.3 * 0.77
          }deg)`;
          circularRef3.current.style.transform = `rotate(${
            -rotationAngle * 0.75
          }deg)`;
          circularRef4.current.style.transform = `rotate(${
            -rotationAngle * 0.75
          }deg)`;
        } else if (window.innerHeight > 1050 && window.innerHeight < 1081) {
          circularRef1.current.style.transform = `rotate(${
            rotationAngle * 0.6
          }deg)`;
          circularRef2.current.style.transform = `rotate(${
            -rotationAngle * 0.6
          }deg)`;
          circularRef3.current.style.transform = `rotate(${
            -rotationAngle * 0.6
          }deg)`;
          circularRef4.current.style.transform = `rotate(${
            -rotationAngle * 0.6
          }deg)`;
        } else {
          circularRef1.current.style.transform = `rotate(${
            rotationAngle * 0.87
          }deg)`;
          circularRef1.current.style.transition = `transform`;
          circularRef2.current.style.transform = `rotate(${
            -rotationAngle * 0.87
          }deg)`;
          circularRef3.current.style.transform = `rotate(${
            -rotationAngle * 0.87
          }deg)`;
          circularRef4.current.style.transform = `rotate(${
            -rotationAngle * 0.87
          }deg)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(animationTimeoutRef.current); // Clear the timeout if the component unmounts
    };
  }, [shouldDisplayFixed]);

  return (
    <>
      {/* <div style={{ height: '100vh' }} /> */}
      <div className={`aboutusTri ${isAtBottom ? "alignend" : ""}`} ref={mainRef}>
        <div
          ref={circularRef1}
          className={`aboutusTrifirst ${shouldScaleUp ? "scale-up-new" : ""} ${
            shouldRotate ? "rotate-new" : ""
          } ${shouldDisplayFixed ? "fixed-display" : ""} `}
        >
          <div className={`aboutusli1 ${shouldRotate ? "lirotate1" : ""} ${shouldDisplayFlex ? "licancelrotate" : ""}`}>
            <div ref={circularRef2}>Goal</div>
          </div>
          <div className="aboutusli2">
            <img
              src="ppo.png"
              alt="triangle"
              className="aboutusTriangle"
            />
          </div>
          <div className="aboutusli3">
            <div
              ref={circularRef3}
              className={`aboutusli ${shouldRotate ? "lirotate3" : ""}`}
            >
              Idea
            </div>
            <div
              ref={circularRef4}
              className={`aboutusli ${shouldRotate ? "lirotate3" : ""}`}
            >
              Vision
            </div>
          </div>
        </div>
        <div
          className={`aboutusTriSecond ${
            shouldDisplayFlex ? "display-flex" : ""
          } ${shouldDisplayFixed ? "fixing" : ""} `}
        >
          <div className="aUFourthBoxChild2">
            <div>
              <img
                src="vision.jpg"
                style={{
                  filter: "drop-shadow(0px 4px 24px rgba(255, 255, 255, 0.25))",
                  borderRadius: "49px",
                  width: "30vw",
                  height: "20vw",
                }}
                alt="vision"
              />
            </div>
            <div className="aUFourthBoxChild2Head">Vision</div>
            <div className="aUFourthBoxChild2Text">
            To solve one of  most challenging problems that limit human evolution - the mobility apparatus.

            </div>
          </div>
          
          <div className="aUFourthBoxChild2">
            <div>
              <img
                src="idea.png"
                style={{
                  filter: "drop-shadow(0px 4px 24px rgba(255, 255, 255, 0.25))",
                  borderRadius: "49px",
                  width: "30vw",
                  height: "20vw",
                }}
                alt="vision"
              />
            </div>
            <div className="aUFourthBoxChild2Head">Idea</div>
            <div className="aUFourthBoxChild2Text">
            To bridge the gap between human mind and computer algorithms by re-thinking AI paradigm inspired by the biological intelligence.
                        </div>
          </div>
          <div className="aUFourthBoxChild2">
            <div>
              <img
                src="goal2.webp"
                style={{
                  filter: "drop-shadow(0px 4px 24px rgba(255, 255, 255, 0.25))",
                  borderRadius: "49px",
                  width: "30vw",
                  height: "20vw",
                }}
                alt="vision"
              />
            </div>
            <div className="aUFourthBoxChild2Head">Goal</div>
            <div className="aUFourthBoxChild2Text">
            To accelerate the scalable and safe adoption of autonomous mobility across terrains, geographies, use-cases and vehicle form factors.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZoomInOnScroll;