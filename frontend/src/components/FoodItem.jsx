import React, { useState } from 'react';
import { assets } from '../assets/assets';

const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0)
  

  return (
    <div className="w-full m-auto rounded-[15px] shadow-md flex flex-col h-full">
      <div className="relative">
        <img src={image} alt="Food Image" className="w-full rounded-t-[15px]" />
        {!itemCount ? (
          <img src={assets.add_icon_white} alt='White Icon' className='w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]' onClick={() => setItemCount(prev => prev + 1)}/>
        ) : (
          <div className='absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white'>
            <img src={assets.remove_icon_red} alt='red icon' onClick={() => setItemCount(prev => prev - 1)} className='w-[30px]'/>
            <p>{itemCount}</p>
            <img src={assets.add_icon_green} alt='green icon' onClick={() => setItemCount(prev => prev + 1)} className='w-[30px]'/>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between p-[20px] flex-1">
        <div className="flex justify-between items-center mb-[10px]">
          <p className="text-[20px] font-semibold">{name}</p>
          <img src={assets.rating_starts} alt="Rating" className="w-[70px]" />
        </div>

        <p className="text-[#676767] text-[12px] mb-[10px]">{description}</p>

        <p className="text-orange-500 text-[22px] font-semibold my-[10px]">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
