import React from "react";
import { Link } from "react-router-dom";

import "./Booking.css";

import Blacktick from "../../assets/images/svgs/black_tick.svg";
import SendImg from "../../assets/images/svgs/send_icon.svg";
import MapIcon from "../../assets/images/svgs/map_icon.svg";

function Booking() {
  return (
    <div className="bookingContainer">
      <div className="container">
        <div className="bookingItems">
          <h1>Let’s help you get there</h1>

          <form
            action="https://getform.io/f/6f961cbd-c9f1-4586-a737-315a7bbc233e"
            method="POST"
            className="formcontainer flex flex-col"
          >
            <>
              <label className="font-bold text-xl pb-4">Route Details</label>
              <div className="Input1 flex flex-col">
                <input
                  type="text"
                  className="bookinginputField py-4 px-10"
                  placeholder="Pickup Location (including postcode)"
                />

                <img
                  src={SendImg}
                  width={20}
                  height={20}
                  className="sendImg"
                  alt="send"
                />
              </div>
              <input
                type="text"
                className="bookinginputField py-4 px-10 my-3"
                placeholder="Destination (including postcode)"
              />

              <img src={MapIcon} width={20} height={20} alt="mapicon" />
            </>


           
                <label className="font-bold text-xl pb-4 mt-10">
                    Choose your car
                </label>
                <div>
                    <div>
                    
                    </div>

                    <div>

                    </div>
                </div>



            <label className="font-bold text-xl pb-4 mt-10">
              Let’s meet you
            </label>
            <input
              type="text"
              className="bookinginputField py-3 px-7"
              placeholder="First Name and Last Name"
            />
            <input
              type="text"
              className="bookinginputField py-3 px-7 my-3"
              placeholder="Phone Number:"
            />

            <input
              type="text"
              className="bookinginputField py-3 px-7"
              placeholder="Post Code:"
            />

            <input
              type="email"
              className="bookinginputField py-3 px-7 my-3"
              placeholder="Email Address"
            />

            <label className="font-bold text-xl pb-4 mt-10">
              Trip Schedule
            </label>
            <label>
              <input type="checkbox" /> Same-day booking? Call 01285 339 045{" "}
            </label>
            <label className="flex font-bold">
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
              className="bookinginputField  py-3 px-9 my-3 w-[80%]"
              placeholder="Year"
            />

            <input
              type="text"
              className="bookinginputField  py-3 px-9 my-3 w-[80%]"
              placeholder="Month"
            />

            <input
              type="text"
              className="bookinginputField  py-3 px-9 my-3 w-[80%]"
              placeholder="Day"
            />

            <input
              type="text"
              className="bookinginputField  py-3 px-9 my-3 w-[80%]"
              placeholder="Hour"
            />

            <input
              type="text"
              className="bookinginputField  py-3 px-9 my-3 w-[80%]"
              placeholder="Minutes"
            />
            </div>


            <label className="font-bold text-xl pb-4 mt-10">Travel Notes</label>
            <p>
              If there’s anything else you want us to know, please type below.
            </p>
            <textarea
              rows={6}
              className="bookinginputField p-2 my-4"
              placeholder="Type here"
            ></textarea>
            <p className="flex text-xs">
              {" "}
              <img
                src={Blacktick}
                width={15}
                height={15}
                className="mr-1"
                alt="tick"
              />{" "}
              By submitting a request, you agree to our
              <Link to="/Terms"> Terms and Conditions</Link> and
              <Link to="/Cancellation"> Cancellation Policy</Link>
            </p>

            <button type="submit" className="contactSubmit w-[40%]">
              <Link to="/SuccessContactpage">Submit Request</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Booking;
