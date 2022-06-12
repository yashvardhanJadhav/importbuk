/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import hotelimg from "../../images/hotelimg.png";
import cardrec from "../../images/card-rec.svg";
import wifi from "../../images/am-wifi.svg";
import sleep from "../../images/card-slp.svg";
import airconditioning from "../../images/am-air.svg";
import arrow from "../../images/arrow.svg";
import warrow from "../../images/whitearr.svg";
import "./ChooseRoom.css";
import { Link } from "react-router-dom";


const ChooseRoom = () => {
    return (
        <div className="mt-7 mb-14">
            <div>
                <p className="ch">Choose your Room</p>
            </div>
            <div className="flex gap-x-1 mt-5 room">
                <div className="container mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-2 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden bg-white">
                                <img className="object-cover object-center w-full" height={142} src={hotelimg} alt="blog" />
                                <div className="p-4 pb-0 borderColor">
                                    <p className="title-font text-2xl font-bold mb-3">The 400 Blows</p>
                                    <div className="flex items-center flex-wrap">
                                        <div className="flex">
                                            <div className="flex w-24">
                                                <div>
                                                    <div className="flex gap-2 pt-1">
                                                        <span>  <img src={cardrec} width={18} height={18} /></span>
                                                        <span className="text-sm">237 sq ft</span>
                                                    </div>
                                                    <div className="flex gap-2 pt-3">
                                                        <span>  <img src={sleep} width={18} height={18} /></span>
                                                        <span className="text-sm">237 sq ft</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex w-change">
                                                <div>
                                                    <div className="flex gap-2 pt-1">
                                                        <span>  <img src={airconditioning} width={18} height={18} /></span>
                                                        <span className="text-sm">Air Conditioning</span>
                                                    </div>
                                                    <div className="flex gap-2 pt-3">
                                                        <span>  <img src={wifi} width={18} height={18} /></span>
                                                        <span className="text-sm">Free Wifi</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-auto">
                                                <span className="text-4xl cost">$145</span>
                                            </div>
                                        </div>

                                    </div>
                                    <p className="pt-2 title-font text-sm font-medium mb-3 seeMore">see more</p>

                                </div>
                                <div className="p-4 pt-1 borderColor">
                                    <p className="pt-2 title-font not-italic text-lg font-medium">Addtional options</p>
                                    <div className="tablecon">

                                        <table className="table-auto">

                                            <tbody>
                                                <tr>
                                                    <td> <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label className="text-sm form-check-label inline-block text-gray-800" htmlFor="flexRadioDefault1">
                                                            Sea View
                                                        </label></td>
                                                    <td className="text-sm text-right">+58$</td>
                                                </tr>
                                                <tr>
                                                    <td> <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label className="text-sm form-check-label inline-block text-gray-800" htmlFor="flexRadioDefault1">
                                                            Half board
                                                        </label></td>
                                                    <td className="text-sm text-right">+58$</td>
                                                </tr>
                                                <tr>
                                                    <td> <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label className="text-sm form-check-label inline-block text-gray-800" htmlFor="flexRadioDefault1">
                                                            Full board
                                                        </label></td>
                                                    <td className="text-sm text-right">+68$</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                                <div className="p-4 pt-1">
                                    <Link to="/sales">

                                        <button className="mt-4 w-full overflow-hidden hover:bg-gray-100 text-white font-bold py-2 px-4 border-2 border-gray-900  rounded-full" height={60}>
                                            <table className="table-auto w-full ml-8">
                                                <tbody>
                                                    <tr>
                                                        <td className="text-left">
                                                            <p className="fontdesc text-2xl font-semibold  text-gray-900">Total $234</p>
                                                            <p className="fontdesc text-sm font-medium text-gray-900">1 day, 2 rooms</p>
                                                        </td>

                                                        <td className="text-right">
                                                            <div className="flex">
                                                                <p className="fontdesc text-gray-900">
                                                                    Buy Directly
                                                                </p>
                                                                <div>
                                                                    <img src={arrow} width={24} height={24} className="ml-2" />

                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </button>
                                    </Link>
                                    <Link to="/sales">
                                        <button className="mt-4 mb-4 w-full bg-blue-500 overflow-hidden hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" height={60}>
                                            <table className="table-auto w-full ml-8">
                                                <tbody>
                                                    <tr>
                                                        <td className="text-left">
                                                            <p className="fontdesc text-2xl font-semibold font">Total $234</p>
                                                            <p className="fontdesc text-sm font-medium">1 day, 2 rooms</p>
                                                        </td>

                                                        <td className="text-right">
                                                            <div className="flex">
                                                                <p className="fontdesc text-sm">
                                                                    Buy From Others
                                                                </p>
                                                                <div>
                                                                    <img src={warrow} width={24} height={24} className="ml-2 mt-1" />

                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <div className="p-2 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden bg-white">
                                <img className="object-cover object-center w-full" height={142} src={hotelimg} alt="blog" />
                                <div className="p-4 pb-0 borderColor">
                                    <p className="title-font text-2xl font-bold mb-3 blows">The 400 Blows</p>
                                    <div className="flex items-center flex-wrap">
                                        <div className="flex">
                                            <div className="flex w-24">
                                                <div>
                                                    <div className="flex gap-2 pt-1">
                                                        <span>  <img src={cardrec} width={18} height={18} /></span>
                                                        <span className="text-sm">237 sq ft</span>
                                                    </div>
                                                    <div className="flex gap-2 pt-3">
                                                        <span>  <img src={sleep} width={18} height={18} /></span>
                                                        <span className="text-sm">237 sq ft</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex w-change">
                                                <div>
                                                    <div className="flex gap-2 pt-1">
                                                        <span>  <img src={airconditioning} width={18} height={18} /></span>
                                                        <span className="text-sm">Air Conditioning</span>
                                                    </div>
                                                    <div className="flex gap-2 pt-3">
                                                        <span>  <img src={wifi} width={18} height={18} /></span>
                                                        <span className="text-sm">Free Wifi</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-auto">
                                                <span className="text-4xl cost">$145</span>
                                            </div>
                                        </div>

                                    </div>
                                    <p className="pt-2 title-font text-sm font-medium mb-3 seeMore">see more</p>

                                </div>
                                <div className="p-4 pt-1 borderColor">
                                    <p className="pt-2 title-font not-italic text-lg font-medium">Addtional options</p>
                                    <div className="tablecon">

                                        <table className="table-auto">

                                            <tbody>
                                                <tr>
                                                    <td> <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label className="text-sm form-check-label inline-block text-gray-800" htmlFor="flexRadioDefault1">
                                                            Sea View
                                                        </label></td>
                                                    <td className="text-sm text-right">+58$</td>
                                                </tr>
                                                <tr>
                                                    <td> <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label className="text-sm form-check-label inline-block text-gray-800" htmlFor="flexRadioDefault1">
                                                            Half board
                                                        </label></td>
                                                    <td className="text-sm text-right">+58$</td>
                                                </tr>
                                                <tr>
                                                    <td> <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label className="text-sm form-check-label inline-block text-gray-800" htmlFor="flexRadioDefault1">
                                                            Full board
                                                        </label></td>
                                                    <td className="text-sm text-right">+68$</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                                <div className="p-4 pt-1">
                                    <button className="mt-4 w-full overflow-hidden text-white font-bold py-2 px-4 border-2 border-gray-300  rounded-full" height={60} disabled>
                                        <table className="table-auto w-full ml-8">
                                            <tbody>
                                                <tr>
                                                    <td className="text-left">
                                                        <p className="fontdesc text-2xl font-semibold  text-gray-400">Total $234</p>
                                                        <p className="fontdesc text-sm font-medium text-gray-400">1 day, 2 rooms</p>
                                                    </td>

                                                    <td>

                                                        <p className="fontdesc text-sm font-medium text-gray-400">Direct Buy</p>
                                                        <p className="fontdesc text-xl font-semibold  text-gray-400">- Sold Out -</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </button>
                                    <Link to="/sales">
                                        <button className="mt-4 mb-4 w-full bg-blue-500 overflow-hidden hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" height={60}>
                                            <table className="table-auto w-full ml-8">
                                                <tbody>
                                                    <tr>
                                                        <td className="text-left">
                                                            <p className="fontdesc text-2xl font-semibold font">Total $234</p>
                                                            <p className="fontdesc text-sm font-medium">1 day, 2 rooms</p>
                                                        </td>

                                                        <td className="text-right">
                                                            <div className="flex">
                                                                <p className="fontdesc text-sm">
                                                                    Buy From Others
                                                                </p>
                                                                <div>
                                                                    <img src={warrow} width={24} height={24} className="ml-2 mt-1" />

                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <div className="p-2 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden bg-white">
                                <img className="object-cover object-center w-full" height={142} src={hotelimg} alt="blog" />
                                <div className="p-4 pb-0 borderColor">
                                    <p className="title-font text-2xl font-bold mb-3 blows">The 400 Blows</p>
                                    <div className="flex items-center flex-wrap">
                                        <div className="flex">
                                            <div className="flex w-24">
                                                <div>
                                                    <div className="flex gap-2 pt-1">
                                                        <span>  <img src={cardrec} width={18} height={18} /></span>
                                                        <span className="text-sm">237 sq ft</span>
                                                    </div>
                                                    <div className="flex gap-2 pt-3">
                                                        <span>  <img src={sleep} width={18} height={18} /></span>
                                                        <span className="text-sm">237 sq ft</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex w-change">
                                                <div>
                                                    <div className="flex gap-2 pt-1">
                                                        <span>  <img src={airconditioning} width={18} height={18} /></span>
                                                        <span className="text-sm">Air Conditioning</span>
                                                    </div>
                                                    <div className="flex gap-2 pt-3">
                                                        <span>  <img src={wifi} width={18} height={18} /></span>
                                                        <span className="text-sm">Free Wifi</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-auto">
                                                <span className="text-4xl cost">$145</span>
                                            </div>
                                        </div>

                                    </div>
                                    <p className="pt-2 title-font text-sm font-medium mb-3 seeMore">see more</p>

                                </div>
                                <div className="p-4 pt-1 borderColor">
                                    <p className="pt-2 title-font not-italic text-lg font-medium">Addtional options</p>
                                    <div className="tablecon">

                                        <table className="table-auto">

                                            <tbody>
                                                <tr>
                                                    <td> <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-white bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label className="text-sm form-check-label inline-block text-gray-800" htmlFor="flexRadioDefault1">
                                                            Sea View
                                                        </label></td>
                                                    <td className="text-sm text-right">+58$</td>
                                                </tr>
                                                <tr>
                                                    <td> <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label className="text-sm form-check-label inline-block text-gray-800" htmlFor="flexRadioDefault1">
                                                            Half board
                                                        </label></td>
                                                    <td className="text-sm text-right">+58$</td>
                                                </tr>
                                                <tr>
                                                    <td> <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label className="text-sm form-check-label inline-block text-gray-800" htmlFor="flexRadioDefault1">
                                                            Full board
                                                        </label></td>
                                                    <td className="text-sm text-right">+68$</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                                <div className="p-4 pt-1">
                                    <Link to="/sales">
                                        <button className="mt-4 w-full overflow-hidden hover:bg-gray-100 text-white font-bold py-2 px-4 border-2 border-gray-900  rounded-full" height={60}>
                                            <table className="table-auto w-full ml-8">
                                                <tbody>
                                                    <tr>
                                                        <td className="text-left">
                                                            <p className="fontdesc text-2xl font-semibold  text-gray-900">Total $234</p>
                                                            <p className="fontdesc text-sm font-medium text-gray-900">1 day, 2 rooms</p>
                                                        </td>

                                                        <td className="text-right">
                                                            <div className="flex">
                                                                <p className="fontdesc text-gray-900">
                                                                    Buy Directly
                                                                </p>
                                                                <div>
                                                                    <img src={arrow} width={24} height={24} className="ml-2" />

                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </button>
                                    </Link>
                                    <div className="p-8">
                                        <p className="text-lg font-medium text-center fontdesc opacity-40">No options available for marketplace</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div >
    );
};

export default ChooseRoom;
