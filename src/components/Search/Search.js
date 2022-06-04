/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./Search.css";
import hi from "../../images/hi.svg";
import hi1 from "../../images/hi1.svg";
import loc from "../../images/loc.svg";
import cal from "../../images/cal.svg";
import arr from "../../images/arr.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const Search = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="mt-16 flex flex-col gap-y-11">
      <p className="text-center heading">Where are you going?</p>
      <div className="search-box m-auto flex items-center px-12 gap-x-5">
        <div className="flex gap-x-4">
          <img src={loc} width={15.6} height={19.5} />
          <input
            placeholder="Dubai, United Arab Emirates"
            className="w-[650px]"
          />
        </div>
        <img src={cal}></img>
        <div className="flex gap-x-4">
          <div className="flex flex-col gap-y-1">
            <p className="c w-[100px]">Check-in</p>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <p className="c1 mr-50 -ml-20">to</p>
          <div className="flex flex-col gap-y-1 ml-8">
            <p className="c w-[100px]">Check-out</p>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>
        <div className="flex gap-x-2 -ml-5">
          <p className="c2">1 Room</p>
          <img src={arr} />
        </div>
        <div className="flex gap-x-2">
          <p className="c2">2 Adults</p>
          <img src={arr} />
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
        <div className="flex justify-between">
          <div
            className="flex w-[160px] h-[60px] pl-5 gap-x-4"
            style={{ backgroundColor: "white", borderRadius: 40 }}
          >
            <img src={cal} width={12} height={12}></img>
            <div className="flex flex-col gap-y-1 pt-2">
              <p className="c">Check-in</p>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="w-[90px]"
              />
            </div>
          </div>
          <div
            className="flex w-[160px] h-[60px] pl-5 gap-x-4"
            style={{ backgroundColor: "white", borderRadius: 40 }}
          >
            <img src={cal} width={12} height={12}></img>
            <div className="flex flex-col gap-y-1 pt-2">
              <p className="c">Check-out</p>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="w-[90px]"
              />
            </div>
          </div>
        </div>
        <div
          className="flex w-[335px] h-[60px] pl-5 gap-x-8 items-center"
          style={{ backgroundColor: "white", borderRadius: 40 }}
        >
          <p className="c2">1 Room</p>
          <img src={arr} />
          <p className="c2">2 Adults</p>
          <img src={arr} />
        </div>
      </div>
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
};

export default Search;
