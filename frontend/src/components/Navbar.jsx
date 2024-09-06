import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";


const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
  }

  return (
    <div className="p-6 flex justify-between items-center">
      <Link to="/">
        <img
          src={assets.logo}
          alt="Logo"
          className="w-[60px] sm:w-[100px] hover:rotate-12"
        />
      </Link>

      <ul className="hidden lg:flex list-none gap-20 text-[#49557e] text-md font-semibold">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={
            menu === "home"
              ? "pb-[2px] border-b-[2px] border-orange-500 cursor-pointer"
              : "cursor-pointer"
          }
        >
          Home
        </Link>
        <li
          onClick={() => {
            setMenu("menu");
            scrollToSection("explore-menu");
          }}
          className={
            menu === "menu"
              ? "pb-[2px] border-b-[2px] border-orange-500 cursor-pointer"
              : "cursor-pointer"
          }
        >
          Menu
        </li>
        <li
          onClick={() => {
            setMenu("mobile-app");
            scrollToSection("app-download");
          }}
          className={
            menu === "mobile-app"
              ? "pb-[2px] border-b-[2px] border-orange-500 cursor-pointer"
              : "cursor-pointer"
          }
        >
          Mobile-App
        </li>
        <li
          onClick={() => {
            setMenu("contact-us");
            scrollToSection("footer");
          }}
          className={
            menu === "contact-us"
              ? "pb-[2px] border-b-[2px] border-orange-500 cursor-pointer"
              : "cursor-pointer"
          }
        >
          Contact Us
        </li>
      </ul>

      <div className="flex items-center gap-[20px] lg:gap-[40px]">
        <img
          src={assets.search_icon}
          alt="Search Icon"
          className="w-5 h-5 lg:w-8 lg:h-8 hover:rotate-12 cursor-pointer"
        />
        <div className="relative">
          <Link to="/cart">
            <img
              src={assets.basket_icon}
              alt="Basket Icon"
              className="w-5 h-5 lg:w-8 lg:h-8 hover:rotate-12 cursor-pointer"
            />
          </Link>
          <div
            className={
              +getTotalCartAmount() === 0
                ? ""
                : "absolute min-w-[10px] min-h-[10px] bg-orange-500 rounded-[5px] top-[-4px] right-[-4px]"
            }
          ></div>
        </div>

        {!token ? (
          <button
            onClick={() => setShowLogin(true)}
            className="bg-transparent text-[10px] lg:text-[16px] border border-red-700 p-1 lg:py-4 lg:px-8 rounded-2xl cursor-pointer hover:bg-[#fff4f2]"
          >
            Sign In
          </button>
        ) : (
          <div className="relative group">  {/* group allows hover interaction */}
            <img
              src={assets.profile_icon}
              alt="profile pic"
              className="cursor-pointer"
            />
            {/* Dropdown menu hidden by default, shown on hover */}
            <ul className="absolute right-0 z-10 hidden group-hover:flex flex-col gap-2 bg-[#fff2ef] p-4 rounded-lg shadow-md">
              <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-md">
                <img src={assets.bag_icon} alt="Orders" className="w-4 h-4" />
                <p>Orders</p>
              </li>
              <hr className="border-gray-300" />
              <li
                onClick={logout}
                className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-md"
              >
                <img src={assets.logout_icon} alt="Logout" className="w-4 h-4" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
