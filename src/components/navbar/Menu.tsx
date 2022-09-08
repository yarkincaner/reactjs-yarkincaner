import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import useScrollDirection from "../../hooks/useScrollDirection";

type Props = {};

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const Menu = (props: Props) => {
  const [navbarMenu, setNavbarMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const scrollDirection = useScrollDirection();

  const handleMenu = () => {
    setNavbarMenu((prev) => !prev);
  };

  return (
    <nav
      className={`menu ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      }  fixed flex flex-col items-center p-4 w-full rounded-b-xl z-50 transition-all duration-700`}
    >
      <div className="flex menuIcons w-full justify-end">
        {navbarMenu ? (
          <FontAwesomeIcon
            className="hamburgerMenuIcon-close"
            onClick={handleMenu}
            size="2x"
            icon={faClose}
          />
        ) : (
          <FontAwesomeIcon
            className="hamburgerMenuIcon"
            onClick={handleMenu}
            size="2x"
            icon={faBars}
          />
        )}
      </div>
      {navbarMenu ? (
        <ul className="relative flex flex-col justify-center text-center flex-1 items-center gap-4 w-full">
          <li className="w-full">
            <a
              className="navbar-link text-xl inline-block p-2 border-b rounded w-full"
              href="#about"
              onClick={handleMenu}
            >
              About
            </a>
          </li>
          <li className="w-full">
            <a
              className="navbar-link text-xl inline-block p-2 border-b rounded w-full"
              href="#portfolio"
              onClick={handleMenu}
            >
              Portfolio
            </a>
          </li>
          <li className="w-full">
            <a
              className="navbar-link text-xl inline-block p-2 border-b rounded w-full"
              href="#contact"
              onClick={handleMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default Menu;
