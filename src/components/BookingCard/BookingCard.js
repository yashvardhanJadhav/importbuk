/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import "./BookingCard.css";
import StarRatingComponent from "react-star-rating-component";
import loc from "../../images/loc.svg";
import harr from "../../images/harr.svg";
import cancel from "../../images/cancel.svg";
import wifi from "../../images/wifi.svg";
import fp from "../../images/fp.svg";
import wf from "../../images/wf.svg";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import loc2 from "../../images/loc2.svg";
import seaview from "../../images/seaview.svg";
import cal from "../../images/cal.svg";
import options from "../../images/options.svg";
import rightar from "../../images/rightar.svg";
import edit from "../../images/edit.svg";
import wifi1 from "../../images/wifi1.svg";
import park1 from "../../images/park1.svg";
import wallet from "../../images/wallet.svg";
import mngsmlimg from "../../images/mngsmlimg.svg";
const BookingCard = ({
    image,
    name,
    price,
    roomsLeft,
    ratings,
    address,
    isCancel,
    isSeaView,
    isWifi,
    isFp,
    isWf,
    reviews,
    total,
    checkIn,
    checkOut,
    type
}) => {
    const [ratt, setRatt] = useState("Good");
    const handleRatt = (ratings) => {
        let x = Math.round(ratings);
        if (x > 1 && x <= 2) {
            setRatt("Ok");
        } else if (x > 2 && x <= 3) {
            setRatt("Good");
        } else if (x > 3 && x <= 4) {
            setRatt("Superb");
        } else if (x > 4 && x <= 5) {
            setRatt("Excellent");
        }
    };
    useEffect(() => {
        handleRatt(ratings);
    }, [ratings]);

    return (
        <div className="flex my-6 bg-white card ">
            <img src={image} width={346} height={260} className="mngHtlDispNone1" />
            <img src={mngsmlimg} width={388} height={158} className="mngHtlDispNone"/>
            <div className="flex flex-col card11 pl-3 pt-5">
                <p className="hhead">{name || <Skeleton />}</p>
                <div className="flex items-center gap-x-2">
                    <img src={loc2} width={10} height={12} />
                    <p className="hadd">{address || <Skeleton />}</p>
                    <p className="see">See Map</p>
                    <img className="seeimg" src={harr} />
                </div>
                <div className="line mt-3 mb-1"></div>
                <div className="flex items-center mt-3">
                    {isSeaView ? (<div className="flex items-center">
                        <img src={seaview} width={15} height={18} />
                        <p className="fontdesc text-sm font-medium text-[#A179F5] ml-1">Sea View</p>
                        <p className="fontdesc text-sm font-medium text-[#2F69FF] ml-4">View Details</p></div>
                    ) : null}
                </div>
                <div className="flex items-center mt-5">
                    <img src={cal} width={10} height={10} />
                    <p className="fontdesc text-sm font-medium text-[#A179F5] ml-1">{checkIn}{" - "}{checkOut}</p>

                </div>
                <div className="spline line mt-3 mb-0"></div>

                <div className="makeflex">
                    {isCancel && (
                        <img src={cancel} width={117} height={21} className="mt-5" />
                    )}
                    <div className="flex items-center mt-7 gap-x-4 divmar">
                        {isWifi && <div className="flex"><img src={wifi1} className="respimgt" /><p className="resptext text-sm font-normal fontdesc ml-2">Wifi</p></div>}
                        {isFp && <div className="flex"><img src={park1} className="respimgt" /><p className="resptext text-sm font-normal fontdesc ml-2">Free-Parking</p></div>}
                        {isWf && <div className="flex"><img src={wallet} className="respimgt" /><p className="resptext text-sm font-normal fontdesc ml-2">Wallet-Friendly</p></div>}
                    </div>
                </div>
            </div>
            <div className="spline line mt-4 mb-1"></div>

            <div className="card2 flex flex-col cardm pr-1 flexcontrol">
                <img src={options} width={4} height={19} className="dotsal" />
                <div className="flex flex-col gap-y-1">
                    <p className="fontdesc price12 cost">${price || <Skeleton />}</p>
                    <p className="total12 text-sm font-normal fontdesc">Purchased Price</p>
                </div>
                <div className="ml-3 mr-3 flex flex-col gap-y-2 mt-1 items-center w-full btnalign">

                    {(() => {
                        switch (type) {
                            case 1: return (<>
                                <div className="btnchngflex">
                                    <button className="btnchngflex1 mt-4 w-full 
                                border-2 border-[#292931] overflow-hidden hover:bg-gray-100 hover:border-1 hover:text-gray-900 text-white font-bold py-2 px-4 rounded-full  bg-white" height={60}>
                                        <p className="txtchngflex1 fontdesc text-lg font-medium p-1 text-gray-900 textsell1">Check-in</p>


                                    </button>

                                    <button className="btnchngflex1 items-center flex mt-1 w-full overflow-hidden hover:bg-gray-100 hover:border-1 hover:text-gray-900 text-white font-bold py-2 px-4 rounded-full mb-4 bg-[#2f69ff]" height={60}>
                                        <p className="txtchngflex1 txtalign1 fontdesc text-lg font-medium p-1 textsell11 ml-12 mt-1 ">List For Sale</p> <img src={rightar} width={20} height={1} className="ml-2" />

                                    </button>
                                </div>
                            </>
                            );
                            case 2: return ( <div className="btnchngflex">
                                <button className=" items-center flex mt-1 w-full overflow-hidden hover:bg-gray-100 hover:border-1 hover:text-gray-900 text-white font-bold py-2 px-4 rounded-full mb-4 bg-[#2f69ff]" height={60}>
                                    <p className="fontdesc text-lg font-medium p-1 textsell1 checkintext ml-2 mt-1">Check in at the hotel</p> <img src={rightar} width={20} height={1} className="ml-2" />

                                </button></div>);
                            case 3: return ( <div className="btnchngflex">
                                <button className="mt-4 mb-4 w-full 
                                border-2 border-[#292931] overflow-hidden hover:bg-gray-800 hover:border-1 hover:text-gray-900 text-white font-bold py-2 px-8 rounded-full  bg-[#292931]" height={60}>
                                    <div className="flex">

                                        <img src={edit} width={18} height={18} className="ml-10 mr-2" />

                                        <p className="fontdesc text-lg font-medium p-1 text-white textsell1">Edit Listing</p>
                                    </div>


                                </button></div>);
                            default: return;
                        }
                    })()}

                </div>
            </div>
        </div>
    );
};

export default BookingCard;
