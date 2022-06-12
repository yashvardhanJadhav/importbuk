import "./ResultMap.css";
import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import Bar from "../../components/Bar/Bar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import togglemap from "../../images/togglemap.svg";
import rmap from "../../images/resultmap.svg";
import p1 from "../../images/p1.svg";
import p2 from "../../images/p2.svg";
import p3 from "../../images/p3.jpg";
import p4 from "../../images/p4.jpg";
import down from "../../images/down.svg";
import funnel from "../../images/funnel1.svg";
import CardMap from "../../components/CardMap/CardMap";


const ResultMap = () => {
    return (
        <div className="app">
            <Navbar />
            <Bar />
            <Link to="/results">
                <img src={togglemap} width={245} height={44}  className="m-auto mt-8" />
            </Link>
            <div className="flex justify-center items-center mt-2">
                <div className="cardwidth">

                    <div className="flex w-full items-center">
                        <p className="fontdesc text-sm font-medium text-black">315 Properties <span className="fontdesc text-gray-600">in Dubai</span></p>
                        <p className="fontdesc text-sm font-medium text-gray-800 ml-44">Sort By : Price </p>


                            <img src={down} className="ml-2" width={9} height={5} />
                        <img src={funnel} className="ml-2" width={14} height={14} />
                    </div>
                    <CardMap
                        image={p1}
                        name={"Taj Exotica Resort & Spa Goa"}
                        price={300}
                        ratings={4.1}
                        address={"Calwaddo Benaulim"}
                        isBalcony={true}
                        isWifi={true}
                        isPark={true}
                        isAC={true}
                        reviews={112}
                    />
                    <CardMap
                        image={p2}
                        name={"Taj Exotica Resort & Spa Goa"}
                        price={300}
                        ratings={4.1}
                        address={"Calwaddo Benaulim"}
                        isBalcony={true}
                        isWifi={true}
                        isPark={true}
                        isAC={true}
                        reviews={112}
                    />
                    <CardMap
                        image={p3}
                        name={"Taj Exotica Resort & Spa Goa"}
                        price={300}
                        ratings={4.1}
                        address={"Calwaddo Benaulim"}
                        isBalcony={true}
                        isWifi={true}
                        isPark={true}
                        isAC={true}
                        reviews={112}
                    />
                    <CardMap
                        image={p4}
                        name={"Taj Exotica Resort & Spa Goa"}
                        price={300}
                        ratings={4.1}
                        address={"Calwaddo Benaulim"}
                        isBalcony={true}
                        isWifi={true}
                        isPark={true}
                        isAC={true}
                        reviews={112}
                    />

                </div>

                <div className="w-auto ml-4">
                    <img src={rmap} width={880} height={990} className="" />

                </div>
            </div>
            <Footer />
        </div>
    )
}
export default ResultMap;
