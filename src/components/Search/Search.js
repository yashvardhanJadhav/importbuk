/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Search.css";
import hi from "../../images/hi.svg";
import hi1 from "../../images/hi1.svg";
import loc from "../../images/loc.svg";

const Search = () => {
  return (
    <div className="mt-16 flex flex-col gap-y-11">
      <p className="text-center heading">Where are you going?</p>
      <div className="search-box m-auto flex items-center px-12">
        <img src={loc} width={15.6} height={19.5} />
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
