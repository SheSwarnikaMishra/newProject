import React, { useRef, useEffect } from 'react';
import './ZtechScrollerMob.css';

const ZtechScrollerMob = () => {
  const sliderRef = useRef(null);
  const circleContainerRef = useRef(null);
  const circleContainerchild1Ref = useRef(null);
  const circleContainerchild2Ref = useRef(null);
  const circleContainerchild3Ref = useRef(null);
  const circleContainerchild4Ref = useRef(null);
  const circleContainerchild5Ref = useRef(null);
  const containerbox4Ref = useRef(null);
  const containerbox5Ref = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = sliderRef.current.scrollLeft;
      const slideWidth = sliderRef.current.offsetWidth;
      const currentIndex = Math.round(scrollLeft / slideWidth);
      
      const circleContainer = circleContainerRef.current;
      const circleContainerchild1 = circleContainerchild1Ref.current;
      const circleContainerchild2 = circleContainerchild2Ref.current;
      const circleContainerchild3 = circleContainerchild3Ref.current;
      const circleContainerchild4 = circleContainerchild4Ref.current;
      const circleContainerchild5 = circleContainerchild5Ref.current;
      const rotateDegrees = currentIndex * -67;
      circleContainer.style.transform = `rotate(${rotateDegrees}deg)`;
      circleContainerchild1.style.transform = `rotate(${-rotateDegrees}deg)`;
      circleContainerchild2.style.transform = `rotate(${-rotateDegrees}deg)`;
      circleContainerchild3.style.transform = `rotate(${-rotateDegrees}deg)`;
      circleContainerchild4.style.transform = `rotate(${-rotateDegrees}deg)`;
      circleContainerchild5.style.transform = `rotate(${-rotateDegrees}deg)`;
      circleContainerchild1Ref.current.classList.add("activelinkbox")
      
      if(rotateDegrees<-200){
        circleContainerchild2Ref.current.classList.add("a2updated");
        circleContainerchild1Ref.current.classList.add("a1updated")
      }else{
        circleContainerchild2Ref.current.classList.remove("a2updated");
        circleContainerchild1Ref.current.classList.remove("a1updated")
      }

      if(rotateDegrees===-0){
        console.log("xx",rotateDegrees)
        circleContainerchild1Ref.current.classList.add("activelinkbox")
      }else{
        circleContainerchild1Ref.current.classList.remove("activelinkbox")

      }

      if(rotateDegrees===-67){
        console.log("xx",rotateDegrees)
        circleContainerchild3Ref.current.classList.add("activelinkbox")
      }else{
        circleContainerchild3Ref.current.classList.remove("activelinkbox")

      }
      if(rotateDegrees===-134){
        console.log("xx",rotateDegrees)
        circleContainerchild5Ref.current.classList.add("activelinkbox")
        circleContainerchild5Ref.current.classList.add("a5updated")
      }else{
        circleContainerchild5Ref.current.classList.remove("activelinkbox")
        circleContainerchild5Ref.current.classList.remove("a5updated")

      }
      if(rotateDegrees===-201){
        console.log("xx",rotateDegrees)
        circleContainerchild4Ref.current.classList.add("activelinkbox")
        circleContainerchild4Ref.current.classList.add("newpoints")
        circleContainerchild2Ref.current.classList.add("newlink")
        circleContainerchild1Ref.current.classList.add("a12")
      }else{
        circleContainerchild4Ref.current.classList.remove("activelinkbox")
        circleContainerchild4Ref.current.classList.remove("newpoints")
        circleContainerchild2Ref.current.classList.remove("newlink")
        circleContainerchild1Ref.current.classList.remove("a12")

      }
     


    };

    const sliderContainer = sliderRef.current;
    sliderContainer.addEventListener('scroll', handleScroll);

    return () => {
      sliderContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    {/* <div style={{height:"100vh"}}/> */}
      <div className='parentContainer'>
        <div className='sliderContainer' ref={sliderRef}>
          <div className='conatinerBoxes'>
            <img src='i2.webp' alt='demo' style={{boxShadow:"0px 4px 24px 0px rgba(255, 255, 255, 0.25)"}} />
            <span>
            Nature-inspired AI proposes loosely supervised
                  physics-informed and context-aware learning methods that can
                  represent the associations and correlations beyond limited
                  taxonomy reasoning, and can adapt its domain understanding
                  across scenarios.           </span>
          </div>
          <div className='conatinerBoxes'>
            <img src='i1.webp' alt='demo' style={{boxShadow:"0px 4px 24px 0px rgba(255, 255, 255, 0.25)"}} />
            <span>
            Nature-inspired AI allows algorithms to perceive social
                  contracts, predicting the behavior and interactions between
                  the intelligent agents and the environment in a
                  spatio-temporal context. This allows it to be aware of the
                  impact of potential future outcomes in the surroundings.
                  </span>
          </div>
          <div className='conatinerBoxes'>
            <img src='i3.webp' alt='demo' style={{boxShadow:"0px 4px 24px 0px rgba(255, 255, 255, 0.25)"}} />
            <span>
            Nature-inspired AI makes an autonomous agent agnostic of the
                  operating environments and the limitations of the actor like a
                  vehicle, helping the algorithms improve and adapt on the go
                  only from visual feedback without the need of extensive
                  training pipelines.
</span>
          </div>
          
        </div>
        <div className='child2'></div>
      </div>
      <div className='circleContainerParent'>
        <div className='circleContainer' ref={circleContainerRef}>
          <span className='a1' ref={circleContainerchild1Ref}>Representation</span>
          <span className='a2' ref={circleContainerchild2Ref}>Adaptation</span>
          <span className='a3' ref={circleContainerchild3Ref}>Prediction</span>
          <img src='circle.png' alt='circle' />
          <span className='a4' ref={circleContainerchild4Ref}>Representation</span>
          <span className='a5' ref={circleContainerchild5Ref}>Adaptation</span>
        </div>
      </div>
    </>
  );
};

export default ZtechScrollerMob;