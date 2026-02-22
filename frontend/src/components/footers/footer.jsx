import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      
      {/* Decorative wave */}
      <div className="absolute -top-8 left-0 w-full h-16 bg-white/5 rounded-b-full"></div>

      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm md:text-base font-medium">
          <a href="/policy" className="hover:text-pink-400 transition-colors duration-300">Policy</a>
          <a href="/contact" className="hover:text-pink-400 transition-colors duration-300">Contact Us</a>
          <a href="/developer" className="hover:text-pink-400 transition-colors duration-300">About Us</a>
        </div>


        {/* Copyright */}
        <div className="text-sm md:text-base text-center md:text-right opacity-90">
          &copy; {new Date().getFullYear()} SomStudyHub. All rights reserved.
        </div>
      </div>

      {/* Optional bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;
