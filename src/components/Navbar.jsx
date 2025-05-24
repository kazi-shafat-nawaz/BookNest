import React from "react";

import { Link } from "react-router-dom";
import logo from '../assests/nest.png';
const Navbar = () => {
  return (
    <nav
      className="bg-slate-800 shadow-lg flex items-center justify-around py-3 px-32
           fixed top-0 left-0 w-full   "
    >
      <Link to="/">
        <span className="font-semibold text-lg flex items-center gap-1">
          {/* <BiLogoReact className="text-6xl" /> */}
          <img src={logo} alt="Hotel Logo" className="h-10 w-auto" />
          <span className="font-semibold text-2xl italic text-white ">Book<span  className=" text-yellow-400">Nest</span ></span>
        </span>
      </Link>

      <div
        className="flex items-center gap-5
       text-balack  "
      >
        <Link
          to="/"
          className="py-1 px-3 text-lg font-light 
      text-white hover:text-sky-300 rounded-2x1 hover:bg-slate-700 
        trasitation duration-300 "
        >
          Home
        </Link>

        <Link
          to="/about"
          className="py-1 px-3 text-lg font-light 
      text-white hover:text-sky-300 rounded-2x1 hover:bg-slate-700 
        trasitation duration-300   "
        >
          About
        </Link>

        <Link
          to="/contact"
          className="py-1 px-3 text-lg font-light 
      text-white hover:text-sky-300 rounded-2x1 hover:bg-slate-700 
        trasitation duration-300   "
        >
          Contact
        </Link>

        <Link
          to="/hotels"
          className="py-1 px-3 text-lg font-light 
      text-white hover:text-sky-300 rounded-2x1 hover:bg-slate-700 
        trasitation duration-300   "
        >
          Hotels
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
