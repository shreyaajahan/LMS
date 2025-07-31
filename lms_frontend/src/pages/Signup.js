import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Signup submitted');
  };

  return (
    <main role="main" className="login-container" aria-label="Signup Form">
      <div className="login-logo" aria-hidden="true">
        <span role="img" aria-label="LMS Logo" style={{ fontSize: '2.5rem' }}>📚</span>
      </div>
      <h2 tabIndex="0">Create Your LMS Account</h2>
      <p className="login-desc" tabIndex="0">
        Fill in the form below to register.<br />
        <span style={{ color: '#3182ce' }}>Accessible for all users.</span>
      </p>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            aria-required="true"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Select Role:</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            aria-required="true"
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            aria-required="true"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Create Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Choose a strong password"
            value={formData.password}
            onChange={handleChange}
            aria-required="true"
            required
          />
        </div>
        <button type="submit" aria-label="Submit Signup Form">Sign Up</button>
        <div className="login-footer">
          <p className="switch-link" tabIndex="0">
            Already have an account? <Link to="/login">Login here</Link>.
          </p>
        </div>
      </form>
    </main>
  );
}

export default Signup;
