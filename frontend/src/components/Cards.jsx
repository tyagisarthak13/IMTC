import React from "react";
import { Link } from "react-router";

const Cards = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center lg:items-start gap-6 mt-10 px-4">
      {/* Card 1 */}
      <div className="w-full lg:w-[48%] bg-white rounded-lg shadow-md shadow-indigo-200 p-6 transition-transform transform hover:scale-105">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <img
            src="/oie_51035259LO3J2fc.jpg"
            alt="Card"
            className="w-full md:w-40 h-48 md:h-40 rounded-lg object-cover mb-4 md:mb-0 md:mr-6"
          />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              B2B platform
            </h3>
            <p className="text-gray-700 mb-4">
              An interoperable platform that connects IMTC's businesses{" "}
              <br className="hidden md:block" />
              and revolutionises B2B invoicing, payments, collections, and
              settlements.
            </p>
            <div className="md:flex md:justify-start">
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
      <div className="w-full lg:w-[48%] bg-white rounded-lg shadow-md shadow-indigo-200 p-6 transition-transform transform hover:scale-105">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <img
            src="/oie_58114npCLR5zg.jpg"
            alt="Card"
            className="w-full md:w-40 h-48 md:h-40 rounded-lg object-cover mb-4 md:mb-0 md:mr-6"
          />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              New categories
            </h3>
            <p className="text-gray-700 mb-4">
              Many new categories will soon be supported on IMTC platform.
            </p>
            <div className="md:flex md:justify-start">
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
