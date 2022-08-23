import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { ContextProvider } from "./context/context";
// import AnimatedRoutes from "./components/AnimatedRoutes";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";

// TODO: Show status of internet connection to user via NetInfo or something else.
// TODO: Add Skills component to About page.
export default function App() {
  return (
    <ContextProvider>
      <Navbar />
      {/* <AnimatedRoutes /> */}
      <section id="about" className="min-h-full grid content-center">
        <About />
      </section>
      <section id="portfolio" className="min-h-full sm:py-24">
        <Portfolio />
      </section>
      <section id="contact" className="min-h-full grid content-center">
        <Contact />
      </section>
      <Footer />
    </ContextProvider>
  );
}
