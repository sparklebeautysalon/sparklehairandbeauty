import React, { useEffect, useState } from "react";

export default function TestimonialSlider() {
  const testimonials = [
    {
      text: "I had my bridal makeup done here, and it was flawless! Everyone complimented me. The team at MS Beauty Salon made me feel like a queen.",
      name: "Sophie Collins",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      text: "The salon is super clean and calming. I went in for a massage and left completely relaxed. Will definitely be coming back!",
      name: "Amelia Davies",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      text: "Absolutely loved my facial at MS Beauty Salon! The staff was so friendly and professional, and my skin has never looked better.",
      name: "Emily Thompson",
      image: "https://randomuser.me/api/portraits/women/52.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="testimonial-section">
      <style>{`
        :root {
          --green: #ff68c5;
          --bg-light: #fdfaf8;
        }

        .testimonial-section {
          background: var(--bg-light);
          padding: 80px 0;
          text-align: center;
        }

        .eyebrow {
          color: #666;
          text-transform: lowercase;
          font-weight: 500;
          font-size: 16px;
          margin-bottom: 8px;
        }

        .title {
          color: var(--green);
          font-weight: 800;
          font-size: clamp(32px, 5vw, 48px);
          margin-bottom: 50px;
        }

        .slider {
          display: flex;
          justify-content: center;
          transition: transform 0.6s ease;
        }

        .card {
          width: 320px;
          background: #f7f9f8;
          border-radius: 16px;
          padding: 40px 24px;
          margin: 0 12px;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
          opacity: 0.4;
          transform: scale(0.95);
          transition: all 0.5s ease;
        }

        .card.active {
          opacity: 1;
          transform: scale(1);
        }

        .text {
          font-style: italic;
          color: #444;
          line-height: 1.8;
          margin-bottom: 32px;
        }

        .avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 10px;
        }

        .name {
          color: var(--green);
          font-weight: 800;
          font-size: 15px;
        }

        .dots {
          margin-top: 32px;
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #e5d5d8;
          transition: background 0.3s ease;
        }

        .dot.active {
          background: #ffb2c0;
        }

        @media (max-width: 768px) {
          .card { width: 90%; margin: 0 auto; }
        }
      `}</style>

      <div className="eyebrow">testimonial</div>
      <h2 className="title">What Our Happy Clients Are Saying</h2>

      <div className="slider">
        {testimonials.map((t, i) => (
          <div key={i} className={`card ${i === index ? "active" : ""}`}>
            <p className="text">“{t.text}”</p>
            <img src={t.image} alt={t.name} className="avatar" />
            <div className="name">{t.name}</div>
          </div>
        ))}
      </div>

      <div className="dots">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}></div>
        ))}
      </div>
    </section>
  );
}
