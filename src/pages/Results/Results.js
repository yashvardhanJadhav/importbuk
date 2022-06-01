/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Bar from "../../components/Bar/Bar";
import "./Results.css";
import toggle from "../../images/toggle.svg";
import Card from "../../components/Card/Card";
import c1 from "../../images/c1.svg";
import c2 from "../../images/c2.svg";
import c3 from "../../images/c3.svg";
import c4 from "../../images/c4.svg";
import Filter from "../../components/Filter/Filter";

const Results = () => {
  return (
    <div className="app">
      <Navbar />
      <Bar />
      <img src={toggle} className="m-auto mt-8" />
      <div className="flex items-center mt-2">
        <div className="lefts w-[374px] flex justify-center">
          <Filter />
        </div>
        <div className="rights flex-col">
          <Card
            image={c1}
            name={"Jumeirah Beach Hotel"}
            price={312}
            roomsLeft={2}
            ratings={4.1}
            address={"Zuich Hotel, Switzerland"}
            isCancel={true}
            isWifi={true}
            isFp={true}
            isWf={true}
            reviews={156}
            total={624}
          />
          <Card
            image={c2}
            name={"Sofitel Dubai the Obelisk"}
            price={200}
            roomsLeft={1}
            ratings={4.9}
            address={"Zuich Hotel, Dubai"}
            isCancel={false}
            isWifi={true}
            isFp={true}
            isWf={false}
            reviews={42}
            total={400}
          />
          <Card
            image={c3}
            name={"Elite Beach Hotel"}
            price={312}
            roomsLeft={8}
            ratings={3.0}
            address={"Zuich Hotel, Switzerland"}
            isCancel={false}
            isWifi={true}
            isFp={true}
            isWf={true}
            reviews={156}
            total={624}
          />
          <Card
            image={c4}
            name={"Jumeirah Beach Hotel"}
            price={312}
            roomsLeft={1}
            ratings={4.1}
            address={"Zuich Hotel, Switzerland"}
            isCancel={true}
            isWifi={false}
            isFp={true}
            isWf={true}
            reviews={156}
            total={624}
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-4 mb-10">
        <p className="loading">Loading more...</p>
      </div>
      <Footer />
    </div>
  );
};

export default Results;
