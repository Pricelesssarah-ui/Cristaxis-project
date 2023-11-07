import React from "react";
import { motion } from "framer-motion";

import "./About.css";

import AboutImg from "../../assets/images/pngs/about_img.png";
import Tick from "../../assets/images/svgs/tick_icon.svg";
import AboutImg1 from "../../assets/images/pngs/about_1.png";
import AboutImg2 from "../../assets/images/pngs/about_2.png";
import AboutImg3 from "../../assets/images/pngs/about_3.png";
import AboutImg4 from "../../assets/images/pngs/about_4.png";
import AboutTaxi from "../../assets/images/pngs/about_taxi.png";

function About() {
  return (
    <motion.div name="about"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="aboutContainer">
      <div className="container">
        <div>
          <h2>Fueled by the passion to get you there</h2>

          <div className="aboutusimgtxt flex flex-col">
            <img src={AboutImg} alt="aboutimg" />

            <div className="aboutflextext">
              <h4>Wherever you want to go, we will get you there!</h4>

              <ul>
                <li className="aboutlistitem flex">
                  {" "}
                  <img src={Tick} alt="tick" /> We believe in making
                  transportation accessible to everyone. We strive to
                  accommodate passengers with diverse needs, ensuring that our
                  services are inclusive and adaptable.
                </li>
                <li className="aboutlistitem flex">
                  {" "}
                  <img src={Tick} alt="tick" /> We uphold a high standard of
                  professionalism in our interactions, both with our customers
                  and within our team. Our drivers are trained to provide
                  courteous and respectful service at all times.
                </li>
                <li className="aboutlistitem flex">
                  {" "}
                  <img src={Tick} alt="tick" /> Our passengers are at the heart
                  of everything we do. We actively listen to their feedback and
                  preferences, tailoring our services to provide a comfortable
                  and personalized experience for each individual.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="aboutText">
        <div className="container">
          <p className="text-center pb-4">
            Cris taxis is a Cirencester taxi service covering the beautiful
            Cotswolds' town of Cirencester and the surrounding areas. we provide
            fast and reliable taxi services for short and long distance journeys
            using a range of clean and modern Vehicles driven by vetted and
            professional drivers
          </p>

          <p className="text-center">
            Our clients are our priority therefore, we have an on-going
            procedure that allows our services to remain to a high consistent
            standard and be one of the best companies.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="aboutImages flex flex-col items-center">
          <img src={AboutImg1} className="aboutImg1 my-4" alt="about1" />
          <img src={AboutImg2} className="aboutImg2  " alt="about2" />
          <img src={AboutImg3} className="aboutImg3 my-4" alt="about3" />
          <img src={AboutImg4} className="aboutImg4  " alt="about4" />
        </div>
      </div>

      <div className="taxiContainer aboutTaxiContainer">
        <div className="container">
          <div className="taxiMain  aboutTaxiMain">
            <div className="taxiText aboutTaxiText">
              <h1>Let’s help you get there</h1>
              <button className="impactlearnmore">Book a taxi</button>
            </div>
            <img src={AboutTaxi} alt="taxi" />
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
}

export default About;
