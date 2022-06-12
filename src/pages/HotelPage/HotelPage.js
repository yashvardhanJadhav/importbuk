/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Bar from "../../components/Bar/Bar";
import Footer from "../../components/Footer/Footer";
import indi from "../../images/indi.svg";
import back from "../../images/back.svg";
import map from "../../images/map.svg";
import view from "../../images/view.svg";
import pool from "../../images/am-pool.svg";
import star5 from "../../images/5star.svg";
import airConditioning from "../../images/am-air.svg";
import wifi from "../../images/am-wifi.svg";
import spa from "../../images/am-spa.svg";
import parking from "../../images/am-parking.svg";
import restaurant from "../../images/am-restaurant.svg";
import bed from "../../images/am-bed.svg";
import img1 from "../../images/img1.png";
import img3 from "../../images/img3.png";
import img2 from "../../images/img2.png";

import ChooseRoom from "../../components/ChooseRoom/ChooseRoom";
import StarRatingComponent from "react-star-rating-component";
import "./HotelPage.css";
import { Link } from "react-router-dom";
// import carouselimg from "../../images/carouse1.png";
import close from "../../images/closecar.svg";
const HotelPage = () => {
    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var moreText1 = document.getElementById("more1");
        var btnText = document.getElementById("myBtn");
        // var check = false;
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "See all";
            moreText.style.display = "";
            moreText1.style.display = "";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "See less";
            moreText.style.display = "inline-flex";
            moreText1.style.display = "inline-flex";
        }
    }
    return (
        <div className="app">
            <Navbar />
            <Bar />
            <div className="m-auto hpage">
                <Link to="/results">
                    <img src={back} className="back pl-2" />
                </Link>
                <div className="imgfull flex">
                    <div className="parent1">
                        <img className="mt-10" src={img1} width={929} height={440} />
                    </div>
                    <div>
                        <img src={img2} width={421} height={213} className="ml-3 mt-10" />
                        <img src={img3} width={421} height={216} className="ml-3 mt-3" data-bs-toggle="modal" data-bs-target="#exampleModalXl" />
                    </div>
                </div>
                <div className="imgmob">
                    <div>
                        <img className="mt-10" src={img1} width={929} height={440} />

                    </div>
                    <div className="grid grid-cols-2 divide-x">
                        <div>

                            <img src={img2} width={200} height={100} className="pr-1 mt-2" />
                        </div>
                        <div>

                            <img src={img3} width={200} height={100} className="pl-1 mt-2" data-bs-toggle="modal" data-bs-target="#exampleModalXl" />
                        </div>
                    </div>
                </div>
                <div>
                </div>

                {/*modal starts*/}
                <div className="modal bg-opacity-100 fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalXl" tabIndex="-1" aria-labelledby="exampleModalXlLabel" aria-modal="true" role="dialog">
                    <div className="modal-dialog modal-xl relative w-auto pointer-events-none">
                        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-clip-padding rounded-md outline-none text-current">
                            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4  rounded-t-md opacity-100">


                                <img className="closeBtn" src={close} width={18} height={16}
                                    data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body relative">
                                {/* carousel start */}
                                <div id="carouselExampleIndicators" className="carousel slide relative" data-bs-ride="carousel">
                                    <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                                        <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="0"
                                            className="active w-3 h-3 rounded-full"
                                            aria-current="true"
                                            aria-label="Slide 1"
                                        ></button>
                                        <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            className="w-3 h-3 rounded-full"
                                            data-bs-slide-to="1"
                                            aria-label="Slide 2"
                                        ></button>
                                        <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            className="w-3 h-3 rounded-full"
                                            data-bs-slide-to="2"
                                            aria-label="Slide 3"
                                        ></button>
                                    </div>
                                    <div className="carousel-inner relative w-full overflow-hidden">
                                        <div className="carousel-item active float-left w-full">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                                                className="block w-full"
                                                alt="Wild Landscape"
                                            />
                                        </div>
                                        <div className="carousel-item float-left w-full">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                                                className="block w-full"
                                                alt="Camera"
                                            />
                                        </div>
                                        <div className="carousel-item float-left w-full">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                                                className="block w-full"
                                                alt="Exotic Fruits"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide="prev"
                                    >
                                        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                            <span className="hidden">Previous</span>
                                        </span>
                                    </button>
                                    <button
                                        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide="next"
                                    >
                                        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                            <span className="hidden">Next</span>
                                        </span>
                                    </button>
                                </div>
                                {/* carousel end */}

                            </div>
                        </div>
                    </div>
                </div>
                {/*modal  end*/}

                <div className="flex gap-x-4 ml-50 hp mb-4">
                    <div>
                        <div className="flex gap-x-2 mt-5 items-center mb-4">
                            <p className="hhead">Jumeirah Beach Hotel</p>
                            <img src={star5} width={68} height={12} className="startpadding"/>

                           
                            <span className="rat-text">156 Users Reviewed</span>
                        </div>
                        <p className="descr">
                            is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since
                            the 1500s, when an unknown printer took...
                        </p>
                        <p className="loading mt-4 mb-4">Read more</p>
                        <hr />
                        <div className="shadow-lg mt-4 gap-x-16 p-4 hel bg-white">
                            <p className="amtText ml-5 pb-4">Amenties</p>
                            <div className="flex flex-wrap gap-x-8 gap-y-4 grid-cols-6 justify-items-start">
                                <div className="flex gap-x-4 ml-5 mb-8 amchng">
                                    <span>  <img src={pool} width={18} height={16} /></span>
                                    <span className="text-sm">Pool</span>

                                </div>
                                <div className="flex gap-x-4 ml-5 mb-8 amchng">
                                    <span>  <img src={airConditioning} width={18} height={16} /></span>
                                    <span className="text-sm">Air Conditioning</span>

                                </div>
                                <div className="flex gap-x-4 ml-5 mb-8 amchng">
                                    <span>  <img src={wifi} width={18} height={16} /></span>
                                    <span className="text-sm">Free Wifi</span>

                                </div>
                                <div className="flex gap-x-4 ml-5 mb-8 amchng">
                                    <span>  <img src={spa} width={18} height={16} /></span>
                                    <span className="text-sm">Spa</span>

                                </div>
                                <div className="flex gap-x-4 ml-5 mb-8 amchng">
                                    <span>  <img src={parking} width={18} height={16} /></span>
                                    <span className="text-sm">Parking</span>

                                </div>
                                <div className="flex gap-x-4 ml-5 mb-8 amchng">
                                    <span>  <img src={restaurant} width={18} height={16} /></span>
                                    <span className="text-sm">Restaurant</span>

                                </div>
                            </div>
                            <span id="dots"></span>
                            <div className="flex flex-wrap gap-x-8 gap-y-4 grid-cols-6 justify-items-start" id="more">
                                <div className="flex gap-x-4 ml-5 mb-8 amchng">
                                    <span>  <img src={parking} width={18} height={16} /></span>
                                    <span className="text-sm">Parking</span>

                                </div>
                                <div className="flex gap-x-4 ml-5 mb-8 amchng">
                                    <span>  <img src={airConditioning} width={18} height={16} /></span>
                                    <span className="text-sm">Air Conditioning</span>

                                </div>
                                <div className="flex gap-x-4 ml-5 mb-8 amchng">
                                    <span>  <img src={bed} width={18} height={16} /></span>
                                    <span className="text-sm">King Bed</span>

                                </div>
                                <div className="flex gap-x-4 ml-5 mb-8 amchng">
                                    <span>  <img src={spa} width={18} height={16} /></span>
                                    <span className="text-sm">Spa</span>

                                </div>
                                <div className="flex gap-x-4 ml-5 mb-8 amchng">
                                    <span>  <img src={parking} width={18} height={16} /></span>
                                    <span className="text-sm">Parking</span>

                                </div>
                                <div className="flex gap-x-4 ml-5 mb-8 amchng">
                                    <span>  <img src={restaurant} width={18} height={16} /></span>
                                    <span className="text-sm">Restaurant</span>

                                </div>
                            </div>
                            <div className="flex flex-wrap gap-x-8 gap-y-4 grid-cols-6 justify-items-start" id="more1">
                                <div className="flex gap-x-4 ml-5 mb-8 amchng">
                                    <span>  <img src={parking} width={18} height={16} /></span>
                                    <span className="text-sm">Parking</span>

                                </div>
                                <div className="flex gap-x-4 ml-5 mb-8 amchng">
                                    <span>  <img src={restaurant} width={18} height={16} /></span>
                                    <span className="text-sm">Restaurant</span>

                                </div>
                            </div>

                            <button onClick={() => myFunction()} id="myBtn" className="ml-5 block text-cyan-600">See all</button>
                        </div>
                    </div>
                    <div className="flex flex-col mt-7 gap-y-2 mp">

                        <img src={map} width={422} height={218} />
                        <p>Benaulim Beach Road, South Goa, Benaulim, Goa, 403716,</p>
                        <img src={view} width={111} height={18} />
                    </div>
                </div>
                <hr />
                <ChooseRoom />
            </div>
            <Footer />
        </div>
    );
};

export default HotelPage;
