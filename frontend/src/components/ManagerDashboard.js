import React, { useState } from 'react';
import InfluencerDetails from './InfluencerDetails';
import BrandDetails from './BrandDetails';
import './ManagerDashboard.css'; 

function ManagerDashboard() {
  // Example influencer data
  const [influencers, setInfluencers] = useState([
    { id: 1, name: 'Influencer 1', bio: 'Bio of Influencer 1' },
    { id: 2, name: 'Influencer 2', bio: 'Bio of Influencer 2' },
  ]);

  const [brands, setBrands] = useState([
    { id: 1, name: 'Brand 1', description: 'Description of Brand 1' },
    { id: 2, name: 'Brand 2', description: 'Description of Brand 2' },
  ]);

  const [selectedInfluencer, setSelectedInfluencer] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleInfluencerClick = (influencer) => {
    setSelectedInfluencer(influencer);
    setSelectedBrand(null); 
  };

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
    setSelectedInfluencer(null);
  };

  const handleDeleteInfluencer = (influencerId) => {
 
    setInfluencers(influencers.filter((influencer) => influencer.id !== influencerId));
    setSelectedInfluencer(null); 
  };

  const handleDeleteBrand = (brandId) => {

    setBrands(brands.filter((brand) => brand.id !== brandId));
    setSelectedBrand(null); 
  };

  return (
    <div className="manager-dashboard">
      <h1>Manager Dashboard</h1>
      <div className="side-panels">
        <div className="influencer-list">
          <h2>Influencers</h2>
          <ul>
            {influencers.map((influencer) => (
              <li key={influencer.id} onClick={() => handleInfluencerClick(influencer)}>
                {influencer.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="brand-list">
          <h2>Brands</h2>
          <ul>
            {brands.map((brand) => (
              <li key={brand.id} onClick={() => handleBrandClick(brand)}>
                {brand.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="details">
        <h2>Details</h2>
        {selectedInfluencer ? (
          <InfluencerDetails
            influencer={selectedInfluencer}
            onDelete={handleDeleteInfluencer}
          />
        ) : selectedBrand ? (
          <BrandDetails brand={selectedBrand} onDelete={handleDeleteBrand} />
        ) : (
          <p>Select an influencer or brand to view details</p>
        )}
      </div>
    </div>
  );
}

export default ManagerDashboard;
