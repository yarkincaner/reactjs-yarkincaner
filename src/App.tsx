import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { ContextProvider } from "./context/context";
import AnimatedRoutes from "./components/AnimatedRoutes";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";

// TODO: Show status of internet connection to user via NetInfo or something else.
// TODO: Finish Contact page.
// TODO: Add Skills component to About page.
export default function App() {
  return (
    <ContextProvider>
      <Navbar />
      {/* <AnimatedRoutes /> */}
      <section id="about">
        <About />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </ContextProvider>
  );
}
