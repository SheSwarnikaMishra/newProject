import React, { useRef } from "react";
import Slider from "react-slick";
// import Project from "./Project";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import "../testing.css";

let data = [
  {
    img: "first.webp",
    disc: "Name1",
  },
  {
    img: "second.webp",
    disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
  },
  {
    img: "third.webp",
    disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
  },
  {
    img: "fourth.webp",
    disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
  },
  {
    img: "first.webp",
    disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: true,
  infinite: true,
  speed:500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 1,
  arrows: false,
  autoplay: true,
  duration: 60,
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  // let sliderProject = "";
  // sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {/* {sliderProject} */}
        <div>
          <div className="project ddd1 sc-bdVaJa fzbapH">
            <span>Vehicle agnostic</span><br></br>
            <div>
True Vision Autonomy can fluidly adapt to any kind of vehicle form-factor without re-designing the software. </div>
          </div>
        </div>
        <div>
          <div className="project ddd2 sc-bdVaJa fzbapH">
            <span>Use-case agnostic</span><br></br>
            <div>True Vision Autonomy can easily adapt its domain understanding across geographies, terrains, and environmental conditions. </div>
          </div>
        </div>
        <div>
          <div className="project ddd3 sc-bdVaJa fzbapH">
            <span>Geography agnostic</span><br></br>
            <div>True Vision Autonomy can easily adapt its domain understanding across geographies, terrains, and environmental conditions. </div>
          </div>
        </div>
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <img className="backimg" src="leftArrow.png" alt="left" />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <img className="nextimg" src="rightArrow.png" alt="right" />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;
