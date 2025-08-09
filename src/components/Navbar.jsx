import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate(); // ✅ Navigation hook

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="nav-logo">EduLearn</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/courses" className="nav-link">Courses</Link></li>
        <li><Link to="/instructors" className="nav-link">Instructors</Link></li>
        <li><Link to="/pricing" className="nav-link">Pricing</Link></li>
      </ul>

      <div className="nav-actions">
        <input type="text" placeholder="Search" className="search-input" />
        
        {/* 🔁 Use navigate instead of props */}
        <button className="signup" onClick={() => navigate('/signup')}>Sign up</button>
        <button className="login" onClick={() => navigate('/login')}>Log in</button>
      </div>
    </nav>
  );
};

export default Navbar;
