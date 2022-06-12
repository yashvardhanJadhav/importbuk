/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import "./Card.css";
import StarRatingComponent from "react-star-rating-component";
import loc from "../../images/loc.svg";
import harr from "../../images/harr.svg";
import cancel from "../../images/cancel.svg";
import wifi from "../../images/wifi.svg";
import fp from "../../images/fp.svg";
import wf from "../../images/wf.svg";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import start5 from "../../images/start5.svg";
import star5 from "../../images/5star.svg";
import wifi1 from "../../images/wifi1.svg";
import park1 from "../../images/park1.svg";
import wallet from "../../images/wallet.svg";
import mngsmlimg from "../../images/mngsmlimg.svg";



const Card = ({
    image,
    name,
    text,
    price,
    roomsLeft,
    ratings,
    address,
    isCancel,
    isWifi,
    isFp,
    isWf,
    reviews,
    total,
    star
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
        <div className="flex my-6 bg-white card">
            <img src={image} width={346} height={260}className="mngHtlDispNone1" />
            <img src={mngsmlimg} width={388} height={158} className="mngHtlDispNone"/>
            <div className="flex flex-col card1 pl-3 pt-5">
                <div className="flex">
                    <p className="hhead mr-4">{name || <Skeleton />}</p>
                    <img src={start5} width={117} height={21} />

                </div>
                <div className="flex items-center gap-x-2">
                    <img src={loc} />
                    <p className="hadd">{address || <Skeleton />}</p>
                    <p className="see">See Map</p>
                    <img className="seemap" src={harr} />
                </div>
                <div className="line mt-3 mb-1"></div>
                <div className="flex items-center mt-4">
                    {/* <StarRatingComponent
                        editing={false}
                        renderStarIcon={() => <span>★</span>}
                        starCount={5}
                        value={Math.round(ratings)}
                    /> */}
                    <img src={star5} width={68} height={12} />

                    <div className="justify-center items-center ml-2 text-xs text-gray-500">
                        {reviews} reviews
                    </div>

                </div>
                <p className="fontdesc text-xs font-normal mt-1">{text}</p>
              
                <div className="flex nonedisp1 mt-8">
                    <p className="fontdesc font-normal text-sm text-[#2F69FF]">View Details</p>
                    <p className="fontdesc font-normal text-sm text-[#2F69FF] ml-40">See Map</p>
                    <img className="seemap11" src={harr} />

                </div>
                <div className="line1 mt-3 mb-0"></div>
                <div className="makeflex">

                    {isCancel && (
                        <img src={cancel} width={117} height={21} className="mt-8" />
                    )}
                    <div className={`flex items-center gap-x-4 divmar ${!isCancel ? "mt-20" : "mt-8"}`}>
                        {isWifi && <div className="flex"><img src={wifi1} className="respimgt" /><p className="resptext text-sm font-normal fontdesc ml-2">Wifi</p></div>}
                        {isFp && <div className="flex"><img src={park1} className="respimgt" /><p className="resptext text-sm font-normal fontdesc ml-2">Free-Parking</p></div>}
                        {isWf && <div className="flex"><img src={wallet} className="respimgt" /><p className="resptext text-sm font-normal fontdesc ml-2">Wallet-Friendly</p></div>}
                    </div>
                </div>
                <div className="line1 mt-6 mb-0"></div>
            </div>
            <div className="card2 flex flex-col cardm">
                <div className="flex flex-col gap-y-1 yashmargin">
                    <p className="fontbasic text-xs text-gray-500 startingfrom">Starting from</p>
                    <p className="price11 cost1">${price || <Skeleton />}</p>
                    <p className="total1">Total ${total || <Skeleton />}</p>
                </div>
                <div className="flex flex-col gap-y-2 mt-16 items-center btngapalign">
                    <p className="rl">
                        Hurry up! only {roomsLeft || <Skeleton />} rooms left
                    </p>
                    <Link to="/hpage">
                        <button className="flex items-center gap-x-2 choosebtn justify-center">
                            Choose Room <img src={harr} className="filter-white" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
