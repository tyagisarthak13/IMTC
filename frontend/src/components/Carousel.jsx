import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
  const slides = [
    {
      img: "/icon_fast_Settlements_ddee4c0443.svg",
      text: "Fast settlements with 8 cycles in a day",
    },
    {
      img: "/icon_payment_Outlets_896a9abe0e.svg",
      text: "1000+ digital channels, 99+ lakh physical outlets to pay",
    },
    {
      img: "/icon_convenient_fe17a1f7f0.svg",
      text: "Convenient for Customers",
    },
    {
      img: "/icon_secure_Platform_7934163269.svg",
      text: "Secure platform with end-to-end encryption",
    },
    {
      img: "/icon_rbi_Compliances_c3bc90ce28.svg",
      text: "Follows all RBI regulatory compliances",
    },
    {
      img: "/icon_always_On_ac00956fc3.svg",
      text: "Always on with 24x7 operations and 99.87% uptime",
    },
    {
      img: "/icon_payment_Modes_d83be67f3b.svg",
      text: "12+ payment modes for Customers",
    },
    {
      img: "/icon_reduced_Cost_119b166d1b.svg",
      text: "Reduced cost via a digitalised process",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 4;

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - cardsPerView : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= slides.length - cardsPerView ? 0 : prev + 1
    );
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm border border-white/30 transition-all duration-300 cursor-pointer z-10"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm border border-white/30 transition-all duration-300 cursor-pointer z-10"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 gap-6"
          style={{ transform: `translateX(-${currentIndex * (25 + 1.5)}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Icon */}
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={slide.img}
                    alt=""
                    className="w-8 h-8 filter brightness-0 invert"
                  />
                </div>

                {/* Text */}
                <p className="text-white/90 text-sm leading-relaxed font-medium">
                  {slide.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {Array.from({ length: slides.length - cardsPerView + 1 }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? "bg-white w-6"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Carousel;
