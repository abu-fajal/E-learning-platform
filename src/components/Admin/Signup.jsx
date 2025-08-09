import React from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Student Signup</h2>
        <form className="auth-form">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" />
          <button type="submit">Sign Up</button>
        </form>
        <p className="auth-switch">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
