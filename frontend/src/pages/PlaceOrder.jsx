import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="flex items-start justify-between gap-[50px] mt-[100px]">
      <div className="w-full max-w-[500px]">
        <p className="text-[30px] font-semibold mb-[50px]">
          Delivery Information
        </p>
        <div className="flex gap-[15px]">
          <input
            className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded-[4px] outline-orange-500"
            type="text"
            placeholder="First Name"
          />
          <input
            className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded-[4px] outline-orange-500"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded-[4px] outline-orange-500"
          type="email"
          placeholder="Email"
        />
        <input
          className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded-[4px] outline-orange-500"
          type="text"
          placeholder="Address"
        />
        <div className="flex gap-[15px]">
          <input
            className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded-[4px] outline-orange-500"
            type="text"
            placeholder="City"
          />
          <input
            className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded-[4px] outline-orange-500"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-[15px]">
          <input
            className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded-[4px] outline-orange-500"
            type="text"
            placeholder="Zip Code"
          />
          <input
            className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded-[4px] outline-orange-500"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded-[4px] outline-orange-500"
          type="text"
          placeholder="Phone"
        />
      </div>
      <div className="w-full max-width-[40%]">
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
              <p>${getTotalCartAmount() === 0 ? 0 : 2}.00</p>
            </div>
            <hr />
            <div className="flex justify-between font-bold">
              <p>Total</p>
              <p>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}.00
              </p>
            </div>
          </div>
          <button className="border w-full text-white bg-orange-500 py-2 rounded hover:opacity-80 mt-[30px]">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
