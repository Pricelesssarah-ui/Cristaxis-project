import React from "react";
import { Link } from "react-router-dom";
import "./Booking.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import SendImg from "../../assets/images/svgs/send_icon.svg";
import MapIcon from "../../assets/images/svgs/map_icon.svg";
import CarImg from "../../assets/images/pngs/car_img.png";
import SuvImg from "../../assets/images/pngs/suv_img.png";

function Booking() {
  const options = Array.from({ length: 31 }, (_, index) => index + 1);
  const minutes = Array.from({ length: 60 }, (_, index) => index);

  const formik = useFormik({
    initialValues: {
      pickupLocation: "",
      pickupPostCode: "",
      destination: "",
      destinationPostCode: "",
      vehicleType: "",
      name: "",
      number: "",
      email: "",
      termsAndConditions: false,
    },
    validationSchema: Yup.object({
      pickupLocation: Yup.string().required("Pickup location is required"),
      pickupPostCode: Yup.string().required("Pickup Post Code is required"),
      destination: Yup.string().required("Destination is required"),
      destinationPostCode: Yup.string().required(
        "Destination Post Code is required"
      ),
      vehicleType: Yup.string().required("Please choose a vehicle type"),
      name: Yup.string().required("Name is required"),
      number: Yup.string().required("Phone Number is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      termsAndConditions: Yup.boolean().oneOf(
        [true],
        "You must accept the terms and conditions"
      ),
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <div className="bookingContainer">
      <div className="container">
        <div className="bookingItems">
          <h1>Let’s help you get there</h1>

          <form
            onSubmit={formik.handleSubmit}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.pickup}
                />
                {formik.touched.pickup && formik.errors.pickup && (
                  <div className="error">{formik.errors.pickup}</div>
                )}

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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.postCode}
              />
              {formik.touched.postCode && formik.errors.postCode && (
                <div className="error">{formik.errors.postCode}</div>
              )}

              <div className="input-with-image">
                <input
                  type="text"
                  name="destination"
                  className="bookinginputField inputSpecial py-4 px-10 my-3"
                  placeholder="Destination:"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.destination}
                />
                {formik.touched.destination && formik.errors.destination && (
                  <div className="error">{formik.errors.destination}</div>
                )}

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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.destinationPostCode}
              />
              {formik.touched.destinationPostCode &&
                formik.errors.destinationPostCode && (
                  <div className="error">
                    {formik.errors.destinationPostCode}
                  </div>
                )}
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="error">{formik.errors.name}</div>
              )}

              <input
                type="text"
                name="number"
                className="bookinginputField py-3 px-7 my-5"
                placeholder="Phone Number:"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.number}
              />
              {formik.touched.number && formik.errors.number && (
                <div className="error">{formik.errors.number}</div>
              )}

              <input
                type="email"
                name="email"
                className="bookinginputField py-3 px-7"
                placeholder="Email Address:"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="error">{formik.errors.email}</div>
              )}
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
