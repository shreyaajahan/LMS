import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Add this
import './Dashboard.css';

function Faculty() {
  const navigate = useNavigate(); // ✅ Hook to navigate

  const name = localStorage.getItem('name');
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <main role="main" className="dashboard-container" aria-label="Faculty Dashboard">
      <div className="profile-bar">
        <p tabIndex="0">👤 {name} ({role})</p>
        <button className="logout-button" onClick={handleLogout} aria-label="Logout">
          🔒 Logout
        </button>
      </div>

      <h2 tabIndex="0">👩‍🏫 Faculty Dashboard</h2>
      <p tabIndex="0">Welcome, faculty! Here's what you can manage:</p>

      <section aria-label="Faculty Options" className="card-section">
        <div className="card" tabIndex="0">
          <h3>📚 My Courses</h3>
          <p>Create and update your courses.</p>
        </div>
        
        {/* ✅ Clickable Upload Materials Card */}
        <div
          className="card"
          tabIndex="0"
          onClick={() => navigate('/upload')}
          onKeyDown={(e) => e.key === 'Enter' && navigate('/upload')}
          role="button"
          aria-pressed="false"
        >
          <h3>📤 Upload Materials</h3>
          <p>Share notes, lectures, and resources.</p>
        </div>

        <div className="card" tabIndex="0">
          <h3>🧑‍🎓 Track Students</h3>
          <p>Monitor student performance and feedback.</p>
        </div>
      </section>
    </main>
  );
}

export default Faculty;