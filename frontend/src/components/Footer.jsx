import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex text-[#d9d9d9] bg-[#323232] flex-col items-center gap-[20px] py-[20px] px-[8vw] pt-[80px] mt-[100px]" id="footer">
      <div className="w-full grid grid-cols-[2fr_1fr_1fr] gap-[80px]">
        <div className="flex flex-col items-start gap-[20px] list-none">
            <img src={assets.logo} alt="logo" />
            <p className="text-sm">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <div className="flex">
                <img src={assets.facebook_icon} alt="Facebook" className="w-[40px] mr-[15px] cursor-pointer"/>
                <img src={assets.twitter_icon} alt="Twitter" className="w-[40px] mr-[15px] cursor-pointer"/>
                <img src={assets.linkedin_icon} alt="LinkedIn" className="w-[40px] mr-[15px] cursor-pointer"/>
            </div>
        </div>
        <div className="flex flex-col items-start gap-[20px] list-none">
            <h2 className="text-white font-bold text-2xl">COMPANY</h2>
            <ul>
                <li className="mb-[10px]">Home</li>
                <li className="mb-[10px]">About Us</li>
                <li className="mb-[10px]">Delivery</li>
                <li className="mb-[10px]">Privacy Policy</li>
            </ul>
        </div>
        <div className="flex flex-col items-start gap-[20px] list-none">
            <h2 className="text-white font-semibold text-xl">GET IN TOUCH</h2>
            <ul>
                <li className="mb-[10px]">+1-234-456-6789</li>
                <li className="mb-[10px]">contactus@email.com</li>
            </ul>
        </div>
      </div>
      <hr  className="w-full h-[2px] my-5 bg-gray-500"/>
      <p className="footer-copyright">Copyright 2024 © Tomato - All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
