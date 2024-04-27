import React from 'react';

function InfluencerBlock() {
  return (
    <div className="influencer-block">
      <h2>Influencer</h2>
      <p>Public figures who promote brands to their audience.</p>
      <button onClick={() => console.log("Selected: Influencer")}>Select</button>
    </div>
  );
}

export default InfluencerBlock;
