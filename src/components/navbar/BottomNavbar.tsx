import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faAddressBook,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
// import {
//   faUser as faUserActive,
//   faAddressBook as faAddressBookActive,
//   faEnvelope as faEnvelopeActive,
// } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScrollDirection from "../../hooks/useScrollDirection";

type Props = {};

const BottomNavbar = (props: Props) => {
  const scrollDirection = useScrollDirection();

  return (
    <div
      className={`nav-bottom ${
        scrollDirection === "down" ? "-bottom-24" : "bottom-0"
      } rounded-t-3xl bottom-0 fixed z-10 inset-x-0 w-full flex justify-evenly text-sm md:hidden p-2 transition-all duration-700`}
    >
      <a href="#about" className={"nav-bottom-link text-xl p-2 font-semibold"}>
        <div className="inline-block">
          <FontAwesomeIcon
            className="w-full"
            size="lg"
            icon={faUser as IconProp}
          />
          <p className="text-xs">About</p>
        </div>
      </a>
      <a
        href="#portfolio"
        className={"nav-bottom-link text-xl p-2 font-semibold"}
      >
        <div className="inline-block">
          <FontAwesomeIcon
            className="w-full"
            size="lg"
            icon={faAddressBook as IconProp}
          />
          <p className="text-xs">Portfolio</p>
        </div>
      </a>
      <a
        href="#contact"
        className={"nav-bottom-link text-xl p-2 font-semibold"}
      >
        <div className="inline-block">
          <FontAwesomeIcon
            className="w-full"
            size="lg"
            icon={faEnvelope as IconProp}
          />
          <p className="text-xs">Contact</p>
        </div>
      </a>
    </div>
  );
};

export default BottomNavbar;
