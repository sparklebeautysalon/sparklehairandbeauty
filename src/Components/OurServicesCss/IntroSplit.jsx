import React from "react";
import "./IntroSplit.css";

export default function IntroSplit() {
  return (
    <section className="intro-new">
      <div className="intro-container">
        {/* LEFT TEXT BLOCK */}
        <div className="intro-left">
          

          <div className="intro-decor" aria-hidden="true" />
        </div>

        {/* RIGHT CARD BLOCK */}
        <div className="intro-right">
          <div className="intro-card">
            <p className="intro-copy">
              Where expert care meets natural beauty—crafted to make you feel
              your most confident self.
            </p>

            <button
              className="buttonCommon"
              // onClick={onCtaClick}
              type="button">
              View Services
            </button>
          </div>

          <div className="intro-shape" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

