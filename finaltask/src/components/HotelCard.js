import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/HotelCard.css';

function HotelCard({ hotel }) {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle the "View Details" button click
  const handleViewDetails = () => {
    navigate(`/hotel/${hotel.id}`); // Navigate to the hotel details page with the hotel ID
  };

  return (
    <div className="hotel-card">
      <h2>{hotel.name}</h2>
      <p>Price: ${hotel.price}</p>
      <p>Rating: {hotel.rating}</p>
      <button onClick={handleViewDetails}>View Details</button> {/* Add onClick handler */}
    </div>
  );
}

export default HotelCard;