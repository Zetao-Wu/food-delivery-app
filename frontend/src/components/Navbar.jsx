import React, { useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("menu");

  return (
    <div className="p-6 flex justify-between items-center">
      <img src={assets.logo} alt="Logo" className="w-[150px]" />
      <ul className="flex list-none gap-20 text-[#49557e] text-md font-semibold">
        <li
          onClick={() => setMenu("home")}
          className={
            menu === "home"
              ? " pb-[2px] border-b-[2px] border-orange-500 cursor-pointer"
              : "cursor-pointer"
          }
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={
            menu === "menu"
              ? " pb-[2px] border-b-[2px] border-orange-500 cursor-pointer"
              : "cursor-pointer"
          }
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={
            menu === "mobile-app"
              ? " pb-[2px] border-b-[2px] border-orange-500 cursor-pointer"
              : "cursor-pointer"
          }
        >
          Mobile-App
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={
            menu === "contact-us"
              ? " pb-[2px] border-b-[2px] border-orange-500 cursor-pointer"
              : "cursor-pointer"
          }
        >
          Contact Us
        </li>
      </ul>
      <div className="flex items-center gap-[40px]">
        <img src={assets.search_icon} alt="Search Icon"/>
        <div className=" relative">
          <img src={assets.basket_icon} alt="Basket Icon" />
          <div className="absolute min-w-[10px] min-h-[10px] bg-orange-500 rounded-[5px] top-[-8px] right-[-8px]"></div>
        </div>
        <button className=" bg-transparent text-[16px] border border-red-700 p-4 px-8 rounded-2xl cursor-pointer hover:bg-[#fff4f2]">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
