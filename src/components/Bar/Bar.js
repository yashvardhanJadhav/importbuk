/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import loc from "../../images/loc.svg";
import cal from "../../images/cal.svg";
import arr from "../../images/arr.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Bar.css";

const Bar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="flex gap-x-0 mt-6">
      <div className="search-box1 m-auto flex items-center px-12 gap-x-5">
        <div className="flex gap-x-4">
          <img src={loc} width={15.6} height={19.5} />
          <input
            placeholder="Dubai, United Arab Emirates"
            className="w-[500px]"
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
      <button className="sbtn">Search</button>
    </div>
  );
};

export default Bar;
