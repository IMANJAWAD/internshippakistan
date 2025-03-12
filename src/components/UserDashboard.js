import React, { useState } from 'react';
import '../styles/UserDashboard.css';

function UserDashboard() {
  // Dummy data for bookings
  const [bookings, setBookings] = useState([
    { id: 1, hotel: 'Mountain Retreat Lodge', date: '2025-03-15', status: 'Confirmed' },
    { id: 2, hotel: 'Grand Vista Hotel', date: '2025-04-01', status: 'Pending' },
    { id: 3, hotel: 'Ocean Breeze Resort', date: '2024-12-25', status: 'Completed' },
  ]);

  // State for profile settings
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: '',
    avatar: '',
  });

  // Function to cancel a booking
  const handleCancelBooking = (id) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
  };

  // Function to modify a booking
  const handleModifyBooking = (id) => {
    alert(`Modify booking with ID: ${id}`);
    // Add logic to modify the booking
  };

  // Function to handle profile updates
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
    // Add logic to update the profile
  };

  // Function to handle avatar upload
  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="user-dashboard">
      <h1>User Dashboard</h1>

      {/* Current Bookings */}
      <h2>Current Bookings</h2>
      <ul>
        {bookings
          .filter((booking) => booking.status !== 'Completed')
          .map((booking) => (
            <li key={booking.id}>
              {booking.hotel} - {booking.date} - {booking.status}
              <button onClick={() => handleCancelBooking(booking.id)}>Cancel</button>
              <button onClick={() => handleModifyBooking(booking.id)}>Modify</button>
            </li>
          ))}
      </ul>

      {/* Past Bookings */}
      <h2>Past Bookings</h2>
      <ul>
        {bookings
          .filter((booking) => booking.status === 'Completed')
          .map((booking) => (
            <li key={booking.id}>
              {booking.hotel} - {booking.date} - {booking.status}
            </li>
          ))}
      </ul>

      {/* Profile Settings */}
      <h2>Profile Settings</h2>
      <form onSubmit={handleProfileUpdate}>
        <label>Name:</label>
        <input
          type="text"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        />

        <label>Email:</label>
        <input
          type="email"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        />

        <label>Password:</label>
        <input
          type="password"
          value={profile.password}
          onChange={(e) => setProfile({ ...profile, password: e.target.value })}
        />

        <label>Avatar:</label>
        <input type="file" accept="image/*" onChange={handleAvatarUpload} />
        {profile.avatar && (
          <img src={profile.avatar} alt="Avatar" className="avatar-preview" />
        )}

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default UserDashboard;