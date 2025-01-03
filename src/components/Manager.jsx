import React from "react";

const Manager = () => {
  return (
    <div className="manager-hero">
      <div className="left-side-manager">
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favorite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <a href="">
          <button>Get it on Chrome</button>
        </a>
        <a href="">
          <button>Get it on Firefox</button>
        </a>
      </div>
      <div className="right-side-manager"></div>
    </div>
  );
};

export default Manager;
