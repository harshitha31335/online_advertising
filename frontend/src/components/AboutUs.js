import React, { useState, useEffect } from 'react';
import './Aboutus.css';

const AboutUs = () => {
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Update scroll state on scroll
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);

  return (
    <div className="about-us-container">
      <h1 className="about-us-title">Adstream: Stories That Connect</h1>

      <div className="about-us-content">
        <div className="about-us-intro">
          <p>
            Imagine a world where reaching your ideal customer feels effortless, where
            every interaction tells a captivating story. That's the power of Adstream.
            We're not just another ad platform; we're storytellers.
          </p>
          <p>
            We bridge the gap between passionate brands and their audience. With
            Adstream, you can craft narratives that resonate, not just ads.
          </p>
        </div>

        <div className="about-us-call-to-action">
          <h2>Join the storytelling revolution.</h2>
          <button className={isScrolled ? 'scrolled' : ''}>
            Connect with Your Audience
          </button>
          {/* Optional: Add a subtle animation class on hover */}
        </div>
      </div>

      {isScrolled && <div className="scroll-down-indicator" />}
    </div>
  );
};

export default AboutUs;
