import React from "react";

const Slider = ({ img, text }) => {
  return (
    <div
      className="mt-6 bg-white rounded-xl shadow-lg p-6 w-56 flex flex-col flex-shrink-0
      hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out"
    >
      <div className="flex justify-center mb-4">
        <div className="bg-blue-100 p-3 rounded-full">
          <img src={img} alt="Card" className="w-20 h-20 object-contain" />
        </div>
      </div>

      <div className="flex flex-col flex-grow">
        <p className="text-gray-700 text-center text-base font-medium leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Slider;
