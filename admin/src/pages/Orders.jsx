import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="p-4 w-full sm:w-[90%] lg:w-[70%] mx-auto">
      <h3 className="font-semibold text-lg sm:text-2xl text-center sm:text-left">Order Page</h3>
      <div className="order-list mt-4">
        {orders.map((order, index) => {
          return (
            <div key={index} className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] items-start gap-4 sm:gap-6 p-4 border border-orange-500 my-4 text-sm sm:text-base text-[#505050]">
              <img src={assets.parcel_icon} alt="parcel icon" className="w-12 h-12 sm:w-16 sm:h-16" />
              <div>
                <p className="font-semibold">
                  {order.items.map((item, idx) => {
                    if (idx === order.items.length - 1) {
                      return item.name + " x " + item.quantity;
                    } else {
                      return item.name + " x " + item.quantity + ", ";
                    }
                  })}
                </p>
                <p className="font-semibold mt-4 sm:mt-6 mb-2">
                  {order.address.firstName + " " + order.address.lastName}
                </p>
                <div className="mb-4">
                  <p>{order.address.street + ", "}</p>
                  <p>
                    {order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}
                  </p>
                </div>
                <p className="order-item-phone">{order.address.phone}</p>
              </div>
              <p className="sm:text-center">Items: {order.items.length}</p>
              <p className="sm:text-center">${order.amount}</p>
              <select className="bg-[#ffe8e4] border border-orange-500 w-full sm:w-[120px] sm:w-[10vw] p-2 sm:p-3 outline-none">
                <option value="Food Processing">Food Processing</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
