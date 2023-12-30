import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
// import { NavLink } from "react-router-dom";
// import useSWR from "swr";
import { useFormik } from "formik";
import * as Yup from "yup";
import { contactCompany } from "../../pages/api/contact-us";
import { useNavigate } from "react-router-dom";
import Loader from "../../Loader";

function Contact({ isLoading }) {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const submittedValues = {
      email: values?.email,
      name: values?.name,
      phoneNumber: values?.phoneNumber,
      companyName: values?.companyName,
      message: values?.textarea,
    };
    try {
      isLoading = true;
      const response = await contactCompany(submittedValues);
      isLoading = false;
      if (response.status === 200 || response.status === 201) {
        navigate("/SuccessContactpage");
      } else {
        isLoading = false;
        console.log("An error has occured");
      }
    } catch (error) {
      isLoading = false;
      console.error("Contact_us Error", error);
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      email: "",
      companyName: "",
      textarea: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      phoneNumber: Yup.string().required("Phone Number is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      companyName: Yup.string(),
      textarea: Yup.string(),
    }),
    onSubmit,
  });

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
            onSubmit={formik.handleSubmit}
            className="formcontainer flex flex-col"
          >
            <input
              type="text"
              name="name"
              className="inputField py-3 px-2"
              placeholder="Name:"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="error">{formik.errors.name}</div>
            )}

            <input
              type="number"
              name="phoneNumber"
              className="inputField py-3 px-2 my-3"
              placeholder="Phone Number:"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <div className="error">{formik.errors.phoneNumber}</div>
            )}

            <input
              type="email"
              name="email"
              className="inputField py-3 px-2"
              placeholder="Email Address:"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}

            <input
              type="text"
              name="companyName"
              className="inputField py-3 px-2 my-3"
              placeholder="Company Name:"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.companyName}
            />
            {formik.touched.companyName && formik.errors.companyName && (
              <div className="error">{formik.errors.companyName}</div>
            )}
            <textarea
              rows={8}
              name="textarea"
              className="inputField p-2"
              placeholder="Type Message Here"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.textarea}
            />

            <button type="submit" className="contactSubmit">
              SEND MESSAGE {isLoading && <Loader />}
            </button>
            
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
