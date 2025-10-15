import React from "react";
import { Link } from "react-router";
import services from "../data/services";

const ServicesList = () => {
  return (
    <div className="min-h-screen px-6">
      {" "}
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        Our Services
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {services.map((service) => (
          <Link
            key={service.slug}
            to={`/services/${service.slug}`}
            className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg hover:bg-blue-50 transition-all"
          >
            <img
              src={service.icon}
              alt={service.name}
              className="w-16 h-16 object-contain mb-3"
            />
            <p className="text-center font-medium text-gray-700">
              {service.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
