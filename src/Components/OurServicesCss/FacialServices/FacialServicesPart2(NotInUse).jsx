import React from "react";


const items = [
  {
    title: "Gold Sehnaz Facialdddxdsdf",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1600&auto=format&fit=crop",
    duration: "1 hr",
    price: "£35",
  },
  {
    title: "Deep Cleansing Facial",
    img: "https://mssalon.co.uk/wp-content/uploads/2025/08/4246.jpg",
    duration: "1 hr",
    price: "£30",
  },
  {
    title: "Hydrating Facial",
    img: "https://mssalon.co.uk/wp-content/uploads/2025/08/4246.jpg",
    duration: "45 min",
    price: "£35",
  },
  {
    title: "Anti Aging / Collagen",
    img: "https://mssalon.co.uk/wp-content/uploads/2025/08/4246.jpg",
    duration: "1 hr",
    price: "£55",
  },
  {
    title: "Express Mini Facial",
    img: "https://mssalon.co.uk/wp-content/uploads/2025/08/4246.jpg",
    duration: "30 min",
    price: "£20",
  },
  {
    title: "Diamond Facial",
    img: "https://mssalon.co.uk/wp-content/uploads/2025/08/4246.jpg",
    duration: "1 hr",
    price: "£60",
  },
  {
    title: "Brightening Facial",
    img: "https://mssalon.co.uk/wp-content/uploads/2025/08/4246.jpg",
    duration: "45 min",
    price: "£40",
  },
  {
    title: "Acne Control Facial",
    img: "https://mssalon.co.uk/wp-content/uploads/2025/08/4246.jpg",
    duration: "1 hr",
    price: "£50",
  },
];

export default function FacialServicesGrid({
  data = items,
  ctaText = "Avail Now",
}) {
  return (
    <section className="facials container">
      <div className="grid">
        {data.map((s, i) => (
          <article className="card" key={i}>
            <div className="media">
              <div className="ratio" />
              <img src={s.img} alt={s.title} />
            </div>

            <div className="info">
              <h4 className="title">{s.title}</h4>
              <div className="details">
                <div className="meta">
                  {s.duration} {s.price}
                </div>
                <button
                  className="btn"
                  onClick={() => alert(`${s.title} → ${ctaText}`)}>
                  {ctaText}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
