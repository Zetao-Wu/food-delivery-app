import React from "react";

const Header = () => {
  return (
    <div className="h-[40vh] sm:h-[50vh] lg:h-[34vw] my-auto mx-[10px] lg:mx-[30px] bg-[url('/header_img.png')] bg-no-repeat bg-cover bg-center lg:bg-contain relative">
      <div className="absolute flex flex-col items-start gap-4 lg:gap-[1.5vw] max-w-[90%] sm:max-w-[70%] lg:max-w-[50%] bottom-[5%] sm:bottom-[10%] left-[5%] lg:left-[6vw]">
        <h2 className="font-semibold text-white text-xl sm:text-4xl lg:text-6xl">
          Order Your Favorite Food Here
        </h2>
        <p className="text-white text-xs sm:text-md lg:text-lg">
          Choose from a diverse menu that features a delectable array of dishes
          crafted with the finest ingredients. Combined with our culinary
          expertise, we will satisfy your cravings and elevate your dining
          experiences, one meal at a time.
        </p>
        <button className="border text-[#747474] font-semibold py-2 px-4 sm:py-3 sm:px-6 lg:py-[1vw] lg:px-[2.3vw] bg-white text-sm sm:text-md lg:text-lg rounded-[30px] hover:opacity-90">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
