import React, { useState } from 'react';
import './BrandDetails.css'; 

function BrandDetails({ brand, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedBrand, setUpdatedBrand] = useState(brand);
  const [updateSuccess, setUpdateSuccess] = useState(false); 

  const handleEdit = () => {
    setIsEditing(true);
    setUpdateSuccess(false); 
    setUpdatedBrand({ ...brand }); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBrand({ ...updatedBrand, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch('/api/brands/' + updatedBrand.id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedBrand),
      });

      if (!response.ok) {
        throw new Error('Failed to update brand');
      }

      const updatedData = await response.json();
      onUpdate(updatedData); 
      setIsEditing(false);
      setUpdateSuccess(true); 
    } catch (error) {
      console.error('Error updating brand:', error);
    
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setUpdateSuccess(false); 
  };

  const handleDelete = () => {
    onDelete(brand.id);
  };

  return (
    <div className="brand-details">
      {isEditing ? (
        <div className="edit-form">
          <input type="text" name="name" value={updatedBrand.name} onChange={handleChange} />
          <textarea name="description" value={updatedBrand.description} onChange={handleChange} />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div className="brand-info">
          <h3>{brand.name}</h3>
          <p>{brand.description}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
      {updateSuccess && <p className="update-success">Brand updated successfully!</p>} 
    </div>
  );
}

export default BrandDetails;
