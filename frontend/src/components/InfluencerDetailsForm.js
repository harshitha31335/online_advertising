import React, { useState } from 'react';
import './InfluencerDetailsForm.css'; // Import the CSS file for styling

function InfluencerDetailsForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    followers: '',
    name: '',
    id: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="influencer-details-form">
      <h3>Enter Influencer Details</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Followers:</label>
          <input type="text" name="followers" value={formData.followers} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>ID:</label>
          <input type="text" name="id" value={formData.id} onChange={handleChange} />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default InfluencerDetailsForm;
