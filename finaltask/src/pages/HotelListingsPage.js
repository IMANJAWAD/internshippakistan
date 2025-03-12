import React, { useState } from 'react';
import HotelList from '../components/HotelList';
import FiltersAndSort from '../components/FiltersAndSort'; // New component for filters and sorting
import '../styles/HotelList.css';

function HotelListingsPage() {
  const [filters, setFilters] = useState({
    priceRange: [0, 500], // Default price range
    rating: 0, // Default rating
    amenities: [], // Selected amenities
    location: '', // Selected location
  });

  const [sortOption, setSortOption] = useState('lowestPrice'); // Default sort option

  // Function to handle filter changes
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Function to handle sort changes
  const handleSortChange = (newSortOption) => {
    setSortOption(newSortOption);
  };

  return (
    <div className="hotel-listings-page">
      <h1>Hotel Listings</h1>
      <FiltersAndSort
        filters={filters}
        onFilterChange={handleFilterChange}
        sortOption={sortOption}
        onSortChange={handleSortChange}
      />
      <HotelList filters={filters} sortOption={sortOption} />
    </div>
  );
}

export default HotelListingsPage;