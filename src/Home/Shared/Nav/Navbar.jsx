import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-white">
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
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/gmail"}>Gmail</NavLink>
              </li>
              <li>
                <NavLink to={"/username"}>Username</NavLink>
              </li>
              <li>
                <NavLink to={"/word"}>Word</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-1">
            <img className="w-12 h-12" src="cateehub-logo.png" alt="" />
            <a className="w-fit text-2xl font-bold uppercase">
              <span>Kitee</span>
              <span>Hub</span>
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-12 menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            {/* <li>
              <NavLink to={"/gmail"}>Gmail</NavLink>
            </li> */}
            <li>
              <NavLink to={"/instagram"}>Instagram</NavLink>
            </li>
            {/* <li>
              <NavLink to={"/username"}>Username</NavLink>
            </li> */}
            <li>
              <NavLink to={"/platforms"}>Platforms</NavLink>
            </li>
            <li>
              <NavLink to={"/word"}>Word</NavLink>
            </li>
            <li>
              <NavLink to={"/box"}>Box</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Ask</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
