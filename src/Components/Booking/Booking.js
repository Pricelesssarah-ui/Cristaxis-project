import React from "react";
import { Link } from "react-router-dom";

import "./Booking.css";

import Blacktick from "../../assets/images/svgs/black_tick.svg";
import SendImg from "../../assets/images/svgs/send_icon.svg";
import MapIcon from "../../assets/images/svgs/map_icon.svg";
import CarImg from "../../assets/images/pngs/car_img.png";
import SuvImg from "../../assets/images/pngs/suv_img.png";

function Booking() {
  return (
    <div className="bookingContainer">
      <div className="container">
        <div className="bookingItems">
          <h1>Let’s help you get there</h1>

          <form
            action="https://getform.io/f/6f961cbd-c9f1-4586-a737-315a7bbc233e"
            method="POST"
            className="formcontainer flex flex-col">
    
            <>
              <label className="font-bold text-xl pb-4">Route Details</label>
              <p className="input-with-image">
                <input
                  type="text"
                  className="bookinginputField py-4 px-10"
                  placeholder="Pickup Location (including postcode)"
                  required
                />

                <img
                  src={SendImg}
                  width={20}
                  height={20}
                  className="sendImg"
                  alt="send"
                />  
              </p>

              <div className="input-with-image">
              <input
                type="text"
                className="bookinginputField py-4 px-10 my-3"
                placeholder="Destination (including postcode)"
                required
              />

              <img 
              src={MapIcon} 
              width={20} 
              height={20} 
              className="mapicon"
              alt="mapicon" />
              </div>
            </>

            <>
              <label className="font-bold text-xl pb-4 mt-10">
                Choose your car
              </label>
                <div className="carContainer flex flex-col justify-between">
                    <div className="chooseCar">
                    <input type="checkbox" />
                    <div className="flex items-end">
                        <div className="pr-3 pt-3">
                        <h2 className="text-sm text-left py-0">Car</h2>
                        <p>4 passengers max</p>
                        </div>
                        <img src={CarImg} width={130} height={130} alt="car" />
                    </div>
                    </div>

                    <div className="chooseCar chooseCar2">
                    <input type="checkbox" />
                    <div className="flex ">
                        <div className="pr-3 pt-9">
                        <h2 className="text-xs text-left py-0">MPV</h2>
                        <p>8 passengers max</p>
                        </div>
                        <img src={SuvImg} width={130} height={130} alt="suv" />
                    </div>
                    </div>
                </div>
            </>

            <>
              <label className="font-bold text-xl pb-4 mt-10">
                Let’s meet you
              </label>
              <input
                type="text"
                className="bookinginputField py-3 px-7"
                placeholder="First Name and Last Name"
                required
              />
              <input
                type="text"
                className="bookinginputField py-3 px-7 my-3"
                placeholder="Phone Number:"
                required
              />

              <input
                type="text"
                className="bookinginputField py-3 px-7"
                placeholder="Post Code:"
                required
              />

              <input
                type="email"
                className="bookinginputField py-3 px-7 my-3"
                placeholder="Email Address"
                required
              />
            </>

            <>
              <label className="font-bold text-xl pb-4 mt-10">
                Trip Schedule
              </label>
              <label className="text-xs">
                <input type="checkbox" /> Same-day booking? Call 01285 339 045{" "}
              </label>
              <label className="flex font-bold text-xs mt-2">
                {" "}
                <img
                  src={Blacktick}
                  width={15}
                  height={15}
                  className="mr-1"
                  alt="tick"
                />{" "}
                LATER{" "}
              </label>
              <div className="tripSchedule">
                <input
                  type="text"
                  className="bookinginputField tripInput py-3 px-3 my-3 w-[80%]"
                  placeholder="Year"
                  required
                />

                <input
                  type="text"
                  className="bookinginputField tripInput py-3 px-3 my-3 w-[80%]"
                  placeholder="Month"
                  required
                />

                <input
                  type="text"
                  className="bookinginputField tripInput py-3 px-3 my-3 w-[80%]"
                  placeholder="Day"
                  required
                />

                <input
                  type="text"
                  className="bookinginputField tripInput py-3 px-3 my-3 w-[80%]"
                  placeholder="Hour"
                  required
                />

                <input
                  type="text"
                  className="bookinginputField tripInput py-3 px-3 my-3 w-[80%]"
                  placeholder="Minutes"
                  required
                />
              </div>
            </>

            <>
              <label className="font-bold text-xl pb-4 mt-10">
                Travel Notes
              </label>
              <p className="text-xs">
                If there’s anything else you want us to know, please type below.
              </p>
              <textarea
                rows={6}
                className="bookinginputField p-2 my-4"
                placeholder="Type here"
              ></textarea>
              <p className="bookTerms flex">
                
                <img
                  src={Blacktick}
                  width={15}
                  height={15}
                  className="mr-1"
                  alt="tick"
                />
                By submitting a request, you agree to our
                <Link to="/Terms" className="px-1 font-bold underline">
                
                  Terms and Conditions
                </Link>
                and
                <Link to="/Cancellation" className="px-1 font-bold underline">
                  
                  Cancellation Policy
                </Link>
              </p>
            </>

            <button type="submit" className="bookingSubmit">
              <Link to="/SuccessBooking" className="contactText text-lg">
                Submit Request
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Booking;
