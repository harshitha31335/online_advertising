import React, { useState } from 'react';
import InfluencerDetails from './InfluencerDetails';

function ParentComponent() {
  // Example influencer data
  const [influencer, setInfluencer] = useState({
    id: 1,
    name: 'Influencer 1',
    bio: 'Bio of Influencer 1'
  });

  const handleUpdateInfluencer = (updatedInfluencer) => {
    // Perform update operation (e.g., update influencer details in the database)
    setInfluencer(updatedInfluencer);
  };

  return (
    <div>
      <h1>Manage Influencer</h1>
      <InfluencerDetails influencer={influencer} onUpdate={handleUpdateInfluencer} />
    </div>
  );
}

export default ParentComponent;
