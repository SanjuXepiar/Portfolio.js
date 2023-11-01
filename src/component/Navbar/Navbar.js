import React, { useState } from "react";
import "./Navbar.css";
// import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar() {
  // const [toggle, setToggle] = useState(false);
  // const handleChange = () => {
  //   setToggle(!toggle);
  // };

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <section
      className={
        color ? "navHeader navHeaderbg common-pd" : "navHeader common-pd"
      }
    >
      <Link to="/">
        <h1
          className="common-txt-clr"
          style={{ fontWeight: 500, fontSize: "2rem" }}
        >
          Sanju
        </h1>
      </Link>
      <ul className="navLinks">
        <li>
          <Link
            className="common-txt-clr"
            to="/"
            style={{ fontWeight: 500, fontSize: "1.2rem" }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="common-txt-clr"
            to="/project"
            style={{ fontWeight: 500, fontSize: "1.2rem" }}
          >
            Project
          </Link>
        </li>
      </ul>
      {/* <div className="toggleButton" onClick={handleChange}>
        {toggle ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div> */}
    </section>
  );
}

export default Navbar;
