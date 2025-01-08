import React from "react";
import bookmarkLogo from "../images/logo-bookmark.svg";
import facebookIcon from "../images/icon-facebook.svg";
import twitterIcon from "../images/icon-twitter.svg";

const Footer = () => {
  return (
    <div className="footer-hero">
      <div className="footer-container">
        <img
          src={bookmarkLogo}
          className="bookmark-logo-footer"
          alt="Bookmark Logo"
        />
        <ul className="footer-list">
          <li className="footer-list-item">
            <a href="#">features</a>
          </li>
          <li className="footer-list-item">
            <a href="#">pricing</a>
          </li>
          <li className="footer-list-item">
            <a href="#">contact</a>
          </li>
        </ul>
      </div>
      <div className="social-icons">
        <img src={facebookIcon} className="facebook-icon" alt="Facebook Icon" />
        <img src={twitterIcon} className="twitter-icon" alt="Twitter Icon" />
      </div>
    </div>
  );
};

export default Footer;
