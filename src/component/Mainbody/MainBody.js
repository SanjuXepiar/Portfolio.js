import "./MainBody.css";
import React from "react";
import { Link } from "react-router-dom";
import backgroundimage from "../../assets/bodyBackground.jpg";
// import profileImage from "../assets/profile.jpg";
//
function MainBody() {
  return (
    <div className="bodyBackground">
      <div className="main">
        <img className="bgImage" src={backgroundimage} alt="Background" />
      </div>
      <div className="content">
        <h2 className="common-txt-clr">hi, i'm Sanju Sarkar</h2>
        <p className="common-txt-clr">I'm a react developer</p>
        <button className="btn">
          <Link to="/project" className="common-txt-clr">
            Project
          </Link>
        </button>
        <button className="btn">
          <Link to="/contact" className="common-txt-clr">
            Contact
          </Link>
        </button>
      </div>
    </div>
  );
}

export default MainBody;
