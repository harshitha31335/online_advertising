// InfluencerDetails.js
import React, { useState } from 'react';
import './InfluencerDetails.css'; 

function InfluencerDetails({ influencer, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedInfluencer, setUpdatedInfluencer] = useState(influencer);

  const handleEdit = () => {
    setIsEditing(true);
    setUpdatedInfluencer({ ...influencer }); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedInfluencer({ ...updatedInfluencer, [name]: value });
  };

  const handleUpdate = () => {
    onUpdate(updatedInfluencer);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(influencer.id);
  };

  return (
    <div className="influencer-details">
      {isEditing ? (
        <div>
          <input type="text" name="name" value={updatedInfluencer.name} onChange={handleChange} />
          <textarea name="bio" value={updatedInfluencer.bio} onChange={handleChange} />
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{influencer.name}</h3>
          <p>{influencer.bio}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default InfluencerDetails;
