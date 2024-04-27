import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Role.css'; 

function Role() {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    console.log("Selected role:", role);
    if (role === 'influencer') {
      navigate('/influencer-dashboard'); 
    } else if (role === 'brand') {
      navigate('/brand'); 
    } else if (role === 'manager') {
      navigate('/manager-dashboard'); 
    }
  };

  return (
    <div className="role-selection-container">
      <h1>Select Your Role</h1>
      <div className="role-buttons">
        <button className="role-button" onClick={() => handleRoleSelect('influencer')}>
          Influencer
          <br />
          Promote brands and connect with audiences.
        </button>
        <button className="role-button" onClick={() => handleRoleSelect('brand')}>
          Brand
          <br />
          Connect with influencers and promote your products.
        </button>
        <button className="role-button" onClick={() => handleRoleSelect('manager')}>
          Manager
          <br />
          Manage influencers and brand partnerships.
        </button>
      </div>
    </div>
  );
}

export default Role;
