import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import "./ManageBooking.css";
import c1 from "../../images/c1.svg";
import BookingCard from '../../components/BookingCard/BookingCard';


function ManageBooking() {
    return (
        <div className="app">
            <Navbar />

            <div className="m-auto tabbar">
                <p className="text-center heading1 text-4xl font-bold mt-8 fontdesc">My Bookings</p>
                <ul class="tabnav nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 items ml-28 mt-16" id="tabs-tab"
                    role="tablist">
                    <li class="nav-item" role="presentation">
                        <a href="#tabs-home" class="fontdesc nav-link block font-normal text-lg leading-tight border-x-0 border-t-0 border-b-2 border-transparent py-2 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active mx-8" id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"
                            aria-selected="true">All Upcomings</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#tabs-profile" class="fontdesc nav-link block font-normal text-lg leading-tight border-x-0 border-t-0 border-b-2 border-transparent py-2 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent mx-8 text-[#292931]" id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
                            aria-controls="tabs-profile" aria-selected="false">Listed For Sale</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#tabs-messages" class="fontdesc nav-link block font-normal text-lg leading-tight border-x-0 border-t-0 border-b-2 border-transparent py-2 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent mx-8 text-[#292931]" id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab"
                            aria-controls="tabs-messages" aria-selected="false">Self Check-in</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#tabs-messages" class="fontdesc nav-link block font-normal text-lg leading-tight border-x-0 border-t-0 border-b-2 border-transparent py-2 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent mx-8 text-[#292931]" id="tabs-sold-tab" data-bs-toggle="pill" data-bs-target="#tabs-sold" role="tab"
                            aria-controls="tabs-sold" aria-selected="false">Sold</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#tabs-messages" class="fontdesc nav-link block font-normal text-lg leading-tight border-x-0 border-t-0 border-b-2 border-transparent py-2 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent mx-8 text-[#292931]" id="tabs-cancelled-tab" data-bs-toggle="pill" data-bs-target="#tabs-cancelled" role="tab"
                            aria-controls="tabs-cancelled" aria-selected="false">Cancelled</a>
                    </li>
                </ul>
                <div class="tab-content" id="tabs-tabContent">
                    <div class="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
                        <BookingCard
                            image={c1}
                            name={"Jumeirah Beach Hotel"}
                            price={312}
                            roomsLeft={2}
                            ratings={4.1}
                            address={"Zuich Hotel, Switzerland"}
                            isCancel={true}
                            text={"#1 Best Value of 435 places to stay in Thekkady"}
                            isWifi={true}
                            isFp={true}
                            isWf={true}
                            isSeaView={true}
                            reviews={156}
                            checkOut={"15 May"}
                            checkIn={"15 May"}
                            total={624}
                            type={1}
                        />
                        <BookingCard
                            image={c1}
                            name={"Jumeirah Beach Hotel"}
                            price={312}
                            roomsLeft={2}
                            ratings={4.1}
                            address={"Zuich Hotel, Switzerland"}
                            isCancel={true}
                            text={"#1 Best Value of 435 places to stay in Thekkady"}
                            isWifi={true}
                            isFp={true}
                            isWf={true}
                            isSeaView={true}
                            reviews={156}
                            checkOut={"15 May"}
                            checkIn={"15 May"}
                            total={624}
                            type={2}
                        />
                        <BookingCard
                            image={c1}
                            name={"Jumeirah Beach Hotel"}
                            price={312}
                            roomsLeft={2}
                            ratings={4.1}
                            address={"Zuich Hotel, Switzerland"}
                            isCancel={true}
                            text={"#1 Best Value of 435 places to stay in Thekkady"}
                            isWifi={true}
                            isFp={true}
                            isWf={true}
                            isSeaView={true}
                            reviews={156}
                            checkOut={"15 May"}
                            checkIn={"15 May"}
                            total={624}
                            type={3}
                        />
                    </div>
                    <div class="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
                        <BookingCard
                            image={c1}
                            name={"Jumeirah Beach Hotel"}
                            price={312}
                            roomsLeft={2}
                            ratings={4.1}
                            address={"Zuich Hotel, Switzerland"}
                            isCancel={true}
                            text={"#1 Best Value of 435 places to stay in Thekkady"}
                            isWifi={true}
                            isFp={true}
                            isWf={true}
                            isSeaView={true}
                            reviews={156}
                            checkOut={"15 May"}
                            checkIn={"15 May"}
                            total={624}
                            type={1}
                        />
                        <BookingCard
                            image={c1}
                            name={"Jumeirah Beach Hotel"}
                            price={312}
                            roomsLeft={2}
                            ratings={4.1}
                            address={"Zuich Hotel, Switzerland"}
                            isCancel={true}
                            text={"#1 Best Value of 435 places to stay in Thekkady"}
                            isWifi={true}
                            isFp={true}
                            isWf={true}
                            isSeaView={true}
                            reviews={156}
                            checkOut={"15 May"}
                            checkIn={"15 May"}
                            total={624}
                            type={1}
                        />
                        <BookingCard
                            image={c1}
                            name={"Jumeirah Beach Hotel"}
                            price={312}
                            roomsLeft={2}
                            ratings={4.1}
                            address={"Zuich Hotel, Switzerland"}
                            isCancel={true}
                            text={"#1 Best Value of 435 places to stay in Thekkady"}
                            isWifi={true}
                            isFp={true}
                            isWf={true}
                            isSeaView={true}
                            reviews={156}
                            checkOut={"15 May"}
                            checkIn={"15 May"}
                            total={624}
                            type={1}
                        />
                    </div>
                    <div class="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
                        <BookingCard
                            image={c1}
                            name={"Jumeirah Beach Hotel"}
                            price={312}
                            roomsLeft={2}
                            ratings={4.1}
                            address={"Zuich Hotel, Switzerland"}
                            isCancel={true}
                            text={"#1 Best Value of 435 places to stay in Thekkady"}
                            isWifi={true}
                            isFp={true}
                            isWf={true}
                            isSeaView={true}
                            reviews={156}
                            checkOut={"15 May"}
                            checkIn={"15 May"}
                            total={624}
                            type={2}
                        />
                        <BookingCard
                            image={c1}
                            name={"Jumeirah Beach Hotel"}
                            price={312}
                            roomsLeft={2}
                            ratings={4.1}
                            address={"Zuich Hotel, Switzerland"}
                            isCancel={true}
                            text={"#1 Best Value of 435 places to stay in Thekkady"}
                            isWifi={true}
                            isFp={true}
                            isWf={true}
                            isSeaView={true}
                            reviews={156}
                            checkOut={"15 May"}
                            checkIn={"15 May"}
                            total={624}
                            type={2}
                        />
                        <BookingCard
                            image={c1}
                            name={"Jumeirah Beach Hotel"}
                            price={312}
                            roomsLeft={2}
                            ratings={4.1}
                            address={"Zuich Hotel, Switzerland"}
                            isCancel={true}
                            text={"#1 Best Value of 435 places to stay in Thekkady"}
                            isWifi={true}
                            isFp={true}
                            isWf={true}
                            isSeaView={true}
                            reviews={156}
                            checkOut={"15 May"}
                            checkIn={"15 May"}
                            total={624}
                            type={2}
                        />
                    </div>
                    <div class="tab-pane fade" id="tabs-sold" role="tabpanel" aria-labelledby="tabs-sold-tab">
                        <BookingCard
                            image={c1}
                            name={"Jumeirah Beach Hotel"}
                            price={312}
                            roomsLeft={2}
                            ratings={4.1}
                            address={"Zuich Hotel, Switzerland"}
                            isCancel={true}
                            text={"#1 Best Value of 435 places to stay in Thekkady"}
                            isWifi={true}
                            isFp={true}
                            isWf={true}
                            isSeaView={true}
                            reviews={156}
                            checkOut={"15 May"}
                            checkIn={"15 May"}
                            total={624}
                            type={1}
                        />
                        <BookingCard
                            image={c1}
                            name={"Jumeirah Beach Hotel"}
                            price={312}
                            roomsLeft={2}
                            ratings={4.1}
                            address={"Zuich Hotel, Switzerland"}
                            isCancel={true}
                            text={"#1 Best Value of 435 places to stay in Thekkady"}
                            isWifi={true}
                            isFp={true}
                            isWf={true}
                            isSeaView={true}
                            reviews={156}
                            checkOut={"15 May"}
                            checkIn={"15 May"}
                            total={624}
                            type={2}
                        />
                        <BookingCard
                            image={c1}
                            name={"Jumeirah Beach Hotel"}
                            price={312}
                            roomsLeft={2}
                            ratings={4.1}
                            address={"Zuich Hotel, Switzerland"}
                            isCancel={true}
                            text={"#1 Best Value of 435 places to stay in Thekkady"}
                            isWifi={true}
                            isFp={true}
                            isWf={true}
                            isSeaView={true}
                            reviews={156}
                            checkOut={"15 May"}
                            checkIn={"15 May"}
                            total={624}
                            type={3}
                        /> 4 content
                    </div>
                    <div class="tab-pane fade" id="tabs-cancelled" role="tabpanel" aria-labelledby="tabs-cancelled-tab">
                        <BookingCard
                            image={c1}
                            name={"Jumeirah Beach Hotel"}
                            price={312}
                            roomsLeft={2}
                            ratings={4.1}
                            address={"Zuich Hotel, Switzerland"}
                            isCancel={true}
                            text={"#1 Best Value of 435 places to stay in Thekkady"}
                            isWifi={true}
                            isFp={true}
                            isWf={true}
                            isSeaView={true}
                            reviews={156}
                            checkOut={"15 May"}
                            checkIn={"15 May"}
                            total={624}
                            type={1}
                        />
                        <BookingCard
                            image={c1}
                            name={"Jumeirah Beach Hotel"}
                            price={312}
                            roomsLeft={2}
                            ratings={4.1}
                            address={"Zuich Hotel, Switzerland"}
                            isCancel={true}
                            text={"#1 Best Value of 435 places to stay in Thekkady"}
                            isWifi={true}
                            isFp={true}
                            isWf={true}
                            isSeaView={true}
                            reviews={156}
                            checkOut={"15 May"}
                            checkIn={"15 May"}
                            total={624}
                            type={2}
                        />
                        <BookingCard
                            image={c1}
                            name={"Jumeirah Beach Hotel"}
                            price={312}
                            roomsLeft={2}
                            ratings={4.1}
                            address={"Zuich Hotel, Switzerland"}
                            isCancel={true}
                            text={"#1 Best Value of 435 places to stay in Thekkady"}
                            isWifi={true}
                            isFp={true}
                            isWf={true}
                            isSeaView={true}
                            reviews={156}
                            checkOut={"15 May"}
                            checkIn={"15 May"}
                            total={624}
                            type={3}
                        /> 4 content
                    </div>
                </div>
                {/* <BookingCard    
                    image={c1}
                    name={"Jumeirah Beach Hotel"}
                    price={312}
                    roomsLeft={2}
                    ratings={4.1}
                    address={"Zuich Hotel, Switzerland"}
                    isCancel={true}
                    text={"#1 Best Value of 435 places to stay in Thekkady"}
                    isWifi={true}
                    isFp={true}
                    isWf={true}
                    isSeaView={true}
                    reviews={156}
                    checkOut={"15 May"}
                    checkIn={"15 May"}
                    total={624}
                    type={1}
                />
                <BookingCard
                    image={c1}
                    name={"Jumeirah Beach Hotel"}
                    price={312}
                    roomsLeft={2}
                    ratings={4.1}
                    address={"Zuich Hotel, Switzerland"}
                    isCancel={true}
                    text={"#1 Best Value of 435 places to stay in Thekkady"}
                    isWifi={true}
                    isFp={true}
                    isWf={true}
                    isSeaView={true}
                    reviews={156}
                    checkOut={"15 May"}
                    checkIn={"15 May"}
                    total={624}
                    type={2}
                />
                <BookingCard
                    image={c1}
                    name={"Jumeirah Beach Hotel"}
                    price={312}
                    roomsLeft={2}
                    ratings={4.1}
                    address={"Zuich Hotel, Switzerland"}
                    isCancel={true}
                    text={"#1 Best Value of 435 places to stay in Thekkady"}
                    isWifi={true}
                    isFp={true}
                    isWf={true}
                    isSeaView={true}
                    reviews={156}
                    checkOut={"15 May"}
                    checkIn={"15 May"}
                    total={624}
                    type={3}
                /> */}
            </div>

            <Footer />
        </div>
    )
}

export default ManageBooking