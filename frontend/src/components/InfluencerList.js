import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllInfluencers } from './api'; 

function InfluencerList() {
  const [influencers, setInfluencers] = useState([]);

  useEffect(() => {
    const fetchInfluencers = async () => {
      const data = await getAllInfluencers();
      setInfluencers(data);
    };

    fetchInfluencers();
  }, []);

  return (
    <div className="influencer-list">
      <h3>Influencers</h3>
      <ul>
        {influencers.map(influencer => (
          <li key={influencer.id}>
            <Link to={`/manager/influencers/${influencer.id}`}>{influencer.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/manager/add-influencer" className="add-influencer-btn">Add Influencer</Link>
    </div>
  );
}

export default InfluencerList;
