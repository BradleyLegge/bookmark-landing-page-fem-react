import React from "react";
import simpleBookmarkingImage1 from "../images/illustration-features-tab-1.svg";
import simpleBookmarkingImage2 from "../images/illustration-features-tab-2.svg";
import simpleBookmarkingImage3 from "../images/illustration-features-tab-3.svg";

const Features = () => {
  return (
    <div className="features-hero">
      <div className="features-intro">
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <ul className="features-list">
        <li className="features-list-item">Simple Bookmarking</li>
        <li className="features-list-item">Speedy Searching</li>
        <li className="features-list-item">Easy Sharing</li>
      </ul>
      <div className="simple-bookmarking-tab">
        <div className="features-left-side">
          <img
            className="simple-bookmarking-img-1"
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
    </div>
  );
};

export default Features;
