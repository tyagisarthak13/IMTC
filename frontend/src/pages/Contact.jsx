import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import axios from "axios";
import { useState } from "react";
import { Loader } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    number: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );
      alert(res.data.message);
      setFormData({
        name: "",
        email: "",
        subject: "",
        number: "",
        message: "",
      });
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen pb-20 bg-gradient-to-b from-blue-50 to-gray-50">
      <h1 className="font-extrabold text-blue-900 text-5xl py-12 text-center drop-shadow-md">
        IMTC Payment Solution LLP
      </h1>

      <div className="flex justify-center px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 w-full max-w-[1200px]">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h3>
          <p className="text-gray-700 mb-12">
            We’d love to hear from you! Whether you have a question, need
            support, or want to explore opportunities with us, feel free to
            reach out.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
                <div className="flex-1 bg-blue-50 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 p-6 flex flex-col items-center justify-center text-center">
                  <Phone className="text-blue-700 w-12 h-12 mb-3" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Mobile
                  </h3>
                  <span className="text-gray-700 font-medium">
                    +91 9319985780
                  </span>
                </div>

                <div className="flex-1 bg-blue-50 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 p-6 flex flex-col items-center justify-center text-center">
                  <Mail className="text-blue-700 w-12 h-12 mb-3" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Email
                  </h3>
                  <span className="text-gray-700 font-medium">
                    support@imtc.com
                  </span>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 p-6 flex flex-col items-center justify-center text-center">
                <MapPin className="text-blue-700 w-12 h-12 mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  Location
                </h3>
                <span className="text-gray-700 font-medium px-4">
                  I-Thum Tower-B, Office No 820, Industrial Area, Sector 62,
                  Noida, Uttar Pradesh 201309
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Fill Your Details
              </h3>
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Message Subject *"
                  value={formData.subject}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                />
                <input
                  type="text"
                  name="number"
                  placeholder="Your Number *"
                  value={formData.number}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                  required
                ></textarea>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-5 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition font-semibold shadow-md hover:shadow-lg mt-2 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading && (
                    <Loader className="animate-spin w-5 h-5 text-white" />
                  )}
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
