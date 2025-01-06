import React from "react";
import managerImage from "../images/illustration-hero.svg";
import dots from "../images/bg-dots.svg";

const Manager = () => {
  return (
    <div className="manager-hero">
      <div className="left-side-manager">
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favorite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="get-it-btns">
          <a href="#">
            <button className="get-it-google-btn">Get it on Chrome</button>
          </a>
          <a href="#">
            <button className="get-it-firefox-btn">Get it on Firefox</button>
          </a>
        </div>
      </div>
      <div className="right-side-manager">
        <img
          src={managerImage}
          className="manager-image"
          alt="Image of a computer screen"
        />
        <div className="background-image"></div>
      </div>
    </div>
  );
};

export default Manager;
