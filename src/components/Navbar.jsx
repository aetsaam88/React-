import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">
        My<span>Estate</span>
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
<i className="fa-solid fa-bars"></i>
      </div>

      <ul className={menuOpen ? "active" : ""}>
        <li><a href="#">Home</a></li>
        <li className="properties-list-item">
          <a href="#">Properties</a>
          <ul className="dropdown">
            <li><a href="#">For Sale</a></li>
            <li><a href="#">For Rent</a></li>
            <li className="has-submenu">
              <a href="#">More</a>
              <ul className="sub-menu">
                <li><a href="#">Luxury</a></li>
                <li><a href="#">Budget</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><a href="#">About</a></li>
        <li><a href="#">Agents</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
