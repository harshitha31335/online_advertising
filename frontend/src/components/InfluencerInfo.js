import React from 'react';
import InfluencerNavbar from './components/InfluencerNavbar';

function InfluencerInfo() {
  const influencerData = { name: 'John Doe', followers: 10000 }; // Replace with actual data fetching logic

  return (
    <div className="influencer-info">
      <InfluencerNavbar influencerData={influencerData} /> {/* Pass influencer data as a prop */}
      <div className="request-brands">
        <h2>Request for Brands</h2>
        <p>Find and apply for collaboration opportunities.</p>
        <button onClick={() => navigate('/influencer/brands')}>Browse Brands</button> {/* Navigate to brand browsing page */}
      </div>
    </div>
  );
}

export default InfluencerInfo;
