import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePagetwo from "../Components/NabBarLinks/Homepagetwo";
import Footer from "../Components/Navigation/Footer";
import Navbartwo from "../Components/Navigation/Navbartwo";
import AboutUspage from "../Components/Aboutus/AboutUspage";
import ContactUsPage from "../Components/NabBarLinks/ContactUsPage";
import CommonServices from "../Services/CommonServices";

function PageRouter() {
  return (
    <Router>
      <Navbartwo />
      <Routes>
        <Route path="/" element={<HomePagetwo />} />
        <Route path="/aboutus" element={<AboutUspage />} />
        <Route path="/ContactUs" element={<ContactUsPage />} />
        {/* <Route path="/Booking" element={<Booking />} /> */}
        <Route path="/services" element={<CommonServices />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default PageRouter;
