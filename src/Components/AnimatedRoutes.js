import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./Header/Header";
import Landingpage from "./Landingpage/Landingpage";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import SuccessContactpage from "./SuccessContactpage/SuccessContactpage";
import SuccessBooking from "./SuccessBooking/SuccessBooking";
import Terms from "./Terms/Terms";
import Cancellation from "./Cancellation/Cancellation";
import Booking from "./Booking/Booking";



function AnimatedRoutes() {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  return (
    <AnimatePresence>
      <Header nav={nav} setNav={setNav} />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact us" element={<Contact />} />
        <Route path="/SuccessContactpage" element={<SuccessContactpage />} />
        <Route path="/SuccessBooking" element={<SuccessBooking />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Cancellation" element={<Cancellation />} />
      </Routes>
      <Footer />
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
