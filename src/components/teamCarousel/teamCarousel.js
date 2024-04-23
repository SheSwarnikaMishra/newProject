import React, { useEffect, useState } from "react";
import "./teamCarousel.css";
import $ from "jquery";

const TeamCarousel = () => {
  function rotate() {
    var lastChild = $(".slider div:last-child").clone();
    // $('#test').html(lastChild)
    $(".slider div").removeClass("firstSlide");
    $(".slider div:last-child").remove();
    $(".slider").prepend(lastChild);
    $(lastChild).addClass("firstSlide");
}
   
  window.setInterval(function(){
    rotate()
  }, 2500);


  return (
    <div classNameName="teamCarouselPage">
      <div classNameName="teamCarouselPageHeading">Know Your Co-Z</div>
      <div className="container">
        <div className="slider">
          <div className="box1"></div>
          <div className="box2"></div>
          <div className="box3"></div>
          <div className="box4"></div>
          <div className="box5"></div>
          <div className="box6"></div>
          <div className="box7"></div>
        </div>
      </div>
      <div id="test"></div>
    </div>
  );
};

export default TeamCarousel;
