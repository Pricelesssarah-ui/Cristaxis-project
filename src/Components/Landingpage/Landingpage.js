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
              <button className="bookAtaxi">BOOK A TAXI</button>
              <button  className="learnMore"> <Link to='/about'>LEARN MORE</Link></button>
              <img src={ChatIcon} alt="chat" className="chaticon" />
            </div>
          </div>
        </div>

        <div className="servicesContainer">
          <div className="container">
            <h2>Our Services</h2>
            <div className="allBoxService">
              <div className="serviceBox">
                <h3>Airport Transfers</h3>
                <p>We provide airport transfers to and from all UK airports.</p>
              </div>

              <div className="serviceBox">
                <h3>Corporate Travels</h3>
                <p>
                  We understand the pressures placed on executives and realise
                  that their agendas frequently change at the last minute.
                </p>
              </div>

              <div className="serviceBox">
                <h3>Private Hire</h3>
                <p>
                  Whether it’s a short shopping trip or a long-distance journey,
                  we will get you there in comfort.
                </p>
              </div>

              <div className="serviceBox">
                <h3>Chauffeur Services</h3>
                <p>
                  From our base in Cirencester provide a first class taxi
                  service.
                </p>
              </div>

              <div className="serviceBox">
                <h3>MPV Hire</h3>
                <p>
                  We can easily cater for the travel needs of larger groups with
                  our luxury minibus service. We have a range of suitable
                  vehicles ranging from 6 seater MPV up to 8 seater MPV
                </p>
              </div>

              <div className="serviceBox">
                <h3>Event Hire</h3>
                <p>
                  Assurance, capability, high standards and courtesy are the
                  building blocks of our brand and we guarantee a five-star taxi
                  service for all our clients.
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
              <button className="impactlearnmore"> <Link to='/about'>Learn More</Link></button>
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
                    They provided with the best in class vehicle and amazing
                    driver to pick me from the airport. I liked their
                    punctuality and professionalism
                  </p>
                  <p className="thename">Billionaire Designer</p>
                  <p className="occupation">Manager, XYZ Brands</p>
                </div>
              </div>

              <div className="middlebox">
                <div className="testimonialimage ">
                  <img src={TestimonialImage} alt="" />
                </div>
                <div className="testimonialBox specialbox">
                  <p className="testimony">
                    They provided with the best in class vehicle and amazing
                    driver to pick me from the airport. I liked their
                    punctuality and professionalism
                  </p>
                  <p className="thename">Billionaire Designer</p>
                  <p className="occupation">Manager, XYZ Brands</p>
                </div>
              </div>

              <div>
                <div className="testimonialimage">
                  <img src={TestimonialImage} alt="" />
                </div>
                <div className="testimonialBox">
                  <p className="testimony">
                    They provided with the best in class vehicle and amazing
                    driver to pick me from the airport. I liked their
                    punctuality and professionalism
                  </p>
                  <p className="thename">Billionaire Designer</p>
                  <p className="occupation">Manager, XYZ Brands</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tipsContainer">
          <div className="container">
            <div className="tipsTitle">
              <h3>Tips & Updates</h3>
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
              <div className="taxiText">
                <h1>Let’s help you get there</h1>
                <p>Book a taxi in few seconds to get started</p>
                <button className="impactlearnmore">Book a taxi</button>
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
