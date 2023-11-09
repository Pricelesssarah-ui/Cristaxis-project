import React from 'react'
import './Footer.css'

import Logo from "../../assets/images/svgs/cristaxi_logo.svg";
import Facebook from "../../assets/images/svgs/facebook_icon.svg";
import Twitter from "../../assets/images/svgs/twitter_icon.svg";
import Instagram from "../../assets/images/svgs/instagram_icon.svg";
import LinkedIn from "../../assets/images/svgs/linkedin_icon.svg";
import Phone from "../../assets/images/svgs/phone_icon.svg";
import Area from "../../assets/images/svgs/area_icon.svg";
import Visa from "../../assets/images/svgs/visa_icon.svg";
import Card from "../../assets/images/svgs/card_icon.svg";
import Paypal from "../../assets/images/svgs/paypal_icon.svg";
import BDesigner from "../../assets/images/svgs/BDesigner_logo.svg";
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <div className="footerContainer">
        <div className="container">
          <div className="footerTop">
            <div className="footerFirst flex flex-col">
              <img src={Logo} width={200} alt="logo" />

              <div className="footerSocials flex items-center justify-around">
                <a href='/'><img src={Facebook} alt="facebook" /></a>
                <a href='/'><img src={Twitter} alt="twitter" /></a>
                <a href='/'><img src={Instagram} alt="instagram" /></a>
                <a href='/'><img src={LinkedIn} alt="linkedin" /></a>
              </div>
            </div>

            <div className="footerSecond">
              <p>
                We are your solution for convenient, on-time, and reliable taxi
                service.
              </p>
              <p className="special flex items-center pb-2 text-white">
                <img src={Phone} className="pr-3 " alt="phone" /> 01285 339 045{" "}
              </p>
              <p className="contact flex items-center text-white">
                <img src={Area} className="pr-3" alt="area" />
                Cirencester, UK
              </p>
            </div>

            <div className="footerThird">
              <ul>
                <li className="special">Cristaxis</li>
                <li>Airport Transfers</li>
                <li>Corporate Travels</li>
                <li>Private Hire</li>
                <li>MPV Hire</li>
                <li>Event Hire</li>
              </ul>
            </div>

            <div className="footerFourth">
              <ul>
                <li className="special">Company</li>
                <li className="aboutus"><Link to="/about">About us</Link></li>
                <li> <Link to="/">Services</Link></li>
                <li> <Link to="/blog">Blog</Link>Blog</li>
                <li> <Link to="/contact">Contact Us</Link></li>
                <li> <Link to="/booking">Book a taxi</Link></li>
              </ul>
            </div>

            <div className="footerFifth">
              <p className="footerFifthItem1">Payment Options</p>
              <div className="flex items-center">
                <img src={Visa} width={100} alt="visa" />
                <img src={Card} width={50} alt="card" />
              </div>
              <img src={Paypal} width={100} alt="paypal" />
              <p className="cancel"> <Link to="/terms">Terms & Conditions</Link></p>
              <p className="cancel"> <Link to="/cancellation">Cancellation and Refunds Policy</Link></p>
            </div>
          </div>

          <div className="footerDown">
            <hr />
            <div className="downbox flex items-center justify-between">
              <p className="copyright"> &copy; 2023. Cristaxis Cirencester</p>
              <p className="designer">
                Designed and built by{" "}
                <img src={BDesigner} width={50} height={50} alt="BDesigner" />{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Footer