import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { ContextProvider } from "./context/context";
import AnimatedRoutes from "./components/AnimatedRoutes";

// TODO: Show status of internet connection to user via NetInfo or something else.
// TODO: Finish Contact page.
// TODO: Add Skills component to About page.
export default function App() {
  return (
    <ContextProvider>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </ContextProvider>
  );
}
