// import "./FacialServicesPart1.css";



import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "primereact/carousel";
import "./FacialServicesPart1.css";
import FacialServicesTextAnnimation from "./FacialServicesTextAnnimation";





export default function FacialServicesPart1 ({
 images = [
    "https://mssalon.co.uk/wp-content/uploads/2025/08/4246.jpg",
    "https://mssalon.co.uk/wp-content/uploads/2025/08/4246.jpg",
   "https://mssalon.co.uk/wp-content/uploads/2025/08/4246.jpg",
    "https://mssalon.co.uk/wp-content/uploads/2025/08/4246.jpg",
  ],
  autoplayInterval = 3000,
  loopDelay = 2200, // pause after last word before looping (ms)
  wordDelay = 220, // delay between words (ms)
}) {
  const imageTemplate = (item) => (
    <div className="fsp-image-wrap">
      <img src={item} alt="facial preview" className="fsp-image" loading="lazy" />
    </div>
  );


  

  // Words to reveal — edit as needed
  // const titleWords = ["Professional", "Facial", "Treatments"];
  const titleWords = [
  { text: "Professional", className: "w-default" },
  { text: "Facial", className: "w-pink" },
  { text: "Treatments", className: "w-blue" },
];
  const wordsRef = useRef([]); // DOM refs to each word span
  const timeoutsRef = useRef([]);

  useEffect(() => {
    // Respect user's reduced-motion setting
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      // Immediately show all words (no animation)
      wordsRef.current.forEach((el) => el && el.classList.add("visible"));
      return;
    }

    function clearAll() {
      timeoutsRef.current.forEach((t) => clearTimeout(t));
      timeoutsRef.current = [];
    }

    function runAnimationLoop() {
      clearAll();

      // Hide all first
      wordsRef.current.forEach((el) => {
        if (el) el.classList.remove("visible");
      });

      // Reveal words one by one
      wordsRef.current.forEach((el, i) => {
        const t = setTimeout(() => {
          if (el) el.classList.add("visible");
        }, i * wordDelay);
        timeoutsRef.current.push(t);
      });

      // After showing last word + loopDelay, restart the loop
      const restartT = setTimeout(() => {
        runAnimationLoop();
      }, titleWords.length * wordDelay + loopDelay);
      timeoutsRef.current.push(restartT);
    }

    runAnimationLoop();

    // cleanup on unmount
    return () => {
      clearAll();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once on mount

  return (


<>


    
    <section className="fsp-section" aria-labelledby="fsp-heading">
      <div className="fsp-card">
        <div className="fsp-grid">
          {/* LEFT 50% */}
          {/* <div className="fsp-left">
            <div className="fsp-left-inner">
            <h2 id="fsp-heading" className="fsp-title" aria-live="polite">
  {titleWords.map((w, i) => (
    <span
      key={i}
      className={`word ${w.className}`}
      ref={(el) => (wordsRef.current[i] = el)}
      style={{ ["--i"]: i + 1 }}
    >
      {w.text}
    </span>
  ))}
</h2>


              <p className="fsp-sub">
                Refresh, hydrate, and brighten your skin with our customised facial
                services designed for visible results.
              </p>

              <div className="fsp-actions">
                <button className="fsp-btn primary">Book Now</button>
                <button className="fsp-btn">View Services</button>
              </div>
            </div>
          </div> */}

        <FacialServicesTextAnnimation
  prefix="Professional "
  words={[
    { text: "Facial", className: "w-pink" },
    { text: "Treatments", className: "w-blue" },
  ]}
/>


          {/* RIGHT 50% (Carousel) */}
          <div className="fsp-right">
            <div
              className="fsp-carousel-wrap"
              role="region"
              aria-label="Facial images carousel"
            >
              <Carousel
                value={images}
                itemTemplate={imageTemplate}
                numVisible={1}
                numScroll={1}
                circular
                autoplayInterval={autoplayInterval}
                showIndicators
                showNavigators={false}
                className="fsp-carousel"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
