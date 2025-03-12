import React from 'react';
import '../styles/Footer.css'; // Import the corresponding CSS file


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <p>&copy; 2025 Hotel Booking System. All rights reserved.</p>
        </div>

        <nav className="footer-nav">
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </nav>

      </div>
    </footer>
  );
}

export default Footer;
