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
    <div className="min-h-screen pb-20 bg-gradient-to-b from-blue-50 to-gray-50 ">
      {/* Simple gradient hero for Contact */}
      <section className="w-full bg-gradient-to-r from-indigo-900 to-indigo-700 text-white px-6 sm:px-10 lg:px-16 py-13 mb-10 text-center">
        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          <h1 className="text-3xl md:text-6xl font-bold mb-3">Contact Us</h1>
          <p className="text-sm md:text-[18px] opacity-90">
            Reach out to us for support, business enquiries. We’re just a
            message away.
          </p>
        </div>
      </section>

      <div className="flex justify-center px-4">
        <div
          className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 w-full max-w-[1200px] scale-[1.05]"
          data-aos="fade-in"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h3>
          <p className="text-gray-700 mb-12">
            We’d love to hear from you! Whether you have a question, need
            support, or want to explore opportunities with us, feel free to
            reach out.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-8" data-aos="fade-right">
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
                <a href="tel:+919315773460" className="flex-1">
                  <div className="bg-blue-50 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 p-6 flex flex-col items-center justify-center text-center cursor-pointer">
                    <Phone className="text-indigo-900 w-12 h-12 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      Mobile
                    </h3>
                    <span className="text-gray-700 font-medium">
                      +91 9315773460
                    </span>
                  </div>
                </a>

                <a href="mailto:imtcgurmeet@gmail.com" className="flex-1">
                  <div className="bg-blue-50 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 p-6 flex flex-col items-center justify-center text-center cursor-pointer">
                    <Mail className="text-indigo-900 w-12 h-12 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      Email
                    </h3>
                    <span className="text-gray-700 font-medium">
                      imtcgurmeet@gmail.com
                    </span>
                  </div>
                </a>
              </div>

              <a
                href="https://www.google.com/maps/place/Urest+Society+%26+Integrated+Facility+Management/@28.626951,77.376518,16z/data=!4m6!3m5!1s0x390cef8a45d37eeb:0x4f7208dcb331580b!8m2!3d28.626951!4d77.376518!16s%2Fg%2F11rdc892wh?hl=en&entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-blue-50 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 p-6 flex flex-col items-center justify-center text-center cursor-pointer">
                  <MapPin className="text-indigo-900 w-12 h-12 mb-3" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Location
                  </h3>
                  <span className="text-gray-700 font-medium px-4">
                    Cabin No-06, First Floor Ufirm Head Office, H-64, H Block,
                    Sector 63, Noida, Uttar Pradesh, 201309
                  </span>
                </div>
              </a>
            </div>

            <div
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10"
              data-aos="fade-up"
            >
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
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-700 focus:border-indigo-700 outline-none transition"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-700 focus:border-indigo-700 outline-none transition"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Message Subject *"
                  value={formData.subject}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-700 focus:border-indigo-700 outline-none transition"
                  required
                />
                <input
                  type="text"
                  name="number"
                  placeholder="Your Number *"
                  value={formData.number}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-700 focus:border-indigo-700 outline-none transition"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-700 focus:border-indigo-700 outline-none transition resize-none"
                  required
                ></textarea>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-gradient-to-r from-indigo-900 to-indigo-900 text-white py-3 px-5 rounded-2xl hover:from-indigo-800 hover:to-indigo-800 transition font-semibold shadow-md hover:shadow-lg mt-2 flex items-center justify-center gap-2 cursor-pointer"
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
