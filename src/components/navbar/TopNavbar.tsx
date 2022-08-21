import { NavLink } from "react-router-dom";

type Props = {};

const TopNavbar = (props: Props) => {
  return (
    <div className="w-full flex-grow md:flex lg:items-center lg:w-auto hidden pt-6 lg:pt-0">
      <ul className="flex justify-center text-center flex-1 items-center gap-4">
        <li>
          <a
            className="navbar-link text-xl inline-block p-2 border-b rounded"
            href="#about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="navbar-link text-xl inline-block p-2 border-b rounded"
            href="#portfolio"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            className="navbar-link text-xl inline-block p-2 border-b rounded"
            href="#contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
    // <div className="w-full flex-grow md:flex lg:items-center lg:w-auto hidden pt-6 lg:pt-0">
    //   <ul className="flex justify-center text-center flex-1 items-center gap-4">
    //     <li>
    //       <NavLink
    //         className={(navData) =>
    //           navData.isActive
    //             ? "navbar-link-active text-xl inline-block p-2 border-b rounded"
    //             : "navbar-link text-xl inline-block p-2 border-b rounded"
    //         }
    //         to="/"
    //       >
    //         About
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         className={(navData) =>
    //           navData.isActive
    //             ? "navbar-link-active text-xl inline-block p-2 border-b rounded"
    //             : "navbar-link text-xl inline-block p-2 border-b rounded"
    //         }
    //         to="/Portfolio"
    //       >
    //         Portfolio
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         className={(navData) =>
    //           navData.isActive
    //             ? "navbar-link-active text-xl inline-block p-2 border-b rounded"
    //             : "navbar-link text-xl inline-block p-2 border-b rounded"
    //         }
    //         to="/Contact"
    //       >
    //         Contact
    //       </NavLink>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default TopNavbar;
