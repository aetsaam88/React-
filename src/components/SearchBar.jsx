import React from "react";

const SearchBar = () => {
  return (
    <section className="search-section">
      <div className="search-bar-container">
        <div className="filter-group">
          <label>Property Type</label>
          <select>
            <option>House</option>
            <option>Apartment</option>
            <option>Plot</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Location</label>
          <select>
            <option>Islamabad</option>
            <option>Lahore</option>
            <option>Karachi</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Price Range</label>
          <select>
            <option>$1000 - $2000</option>
            <option>$2000 - $5000</option>
          </select>
        </div>
        <button className="search-button">Search</button>
      </div>
    </section>
  );
};

export default SearchBar;
