// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedCourses from '../components/FeaturedCourses';
import SuccessStories from '../components/SuccessStories';
import WhyChoose from '../components/WhyChoose';
import Footer from '../components/Footer';

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => navigate('/login');
  const handleSignup = () => navigate('/signup');
  const goToInstructors = () => navigate('/instructors');

  return (
    <>
      <Navbar onLogin={handleLogin} onSignup={handleSignup} />
        <HeroSection />
      
      {/* ✅ Hero section */}
      <HeroSection onLogin={handleLogin} onSignup={handleSignup} />

      <FeaturedCourses />
      <SuccessStories />
      <WhyChoose />

      {/* Instructor Button */}
      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <button onClick={goToInstructors} className="instructor-btn">
          Meet Our Instructors
        </button>
      </div>

      {/* Footer outside the inner content */}
      <Footer />
    </>
  );
};

export default Home;
