import React from 'react';
import '../styles/BookingForm.css';

function BookingForm({ hotel }) {
  return (
    <div className="booking-form">
      {hotel && <p>You are booking: <strong>{hotel.name}</strong></p>}
      <form>
        <label>Name:</label>
        <input type="text" required />
        <label>Email:</label>
        <input type="email" required />
        <label>Phone:</label>
        <input type="tel" required />
        <label>Room Type:</label>
        <select required>
          <option value="single">Single Room</option>
          <option value="double">Double Room</option>
          <option value="suite">Suite</option>
        </select>
        <label>Number of Nights:</label>
        <input type="number" required />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default BookingForm;