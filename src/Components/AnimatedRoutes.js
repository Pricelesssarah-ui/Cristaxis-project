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
import BlogPost1 from "./Blog/BlogPost1/BlogPost1";
import BlogPost2 from "./Blog/BlogPost2/BlogPost2";

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
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/successContactpage" element={<SuccessContactpage />} />
        <Route path="/successBooking" element={<SuccessBooking />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cancellation" element={<Cancellation />} />
        <Route path="/blog/blogpost1" element={<BlogPost1 />} />
        <Route path="/blog/blogpost2" element={<BlogPost2 />} />
        <Route path="/blog/blogpost1/blogpost2" element={<BlogPost2 />} />
      </Routes>
      <Footer />
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
