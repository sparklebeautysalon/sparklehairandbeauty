import React from "react";
import ServicesGrid from "../ServiceGrid";
import Booking from "../OurServicesCss/Booking";
import Hero from "../OurServicesCss/Hero";
import AboutPage from "../NabBarLinks/AboutPage";
import IntroSplit from "../OurServicesCss/IntroSplit";
import AppointmentSplit from "../OurServicesCss/AppointmentSplit";
import WhyChooseUs from "../OurServicesCss/WhyChooseUs";
import TestimonialSlider from "../OurServicesCss/TestimonialSlider";
import CTAHero from "../OurServicesCss/CTAHero";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import "./homepage.css";
import HomePageServices from "../../Services/HomePageServices";

function HomePagetwo() {
  return (
    <>
      <br />
      {/* okay */}
      <Hero />
      <AboutPage />
      <HomePageServices />
      <AppointmentSplit />
      <WhyChooseUs />
      {/* <TestimonialSlider /> */}
      <CTAHero />
      {/* Map */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19230.127863493224!2d-1.1706492652343679!3d52.9526337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c3b8616eaf65%3A0xea0be3fd1b80f61c!2sSparkle%20Hair%20and%20Beauty%20Studio!5e0!3m2!1sen!2sin!4v1763052671333!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Sparkle Hair And Beauty Studio"></iframe>
      </div>
    </>
  );
}

export default HomePagetwo;
