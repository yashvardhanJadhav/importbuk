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

const Card = ({
  image,
  name,
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
      <img src={image} width={346} height={260} />
      <div className="flex flex-col card1 pl-3 pt-5">
        <p className="hhead">{name || <Skeleton />}</p>
        <div className="flex items-center gap-x-2">
          <img src={loc} />
          <p className="hadd">{address || <Skeleton />}</p>
          <p className="see">See Map</p>
          <img src={harr} />
        </div>
        <div className="line mt-3 mb-1"></div>
        <div className="flex items-center">
          <StarRatingComponent
            editing={false}
            renderStarIcon={() => <span>★</span>}
            starCount={5}
            value={Math.round(ratings)}
          />
          <div className="rat flex justify-center items-center ml-2">
            {ratings}
          </div>
          <div className="rat-text ml-2">{ratt || <Skeleton />}</div>
        </div>
        <p className="ut">{reviews} Users Reviewed</p>
        {isCancel && (
          <img src={cancel} width={117} height={21} className="mt-4" />
        )}
        <div className="flex items-center gap-x-4 mt-7">
          {isWifi && <img src={wifi} width={46} height={18} />}
          {isFp && <img src={fp} width={117} height={21} />}
          {isWf && <img src={wf} width={117} height={21} />}
        </div>
      </div>
      <div className="card2 flex flex-col cardm">
        <div className="flex flex-col gap-y-1">
          <p className="price cost">${price || <Skeleton />}</p>
          <p className="total total">Total ${total || <Skeleton />}</p>
        </div>
        <div className="flex flex-col gap-y-2 mt-16 items-center">
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
