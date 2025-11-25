import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"; // optional: remove if not using react-router
import "./services-page.css";
import Hair from "../Images/hairservices/longlayershaircut.png";
import Facial from "../Images/facials/facialServices.png";
import Threading from "../Images/Threading/foreheadthreading1.png";
import Waxing from "../Images/Waxing/waxingservices.png";
import Tinting from "../Images/Tinting/TintingService.png";
import Massage from "../Images/massages/headmessage3.png";

export default function CommonServices() {
  const services = [
    {
      key: "hair",
      title: "HAIRDRESSING",
      short:
        " Beautiful hair begins with the right care. Enjoy personalised cuts and styling that flatter your features and leave you feeling confident.",
      img: Hair,
      items: [
        {
          name: "UNIFORM LAYERS",
          price: "£10.00",
          desc: "Uniform layered haircut",
        },
        {
          name: "BUTTERFLY CUT",
          price: "£20.00",
          desc: "Butterfly style haircut",
        },
        {
          name: "LONG LAYER CUT",
          price: "£22.00",
          desc: "Long layered haircut",
        },
        {
          name: "CHOPPY LAYERS",
          price: "£25.00",
          desc: "Choppy textured layer haircut",
        },
        {
          name: "FEATHERED LAYERS",
          price: "£15.00",
          desc: "Soft feathered layers",
        },
        {
          name: "FACE-FRAMING LAYERS",
          price: "£25.00",
          desc: "Face-framing layered cut",
        },
        {
          name: "BLOW DRY",
          price: "£32.00",
          desc: "Professional blow dry",
        },
        {
          name: "FRINGE CUT",
          price: "£30.00",
          desc: "Fringe / bangs trim",
        },
        {
          name: "DRY HAIRCUT (STRAIGHT)",
          price: "£30.00",
          desc: "Simple dry straight cut",
        },
        {
          name: "DRY ‘U’ HAIRCUT",
          price: "£28.00",
          desc: "U-shaped dry haircut",
        },
        {
          name: "DRY ‘V’ HAIRCUT",
          price: "£15.00",
          desc: "V-shaped dry haircut",
        },
        {
          name: "BABY CUT",
          price: "£20.00",
          desc: "Kids / baby haircut",
        },
      ],
    },
    {
      key: "facials",
      title: "FACIALS",
      short:
        " Pamper your skin with our gentle, rejuvenating facials for deep hydration and a radiant glow.",
      img: Facial,
      note: "Important: For facial treatments, please arrive with a clean face (no heavy makeup). Inform us of allergies or recent dermal treatments before booking.",
      items: [
        {
          name: "EXPRESS MINI FACIAL",
          price: "£22.00",
          desc: "Approx 20 mins(inc. cleanse, tone, mask & moisturiser)",
        },
        {
          name: "GOLD FACIAL",
          price: "£22.00",
          desc: "Approx 30 mins(inc. cleanse, exfoliation, steam, extraction, massage, mask & moisturiser)",
        },
        {
          name: "DIAMOND FACIAL",
          price: "£35.00",
          desc: "Approx 45 mins(inc. cleanse, exfoliation, steam, extraction, massage, toner, mask & moisturiser)",
        },
        {
          name: "RELAXING FACIAL",
          price: "£32.00",
          desc: "Approx 45 mins(inc. cleanse, exfoliation, steam, extraction, massage, toner, mask & moisturiser)",
        },
        {
          name: "LUXURY FACIAL",
          price: "£42.00",
          desc: "1hr (inc. cleanse, exfoliation, steam, extraction, massage, toner, mask, moisturiser & serum. face bleach included but optional)",
        },
        {
          name: "VITAMIN C FACIAL",
          price: "£40.00",
          desc: "Approx 30 min  (inc. cleanse, exfoliation, steam, extraction, massage, toner, mask & serum)",
        },
        {
          name: "Oxy FACIAL",
          price: "£45.00",
          desc: "Approx 20 mins (inc. cleanse, exfoliation, steam, extraction, massage, toner, mask & serum)",
        },
        {
          name: "FACE BLEACH",
          price: "£15.00",
          desc: "Approx 15 mins (inc. bleach, cleanse & moisturiser)",
        },
      ],
    },
    {
      key: "threading",
      title: "THREADING",
      short:
        " Precise threading to give you clean, natural-looking brows that frame your face.",
      img: Threading,
      items: [
        { name: "EYEBROWS", price: "£5.00", desc: "Eyebrow threading" },
        {
          name: "UPPER / LOWER LIP",
          price: "£4.00",
          desc: "Upper or lower lip threading",
        },
        { name: "FOREHEAD", price: "£4.00", desc: "Forehead threading" },
        { name: "CHIN", price: "£4.00", desc: "Chin threading" },
        { name: "SIDES", price: "£8.00", desc: "Sides of face threading" },
        { name: "NECK", price: "£7.00", desc: "Neck threading" },
        {
          name: "BETWEEN BROWS",
          price: "£2.00",
          desc: "Between eyebrows clean up",
        },
        { name: "FULL FACE", price: "£20.00", desc: "Full face threading" },
      ],
    },
    {
      key: "waxing",
      title: "WAXING",
      short:
        "Professional waxing for smooth, long-lasting results using gentle techniques and premium products.",
      img: Waxing,
      items: [
        {
          name: "EYEBROWS",
          price: "£5.00",
          desc: "Eyebrow waxing",
        },
        {
          name: "UPPER / LOWER LIP",
          price: "£4.00",
          desc: "Upper or lower lip wax",
        },
        {
          name: "BETWEEN BROWS",
          price: "£2.00",
          desc: "Between eyebrows wax",
        },

        // row 2
        {
          name: "NOSTRILS (INSIDE NOSE)",
          price: "£7.00",
          desc: "Inside nose nostril wax",
        },
        {
          name: "NOSE (OUTSIDE NOSE)",
          price: "£2.00",
          desc: "Outside nose wax",
        },
        { name: "FOREHEAD", price: "£4.00", desc: "Forehead waxing" },

        // row 3
        { name: "CHIN", price: "£4.00", desc: "Chin waxing" },
        {
          name: "SIDE BURNS",
          price: "£4.00",
          desc: "Sideburns waxing",
        },
        { name: "SIDES", price: "£8.00", desc: "Sides of face waxing" },

        // row 4
        {
          name: "NECK (FRONT)",
          price: "£7.00",
          desc: "Front neck waxing",
        },
        {
          name: "EAR LOBES",
          price: "£5.00",
          desc: "Ear lobe wax",
        },
        {
          name: "FULL FACE (EXCLUDING NECK)",
          price: "£20.00",
          desc: "Full face wax without neck",
        },

        // row 5
        {
          name: "FULL ARMS (INCLUDING UNDERARMS)",
          price: "£20.00",
          desc: "Full arms plus underarms",
        },
        {
          name: "FULL ARMS (EXCLUDING UNDERARMS)",
          price: "£18.00",
          desc: "Full arms without underarms",
        },
        {
          name: "HALF ARMS",
          price: "£12.00",
          desc: "Half arm waxing",
        },

        // row 6
        {
          name: "UNDER ARMS",
          price: "£7.00",
          desc: "Underarm waxing",
        },
        {
          name: "SHOULDERS",
          price: "£8.00",
          desc: "Shoulder waxing",
        },
        {
          name: "CHEST",
          price: "£10.00",
          desc: "Chest waxing",
        },

        // row 7
        {
          name: "STOMACH",
          price: "£6.00",
          desc: "Stomach waxing",
        },
        {
          name: "NAVAL",
          price: "£4.00",
          desc: "Navel area wax",
        },
        {
          name: "TOES",
          price: "£5.00",
          desc: "Toe waxing",
        },

        // row 8
        {
          name: "FULL BACK",
          price: "£16.00",
          desc: "Full back waxing",
        },
        {
          name: "BIKINI",
          price: "£12.00",
          desc: "Standard bikini wax",
        },
        {
          name: "BRAZILIAN",
          price: "£17.00",
          desc: "Brazilian waxing",
        },

        // row 9
        {
          name: "BOLLYWOOD",
          price: "£22.00",
          desc: "Bollywood bikini style wax",
        },
        {
          name: "BUTTOCKS",
          price: "£8.00",
          desc: "Buttocks waxing",
        },
        { name: "FULL LEGS", price: "£20.00", desc: "Full leg waxing" },

        // row 10
        {
          name: "LOWER HALF LEGS",
          price: "£12.00",
          desc: "Lower half leg waxing",
        },
        {
          name: "UPPER HALF LEGS",
          price: "£14.00",
          desc: "Upper half leg waxing",
        },
        {
          name: "FULL BODY",
          price: "£70.00",
          desc: "Complete full body wax",
        },
      ],
    },
    {
      key: "tinting",
      title: "TINTING",
      short:
        " Get bold, beautifully defined brows and lashes with long-lasting tinting.",
      img: Tinting,
      note: "Important: A patch test is required at least 48 hours prior to tinting & perming to ensure no sensitivity to the product exists.",
      items: [
        {
          name: "EYEBROW TINT",
          price: "£8.00",
          desc: "Eyebrow tint (3–4 mins)",
        },
        {
          name: "EYELASH TINT",
          price: "£12.00",
          desc: "Eyelash tint (7–8 mins)",
        },
        {
          name: "LASH LIFT (INC. TINT)",
          price: "£28.00",
          desc: "Lash lift with tint included",
        },
      ],
    },
    {
      key: "massage",
      title: "MASSAGE",
      short:
        " Reset your body with tension-relieving massages that refresh and restore.",
      img: Massage,
      items: [
        {
          name: "INDIAN HEAD MASSAGE",
          price: "£22.00",
          desc: "Traditional relaxing Indian head massage",
        },
      ],
    },
  ];

  const [selectedKey, setSelectedKey] = useState(services[0].key);
  const selected = services.find((s) => s.key === selectedKey);

  // accordion state
  const [openIndex, setOpenIndex] = useState(null);
  const toggleIndex = (idx) =>
    setOpenIndex((prev) => (prev === idx ? null : idx));

  // mobile sidebar state
  const [mobileOpen, setMobileOpen] = useState(false);

  // ref to main content so we can scroll on mobile
  const mainRef = useRef(null);

  // close mobile panel and scroll to main content when a nav item is clicked
  const handleNavClick = (key) => {
    setSelectedKey(key);
    setOpenIndex(null);

    // if mobile, close panel and scroll into view
    // we don't need a precise "is mobile" check — closing and scrolling is harmless on desktop
    setMobileOpen(false);

    // scroll main content into view after the panel closes (give the close animation a tiny tick)
    window.setTimeout(() => {
      if (mainRef.current) {
        mainRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 160);
  };

  // optional: close mobile panel when window is resized to desktop width
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 880 && mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mobileOpen]);

  return (
    <div className="svc-page-root">
      {/* Mobile Header */}
      <div className="mobile-header">
        {/* <button
          className="mobile-menu-toggle"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}>
          <span className={`hamburger ${mobileOpen ? "open" : ""}`} />
        </button> */}
      </div>

      {/* Mobile Overlay */}
      <div
        className={`svc-overlay ${mobileOpen ? "visible" : ""}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden={!mobileOpen}
      />

      {/* Left Sidebar */}
      <aside className={`svc-left ${mobileOpen ? "mobile-open" : ""}`}>
        <div className="svc-left-inner">
          <div className="svc-left-cta">
            {/* SERVICE LIST */}
            {services.map((s) => (
              <button
                key={s.key}
                className={`svc-nav-item ${
                  s.key === selectedKey ? "active" : ""
                }`}
                onClick={() => handleNavClick(s.key)}
                aria-current={s.key === selectedKey ? "true" : "false"}>
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="svc-right" ref={mainRef}>
        <div className="svc-right-inner">
          <h1 className="svc-title">{selected.title}</h1>

          <p className="svc-desc">{selected.short}</p>
          {/* OPTIONAL SERVICE NOTE (only shown when a service has a note property) */}
          {selected.note && (
            <div className="svc-note" role="note" aria-live="polite">
              <div className="svc-note-text">{selected.note}</div>
            </div>
          )}

          <div className="svc-right-body">
            <div className="svc-avatar">
              <img src={selected.img} alt={selected.title} />
            </div>

            <div className="svc-items">
              {selected.items.map((it, idx) => (
                <div
                  className={`svc-item ${openIndex === idx ? "open" : ""}`}
                  key={idx}>
                  <button
                    className="svc-item-head"
                    onClick={() => toggleIndex(idx)}
                    aria-expanded={openIndex === idx}>
                    <span className="svc-item-title">{it.name}</span>
                    <span className="svc-item-price">{it.price}</span>
                  </button>

                  <div
                    className="svc-item-body"
                    style={{ maxHeight: openIndex === idx ? "200px" : "0px" }}
                    aria-hidden={openIndex !== idx}>
                    <div className="svc-item-body-inner">
                      <p>
                        {it.desc ||
                          "Duration and other details available on booking."}
                      </p>

                      <Link to="/services" className="svc-cta-small">
                        Explore More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
