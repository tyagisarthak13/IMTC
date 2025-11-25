import React, { useState } from "react";
import { Link, useLocation } from "react-router";

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isDashboard = location.pathname.includes("/dashboard");
  if (isDashboard) return null;

  return (
    <header className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="flex justify-between items-center py-4 px-4 sm:px-6 md:px-12 w-full">
        {/* Logo + (desktop) nav */}
        <div className="flex items-center space-x-4 md:space-x-12">
          <Link to="/">
            <img
              src="/IMTC logo.png"
              alt="Logo"
              className="w-32 md:w-40 lg:w-48 h-10 md:h-12 lg:h-16 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-6 md:space-x-10 text-gray-800 font-medium relative">
            <li>
              <Link
                to="/services"
                className={`transition-colors cursor-pointer ${
                  location.pathname === "/services"
                    ? "text-indigo-900 font-bold underline"
                    : "hover:text-indigo-800 text-gray-800"
                }`}
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className={`transition-colors cursor-pointer ${
                  location.pathname === "/contact"
                    ? "text-indigo-900 font-bold underline"
                    : "hover:text-indigo-800 text-gray-800"
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/company"
                className={`transition-colors cursor-pointer ${
                  location.pathname === "/company"
                    ? "text-indigo-900 font-bold underline"
                    : "hover:text-indigo-800 text-gray-800"
                }`}
              >
                Company
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: buttons (desktop) + mobile hamburger */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Desktop buttons */}
          <div className="hidden md:flex items-center gap-2 md:gap-4">
            {/* LOGIN BUTTON — ONLY THIS CHANGED */}
            <button
              onClick={() =>
                window.open(
                  "https://partner.imtc.co.in/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="bg-indigo-900 text-white font-medium py-2 px-4 md:px-6 rounded-lg hover:bg-indigo-50 hover:text-indigo-900 border border-indigo-900 transition-colors cursor-pointer text-sm md:text-base"
            >
              Login
            </button>

            {/* <Link to="/signup">
              <button className="bg-white text-indigo-900 font-medium py-2 px-4 md:px-6 rounded-lg border border-indigo-900 hover:bg-indigo-900 hover:text-white transition-colors cursor-pointer text-sm md:text-base">
                Sign Up
              </button>
            </Link> */}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setMobileOpen((s) => !s)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`lg:hidden transition-max-h duration-300 overflow-hidden bg-white border-t border-gray-100 ${
          mobileOpen ? "max-h-[480px]" : "max-h-0"
        }`}
      >
        <nav className="px-4 pt-4 pb-6">
          <ul className="flex flex-col gap-3 text-gray-800 font-medium">
            <li>
              <Link
                to="/services"
                onClick={() => setMobileOpen(false)}
                className="block py-2 px-2 rounded hover:bg-indigo-50 hover:text-indigo-800 transition-colors cursor-pointer"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block py-2 px-2 rounded hover:bg-indigo-50 hover:text-indigo-800 transition-colors cursor-pointer"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/company"
                onClick={() => setMobileOpen(false)}
                className="block py-2 px-2 rounded hover:bg-indigo-50 hover:text-indigo-800 transition-colors cursor-pointer"
              >
                Company
              </Link>
            </li>

            <div className="mt-2 border-t border-gray-100 pt-3 flex flex-col">
              {/* MOBILE LOGIN BUTTON — ONLY THIS CHANGED */}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  window.open(
                    "https://partner.imtc.co.in/",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="bg-indigo-900 text-white font-medium py-2 px-4 md:px-6 rounded-lg hover:bg-indigo-50 hover:text-indigo-900 border border-indigo-900 transition-colors cursor-pointer text-sm md:text-base w-full text-left"
              >
                Login
              </button>

              {/* <Link to="/signup" onClick={() => setMobileOpen(false)}>
                <button className="bg-white text-indigo-900 font-medium py-2 px-4 md:px-6 rounded-lg border border-indigo-900 hover:bg-indigo-900 hover:text-white transition-colors cursor-pointer text-sm md:text-base w-full text-left">
                  Sign Up
                </button>
              </Link> */}
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
