import React from "react";
import { Link } from "react-router";
import services from "../data/services";

const ServicesList = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-indigo-900">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of financial and digital services
            designed to empower your business and customers
          </p>
        </div>

        {/* Services Grid - Wider horizontal cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200 flex flex-col"
              data-aos="fade-up"
            >
              {/* Service Image - Wider aspect ratio */}
              <div className="h-40 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </div>

              {/* Content Container - More horizontal space */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Icon and Title */}
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

                {/* Description */}
                <p className="text-gray-700 mb-3 leading-relaxed font-medium text-sm">
                  {service.description}
                </p>

                {/* Full Info - No truncation */}
                {service.info && (
                  <div className="mb-3 flex-1">
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {service.info}
                    </p>
                  </div>
                )}

                {/* All Features - Full display */}
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

              {/* Bottom accent */}
              <div className="h-1 bg-gradient-to-r from-indigo-900 to-indigo-700"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
