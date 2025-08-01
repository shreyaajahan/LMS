import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Check login on component mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser) {
      navigate('/login'); // Redirect if not logged in
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <main role="main" aria-label="Dashboard Page" className="dashboard-container" style={{ padding: '2rem' }}>
      {user ? (
        <>
          <h1 tabIndex="0">Welcome, {user.name} 👋</h1>
          <p tabIndex="0">You are logged in as a <strong>{user.role}</strong>.</p>

          <section aria-label="Dashboard Actions" style={{ marginTop: '2rem' }}>
            <button onClick={handleLogout} aria-label="Logout from Dashboard" style={{
              backgroundColor: '#dc2626',
              color: '#fff',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer'
            }}>
              Logout
            </button>
          </section>
        </>
      ) : (
        <p>Loading user information...</p>
      )}
    </main>
  );
}

export default Dashboard;
