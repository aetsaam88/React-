import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-section about">
        <h2>About Us</h2>
        <p>We help people find their dream homes across Pakistan with verified listings and trusted agents.</p>
      </div>

      <div className="footer-section navigations">
        <h2>Navigation</h2>
        <ul className="navigation-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">Properties</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div className="footer-section socials">
        <h2>Follow Us</h2>
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© 2025 MyEstate. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
