
import React, { useState } from 'react';
import { addInfluencer } from './api'; 

function AddInfluencerForm() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const influencerData = { name, bio  };
    await addInfluencer(influencerData);
    
  };

  return (
    <div>
      <h3>Add Influencer</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Bio" required></textarea>
     
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddInfluencerForm;
