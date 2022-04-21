import "./App.scss";
import React from "react";
import SlideRoutes from "react-slide-routes";
import { Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { About } from "./components/screens/about/About";
import { Portfolio } from "./components/screens/portfolio/Portfolio";
import Contact from "./components/screens/contact/Contact";

// TODO: Show status of internet connection to user via NetInfo or something else
export default function App() {
  return (
    <>
      <Navbar />
      <SlideRoutes animation="slide" duration={500} timing="ease-out">
        <Route path="/" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </SlideRoutes>
      <Footer className="mb-0" />
    </>
  );
}
