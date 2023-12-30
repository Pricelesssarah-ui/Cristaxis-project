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

function Booking({ isSubmitting }) {
  const navigate = useNavigate();
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
      isSubmitting = true;
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
        //termsAndConditions: values?.termsAndConditions,
      };

      if (selectedOption === "later") {
        selectedDate.year = Number(selectedDate.year);
        selectedDate.month = Number(selectedDate.month);
        selectedDate.day = Number(selectedDate.day);
        selectedDate.hour = Number(selectedDate.hour);
        selectedDate.minute = Number(selectedDate.minute);
        selectedDate.meridian = selectedDate.meridian || "AM";

        submittedValues.scheduledRide = selectedDate;
      }
      const response = await bookATaxi(submittedValues);
      isSubmitting = false;
      console.log(response);
      if (response.status === 200 || response.status === 201) {
        navigate("/SuccessBooking");
      } else {
        isSubmitting = false;
        console.log("An error has occurred");
      }
    } catch (error) {
      isSubmitting = false;
      console.error("Book a taxi Error", error);
    }
  };

  const options = Array.from({ length: 31 }, (_, index) => index + 1);
  const minutes = Array.from({ length: 60 }, (_, index) => index);

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
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
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
                    {options.map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
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
                    <option value="">Minutes</option>
                    {minutes.map((minute) => (
                      <option key={minute} value={minute}>
                        {minute < 10 ? `0${minute}` : minute}
                      </option>
                    ))}
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
              Submit Request {isSubmitting && <Loader />}
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
export default Booking;
