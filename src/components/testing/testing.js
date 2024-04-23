
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testing.css';

function Testing() {
  const settings = {
    // dots: true,
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed:500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows: true,
    autoplay: false,
    duration: 60,
  };

  return (
    <div style={{background:"blue",height:"100vh"}}>
    <Slider className='carPadMain' {...settings}>
      <div className='carPad'>
        <img className='imgSize' src="hori1.webp" alt="Image 1" />
      </div>
      <div className='carPad'>
        <img className='imgSize' src="hori2.webp" alt="Image 2" />
      </div>
      <div className='carPad'>
        <img className='imgSize' src="hori3.webp" alt="Image 3" />
      </div>
    </Slider>
    </div>
  );
}

export default Testing;