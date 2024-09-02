import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "../components/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="mt-8 p-4" id="food-display">
      <h2 className="font-semibold text-2xl sm:text-3xl mb-4">Top Dishes</h2>
      {/* Responsive grid setup */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-7 mt-6">
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
          return null; // Explicitly return null for items not matching the condition
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
