/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import bookings from "../../images/bookings.svg";
// import hotelcard from "../../images/hotelcard.svg";
import location from "../../images/location.svg";
import calender from "../../images/calender.svg";
import s1 from "../../images/s1.svg";
import s2 from "../../images/s2.svg";
import s3 from "../../images/s3.svg";
import s4 from "../../images/s4.svg";
import star from "../../images/Star.svg";
import starw from "../../images/starw.svg";
import rectangle from "../../images/card-rec.svg";
import wifi from "../../images/am-wifi.svg";
import parking from "../../images/am-parking.svg";
import bed from "../../images/am-bed.svg";
import iimg from "../../images/iimg.svg";
import j1 from "../../images/j1.svg";
import j2 from "../../images/j2.svg";
import j3 from "../../images/j3.svg";
import down from "../../images/down.svg";
import recinput from "../../images/recinput.svg";
import "./Sales.css";
import { Link } from "react-router-dom";
import star5 from "../../images/5star.svg";
const Sales = () => {
    return (
        <div className="app">
            <Navbar />
            <div className="sale m-auto mt-3">
                <Link to="/hpage">
                    <img src={bookings} className="pl-2" />
                </Link>
                <p className="text-center sell py-4 saleshead">
                    Sell your booking on the marketplace
                </p>
                <div className="flex mt-5 mb-20 saling">

                    <div className="part1 w-auto shadow-lg p-4 bg-white">
                        <p className="fontdesc text-2xl font-bold text-gray-900 hotelhead">Jumeriah Beach Hotel - <span className="text-gray-500">Club Room</span></p>
                        <div className="flex mt-6">

                            <img src={location} width={10} height={12} />
                            <label className="text-sm font-normal text-gray-600 pl-2 pr-4 textsm">
                                Dubai
                            </label>

                            <img src={calender} width={10} height={12} />
                            <label className="text-sm font-normal text-gray-600 pl-2 pr-4 textsm">
                                12 May - 14 May
                            </label>
                            <label className="text-sm font-normal text-gray-600 pl-2 pr-4 textsm">
                                Token ID : <span className="underline textsm textcolorid">xxxxxxxxxx</span>
                            </label>

                        </div>
                        <div className="flex dispnone">
                            <div>
                                <img className="mt-6" src={s1} width={745} height={278} />

                            </div>
                            <div>
                                <img src={s2} width={146} height={86} className="ml-3 mt-6" />
                                <img src={s3} width={146} height={86} className="ml-3 mt-3" />
                                <img src={s4} width={146} height={86} className="ml-3 mt-3" />
                            </div>

                        </div>
                        <div className="dispnone1">
                            <div>
                                <img className="mt-4" src={j1} width={929} height={440} />

                            </div>
                            <div className="grid grid-cols-2 divide-x">
                                <div>

                                    <img src={j2} width={200} height={100} className="pr-1 mt-2" />
                                </div>
                                <div>

                                    <img src={j3} width={200} height={100} className="pl-1 mt-2" />
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-4 content-center">

                            <img src={star5} width={68} height={12} />

                           
                            <p className="fontdesc text-sm font-normal text-gray-800 ml-4 fontsmin">156 Users Recieved</p>

                        </div>
                        <p className="fontdesc text-lg font-semibold text-gray-900 mt-4">Amenities</p>
                        <div className="flex flex-wrap gap-x-8 gap-y-4 grid-cols-4 justify-items-start mt-3">
                            <div className="flex gap-x-4 mb-8 iconsm">
                                <span>  <img src={rectangle} width={18} height={16} /></span>
                                <span className="text-sm">237 sq ft</span>

                            </div>
                            <div className="flex gap-x-4 ml-3 mb-4 iconsm">
                                <span>  <img src={wifi} width={18} height={16} /></span>
                                <span className="text-sm">Wifi</span>

                            </div>
                            <div className="flex gap-x-4 ml-3 mb-4 parking iconsm">
                                <span>  <img src={parking} width={18} height={16} /></span>
                                <span className="text-sm">Free-Parking</span>

                            </div>
                            <div className="flex gap-x-4 ml-3 mb-4 iconsm">
                                <span>  <img src={bed} width={18} height={16} /></span>
                                <span className="text-sm">King Bed</span>

                            </div>
                            <div className="flex gap-x-4 ml-64 text-cyan-600 font-medium mb-4 dispnone">
                                <span className="text-sm">View Details</span>

                            </div>
                            <p className="fontdesc text-xs font-medium text-cyan-600 dispnone1">View Details</p>


                        </div>
                    </div>
                    <div className="w-auto shadow-lg pt-4 pb-4 ml-4 part1 bg-white borderlin">
                        <p className="fontdesc text-2xl font-bold text-gray-800 ml-2 pl-4 pr-4 textsell">Selling Cost</p>
                        <div className="border-b-2 border-gray-300 pb-6">
                            <table className="table-auto">

                                <tbody>
                                    <tr>
                                        <td className="w-full">
                                            <p className="fontdesc text-lg font-medium text-gray-800 ml-2 pl-4 pr-4 pt-8 textsell">Original Price</p>
                                            <p className="fontdesc text-xs font-normal text-gray-800 ml-2 pl-4 pr-4">2 months before</p>
                                        </td>
                                        <td>
                                            <p className="fontdesc text-4xl font-medium text-gray-800 ml-2 pt-8 pr-4 textinsm">$155</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex">

                            <p className="fontdesc text-lg font-semibold text-gray-900 ml-2 pt-4 pl-4 pr-2">Your Profit</p>
                            <img src={iimg} width={14} height={14} className="pt-4" />
                        </div>
                        <table className="table-auto">

                            <tbody>
                                <tr>
                                    <td className="w-64 tdwidth">

                                        <p className="fontdesc text-sm font-normal text-gray-900 ml-2 pt-4 pl-4 pr-2">Set Margin</p>
                                    </td>
                                    <td>
                                        <div className="flex">
                                            <p className="fontdesc text-sm font-medium text-gray-900 ml-2 pt-4 pr-2 usd1">USD</p>
                                            <img src={down} width={8} height={4} className="pt-2" />
                                            <img src={recinput} width={97} height={35} className="pt-2 ml-4" />

                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className=" border-b-2 border-gray-300 pb-6">
                            <table className="table-auto">

                                <tbody>
                                    <tr>
                                        <td className="w-full">
                                            <p className="fontdesc place-self-start text-sm font-normal text-gray-900 ml-2 pt-4 pl-4 pr-2">fees 2%</p>
                                        </td>
                                        <td>

                                            <p className="fontdesc place-self-end text-sm font-normal text-gray-900 ml-2 pt-4 pr-4">$1.43</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <table className="table-auto">

                            <tbody>
                                <tr>
                                    <td className="w-full">
                                        <p className="fontdesc text-lg font-semibold text-gray-900 pt-4 pl-4 pr-2">Your Selling Price</p>

                                    </td>
                                    <td>
                                        <p className="fontdesc text-4xl font-medium text-gray-900 pt-4 pl-16 pr-2 textinsm">$212.34</p>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="p-4">
                            <Link to="/checkin">

                                <button className="mt-4 w-full overflow-hidden hover:bg-gray-100 hover:border-1 hover:text-gray-900 text-white font-bold py-2 px-4 rounded-full  buttonClr" height={60}>
                                    <p className="fontdesc text-lg font-medium p-2 textsell1">List For Sale</p>

                                </button>
                            </Link>
                            <p className="fontdesc text-sm font-medium text-gray-900 pt-4 ml-4 mr-4 text-center pr-2">You will be asked to confirm the
                                transaction in your wallet </p>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Sales;
