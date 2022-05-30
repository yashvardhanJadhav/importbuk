/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Search.css";
import hi from "../../images/hi.svg";
import hi1 from "../../images/hi1.svg";
import loc from "../../images/loc.svg";
import cal from "../../images/cal.svg";
import arr from "../../images/arr.svg";

const Search = () => {
  return (
    <div className="mt-16 flex flex-col gap-y-11">
      <p className="text-center heading">Where are you going?</p>
      <div className="search-box m-auto flex items-center px-12 gap-x-10">
        <div className="flex gap-x-4">
          <img src={loc} width={15.6} height={19.5} />
          <input
            placeholder="Dubai, United Arab Emirates"
            className="w-[650px]"
          />
        </div>
        <img src={cal} />
        <div className="flex">
          <div className="flex flex-col gap-y-1 w-[90px]">
            <p className="c">Check-in</p>
            <input
              type="text"
              placeholder="15 May 2022"
              onfocus="(this.type='date')"
            />
          </div>
          <p className="c1 ml-8">to</p>
          <div className="flex flex-col gap-y-1 ml-8 w-[90px]">
            <p className="c">Check-out</p>
            <input
              type="text"
              placeholder="20 May 2022"
              onfocus="(this.type='date')"
            />
          </div>
        </div>
        <div className="flex gap-x-2">
          <p className="c2 w-[50px]">1 Room</p>
          <img src={arr} />
        </div>
        <div className="flex gap-x-2">
          <p className="c2 w-[56px]">2 Adults</p>
          <img src={arr} />
        </div>
      </div>
      <button className="btn m-auto">Search Hotels</button>
      <div
        className="w-[1360px] h-[485px] m-auto mt-10"
        style={{ background: `url(${hi})` }}
      >
        <p className="save w-[400px] pt-16 pl-10">
          Save instantly with BUK Rewards
        </p>
      </div>
      <img src={hi1} width={"100%"} height={320} className="mt-4" />
    </div>
  );
};

export default Search;
