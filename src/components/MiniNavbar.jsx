// src/components/MiniNavbar.jsx
import React from "react";
import "./MiniNavbar.css";
import logoIcon from "../assets/logo-icon.png"; // your logo image
import profilePic from "../assets/avatar1.jpg"; // replace with actual avatar
import { FaSearch, FaBell } from "react-icons/fa";

const MiniNavbar = () => {
  return (
    <div className="mini-navbar">
      <div className="mini-left">
        <img src={logoIcon} alt="Logo" className="logo-icon" />
        <h2 className="brand">EduLearn</h2>
        <nav className="mini-links">
          <a href="/">Home</a>
          <a href="#">Categories</a>
          <a href="#">My Learning</a>
          <a href="#">Wishlist</a>
        </nav>
      </div>

      <div className="mini-right">
        <div className="search-box">
          <FaSearch className="icon" />
          <input type="text" placeholder="Search" />
        </div>
        <FaBell className="icon" />
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>
    </div>
  );
};

export default MiniNavbar;