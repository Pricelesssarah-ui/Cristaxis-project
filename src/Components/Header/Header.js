import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/svgs/cristaxi_logo.svg";

import "./Header.css";

const Header = ({ nav, setNav }) => {
  const links = [
    {
      id: 1,
      link: "ABOUT",
    },

    {
      id: 2,
      link: "BLOG",
    },

    {
      id: 3,
      link: "CONTACT US",
    },
  ];

  return (
    <div
      className="navbar opacity-100 w-full h-22 bg-black py-3 fixed z-10
            text-white"
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>

          <ul className="Navlist hidden md:flex items-center justify-between w-[60%]">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-3 cursor-pointer font-medium text-white 
                     hover:scale-125 duration-300"
              >
                <Link to={link} smooth duration={300}>
                  {link}
                </Link>
              </li>
            ))}

            <button className="bookAtaxi text-black">
              {" "}
              <Link to="/booking" className="hover:scale-100 duration-300">
                BOOK A TAXI
              </Link>{" "}
            </button>
            <button className="callUs rounded text-black">
              {" "}
              <Link to="/" className="hover:scale-100 duration-300">
                CALL US
                </Link>{" "}
            </button>
          </ul>

          <div className=" z-10">
            <div
              onClick={() => setNav(!nav)}
              className="cursor-pointer  
                  text-gray-500  md:hidden mr-5"
            >
              {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
              <ul
                className="flex flex-col justify-center items-center absolute
                     top-0 left-0 w-full h-screen b-screen bg-black text-white"
              >
                {links.map(({ id, link }) => (
                  <li
                    key={id}
                    className="px-4 cursor-pointer 
                            capitalize py-6 text-2xl"
                  >
                    <Link
                      onClick={() => setNav(!nav)}
                      to={link}
                      smooth
                      duration={300}
                    >
                      {link}
                    </Link>
                  </li>
                ))}

                <button className="bookAtaxi rounded text-black my-6 mx-0 ">
                  <Link
                    to="/contact"
                    onClick={() => setNav(!nav)}
                    smooth
                    duration={300}
                    className="hover:scale-100 duration-300 text-xs"
                  >
                    Book a taxi
                  </Link>
                </button>

                <button className="callUs rounded text-black">
                <Link
                    to="/"
                    onClick={() => setNav(!nav)}
                    smooth
                    duration={300}
                    className="hover:scale-100 duration-300 text-sm"
                  >
                    Call us
                    </Link>
                </button>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
