import React from "react";
import downArrow from "../images/icon-arrow.svg";

const Faq = () => {
  return (
    <div className="faq-hero">
      <h2>Frequently Asked Questions</h2>
      <p>
        Here are some of our FAQs. If you have any other questions you'd like
        answered please feel free to email us.
      </p>
      <div className="faq-container">
        <div className="line"></div>
        <div className="question-container">
          <div className="question">What is Bookmark?</div>
          <img src={downArrow} alt="Image of down arrow" />
        </div>
        <div className="line"></div>
      </div>
      <button className="faq-btn">More Info</button>
    </div>
  );
};

export default Faq;
