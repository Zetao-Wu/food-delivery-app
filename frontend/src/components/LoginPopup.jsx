import React, { useState } from "react";
import { assets } from "../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="absolute z-10 w-full h-full bg-[#00000090] grid">
      <form className="place-self-center max-w-[min(23vw,_330px)] text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-[8px] text-[14px]">
        <div className="flex justify-between items-center text-black">
          <h2 className="text-2xl font-semibold">{currState}</h2>
          <img
          className="w-[16px] cursor-pointer"
            src={assets.cross_icon}
            alt="exit"
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className="flex flex-col gap-[20px]">
          {currState !== "Login" && (
            <input type="text" placeholder="Username" required className="outline-none border p-[10px] rounded-lg border-black"/>
          )}
          <input type="email" placeholder="Email" required className="outline-none border p-[10px] rounded-lg border-black"/>
          <input type="password" placeholder="Password" required className="outline-none border p-[10px] rounded-lg border-black"/>
        </div>
        <button className="border border-black p-[10px] rounded-lg text-white bg-orange-500 text-[15px] hover:opacity-85">{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="flex items-start gap-[8px] mt-[-10px]">
          <input className='mt-[5px] cursor-pointer' type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Don't have an account? <span className='text-orange-500 font-semibold cursor-pointer hover:underline' onClick={() => setCurrState('Sign Up')}>Sign Up</span>
          </p>
        ) : (
          <p>
            Already have an Account? <span className='text-orange-500 font-semibold cursor-pointer hover:underline' onClick={() => setCurrState('Login')}>Login</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
