import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import HotelDetails from '../components/HotelDetails';
import '../styles/HotelDetails.css';

function HotelDetailsPage() {
  const { id } = useParams(); // Get the hotel ID from the URL

  // Example: Fetch hotel details based on the ID
  // For now, we'll use a dummy list of hotels
  const hotels = [
    {
      id: 1,
      name: 'Hotel Mountain Retreat Lodge',
      image: '/images/hotel1.png', // Placeholder image URL
      description: 'A luxurious hotel with great amenities.',
      location: 'City Aspen',
      roomTypes: [
        { type: 'Single Room', price: 100 },
        { type: 'Double Room', price: 150 },
        { type: 'Suite', price: 250 },
      ],
      amenities: ['WiFi', 'Pool', 'Gym', 'Restaurant'],
      reviews: [
        { user: 'John Doe', rating: 5, comment: 'Great stay!' },
        { user: 'Emma Watson', rating: 4, comment: 'Good experience.' },
      ],
    },
    {
      id: 2,
      name: 'Grand Vista Hotel',
      image: '/images/hotel2.png', // Placeholder image URL
      description: 'A cozy hotel with excellent service.',
      location: 'City NewYork',
      roomTypes: [
        { type: 'Single Room', price: 80 },
        { type: 'Double Room', price: 120 },
      ],
      amenities: ['WiFi', 'Restaurant'],
      reviews: [
        { user: 'Adam Sam', rating: 4.5, comment: 'Very comfortable.' },
      ],
    },
  ];

  // Find the hotel with the matching ID
  const hotel = hotels.find((h) => h.id === parseInt(id));

  // If the hotel is not found, display a message
  if (!hotel) {
    return <div>Hotel not found.</div>;
  }

  return (
    <div className="hotel-details-page">
      <HotelDetails hotel={hotel} /> {/* Pass the hotel object as a prop */}
    </div>
  );
}

export default HotelDetailsPage;