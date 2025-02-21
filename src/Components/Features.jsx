import React from "react";
import { useState } from "react";
import dataJson from "../data.json";

const Features = () => {
  const [data, setData] = useState(dataJson);
  const [value, setValue] = useState(0);

  const { title, image, para, button } = data[value];

  return (
    <section className="features-hero">
      <h2>Features</h2>
      <p className="para">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <div className="tab-section">
        {data.map((tab, index) => (
          <div key={tab.id} className="tab-item">
            <button
              onClick={() => setValue(index)}
              className={`${
                value === index ? "tab-item-btn-active" : "tab-item-btn"
              }`}
            >
              {tab.name}
            </button>
          </div>
        ))}
      </div>
      <article className="features-bot-section">
        <div className="image-section top-part">
          <img
            className="feature-image"
            src={image}
            alt="Image of computer screen"
          />
          <div className="background-image"></div>
        </div>
        <div className="features-bot-part bot-part">
          <h2 className="bookmark-one-click">{title}</h2>
          <p className="para">{para}</p>
          <button className="btn">{button}</button>
        </div>
      </article>
    </section>
  );
};

export default Features;
