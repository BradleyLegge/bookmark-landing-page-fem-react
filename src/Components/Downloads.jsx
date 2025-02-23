import React from "react";
import { useState } from "react";
import extData from "../extension.json";
import dots from "../images/bg-dots.svg";

const Downloads = () => {
  const [data, setData] = useState(extData);

  return (
    <section className="downloads-hero">
      <h2>Download the extension</h2>
      <p className="para">
        We've got more browsers in the pipeline. Please do let us know if you've
        got a favourite you'd like us to prioritize.
      </p>
      <article className="extension-container">
        {data.map((i) => (
          <div className="extension">
            <img
              className="icon-img"
              src={i.image}
              alt="Image of browser icon"
            />
            <h2>{i.title}</h2>
            <p className="para">{i.version}</p>
            <img
              className="dot-img"
              src={dots}
              alt="Dots used to divide content"
            />
            <button className="btn extension-btn">{i.button}</button>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Downloads;
