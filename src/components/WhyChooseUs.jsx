import React from "react";

const WhyChooseUs = () => (
  <section className="why-choose-us-section containe">
    <div className="section-header">
      <h2>Why Choose Us</h2>
      <p>We are Pakistan’s most trusted property portal, connecting buyers with top sellers.</p>
    </div>

    <div className="features-grid">
      <div className="feature-item">
        <div className="icon"><i className="fa fa-sign"></i></div>
        <h3>Verified Listings</h3>
        <p>Every property is verified before going live on our platform.</p>
      </div>
      <div className="feature-item">
        <div className="icon"><i className="fa fa-video"></i></div>
        <h3>Virtual Tours</h3>
        <p>Explore homes online before visiting physically.</p>
      </div>
      <div className="feature-item">
        <div className="icon"><i className="fa fa-home"></i></div>
        <h3>Expert Agents</h3>
        <p>Our experienced agents are ready to guide you.</p>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
