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
};

export default Search;
