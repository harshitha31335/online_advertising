import React from 'react';
import './Aboutus.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">Adstream: Stories That Connect</h1>

      <div className="about-us-content">
        <div className="about-us-intro">
          <p>
            Imagine a world where reaching your ideal customer feels effortless. That's the power of Adstream. We're not just another ad platform; we're storytellers.
          </p>
          <p>We bridge the gap between passionate brands and their audience. With Adstream, craft narratives that resonate, not just ads.</p>
        </div>

        <div className="about-us-call-to-action">
          <h2>Join the storytelling revolution.</h2>
          <button>Connect with your audience</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
