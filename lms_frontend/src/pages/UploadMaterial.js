import React, { useState } from 'react';
import './Dashboard.css'; // Use the same styles for consistency
import './UploadMaterial.css'; // Add extra styles below

function UploadMaterial() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', file);

    try {
      const res = await fetch('http://localhost:5000/api/materials/upload', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        alert('✅ Material uploaded successfully!');
        setTitle('');
        setFile(null);
      } else {
        alert('❌ Upload failed!');
      }
    } catch (err) {
      console.error(err);
      alert('❌ Error uploading file.');
    }
  };

  return (
    <main className="dashboard-container" role="main" aria-label="Upload Material">
      <h2 tabIndex="0" className="upload-title">📤 Upload Learning Materials</h2>

      <form onSubmit={handleSubmit} className="upload-form" encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="title">📌 Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="e.g. Introduction to AI"
          />
        </div>

        <div className="form-group">
          <label htmlFor="file">📁 Select File</label>
          <input
            id="file"
            type="file"
            accept=".pdf,.doc,.ppt,.pptx"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </div>

        <button type="submit" className="upload-button">🚀 Upload Material</button>
      </form>
    </main>
  );
}

export default UploadMaterial;
