import React,{useEffect,useRef} from 'react'
import "./HomeCarouselMob.css"
const HomeCarouselMob = () => {
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
        CenterRef.current.classList.add("fixed2");
        RightRef.current.classList.add("fixed3");
      } else {
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
        } else if (entry.target === Slide2Ref.current) {
          circle2Ref.current.classList.toggle("active1", entry.isIntersecting);
        } else if (entry.target === Slide3Ref.current) {
          circle3Ref.current.classList.toggle("active1", entry.isIntersecting);
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
      {/* <div className="homeCarouselLeft" ref={LeftRef}>
        <div ref={display1Ref}>z.Pod</div>
        <div ref={display2Ref}>z.Ui</div>
        <div ref={display3Ref}>z.Ux</div>
      </div> */}
      <div className="homeCarouselCenter" ref={CenterRef}>
        <div ref={circle1Ref}></div>
        <div ref={circle2Ref}></div>
        <div ref={circle3Ref}></div>
      </div>
      <div className="homeCarouselRight scroll-snap" ref={RightRef}>
        <div className="homeCarouselRightSub" ref={Slide1Ref}>
          <div>
            <img src="finalPod.webp" alt="zex" />
          </div>
          <div className='hcrsHead'>z.Pod</div>
          <div className="hcrsText">
          z Pod is a concept vehicle which is a design philosophy which is for next level generation which focuses on user lead driven vehicle instead of driver lead vehicle which focuses on hassle free journey which lead to a new experience 
          </div>
        </div>
        <div className="homeCarouselRightSub" ref={Slide2Ref}>
          <div>
            <img src="Zuifinal.webp" alt="zex" />
          </div>
          <div className='hcrsHead'>z.Pod</div>

          <div className="hcrsText">
          z Ui is one of the core  part of z pod. It help in creating the  the core of the vehicle which will interacting and giving the user that will connect with user in for of z 
          </div>
        </div>
        <div className="homeCarouselRightSub" ref={Slide3Ref}>
          <div>
            <img src="Zux.webp" alt="zex" />
          </div>
          <div className='hcrsHead'>z.Pod</div>

          <div className="hcrsText">
          z Ux is the core of z Pod. this is where by you  can get to experience the next level gen vehicle. It is done with different component.
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default HomeCarouselMob
