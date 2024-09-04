import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="mt-24 px-4">
      <div className="cart-items">
        {/* Header Row for Cart Items */}
        <div className="hidden sm:grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-xs sm:text-lg font-semibold">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <div className="sm:hidden grid grid-cols-2 items-center text-xs font-semibold">
          <p className="text-[10px]">Items</p>
          <p className="text-[10px]">Title, Price, Quantity, Total</p>
        </div>
        <br />
        <hr />

        {/* Cart Items */}
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="grid grid-cols-2 sm:grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center my-4 text-black text-xs sm:text-lg">
                  {/* Image and Title */}
                  <img
                    src={item.image}
                    alt="item"
                    className="w-10 h-10 sm:w-16 sm:h-16 object-cover"
                  />
                  <div className="sm:hidden flex flex-col space-y-2">
                    <p className="text-[10px]">{item.name}</p>
                    <p className="text-[10px]">${item.price.toFixed(2)}</p>
                    <p className="text-[10px]">Qty: {cartItems[item._id]}</p>
                    <p className="text-[10px]">
                      Total: ${(item.price * cartItems[item._id]).toFixed(2)}
                    </p>
                  </div>
                  <p className="hidden sm:block">{item.name}</p>
                  <p className="hidden sm:block">${item.price.toFixed(2)}</p>
                  <p className="hidden sm:block">{cartItems[item._id]}</p>
                  <p className="hidden sm:block">
                    ${(item.price * cartItems[item._id]).toFixed(2)}
                  </p>
                  <p
                    className="cursor-pointer text-red-500"
                    onClick={() => removeFromCart(item._id)}
                  >
                    x
                  </p>
                </div>
                <hr className="h-[1px] bg-[#e2e2e2]" />
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="mt-20 flex flex-col-reverse md:flex-row justify-between gap-8">
        {/* Cart Total */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-base sm:text-lg font-bold">Cart Total</h2>
          <div className="text-xs sm:text-sm text-[#555] space-y-4">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}.00</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Delivery Fee</p>
              <p>$2.00</p>
            </div>
            <hr />
            <div className="flex justify-between font-bold">
              <p>Total</p>
              <p>${getTotalCartAmount() + 2}.00</p>
            </div>
          </div>
          <button onClick={() => navigate('/order')} className="border w-full text-white bg-orange-500 py-2 rounded hover:opacity-80">
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Promo Code Section */}
        <div className="flex-1">
          <p className="text-[#555] text-xs sm:text-sm">
            Have a promo code? Enter it here:
          </p>
          <div className="mt-4 flex justify-between items-center bg-[#eaeaea] p-2 rounded">
            <input
              className="bg-transparent border-none outline-none flex-grow p-2 text-xs sm:text-sm"
              type="text"
              placeholder="Promo Code"
            />
            <button className="w-24 py-2 px-4 bg-black text-white rounded hover:opacity-80 text-xs sm:text-sm">
              Apply Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
