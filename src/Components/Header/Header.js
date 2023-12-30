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

          <ul className="Navlist lg:flex hidden items-center justify-between w-[100%]">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="navitem px-3 cursor-pointer font-medium text-white 
                     hover:scale-125 duration-300"
              >
                <Link to={link} duration={300}>
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
            <button className="callUs rounded text-white">
              {" "}
              <a
                href="tel:+441285339045"
                className="hover:scale-100 duration-300"
              >
                Tap to Call: +4412 8533 9045
              </a>{" "}
            </button>
          </ul>

            <div
              onClick={() => setNav(!nav)}
              className="cursor-pointer z-10
              text-gray-500 lg:hidden mr-5"
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
                    
                      duration={300}
                    >
                      {link}
                    </Link>
                  </li>
                ))}

                <button className="bookAtaxiSmall rounded text-black my-6 mx-0">
                  <Link
                    to="/booking"
                    onClick={() => setNav(!nav)}
                  
                    duration={300}
                    className="hover:scale-100 duration-300 text-xs"
                  >
                    Book a taxi
                  </Link>
                </button>

                <button className="callUsSmall rounded text-white">
                  {" "}
                  <a
                    href="tel:+441285339045"
                    className="hover:scale-100 duration-300 text-sm"
                  >
                Tap to Call: +4412 8533 9045
              </a>{" "}
                </button>
              </ul>
            )}
          </div>
        </div>
      </div>
  );
};

export default Header;
