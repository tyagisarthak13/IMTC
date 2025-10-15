// src/pages/ServicesPage.jsx
import React from "react";
import { useParams } from "react-router";
import services from "../data/services";

const ServicesPage = () => {
  const { serviceName } = useParams();
  const service = services.find((s) => s.slug === serviceName);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-2">
            Service not found
          </h2>
          <p className="text-gray-600">Please check the URL and try again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center py-12 px-6">
      <div className="bg-white/90 backdrop-blur-lg p-10 md:p-14 rounded-3xl shadow-2xl max-w-6xl w-full border border-gray-100 transition-transform hover:scale-[1.01] flex flex-col justify-between">
        {/* Header Section */}
        <div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-blue-50 rounded-2xl flex items-center justify-center shadow-inner">
                <img
                  src={service.icon}
                  alt={service.name}
                  className="w-24 h-24 object-contain"
                />
              </div>
            </div>

            {/* Text */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800">
                {service.name}
              </h1>
              <p className="text-gray-600 mt-4 leading-relaxed text-lg font-bold max-w-2xl">
                {service.description}
              </p>
              {service.info && (
                <p className="text-gray-500 mt-3 text-base italic">
                  {service.info}
                </p>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

          {/* Feature List Section */}
          {service.features && service.features.length > 0 && (
            <div className="mt-4">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-800 text-center md:text-left mb-6">
                {service.featuresTitle || "Why Retailers Prefer This Service"}
              </h2>

              <ul className="grid sm:grid-cols-2 gap-4 text-gray-700 list-disc list-inside leading-relaxed">
                {service.features.map((point, index) => (
                  <li key={index} className="">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Image at Bottom */}
        {service.image && (
          <div className="mt-14 overflow-hidden rounded-2xl shadow-md">
            <img
              src={service.image}
              alt={`${service.name} illustration`}
              className="w-full max-h-[600px] object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesPage;
