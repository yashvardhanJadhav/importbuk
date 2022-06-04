/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from "../../images/logo.svg";
import menu from "../../images/menu.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center m-auto pt-4 pb-4 nav">
      <img src={logo} />
      <img src={menu} className="cursor-pointer" />
    </div>
  );
};

export default Navbar;
