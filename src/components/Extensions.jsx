import React from "react";
import chromeLogo from "../images/logo-chrome.svg";
import firefoxLogo from "../images/logo-firefox.svg";
import operaLogo from "../images/logo-opera.svg";
import dots from "../images/bg-dots.svg";

const Extensions = () => {
  return (
    <div className="extensions-hero">
      <h2>Download the extension</h2>
      <p>
        We've got more browsers in the pipeline. Please do let us know if you've
        got a favourite you'd like us to prioritize.
      </p>
      <div className="extension-container">
        <div className="extension-type chrome-type">
          <img
            src={chromeLogo}
            className="chrome-logo browser-logo"
            alt="Google Chrome logo"
          />
          <h3>Add to Chrome</h3>
          <p className="extension-para">Minimum version 62</p>
          <img src={dots} className="dots.img" alt="Repeating dots" />
          <button className="extension-btn">Add & Install Extension</button>
        </div>
        <div className="extension-type firefox-type">
          <img
            src={firefoxLogo}
            className="firefox-logo browser-logo"
            alt="Firefox logo"
          />
          <h3>Add to Firefox</h3>
          <p className="extension-para">Minimum version 55</p>
          <img src={dots} className="dots.img" alt="Repeating dots" />
          <button className="extension-btn">Add & Install Extension</button>
        </div>
        <div className="extension-type opera-type">
          <img
            src={operaLogo}
            className="opera-logo browser-logo"
            alt="Opera logo"
          />
          <h3>Add to Opera</h3>
          <p className="extension-para">Minimum version 46</p>
          <img src={dots} className="dots.img" alt="Repeating dots" />
          <button className="extension-btn">Add & Install Extension</button>
        </div>
      </div>
    </div>
  );
};

export default Extensions;
