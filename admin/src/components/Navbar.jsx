import React from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-[8px] px-[4%] border-b border-[#a9a9a9] text-[10px]">
      <img className="w-max-[80px] max-w-[10%]" src={assets.logo} alt="logo" />
      <img className="w-[40px]" src={assets.profile_image} alt="profile" />
    </div>
  );
};

export default Navbar;
