import React from 'react'
import AboutImg from "../../Images/aboutus/AboutUSbannerT2.png"
import "../NabBarLinks/AboutSection.css";
import Facial from "../../Images/facials/facialServices.png";
import Waxing from "../../Images/Waxing/waxingservices.png";
import HairStyle from "../../Images/hairservices/longlayershaircut.png";
import Threading from "../../Images/Threading/foreheadthreading1.png";
import WhyChooseUs from '../OurServicesCss/WhyChooseUs';


function SparkIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden>
      <path
        d="M12 2l2.2 5.3L20 9.5l-5.2 2.2L12 17l-2.8-5.3L4 9.5l5.8-2.2L12 2z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="currentColor"
        opacity=".85"
      />
    </svg>
  );
}

const defaultImages = [HairStyle, Facial, Threading, Waxing];

export default function AboutUspage({
  flip = false,
  images = defaultImages,
}) {
    return (
      <>
        <div style={{ marginTop: "100px" }}>
          <section>
            <div className="bannerparent">
              <img
                src={AboutImg}
                alt="tinting banner"
                style={{ width: "100%", height: "70%" }}
              />
            </div>
          </section>
        </div>
        <section className={`about container ${flip ? "flip" : ""}`}>
          {/* TEXT SIDE */}
          <div
            className={flip ? "order-2" : "order-1"}
            style={{ order: flip ? 2 : 1 }}>
            <h1 className="" style={{ color: "#ff1fa9" }}>
              Who we are
            </h1>
            <p className="body">
              Sparkle Hair And Beauty is a modern beauty studio offering a
              complete range of professional beauty and wellness services,
              including facials, waxing, threading, tinting, massages, and
              haircuts. Our mission is to provide high-quality, personalized
              beauty care in a clean, comfortable, and relaxing environment.
            </p>
            <div className="divider" />

            <div className="bullet">
              <div className="bullet-icon">
                <SparkIcon />
              </div>
              <div>
                <h4 className='colorPink'>Redfined Care</h4>
                <p>
                  At Sparkle Hair And Beauty, we focus on enhancing natural
                  beauty while ensuring every client enjoys a rejuvenating
                  experience.
                </p>
              </div>
            </div>
            <div className="bullet">
              <div className="bullet-icon">
                <SparkIcon />
              </div>
              <div>
                <h4>Expert Touch</h4>
                <p>
                  Our skilled team of beauty experts uses premium products and
                  advanced techniques to deliver outstanding results with care
                  and precision. Whether you’re looking for a quick beauty fix
                  or a full pampering session, Sparkle Hair And Beauty is your
                  destination for confidence, comfort, and complete self-care.
                </p>
              </div>
            </div>
          </div>

          {/* COLLAGE SIDE */}
          <div
            className={flip ? "order-1" : "order-2"}
            style={{ order: flip ? 1 : 2 }}>
            <div className="collage">
              {images.slice(0, 4).map((src, idx) => (
                <div className="imgWrap" key={idx}>
                  <img src={src} alt={`About collage ${idx + 1}`} />
                </div>
              ))}
              <div className="badge">
                <div className="badge-top">15+</div>
                <div className="badge-bottom">Years of Experience</div>
              </div>
            </div>
          </div>

          {/* <div className="card-aboutus">
        <div className="aboutitem item--3">
          <img
            src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=1200&auto=format&fit=crop"
            alt=""
            srcset=""
          />
          <span className="quantity">Facial</span>
        </div>
        <div className="aboutitem item--3">
          <img
            src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=1200&auto=format&fit=crop"
            alt=""
            srcset=""
          />
          <span className="quantity">Facial</span>
        </div>
        <div className="aboutitem item--3">
          <img
            src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=1200&auto=format&fit=crop"
            alt=""
            srcset=""
          />
          <span className="quantity">Facial</span>
        </div>
        <div className="aboutitem item--3">
          <img
            src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=1200&auto=format&fit=crop"
            alt=""
            srcset=""
          />
          <span className="quantity">Facial</span>
        </div>
      </div> */}
        </section>
          <WhyChooseUs />
      </>
    );
}


