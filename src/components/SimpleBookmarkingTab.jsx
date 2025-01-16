import React from "react";
import simpleBookmarkingImage1 from "../images/illustration-features-tab-1.svg";

const SimpleBookmarkingTab = () => {
  return (
    <div className="simple-bookmarking-tab">
      <div className="features-left-side">
        <img
          className="features-img"
          src={simpleBookmarkingImage1}
          alt="Simple Bookmarking Image"
        />
        <div className="background-image-features"></div>
      </div>
      <div className="features-right-side">
        <h2>Bookmark in one click</h2>
        <p>
          Orgainze your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>
        <button className="features-more-info-btn">More Info</button>
      </div>
    </div>
  );
};

export default SimpleBookmarkingTab;
