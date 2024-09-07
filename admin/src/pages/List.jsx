import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching the list");
      }
    } catch (error) {
      toast.error("Error fetching the list");
    }
  };

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col p-4 w-full sm:w-[80%] mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center sm:text-left">All Foods List</h2>

      <div className="list-table w-full">
        {/* Table Header */}
        <div className="grid grid-cols-2 sm:grid-cols-[1fr_2fr_1fr_1fr_0.5fr] items-center gap-2 sm:gap-4 py-2 px-4 border bg-gray-100 border-gray-300 text-xs sm:text-sm font-semibold">
          <p>Image</p>
          <p>Name</p>
          <p className="hidden sm:block">Category</p>
          <p className="hidden sm:block">Price</p>
          <p className="hidden sm:block">Action</p>
        </div>

        {/* List Items */}
        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-2 sm:grid-cols-[1fr_2fr_1fr_1fr_0.5fr] items-center gap-2 sm:gap-4 py-2 px-4 border-b bg-white text-xs sm:text-sm"
          >
            <img
              src={`${url}/images/${item.image}`}
              alt="item"
              className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] object-cover rounded"
            />
            <p className="truncate">{item.name}</p>
            <p className="hidden sm:block">{item.category}</p>
            <p className="hidden sm:block">${item.price}.00</p>
            <p onClick={() => removeFood(item._id)} className="text-red-500 cursor-pointer hidden sm:block">
              x
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
