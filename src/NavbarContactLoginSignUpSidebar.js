import "./index.css";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
function NavbarIcons() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(true);

  return (
    <section className="relative">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <nav className="m-1 md:flex hidden">
        <li className="navbar-icon font-bold">Contact</li>
        <li className="navbar-icon font-bold">Log In</li>
        <li className="navbar-icon font-bold bg-violet-600 p-2 px-3 rounded-md">
          Sign Up
        </li>
      </nav>
      <div
        className="flex md:hidden navbar-icon hover:cursor-pointer"
        onClick={handleClick}
      >
        <GiHamburgerMenu color="rgb(207 199 310)" size={"3rem"} />
      </div>
    </section>
  );
}

export default NavbarIcons;
