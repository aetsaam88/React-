import React from "react";

const PropertyList = () => {
  const properties = [
    { id: 1, img: "src/assets/img_8.jpg.webp", title: "Luxury Villa", address: "Sector F-8, Islamabad", price: "$450,000" },
    { id: 2, img: "src/assets/img_7.jpg.webp", title: "Modern Apartment", address: "Bahria Town, Lahore", price: "$200,000" },
    { id: 3, img: "src/assets/img_6.jpg.webp", title: "Family Home", address: "DHA Phase 5, Karachi", price: "$350,000" },
  ];

  return (
    <div className="property-listings contaner">
      {properties.map((p) => (
        <div key={p.id} className="property-card">
          <div className="card-image">
            <img src={p.img} alt={p.title} />
            <div className="tags"><span className="tag sale">For Sale</span></div>
            <div className="favorite"><i className="fa fa-heart"></i></div>
          </div>
          <div className="card-content">
            <h3>{p.title}</h3>
            <p className="address"><i className="fa fa-map-marker"></i> {p.address}</p>
            <p className="price">{p.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;

