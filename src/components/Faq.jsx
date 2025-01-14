import React from "react";
import downArrow from "../images/icon-arrow.svg";

const Faq = () => {
  return (
    <div className="faq-hero">
      <h2>Frequently Asked Questions</h2>
      <p className="faq-para">
        Here are some of our FAQs. If you have any other questions you'd like
        answered please feel free to email us.
      </p>
      <div className="line"></div>
      <div className="faq-container">
        <button className="qa-btn">
          <p>What is Bookmark?</p>
          <img src={downArrow} alt="Down Arrow" />
        </button>
        <div className="ans-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            culpa nemo ullam praesentium unde nulla.
          </p>
        </div>
      </div>
      <div className="line"></div>
      <div className="faq-container">
        <button className="qa-btn">
          <p>How can I request a new browser?</p>
          <img src={downArrow} alt="Down Arrow" />
        </button>
        <div className="ans-container">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
            earum.
          </p>
        </div>
      </div>
      <div className="line"></div>
      <div className="faq-container">
        <button className="qa-btn">
          <p>Is there a mobile app?</p>
          <img src={downArrow} alt="Down Arrow" />
        </button>
        <div className="ans-container">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            molestiae repellendus dolorem minima vel porro voluptas ipsa eum
            illum perferendis?
          </p>
        </div>
      </div>
      <div className="line"></div>
      <div className="faq-container">
        <button className="qa-btn">
          <p>What about other Chromium browsers?</p>
          <img src={downArrow} alt="Down Arrow" />
        </button>
        <div className="ans-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            aliquam.
          </p>
        </div>
      </div>
      <div className="line"></div>
      <button className="faq-btn">More Info</button>
    </div>
  );
};

export default Faq;
