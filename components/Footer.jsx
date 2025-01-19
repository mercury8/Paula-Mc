import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-left">
            © 2024 Paula Mcnamara. All rights reserved.
          </p>
          <p className="text-sm text-left">
            Materialised by{" "}
            <a
              href="https://mercuryink.co.uk"
              className="underline hover:text-pink-700"
            >
              Mercury Ink
            </a>
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://www.instagram.com/miss.p.fashion.stylist/"
              className="text-gray-400 hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
