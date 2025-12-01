import React from "react";
import { Link } from "react-router";

import b2bPlatform from "../assets/b2bPlatform.jpg";
import newCategories from "../assets/newCategories.jpg";

const Cards = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center lg:items-start gap-6 mt-10 px-4">
      {/* Card 1 */}
      <div className="w-full lg:w-[48%] bg-white rounded-lg shadow-md shadow-indigo-200 p-6 transition-transform transform hover:scale-105 flex flex-col h-full">
        <div className="flex flex-col md:flex-row items-start md:items-center h-full">
          <img
            src={b2bPlatform}
            alt="Card"
            className="w-full md:w-40 h-48 md:h-40 rounded-lg object-cover mb-4 md:mb-0 md:mr-6"
          />
          <div className="flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              B2B platform
            </h3>
            <p className="text-gray-700 mb-4 flex-1">
              An interoperable platform that connects IMTC's businesses
              <br className="hidden md:block" />
              and revolutionises B2B invoicing, payments and collections.
            </p>
            <div className="md:flex md:justify-start mt-auto">
              <Link to="/services" className="w-full md:w-auto">
                <button className="w-full md:w-auto bg-indigo-900 text-white px-4 py-2 rounded-lg hover:bg-indigo-800 transition-all duration-300 shadow-lg cursor-pointer">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-full lg:w-[48%] bg-white rounded-lg shadow-md shadow-indigo-200 p-6 transition-transform transform hover:scale-105 flex flex-col h-full">
        <div className="flex flex-col md:flex-row items-start md:items-center h-full">
          <img
            src={newCategories}
            alt="Card"
            className="w-full md:w-40 h-48 md:h-40 rounded-lg object-cover mb-4 md:mb-0 md:mr-6"
          />
          <div className="flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              New categories
            </h3>
            <p className="text-gray-700 mb-4 flex-1">
              Many new categories will soon be supported on IMTC platform.
            </p>
            <div className="md:flex md:justify-start mt-auto">
              <Link to="/services" className="w-full md:w-auto">
                <button className="w-full md:w-auto bg-indigo-900 text-white px-4 py-2 rounded-lg hover:bg-indigo-800 transition-all duration-300 shadow-lg cursor-pointer">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
