// AddBrandForm.js
import React, { useState } from 'react';
import { addBrand } from './api'; 

function AddBrandForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  // Other brand fields

  const handleSubmit = async (e) => {
    e.preventDefault();
    const brandData = { name, description  };
    await addBrand(brandData);

  };

  return (
    <div>
      <h3>Add Brand</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required></textarea>
    
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddBrandForm;
