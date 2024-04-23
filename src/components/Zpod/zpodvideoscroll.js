import React, { useEffect, useRef } from 'react';
import './zpodvideoscroll.css';

const ImageSlider = () => {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (containerTop <= 0 && scrollY <= containerTop + windowHeight) {
        sliderRef.current.style.position = 'fixed';
        sliderRef.current.style.top = `${windowHeight}px`;
      } else {
        sliderRef.current.style.position = 'relative';
        sliderRef.current.style.top = '0';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="slider-container" ref={containerRef}>
      <div className="slider-content" ref={sliderRef}>
        <div className="slider-item">1</div>
        <div className="slider-item">2</div>
        <div className="slider-item">3</div>
        <div className="slider-item">4</div>
        <div className="slider-item">5</div>
        <div className="slider-item">6</div>
        <div className="slider-item">7</div>
        <div className="slider-item">8</div>
        <div className="slider-item">9</div>
      </div>
    </div>
  );
};

export default ImageSlider;