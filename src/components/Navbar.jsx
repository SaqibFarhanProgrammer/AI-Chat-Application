import React from "react";

function Navbar() {
  return (
    <div className="w-[80%] flex items-center justify-between mx-auto px-4 py-3 border-b border-white/10 max-w-[100vw] mx-auto">
      <h1 className="text-lg sm:text-xl font-semibold tracking-wide">
        Neura AI
      </h1>
      <span className="text-xs sm:text-sm text-white/50">v1.0</span>
    </div>
  );
}

export default Navbar;
