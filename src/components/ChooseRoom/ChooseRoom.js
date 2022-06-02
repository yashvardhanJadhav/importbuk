/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import clubroom from "../../images/clubroom.svg";
import twinroom from "../../images/twinroom.svg";
import suiteroom from "../../images/suiteroom.svg";
import "./ChooseRoom.css";
import { Link } from "react-router-dom";

const ChooseRoom = () => {
  return (
    <div className="mt-7 mb-14">
      <div>
        <p className="ch">Choose your Room</p>
      </div>
      <div className="flex gap-x-1 mt-5">
        <Link to="/sales">
          <img src={clubroom} widdth={440} height={691} />
        </Link>
        <Link to="/sales">
          <img src={twinroom} widdth={440} height={691} />
        </Link>
        <Link to="/sales">
          <img src={suiteroom} widdth={440} height={691} />
        </Link>
      </div>
    </div>
  );
};

export default ChooseRoom;
