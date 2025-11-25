import React from "react";
import "./HomeHero.css";
import HeroImg from "../../Images/homehero.png";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="home-hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="homepageTagline">
            Enhancing Beauty, Elevating Confidence.
          </p>

          <h1 className="hero-title">Because You Deserve to Shine.</h1>
          <p>
            {" "}
            <span className="hero-sub">Advanced Hair & Beauty Treatments</span>
          </p>

          <p className="hero-desc">
            Our skilled team of beauty experts uses premium products and
            advanced techniques to deliver outstanding results with care and
            precision
          </p>

          <div>
            <button
              className="cta"
              onClick={() => {
                navigate("/contactus");
              }}>
              Book An Appointment
            </button>
          </div>
        </div>

        <div className="hero-image-wrap" aria-hidden="true">
          <div className="hero-image-card">
            <img src={HeroImg} alt="Smiling woman" className="hero-image" />
          </div>
        </div>
      </div>

      <div className="gold-bar" aria-hidden="true"></div>
    </section>
  );
}
