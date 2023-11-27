import React from "react";
import { Link } from "react-router-dom";

import "./Booking.css";

import SendImg from "../../assets/images/svgs/send_icon.svg";
import MapIcon from "../../assets/images/svgs/map_icon.svg";
import CarImg from "../../assets/images/pngs/car_img.png";
import SuvImg from "../../assets/images/pngs/suv_img.png";

function Booking() {
  const options = Array.from({ length: 31 }, (_, index) => index + 1);
  const minutes = Array.from({ length: 60 }, (_, index) => index);

  return (
    <div className="bookingContainer">
      <div className="container">
        <div className="bookingItems">
          <h1>Let’s help you get there</h1>

          <form
            action="https://getform.io/f/94348228-1663-4ad6-b3fc-dd856499b705"
            method="POST"
            className="formcontainer flex flex-col"
          >
            <>
              <label className="font-bold text-xl pb-4">Route Details</label>
              <div className="input-with-image">
                <input
                  type="text"
                  name="pickupLocation"
                  className="bookinginputField inputSpecial py-4 px-10 my-3"
                  placeholder="Pickup location:"
                  required
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
                name="pickupPostCode"
                className="bookinginputField inputSpecial py-4 px-10"
                placeholder="Pickup Post Code:"
                required
              />

              <div className="input-with-image">
                <input
                  type="text"
                  name="destination"
                  className="bookinginputField inputSpecial py-4 px-10 my-3"
                  placeholder="Destination:"
                  required
                />

                <img
                  src={MapIcon}
                  width={20}
                  height={20}
                  className="mapicon"
                  alt="mapicon"
                />
              </div>

              <input
                type="text"
                name="destinationPostCode"
                className="bookinginputField inputSpecial py-4 px-10"
                placeholder="Destination Post Code:"
                required
              />
            </>
            <>
              <label className="font-bold text-xl pb-4 mt-10">
                Choose your car
              </label>
              <div className="carContainer flex flex-col justify-between">
                <div className="chooseCar">
                  <input type="radio" name="vehicleType" value="Car" />
                  <div className="flex items-end">
                    <div className="pt-3">
                      <label>
                        <h2 className="text-sm text-left py-0">Car</h2>
                        <p>4 passengers max</p>
                      </label>
                    </div>
                    <img src={CarImg} width={130} height={130} alt="car" />
                  </div>
                </div>

                <div className="chooseCar chooseCar2">
                  <input type="radio" name="vehicleType" value="MPV" />
                  <div className="flex">
                    <div className="pt-9">
                      <label>
                        <h2 className="text-xs text-left py-0">MPV</h2>
                        <p>8 passengers max</p>
                      </label>
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
                name="name"
                className="bookinginputField py-3 px-7"
                placeholder="First Name and Last Name:"
                required
              />

              <input
                type="text"
                name="number"
                className="bookinginputField py-3 px-7 my-5"
                placeholder="Phone Number:"
                required
              />

              <input
                type="email"
                name="email"
                className="bookinginputField py-3 px-7"
                placeholder="Email Address:"
                required
              />
            </>
            <>
              <label className="font-bold text-xl pb-4 mt-10">
                Trip Schedule
              </label>
              <div>
                <label className="text-xs">
                  <input
                    type="radio"
                    name="bookingType"
                    value="SameDayBooking"
                  />
                  Same-day booking? Call 01285 339 045
                </label>
                <label className="flex font-bold text-xs mt-2">
                  <input
                    type="radio"
                    name="bookingType"
                    value="Later"
                    className="mr-1"
                  />
                  LATER
                </label>
              </div>

              <div className="tripSchedule">
                <input
                  type="text"
                  name="year"
                  className="bookinginputField tripInput py-3 font-bold px-3 my-3 w-[80%]"
                  placeholder="Year"
                  required
                />

                <select
                  name="month"
                  className="bookinginputField tripInput py-3 px-3 my-3 mx-0 w-[80%]"
                  required
                >
                  <option value="">Month</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>

                <select
                  name="day"
                  className="bookinginputField tripInput py-3 my-3 mx-0 w-[80%]"
                  required
                >
                  <option value="">Day</option>
                  {options.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>

                <select
                  name="hour"
                  className="bookinginputField tripInput py-3 my-3 mx-0 w-[80%]"
                  required
                >
                  <option value="">Hour</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>

                <select
                  name="minutes"
                  className="bookinginputField tripInput py-3 my-3 mx-0 w-[80%]"
                  required
                >
                  <option value="">Minutes</option>
                  {minutes.map((minute) => (
                    <option key={minute} value={minute}>
                      {minute < 10 ? `0${minute}` : minute}
                    </option>
                  ))}
                </select>

                <select
                  name="time"
                  className="bookinginputField tripInput py-3 my-3 mx-0 w-[60%]"
                  required
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
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
                name="travel notes"
                className="bookinginputField p-2 my-4"
                placeholder="Type here"
              ></textarea>
              <>
                <p className="bookTerms flex">
                  <input
                    type="checkbox"
                    name="Terms and Conditions"
                    className="mr-2"
                    required
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
            </>

            <button type="submit" className="bookingSubmit contactText text-lg">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Booking;
