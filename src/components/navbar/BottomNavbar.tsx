import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { NavLink } from "react-router-dom";
import {
  faUser,
  faAddressBook,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import {
  faUser as faUserActive,
  faAddressBook as faAddressBookActive,
  faEnvelope as faEnvelopeActive,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};

const BottomNavbar = (props: Props) => {
  return (
    <div className="nav-bottom rounded-t-3xl bottom-0 fixed z-10 inset-x-0 w-full flex justify-evenly text-sm md:hidden p-4">
      <NavLink
        to="/"
        className={(navdata) =>
          navdata.isActive
            ? "nav-bottom-link-active text-xl p-2 rounded font-semibold"
            : "nav-bottom-link text-xl p-2 font-semibold"
        }
      >
        {(navdata) =>
          navdata.isActive ? (
            <div className="inline-block">
              <FontAwesomeIcon
                className="w-full"
                size="lg"
                icon={faUserActive}
              />
              <p className="text-xs">About</p>
            </div>
          ) : (
            <div className="inline-block">
              <FontAwesomeIcon
                className="w-full"
                size="lg"
                icon={faUser as IconProp}
              />
              <p className="text-xs">About</p>
            </div>
          )
        }
      </NavLink>
      <NavLink
        to="/Portfolio"
        className={(navdata) =>
          navdata.isActive
            ? "nav-bottom-link-active text-xl p-2 rounded font-semibold"
            : "nav-bottom-link text-xl p-2 font-semibold"
        }
      >
        {(navdata) =>
          navdata.isActive ? (
            <div className="inline-block">
              <FontAwesomeIcon
                className="w-full"
                size="lg"
                icon={faAddressBookActive}
              />
              <p className="text-xs">Portfolio</p>
            </div>
          ) : (
            <div className="inline-block">
              <FontAwesomeIcon
                className="w-full"
                size="lg"
                icon={faAddressBook as IconProp}
              />
              <p className="text-xs">Portfolio</p>
            </div>
          )
        }
      </NavLink>
      <NavLink
        to="/Contact"
        className={(navdata) =>
          navdata.isActive
            ? "nav-bottom-link-active text-xl p-2 rounded font-semibold"
            : "nav-bottom-link text-xl p-2 font-semibold"
        }
      >
        {(navdata) =>
          navdata.isActive ? (
            <div className="inline">
              <div className="inline-block">
                <FontAwesomeIcon
                  className="w-full"
                  size="lg"
                  icon={faEnvelopeActive}
                />
                <p className="text-xs">Contact</p>
              </div>
            </div>
          ) : (
            <div className="inline-block">
              <FontAwesomeIcon
                className="w-full"
                icon={faEnvelope as IconProp}
                size="lg"
              />
              <p className="text-xs">Contact</p>
            </div>
          )
        }
      </NavLink>
    </div>
  );
};

export default BottomNavbar;
