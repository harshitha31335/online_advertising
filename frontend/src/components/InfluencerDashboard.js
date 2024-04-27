import React, { useState } from 'react';
import InfluencerDetailsForm from './InfluencerDetailsForm';
import './InfluencerDashboard.css';

function InfluencerDashboard() {
  const [influencer, setInfluencer] = useState(null);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [showPendingRequests, setShowPendingRequests] = useState(false);
  const [showBrandList, setShowBrandList] = useState(false);
  const [requestSent, setRequestSent] = useState(false); // State for request sent message

  const handleInfluencerDetailsSubmit = (formData) => {
    setInfluencer(formData);
    // Simulate fetching pending requests from server
    const fakePendingRequests = [{ id: 1, brandName: 'kalanikethan' }, { id: 2, brandName: 'Boost' }];
    setPendingRequests(fakePendingRequests);
  };

  const handleViewPendingRequests = () => {
    setShowPendingRequests(true);
  };

  const handleRequestAction = (requestId, action) => {
    // Simulate sending request action to server
    console.log(`Request ${requestId} ${action}`);
    // Update UI to reflect action
    const updatedRequests = pendingRequests.filter(request => request.id !== requestId);
    setPendingRequests(updatedRequests);
  };

  const handleCollabClick = () => {
    setShowBrandList(!showBrandList);
    setRequestSent(false); // Reset request sent message when collab button is clicked
  };

  const handleSendRequest = (brandId) => {
    // Implement sending request to the brand with brandId
    console.log(`Request sent to brand with ID: ${brandId}`);
    setRequestSent(true); // Set request sent message to true
  };

  const BrandList = () => {
    // Simulated list of brands with information
    const brands = [
      { id: 1, name: 'Kalanikethan', description: 'Kala Niketan stands as an iconic pioneer in the realm of Indian ethnic wear, originating in 1942 under the visionary guidance of Late Shri Jayantibhai Vachhraj Parekh. It began in a small 200-square-foot shop in Mumbai, growing from a supplier of pure silk sarees obtained from talented weavers across India to a household name. ' },
      { id: 2, name: 'Boost', description: 'Boost is a nutritional drinks brand made by Swiss company Nestlé. The brand also produces Boost Glucose Control for people with type 2 diabetes.' }
    ];

    return (
      <div>
        <h4>List of Brands</h4>
        <ul>
          {brands.map(brand => (
            <li key={brand.id}>
              <strong>{brand.name}</strong>
              <p>{brand.description}</p>
              <button onClick={() => handleSendRequest(brand.id)}>Send Request</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="influencer-dashboard">
      {!influencer && <InfluencerDetailsForm onSubmit={handleInfluencerDetailsSubmit} />}
      {influencer && (
        <div>
          <h3>Welcome, {influencer.name}!</h3>
          {!showPendingRequests ? (
            <div>
              <button onClick={handleViewPendingRequests}>View Pending Requests</button>
              <button onClick={handleCollabClick}>Collab</button>
            </div>
          ) : (
            <div>
              <h4>Pending Requests</h4>
              <ul>
                {pendingRequests.map(request => (
                  <li key={request.id}>
                    {request.brandName}{' '}
                    <button onClick={() => handleRequestAction(request.id, 'accept')}>Accept</button>{' '}
                    <button onClick={() => handleRequestAction(request.id, 'reject')}>Reject</button>
                  </li>
                ))}
              </ul>
              <button onClick={handleCollabClick}>Collab</button>
            </div>
          )}
          {showBrandList && <BrandList />}
          {requestSent && <p>Request sent successfully!</p>} {/* Display request sent message */}
        </div>
      )}
    </div>
  );
}

export default InfluencerDashboard;
