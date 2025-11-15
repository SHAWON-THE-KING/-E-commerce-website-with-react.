import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import logo from "../../assets/logoipsum-373.png";
import { NavLink } from "react-router";


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-neutral-primary w-full border-b border-default ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} alt="Logo" className="h-10"/>
        </a>
        <div className="inline-flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <NavLink to="Login" end>
            <button type="button" className="text-white bg-black hover:scale-110 duration-300 box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium rounded-full text-sm px-3 py-2 focus:outline-none">
              Get started
            </button>
          </NavLink>
          <button
            type="button"
            className="inline-flex items-center p-2 w-9 h-9 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
            aria-controls="navbar-cta"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <FiAlignJustify className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <div className={`${menuOpen ? "" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-cta">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
            <li>
              <NavLink to="/" className="hover:scale-110 duration-300 block py-2 px-3 md:bg-transparent md:text-fg-brand md:p-0 " end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="Products" className="hover:scale-110 duration-300 block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent" end>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="Services" className="hover:scale-110 duration-300 block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent" end>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="About" className="hover:scale-110 duration-300 block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent" end>
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
