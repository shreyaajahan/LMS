const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
  title: { type: String, required: true },
  filePath: { type: String, required: true },
  uploadedBy: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Material', materialSchema);
