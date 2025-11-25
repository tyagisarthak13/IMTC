import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { Loader } from "lucide-react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      });

      alert(res.data.message);
      setFormData({ name: "", email: "", phone: "" });

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Something went wrong. Try again!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="relative bg-white w-full max-w-md rounded-xl shadow-lg border border-gray-200 p-10"
      >
        {/* Blue accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-indigo-700 rounded-t-xl"></div>

        {/* Header */}
        <div className="text-center mb-8">
          <img
            src="/IMTC logo.png"
            alt="IMTC Payments"
            className="mx-auto h-12 w-auto mb-3"
          />
          <h1 className="text-2xl font-semibold text-gray-800">
            Create Account
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Join IMTC Payments to get started
          </p>
        </div>

        {/* Name */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-700 focus:ring-1 focus:ring-indigo-700"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-700 focus:ring-1 focus:ring-indigo-700"
            placeholder="you@example.com"
          />
        </div>

        {/* Phone */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-700 focus:ring-1 focus:ring-indigo-700"
            placeholder="+91 9876543210"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full bg-indigo-900 text-white font-medium py-2.5 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm flex justify-center items-center gap-2 cursor-pointer`}
          disabled={loading}
        >
          {loading && <Loader className="animate-spin w-5 h-5 text-white" />}
          {loading ? "Creating Account..." : "Sign Up"}
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="text-gray-400 text-sm px-3">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Login Redirect */}
        <p className="text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-900 font-medium hover:underline"
          >
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
