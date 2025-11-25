import React from "react";
import CountUp from "react-countup";
import Cards from "../components/Cards";
import Carousel from "../components/Carousel";
import CategoriesCarousel from "../components/CategoriesCarousel";
import Customer from "../components/Customer";
import FAQ from "../components/FAQ";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* ===== Responsive Hero Section (REPLACED) ===== */}
      <div className="relative w-full h-[60vh] md:h-screen">
        <img
          src="/payments-banner-7.png"
          alt="payment"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 flex items-center"
          data-aos="fade-right"
        >
          <div className="container mx-auto px-6 md:px-24">
            {/* Constrain text width and provide vertical spacing that's responsive */}
            <div className="max-w-2xl md:mt-20 mt-8">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
                Connecting Bharat via <br />
                <span className="text-white">single platform</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 mt-6 leading-relaxed max-w-lg">
                Technology solutions that connect millions of customers with
                businesses across India to simplify collections and settlements.
              </p>

              {/* Buttons: they wrap on small screens */}
              <div className="flex flex-wrap gap-3 items-center">
                <Link to="/contact" aria-label="Contact us">
                  <button
                    className="bg-indigo-900 text-white font-semibold py-2.5 px-6 rounded-lg 
          hover:bg-indigo-900 transition-all duration-300 transform hover:scale-105 shadow-lg 
          cursor-pointer text-sm sm:text-base md:text-lg"
                  >
                    Contact us
                  </button>
                </Link>

                <Link to="/company" aria-label="Company">
                  <button
                    className="bg-transparent border-2 border-white text-white font-semibold py-2.5 px-6 rounded-lg 
          hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 
          cursor-pointer text-sm sm:text-base md:text-lg"
                  >
                    Company
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ————— New: Stats Section (placed ABOVE "What's New") ————— */}
      <section className="py-12" data-aos="fade-up">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Trusted by merchants across India
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
              <div className="text-center p-6 bg-indigo-50 rounded-2xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  <CountUp
                    end={4000}
                    duration={3}
                    separator=","
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  +
                </div>
                <div className="text-gray-600">Happy Merchants</div>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-2xl">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  <CountUp
                    end={99}
                    duration={3}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  %
                </div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>

              <div className="text-center p-6 bg-purple-50 rounded-2xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  <CountUp
                    end={12}
                    duration={3}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  +
                </div>
                <div className="text-gray-600">Cities Covered</div>
              </div>

              <div className="text-center p-6 bg-orange-50 rounded-2xl">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  <CountUp end={24} duration={0} />
                  /7
                </div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's New Section */}
      <section className="py-16" data-aos="fade-up">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-10">
          What's New?
        </h2>
        <Cards />
      </section>

      {/* Benefits Section */}
      <section className="bg-indigo-900 py-16">
        <h2 className="text-white text-center text-4xl md:text-5xl font-bold mb-10">
          Benefits
        </h2>
        <div
          className="flex overflow-x-auto gap-6 justify-center px-6"
          data-aos="fade-in"
        >
          <Carousel />
        </div>

        {/* Certification Logos */}
        <div className="mt-12" data-aos="fade-in">
          <div
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-8 mt-12"
            data-aos="fade-in"
          >
            <div className="bg-white p-5 rounded-xl shadow-md h-50 w-60 flex items-center justify-center">
              <img
                src="/certifications/iso9001.png"
                alt="ISO 9001"
                className="h-40 w-auto object-contain"
              />
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md h-50 w-60 flex items-center justify-center">
              <img
                src="/certifications/kab-logo.png"
                alt="KAB Accredited"
                className="h-40 w-auto object-contain"
              />
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md h-50 w-60 flex items-center justify-center">
              <img
                src="/certifications/iaf-logo-4.png"
                alt="IAF Logo"
                className="h-40 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <CategoriesCarousel direction="left" />
      </section>

      {/* Banner Section */}
      <section
        className="relative w-full h-[420px] sm:h-[520px] md:h-[700px] mx-auto rounded-2xl overflow-hidden my-12 max-w-[1480px]"
        data-aos="fade-up"
      >
        <img
          src="/for_Customers_desktop_44ccfd0a45.jpg"
          alt="For Customers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent"></div>

        {/* Text block: small screens use tighter max-width and smaller offsets */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-white max-w-xs sm:max-w-lg">
          <p className="text-sm font-semibold uppercase tracking-wider mb-2">
            For Customers
          </p>
          <h3 className="text-lg sm:text-2xl md:text-3xl font-bold leading-snug">
            Pay bills across 25+ payment categories. Raise complaints easily.
          </h3>
          <Link to="/services">
            <button className="mt-3 sm:mt-4 bg-indigo-900 text-white py-2 px-6 rounded-lg hover:bg-indigo-800 transition transform hover:scale-105 font-medium shadow-md cursor-pointer">
              Explore Now
            </button>
          </Link>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-6 bg-gray-50">
        <Customer />
      </section>

      {/* FAQ Section */}
      <section className="py-8">
        <FAQ />
      </section>
    </div>
  );
};

export default Home;
