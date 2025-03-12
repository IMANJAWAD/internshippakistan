import React from 'react';
import SearchBar from '../components/SearchBar';
import '../styles/HomePage.css'; // Ensure this path is correct

function HomePage() {
  const featuredHotels = [
    { id: 1, name: "Grand Vista Hotel", location: "New York, USA", image: "/images/hotel1.png" },
    { id: 2, name: "Ocean Breeze Resort", location: "Miami, USA", image: "/images/hotel2.png" },
    { id: 3, name: "Mountain Retreat Lodge", location: "Aspen, USA", image: "/images/hotel3.png" }
  ];

  const popularDestinations = [
    { id: 1, name: "Paris, France", image: "/images/paris.png" },
    { id: 2, name: "Tokyo, Japan", image: "/images/tokyo.png" },
    { id: 3, name: "Dubai, UAE", image: "/images/dubai.png" }
  ];

  return (
    <div className="home-page">
      <SearchBar />

      {/* Featured Hotels */}
      <section className="featured-hotels">
        <h2>Featured Hotels</h2>
        <div className="hotel-grid">
          {featuredHotels.map((hotel) => (
            <div key={hotel.id} className="hotel-card">
              <img src={hotel.image} alt={hotel.name} />
              <h3>{hotel.name}</h3>
              <p>{hotel.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="popular-destinations">
        <h2>Popular Destinations</h2>
        <div className="destination-grid">
          {popularDestinations.map((destination) => (
            <div key={destination.id} className="destination-card">
              <img src={destination.image} alt={destination.name} />
              <h3>{destination.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;