// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <main className="home-container" role="main" aria-label="Welcome to EduAccess LMS">
      <div className="home-content">
        <h1 className="home-title" tabIndex="0">📚 EduAccess LMS</h1>

        <p className="home-subtitle" tabIndex="0">
          Empowering <strong>students</strong>, <strong>educators</strong>, and <strong>administrators</strong> through a modern, inclusive learning platform.
        </p>

        <p className="home-subtitle" tabIndex="0">
          Built with accessibility at its core, EduAccess supports all learners — including those who are <strong>visually impaired</strong>, <strong>deaf</strong>, or <strong>neurodiverse</strong>.
        </p>

        <p className="home-subtitle" tabIndex="0">
          🎯 Learn. 📘 Teach. 🚀 Progress — all in one place.
        </p>

        <div className="home-buttons">
          <button
            onClick={() => navigate('/login')}
            className="home-button"
            aria-label="Login to EduAccess LMS"
          >
            🔐 Login
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="home-button"
            aria-label="Create a new account"
          >
            ✍️ Sign Up
          </button>
        </div>
      </div>
    </main>
  );
}

export default Home;
