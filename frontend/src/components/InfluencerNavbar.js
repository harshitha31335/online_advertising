import React from 'react';
import { Link } from 'react-router-dom'; // For navigation

function InfluencerNavbar({ influencerData }) { // Assuming influencer data is passed as a prop

  return (
    <nav className="influencer-navbar">
      <div className="profile-info">
        <img src="placeholder.png" alt="Influencer profile picture" /> {/* Replace with actual image URL */}
        <div>
          <h2>{influencerData.name}</h2> {/* Assuming influencer name is in data */}
          <p>{influencerData.followers} Followers</p> {/* Assuming followers count is in data */}
        </div>
      </div>
      <div className="navigation">
        <Link to="/influencer/requests">  {/* Link to requests page */}
          <i className="fas fa-bell"></i> {/* Font Awesome icon for requests */}
          Requests
        </Link>
      </div>
    </nav>
  );
}

export default InfluencerNavbar;
