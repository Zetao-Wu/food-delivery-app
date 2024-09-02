import React from "react";
import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5 p-4" id="explore-menu">
      <h1 className="text-[#262626] font-semibold text-2xl sm:text-3xl">
        Explore Our Diverse Menu
      </h1>
      <p className="max-w-full sm:max-w-[60%] text-[#808080] text-sm sm:text-md">
        Choose from a diverse menu that features a delectable array of dishes
        crafted with the finest ingredients.
      </p>
      <div className="flex justify-center sm:justify-between items-center gap-4 sm:gap-10 text-center my-5 flex-wrap">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="flex flex-col items-center cursor-pointer"
            >
              <img
                src={item.menu_image}
                alt="Menu Image"
                className={`w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] rounded-full ${
                  category === item.menu_name
                    ? "border-4 sm:border-8 border-solid border-orange-500 p-1"
                    : ""
                }`}
              />
              <p className="mt-2 text-[#747474] text-sm sm:text-lg">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-4 border-[#e2e2e2]" />
    </div>
  );
};

export default ExploreMenu;
