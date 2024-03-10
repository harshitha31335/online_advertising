import React from 'react';

const History = ({ recentAds }) => {
  return (
    <div>
      <h2 className="mt-4">Recent Ad Creations</h2>
      <ul>
        {recentAds.map((ad, index) => (
          <li key={index}>
            <strong>{ad.title}</strong> - {ad.description} - {ad.category} - ${ad.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
