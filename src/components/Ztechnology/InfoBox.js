import React from 'react';
import "./InfoBox.css"
const InfoBox = ({ para , heading }) => {
  return (
    <div className="info-box">
      <div className="info-content-2">
        <h2>
          {heading}
          </h2>
          <div>
        {para}

          </div>
      </div>
    </div>
  );
};

export default InfoBox;