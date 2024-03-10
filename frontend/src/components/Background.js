

import React from 'react';
import backgroundImage from '../Images/bg.avif'; // Import your image

const Background = () => {
    return (
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center', // Set background position to center
          width: '100%',
          height: '100%',
          position: 'fixed',
          zIndex: -1 // Ensures the background stays at the back
        }}
      />
    );
  };
  
  export default Background;