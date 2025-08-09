import React from 'react';
import { useParams } from 'react-router-dom';
import instructors from '../data/instructorData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './InstructorProfilePage.css';

const InstructorProfilePage = () => {
  const { id } = useParams();
  const instructor = instructors.find(inst => inst.id === parseInt(id));

  if (!instructor) return <div className="not-found">Instructor not found.</div>;

  return (
    <>
      <Navbar />

      <div className="instructor-profile-wrapper">
        <div className="instructor-profile">
          <div className="profile-header">
            <img src={instructor.avatar} alt={instructor.name} className="avatar" />
            <h2>{instructor.name}</h2>
            <p className="title">{instructor.title}</p>
            <p className="subtitle">{instructor.expertise}</p>
            <button className="view-profile-btn">View Profile</button>
          </div>

          <div className="section">
            <h3>Qualifications</h3>
            <p>{instructor.qualifications}</p>
          </div>

          <div className="section">
            <h3>Courses Taught</h3>
            <div className="courses-taught">
              {instructor.courses.map(course => (
                <div key={course} className="course-chip">{course}</div>
              ))}
            </div>
          </div>

          <div className="section stats-box">
            <p>Total Students</p>
            <h2>{instructor.students}</h2>
          </div>

          <div className="section">
            <h3>Bio</h3>
            <p>{instructor.bio}</p>
          </div>

          <div className="section">
            <h3>Social Media</h3>
            <div className="social-links">
              {instructor.socials.twitter && (
                <a href={instructor.socials.twitter} target="_blank" rel="noreferrer">Twitter</a>
              )}
              {instructor.socials.linkedin && (
                <a href={instructor.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default InstructorProfilePage;
