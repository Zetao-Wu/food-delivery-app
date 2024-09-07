import { useState } from "react";
import { assets } from "../assets/assets";
import axios from 'axios'
import { toast } from "react-toastify";

const Add = ({url}) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async(event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  }

  return (
    <div className="p-4 w-full sm:w-[70%] mx-auto mt-[50px] text-[#6d6d6d] text-[16px]">
      <form onSubmit={onSubmitHandler} className="flex flex-col gap-6">
        {/* Upload Image Section */}
        <div className="flex flex-col items-start">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload Image"
              className="w-[100px] sm:w-[120px] cursor-pointer"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>

        {/* Product Name and Description */}
        <div className="flex flex-col gap-4 w-full sm:w-[70%]">
          <div className="flex flex-col gap-2">
            <p>Product Name</p>
            <input
              onChange={handleChange}
              value={data.name}
              type="text"
              name="name"
              placeholder="Type Here"
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-col gap-2">
            <p>Product Description</p>
            <textarea
              onChange={handleChange}
              value={data.description}
              name="description"
              rows="6"
              placeholder="Write Content Here"
              required
              className="p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
        </div>

        {/* Category and Price */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <div className="flex flex-col gap-2 w-full sm:w-[45%]">
            <p>Product Category</p>
            <select
              onChange={handleChange}
              name="category"
              className="p-2 border border-gray-300 rounded"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desserts">Desserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 w-full sm:w-[45%]">
            <p>Product Price</p>
            <input
              onChange={handleChange}
              value={data.price}
              type="number"
              name="price"
              placeholder="$20.00"
              className="p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full sm:w-[120px] border-none p-2 bg-black text-white rounded cursor-pointer"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
