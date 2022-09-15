import "./index.css";

function NavbarIcons() {
  return (
    <div className="md:flex w-[42%] flex-row place-content-between flex-wrap my-auto hidden">
      <li className="navbar-icon italic mx-auto">Products</li>
      <li className="navbar-icon italic mx-auto">Courses</li>
      <li className="navbar-icon italic mx-auto">Alumni</li>
      <li className="navbar-icon italic mx-auto">Testimonies</li>
    </div>
  );
}

export default NavbarIcons;
