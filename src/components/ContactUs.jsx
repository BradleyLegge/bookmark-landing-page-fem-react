import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-hero">
      <h4>35,000+ ALREADY JOINED</h4>
      <h2>Stay up-to-date with what we're doing</h2>
      <form>
        <input name="email" className="email" />
        <button type="submit" className="contact-us-btn">
          Contact Us
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
