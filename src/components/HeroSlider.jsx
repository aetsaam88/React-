import React, { useState, useEffect } from "react";

const slides = [
  { image: "./assets/img_1.jpg.webp", title: "Find Your Dream Home", subtitle: "Luxury Apartments & Villas" },
  { image: "./assets/img_2.jpg.webp", title: "Modern Living", subtitle: "Comfort & Elegance" },
  { image: "./assets/img_3.jpg.webp", title: "Trusted Property Experts", subtitle: "Buy, Sell or Rent" },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
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
            <p>Featured</p>
            <h2>{slide.title}</h2>
            <h3>{slide.subtitle}</h3>
            <button>Explore Now</button>
          </div>
        </div>
      ))}

      <div className="arrow left" onClick={prevSlide}>❮</div>
      <div className="arrow right" onClick={nextSlide}>❯</div>
    </div>
  );
};

export default HeroSlider;

