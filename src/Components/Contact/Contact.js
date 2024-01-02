import React, { useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import { contactCompany } from "../../pages/api/contact-us";
import { useNavigate } from "react-router-dom";
import Loader from "../../Loader";

function Contact() {
  const navigate = useNavigate();
  const [values, setValues] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values) => {
    const submittedValues = {
      email: values?.email,
      name: values?.name,
      phoneNumber: values?.phoneNumber,
      message: values?.textarea,
    };
    try {
      setIsLoading(true);
      const response = await contactCompany(submittedValues);
      setIsLoading(false);
      if (response.status === 200 || response.status === 201) {
        navigate("/SuccessContactpage");
      } else {
        console.log("An error has occured");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Contact_us Error", error);
    }
  };

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
              <a href="mailto:info@cristaxi.com">info@cristaxi.com</a>
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(values);
            }}
            className="formcontainer flex flex-col"
          >
            <input
              type="text"
              name="name"
              className="inputField py-3 px-2"
              placeholder="Name:"
              required
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />

            <input
              type="text"
              name="phoneNumber"
              className="inputField py-3 px-2 my-3"
              placeholder="Phone Number:"
              required
              onChange={(e) =>
                setValues({ ...values, phoneNumber: e.target.value })
              }
            />

            <input
              type="email"
              name="email"
              className="inputField py-3 px-2"
              placeholder="Email Address:"
              required
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />

            <textarea
              rows={8}
              name="textarea"
              className="inputField p-2"
              placeholder="Type Message Here"
              required
              onChange={(e) =>
                setValues({ ...values, textarea: e.target.value })
              }
            />

            <button type="submit" className="contactSubmit ">
              SEND MESSAGE {isLoading && <Loader />}
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
