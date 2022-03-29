import * as React from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-transparent p-3 w-full">
      <div class="bg-gray-200 border-0 fixed inset-x-0 bottom-0 w-full flex gap-4 justify-center text-sm md:hidden p-4">
        <NavLink
          to="/"
          className={(navdata) =>
            navdata.isActive
              ? "text-xl p-2 rounded bg-gray-800 text-gray-200 font-semibold"
              : "text-xl p-2 rounded border border-gray-800 text-gray-800 font-semibold"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/Portfolio"
          className={(navdata) =>
            navdata.isActive
              ? "text-xl p-2 rounded bg-gray-800 text-gray-200 font-semibold"
              : "text-xl p-2 rounded border border-gray-800 text-gray-800 font-semibold"
          }
        >
          Portfolio
        </NavLink>
      </div>

      <div class="w-full flex-grow md:flex lg:items-center lg:w-auto hidden pt-6 lg:pt-0">
        <ul class="flex justify-center text-center flex-1 items-center gap-4">
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "text-xl inline-block p-2 border-b border-gray-200 rounded bg-gray-200 text-black"
                  : "text-xl inline-block p-2 border-b border-gray-200 rounded bg-transparent text-gray-200 hover:bg-gray-200 hover:text-black hover:transition"
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
                  ? "text-xl inline-block p-2 border-b border-gray-200 rounded bg-gray-200 text-black"
                  : "text-xl inline-block p-2 border-b border-gray-200 rounded text-gray-200 no-underline hover:bg-gray-200 hover:text-black hover:transition"
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
