import "./Footer.css";
import React from "react";
import { FaAddressCard } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
function Footer() {
  const handleGithub = () => {
    window.open("https://github.com/SanjuXepiar");
  };
  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/sanju-sarkar-941637269");
  };
  return (
    <div className="footer">
      <div className="footerTop">
        <div className="footerLeft">
          <article className="dev-info address">
            <FaAddressCard size={20} className="common-txt-clr" />
            <span
              className="common-txt-clr"
              style={{ textTransform: "uppercase" }}
            >
              batashi, siliguri, west-bengal, 734427
            </span>
            {/*  */}
          </article>
          <article className="dev-info phone">
            <FaPhoneAlt size={20} className="common-txt-clr" />
            <span className="common-txt-clr">9851929367</span>
          </article>
          <article className="dev-info email">
            <BiLogoGmail size={20} className="common-txt-clr" />
            <span
              className="common-txt-clr"
              style={{ textTransform: "lowercase" }}
            >
              sarkar.sanjusps@gmail.com
            </span>
          </article>
        </div>
        <div className="footerRight">
          <article className="dev-info">
            <FaGithubSquare
              size={23}
              className="common-txt-clr"
              onClick={handleGithub}
            />
            <FaLinkedin
              size={23}
              className="common-txt-clr"
              onClick={handleLinkedin}
            />
          </article>
        </div>
      </div>
      <article className="footerMiddle">
        <p className="common-txt-clr">
          &copy; {new Date().getFullYear()}
          <span className="common-txt-clr">
            Sanju Sarkar.All rights reserved.
          </span>
        </p>
      </article>
    </div>
  );
}

export default Footer;
