import React from "react";
import Header from "./components/Header";
import Manager from "./components/Manager";
import Features from "./components/Features";
import Extensions from "./components/Extensions";
import Faq from "./components/Faq";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div class="hero">
      <Header />
      <Manager />
      <Features />
      <Extensions />
      <Faq />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
