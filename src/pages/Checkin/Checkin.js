/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import bookings from "../../images/bookings.svg";
import card from "../../images/card.svg";
import "./Checkin.css";

const Checkin = () => {
  return (
    <div>
      <Navbar />
      <div className="checkin m-auto mt-3">
        <img src={bookings} />
        <div className="my-4 flex flex-col gap-y-3">
          <p className="text-center sell">Online Check-in</p>
          <p className="text-center hotel">
            Your hotel requires you provide guest details up 48 hours before
            your stay:
          </p>
        </div>
        <div className="flex mt-6 mb-20 justify-between checkm">
          <img src={card} />
          <div className="form flex flex-col">
            <p className="pers pl-5 pt-5">Personal Data</p>
            <p className="pl-5 specify mt-2">
              Specify exactly as in your passport
            </p>
            <div className="mt-10 flex flex-col items-center gap-y-5">
              <input className="inp pl-5" placeholder="First Name" />
              <input className="inp pl-5" placeholder="Last Name" />
            </div>
            <div className="flex items-start mx-auto mt-8 gap-x-5">
              <input type="checkbox" className="check" />
              <p className="formtext w-[314px]">
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
            <button className="btn mx-auto mt-8">Finalize check-in</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkin;
