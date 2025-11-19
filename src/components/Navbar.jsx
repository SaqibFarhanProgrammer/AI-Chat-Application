import React from "react";
import logo from "..//assets/cions/logo.jpg";
function Navbar() {
  return (
    <div
      className="w-[100%] 
      navbar
    
    flex items-center  mx-auto px-4 py-3 border-b border-white/10 max-w-[100vw] justify-end"
    >
      <div className="text-lg sm:text-xl max-[420px]:pt-0.5 py-2 font-semibold tracking-wide">
        <img className="w-[100%] h-10 max-[420px]:h-6" src={logo} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
