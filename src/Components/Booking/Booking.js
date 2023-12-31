import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Booking.css";
import { motion } from "framer-motion";
import SendImg from "../../assets/images/svgs/send_icon.svg";
import MapIcon from "../../assets/images/svgs/map_icon.svg";
import CarImg from "../../assets/images/pngs/car_img.png";
import SuvImg from "../../assets/images/pngs/suv_img.png";
import { bookATaxi } from "../../pages/api/book-a-taxi";
import Loader from "../../Loader";

function Booking() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("sameDayBooking");
  const [values, setValues] = useState({});
  const [selectedDate, setSelectedDate] = useState({
    year: "",
    month: "",
    day: "",
    hour: "",
    minute: "",
    meridian: "",
  });

  const handleVehicleTypeChange = (event) => {
    setValues({ ...values, vehicleType: event.target.value });
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    console.log(option);
  };

  const handleDateChange = (event) => {
    setSelectedDate({
      ...selectedDate,
      [event.target.name]: event.target.value,
    });
  };

  const handleTimeChange = (event) => {
    setSelectedDate({
      ...selectedDate,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (values) => {
    try {
      setIsLoading(true)
      const submittedValues = {
        pickup_location: values?.pickup_location,
        pickup_postcode: values?.pickup_postcode,
        destination: values?.destination,
        destination_postcode: values?.destination_postcode,
        vehicleType: values?.vehicleType,
        fullname: values?.fullname,
        phoneNumber: values?.phoneNumber,
        email: values?.email,
        sameDayBooking: selectedOption === "sameDayBooking" ? true : false,
        travelNotes: values?.travelNotes,
        t_c: true,
      };

      if (selectedOption === "later") {
        selectedDate.year = Number(selectedDate.year);
        selectedDate.month = String(selectedDate.month);
        selectedDate.day = String(selectedDate.day);
        selectedDate.hour = Number(selectedDate.hour);
        selectedDate.minute = String(selectedDate.minute);
        selectedDate.meridian = selectedDate.meridian || "AM";

        submittedValues.scheduledRide = selectedDate;
      }
      const response = await bookATaxi(submittedValues);
      setIsLoading(false)
      console.log(response);
      if (response.status === 200 || response.status === 201) {
        navigate("/SuccessBooking");
      } else {
        console.log("An error has occurred");
      }
    } catch (error) {
      setIsLoading(false)
      console.error("Book a taxi Error", error);
    }
  };

  return (
    <motion.div
      name="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bookingContainer">
        <div className="container">
          <div className="bookingItems">
            <h1>Let’s help you get there</h1>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(values);
            }}
            className="formcontainer flex flex-col"
          >
            <>
              <label className="font-bold text-xl pb-4">Route Details</label>
              <div className="input-with-image">
                <input
                  type="text"
                  name="pickup_location"
                  className="bookinginputField inputSpecial py-4 px-10 my-3"
                  placeholder="Pickup Location:"
                  required
                  onChange={(e) =>
                    setValues({ ...values, pickup_location: e.target.value })
                  }
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
                type="number"
                name="pickup_postcode"
                className="bookinginputField inputSpecial py-4 px-10"
                placeholder="Pickup Post Code:"
                required
                onChange={(e) =>
                  setValues({ ...values, pickup_postcode: e.target.value })
                }
              />

              <div className="input-with-image">
                <input
                  type="text"
                  name="destination"
                  className="bookinginputField inputSpecial py-4 px-10 my-3"
                  placeholder="Destination:"
                  required
                  onChange={(e) =>
                    setValues({ ...values, destination: e.target.value })
                  }
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
                type="number"
                name="destination_postcode"
                className="bookinginputField inputSpecial py-4 px-10"
                placeholder="Destination Post Code:"
                required
                onChange={(e) =>
                  setValues({ ...values, destination_postcode: e.target.value })
                }
              />
            </>

            <>
              <label className="font-bold text-xl pb-4 mt-10">
                Choose your car
              </label>
              <div className="carContainer flex flex-col justify-between">
                <div className="chooseCar">
                  <input
                    type="radio"
                    name="vehicleType"
                    value="car"
                    onChange={handleVehicleTypeChange}
                  />
                  <div className="flex items-end">
                    <div className="pt-3">
                      <label>
                        <h2 className="text-sm text-left py-0">car</h2>
                        <p>4 passengers max</p>
                      </label>
                    </div>
                    <img src={CarImg} width={130} height={130} alt="car" />
                  </div>
                </div>

                <div className="chooseCar chooseCar2">
                  <input
                    type="radio"
                    name="vehicleType"
                    value="MPV"
                    onChange={handleVehicleTypeChange}
                  />
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
                name="fullname"
                className="bookinginputField py-3 px-7"
                placeholder="First Name and Last Name:"
                required
                onChange={(e) =>
                  setValues({ ...values, fullname: e.target.value })
                }
              />

              <input
                type="number"
                name="phoneNumber"
                className="bookinginputField py-3 px-7 my-5"
                placeholder="Phone Number:"
                required
                onChange={(e) =>
                  setValues({ ...values, phoneNumber: e.target.value })
                }
              />

              <input
                type="email"
                name="email"
                className="bookinginputField py-3 px-7"
                placeholder="Email Address:"
                required
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </>

            <>
              <label className="font-bold text-xl pb-4 mt-10">
                Trip Schedule
              </label>
              <div className="radio-group">
                <label className="text-xs">
                  <input
                    type="radio"
                    name="sameDayBooking"
                    value="SameDayBooking"
                    checked={selectedOption === "sameDayBooking"}
                    onChange={() => handleOptionChange("sameDayBooking")}
                  />
                  Same-day booking? Call 01285 339 045
                </label>

                <label className="flex font-bold text-xs mt-2">
                  <input
                    type="radio"
                    name="sameDayBooking"
                    value="Later"
                    className="mr-1"
                    checked={selectedOption === "later"}
                    onChange={() => handleOptionChange("later")}
                  />
                  LATER
                </label>
              </div>

              {selectedOption === "later" && (
                <div className="tripSchedule">
                  <input
                    type="text"
                    name="year"
                    className="bookinginputField tripInput py-3 font-bold px-3 my-3 w-[80%]"
                    placeholder="Year"
                    onChange={handleDateChange}
                  />

                  <select
                    name="month"
                    onChange={handleDateChange}
                    className="bookinginputField tripInput py-3 px-3 my-3 mx-0 w-[80%]"
                  >
                    <option value="">Month</option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>

                  <select
                    name="day"
                    onChange={handleDateChange}
                    className="bookinginputField tripInput py-3 my-3 mx-0 w-[80%]"
                  >
                   <option value="">Day</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>

                  <select
                    name="hour"
                    onChange={handleTimeChange}
                    className="bookinginputField tripInput py-3 my-3 mx-0 w-[80%]"
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
                    name="minute"
                    onChange={handleTimeChange}
                    className="bookinginputField tripInput py-3 my-3 mx-0 w-[80%]"
                  >
                    <option value="">Minute</option>
                    <option value="00">00</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    <option value="32">32</option>
                    <option value="33">33</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                    <option value="46">46</option>
                    <option value="47">47</option>
                    <option value="48">48</option>
                    <option value="49">49</option>
                    <option value="50">50</option>
                    <option value="51">51</option>
                    <option value="52">52</option>
                    <option value="53">53</option>
                    <option value="54">54</option>
                    <option value="55">55</option>
                    <option value="56">56</option>
                    <option value="57">57</option>
                    <option value="58">58</option>
                    <option value="59">59</option>
                  </select>

                  <select
                    name="meridian"
                    onChange={handleTimeChange}
                    className="bookinginputField tripInput py-3 my-3 mx-0 w-[60%]"
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              )}
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
                name="travelNotes"
                className="bookinginputField p-2 my-4"
                placeholder="Type here"
                onChange={(e) =>
                  setValues({ ...values, travelNotes: e.target.value })
                }
              ></textarea>
              <>
                <p className="bookTerms flex">
                  <input
                    type="checkbox"
                    name="termsAndConditions"
                    className="mr-2"
                    onChange={(e) =>
                      setValues({
                        ...values,
                        termsAndConditions: e.target.value,
                      })
                    }
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
              Submit Request {isLoading && <Loader />}
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
export default Booking;
