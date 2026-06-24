import React from "react";
import logo from "../assets/cions/logo.jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Neura AI" className="navbar-logo" />
      </div>
    </nav>
  );
}

export default Navbar;