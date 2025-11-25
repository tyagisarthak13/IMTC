import React, { useState } from "react";
import { Link } from "react-router";
import service from "../data/services";

const CategoriesCarousel = ({ direction = "left" }) => {
  const [paused, setPaused] = useState(false);

  return (
    <div className="relative overflow-hidden w-full bg-gradient-to-br from-slate-900 via-blue-800 to-blue-900 py-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0" data-aos="fade-up">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-12 relative z-10 px-4">
        <div
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 border border-white/20 mb-6"
          data-aos="fade-up"
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
          <span className="text-white/80 text-sm font-medium">
            Featured Services
          </span>
        </div>
        <h2
          className="text-5xl md:text-6xl font-bold text-white mb-4"
          data-aos="fade-up"
        >
          Our{" "}
          <span
            className="bg-gradient-to-r from-indigo-300 to-indigo-400 bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            Services
          </span>
        </h2>
        <p
          className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
        >
          Discover our comprehensive suite of financial and lifestyle services
          designed for modern India
        </p>
      </div>

      {/* Carousel Container */}
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Gradient Fades */}
        {/* <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-20 pointer-events-none"></div> */}
        {/* <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-20 pointer-events-none"></div> */}

        {/* Main Carousel */}
        <div
          className={`flex space-x-6 ${
            direction === "right"
              ? "animate-scroll-right"
              : "animate-scroll-left"
          } ${paused ? "pause-animation" : ""}`}
        >
          {service.map((service, index) => (
            <div
              key={index}
              className="group flex-shrink-0 w-80 h-52 rounded-3xl overflow-hidden shadow-2xl hover:shadow-2xl transition-all duration-700 relative cursor-pointer transform hover:scale-105 "
              data-aos="fade-up"
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.name[index]}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                {/* Service Name */}
                <h3 className="text-xl font-bold text-white mb-3 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                  {service.name}
                </h3>

                {/* Explore Button */}
                <Link to={"/services"}>
                  <button className="w-full bg-white/20 backdrop-blur-md text-white py-3 rounded-xl font-semibold opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 hover:bg-white/30 border border-white/30 cursor-pointer">
                    Explore Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls & Info */}
      <div className="flex flex-col items-center mt-12 space-y-1 relative z-10 px-4"></div>
    </div>
  );
};

export default CategoriesCarousel;
