import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. Check if email is already used for a different role
      const checkRes = await fetch("http://localhost:5000/api/auth/check-role", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email }),
      });

      const checkData = await checkRes.json();

      if (checkData.exists && checkData.role !== formData.role) {
        alert(`❌ This email is already registered as a ${checkData.role}. You cannot register it again as a ${formData.role}.`);
        return;
      }

      // 2. Register the new user
      const signupRes = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const signupData = await signupRes.json();

      if (signupRes.ok) {
        alert("✅ Signup successful!");
        navigate('/login');
      } else {
        alert(`❌ Signup failed: ${signupData.message}`);
      }

    } catch (error) {
      console.error("Signup error:", error);
      alert("❌ Something went wrong. Please try again.");
    }
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
