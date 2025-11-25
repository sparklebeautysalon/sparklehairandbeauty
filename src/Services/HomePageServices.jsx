import React, { useState } from 'react'
import Hair from "../Images/hairservices/longlayershaircut.png";
import Facial from "../Images/facials/facialServices.png";
import Threading from "../Images/Threading/foreheadthreading1.png";
import Waxing from "../Images/Waxing/waxingservices.png";
import Tinting from "../Images/Tinting/TintingService.png";
import Massage from "../Images/massages/headmessage3.png";
import "./Homepageservices.css";
import { Link } from 'react-router-dom';


export default function HomePageServices() {

    const services = [
      {
        title: "HAIRDRESSING",
        img: Hair,
        list: [
          "Beautiful hair begins with the right care",
          "Enjoy personalised cuts and styling that flatter your features.",
        ],
      },
      {
        title: "FACIALS",
        img: Facial,
        list: [
          "Pamper your skin with our gentle, rejuvenating facials for deep hydration and a radiant glow",
        ],
      },
      {
        title: "THREADING",
        img: Threading, // Replace with exact crop if needed
        list: [
          "Enhance your natural beauty with delicate threading to shape brows beautifully.",
        ],
      },

      {
        title: "WAXING",
        img: Waxing,
        list: [
          "Professional waxing for smooth, long-lasting results using gentle techniques and premium products.",
        ],
      },
      {
        title: "TINTING",
        img: Tinting,
        list: [
          "Get bold, beautifully defined brows and lashes with long-lasting tinting.",
        ],
      },
      {
        title: "MASSAGE",
        img: Massage,
        list: [
          "Reset your body with tension-relieving massages that refresh and restore.",
        ],
      },
    ];
 const pageSize = 4;
 const pages = Math.ceil(services.length / pageSize);
 const [page, setPage] = useState(0); // 0-based page index

 const start = page * pageSize;
 const visible = services.slice(start, start + pageSize);

    return (
      <>
        <div className="services-intro-subline">The Beauty Secret Revealed</div>
        <h2 className="services-intro-title">
          Discover What Makes Our Services Special
        </h2>
        <div className="services-root">
          <div className="services-container">
            {visible.map((s, i) => (
              <div className="service-card" key={start + i}>
                <div className="service-img">
                  <img src={s.img} alt={s.title} />
                </div>

                <h3 className="service-title">{s.title}</h3>
                <hr className="divider" />

                <ul className="service-list">
                  {s.list.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
                <Link to="/services" className="shr-panel-cta">
                  Explore More
                </Link>
              </div>
            ))}
          </div>

          {/* Dots / Pagination controls */}
          <div className="dots-row" role="tablist" aria-label="Service pages">
            {Array.from({ length: pages }).map((_, idx) => (
              <button
                key={idx}
                className={`dot ${idx === page ? "active" : ""}`}
                onClick={() => setPage(idx)}
                aria-label={`Go to page ${idx + 1}`}
                aria-pressed={idx === page}
              />
            ))}
          </div>
        </div>
      </>
    );
}

