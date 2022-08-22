import "./Navbar.scss";
import BottomNavbar from "./BottomNavbar";
import TopNavbar from "./TopNavbar";
import { useEffect, useState } from "react";

type Props = {};

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const Navbar = (props: Props) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="md:py-8">
      {windowSize.innerWidth >= 768 ? <TopNavbar /> : <BottomNavbar />}
    </div>
  );
};

export default Navbar;
