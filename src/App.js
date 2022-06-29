import React from "react";

import {
  Footer,
  Blog,
  Possible,
  Features,
  WhatGPT,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";

import "./App.css";

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT />
    <Features />
    <Possible />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;
