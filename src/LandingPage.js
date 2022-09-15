import NavbarLinks from "./NavbarLinks.js";
import NavbarCompanyName from "./NavbarCompanyName.js";
import NavbarContactLoginSignUp from "./NavbarContactLoginSignUpSidebar.js";
import SubmitFormAndImage from "./SubmitFormAndImage.js";
import "./index.css";

function App() {
  return (
    <main className="absolute h-full w-full min-w-[320px] bg-gradient-to-r from-slate-900 to-blue-900 ">
      <div className="m-4 mx-auto lg:w-9/12 md:w-11/12 w-10/12 ">
        <nav className="flex flex-row place-content-between" name="Navbar">
          <NavbarCompanyName />
          <NavbarLinks />
          <NavbarContactLoginSignUp />
        </nav>
        <SubmitFormAndImage />
      </div>
    </main>
  );
}

export default App;
