import "./App.scss";
import React, { Component } from "react";
import SlideRoutes from "react-slide-routes";
import { Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { About } from "./components/screens/about/About";
import { Portfolio } from "./components/screens/portfolio/Portfolio";

// TODO: Show status of internet connection to user via NetInfo or something else
export default class App extends Component {
  render() {
    return (
      <div className="flex flex-col w-full h-full">
        <Navbar />
        <SlideRoutes animation="slide" duration={500} timing="ease-out">
          <Route path="/" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </SlideRoutes>
        <Footer className="pt-12 mb-0" />
      </div>
    );
  }
}
