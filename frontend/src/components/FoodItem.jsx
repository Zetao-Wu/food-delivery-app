import { useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  return (
    <div className="w-full m-auto rounded-[15px] shadow-md flex flex-col h-full">
      <div className="relative">
        <img src={url+"/images/"+image} alt="Food Image" className="w-full rounded-t-[15px]" />
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            alt="White Icon"
            className="w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]"
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white">
            <img
              src={assets.remove_icon_red}
              alt="red icon"
              onClick={() => removeFromCart(id)}
              className="w-[30px]"
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              alt="green icon"
              onClick={() => addToCart(id)}
              className="w-[30px]"
            />
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between p-[20px] flex-1">
        <div className="flex justify-between items-center mb-[10px]">
          <p className="text-[20px] font-semibold">{name}</p>
          <img src={assets.rating_starts} alt="Rating" className="w-[70px]" />
        </div>

        <p className="text-[#676767] text-[12px] mb-[10px]">{description}</p>

        <p className="text-orange-500 text-[22px] font-semibold my-[10px]">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
