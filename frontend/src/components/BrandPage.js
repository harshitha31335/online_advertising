import React, { useState } from 'react';
import im1 from '../Images/pro1.jpg'; 
import im2 from '../Images/pro2.jpg'; 
import im3 from '../Images/pro3.jpg'; 
import './BrandPage.css'; // Import the CSS file for styling

function BrandPage() {
  // Simulated brand data
  const brands = [
    { id: 1, name: 'OLAY', description: 'Olay Regenerist Microsculpting Anti-Ageing Firming Day SPF30 Cream is a moisturiser with lightweight, non greasy and skin-plumping formula. It firms skin for a lifted look and reduces the look of fine lines and wrinkles while protecting from the damaging UV rays.', imageUrl: im1 },
    { id: 2, name: 'NIKE', description: 'Nike, Inc. is an American multinational association that is involved in the design, development, manufacturing and worldwide marketing and sales of apparel, footwear, accessories, equipment and services.', imageUrl: im2 },
    { id: 3, name: 'LOREAL', description: 'Metal DX helps neutralize metals in the hair leading to less breakage and 2X shine. Water contains metals that are harmful for hair. Remove these metals with Metal DX. Metal DX by Serie Expert.', imageUrl: im3 },
    // Add more brand data as needed
  ];

  // State to track request status for each brand
  const [requestStatus, setRequestStatus] = useState({});

  // Function to handle sending request for a brand
  const handleSendRequest = (brandId) => {
    // Simulated sending request
    setRequestStatus(prevState => ({
      ...prevState,
      [brandId]: true, // Set request status for the specific brand to true
    }));
    setTimeout(() => {
      setRequestStatus(prevState => ({
        ...prevState,
        [brandId]: false, // Reset request status after 3 seconds
      }));
    }, 3000);
  };

  return (
    <div className="brand-page-container">
      <h1>Brands</h1>
      <div className="brand-list">
        {brands.map(brand => (
          <div key={brand.id} className="brand-item">
            <img
              src={brand.imageUrl}
              alt={brand.name}
              className="brand-image"
            />
            <div className="brand-details">
              <h3>{brand.name}</h3>
              <p>{brand.description}</p>
              <button onClick={() => handleSendRequest(brand.id)} className="collab-button">Collab</button>
              {requestStatus[brand.id] && <p className="request-sent-message">Request sent successfully!</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandPage;
