import "./Navbar.scss";
import BottomNavbar from "./BottomNavbar";
import TopNavbar from "./TopNavbar";
import Menu from "./Menu";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      <div className="sm:flex hidden">
        <TopNavbar />
      </div>
      {/* <div className="sm:hidden visible">
        <Menu />
      </div> */}
      <div className="sm:hidden visible">
        <BottomNavbar />
      </div>
    </>
  );
};

export default Navbar;
