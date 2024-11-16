import React from "react";
import logo from "../images/logo.png";
import moreIcon from "../images/more-image.png";
import "./Header.css";

export default function Header({ onMenuClick }) {
  return (
    <div className="container-overflow">
      <div className="header-div">
        <span className="more-span" onClick={onMenuClick}>
          <img src={moreIcon} alt="more-icon" />
          Menu
        </span>
        <div className="logo-img-span">
          <img className="logo-img" src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}
