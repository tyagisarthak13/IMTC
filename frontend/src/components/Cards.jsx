import React from "react";

const Cards = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-10">
      {/* Card 1 */}
      <div className="flex items-center bg-white rounded-lg shadow-md shadow-blue-200 p-6 max-w-2xl transition-transform transform hover:scale-105">
        <img
          src="/oie_51035259LO3J2fc.jpg"
          alt="Card"
          className="w-40 h-40 rounded-lg object-cover mr-6"
        />
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">B2B platform</h3>
          <p className="text-gray-700 mb-4">
            An interoperable platform that connects IMTC's businesses and
            revolutionises B2B invoicing, payments, collections, and
            settlements.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-all duration-300 shadow-lg">
            Learn More
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex items-center bg-white rounded-lg shadow-md shadow-blue-200 p-6 max-w-2xl transition-transform transform hover:scale-105">
        <img
          src="/oie_58114npCLR5zg.jpg"
          alt="Card"
          className="w-40 h-40 rounded-lg object-cover mr-6"
        />
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            New categories
          </h3>
          <p className="text-gray-700 mb-4">
            Flight booking will soon be supported on IMTC platform.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-all duration-300 shadow-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
