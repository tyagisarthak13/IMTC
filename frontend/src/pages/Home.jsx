import React from "react";
import Cards from "../components/Cards";
import Carousel from "../components/Carousel";
import CategoriesCarousel from "../components/CategoriesCarousel";
import Customer from "../components/Customer";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img
          src="/payments-banner-1.jpg"
          alt="payment"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30 flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Connecting Bharat via <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent">
                  single platform
                </span>
              </h1>

              <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-lg">
                Technology solutions that connect millions of customers with
                businesses across India to simplify collections and settlements.
              </p>

              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Customers
                </button>
                <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                  Partners
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What's New Section */}
      <section className="py-16">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-10">
          What's New?
        </h2>
        <Cards />
      </section>

      {/* Benefits Section */}
      <section className="bg-blue-600 py-16">
        <h2 className="text-white text-center text-4xl md:text-5xl font-bold mb-10">
          Benefits
        </h2>
        <div className="flex overflow-x-auto gap-6 justify-center px-6">
          <Carousel />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <CategoriesCarousel direction="left" />
      </section>

      {/* Banner Section */}
      <section className="relative w-full h-[600px] md:h-[700px] mx-auto rounded-2xl overflow-hidden my-12 max-w-[1480px]">
        <img
          src="/for_Customers_desktop_44ccfd0a45.jpg"
          alt="For Customers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent"></div>
        <div className="absolute top-6 left-6 text-white max-w-lg">
          <p className="text-sm font-semibold uppercase tracking-wider mb-2">
            For Customers
          </p>
          <h3 className="text-2xl md:text-3xl font-bold leading-snug">
            Pay bills across 25+ payment categories. Raise complaints easily.
          </h3>
          <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition transform hover:scale-105 font-medium shadow-md">
            Explore Now
          </button>
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
