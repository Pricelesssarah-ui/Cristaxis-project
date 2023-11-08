import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <motion.div
      name="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="contactContainer">
        <div className="container">
          <div className="contactItems">
            <h1>Talk to Us</h1>
            <p>
              Complete the form below or email{" "}
              <a href="/">hello@cristaxi.com</a>
            </p>
          </div>

          <form
            action="https://getform.io/f/bc5e8392-e086-4a60-b40a-cc499b565542"
            method="POST"
            className="formcontainer flex flex-col"
          >
            <input
              type="text"
              className="inputField py-3 px-2"
              placeholder="Name:"
              required
            />
            <input
              type="text"
              className="inputField py-3 px-2 my-3"
              placeholder="Phone Number:"
              required
            />
            <input
              type="email"
              className="inputField py-3 px-2"
              placeholder="Email Address:"
              required
            />
            <input
              type="text"
              className="inputField py-3 px-2 my-3"
              placeholder="Company Name:"
              required
            />

            <textarea
              rows={8}
              className="inputField p-2 "
              placeholder="Type Message Here"
            ></textarea>


            <button type="submit" className="contactSubmit">
              <Link to='/SuccessContactpage'>
                SEND MESSAGE
              </Link>
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
