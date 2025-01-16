import React from "react";
import simpleBookmarkingImage3 from "../images/illustration-features-tab-3.svg";

const EasySharingTab = () => {
  return (
    <div className="easy-sharing-tab">
      <div className="features-left-side">
        <img
          className="features-img"
          src={simpleBookmarkingImage3}
          alt="Easy Sharing Image"
        />
        <div className="background-image-features"></div>
      </div>
      <div className="features-right-side">
        <h2>Share your bookmarks</h2>
        <p>
          Easily share your bookmarks and collections with others. Create a
          shareable link that you can send at the click of a button.
        </p>
        <button className="features-more-info-btn">More Info</button>
      </div>
    </div>
  );
};

export default EasySharingTab;
