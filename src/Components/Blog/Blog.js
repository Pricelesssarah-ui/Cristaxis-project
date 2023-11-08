import React from "react";
import { motion } from "framer-motion";

import "./Blog.css";

import TipImg from "../../assets/images/pngs/tip_img.png";
import Arrow from "../../assets/images//svgs/arrow_icon.svg";
import Taxi from "../../assets/images/pngs/taxi_img.png";
import { Link } from "react-router-dom";

function Blog() {
  const data = [
    {
      id: 1,
      imgUrl: TipImg,
      content: "Benefits of a chauffeur",
      dateTime: "2 min read • 23/08/2023",
    },
    {
      id: 2,
      imgUrl: TipImg,
      content: "Benefits of a chauffeur",
      dateTime: "2 min read • 23/08/2023",
    },
    {
      id: 3,
      imgUrl: TipImg,
      content: "Benefits of a chauffeur",
      dateTime: "2 min read • 23/08/2023",
    },
    {
      id: 4,
      imgUrl: TipImg,
      content: "Benefits of a chauffeur",
      dateTime: "2 min read • 23/08/2023",
    },

    {
      id: 5,
      imgUrl: TipImg,
      content: "Benefits of a chauffeur",
      dateTime: "2 min read • 23/08/2023",
    },

    {
      id: 6,
      imgUrl: TipImg,
      content: "Benefits of a chauffeur",
      dateTime: "2 min read • 23/08/2023",
    },

    {
      id: 7,
      imgUrl: TipImg,
      content: "Benefits of a chauffeur",
      dateTime: "2 min read • 23/08/2023",
    },

    {
      id: 8,
      imgUrl: TipImg,
      content: "Benefits of a chauffeur",
      dateTime: "2 min read • 23/08/2023",
    },

    {
      id: 9,
      imgUrl: TipImg,
      content: "Benefits of a chauffeur",
      dateTime: "2 min read • 23/08/2023",
    },
  ];

  return (
    <motion.div
      name="blog"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="blogContainer">
        <div className="blogBg">
          <div className="container">
            <div className="blogItems">
              <h1>Tips and Updates</h1>

              <div className="blogImg TipText py-4">
                {data.map(({ id, imgUrl, content, dateTime }) => (
                  <div
                    key={id}
                    className="tipsInner py-4 flex flex-col items-center cursor-pointer hover:scale-105 ease-in-out duration-300"
                  >
                    <img src={imgUrl} alt={`Tip ${id}`} />
                    <p className="tipbenefit">{content}</p>
                    <p className="tipTime">{dateTime}</p>
                  </div>
                ))}
              </div>

              <p className="flex items-center justify-center my-9 pb-9 font-bold text-lg">
                Next Page <img src={Arrow} className="pl-2" alt="arrow" />{" "}
              </p>
            </div>
          </div>

          <div className="blogtaxiContainer">
            <div className="container">
              <div className="blogtaxiMain">
                <div className="blogtaxiText">
                  <h1>Let’s help you get there</h1>
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
      </div>
    </motion.div>
  );
}

export default Blog;
