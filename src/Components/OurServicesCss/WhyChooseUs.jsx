import React from "react";
import "./WhyChooseUs.css";
import WhyChooseUsImg from "../../Images/aboutus/banners.png"

export default function WhyChooseUs() {
  return (
    <section className="wcu">
      <div className="wcu-card">
        {/* LEFT IMAGE */}
        <div className="wcu-left">
          <div className="imageWrap">
            <img src={WhyChooseUsImg} alt="Salon" />
            <div className="decor-plus"></div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="wcu-right">
          {/* Title with pink background highlight like the sample UI */}
          <h2 className="wcu-title">
           Why Clients Trust Us
          </h2>

          <p className="wcu-subtitle">
            Discover a salon experience built on expertise, comfort, and
            exceptional results. From the moment you walk in, we ensure every
            treatment is delivered with care, precision, and your beauty goals
            in mind.
          </p>

          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">👩‍🔬</div>
              <div>
                <h4>Skilled Beauty Specialists</h4>
                <p>
                  Our trained professionals bring advanced techniques and
                  genuine artistry to every service.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">🧪</div>
              <div>
                <h4>High-Quality, Skin-Safe Products</h4>
                <p>
                  We select trusted, professional-grade products to ensure safe,
                  effective, and long-lasting results.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">🎯</div>
              <div>
                <h4>Personalised Beauty Approach</h4>
                <p>
                  Each treatment is tailored to your unique needs, style, and
                  comfort for the best possible outcome.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">🛡️</div>
              <div>
                <h4>Hygienic & Comfortable Space</h4>
                <p>
                  We maintain strict cleanliness standards to provide a
                  relaxing, safe, and worry-free salon experience..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

