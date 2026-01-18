import React, { useState, useEffect } from "react";
import telegramIcon from "../../assets/images/telegram.png";
import logo from "../../assets/images/SuperTradingEA_logo.png";

const Footer = () => {
  const [showContact, setShowContact] = useState(false);

  // Show "Need help?" button after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContact(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="footer mt-16 px-3 ">
      {/* Footer Contact - Fixed Button */}
      <div
        className={`footer-contact flex items-center gap-2 fixed bottom-4 right-4 sm:bottom-8 sm:right-10 text-blue-400 p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out ${
          showContact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <img
          src={telegramIcon}
          alt="Telegram"
          className="h-3 w-3 sm:h-3 sm:w-3"
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://t.me/ChhuyVannithDev"
          className="text-white md:text-[10px] text-sm font-semibold"
        >
          Need help?
        </a>
      </div>

      {/* Footer Content */}
      <div className="footer-conten">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 py-12 lg:grid-cols-3 border-t border-b border-gray-800 text-white">
          {/* Column 1 - Logo & Description */}
          <div className="footer-column flex flex-col items-start">
            <div className="flex items-center justify-center mb-4 gap-2">
              <img src={logo} className="h-10" alt="" />
              <h3 className="text-white font-medium text-lg sm:text-xl mb-2">
                SmartTradingEA 🤖
              </h3>
            </div>
            <p className="text-gray-500   sm:text-base text-sm">
              SmartTradingEA is a professional Expert Advisor built for Gold
              (XAUUSD), designed to handle volatility with intelligent risk
              control, adaptive trade spacing, and real-time execution.
            </p>
          </div>

         
          {/* Column 3 - Community */}
          <div className="footer-column text-gray-200x">
            <h3 className="font-bold mb-4 text-lg sm:text-xl">Community</h3>
            <ul className="text-gray-500  space-y-2 text-sm sm:text-base">
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.12.099.154.232.17.326.016.094.037.308.02.475z"></path>
                </svg>
                Telegram Community
              </li>
            </ul>
          </div>
           {/* Column 2 - Quick Links */}
          <div className="footer-column text-gray-200">
            <h3 className=" font-bold mb-4 text-lg sm:text-xl">Quick Links</h3>
            <ul className="text-gray-500  space-y-2 text-sm sm:text-base">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <p className="text-center py-6 sm:py-10 text-gray-400 text-sm sm:text-base">
          © 2025 SuperTradingEA. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
