// import React from 'react'
// import "./Timeline.css"

// const Timeline = () => {
//   return (
//     <div className='timelineMain'>
//         <div className='road'>
//             <img src="road.png" alt="road"/>
//         </div>   
//         <img className='car' src="car.png" alt="car"/>   
//     </div>
//   )
// }
// export default Timeline


import React, { useEffect, useRef } from 'react';
import "./Timeline.css"
const Timeline = () => {
    const carRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        const pathPosition = calculatePathPosition(scrollProgress);
        setCarPosition(pathPosition);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const calculatePathPosition = (scrollProgress) => {
      const curveHeight = 200;
      const curveWidth = 600;
      const offsetX = 50;
  
      const x = Math.sin(scrollProgress * Math.PI * 2) * curveWidth + offsetX;
      const y = scrollProgress * curveHeight;
  
      return { x, y };
    };
  
    const setCarPosition = ({ x, y }) => {
      carRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
  
    return (
      <div className="timeline">
        <div className="timeline-content">
          <div className="timeline-event">
            <h3>Event 1</h3>
            <p>Event description 1</p>
          </div>
          <div className="timeline-event">
            <h3>Event 2</h3>
            <p>Event description 2</p>
          </div>
          <div className="timeline-event">
            <h3>Event 3</h3>
            <p>Event description 3</p>
          </div>
        </div>
        <img ref={carRef} src="car.png" alt="Car" className="car-image" />
      </div>
    );
  };

export default Timeline;