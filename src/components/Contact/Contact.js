import React from "react";
import "./Contact.css";
import Navbar from "../navbar/navbar.js";
import Contactform from "./Contactform";
import Footerlite from "../Footer/Footerlite";
import Footer from "../Footer/Footer";
const Contact = () => {
  return (
    <div>
      <div
        style={{
          background:"#030725",
          position:"relative",
        }}
        className="navy"
      >
        <Navbar />
      </div>
      <div style={{background:"linear-gradient(107.29deg, #050A30 15.64%, #4699AB 180.36%)"}}>


      <div className="contactform">
        <div
          style={{ width: "33%", display: "flex", justifyContent: "center",flexDirection:"column",alignItems:"center",gap:"25px" }}
          >
            <div className="contactus">Contact Us</div>
          <img src="robo2.webp" alt="Zbot" />
        </div>
        <Contactform />
      </div>
          </div>
      <div className="contactinfos">
        <h2>Do reach out to us</h2>
        <div className="contactsub">
          <a href="mailto:team@minuszero.in" style={{textDecoration:"none"}}><div className="boxes">
            <span>General Info</span>
            <span className="writing">
              Shoot us an email at - team@minuszero.in
            </span>
          </div>
          </a>
          <a href="mailto:careers@minuszero.in" style={{textDecoration:"none"}}><div className="boxes">
            <span>Careers</span>
            <span className="writing">
              Email your query at - careers@minuszero.in
            </span>
          </div>
          </a>
          <a href="mailto:partnerships@minuszero.in" style={{textDecoration:"none"}}><div className="boxes">
            <span>Partnerships</span>
            <span className="writing">
              Send a proposal at - partnerships@minuszero.in
            </span>
          </div>
          </a>
          <a href="mailto:outreach@minuszero.in" style={{textDecoration:"none"}}><div className="boxes">
            <span>Press Releases</span>
            <span className="writing">Email us at - outreach@minuszero.in</span>
          </div>
          </a>
        </div>
      </div>
      <div
        style={{
          background:"#0A142F",
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
