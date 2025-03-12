import React from 'react';
import UserDashboard from '../components/UserDashboard';
import '../styles/UserDashboard.css';

function DashboardPage() {
  return (
    <div className="dashboard-page">
      <h1>User Dashboard</h1>
      <UserDashboard />
    </div>
  );
}

export default DashboardPage;