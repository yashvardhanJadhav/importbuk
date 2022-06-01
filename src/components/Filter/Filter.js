import React from "react";
import "./Filter.css";
import StarRatingComponent from "react-star-rating-component";

const Filter = () => {
  return (
    <div className="w-[295px] h-[1150px] fil flex flex-col">
      <div className="flex flex-col p-5 gap-y-3">
        <p className="fh">Sources</p>
        <div>
          <input type="radio" /> <span className="fsh">Hotel</span>
        </div>
        <div>
          <input type="radio" /> <span className="fsh">Marketplace</span>
        </div>
      </div>
      <div className="line"></div>
      <div className="flex flex-col p-5 gap-y-3">
        <p className="fh">Type</p>
        <div>
          <input type="radio" /> <span className="fsh">Cancellation</span>
        </div>
        <div>
          <input type="radio" /> <span className="fsh">Special deals</span>
        </div>
        <div>
          <input type="radio" /> <span className="fsh">High appreciation</span>
        </div>
      </div>
      <div className="line"></div>
      <div className="flex flex-col p-5 gap-y-3">
        <p className="fh">Price</p>
        <div>
          <input
            type="range"
            min={0}
            max={5000}
            className="w-[255px] mx-auto"
          />
        </div>
        <div className="line mt-8"></div>
        <div className="flex flex-col p-5 gap-y-3">
          <p className="fh">Guest Rating</p>
          <div className="flex items-center gap-x-2">
            <StarRatingComponent
              editing={false}
              renderStarIcon={() => <span>★</span>}
              starCount={5}
              value={5}
            />
            <span className="fsh">Excellent</span>
          </div>
          <div className="flex items-center gap-x-2">
            <StarRatingComponent
              editing={false}
              renderStarIcon={() => <span>★</span>}
              starCount={5}
              value={4}
            />{" "}
            <span className="fsh">Superb</span>
          </div>
          <div className="flex items-center gap-x-2">
            <StarRatingComponent
              editing={false}
              renderStarIcon={() => <span>★</span>}
              starCount={5}
              value={3}
            />
            <span className="fsh">Good</span>
          </div>
          <div className="flex items-center gap-x-2">
            <StarRatingComponent
              editing={false}
              renderStarIcon={() => <span>★</span>}
              starCount={5}
              value={2}
            />
            <span className="fsh">Ok</span>
          </div>
        </div>
        <div className="line"></div>
        <div className="flex flex-col p-5 gap-y-3">
          <p className="fh">Property types</p>
          <div>
            <input type="radio" /> <span className="fsh">5 Star Hotels</span>
          </div>
          <div>
            <input type="radio" /> <span className="fsh">3 Star Hotels</span>
          </div>
          <div>
            <input type="radio" /> <span className="fsh">Resorts</span>
          </div>
          <div>
            <input type="radio" /> <span className="fsh">Guest Houses</span>
          </div>
        </div>
        <div className="line"></div>
        <div className="flex flex-col p-5 gap-y-3">
          <p className="fh">Amenties</p>
          <div>
            <input type="radio" /> <span className="fsh">Swimming Pool</span>
          </div>
          <div>
            <input type="radio" /> <span className="fsh">Play Area</span>
          </div>
          <div>
            <input type="radio" /> <span className="fsh">Wifi</span>
          </div>
          <div>
            <input type="radio" />{" "}
            <span className="fsh">Breakfast included</span>
          </div>
          <div>
            <input type="radio" /> <span className="fsh">Wallet friendly</span>
          </div>
          <div>
            <input type="radio" /> <span className="fsh">Luxury</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
