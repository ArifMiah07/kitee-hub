import { NavLink } from "react-router-dom";

import logo from "../../../../../public/cateehub-logo.png";

const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to={"/motion"}
          end
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "text-gray-700"
          }>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/motion/about"}
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "text-gray-700"
          }>
          About
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/motion/blog"}
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "text-gray-700"
          }>
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/motion/contact"}
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "text-gray-700"
          }>
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/motion/surprise"}
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "text-gray-700"
          }>
          Surprise
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <nav className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="flex items-center gap-12 menu menu-sm dropdown-content mt-3 z-[1] p-12 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <div className="flex items-center gap-1">
            <img className="w-12 h-12" src={logo} alt="" />
            <a className="w-fit text-2xl font-bold uppercase">
              <span>Kitee</span>
              <span>Hub</span>
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-12 menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Ask</a>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
