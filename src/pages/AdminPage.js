import React from 'react';
import AdminPanel from '../components/AdminPanel';
import '../styles/AdminPanel.css';

function AdminPage() {
  return (
    <div className="admin-page">
      <h1>Admin Panel</h1>
      <AdminPanel />
    </div>
  );
}

export default AdminPage;