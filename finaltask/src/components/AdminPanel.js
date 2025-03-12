import React, { useState } from 'react';
import '../styles/AdminPanel.css';

function AdminPanel() {
  // State for hotels
  const [hotels, setHotels] = useState([
    { id: 1, name: 'Hotel Asteria', rooms: 10 },
    { id: 2, name: 'Grand Vista Hotel', rooms: 15 },
    { id: 3, name: 'Ocean Breeze Resort', rooms: 20 },
  ]);

  // State for the form (add/edit hotel)
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    rooms: '',
  });

  // State for all bookings
  const [bookings, setBookings] = useState([
    { id: 1, hotel: 'Hotel Asteria', guest: 'John Doe', date: '2025-03-15', status: 'Confirmed' },
    { id: 2, hotel: 'Grand Vista Hotel', guest: 'Jane Smith', date: '2025-04-01', status: 'Pending' },
    { id: 3, hotel: 'Ocean Breeze Resort', guest: 'Alice Johnson', date: '2024-12-25', status: 'Completed' },
  ]);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to add or update a hotel
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      // Update existing hotel
      setHotels(
        hotels.map((hotel) =>
          hotel.id === formData.id ? { ...hotel, name: formData.name, rooms: formData.rooms } : hotel
        )
      );
    } else {
      // Add new hotel
      const newHotel = {
        id: hotels.length + 1,
        name: formData.name,
        rooms: formData.rooms,
      };
      setHotels([...hotels, newHotel]);
    }
    setFormData({ id: null, name: '', rooms: '' }); // Reset form
  };

  // Function to edit a hotel
  const handleEdit = (hotel) => {
    setFormData({ id: hotel.id, name: hotel.name, rooms: hotel.rooms });
  };

  // Function to delete a hotel
  const handleDelete = (id) => {
    setHotels(hotels.filter((hotel) => hotel.id !== id));
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>

      {/* Add/Edit Hotel Form */}
      <h2>Manage Hotels</h2>
      <form onSubmit={handleSubmit}>
        <label>Hotel Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <label>Number of Rooms:</label>
        <input
          type="number"
          name="rooms"
          value={formData.rooms}
          onChange={handleInputChange}
          required
        />
        <button type="submit">{formData.id ? 'Update Hotel' : 'Add Hotel'}</button>
      </form>

      {/* List of Hotels */}
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            {hotel.name} - Rooms: {hotel.rooms}
            <button onClick={() => handleEdit(hotel)}>Edit</button>
            <button onClick={() => handleDelete(hotel.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* All Bookings */}
      <h2>All Bookings</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            <strong>{booking.hotel}</strong> - Guest: {booking.guest} - Date: {booking.date} - Status: {booking.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;