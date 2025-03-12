import React from 'react';

function FiltersAndSort({ filters, onFilterChange, sortOption, onSortChange }) {
  // Handle price range change
  const handlePriceRangeChange = (e) => {
    const value = e.target.value.split('-').map(Number);
    onFilterChange({ ...filters, priceRange: value });
  };

  // Handle rating change
  const handleRatingChange = (e) => {
    onFilterChange({ ...filters, rating: Number(e.target.value) });
  };

  // Handle amenities change
  const handleAmenitiesChange = (e) => {
    const amenity = e.target.value;
    const updatedAmenities = e.target.checked
      ? [...filters.amenities, amenity]
      : filters.amenities.filter((item) => item !== amenity);
    onFilterChange({ ...filters, amenities: updatedAmenities });
  };

  // Handle location change
  const handleLocationChange = (e) => {
    onFilterChange({ ...filters, location: e.target.value });
  };

  // Handle sort option change
  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div className="filters-and-sort">
      {/* Price Range Filter */}
      <div className="filter-group">
        <label>Price Range:</label>
        <select onChange={handlePriceRangeChange}>
          <option value="0-100">$0 - $100</option>
          <option value="100-200">$100 - $200</option>
          <option value="200-500">$200 - $500</option>
        </select>
      </div>

      {/* Rating Filter */}
      <div className="filter-group">
        <label>Minimum Rating:</label>
        <select onChange={handleRatingChange}>
          <option value="0">Any</option>
          <option value="3">3 Stars & Up</option>
          <option value="4">4 Stars & Up</option>
          <option value="5">5 Stars</option>
        </select>
      </div>

      {/* Amenities Filter */}
      <div className="filter-group">
        <label>Amenities:</label>
        <div>
          <label>
            <input
              type="checkbox"
              value="wifi"
              checked={filters.amenities.includes('wifi')}
              onChange={handleAmenitiesChange}
            />
            WiFi
          </label>
          <label>
            <input
              type="checkbox"
              value="pool"
              checked={filters.amenities.includes('pool')}
              onChange={handleAmenitiesChange}
            />
            Pool
          </label>
          <label>
            <input
              type="checkbox"
              value="gym"
              checked={filters.amenities.includes('gym')}
              onChange={handleAmenitiesChange}
            />
          </label>
        </div>
      </div>

      {/* Location Filter */}
      <div className="filter-group">
        <label>Location:</label>
        <input
          type="text"
          placeholder="Enter location"
          value={filters.location}
          onChange={handleLocationChange}
        />
      </div>

      {/* Sort Options */}
      <div className="sort-group">
        <label>Sort By:</label>
        <select value={sortOption} onChange={handleSortChange}>
          <option value="lowestPrice">Lowest Price</option>
          <option value="highestRating">Highest Rating</option>
          <option value="mostBooked">Most Booked</option>
        </select>
      </div>
    </div>
  );
}

export default FiltersAndSort;