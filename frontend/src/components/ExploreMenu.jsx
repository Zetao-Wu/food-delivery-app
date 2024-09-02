import React from "react";
import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-[20px]" id="explore-menu">
      <h1 className="text-[#262626] font-semibold text-3xl">
        Explore Our Diverse Menu
      </h1>
      <p className=" max-w-[60%] columns-[#808080] text-md">
        Choose from a diverse menu that features delectable array of dishes
        crafted with the finest ingredients.
      </p>
      <div className="flex justify-between items-center gap-[30px] text-center my-[20px] mx-0 flex-wrap">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className=""
            >
              <img
                src={item.menu_image}
                alt="Menu Image"
                className={
                  category === item.menu_name
                    ? "w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] border-8 border-solid border-orange-500 p-1"
                    : "w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%]"
                }
              />
              <p className="mt-[10px] text-[#747474] text-2xl cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-[10px] mx-0 bg-[#e2e2e2]" />
    </div>
  );
};

export default ExploreMenu;
