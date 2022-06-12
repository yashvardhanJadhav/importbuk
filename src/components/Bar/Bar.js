/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import loc from "../../images/loc.svg";
import cal from "../../images/cal.svg";
import arr from "../../images/arr.svg";
import down from "../../images/down.svg";
import roomppl from "../../images/roomppl.svg";
import funnel11 from "../../images/funnel11.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Bar.css";

const Bar = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <div className="mt-4 search-box m-auto flex items-center gap-x-6 w-full">
                <div className="flex gap-x-4 border-b-2 border-gray-200 ml-8">
                    <img src={loc} width={15.6} height={19.5} />
                    <input
                        placeholder="Dubai, United Arab Emirates"
                        className="w-[550px] pb-2 pt-4"
                    />
                </div>
                <div className="rightbar">
                    <div>
                        <p className="fontdesc text-xs font-normal text-gray-500">Check-in
                        </p>
                    </div>
                    <div className="flex">
                        <img src={cal} width={13} height={13} />
                        <p className="fontdesc text-sm font-medium text-gray-800 ml-1"><span className="font-bold text-base">15 </span>May 2022 </p>
                    </div>

                </div>
                <div className="borderToCheck pl-6">
                    <div>
                        <p className="fontdesc text-xs font-normal text-gray-500 ">Check-out
                        </p>
                    </div>
                    <div className="flex">
                        <img src={cal} width={13} height={13} />
                        <p className="fontdesc text-sm font-medium text-gray-800 ml-1"><span className="font-bold text-base">17 </span>May 2022 </p>
                    </div>
                </div>
                <div className="borderToCheck pl-6">
                    <div>
                        <p className="fontdesc text-xs font-normal text-gray-500 ml-1">Rooms and Guests</p>
                    </div>
                    <div className="flex items-center">
                        <img src={roomppl} width={13} height={13} />

                        <p className="fontdesc text-sm font-medium text-gray-800 ml-1"><span className="font-bold text-base">1 </span>Room</p>
                        <img src={down} width={7} height={4} className="ml-1" />
                        <p className="fontdesc text-sm font-medium text-gray-800 ml-3"><span className="font-bold text-base">2 </span>Adults</p>
                        <img src={down} width={7} height={4} className="ml-1" />

                    </div>
                </div>
                <button className="sbtn pr-4">Search</button>
            </div>
            <div className="barm pl-5 gap-x-3">
                <img src={loc} width={12} height={15} />
                <input placeholder="Dubai, United Arab Emirates" />
                <img src={funnel11} width={25} height={26} className="ml-8" />
            </div>
        </>
    );
};

export default Bar;
