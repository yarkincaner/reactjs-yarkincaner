import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio";
import Contact from "../pages/contact/Contact";

// const About = React.lazy(() => import("../screens/about/About"));
// const Portfolio = React.lazy(() => import("../screens/portfolio/Portfolio"));
// const Contact = React.lazy(() => import("../screens/contact/Contact"));

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
