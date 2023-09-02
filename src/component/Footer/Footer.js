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
  return (
    <div className="footer">
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
      <article className="footerMiddle">
        <p className="common-txt-clr">
          &copy; {new Date().getFullYear()}
          <span
            className="common-txt-clr"
            style={{ textDecoration: "underline", marginLeft: "0.25rem" }}
          >
            Sanju Sarkar.All rights reserved.
          </span>
        </p>
      </article>
      <div className="footerRight">
        <article className="dev-info">
          <FaGithubSquare
            size={20}
            className="common-txt-clr"
            onClick={handleGithub}
          />
          <a
            href="https://www.linkedin.com/in/sanju-sarkar-941637269"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} className="common-txt-clr" />
          </a>
        </article>
      </div>
    </div>
  );
}

export default Footer;
