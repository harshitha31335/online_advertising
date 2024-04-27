import React from 'react';
import { useHistory } from 'react-router-dom';
import BrandList from './BrandList'; // Import the BrandList component

function CollabPage({ influencer }) {
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.push('/'); // Navigate back to the InfluencerDashboard
  };

  return (
    <div>
      <h1>Collab Page</h1>
      <button onClick={handleBackButtonClick}>Back</button>
      <BrandList influencer={influencer} /> {/* Pass influencer information to the BrandList component */}
    </div>
  );
}

export default CollabPage;
