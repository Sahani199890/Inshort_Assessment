import React from "react";
import "./Footer.css";
import logo from "../images/darklogo.png";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="container-overflow">
      <div className="footer-parent d-flex justify-content-around align-items-center">
        <div className="left-footer ">
          <div>
            <img src={logo} alt="logo" width="200px" />
            <div className="left-footer-para">
              <p>Inshorts Pte. Ltd.</p>
              <p>@Copyright 2024 from Abhishek Sahani</p>
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="para-cursor">
            <p data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Contact Us
            </p>
            <p data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Terms & Conditions
            </p>
            <p data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Privacy Policies
            </p>
          </div>
        </div>
        <div className="right-footer">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
      </div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Example PopUp for the footer</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
