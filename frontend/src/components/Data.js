import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function DataPage() {
  const navigate = useNavigate(); // Hook to handle navigation

  const handleLoginClick = () => {
    navigate('/signin'); // Redirect to the signin page on button click
  };

  return (
    <div className="data-page">
      <h2><center>User Signed up Successfully</center></h2>
      <button onClick={handleLoginClick}><center>Login</center></button>
    </div>
  );
}

export default DataPage;
