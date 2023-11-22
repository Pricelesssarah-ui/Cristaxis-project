import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import "./Landingpage.css";

import ChatIcon from "../../assets/images/svgs/chat_icon.svg";
import Icon15k from "../../assets/images/svgs/icon_15k.svg";
import IconCoverage from "../../assets/images/svgs/icon_coverage.svg";
import Icon150k from "../../assets/images/svgs/icon_150k.svg";
import TestimonialImage from "../../assets/images/pngs/testimonial_img.png";
import TipImg from "../../assets/images/pngs/tip_img.png";
import Taxi from "../../assets/images/pngs/taxi_img.png";
import { Link } from "react-router-dom";

function Landingpage() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <motion.div
      name="landingpage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="containerHome">
        <div className="homePage">
          <div className="container">
            <div className="textWrapper">
              <h1 className="heading">Let's help you get there</h1>
              <p className="someText">
                We are your reliable round the clock taxi service
              </p>
              <button className="bookAtaxi">
                {" "}
                <Link to="/booking">BOOK A TAXI</Link>
              </button>

              <button className="callUs rounded text-white">
                {" "}
                <a
                  href="tel:+441285339045"
                  className="hover:scale-100 duration-300"
                >
                  Call: +4412 8533 9045
                </a>{" "}
              </button>

              <Link to="/contact us">
                <img src={ChatIcon} alt="chat" className="chaticon" />
              </Link>
            </div>
          </div>
        </div>

        <div className="servicesContainer">
          <div className="container">
            <h2>Our Services</h2>
            <div className="allBoxService">
              <div className="serviceBox">
                <h3>Airport Transfers</h3>
                <p>we provide transfers to and from all UK airports and seaports. Please get 
                  in touch for a quote or use the online booking form.</p>
              </div>

              <div className="serviceBox">
                <h3>Corporate Travels</h3>
                <p>We can provide corporate account services to businesses for a regular 
                  transport of clients, employees or packages. Please get in touch to discuss your needs.
                </p>
              </div>

              <div className="serviceBox">
                <h3>Private Hire</h3>
                <p>
                  For short and long-distance journeys, let us get you there in comfort. 
                  Please use our booking form to pre-book a journey.
                </p>
              </div>
              
              <div className="serviceBox ">
                <h3>MPV Hire</h3>
                <p>
                  For short and long-distance journeys, let us get you there in comfort. 
                  Please use our booking form to pre-book a journey.
                </p>
              </div>

              <div className="serviceBox">
                <h3>Event Hire</h3>
                <p>
                  our event hire service caters to the needs of hosts who want taxis to shuttle 
                  their guests to or from private or corporate events. Vehicles and drivers are hired at an 
                  hourly rate and will remain on site when they are not transporting guests.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="impactContainer">
          <div className="container">
            <h2>Our Impact</h2>
            <p className="impactText">
              Cristaxis Cirencester is your reliable round the clock taxi
              service provider.
            </p>
            <div className="allBoxImpact">
              <div className="impactBox">
                <img src={Icon15k} alt="icon" />
                <h3 className="impactCount">15k</h3>
                <p className="special">trips completed successfully</p>
              </div>

              <div className="impactBox">
                <img src={IconCoverage} alt="icon" />
                <h3 className="impactCount">Coverage</h3>
                <p className="special">United Kingdom and Beyond</p>
              </div>

              <div className="impactBox">
                <img src={Icon150k} alt="icon" />
                <h3 className="impactCount">150k</h3>
                <p className="special">humans gotten “there”</p>
              </div>
            </div>

            <div className="buttonContainer">
              <button className="impactlearnmore">
                {" "}
                <Link to="/about">Learn More</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="testimonialContainer">
          <div className="container">
            <h2>Testimonials</h2>
            <div className="allBoxTestimonial">
              <div>
                <div className="testimonialimage">
                  <img src={TestimonialImage} alt="" />
                </div>
                <div className="testimonialBox">
                  <p className="testimony">
                    I can’t recommend Cris taxi’s enough!! Always on time, waiting with a smile, friendly conversation 
                    and gets you were you want to be smoothly and safely if I could give 6 stars I would.
                  </p>
                  <p className="thename pt-6">Paloma</p>
                </div>
              </div>

              <div className="middlebox">
                <div className="testimonialimage ">
                  <img src={TestimonialImage} alt="" />
                </div>
                <div className="testimonialBox specialbox">
                  <p className="testimony">
                    Excellent and professional service. Would highly recommend
                  </p>
                  <p className="thename mt-10 pt-10">Ciprian</p>
                </div>
              </div>

              <div>
                <div className="testimonialimage">
                  <img src={TestimonialImage} alt="" />
                </div>
                <div className="testimonialBox">
                  <p className="testimony">
                  Cris Taxi was a delight and the service was perfect. I highly recommend.
                  </p>
                  <p className="thename mt-10 pt-10">James</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tipsContainer">
          <div className="container">
            <div className="tipsTitle">
              <h2>Tips & Updates</h2>
              <div className="flex items-center">
                <p className="pr-2">View all</p>
                <p>
                  <FaArrowRight />
                </p>
              </div>
            </div>

            <div className="TipText">
              <MdChevronLeft
                className="opacity-50 cursor-pointer hover:opacity-100"
                onClick={slideLeft}
                size={40}
              />
              <div
                id="slider"
                className="w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
              >
                <div className="inline-block py-2 cursor-pointer hover:scale-105 ease-in-out duration-300 ">
                  <div className="tipsInner flex flex-col items-center">
                    <img src={TipImg} alt="tips" />
                    <p className="tipbenefit">Benefits of a chauffeur</p>
                    <p className="tipTime">2 min read • 23/08/2023</p>
                  </div>
                </div>

                <div className="inline-block py-2 cursor-pointer hover:scale-105 ease-in-out duration-300 ">
                  <div className="tipsInner flex flex-col items-center">
                    <img src={TipImg} alt="tips" />
                    <p className="tipbenefit">Benefits of a chauffeur</p>
                    <p className="tipTime">2 min read • 23/08/2023</p>
                  </div>
                </div>

                <div className="inline-block py-2 cursor-pointer hover:scale-105 ease-in-out duration-300 ">
                  <div className="tipsInner flex flex-col items-center">
                    <img src={TipImg} alt="tips" />
                    <p className="tipbenefit">Benefits of a chauffeur</p>
                    <p className="tipTime">2 min read • 23/08/2023</p>
                  </div>
                </div>

                <div className="inline-block py-2 cursor-pointer hover:scale-105 ease-in-out duration-300 ">
                  <div className="tipsInner flex flex-col items-center">
                    <img src={TipImg} alt="tips" />
                    <p className="tipbenefit">Benefits of a chauffeur</p>
                    <p className="tipTime">2 min read • 23/08/2023</p>
                  </div>
                </div>

                <div className="inline-block py-2 cursor-pointer hover:scale-105 ease-in-out duration-300 ">
                  <div className="tipsInner flex flex-col items-center">
                    <img src={TipImg} alt="tips" />
                    <p className="tipbenefit">Benefits of a chauffeur</p>
                    <p className="tipTime">2 min read • 23/08/2023</p>
                  </div>
                </div>

                <div className="inline-block py-2 cursor-pointer hover:scale-105 ease-in-out duration-300 ">
                  <div className="tipsInner flex flex-col items-center ">
                    <img src={TipImg} alt="tips" />
                    <p className="tipbenefit">Benefits of a chauffeur</p>
                    <p className="tipTime">2 min read • 23/08/2023</p>
                  </div>
                </div>
              </div>
              <MdChevronRight
                className="opacity-50 cursor-pointer hover:opacity-100"
                onClick={slideRight}
                size={40}
              />
            </div>
          </div>
        </div>

        <div className="taxiContainer">
          <div className="container">
            <div className="taxiMain">
              <div className="taxiText ">
                <h2>Let’s help you get there</h2>
                <p>Book a taxi in few seconds to get started</p>
                <button className="impactlearnmore">
                  {" "}
                  <Link to="/booking">Book a taxi</Link>
                </button>
              </div>
              <img src={Taxi} alt="" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Landingpage;
