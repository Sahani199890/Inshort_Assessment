import React from "react";
import applebtn from "../images/apple.png";
import googlebutton from "../images/google.png";
import "./Banner.css";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="container">
      <div className="banner-parent">
        <div className="left">
          For the best experience use <b>inshorts </b> app on your smartphone
        </div>
        <div className="banner-right-div">
          <Link to="/?shortlink=Website&pid=Website&af_xp=custom&source_caller=ui">
            <img
              className="applebtn applebtn1 px-4"
              src={applebtn}
              alt="apple btn"
            />
          </Link>
          <Link to="/?shortlink=Website&pid=Website&af_xp=custom&source_caller=ui">
            <img
              className="applebtn applebtn2"
              src={googlebutton}
              alt="google btn"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
