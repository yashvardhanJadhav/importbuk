import React from "react";
import "./Filter.css";
import StarRatingComponent from "react-star-rating-component";
import star5 from "../../images/5star.svg";
import star4 from "../../images/4star.svg";
import star3 from "../../images/3star.svg";
import star2 from "../../images/2star.svg";

const Filter = () => {
    return (

        <div className="w-[295px] h-[1150px] fil flex flex-col filter">

            <div className="flex flex-col p-5">
                <p className="fh">Sources</p>
                <div class="form-check mb-3 mt-3">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                            <span className="fsh">Hotel</span>
                        </div>
                        <div class="form-check mb-3">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                            <span className="fsh">Marketplace</span>
                        </div>
                       
            </div>
            <div className="line"></div>
            <div className="flex flex-col p-5">
                <p className="fh">Type</p>
                <div class="form-check mb-3 mt-3">
                    <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                    <span className="fsh">Cancellation</span>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                    <span className="fsh">Special deals</span>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                    <span className="fsh">High appreciation</span>
                </div>

            </div>
            <div className="line"></div>
            <div className="flex flex-col p-5 gap-y-3">
                <p className="fh">Price</p>
                <div>
                    {/* <input
                        type="range"
                        min={0}
                        max={5000}
                        className="w-[255px] mx-auto"
                    /> */}
                    <input
                        type="range"
                        className="form-range appearance-none w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
                        id="customRange1"
                    />
                </div>
                <div className="line mt-8"></div>
                <div className="flex flex-col gap-y-3">
                    <p className="fh">Guest Rating</p>
                    <div className="flex items-center gap-x-2">
                        <div class="flex form-check items-center">
                            <input type="radio" className="radiocolor mr-2" name="flexRadioDefault" id="flexRadioDefault10" />
                            <img src={star5} width={68} height={12} />
                            <span className="fsh ml-2">Excellent</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <div class="flex form-check items-center">
                            <input type="radio" className="radiocolor mr-2" name="flexRadioDefault" id="flexRadioDefault10" />

                            <img src={star5} width={68} height={12} />
                            <span className="fsh ml-2">Superb</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <div class="flex form-check items-center">
                            <input type="radio" className="radiocolor mr-2" name="flexRadioDefault" id="flexRadioDefault10" />

                            <img src={star5} width={68} height={12} />
                            <span className="fsh ml-2">Good</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <div class="flex form-check items-center">
                            <input type="radio" className="radiocolor mr-2" name="flexRadioDefault" id="flexRadioDefault10" />

                            <img src={star5} width={68} height={12} />
                            <span className="fsh ml-2">Ok</span>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="flex flex-col">
                    <p className="fh">Property types</p>
                    <div class="form-check mb-3 mt-3">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                        <span className="fsh">5 Star Hotels</span>
                    </div>
                    <div class="form-check mb-3">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                        <span className="fsh">3 Star Hotels</span>
                    </div>
                    <div class="form-check mb-3">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                        <span className="fsh">Resorts</span>
                    </div>
                    <div class="form-check mb-3">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                        <span className="fsh">Guest Houses</span>
                    </div>
                </div>
                <div className="line"></div>
                <div className="flex flex-col gap-y-3">
                    <p className="fh">Amenties</p>
                    <div>
                        <div class="form-check mb-3">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                            <span className="fsh">Swimming pool</span>
                        </div>
                        <div class="form-check mb-3">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                            <span className="fsh">Play Area</span>
                        </div>
                        <div class="form-check mb-3">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                            <span className="fsh">Wifi</span>
                        </div>
                        <div class="form-check mb-3">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                            <span className="fsh">Breakfast included</span>
                        </div>
                        <div class="form-check mb-3">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                            <span className="fsh">Wallet friendly</span>
                        </div>
                        <div class="form-check mb-3">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                            <span className="fsh">Luxury</span>
                        </div>
                        <span className="text-xs ml-6 text-[#2F69FF]">See more</span>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;
