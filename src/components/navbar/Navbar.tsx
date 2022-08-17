import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
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
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap p-4 w-full rounded-b-xl">
      <div className="nav-bottom rounded-t-3xl bottom-0 fixed z-10 inset-x-0 w-full flex gap-4 justify-evenly text-sm md:hidden p-4">
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

      <div className="w-full flex-grow md:flex lg:items-center lg:w-auto hidden pt-6 lg:pt-0">
        <ul className="flex justify-center text-center flex-1 items-center gap-4">
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "navbar-link-active text-xl inline-block p-2 border-b rounded"
                  : "navbar-link text-xl inline-block p-2 border-b rounded"
              }
              to="/"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "navbar-link-active text-xl inline-block p-2 border-b rounded"
                  : "navbar-link text-xl inline-block p-2 border-b rounded"
              }
              to="/Portfolio"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "navbar-link-active text-xl inline-block p-2 border-b rounded"
                  : "navbar-link text-xl inline-block p-2 border-b rounded"
              }
              to="/Contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
