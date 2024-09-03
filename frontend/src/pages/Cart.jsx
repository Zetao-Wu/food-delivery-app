import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <div className="mt-24">
      <div className="cart-items">
        <div
          className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center"
          style={{ fontSize: "max(1vw,12px)" }}
        >
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div
                  key={index}
                  className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center my-[10px] text-black"
                  style={{ fontSize: "max(1vw,12px)" }}
                >
                  <img src={item.image} alt="item image" className="w-[50px]" />
                  <p>{item.name}</p>
                  <p>{'$' + item.price + '.00'}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{'$' + item.price * cartItems[item._id] + ".00"}</p>
                  <p className="cursor-pointer" onClick={() => removeFromCart(item._id)}>x</p>
                </div>
                <hr className="h-[1px] bg-[#e2e2e2]"/>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
