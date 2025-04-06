import React, { useEffect, useState } from "react";
import logo from "../../../public/logo.png";
import { Link } from "react-scroll";
import manu_icon from "../../../public/manubar.png";

import "./Navebar.css";

const Navebar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);
  const [mobileManu, setMobileManu] = useState(false);

  const toggleMenu = () => {
    mobileManu ? setMobileManu(false) : setMobileManu(true);
  };

  return (
    <>
      <div>
        <nav className={`container ${sticky ? " dark-nav" : ""}`}>
          <img src={logo} className="logo" alt="" />

          <ul className={mobileManu ? "" : "hide-mobile-manu"}>
            <li>
              <Link to="hero" smooth={true} offset={0} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="program" smooth={true} offset={-260} duration={500}>
                program
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-150} duration={500}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="campus" smooth={true} offset={-260} duration={500}>
                campus
              </Link>
            </li>
            <li>
              <Link to="testimonial" smooth={true} offset={-260} duration={500}>
                Testimonal
              </Link>
            </li>

            <li>
              <Link
                to="contactus"
                smooth={true}
                offset={-260}
                duration={500}
                className="btn"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <img
            src={manu_icon}
            className="manu-icon"
            alt=""
            onClick={toggleMenu}
          />
        </nav>
      </div>
    </>
  );
};

export default Navebar;
