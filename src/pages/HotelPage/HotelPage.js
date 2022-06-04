/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Bar from "../../components/Bar/Bar";
import Footer from "../../components/Footer/Footer";
import indi from "../../images/indi.svg";
import back from "../../images/back.svg";
import map from "../../images/map.svg";
import view from "../../images/view.svg";
import amenties from "../../images/amenties.svg";
import ChooseRoom from "../../components/ChooseRoom/ChooseRoom";
import StarRatingComponent from "react-star-rating-component";
import "./HotelPage.css";
import { Link } from "react-router-dom";

const HotelPage = () => {
  return (
    <div>
      <Navbar />
      <Bar />
      <div className="m-auto hpage">
        <Link to="/results">
          <img src={back} className="back pl-2" />
        </Link>
        <img src={indi} width={1360} height={440} className="mt-10" />
        <div className="flex gap-x-10 hp">
          <div>
            <div className="flex gap-x-4 mt-5 items-center mb-4">
              <p className="hhead">Jumeirah Beach Hotel</p>
              <span>
                <StarRatingComponent
                  editing={false}
                  renderStarIcon={() => <span>★</span>}
                  starCount={5}
                  value={4}
                />
              </span>
              <span className="rat flex justify-center items-center ml-2">
                4.1
              </span>
              <span className="rat-text">Superb</span>
            </div>
            <p className="descr">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took...
            </p>
            <p className="loading mt-2">Read more</p>
            <div className="mt-4 -ml-2">
              <img src={amenties} className="ami" />
            </div>
          </div>
          <div className="flex flex-col mt-7 gap-y-2 mp">
            <img src={map} width={422} height={218} />
            <p>Benaulim Beach Road, South Goa, Benaulim, Goa, 403716,</p>
            <img src={view} width={111} height={18} />
          </div>
        </div>

        <ChooseRoom />
      </div>
      <Footer />
    </div>
  );
};

export default HotelPage;
