import React, { useState } from 'react';
import './ContactPage.css'; // Import CSS file

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate sending data to backend (replace with your actual logic)
    fetch('your-backend-url', {
      method: 'POST',
      body: JSON.stringify({ name: e.target.name.value, feedback: e.target.feedback.value, email: e.target.email.value }),
    })
      .then(() => {
        console.log('Feedback submitted successfully!');
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error('Error submitting feedback:', error);
      });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>We'd love to hear from you!</p>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>123 Main Street, Jubilee Hills, Hyderabad, Telangana, India - 500033</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailto:adstream@example.com">adstream@gmail.com</a>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <a href="tel:+919875342156">+91 9875342156</a>
            </li>
            <li>
              <a href="https://wa.me/919875342156" target="_blank" rel="noreferrer">
               
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}> {/* Update handler to handleSubmit */}
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="feedback">Feedback:</label>
            <textarea id="feedback" name="feedback" required rows="5"></textarea>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <button type="submit">Send Feedback</button>
          </form>
          {isSubmitted && (
            <p className="success-message">Your feedback has been sent successfully!</p>
          )}
        </div>
        <div className="map-container">
          <h3>Find Us on Google Maps</h3>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234.5678901234567!2dLongitude!3dLatitude!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzQ0LjciTiAxMjfCsDU4JzI0LjciVw!5e0!3m2!1sen!2sus!4v1609248939852!5m2!1sen!2sus"
            width="600"
            height="400"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
