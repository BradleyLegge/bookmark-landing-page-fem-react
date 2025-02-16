import React from "react";
import bookmarkLogo from "../images/logo-bookmark.svg";
import closeMenuIcon from "../images/icon-close.svg";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

const Hamburger = ({ openMenu, setOpenMenu }) => {
  return (
    <section className="hamburger-hero">
      <article className="top-section">
        <div className="hamb-menu">
          <img src={bookmarkLogo} alt="Bookmark Logo" />
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="hamb-close-btn"
          >
            <img
              className="hamb-close-img"
              src={closeMenuIcon}
              alt="Close icon button"
            />
          </button>
        </div>
        <nav className="hamb-navbar">
          <ul className="hamb-nav-list">
            <div className="line"></div>
            <li className="hamb-nav-links links">
              <a className="a-links" href="#">
                features
              </a>
            </li>
            <div className="line"></div>
            <li className="hamb-nav-links links">
              <a className="a-links" href="#">
                pricing
              </a>
            </li>
            <div className="line"></div>
            <li className="hamb-nav-links links">
              <a className="a-links" href="#">
                contact
              </a>
            </li>
            <div className="line"></div>
            <button className="hamb-login-btn links">login</button>
          </ul>
        </nav>
      </article>
      <article className="bot-section">
        <button className="facebook-btn">
          <FaSquareFacebook className="facebook-icon" />
        </button>
        <button className="twitter-btn">
          <FaTwitter className="twitter-icon" />
        </button>
      </article>
    </section>
  );
};

export default Hamburger;
