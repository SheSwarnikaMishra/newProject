import React, { useState, useRef, useEffect } from "react";
import "./videoScroll.css";

function VideosScroll() {
  const videoRef = useRef(null);
  const [height, setHeight] = useState({});
  const animationRef = useRef(null);
  const [frameNumber, setFrameNumber] = useState(0);
  const [duration, setDuration] = useState(0);
  const playbackConst = 500;
  let scrollThrottler;

  useEffect(() => {
    const video = videoRef.current;

    video.addEventListener("loadedmetadata", () => {
      setDuration(video.duration);
      setHeight({ height: `${Math.floor(video.duration) * playbackConst}px` });
    });

    return () => {
      video.removeEventListener("loadedmetadata", () => {
        setDuration(video.duration);
        setHeight({
          height: `${Math.floor(video.duration) * playbackConst}px`
        });
      });
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    function handleScroll() {
      if (!scrollThrottler) {
        scrollThrottler = setTimeout(() => {
          setFrameNumber(window.pageYOffset / playbackConst);
          const currentTime = window.pageYOffset / playbackConst;
          if (video) {
            // Use setTimeout to update the video time with a small delay
            setTimeout(() => {
              video.currentTime = currentTime;
            }, 10);
          }
          scrollThrottler = null;
        }, 100); // Adjust the throttle delay as needed (e.g., 200ms)
      }
    }

    function handleResize() {
      clearTimeout(scrollThrottler);
      scrollThrottler = setTimeout(() => {
        const video = videoRef.current;
        if (video) {
          setHeight({ height: `${Math.floor(video.duration) * playbackConst}px` });
        }
        scrollThrottler = null;
      }, 150); // Adjust the debounce delay as needed (e.g., 200ms)
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationRef.current);
      clearTimeout(scrollThrottler);
    };
  }, []);

  return (
    <>
      <div id="set-height" style={height}>
        <p id="time"></p>

        <video
          id="v0"
          ref={videoRef}
          tabIndex="0"
          autoBuffer="autoBuffer"
          preload="auto"
          
        >
          <source
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
             src="timelinemob.mp4"  >
</source>
        </video>
        
      </div>
    </>
  );
}

export default VideosScroll;