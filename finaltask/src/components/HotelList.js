import React from 'react';

function HotelList({ filters, sortOption }) {
  // Sample hotel data
  const hotels = [
    { id: 1, name: 'Grand Vista Hotel', price: 150, rating: 4.5, booked: 120, amenities: ['wifi', 'pool'], location: 'New York' },
    { id: 2, name: 'Ocean Breeze Resort', price: 200, rating: 4.2, booked: 90, amenities: ['wifi', 'gym'], location: 'Miami' },
    { id: 3, name: 'Mountain Retreat Lodge', price: 100, rating: 3.8, booked: 80, amenities: ['pool', 'gym'], location: 'Aspen' },
  ];

  // Apply filters
  const filteredHotels = hotels.filter((hotel) => {
    const [minPrice, maxPrice] = filters.priceRange;
    return (
      hotel.price >= minPrice &&
      hotel.price <= maxPrice &&
      hotel.rating >= filters.rating &&
      (filters.location === '' || hotel.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      filters.amenities.every((amenity) => hotel.amenities.includes(amenity))
    );
  });

  // Apply sorting
  const sortedHotels = filteredHotels.sort((a, b) => {
    if (sortOption === 'lowestPrice') return a.price - b.price;
    if (sortOption === 'highestRating') return b.rating - a.rating;
    if (sortOption === 'mostBooked') return b.booked - a.booked;
    return 0;
  });

  return (
    <div className="hotel-list">
      {sortedHotels.map((hotel) => (
        <div key={hotel.id} className="hotel-card">
          <h3>{hotel.name}</h3>
          <p>Price: ${hotel.price}</p>
          <p>Rating: {hotel.rating} Stars</p>
          <p>Booked: {hotel.booked} times</p>
          <p>Amenities: {hotel.amenities.join(', ')}</p>
          <p>Location: {hotel.location}</p>
        </div>
      ))}
    </div>
  );
}

export default HotelList;