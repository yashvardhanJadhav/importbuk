/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from "../../images/logo.svg";
import menu from "../../images/menu.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-[95vw] m-auto pt-4 pb-4">
      <img src={logo} />
      <img src={menu} className="cursor-pointer" />
    </div>
  );
};

export default Navbar;
