import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="border-b p-3 flex justify-between items-center">
      <span className="font-bold text-lg">
        Logo
      </span>
      
      <Navigation />
    </header>
  )
}

export default Header;