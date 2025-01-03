import React from "react";
import logo from "../images/logo-bookmark.svg";

const Header = () => {
  return (
    <div className="header-hero">
      <a>
        <img src={logo} alt="Bookmark logo" />
      </a>
      <nav>
        <ul>
          <li>
            <a href="#">features</a>
          </li>
          <li>
            <a href="#">pricing</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
          <a href="#">
            <li className="login-link">login</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
