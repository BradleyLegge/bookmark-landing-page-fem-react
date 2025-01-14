import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import bookmarkLogo from "../images/logo-bookmark.svg";

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
      <div className="social-icons-container">
        <button className="social-icon-btn">
          <FaSquareFacebook className="social-icon" />
        </button>
        <button className="social-icon-btn">
          <FaTwitter className="social-icon" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
