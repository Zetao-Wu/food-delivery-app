import React from "react";

const Header = () => {
  return (
    <div className='h-[34vw] my-auto mx-[30px] bg-[url("/header_img.png")] bg-no-repeat bg-contain relative'>
      <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw]">
        <h2 className="font-semibold text-white text-6xl">
          Order Your Favorite Food Here
        </h2>
        <p className="text-white text-md">
          Choose from a diverse menu that features delectable array of dishes
          crafted with the finest ingredients. Combined with our culinary
          expertise, we will satisfy your cravings and elevate your dining
          experiences, one meal at a time.
        </p>
        <button className="border text-[#747474] font-semibold py-[1vw] px-[2.3vw] bg-white text-lg rounded-[50px] hover:opacity-90">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
