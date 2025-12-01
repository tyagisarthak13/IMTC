import React from "react";
import { Link } from "react-router";
import services from "../data/services";

const ServicesList = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* New Gradient Header Section (Same Style as Your Contact Page) */}
      <section className="w-full bg-gradient-to-r from-indigo-900 to-indigo-700 text-white px-6 sm:px-10 lg:px-16 py-13 mb-16 text-center">
        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          <h1 className="text-3xl md:text-6xl font-bold mb-3">Our Services</h1>
          <p className="text-sm md:text-[19px] opacity-90">
            Explore our secure financial and digital solutions designed to
            empower your business.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-10">
        {/* Services Grid - Wider horizontal cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200 flex flex-col"
              data-aos="fade-up"
            >
              {/* Service Image */}
              <div className="h-40 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img
                      src={service.icon}
                      alt={service.name}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-900 transition-colors">
                    {service.name}
                  </h3>
                </div>

                <p className="text-gray-700 mb-3 leading-relaxed font-medium text-sm">
                  {service.description}
                </p>

                {service.info && (
                  <div className="mb-3 flex-1">
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {service.info}
                    </p>
                  </div>
                )}

                {service.features && service.features.length > 0 && (
                  <div className="mt-auto">
                    <h4 className="font-semibold text-indigo-900 mb-2 text-xs">
                      {service.featuresTitle || "Key Benefits:"}
                    </h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start text-xs text-gray-700"
                        >
                          <span className="w-1.5 h-1.5 bg-indigo-900 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="h-1 bg-gradient-to-r from-indigo-900 to-indigo-700"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
