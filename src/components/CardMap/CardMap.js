/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import "./CardMap.css";
import StarRatingComponent from "react-star-rating-component";
import loc from "../../images/loc.svg";
import arrowm from "../../images/arrowm.svg";
import star5 from "../../images/5star.svg";


import { Link } from "react-router-dom";

const CardMap = ({
    image,
    name,
    price,
    ratings,
    address,
    isBalcony,
    isWifi,
    isPark,
    isAC,
    reviews
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
        <div className="flex my-5 bg-white shadow-lg cardl">
            <div className="m-4">
                <img src={image} width={114} height={183} className="rounded-lg imgcss" />

            </div>
            <div className="mt-4 w-full">
                <p className="fontdesc text-lg font-medium text-gray-900">{name}</p>
                <div className="flex">
                    <img src={loc} width={10} height={12} />
                    <p className="fontdesc text-sm font-normal text-gray-900 ml-2">{address}</p>
                </div>
                <div className="flex">
                    <p className="fontdesc text-sm font-bold text-gray-600 mt-4"> {isWifi ? 'Wifi' : null}</p>
                    <p className="fontdesc text-sm font-bold text-gray-600 mt-4"> {isPark ? ', Parking' : null}</p>
                    <p className="fontdesc text-sm font-bold text-gray-600 mt-4"> {isAC ? ', Air Conditioning' : null}</p>
                    <p className="fontdesc text-sm font-bold text-gray-600 mt-4"> {isBalcony ? ', Balcony' : null}</p>
                </div>
                <div className="flex mt-4 items-center mb-4">
                    <img src={star5} width={68} height={12} />
                    <div>
                        <p className="fontdesc text-sm font-bold text-gray-600 mt-1 ml-2">{reviews} Reviews</p>
                    </div>
                    <div>
                        <p className="fontdesc text-xl font-bold text-black mt-1 marginha ml-8">${price}/DAY</p>
                    </div>
                </div>

                <div class="flex mt-2">
                    <div class="flex w-1/2 p-1 pl-6">
                        <span className="fontdesc text-sm font-bold text-gray-600 mt-2 ml-3">View Details</span>

                    </div>
                    <div class="flex w-1/2 bg-gray-900 p-4 chooseroom">
                        <span className="text-sm font-medium text-white ml-2">Choose Room</span>
                        <img src={arrowm} width={13} height={5} className="ml-2" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardMap;
