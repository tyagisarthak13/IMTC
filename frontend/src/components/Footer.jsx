import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="">
                <img
                  src="/icon_logo.png"
                  alt="IMTC Logo"
                  className="w-25 h-25 object-contain"
                />
              </div>
              <span className="text-xl font-bold">
                IMTC Payment Solution LLP
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Secure digital payment solutions for modern India. Trusted by
              millions for seamless transactions.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-gray-200 mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              {["UPI Payments", "AEPS", "Micro ATM", "Bill Pay", "Wallet"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-200 mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {["About", "Careers", "Contact", "Security"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} IMTC. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
