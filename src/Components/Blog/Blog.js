import React from "react";
import { motion } from "framer-motion";

import "./Blog.css";

import Blog1 from "../../assets/images/pngs/blog_1.png";
import Blog2 from "../../assets/images/pngs/blog_2.png";
import Arrow from "../../assets/images//svgs/arrow_icon.svg";
import Taxi from "../../assets/images/pngs/taxi_img.png";
import { Link, useNavigate } from "react-router-dom";
import "./BlogPost1/BlogPost1";
import "./BlogPost2/BlogPost2";

function Blog() {
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      imgUrl: Blog1,
      content: "Benefits of a chauffeur",
      dateTime: "3 min read • 01/03/2024",
      link: "./BlogPost1",
    },
    {
      id: 2,
      imgUrl: Blog2,
      content: "Safety tips when using a taxi",
      dateTime: "2 min read • 28/02/2024",
      link: "./BlogPost2",
    },
    {
      id: 3,
      imgUrl: Blog1,
      content: "Benefits of a chauffeur",
      dateTime: "3 min read • 01/03/2024",
      link: "./BlogPost1",
    },
    {
      id: 4,
      imgUrl: Blog1,
      content: "Benefits of a chauffeur",
      dateTime: "3 min read • 01/03/2024",
      link: "./BlogPost1",
    },

    {
      id: 5,
      imgUrl: Blog1,
      content: "Benefits of a chauffeur",
      dateTime: "3 min read • 01/03/2024",
      link: "./BlogPost1",
    },

    {
      id: 6,
      imgUrl: Blog1,
      content: "Benefits of a chauffeur",
      dateTime: "3 min read • 01/03/2024",
      link: "./BlogPost1",
    },

    {
      id: 7,
      imgUrl: Blog1,
      content: "Benefits of a chauffeur",
      dateTime: "3 min read • 01/03/2024",
      link: "./BlogPost1",
    },

    {
      id: 8,
      imgUrl: Blog1,
      content: "Benefits of a chauffeur",
      dateTime: "3 min read • 01/03/2024",
      link: "./BlogPost1",
    },

    {
      id: 9,
      imgUrl: Blog1,
      content: "Benefits of a chauffeur",
      dateTime: "3 min read • 01/03/2024",
      link: "./BlogPost1",
    },
  ];

  const handleClick = (link) => {
    navigate(link);
  };

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
                {data.map(({ id, imgUrl, link, content, dateTime }) => (
                  <div
                    key={id}
                    className="tipsInner py-4 flex flex-col items-center cursor-pointer hover:scale-105 ease-in-out duration-300"
                    onClick={() => handleClick(link)}
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
