import React from 'react';
import "./InfoOverlay.css"
const InfoOverlay = ({ para1,para2,para3 , heading }) => {
  return (
    <div className="info-boxabout">
      <div className="info-content">
        {heading} <br/><br/>
        {para1}<br/><br/>
        {para2}<br/><br/>
        {para3}<br/>
      </div>
    </div>
  );
};

export default InfoOverlay;