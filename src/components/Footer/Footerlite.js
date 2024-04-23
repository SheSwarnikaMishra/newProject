import React from "react";
import "./Footerlite.css";
const Footerlite = () => {
  return (
    <>
      <div className="FooterMainlite" style={{background:" linear-gradient(180deg, #091136 0%, #26516D 147.32%)"}}>
        <div className="footerBox1lite">
          <div className="fsub1lite">
            <img className="fsub1imglite" src="minusblack.webp" alt="logo" />
          </div>
          <div className="fsub2lite">
            <div>
              <div>COMPANY</div>
              <ul className="footerUllite">
                <li>About</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="fsub2lite">
            <div>
              <div>VEHICLE</div>
              <ul className="footerUllite">
                <li>Vehicle</li>
                <li>Autonomy</li>
                <li>Safety</li>
              </ul>
            </div>

        </div>
        </div>
        <div className="linelite"></div>
        <div className="footerBox2lite">
          <div className="fbsub1lite">
            {/* <img src="face.png" alt="facebook"/> */}
             <a href="https://www.linkedin.com/company/minuszero/">
             <img src="link.png" alt="facebook"/>
            </a>
            <a href="https://twitter.com/teamminuszero">
              <img style={{height:"46px"}} src="tweet.png" alt="facebook"/>
              </a>
            <a href="https://www.instagram.com/">
              <img src="insta.png" alt="facebook"/>
              </a>
            <a href="https://www.youtube.com/@teamminuszero">
              <img style={{height:"46px"}} src="youtube.png" alt="facebook"/>
              </a>
          </div>
          <div className="fbsub2lite">
            <span>&#169; Minus Zero, 2022, India</span>
            <span>Terms of Use</span>
            <span> Privacy Policy</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footerlite;