import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/HotelDetails.css';

function HotelDetails({ hotel }) {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle the "Book Now" button click
  const handleBookNow = () => {
    navigate(`/booking`, { state: { hotel } }); // Pass the hotel data to the booking page
  };

  return (
    <div className="hotel-details">
      {/* Hotel Name */}
      <h1>{hotel.name}</h1>

      {/* Hotel Image */}
      <img src={hotel.image} alt={hotel.name} className="hotel-image" />

      {/* Hotel Description */}
      <p className="hotel-description">{hotel.description}</p>

      {/* Hotel Location */}
      <p className="hotel-location">📍 Location: {hotel.location}</p>

      {/* Room Types with Prices */}
      <div className="room-types">
        <h2>Room Types</h2>
        <ul>
          {hotel.roomTypes.map((room, index) => (
            <li key={index}>
              {room.type}: ${room.price} per night
            </li>
          ))}
        </ul>
      </div>

      {/* Available Amenities */}
      <div className="amenities">
        <h2>Amenities</h2>
        <ul>
          {hotel.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>

      {/* Reviews and Ratings */}
      <div className="reviews">
        <h2>Reviews</h2>
        {hotel.reviews.map((review, index) => (
          <div key={index} className="review">
            <p>
              <strong>{review.user}</strong> - {review.rating}/5
            </p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Book Now Button */}
      <button className="book-now-button" onClick={handleBookNow}>
        Book Now
      </button>
    </div>
  );
}

export default HotelDetails;