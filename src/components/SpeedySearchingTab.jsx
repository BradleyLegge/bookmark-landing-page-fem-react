import React from "react";
import simpleBookmarkingImage2 from "../images/illustration-features-tab-2.svg";

const SpeedySearchingTab = () => {
  return (
    <div className="speedy-searching-tab">
      <div className="features-left-side">
        <img
          className="features-img"
          src={simpleBookmarkingImage2}
          alt="Speedy Searching Image"
        />
        <div className="background-image-features"></div>
      </div>
      <div className="features-right-side">
        <h2>Intelligent</h2>
        <p>
          Our powerful search feature will help you find saved sites in no time
          at all. No need to trawl through all of your bookmarks.
        </p>
        <button className="features-more-info-btn">More Info</button>
      </div>
    </div>
  );
};

export default SpeedySearchingTab;
