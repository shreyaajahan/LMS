import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Student() {
  const navigate = useNavigate();
  const name = localStorage.getItem('name');
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <main role="main" className="dashboard-container" aria-label="Student Dashboard">
      <div className="profile-bar">
        <p tabIndex="0">👤 {name} ({role})</p>
        <button onClick={handleLogout} className="logout-button" aria-label="Logout">
          Logout
        </button>
      </div>

      <h2 tabIndex="0">🎓 Student Dashboard</h2>
      <p tabIndex="0">Welcome, student! Here's what you can access:</p>

      <section aria-label="Student Options" className="card-section">
        <div className="card" tabIndex="0">
          <h3>📘 My Courses</h3>
          <p>View and access enrolled courses.</p>
        </div>
        <div className="card" tabIndex="0">
          <h3>📝 Assignments</h3>
          <p>Track deadlines and submit your work.</p>
        </div>
        <div className="card" tabIndex="0">
          <h3>📊 Progress</h3>
          <p>Check your academic progress and feedback.</p>
        </div>
      </section>
    </main>
  );
}

export default Student;
