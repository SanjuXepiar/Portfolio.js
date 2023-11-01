import "./MainBody.css";
import React from "react";
import backgroundimage from "../../assets/bodyBackground.jpg";
//
function MainBody() {
  return (
    <>
      <div className="main">
        <img className="bgImage" src={backgroundimage} alt="Background" />
      </div>
      <div className="content">
        <h2 className="common-txt-clr">hi, i'm Sanju Sarkar</h2>
        <p className="common-txt-clr">I'm a react developer</p>

        <a href="Sanju-SarkarResume.pdf" target="_blank">
          Resume
        </a>
      </div>
    </>
  );
}

export default MainBody;
