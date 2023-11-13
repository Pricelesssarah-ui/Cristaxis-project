import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";


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
           action="https://getform.io/f/6ac1cc47-138f-48b0-bd68-f2b5248e9880"
           method="POST"
            className="formcontainer flex flex-col"
          >
            <input
              type="text"
              name="name"
              className="inputField py-3 px-2"
              placeholder="Name:"
              required
            />
       
            <input
              type="text"
              name="phoneNumber"
              className="inputField py-3 px-2 my-3"
              placeholder="Phone Number:"
             required
            />
           
            <input
              type="email"
              name="email"
              className="inputField py-3 px-2"
              placeholder="Email Address:"
             required
            />
          
            <input
              type="text"
              name="companyName"
              className="inputField py-3 px-2 my-3"
              placeholder="Company Name:"
            />
 
            <textarea
              rows={8}
              name="textarea"
              className="inputField p-2"
              placeholder="Type Message Here"
            />
        
            <button type="submit" className="contactSubmit">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;