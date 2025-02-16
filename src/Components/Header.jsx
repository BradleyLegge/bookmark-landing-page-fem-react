import React from "react";
import { useState } from "react";
import bookmarkLogo from "../images/logo-bookmark.svg";
import openMenuIcon from "../images/icon-hamburger.svg";
import Hamburger from "./Hamburger";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <section className="header-hero">
      {openMenu ? (
        <div className="header-menu">
          <a href="#">
            <img src={bookmarkLogo} alt="Bookmark Logo" />
          </a>
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="hamb-open-btn"
          >
            <img
              className="hamb-open-img"
              src={openMenuIcon}
              alt="Hamburger menu button"
            />
          </button>
        </div>
      ) : (
        <Hamburger openMenu={openMenu} setOpenMenu={setOpenMenu} />
      )}

      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-links links">
            <a className="a-links" href="#">
              features
            </a>
          </li>
          <li className="nav-links links">
            <a className="a-links" href="#">
              pricing
            </a>
          </li>
          <li className="nav-links links">
            <a className="a-links" href="#">
              contact
            </a>
          </li>
          <button className="login-btn links">login</button>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
