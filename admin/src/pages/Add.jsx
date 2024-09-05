import React from "react";
import { assets } from "../assets/assets";

const Add = () => {
  return (
    <div className="w-[70%] m-[25px] mt-[50px] text-[#6d6d6d] text-[16px]">
      <form className="flex-col gap-[20px]">
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={assets.upload_area}
              alt="Upload Image"
              className="w-[120px]"
            />
          </label>
          <input type="file" id="image" hidden required />
        </div>
        <div className="w-[280px]  flex-col">
          <p>Product Name</p>
          <input
            type="text"
            name="name"
            placeholder="Type Here"
            className="p-[10px]"
          />
          <div className="w-[280px]  flex-col">
            <p>Product Description</p>
            <textarea
              name="description"
              rows="6"
              placeholder="Write Content Here"
              required
              className="p-[10px]"
            ></textarea>
          </div>
        </div>
        <div className="flex gap-[30px]">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select name="category" className=" max-w-[120px] p-[10px]">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desserts">Desserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              type="number"
              name="price"
              placeholder="$20.00"
              className=" max-w-[120px] p-[10px]"
            />
          </div>
        </div>
        <button type="submit" className="w-[120px] border-none p-[10px] bg-black text-white cursor-pointer">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
