import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import BookingForm from '../components/BookingForm';
import '../styles/BookingForm.css';

function BookingPage() {
  const location = useLocation(); // Get the location object
  const hotel = location.state?.hotel; // Extract the hotel data from the location state

  return (
    <div className="booking-page">
      <h1>Booking for {hotel ? hotel.name : 'Unknown Hotel'}</h1>
      <BookingForm hotel={hotel} /> {/* Pass the hotel data to the BookingForm */}
    </div>
  );
}

export default BookingPage;