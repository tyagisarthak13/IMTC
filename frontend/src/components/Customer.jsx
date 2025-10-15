import React, { useState, useEffect } from "react";
import { Star, Quote, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const Customer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      img: "/customers/customer1.jpeg",
      name: "Rajesh Kumar",
      location: "Bihar",
      role: "Small Business Owner",
      text: "I recently started using IMTC for my new business, and I am impressed by their services. From bill payments to UPI collections, everything works smoothly. Their customer support is always responsive, making it easy to handle any issues. IMTC is the best partner for any growing business.",
      rating: 5,
    },
    {
      img: "/customers/customer2.jpeg",
      name: "Priya Singh",
      location: "West Bengal",
      role: "Shopkeeper",
      text: "As a small-town shopkeeper, I never imagined I could offer banking services. But with IMTC, it's possible! Their AEPS and mATM services are easy to use, and the real-time transaction success rate is amazing. I highly encourage all merchants in small towns to explore IMTC and see the difference.",
      rating: 5,
    },
    {
      img: "/customers/customer3.jpeg",
      name: "Amit Sharma",
      location: "Madhya Pradesh",
      role: "Village Merchant",
      text: "IMTC has brought modern banking services to my village shop. Now, my customers don't need to travel far for cash withdrawals or deposits. It's fast, secure, and trusted. Thanks to IMTC, I have increased my earnings and built a loyal customer base. Every merchant should join IMTC!",
      rating: 4,
    },
    {
      img: "/customers/customer4.jpeg",
      name: "Yogesh Patil",
      location: "Maharashtra",
      role: "Retail Store Owner",
      text: "I have tried many platforms before, but IMTC stands out in every way. Their app is fast and reliable, and the services are seamless. The customer experience they provide is the best in the market. IMTC has helped me grow my business and gain recognition in my area. Highly recommend it!",
      rating: 5,
    },
    {
      img: "/customers/customer5.jpeg",
      name: "Kiran Reddy",
      location: "Karnataka",
      role: "Local Merchant",
      text: "Thanks to IMTC, I can now provide banking services in my small shop. The real-time transactions and instant commission settlement make it perfect for any merchant. Their team is very supportive and always helps in resolving queries quickly. If you want to grow your business, join IMTC!",
      rating: 4,
    },
    {
      img: "/customers/customer6.jpeg",
      name: "Deepak Joshi",
      location: "Pune",
      role: "General Store Owner",
      text: "I am very happy with IMTC. Their products and services, from bill payments to AEPS, work flawlessly. The user interface is simple and convenient, and their customer support is unmatched. I recommend IMTC to every shopkeeper who wants to add more income sources to their business.",
      rating: 5,
    },
    {
      img: "/customers/customer7.jpeg",
      name: "Sushil Kumar",
      location: "Madhya Pradesh",
      role: "General Store Owner",
      text: "IMTC has been a game-changer for my shop. With their services, I can offer banking solutions like cash withdrawal and deposits to my customers. Transactions are real-time, and the system is very smooth. I would recommend every merchant in my region to join IMTC and grow their business effortlessly.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="w-full py-18 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Quote className="w-4 h-4" />
            TESTIMONIALS
          </div>
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
            <span className="text-blue-600">What</span> Our Customers Say
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover why thousands of merchants across India trust IMTC for
            their business growth
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute -left-4 md:-left-12 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg border border-gray-200 hover:bg-blue-50 hover:scale-110 transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700 cursor-pointer" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute -right-4 md:-right-12 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg border border-gray-200 hover:bg-blue-50 hover:scale-110 transition-all duration-300 z-10"
          >
            <ChevronRight className="w-5 h-5 text-gray-700 cursor-pointer" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Customer Image */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative">
                  <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <img
                      src={testimonials[currentIndex].img}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-3 rounded-2xl shadow-lg">
                    <Quote className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex flex-col justify-center">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonials[currentIndex].rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-300 text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Customer Info */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {testimonials[currentIndex].role}
                  </p>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">
                      {testimonials[currentIndex].location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-2xl mx-auto">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
            <div className="text-gray-600">Happy Merchants</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">99%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600">Cities Covered</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
