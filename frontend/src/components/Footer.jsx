import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex flex-col items-center text-[#d9d9d9] bg-[#323232] gap-6 py-10 px-4 sm:px-8 lg:px-[8vw] pt-20 mt-10" id="footer">
      {/* Responsive grid setup */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-6 lg:gap-20">
        {/* First column with logo and social media */}
        <div className="flex flex-col items-start gap-4">
          <img src={assets.logo} alt="logo" className="w-24 sm:w-32" />
          <p className="text-sm leading-relaxed">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          </p>
          <div className="flex">
            <img src={assets.facebook_icon} alt="Facebook" className="w-8 h-8 mr-3 cursor-pointer" />
            <img src={assets.twitter_icon} alt="Twitter" className="w-8 h-8 mr-3 cursor-pointer" />
            <img src={assets.linkedin_icon} alt="LinkedIn" className="w-8 h-8 cursor-pointer" />
          </div>
        </div>
        {/* Second column with company links */}
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-white font-bold text-lg">COMPANY</h2>
          <ul>
            <li className="mb-2 cursor-pointer">Home</li>
            <li className="mb-2 cursor-pointer">About Us</li>
            <li className="mb-2 cursor-pointer">Delivery</li>
            <li className="mb-2 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        {/* Third column with contact info */}
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-white font-bold text-lg">GET IN TOUCH</h2>
          <ul>
            <li className="mb-2">+1-234-456-6789</li>
            <li className="mb-2">contactus@email.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-full border-t border-gray-500 my-5" />
      <p className="text-center text-sm">Copyright 2024 © Tomato - All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
