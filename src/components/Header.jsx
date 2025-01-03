import React from "react";
import logo from "../images/logo-bookmark.svg";

const Header = () => {
  return (
    <div class="header-hero">
      <a>
        <img src={logo} alt="Bookmark logo" />
      </a>
      <nav>
        <ul>
          <li>
            <a>features</a>
          </li>
          <li>
            <a>pricing</a>
          </li>
          <li>
            <a>contact</a>
          </li>
          <li class="login-link">
            <a>login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
