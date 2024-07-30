// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-4 text-sm md:text-base">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#privacy" className="hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-gray-400">
            Terms of Service
          </a>
        </div>
        <p>&copy; 2024 EcoBottle. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
