import "./App.scss";
import { Navbar, Footer } from "./components";
import { About, Portfolio, Contact } from "./pages";

// TODO: Show status of internet connection to user via NetInfo or something else.
// TODO: Add Skills component to About page.
export default function App() {
  return (
    <>
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
    </>
  );
}
