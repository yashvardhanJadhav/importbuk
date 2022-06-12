/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Footer.css";
import logo from "../../images/logo.svg";
import insta from "../../images/insta.svg";
import twitter from "../../images/twitter.svg";
import fb from "../../images/fb.svg";
import li from "../../images/li.svg";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        
            <div className="w-auto foot mt-4">
                <div className="up flex justify-center items-center gap-x-44">
                    <div className="flex flex-col gap-y-4 w-[282px]">
                        <Link to="/">

                            <img src={logo} width={134} height={44} />
                        </Link>
                        <p className="ft1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elitorem ipsum
                            dolor sit amet, consectetur adipiscing elit
                        </p>
                        <div className="social flex gap-x-4">
                            <a href="">
                                <img src={insta} width={36} height={36} />
                            </a>
                            <a href="">
                                <img src={twitter} width={36} height={36} />
                            </a>
                            <a href="">
                                <img src={fb} width={36} height={36} />
                            </a>
                            <a href="">
                                <img src={li} width={36} height={36} />
                            </a>
                        </div>
                    </div>
                    <div className="w-[167px] flex flex-col gap-y-1">
                        <p className="ft2">About</p>
                        <p className="ft3">How it works</p>
                        <p className="ft3">Team</p>
                        <p className="ft3">Investment</p>
                        <p className="ft3">Activities</p>
                    </div>
                    <div className="w-[167px] flex flex-col gap-y-1">
                        <p className="ft2">Partners</p>
                        <p className="ft3">List your property</p>
                        <p className="ft3">FAQa</p>
                        <p className="ft3">Subscription options</p>
                        <p className="ft3">Resources</p>
                    </div>
                    <div className="w-[167px] flex flex-col gap-y-1">
                        <p className="ft2">Support</p>
                        <p className="ft3">Help</p>
                        <p className="ft3">Contact</p>
                        <p className="ft3">Terms & Condition</p>
                        <p className="ft3">Privacy Policy</p>
                    </div>
                </div>
                <div className="social flex gap-x-4 upm">
                    <a href="">
                        <img src={insta} width={36} height={36} />
                    </a>
                    <a href="">
                        <img src={twitter} width={36} height={36} />
                    </a>
                    <a href="">
                        <img src={fb} width={36} height={36} />
                    </a>
                    <a href="">
                        <img src={li} width={36} height={36} />
                    </a>
                </div>
                <div className="down flex justify-center items-center">
                    <p className="ft">Buk © 2022. All rights reserved.</p>
                </div>
            </div>
    );
};

export default Footer;
