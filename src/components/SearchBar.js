import React, { useState } from "react";
import "../styles/SearchBar.css"; // Ensure the CSS file exists

function SearchBar() {
  const [searchData, setSearchData] = useState({
    city: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    console.log("Searching for:", searchData);
    // Implement API call or filtering logic here
  };

  return (
    <div className="search-bar">
      <h2>Search Hotels By:</h2>
      <div className="search-fields">
        <div className="search-group">
          <label>City:</label>
          <input
            type="text"
            name="city"
            placeholder="Enter city name"
            value={searchData.city}
            onChange={handleChange}
          />
        </div>

        <div className="search-group">
          <label>Check-in Date:</label>
          <input
            type="date"
            name="checkIn"
            value={searchData.checkIn}
            onChange={handleChange}
          />
        </div>

        <div className="search-group">
          <label>Check-out Date:</label>
          <input
            type="date"
            name="checkOut"
            value={searchData.checkOut}
            onChange={handleChange}
          />
        </div>

        <div className="search-group">
          <label>Guests:</label>
          <input
            type="number"
            name="guests"
            min="1"
            value={searchData.guests}
            onChange={handleChange}
          />
        </div>

        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;