const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const Material = require('../models/Material'); // ✅ Import Material model

// Setup Multer
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// POST /api/materials/upload
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { title } = req.body;
    const uploadedBy = req.headers['x-user-name'] || 'Unknown';

    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const newMaterial = new Material({
      title,
      filePath: req.file.path,
      uploadedBy,
    });

    await newMaterial.save();

    res.status(201).json({ message: 'Material uploaded successfully', material: newMaterial });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: 'Server error during upload' });
  }
});

module.exports = router;
