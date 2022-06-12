/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import bookings from "../../images/bookings.svg";
// import card from "../../images/card.svg";
import s12 from "../../images/s12.svg";
import s2 from "../../images/s2.svg";
import s3 from "../../images/s3.svg";
import s4 from "../../images/s4.svg";
import star from "../../images/Star.svg";
import starw from "../../images/starw.svg";
import rectangle from "../../images/card-rec.svg";
import wifi from "../../images/am-wifi.svg";
import parking from "../../images/am-parking.svg";
import bed from "../../images/am-bed.svg";
// import iimg from "../../images/iimg.svg";
import j1 from "../../images/j1.svg";
import j2 from "../../images/j2.svg";
import j3 from "../../images/j3.svg";
import breakfast from "../../images/breakfast.svg";
import bar from "../../images/bar.svg";
import dryclean from "../../images/dryclean.svg";
import takephoto from "../../images/takephoto.svg";
import scan from "../../images/scan.svg";
import location from "../../images/location.svg";
import star5 from "../../images/5star.svg";
import calender from "../../images/calender.svg";
import export1 from "../../images/export.svg";
import "./Checkin.css";
import { Link } from "react-router-dom";

const Checkin = () => {
    return (
        <div className="app">
            <Navbar />
            <div className="checkin m-auto mt-3">
                <Link to="/sales">

                    <img src={bookings} />
                </Link>
                <div className="my-4 flex flex-col gap-y-3 rowchng">
                    <p className="text-center sell">Online Check-in</p>
                    <p className="text-center hotel yashchng">
                        Your hotel requires you provide guest details up 48 hours before
                        your stay:
                    </p>
                </div>
                <div className="flex mt-6 mb-20 justify-between checkm">
                    <div className="part1 w-auto shadow-lg p-4 bg-white">
                        <p className="fontdesc text-2xl font-bold text-gray-900 hotelhead">Jumeriah Beach Hotel - <span className="text-gray-600">Club Room</span></p>
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
                                Token ID : <span className="text-cyan-600 underline textsm">xxxxxxxxxx</span>
                            </label>

                        </div>
                        <div className="flex dispnone">
                            <div>
                                <img className="mt-6" src={s12} width={745} height={278} />

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
                            <div className="flex gap-x-4 mb-4 iconsm">
                                <span>  <img src={rectangle} width={18} height={16} /></span>
                                <span className="text-sm">237 sq ft</span>

                            </div>
                            <div className="flex gap-x-4 ml-3 mb-4 iconsm">
                                <span>  <img src={wifi} width={18} height={16} /></span>
                                <span className="text-sm">Wifi</span>

                            </div>
                            <div className="flex gap-x-4 ml-3 mb-4 parking iconsm dispnone">
                                <span>  <img src={parking} width={18} height={16} /></span>
                                <span className="text-sm">Free-Parking</span>

                            </div>
                            <div className="flex gap-x-4 ml-3 mb-4 iconsm dispnone">
                                <span>  <img src={bed} width={18} height={16} /></span>
                                <span className="text-sm">King Bed</span>

                            </div>


                        </div>
                        <p className="fontdesc text-sm font-medium text-cyan-600 mb-4 dispn">View Details</p>
                        <hr />
                        <p className="fontdesc text-lg font-semibold text-gray-800 dispnone mt-4">Additional Options</p>
                        <div className="flex flex-wrap gap-x-8 gap-y-4 grid-cols-4 justify-items-start mt-3 dispnone">
                            <div className="flex gap-x-2 iconsm">
                                <span>  <img src={breakfast} width={18} height={16} /></span>
                                <span className="text-sm">Breakfast</span>

                            </div>
                            <div className="flex gap-x-4 ml-3 iconsm">
                                <span>  <img src={dryclean} width={18} height={16} /></span>
                                <span className="text-sm">Dry Clean</span>

                            </div>
                            <div className="flex gap-x-4 ml-3 parking iconsm">
                                <span>  <img src={bar} width={18} height={16} /></span>
                                <span className="text-sm">Bar</span>

                            </div>




                        </div>
                        <p className="fontdesc text-xs font-medium text-cyan-600 mt-4 dispn1">View Details</p>

                    </div>
                    <div className="lgshow form flex flex-col borderlin">
                        <p className="pers pl-5 pt-5">Personal Data</p>
                        <p className="pl-5 specify mt-2">
                            Specify exactly as in your passport
                        </p>
                        <div className="mt-10 flex flex-col items-center gap-y-5">
                            <input className="inp pl-5" placeholder="First Name" />
                            <input className="inp pl-5" placeholder="Last Name" />
                        </div>
                        <img src={export1} width={343} height={104} className="pl-5 mt-4" />
                        <div className="flex items-start mx-auto mt-8 gap-x-5">
                            <input type="checkbox" className="check" />
                            <p className="text-xs font-medium w-[314px] text-[#646465] fontdesc">
                                I understand that check-in information cannot be modified once
                                sent to the hotel. Booking cancellations or any modifications
                                will have to be carried out directly with the hotel and might
                                incur additional fees
                            </p>
                        </div>
                        <p className="ht w-[348px] mx-auto mt-8">
                            Completing the online check-in will make your booking
                            non-transferrable (and it will remove it from the marketplace in
                            case it was currently for sale)
                        </p>
                        <button className="btn btnwidth w-full mx-auto mt-8">Finalize check-in</button>
                    </div>
                    <button className="btn w-full smshow mx-auto p-4 mb-4 mt-4">Finalize check-in</button>

                    <p className="smshow title-font text-xs font-normal mb-3 text-gray-400 ml-2 mr-2 mt-6">Completing the online check-in will make your booking non-transferrable (and it will remove it from the  marketplace in case it was currently for sale)</p>
                    <div className="smshow form p-4 mt-6">
                        <div className="flex items-start ml-2 mx-auto gap-x-5">
                            <input type="checkbox" className="check" />
                            <p className="formtext font-sm w-[314px] text-[#646465] fontdesc">
                                I understand that check-in information cannot be modified once
                                sent to the hotel. Booking cancellations or any modifications
                                will have to be carried out directly with the hotel and might
                                incur additional fees
                            </p>
                        </div>

                    </div>

                    <div className="smshow form p-4 mt-6">
                        <p className="title-font text-xs font-normal mb-3 text-gray-400">Optional: provide a photo of your ID and face to gain $BUK and get a super fast check-in experience at the hotel</p>
                        <div className="flex">
                            <div>
                                <img className="mt-4" src={takephoto} width={349} height={104} />


                            </div>
                        </div>
                    </div>
                    <div className="smshow form flex flex-col p-4">
                        <p className="pl-2 pers">Personal Data</p>
                        <p className="pl-2 specify mt-2">
                            Specify exactly as in your passport
                        </p>
                        <div className="mt-6 flex flex-col items-center gap-y-5">
                            <input className="inp pl-5" placeholder="First Name" />
                            <input className="inp pl-5" placeholder="Last Name" />
                        </div>

                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Checkin;
