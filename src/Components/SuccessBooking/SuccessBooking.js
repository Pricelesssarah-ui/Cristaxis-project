import React from "react";
import { motion } from "framer-motion";

import "./SuccessBooking.css";

import Tick from "../../assets/images/svgs/tick_icon.svg";

function SuccessBooking() {
  return (
    <motion.div
      name="successBooking"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div id="success" className="successContainer">
        <div className="container">
          <div className="successItem flex flex-col items-center justify-center">
            <img src={Tick} alt="tick" />
            <h1 className="text-4xl font-bold py-5">Successful</h1>
            <p className="text-center">
                Thank you for your booking request, <br /> we’ll get in touch with your <br /> confirmation..
            </p>
            <button type="submit" className="returnSubmit">
              Return to Home Page
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SuccessBooking;
