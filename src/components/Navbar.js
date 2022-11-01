import React, { useRef } from "react";
import { useState } from "react";
import { MdOutlineClose, MdDehaze } from "react-icons/md";
import { SiFacebook, SiInstagram, SiTwitter, SiGithub, SiLinkedin } from "react-icons/si";
import {
  MdOutlineHome,
  MdPeopleAlt,
  MdFolder,
  MdOutlineCalendarToday,
  MdOutlineDocumentScanner,
} from "react-icons/md";

import Pages from "./Pages";

import logo from "../assets/logo.png";

const Navbar = () => {
  const [options, setOptions] = useState([
    { name: "Home", icon: <MdOutlineHome /> },
    { name: "Team", icon: <MdPeopleAlt /> },
    { name: "Projects", icon: <MdFolder /> },
    { name: "Calendar", icon: <MdOutlineCalendarToday /> },
    { name: "Documents", icon: <MdOutlineDocumentScanner /> },
  ]);
  const [socials, setSocials] = useState([
    <SiFacebook />,
    <SiInstagram />,
    <SiTwitter />,
    <SiGithub />,
    <SiLinkedin />,
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const bringNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <button className={isOpen ? "not-hamburger" : "hamburger"} onClick={bringNavbar}>
        <MdDehaze />
      </button>
      <div className={isOpen ? "navbar-open" : "navbar-close"}>
        <div className="navbar-header">
          <div className="topic">
            <img src={logo} className="project-logo" />
            <h1>React Projects</h1>
          </div>
          <button className="close-button-navbar" onClick={bringNavbar}>
            <MdOutlineClose />
          </button>
        </div>
        <div className="options">
          {options.map((option) => {
            console.log(option);
            return <Pages option={option} />;
          })}
        </div>
        <div className="socials">
          {socials.map((icon) => {
            return <span className="social-icon">{icon}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
