import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { About } from "./screens/about/About";
import { Portfolio } from "./screens/portfolio/Portfolio";
import Contact from "./screens/contact/Contact";
import { AnimatePresence } from "framer-motion";

type Props = {};

const AnimatedRoutes = (props: Props) => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
