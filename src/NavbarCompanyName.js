import "./index.css";
import { GiCrystalGrowth } from "react-icons/gi";

function NavbarIcons() {
  return (
    <div className="flex m-1 " name="NavbarCompanyName">
      <GiCrystalGrowth className="navbar-icon m-auto text-lg text-violet-400" />
      <h3 className="navbar-icon font-bold text-violet-200 text-xl">
        Kyber Corp
      </h3>
    </div>
  );
}

export default NavbarIcons;
