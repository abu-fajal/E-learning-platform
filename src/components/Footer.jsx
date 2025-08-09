// components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#">About Us</a>
        <a href="#">Contact</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
      <div className="socials">
        <span>🐦</span>
        <span>📸</span>
        <span>💼</span>
      </div>
      <p>@2024 EduLearn. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
