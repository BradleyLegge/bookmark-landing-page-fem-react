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
          {/* Not sure if this is the correct way to make a link to a log in button */}
          <a href="#">
            <button className="login-link">login</button>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
