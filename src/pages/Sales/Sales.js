/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import bookings from "../../images/bookings.svg";
import hotelcard from "../../images/hotelcard.svg";
import listsale from "../../images/listsale.svg";
import "./Sales.css";
import { Link } from "react-router-dom";

const Sales = () => {
  return (
    <div>
      <Navbar />
      <div className="sale m-auto mt-3">
        <img src={bookings} className="pl-2" />
        <p className="text-center sell py-4">
          Sell your booking on the marketplace
        </p>
        <div className="flex mt-5 mb-20 saling">
          <Link to="/checkin">
            <img src={hotelcard} />
          </Link>
          <img src={listsale} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sales;
