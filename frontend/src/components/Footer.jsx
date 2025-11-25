import React from "react";
import { Link } from "react-router";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          data-aos="fade-right"
        >
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl font-bold">
                IMTC Payment Solution LLP
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Secure digital payment solutions for modern India. Trusted by
              millions for seamless transactions.
            </p>

            {/* Certification Logos */}
            <div className="flex items-center gap-4 mt-5">
              <img
                src="/certifications/iso9001.png"
                alt="ISO 9001"
                className="h-13 w-13 object-contain"
              />

              <img
                src="/certifications/kab-logo.png"
                alt="KAB Accredited"
                className="h-13 w-auto object-contain"
              />

              <img
                src="/certifications/iaf-logo-4.png"
                alt="IAF LOGO"
                className="h-18 w-auto object-contain"
              />
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-gray-200 mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {[
                "AEPS",
                "Flight Booking",
                "Bill Payment",
                "Fastag",
                "Insurance",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-200 mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {["About"].map((item) => (
                <li key={item}>
                  <Link
                    to="/company"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Social Icons */}
            <div className="flex gap-3 mt-10">
              <a
                href="https://www.linkedin.com/in/imtc-gurmeet-52b8b6392?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/social/linkedin-3.png"
                  alt="LinkedIn"
                  className="h-9 w-9 object-contain"
                />
              </a>

              <a
                href="https://www.facebook.com/share/1JPyqQzsJ1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/social/facebook-2.png"
                  alt="Facebook"
                  className="h-9 w-9 object-contain"
                />
              </a>

              <a
                href="https://www.instagram.com/imtc_payment/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/social/insta-2.png"
                  alt="Instagram"
                  className="h-9 w-9 object-contain"
                />
              </a>

              <a
                href="https://www.youtube.com/@IMTCPAYMENTSOLUTIONLLP"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/social/youtube-2.png"
                  alt="Youtube"
                  className="h-9 w-9 object-contain"
                />
              </a>
            </div>

            {/* Support Numbers (added below, nothing else changed) */}
            <div className="flex flex-col gap-2 mt-4 text-sm text-gray-300">
              <p
                href="tel:9315773460"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <FiPhoneCall className="text-lg" />
                +91-9315773460, +91-9315775056
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} IMTC. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link
                to={"/privacy"}
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to={"/refund"}
                className="hover:text-white transition-colors"
              >
                Refund Policy
              </Link>
              <Link
                to={"/terms"}
                className="hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
