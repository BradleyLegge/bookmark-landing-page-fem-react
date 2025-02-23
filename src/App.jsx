import React from "react";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Features from "./Components/Features";
import Downloads from "./Components/Downloads";

const App = () => {
  return (
    <div className="app-hero">
      <Header />
      <Intro />
      <Features />
      <Downloads />
    </div>
  );
};

export default App;
