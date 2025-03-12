import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Hotel Booking System</h1>
      <nav>
        <ul>
          {/* Link to Homepage */}
          <li>
            <Link to="/">Home</Link>
          </li>

          {/* Link to Hotel Listings Page */}
          <li>
            <Link to="/hotels">Hotels</Link>
          </li>

          {/* Link to Hotel Details Page (example for Hotel ID 1) */}
          <li>
            <Link to="/hotel/1">Hotel Details</Link>
          </li>

          {/* Link to User Dashboard */}
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>

          {/* Link to Admin Page */}
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;