// src/components/CourseListing/CourseCard.jsx
import React from 'react';
import './CourseListingPage.css';

const CourseCard = ({ image, title, instructor }) => {
  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-img" />
      <div className="course-info">
        <h4 className="course-title">{title}</h4>
        <p className="course-instructor">{instructor}</p>
      </div>
    </div>
  );
};

export default CourseCard;
