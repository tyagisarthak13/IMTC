import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const faqs = [
    {
      question: "More about IMTC",
      answer:
        "IMTC is one of India's leading digital financial services platforms, offering mobile wallet, UPI, and various payment solutions. We serve millions of customers with secure and reliable transactions.",
      category: "General",
    },
    {
      question: "How can I download the IMTC app?",
      answer:
        "You can download the IMTC app from Google Play Store for Android or the App Store for iOS devices. The app is free to download and supports all major Indian languages.",
      category: "Getting Started",
    },
    {
      question: "How to create an IMTC account?",
      answer:
        "Simply install the app, register using your mobile number, verify it with OTP, and set a secure password to create your account. KYC verification may be required for certain features.",
      category: "Account",
    },
    {
      question: "How to use IMTC for payments?",
      answer:
        "Log in to the app, add money to your wallet or link your bank account, and start making payments, recharges, or transfers instantly. You can also use UPI, credit/debit cards, and net banking.",
      category: "Payments",
    },
    {
      question: "Is IMTC secure to use?",
      answer:
        "Yes, IMTC uses bank-level encryption and follows RBI guidelines for security. We have multiple layers of security including OTP verification, biometric authentication, and 24/7 fraud monitoring.",
      category: "Security",
    },
    {
      question: "What services does IMTC offer?",
      answer:
        "IMTC offers a wide range of services including mobile recharge, bill payments, money transfers, ticket booking, insurance, investments, and merchant payments across India.",
      category: "Services",
    },
    {
      question: "How to contact customer support?",
      answer:
        "You can reach our 24/7 customer support through the app's help section, call us at 1800-XXX-XXXX, or email us at support@imtc.com. We're always here to help!",
      category: "Support",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <HelpCircle className="w-6 h-6 text-blue-600" />
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Find quick answers to common questions about our services and platform
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none cursor-pointer group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2"></div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {faq.question}
                </h3>
              </div>

              <div
                className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-blue-600" />
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                activeIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6">
                <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-transparent mb-4"></div>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>

                {/* Additional Help */}
                {faq.category === "Support" && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-700">
                      💡 <strong>Quick Tip:</strong> For faster resolution, have
                      your User ID ready when contacting support.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Still Have Questions */}
      <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl border border-blue-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Still have questions?
        </h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Can't find the answer you're looking for? Please get in touch with our
          friendly team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
            onClick={() => navigate("/contact")}
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
