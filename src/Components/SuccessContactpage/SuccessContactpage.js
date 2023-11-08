import React from "react";
import { motion } from "framer-motion";

import "./SuccessContactpage.css";

import Tick from "../../assets/images/svgs/success_tick.svg";
import { Link } from "react-router-dom";

function SuccessContactpage() {
  return (
    <motion.div
      name="successContactpage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div id="success" className="successContainer">
        <div className="container">
          <div className="successItem flex flex-col items-center justify-center">
            <img src={Tick} alt="tick" />
            <h1 className="text-4xl font-bold py-5">Successful</h1>
            <p className="text-center text-xl py-2">
              Message received. <br /> Check your email later for a response.
            </p>
            <button type="submit" className="returnSubmit">
              <Link to="/">Return to Home Page</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SuccessContactpage;
