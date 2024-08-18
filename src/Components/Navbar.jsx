import React, { useEffect, useState } from "react";
import Logo from "../Assets/quadloop.svg";
import ButtonYellow from "./ButtonYellow";
import { Cart } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useAuthContext } from "../context/AuthContext";
import Cookies from "js-cookie";

const Navbar = ({ cartItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const auth = useAuthContext();
  const token = Cookies.get("jwt");

  const navigation = [
    { title: "Home", path: "../" },
    { title: "About", path: "../#about" },
    { title: "Solutions", path: "../#solutions" },
    { title: "Impacts", path: "../#impacts" },
    { title: "News", path: "../#news" },
    { title: "Partners", path: "../#partners" },
    { title: "Contact", path: "../#contact" },
  ];

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.userRole?.role?.role_name === "admin") {
      setIsAdmin(true);
    }
  }, [cartItems]);

  const isAuthenticated = !auth?.isTokenExpired(token);

  return (
    <nav className="bg-white shadow-md fixed w-full z-20 top-0 left-0">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link to="../">
          <img
            src={Logo}
            alt="Quadloop"
            className="w-32 md:w-40"
            loading="lazy"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`flex-1 justify-between items-center w-full md:flex md:w-auto md:static ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 mt-4 md:mt-0">
            {navigation.map((item, idx) => (
              <li key={idx} className="text-gray-800">
                <HashLink
                  smooth
                  to={item.path}
                  className="block py-2 px-3 rounded hover:text-blue-600 hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.title}
                </HashLink>
              </li>
            ))}
            {isAdmin && isAuthenticated && (
              <li>
                <Link
                  to="/admin?tab=dashboard"
                  className="block py-2 px-3 rounded text-gray-800 hover:text-blue-600 hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  Dashboard
                </Link>
              </li>
            )}
          </ul>

          {/* Right Side Buttons */}
          <div className="flex items-center mt-4 md:mt-0 space-x-4">
            {/* Cart Icon */}
            <Link to="../cart" className="relative text-gray-800">
              <Cart className="w-6 h-6" />
              {cartItems?.length > 0 && isAuthenticated && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* Authentication Buttons */}
            {isAuthenticated ? (
              <>
                <ButtonYellow link="../products" text="Shop" />
                <ButtonYellow link="../profile" text="Profile" />
                <button
                  onClick={auth?.logout}
                  className="py-2 px-4 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <ButtonYellow link="../products" text="Shop" />
                <ButtonYellow link="../login" text="Login" />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
