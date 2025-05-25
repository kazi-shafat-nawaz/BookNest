// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../assests/nest.png";

// const Navbar = () => {
//   return (
//     <nav className="bg-slate-800 shadow-lg fixed top-0 left-0 w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Left side: Logo + Name */}
//           <div className="flex items-center gap-2">
//             <Link to="/" className="flex items-center gap-2">
//               <img src={logo} alt="Hotel Logo" className="h-10 w-auto" />
//               <span className="text-2xl italic font-semibold text-white">
//                 Book<span className="text-yellow-400">Nest</span>
//               </span>
//             </Link>
//           </div>

//           {/* Center: Navigation links */}
//           <div className="hidden md:flex items-center space-x-6">
//             <Link
//               to="/"
//               className="text-white hover:text-sky-300 text-lg font-light transition duration-300"
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className="text-white hover:text-sky-300 text-lg font-light transition duration-300"
//             >
//               About
//             </Link>
//             <Link
//               to="/contact"
//               className="text-white hover:text-sky-300 text-lg font-light transition duration-300"
//             >
//               Contact
//             </Link>
//             <Link
//               to="/hotels"
//               className="text-white hover:text-sky-300 text-lg font-light transition duration-300"
//             >
//               Hotels
//             </Link>
//           </div>

//           {/* Right side: Search */}
//           <div className="hidden md:block">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="px-3 py-1 rounded-md text-sm focus:outline-none focus:ring focus:ring-yellow-400"
//             />
//             <Link
//               to="/login"
//               className="bg-yellow-400 text-slate-800 px-4 py-1 rounded-md text-sm font-medium hover:bg-yellow-300 transition duration-300 ml-5"
//             >
//               Login
//             </Link>

//             <Link
//               to="/signup"
//               className="bg-yellow-400 text-slate-800 px-4 py-1 rounded-md text-sm font-medium hover:bg-yellow-300 transition duration-300 ml-2"
//             >
//               Signup
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icon library (install with: npm install lucide-react)
import logo from "../assests/nest.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-800 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Hotel Logo" className="h-10 w-auto" />
            <span className="text-2xl italic font-semibold text-white">
              Book<span className="text-yellow-400">Nest</span>
            </span>
          </Link>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-sky-300 text-lg font-light">Home</Link>
            <Link to="/about" className="text-white hover:text-sky-300 text-lg font-light">About</Link>
            <Link to="/contact" className="text-white hover:text-sky-300 text-lg font-light">Contact</Link>
            <Link to="/hotels" className="text-white hover:text-sky-300 text-lg font-light">Hotels</Link>
          </div>

          {/* Desktop Search/Login */}
          <div className="hidden md:flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 rounded-md text-sm focus:outline-none focus:ring focus:ring-yellow-400"
            />
            <Link to="/login" className="ml-4 bg-yellow-400 text-slate-800 px-4 py-1 rounded-md text-sm font-medium hover:bg-yellow-300">
              Login
            </Link>
            <Link to="/signup" className="ml-2 bg-yellow-400 text-slate-800 px-4 py-1 rounded-md text-sm font-medium hover:bg-yellow-300">
              Signup
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4">
            <Link to="/" className="block text-white hover:text-sky-300 text-lg">Home</Link>
            <Link to="/about" className="block text-white hover:text-sky-300 text-lg">About</Link>
            <Link to="/contact" className="block text-white hover:text-sky-300 text-lg">Contact</Link>
            <Link to="/hotels" className="block text-white hover:text-sky-300 text-lg">Hotels</Link>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-3 py-1 rounded-md text-sm focus:outline-none focus:ring focus:ring-yellow-400"
              />
              <Link to="/login" className="block mt-2 bg-yellow-400 text-slate-800 px-4 py-1 rounded-md text-sm text-center font-medium hover:bg-yellow-300">
                Login
              </Link>
              <Link to="/signup" className="block mt-2 bg-yellow-400 text-slate-800 px-4 py-1 rounded-md text-sm text-center font-medium hover:bg-yellow-300">
                Signup
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

