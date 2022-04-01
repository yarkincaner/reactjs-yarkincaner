import "./App.scss";
import React, { Component } from "react";
import SlideRoutes from "react-slide-routes";
import { Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { About } from "./components/screens/about/About";
import { Portfolio } from "./components/screens/portfolio/Portfolio";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <SlideRoutes animation="slide" duration={500}>
          <Route path="/" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </SlideRoutes>
      </>
    );
  }
}
