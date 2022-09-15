import "./index.css";
import { ImCross } from "react-icons/im";
import { useEffect } from "react";

function Sidebar(props) {
  useEffect(() => {
    function handleResize() {
      // console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
      if (window.screen.availWidth > 768) {
        props.setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
  });

  return props.isOpen ? (
    <nav className="fixed flex flex-col top-0 bottom-0 right-0 bg-indigo-300 w-48 shadow-2xl z-10 mr-0 m-auto transition-all duration-500 ease-out">
      <div className="m-auto mt-0 ml-2 mb-0">
        <li className="sidebar-icon mr-1">
          <ImCross
            onClick={() => props.setIsOpen(false)}
            className="cursor-pointer"
          />
        </li>
        <li className="sidebar-icon bg-indigo-800 text-white p-2 rounded-md w-auto ml-2">
          Sign Up
        </li>
        <li className="sidebar-icon">Log In</li>
        <li className="sidebar-icon">Contact</li>
      </div>
      <div className="bg-slate-700 h-[2px] w-[9rem] mx-auto rounded-lg"></div>
      <div className="m-auto mt-0 ml-2 mb-2">
        <li className="sidebar-icon">Products</li>
        <li className="sidebar-icon">Courses</li>
        <li className="sidebar-icon">Alumni</li>
        <li className="sidebar-icon">Testimonies</li>
      </div>
      <div className="bg-slate-700 h-[2px] w-[9rem] mx-auto rounded-lg"></div>
    </nav>
  ) : (
    <nav className="fixed flex flex-col top-0 bottom-0 right-[-100%] bg-indigo-300 w-48 shadow-2xl z-10 mr-0 m-auto transition-all duration-500 ease-in">
      <div className="m-auto mt-0 ml-2 mb-0">
        <li className="sidebar-icon mr-1">
          <ImCross onClick={() => props.setIsOpen(false)} />
        </li>
        <li className="sidebar-icon bg-indigo-800 text-white p-2 rounded-md w-auto ml-2">
          Sign Up
        </li>
        <li className="sidebar-icon">Log In</li>
        <li className="sidebar-icon">Contact</li>
      </div>
      <div className="bg-slate-700 h-[2px] w-[9rem] mx-auto rounded-lg"></div>
      <div className="m-auto mt-0 ml-2 mb-2">
        <li className="sidebar-icon">Products</li>
        <li className="sidebar-icon">Courses</li>
        <li className="sidebar-icon">Alumni</li>
        <li className="sidebar-icon">Testimonies</li>
      </div>
      <div className="bg-slate-700 h-[2px] w-[9rem] mx-auto rounded-lg"></div>
    </nav>
  );
}

export default Sidebar;
