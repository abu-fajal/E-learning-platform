// src/components/HeroSection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';
import bgImage from '../assets/elearning.jpg'; // ✅ Make sure this path is correct

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero-overlay">
        <h1>Unlock Your Potential with Online Learning</h1>
        <p>Access expert-led courses anytime, anywhere.</p>
        <button className="hero-btn" onClick={() => navigate('/courses')}>
          Explore Courses
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
