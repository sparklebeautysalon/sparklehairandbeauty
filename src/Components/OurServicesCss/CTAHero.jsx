import React from "react";
import Hairstylist from "../../Images/aboutus/feelbeautyful - Copy.jpg";
import "./CTAHero.css";
import { useNavigate } from "react-router-dom";

export default function CTAHero() {
  const navigate = useNavigate();

  return (
    <section className="cta-hero-clean">
      <div className="cta-container">
        <div className="cta-card">
          {/* LEFT CONTENT */}
          <div className="cta-left">
            <h2 className="cta-title">Feel Beautiful And Relaxed</h2>
            <p className="cta-copy">
              Step into a moment of calm and let our experts highlight your
              natural beauty with gentle, thoughtful care.
            </p>
            <button
              className="cta-btn"
              onClick={() => {
                navigate("/contactus");
              }}>
              Book An Appointment Now
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="cta-right">
            <div
              className="cta-photo"
              style={{ backgroundImage: `url("${Hairstylist}")` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
