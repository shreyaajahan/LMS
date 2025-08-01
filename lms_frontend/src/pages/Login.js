import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.user.role);
        localStorage.setItem('name', data.user.name);

        const role = data.user.role.toLowerCase();
        console.log("Logged in as:", role); // Optional for debugging

        if (role === 'student') {
          navigate('/student');
        } else if (role === 'teacher' || role === 'faculty') {
          navigate('/faculty');
        } else {
          navigate('/dashboard');
        }
      } else {
        alert(`❌ Login failed: ${data.message}`);
      }

    } catch (err) {
      console.error('Login error:', err);
      alert('❌ Something went wrong. Please try again.');
    }
  };

  return (
    <main role="main" className="login-container" aria-label="Login Form">
      <h2 tabIndex="0">Login to Your LMS Account</h2>
      <p className="instructions" tabIndex="0">
        Please enter your credentials to access the LMS platform.
      </p>

      <form className="login-form" onSubmit={handleSubmit} aria-describedby="login-instructions">
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

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          aria-required="true"
          required
        />

        <button type="submit" aria-label="Submit Login Form">Login</button>

        <p className="switch-link" tabIndex="0">
          Don’t have an account? <Link to="/signup">Create one here</Link>.
        </p>
      </form>
    </main>
  );
}

export default Login;
