import React, { useState } from "react";
import axios from "axios";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        { email }
      );
      alert(res.data.message);

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
        {/* Top blue accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-indigo-900 rounded-t-xl"></div>

        {/* Header */}
        <div className="text-center mb-8">
          <img
            src="/IMTC logo.png"
            alt="IMTC Payments"
            className="mx-auto h-12 w-auto mb-3"
          />
          <h1 className="text-2xl font-semibold text-gray-800">
            Forgot Password
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            We’ll send you a new password on your registered email
          </p>
        </div>

        {/* Email Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Registered Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            placeholder="you@example.com"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-800 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 transition-colors shadow-sm flex justify-center items-center gap-2 cursor-pointer"
          disabled={loading}
        >
          {loading && <Loader className="animate-spin w-5 h-5 text-white" />}
          {loading ? "Sending..." : "Send Password"}
        </button>

        {/* Back to Login */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Remember your password?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 font-medium hover:underline cursor-pointer"
          >
            Sign In
          </span>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
