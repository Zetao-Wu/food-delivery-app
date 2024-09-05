import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const List = () => {
  const url = "http://localhost:4000";
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
    const response = await axios.post(`${url}/api/food/remove`, {id: foodId})
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message)
    } else {
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col p-4 w-full">
      <h2 className="text-2xl font-semibold mb-4">All Foods List</h2>

      <div className="list-table w-full">
        {/* Table Header */}
        <div className="grid grid-cols-[1fr_2fr_1fr_1fr_0.5fr] items-center gap-4 py-2 px-4 border bg-gray-100 border-gray-300 text-xs md:text-sm font-semibold">
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p>Action</p>
        </div>

        {/* List Items */}
        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_2fr_1fr_1fr_0.5fr] items-center gap-4 py-2 px-4 border-b bg-white text-xs md:text-sm"
          >
            <img
              src={`${url}/images/${item.image}`}
              alt="item"
              className="w-[60px] h-[60px] object-cover rounded" // Adjusted image size for larger column
            />
            <p className="truncate">{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}.00</p>
            <p onClick={() => removeFood(item._id)} className="text-red-500 cursor-pointer">x</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
