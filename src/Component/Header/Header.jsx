import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center px-[140px] py-[50px] absolute top-0 z-10 w-full">
        <div className="w-[200px] h-[72px]">
          <img src={logo} className="w-auto" alt="" />
        </div>
        <nav className="space-x-[50px] text-[18px] font-normal ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="donation">Donation</NavLink>
          <NavLink to="Statistics">Statistics</NavLink>
        </nav>
      </div>
    </>
  );
};

export default Header;
