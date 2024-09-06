import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2
    }

    let response = await axios.post(url+'/api/order/place', orderData, {headers: {token}});
    if (response.data.success) {
      const {session_url} = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  };

  return (
    <form
      onSubmit={placeOrder}
      className="flex items-start justify-between gap-[50px] mt-[100px]"
    >
      <div className="w-full max-w-[500px]">
        <p className="text-[30px] font-semibold mb-[50px]">
          Delivery Information
        </p>
        <div className="flex gap-[15px]">
          <input
            required
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded-[4px] outline-orange-500"
            type="text"
            placeholder="First Name"
          />
          <input
            required
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded-[4px] outline-orange-500"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          required
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded-[4px] outline-orange-500"
          type="email"
          placeholder="Email"
        />
        <input
          required
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded-[4px] outline-orange-500"
          type="text"
          placeholder="Address"
        />
        <div className="flex gap-[15px]">
          <input
            required
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded-[4px] outline-orange-500"
            type="text"
            placeholder="City"
          />
          <input
            required
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded-[4px] outline-orange-500"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-[15px]">
          <input
            required
            name="zipcode"
            onChange={onChangeHandler}
            value={data.zipcode}
            className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded-[4px] outline-orange-500"
            type="text"
            placeholder="Zip Code"
          />
          <input
            required
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded-[4px] outline-orange-500"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          required
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
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
          <button
            type="submit"
            className="border w-full text-white bg-orange-500 py-2 rounded hover:opacity-80 mt-[30px]"
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
