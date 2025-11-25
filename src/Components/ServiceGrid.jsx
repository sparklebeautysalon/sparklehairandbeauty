import React, { useState, useEffect, useRef } from "react";
import "./OurServicesCss/Services.css";
import Hair from "../Images/hairservices/longlayershaircut.png";
import Facial from "../Images/facials/facialServices.png";
import Threading from "../Images/Threading/foreheadthreading1.png";
import Waxing from "../Images/Waxing/waxingservices.png";
import Tinting from "../Images/Tinting/eyelashesTinting1.png";
import Massage from "../Images/massages/headmessage3.png";
import { Link } from "react-router-dom";

export default function ServicesStatic() {
  return (
    <div className="parentServices-Home">
      <div className="services-intro-subline">The Beauty Secret Revealed</div>
      <h2 className="services-intro-title">
        Discover What Makes Our Services Special
      </h2>
      <section className="shr-section" aria-label="Services">
        <div className="shr-grid">
          {/* 1 — Hair Services */}
          <article className="shr-card" tabIndex={0} aria-expanded="false">
            <div
              className="shr-media"
              style={{
                backgroundImage: `url(${Hair})`,
              }}
              aria-hidden="true">
              <div className="shr-media-overlay">
                <h3 className="shr-media-title">Hair Services</h3>
                <p className="shr-media-sub">
                  Beautiful hair begins with the right care.
                  Enjoy personalised
                  cuts and styling that flatter your features.
                </p>
              </div>
            </div>

            <div className="shr-panel" role="region" aria-hidden="true">
              <h3 className="shr-panel-title">Hair Services</h3>
              <p className="shr-panel-copy">
                Beautiful hair begins with the right care. Enjoy personalised
                cuts and styling that flatter your features and leave you
                feeling confident.
              </p>
              <Link to="/services/hair-services" className="shr-panel-cta">
                Explore More
              </Link>
            </div>
          </article>

          {/* 2 — Facial Services */}
          <article className="shr-card" tabIndex={0} aria-expanded="false">
            <div
              className="shr-media"
              style={{
                backgroundImage: `url(${Facial})`,
              }}
              aria-hidden="true">
              <div className="shr-media-overlay">
                <h3 className="shr-media-title">Facial Services</h3>
                <p className="shr-media-sub">
                  Pamper your skin with our gentle, rejuvenating facials for
                  deep hydration and a radiant glow.
                </p>
              </div>
            </div>

            <div className="shr-panel" role="region" aria-hidden="true">
              <h3 className="shr-panel-title">Facial Services</h3>
              <p className="shr-panel-copy">
                Pamper your skin with gentle, rejuvenating facials that nourish
                and restore your natural radiance.
              </p>
              <Link to="/services/facial-services" className="shr-panel-cta">
                Explore More
              </Link>
            </div>
          </article>

          {/* 3 — Waxing Services */}
          <article className="shr-card" tabIndex={0} aria-expanded="false">
            <div
              className="shr-media"
              style={{
                backgroundImage: `url(${Waxing})`,
              }}
              aria-hidden="true">
              <div className="shr-media-overlay">
                <h3 className="shr-media-title">Waxing Services</h3>
                <p className="shr-media-sub">
                  Experience silky-smooth skin with our soothing waxing services
                  — gentle and effective care.
                </p>
              </div>
            </div>

            <div className="shr-panel" role="region" aria-hidden="true">
              <h3 className="shr-panel-title">Waxing Services</h3>
              <p className="shr-panel-copy">
                Professional waxing for smooth, long-lasting results using
                gentle techniques and premium products.
              </p>
              <Link to="/services/waxing-services" className="shr-panel-cta">
                Explore More
              </Link>
            </div>
          </article>

          {/* 4 — Threading Services */}
          <article className="shr-card" tabIndex={0} aria-expanded="false">
            <div
              className="shr-media"
              style={{
                backgroundImage: `url(${Threading})`,
              }}
              aria-hidden="true">
              <div className="shr-media-overlay">
                <h3 className="shr-media-title">Threading Services</h3>
                <p className="shr-media-sub">
                  Enhance your natural beauty with delicate threading to shape
                  brows beautifully.
                </p>
              </div>
            </div>

            <div className="shr-panel" role="region" aria-hidden="true">
              <h3 className="shr-panel-title">Threading Services</h3>
              <p className="shr-panel-copy">
                Precise threading to give you clean, natural-looking brows that
                frame your face.
              </p>
              <Link to="/services/threading-services" className="shr-panel-cta">
                Explore More
              </Link>
            </div>
          </article>

          {/* 5 — Tinting Services */}
          <article className="shr-card" tabIndex={0} aria-expanded="false">
            <div
              className="shr-media"
              style={{
                backgroundImage: `url(${Tinting})`,
              }}
              aria-hidden="true">
              <div className="shr-media-overlay">
                <h3 className="shr-media-title">Tinting Services</h3>
                <p className="shr-media-sub">
                  Get bold, beautifully defined brows and lashes with
                  long-lasting tinting.
                </p>
              </div>
            </div>

            <div className="shr-panel" role="region" aria-hidden="true">
              <h3 className="shr-panel-title">Tinting Services</h3>
              <p className="shr-panel-copy">
                Long-lasting tinting to enhance brows and lashes with low
                maintenance results.
              </p>
              <Link to="/services/tinting-services" className="shr-panel-cta">
                Explore More
              </Link>
            </div>
          </article>

          {/* 6 — Massage Services */}
          <article className="shr-card" tabIndex={0} aria-expanded="false">
            <div
              className="shr-media"
              style={{
                backgroundImage: `url(${Massage})`,
              }}
              aria-hidden="true">
              <div className="shr-media-overlay">
                <h3 className="shr-media-title">Massage Services</h3>
                <p className="shr-media-sub">
                  Reset your body with tension-relieving massages that refresh
                  and restore.
                </p>
              </div>
            </div>

            <div className="shr-panel" role="region" aria-hidden="true">
              <h3 className="shr-panel-title">Massage Services</h3>
              <p className="shr-panel-copy">
                Soothing massage therapies tailored to relieve stress and
                restore balance.
              </p>
              <Link to="/services/massage-services" className="shr-panel-cta">
                Explore More
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
