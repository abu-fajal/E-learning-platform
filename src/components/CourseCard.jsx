import React from 'react';
import './CourseCard.css';

const CourseCard = ({ title, instructor, image }) => {
  return (
    <div className="course-card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{instructor}</p>
    </div>
  );
};

export default CourseCard;
