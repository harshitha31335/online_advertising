import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const CreateAdd = ({ onAdCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [profileUrl, setProfileUrl] = useState('');
  const [likeImpressions, setLikeImpressions] = useState(0);
  const [dislikeImpressions, setDislikeImpressions] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleLike = () => {
    setLikeImpressions(likeImpressions + 1);
    simulateSlowIncrease('like');
  };

  const handleDislike = () => {
    setDislikeImpressions(dislikeImpressions + 1);
    simulateSlowIncrease('dislike');
  };

  const simulateSlowIncrease = (type) => {
    const interval = 1000;
    const steps = 1;
    let currentCount = type === 'like' ? likeImpressions : dislikeImpressions;

    const increment = () => {
      currentCount += 1;
      if (type === 'like') {
        setLikeImpressions(currentCount);
      } else {
        setDislikeImpressions(currentCount);
      }

      if (currentCount !== (type === 'like' ? likeImpressions : dislikeImpressions)) {
        setTimeout(increment, interval);
      }
    };

    increment();
  };

  useEffect(() => {
    if (isSubmitted) {
      console.log('Ad viewed! Incrementing impression count.');
      setLikeImpressions(likeImpressions + 1);
    }
  }, [isSubmitted, likeImpressions]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newAd = { title, description, category, price, profileUrl };
    setIsSubmitted(true);
  
    try {
      await onAdCreated(newAd); 
      console.log('Ad created successfully!');
    } catch (error) {
      console.error('Error creating ad:', error);
   
    }
  };
  
  return (
    <div>
      <center>
        <h1>Create Ad</h1>
      </center>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            className="form-control"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="profileUrl">Profile URL:</label>
          <input
            type="url"
            className="form-control"
            id="profileUrl"
            value={profileUrl}
            onChange={(e) => setProfileUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Ad
        </button>
      </form>

      {isSubmitted && (
        <div className="alert alert-success mt-3" role="alert">
          Successfully created an ad!
        </div>
      )}

      <div className="mt-3">
        <strong>Like Impressions:</strong> {likeImpressions}
      </div>

      <div className="mt-3">
        <strong>Dislike Impressions:</strong> {dislikeImpressions}
      </div>
      <div className="mt-3">
        <button className="btn btn-success" onClick={handleLike}>
          👍 Like
        </button>
        <button className="btn btn-danger ml-2" onClick={handleDislike}>
          👎 Dislike
        </button>
      </div>
    </div>
  );
};

export default CreateAdd;