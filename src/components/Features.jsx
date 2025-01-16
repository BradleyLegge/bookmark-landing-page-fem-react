import React from "react";
import SimpleBookmarkingTab from "./SimpleBookmarkingTab";
import SpeedySearchingTab from "./SpeedySearchingTab";
import EasySharingTab from "./EasySharingTab";

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
      <SimpleBookmarkingTab />
      <SpeedySearchingTab />
      <EasySharingTab />
    </div>
  );
};

export default Features;
