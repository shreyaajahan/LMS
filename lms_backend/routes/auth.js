const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const User = require('../models/User');

// Register
router.post('/register', register);

// Login
router.post('/login', login);

// Check if email is already used with a role
router.post('/check-role', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ exists: false });
    }

    return res.json({ exists: true, role: user.role });
  } catch (err) {
    console.error('Error checking role:', err);
    return res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
