import React from "react";
import introImg from "../images/illustration-hero.svg";

const Intro = () => {
  return (
    <section className="intro-hero">
      <article className="top-part">
        <img
          className="intro-image"
          src={introImg}
          alt="Image of a website on a computer"
        />
        <div className="background-top"></div>
      </article>
      <article className="bot-part">
        <h1>A Simple Bookmark Manager</h1>
        <p className="intro-p para">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="btn-group">
          <button className="chrome-btn btn">Get it on Chrome</button>
          <button className="firefox-btn btn">Get it on Firefox</button>
        </div>
      </article>
    </section>
  );
};

export default Intro;
