import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "../components/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="mt-[30px]" id="food-display">
      <h2 className="font-semibold text-3xl">Top Dishes</h2>
      {/* Set up grid to have four columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[50px] gap-7 mt-[30px]">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
