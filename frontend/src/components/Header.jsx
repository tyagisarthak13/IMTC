import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { ChevronDown } from "lucide-react";
import services from "../data/services";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isDashboard = location.pathname.includes("/dashboard");

  if (isDashboard) {
    return null;
  }
  return (
    <header className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="flex justify-between items-center py-4 px-6 md:px-12 w-full">
        {/* Logo */}
        <div className="flex items-center space-x-12">
          <Link to="/">
            <img
              src="/icon_logo.png"
              alt="Logo"
              className="w-40 md:w-48 h-12 md:h-16 object-contain"
            />
          </Link>

          {/* Navigation */}
          <ul className="flex space-x-6 md:space-x-10 text-gray-800 font-medium relative">
            {/* SERVICES Dropdown */}
            <li
              className="group relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <span className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors font-medium text-[17px]">
                Services <ChevronDown className="w-5 h-5" />
              </span>

              <ul
                className={`absolute left-0 top-full mt-3 w-[800px] bg-white shadow-xl rounded-xl transition-all duration-300 z-50 grid grid-rows-5 grid-flow-col gap-x-6 p-4 border border-gray-100 ${
                  open
                    ? "opacity-100 visible scale-100"
                    : "opacity-0 invisible scale-95"
                }`}
              >
                {services.map((service) => (
                  <li
                    key={service.slug}
                    className="flex items-center gap-3 px-5 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors w-56 rounded-lg"
                  >
                    <img
                      src={service.icon}
                      alt={service.name}
                      className="w-7 h-7 object-contain  flex-shrink-0"
                    />
                    <Link
                      to={`/services/${service.slug}`}
                      className="flex-1 leading-tight text-[15px] font-medium"
                      onClick={() => setOpen(false)}
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link
                to="/solution"
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                Solution
              </Link>
            </li>
            <li>
              <Link
                to="/partners"
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                Partners
              </Link>
            </li>
            <li>
              <Link
                to="/apibanking"
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                API Banking
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/company"
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                Company
              </Link>
            </li>
            {/* <li>
              <Link
                to="/agent"
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                Agent
              </Link>
            </li>
            <li>
              <Link
                to="/agent2"
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                Agent2
              </Link>
            </li> */}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          {/* Sign In Button */}
          <Link to="/login">
            <button className="bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-50 hover:text-blue-600 border border-blue-600 transition-colors cursor-pointer">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="bg-white text-blue-600 font-medium py-2 px-6 rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
