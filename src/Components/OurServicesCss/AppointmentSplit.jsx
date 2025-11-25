import React, { useRef, useState } from "react";
import "./AppointmentSplit.css";
import { Toast } from "primereact/toast";
export default function AppointmentSplit() {
  const toast = useRef(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    time: "",
    date: "",
    message: "",
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Form submitted successfully.",
      life: 3000,
    });
    setForm({
      name: "",
      phone: "",
      email: "",
      time: "",
      date: "",
      message: "",
    });
  };

  return (
    <section className="ap-section">
      <Toast ref={toast} />
      {/* Decorative full-bleed gradient header (like the image) */}
      <div className="ap-hero">
        <div className="ap-hero-inner"></div>
      </div>
      <div className="ap-container">
        <div className="ap-card-shell">
          <div className="ap-card">
            <div className="ap-card-left">
              <div className="ap-eyebrow">Schedule Your Appointment Today</div>
              <h2 className="ap-title">Redefining Beauty with Excellence</h2>
              <p className="ap-body">
                Experience refined, personalised beauty care designed to elevate
                your natural elegance and empower you with lasting confidence.
              </p>
              <div className="ap-hr" />
              <div className="ap-subhead">The Beauty Advantage:</div>
              <ul className="ap-list">
                <li>
                  <span className="ap-check">✓</span>
                  <span>
                    services that are tailored to your particular skin type and
                    fashion preferences.
                  </span>
                </li>
                <li>
                  <span className="ap-check">✓</span>
                  <span>
                    In a hygienic, sanitized setting, we employ premium,
                    skin-safe products.
                  </span>
                </li>
                <li>
                  <span className="ap-check">✓</span>
                  <span>
                    Skilled beauty experts offering personalised care with safe,
                    premium products in a clean and hygienic space.
                  </span>
                </li>
              </ul>
              <div className="ap-contacts">
                <div className="ap-chip">
                  <div className="ap-icon">📞</div>
                  <div>
                    <div className="label">Support That Cares</div>
                    <div className="value">07944733339</div>
                  </div>
                </div>
                <div className="ap-chip">
                  <div className="ap-icon">✉️</div>
                  <div>
                    <div className="label">Email Us</div>
                    <div className="value">info@sparklebeautystudio.co.uk</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ap-card-right">
              <div className="ap-card-title">Book an Appointment</div>
              <form className="ap-form" onSubmit={onSubmit}>
                <div className="ap-row">
                  <input
                    className="ap-input"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={onChange}
                  />
                  <input
                    className="ap-input"
                    name="phone"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={onChange}
                  />
                </div>

                <div className="ap-field">
                  <input
                    className="ap-input"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={onChange}
                  />
                </div>

                <div className="ap-row">
                  <div className="ap-input-icon">
                    <input
                      className="ap-input"
                      name="time"
                      type="time"
                      placeholder="--:-- --"
                      value={form.time}
                      onChange={onChange}
                    />
                    <span className="icon">🕒</span>
                  </div>

                  <div className="ap-input-icon">
                    <input
                      className="ap-input"
                      name="date"
                      type="date"
                      placeholder="mm/dd/yyyy"
                      value={form.date}
                      onChange={onChange}
                    />
                    {/* <span className="icon">📅</span> */}
                  </div>
                </div>

                <div className="ap-field">
                  <textarea
                    className="ap-textarea"
                    name="message"
                    placeholder="Message"
                    value={form.message}
                    onChange={onChange}
                  />
                </div>

                <button className="ap-cta" type="submit">
                  Book Now!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
