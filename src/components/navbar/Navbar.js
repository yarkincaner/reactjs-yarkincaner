import * as React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap p-4 w-full rounded-b-xl">
      <div className="nav-bottom border rounded-t-3xl bottom-0 fixed z-10 inset-x-0 w-full flex gap-4 justify-center text-sm md:hidden p-4">
        <NavLink
          to="/"
          className={(navdata) =>
            navdata.isActive
              ? "nav-bottom-link-active text-xl p-2 rounded font-semibold"
              : "nav-bottom-link text-xl p-2 rounded border font-semibold"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/Portfolio"
          className={(navdata) =>
            navdata.isActive
              ? "nav-bottom-link-active text-xl p-2 rounded font-semibold"
              : "nav-bottom-link text-xl p-2 rounded border font-semibold"
          }
        >
          Portfolio
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
        </ul>
      </div>
    </nav>
  );
}
