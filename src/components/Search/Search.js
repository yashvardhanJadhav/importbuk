/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./Search.css";
import hi from "../../images/hi.svg";
import hi1 from "../../images/hi1.svg";
import loc from "../../images/loc.svg";
import cal from "../../images/cal.svg";
import arr from "../../images/arr.svg";
import roomppl from "../../images/roomppl.svg";
import down from "../../images/down.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Search = () => {
<<<<<<< HEAD
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="mt-16 flex flex-col gap-y-11">
            <p className="text-center heading">Where are you going?</p>
            <div className="search-box m-auto flex items-center px-12 gap-x-6">
                <div className="flex gap-x-4 border-b-2 border-gray-200">
                    <img src={loc} width={15.6} height={19.5} />
                    <input
                        placeholder="Dubai, United Arab Emirates"
                        className="w-[550px] pb-2 pt-4"
                    />
                </div>
                <div className="rightbar1">
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

            </div>
            <div className="search-boxm flex flex-col gap-y-4">
                <div
                    className="flex w-[335px] h-[60px] pl-5 gap-x-3"
                    style={{ backgroundColor: "white", borderRadius: 40 }}
                >
                    <img src={loc} width={12} height={15} />
                    <input placeholder="Dubai, United Arab Emirates" />
                </div>
                <div
                    className="flex w-[335px] h-[60px] pl-6 gap-x-8 items-center"
                    style={{ backgroundColor: "white", borderRadius: 40 }}
                >
                    <div className="pr-4">
                        <div>
                            <p className="fontdesc text-xs font-normal text-gray-500">Check-in

                            </p>
                        </div>
                        <div className="flex">
                            <img src={cal} width={13} height={13} />
                            <p className="fontdesc text-sm font-medium text-gray-800 ml-1"><span className="font-bold text-base">15 </span>May 2022 </p>
                        </div>
                    </div>
                    <div className="borderToCheck pl-8">
                        <div>
                            <p className="fontdesc text-xs font-normal text-gray-500">Check-in

                            </p>
                        </div>
                        <div className="flex">
                            <img src={cal} width={13} height={13} />
                            <p className="fontdesc text-sm font-medium text-gray-800 ml-1"><span className="font-bold text-base">15 </span>May 2022 </p>
                        </div>
                    </div>
                </div>
                <div
                    className="w-[335px] h-[60px] pl-5 pt-3 gap-x-8 items-center"
                    style={{ backgroundColor: "white", borderRadius: 40 }}>
                    <div>
                        <p className="fontdesc text-xs font-normal text-gray-500 ml-1">Rooms and Guests</p>
                    </div>
                    <div className="flex items-center">

                        <img src={roomppl} width={15} height={11} />

                            <p className="fontdesc text-sm font-medium text-gray-800 ml-1"><span className="font-bold text-base">1 </span>Room</p>
                            <img src={down} width={7} height={4} className="ml-1" />
                            <p className="fontdesc text-sm font-medium text-gray-800 ml-3"><span className="font-bold text-base">2 </span>Adults</p>
                            <img src={down} width={7} height={4} className="ml-1" />

                        
                    </div>
                </div>
            </div>
            <Link to="/results" className="m-auto">
                <button className="btn">Search Hotels</button>
            </Link>
            <Link to="/manageBooking">
                <div
                    className="w-[1360px] h-[485px] m-auto mt-10 hi"
                    style={{ background: `url(${hi})` }}
                >

                    <p className="save w-[400px] pt-16 pl-10">
                        Save instantly with BUK Rewards
                    </p>
                </div>
            </Link>
            <div
                className="him w-[360px] h-[485px] m-auto mt-10 object-cover"
                style={{ background: `url(${hi})` }}
            >
                <p className="save w-[340px] text-center pt-32">
                    Save instantly with BUK Rewards
                </p>
            </div>
            <img src={hi1} width={"100%"} height={320} className="mt-4" />
        </div>
    );
=======
  const [search, setSearch] = useState('')
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className="mt-16 flex flex-col gap-y-11">
      <p className="text-center heading">Where are you going?</p>
      <SearchBar 
        search={search} 
        setSearch={setSearch}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />

      <Link to="/results" className="m-auto">
        <button className="btn">Search Hotels</button>
      </Link>
      <div
        className="w-[1360px] h-[485px] m-auto mt-10 hi"
        style={{ background: `url(${hi})` }}
      >
        <p className="save w-[400px] pt-16 pl-10">
          Save instantly with BUK Rewards
        </p>
      </div>
      <div
        className="him w-[360px] h-[485px] m-auto mt-10 object-cover"
        style={{ background: `url(${hi})` }}
      >
        <p className="save w-[340px] text-center pt-32">
          Save instantly with BUK Rewards
        </p>
      </div>
      <img src={hi1} width={"100%"} height={320} className="mt-4" />
    </div>
  );
>>>>>>> 8c0bc52e4a4431cdf28a3aeedae7cca40962248e
};

export default Search;
