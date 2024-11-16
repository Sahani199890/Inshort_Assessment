import React from "react";
import "./Footer.css";
import logo from "../images/darklogo.png";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="container">
      <div className="footer-parent d-flex justify-content-">
        <div className="left-footer ">
          <div className="">
            <img src={logo} alt="logo" width="200px" />
            <p>Inshorts Pte. Ltd.</p>
            <p>@Copyright 2024 from Abhishek Sahani</p>
          </div>
          <hr />
          <div>
            <p>Contact Us</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policies</p>
          </div>
        </div>
        <div className="right-footer">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
}
