import React from "react";
import loc from "../../images/loc.svg";
import cal from "../../images/cal.svg";
import arr from "../../images/arr.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchBar = ({startDate, setStartDate, endDate, setEndDate, search, setSearch}) => {
  return(
    <>
    <div className="search-box m-auto flex items-center px-12 gap-x-5">
        <div className="flex gap-x-4 w-full">
          <img src={loc} width={15.6} height={19.5} alt='destination' />
          <input
            placeholder="Dubai, United Arab Emirates"
            className="w-full"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />
        </div>
        <img src={cal} alt='calander' />
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
              selected={endDate}
              onChange={(date) => setEndDate(date)}
            />
          </div>
        </div>
        <div className="flex gap-x-2 -ml-5 cursor-pointer w-fit">
          <p className="c2 whitespace-nowrap">1 Room</p>
          <img src={arr} alt='arrow' />
        </div>
        <div className="flex gap-x-2 cursor-pointer w-fit">
          <p className="c2 whitespace-nowrap">2 Adults</p>
          <img src={arr} alt='arrow' />
        </div>
      </div>
      <div className="search-boxm flex flex-col gap-y-4">
        <div
          className="flex w-[335px] h-[60px] pl-5 gap-x-3"
          style={{ backgroundColor: "white", borderRadius: 40 }}
        >
          <img src={loc} width={12} height={15} alt='destination' />
          <input 
            placeholder="Dubai, United Arab Emirates"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <div
            className="flex w-[160px] h-[60px] pl-5 gap-x-4"
            style={{ backgroundColor: "white", borderRadius: 40 }}
          >
            <img src={cal} width={12} height={12} alt='calander' />
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
            <img src={cal} width={12} height={12} alt='calander' />
            <div className="flex flex-col gap-y-1 pt-2">
              <p className="c">Check-out</p>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                className="w-[90px]"
              />
            </div>
          </div>
        </div>
        <div
          className="flex w-[335px] h-[60px] pl-5 gap-x-8 items-center"
          style={{ backgroundColor: "white", borderRadius: 40 }}
        >
          <div className="flex gap-1">
            <p className="c2">1 Room</p>
            <img src={arr} alt='arrow' />
          </div>
          <div className="flex gap-1">
            <p className="c2">2 Adults</p>
            <img src={arr} alt='arrow' />
          </div>
        </div>
      </div>
    </>

  )
}

export default SearchBar