import "./Navbar.scss";
import BottomNavbar from "./BottomNavbar";
import TopNavbar from "./TopNavbar";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-4 w-full rounded-b-xl">
      <TopNavbar />
      <BottomNavbar />
    </nav>
  );
};

export default Navbar;
