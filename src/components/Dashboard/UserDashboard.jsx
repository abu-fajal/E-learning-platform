import React from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'; // ✅ Add NavLink here
import './UserDashboard.css';

import userImg from '../../assets/user.jpg';
import pythonImg from '../../assets/python-course.jpg';
import mlImg from '../../assets/ml-course.jpg';
import cert1 from '../../assets/certificate1.jpg';
import cert2 from '../../assets/certificate2.jpg';
import recent1 from '../../assets/recent1.jpg';
import recent2 from '../../assets/recent2.jpg';
import MyCourses from '../../components/Dashboard/MyCourses';
import Progress from '../../components/Dashboard/Progress';
import Settings from '../../components/Dashboard/Settings';
import Wishlist from '../../components/Dashboard/Wishlist';
import Certificates from '../../components/Dashboard/Certificates';



const UserDashboard = () => {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="user-info">
          <img src={userImg} alt="User" className="user-avatar" />
          <h3>Abu Fajal</h3>
        </div>
        <nav className="sidebar-nav">
          <NavLink to="courses" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            My Courses
          </NavLink>
          <NavLink to="progress" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Progress
          </NavLink>
          <NavLink to="settings" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Settings
          </NavLink>
          <NavLink to="wishlist" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Wishlist
          </NavLink>
          <NavLink to="certificates" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Certificates
          </NavLink>
        </nav>
      </aside>


      {/* Main Dashboard */}
      <main className="dashboard-main">
        <h1>My Courses</h1>
          <Routes>
          {/* Default Redirect to Courses */}
          <Route index element={<Navigate to="courses" replace />} />

          {/* Individual Pages */}
          <Route path="courses" element={<MyCourses />} />
          <Route path="progress" element={<Progress />} />
          <Route path="settings" element={<Settings />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="certificates" element={<Certificates />} />
        </Routes>

        {/* Ongoing Courses */}
        <section className="course-section">
          <h2>Ongoing Courses</h2><br />

          <div className="course-card">
            <div className="course-info">
              <p className="status">In progress</p>
              <h3>Advanced Data Analysis with Python</h3>
              <p className="instructor">Instructor: Dr. Evelyn Reed</p>
              
            </div>
            <img src={pythonImg} alt="Python" className="course-thumbnail" /><br />
            <button className="continue-btn">Continue</button>
          </div>
          <div className="progress-bar"><div style={{ width: '60%' }} /></div>
          <span className="progress-text">60%</span>

          <div className="course-card">
            <div className="course-info">
              <p className="status">In progress</p>
              <h3>Machine Learning Fundamentals</h3>
              <p className="instructor">Professor Ethan Bennett</p>
             
            </div>
            <img src={mlImg} alt="ML" className="course-thumbnail" /><br />
             <button className="continue-btn">Continue</button>
          </div>
          <div className="progress-bar"><div style={{ width: '40%' }} /></div>
          <span className="progress-text">40%</span>
        </section>

        {/* Recently Viewed */}
        <section className="recent-section">
          <h2>Recently Viewed</h2>
          <div className="recent-courses">
            <div className="recent-card">
              <img src={recent1} alt="Data Science" />
              <h4>Data Science Essentials</h4>
              <p>Learn the basics of data science.</p>
            </div>
            <div className="recent-card">
              <img src={recent2} alt="Python" />
              <h4>Python for Beginners</h4>
              <p><span className="highlight">Introduction to Python</span> programming.</p>
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section className="certificates-section">
          <h2>Earned Certificates</h2>
          <div className="certificates">
            <div className="certificate-card">
              <img src={cert1} alt="Certificate 1" />
              <p>Certificate of Completion: Advanced Data Analysis with Python</p>
            </div>
            <div className="certificate-card">
              <img src={cert2} alt="Certificate 2" />
              <p>Certificate of Completion: Machine Learning Fundamentals</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserDashboard;
