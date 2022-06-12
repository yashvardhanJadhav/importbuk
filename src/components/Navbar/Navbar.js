/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from "../../images/logo.svg";
import menu from "../../images/menu.svg";
import lang from "../../images/lang.svg";
import bell from "../../images/bell.svg";
import user from "../../images/user.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ishomepage}) => {
    return (
        <div className="flex justify-between items-center m-auto pt-4 pb-4 nav">
            <Link to="/">
                <img src={logo} className="logoimg"/>
            </Link>
            {
                !ishomepage?
            <div className="flex gap-x-4 respnav">
                <div class="flex justify-center">
                    <div>
                        <div class="dropdown relative">
                            <a class="dropdown-toggle leading-tight transition duration-150 ease-in-out flex items-center whitespace-nowrap"

                                type="button"
                                id="dropdownMenuButton2"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <img src={lang} width={20} height={20} className="cursor-pointer" />
                            </a>
                            <ul class="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-sm shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
                                aria-labelledby="dropdownMenuButton2">
                                <li className="w-32">
                                    <span class="dropdown-item text-xs py-1 px-4 font-medium block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-[#2f69ff1a]" >English</span>
                                </li>
                                <li>
                                    <span class="dropdown-item text-xs py-1 px-4 font-medium block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-[#2f69ff1a]" >French</span>
                                </li>
                                <li>
                                    <span class="dropdown-item text-xs py-1 px-4 font-medium block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-[#2f69ff1a]">Spanish</span>
                                </li>
                                <li>
                                    <span class="dropdown-item text-xs py-1 px-4 font-medium block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-[#2f69ff1a]">Suomalian</span>
                                </li>
                                <li>
                                    <span class="dropdown-item text-xs py-1 px-4 font-medium block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-[#2f69ff1a]">Filipino</span>
                                </li>
                                <li>
                                    <span class="dropdown-item text-xs py-1 px-4 font-medium block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-[#2f69ff1a]">Francais</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <img src={bell} width={20} height={20} className="cursor-pointer" />
                <div className="flex gap-x-2">
                    <p className="fontdesc text-base font-medium text-gray-900 token">0x6041...Fa35</p>
                    <img src={user} width={20} height={20} className="cursor-pointer" />
                </div>
                <img src={menu} width={20} height={20} className="cursor-pointer" />
            </div> : <img src={menu} width={20} height={20} className="cursor-pointer" />
            }  
        </div>
    );
};

export default Navbar;
