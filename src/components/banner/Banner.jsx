import React from "react";
import applebtn from "../images/apple.png";
import googlebutton from "../images/google.png";
import "./Banner.css";

export default function Banner() {
  return (
    <div className="container">
      <div className="banner-parent">
        <div className="left">
          For the best experience use <b>inshorts </b> app on your smartphone
        </div>
        <div className="banner-right-div">
          <img
            className="applebtn applebtn1 px-4"
            src={applebtn}
            alt="apple btn"
          />
          <img
            className="applebtn applebtn2"
            src={googlebutton}
            alt="google btn"
          />
        </div>
      </div>
    </div>
  );
}
