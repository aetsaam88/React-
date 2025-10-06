import React, { useState, useEffect } from "react";
import "../index.css";

const slides = [
  {
    image: "../assets/person_1.jpg.webp",
    status: "FOR RENT",
    title: "871 CRENSHAW BLVD",
    price: "$2,250,500",
  },
  {
    image: "src/assets/person_3.jpg.webp",
    status: "FOR SALE",
    title: "Modern Apartment",
    price: "$1,800,000",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay"></div>
          <div className="content">
            <p>{slide.status}</p>
            <h2>{slide.title}</h2>
            <h3>{slide.price}</h3>
            <button>SEE DETAILS</button>
          </div>
        </div>
      ))}

      <div className="arrow left" onClick={prevSlide}>
        &#10094;
      </div>
      <div className="arrow right" onClick={nextSlide}>
        &#10095;
      </div>

      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={i === current ? "active" : ""}
            onClick={() => setCurrent(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}
